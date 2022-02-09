<?php

namespace Drupal\senate_votes\Service;

use Drupal\Component\Serialization\Json;
use Drupal\Component\Utility\UrlHelper;
use Drupal\Core\Database\Driver\mysql\Connection;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Messenger\MessengerTrait;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\node\NodeStorageInterface;
use Drupal\paragraphs\Entity\Paragraph;
use GuzzleHttp\Exception\RequestException;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Drupal\Component\Utility\Html;

/**
 * Class SenateVotesApiHelper.
 */
class SenateVotesApiHelper {

  use MessengerTrait;

  /**
   * Drupal\Core\Database\Driver\mysql\Connection definition.
   *
   * @var \Drupal\Core\Database\Driver\mysql\Connection
   */
  protected $database;

  /**
   * @var EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * @var NodeStorageInterface
   */
  protected $nodeStorage;

  /**
   * EventsCustomHelper constructor.
   *
   * @param \Drupal\Core\Database\Driver\mysql\Connection $database
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function __construct(Connection $database, MessengerInterface $messenger, EntityTypeManagerInterface $entity_type_manager) {
    $this->database = $database;
    $this->setMessenger($messenger);
    $this->entityTypeManager = $entity_type_manager;
    $this->nodeStorage = $this->entityTypeManager->getStorage('node');
  }

  /**
   * Create new paragraph.
   *
   * @param $parent
   * @param $parent_field
   * @param $data
   *
   * @return \Drupal\Core\Entity\EntityBase|\Drupal\Core\Entity\EntityInterface|\Drupal\paragraphs\Entity\Paragraph|string
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function createParagraph($parent, $parent_field, $data) {
    if (empty($parent) || !is_object($parent) || empty($parent_field) || empty($data)) {
      return '';
    }

    $paragraph = Paragraph::create([
      'type' => $parent->bundle(),
      'parent_id' => $parent->id(),
      'parent_type' => 'node',
      'parent_field_name' => $parent_field,
    ]);

    $this->updateParagraphFields($paragraph, $data, 'create');

    $paragraph->isNew();
    $paragraph->save();

    return !empty($paragraph) ? $paragraph : '';
  }

  /**
   * Update paragraph's fields.
   *
   * @param $paragraph
   * @param $data
   *
   * @return void
   */
  public function updateParagraphFields(&$paragraph, $data) {
    if (!empty($data['date'])) {
      $paragraph->set('field_senate_votes_date', $data["date"]);
    }

    if (!empty($data['measure'])) {
      $paragraph->set('field_senate_votes_measure', $data["measure"]);
    }
    if (!empty($data['measure_link']) && UrlHelper::isValid($data['measure_link'], TRUE)) {
      $paragraph->set('field_senate_votes_measure_link', $data['measure_link']);
    }

    if (!empty($data['author'])) {
      $paragraph->set('field_senate_votes_author', $data["author"]);
    }
    if (!empty($data['author_link']) && UrlHelper::isValid($data['author_link'], TRUE)) {
      $paragraph->set('field_senate_votes_author_link', $data['author_link']);
    }

    if (!empty($data['fid'])) {
      $paragraph->set('field_senate_votes_action_file', [
        'target_id' => $data['fid'],
        'description' => $data['file_name'],
      ]);
    }
    if (isset($data['yeas']) && is_numeric($data["yeas"])) {
      $paragraph->set('field_senate_votes_yeas', $data["yeas"]);
    }
    if (isset($data['nays']) && is_numeric($data["nays"])) {
      $paragraph->set('field_senate_votes_nays', $data["nays"]);
    }

    if (!empty($data['action'])) {
      $url = !empty($data['action_link']) ? $data['action_link'] : 'route:<nolink>';
      $paragraph->set('field_senate_votes_action_link',
        [
          'uri' => $url,
          'title' => $data["action"],
        ]
      );
    }
  }

  /**
   * Delete paragraph.
   *
   * @param $pids
   *
   * @return void
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function deleteParagraph($pids) {
    $storage_handler = \Drupal::entityTypeManager()->getStorage('paragraph');
    $entities = $storage_handler->loadMultiple($pids);
    if (!empty($entities)) {
      $storage_handler->delete($entities);

      try {
        $this->database->delete('node__field_senate_votes')
          ->condition('field_senate_votes_target_id', $pids, 'IN')
          ->execute();
      }
      catch (\Exception $e) {
        \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
            '%message' => $e->getMessage(),
          ]));
      }
    }
  }

  /**
   * Get votes.
   *
   * @return array
   */
  public function getDbVotesInfo($source) {
    $votes = $this->getDbVotes($source);
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';
    $sorted_votes = [];
    $pids = [];

    foreach ($votes as $vote) {
      $date = $vote->field_senate_votes_date_value ?? '';
      $measure = $vote->field_senate_votes_measure_value ?? '';
      $author = $vote->field_senate_votes_author_value ?? '';
      $action = $vote->field_senate_votes_action_link_title ?? '';
      $id = $this->getVoteId($date, $measure, $author, $action);
      $year = $senate_votes_helper->getYear($date);
      $pid = $vote->field_senate_votes_target_id ?? '';

      if (!empty($id)) {
        $sorted_votes[$year][$id] = [
          'nid' => $vote->nid,
          'date' => $vote->field_senate_votes_date_value
        ];
      }
      if (!empty($pid)) {
        $pids[] = $pid;
      }
    }

    return [
      'votes' => $sorted_votes,
      'pids' => $pids,
    ];
  }

  /**
   * Get vote's id.
   *
   * @param $date
   * @param $measure
   * @param $author
   * @param $action
   *
   * @return string
   */
  public function getVoteId($date, $measure, $author, $action) {
    $id = $date . ' ' . $measure . ' ' . $author . ' ' . $action;
    $id = trim($id);
    return Html::getId($id);
  }

  /**
   * Get votes from db.
   *
   * @return array|void
   */
  public function getDbVotes($source) {
    try {
      $query = $this->database->select('node_field_data', 'n')
        ->fields('n', ['nid', 'status', 'created'])
        ->condition('n.type', 'senate_votes');

      $query->innerJoin('node__field_senate_votes', 'votes', 'votes.entity_id = n.nid AND votes.deleted = 0');
      $query->fields('votes', ['field_senate_votes_target_id']);

      $query->leftJoin('node__field_senate_votes_type', 'type', 'type.entity_id = n.nid AND type.deleted = 0');
      $query->condition('type.field_senate_votes_type_value', $source);

      $query->leftJoin('paragraph__field_senate_votes_date', 'votes_date', 'votes.field_senate_votes_target_id = votes_date.entity_id AND votes_date.deleted = 0');
      $query->fields('votes_date', ['field_senate_votes_date_value']);

      $query->leftJoin('paragraph__field_senate_votes_measure', 'votes_measure', 'votes.field_senate_votes_target_id = votes_measure.entity_id AND votes_measure.deleted = 0');
      $query->fields('votes_measure', ['field_senate_votes_measure_value']);

      $query->leftJoin('paragraph__field_senate_votes_author', 'votes_author', 'votes.field_senate_votes_target_id = votes_author.entity_id AND votes_author.deleted = 0');
      $query->fields('votes_author', ['field_senate_votes_author_value']);

      $query->leftJoin('paragraph__field_senate_votes_action_link', 'votes_action', 'votes.field_senate_votes_target_id = votes_action.entity_id AND votes_action.deleted = 0');
      $query->fields('votes_action', ['field_senate_votes_action_link_title']);

      $query->orderBy('votes_date.field_senate_votes_date_value');

//      $a = $query->__toString();

      $result = $query->execute()->fetchAll();

      return !empty($result) ? $result : [];
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }
}
