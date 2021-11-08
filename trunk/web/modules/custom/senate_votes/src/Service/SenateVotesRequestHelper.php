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

/**
 * Class SenateVotesRequestHelper.
 */
class SenateVotesRequestHelper {

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
   * Send Xml request.
   * @param $url
   *
   * @return array|mixed|\Psr\Http\Message\StreamInterface
   */
  public function sendXmlRequest($url) {
    $client = \Drupal::httpClient();
    $data = '';

    try {
      $response = $client->get($url);

      if ($response->getStatusCode() == 200) {
        $data = $response->getBody();
        $xml_encode = new XmlEncoder();
        $data = $xml_encode->decode($data, 'xml');
      }
      else {
        \Drupal::logger('senate_votes')->error(t('Request of "@url" failed with error "@error" (HTTP code @code).', [
          '@url' => $url,
          '@error' => $response->getReasonPhrase(),
          '@code' => $response->getStatusCode()
        ]));
      }

      return $data;
    }
    catch (RequestException $e) {
      watchdog_exception('senate_votes', $e);
    }
  }

  /**
   * Get node by first row data.
   * @param $data
   *
   * @return string
   */
  public function getNodeByRowData($data) {
    if (empty($data)) {
      return '';
    }

    $date = !empty($data["@date"]) ? $data["@date"] : '';
    $measure = !empty($data["@measure"]) ? $data["@measure"] : '';
    $author = !empty($data["@author"]) ? $data["@author"] : '';

    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    try {
      $query = $this->database->select('node_field_data', 'n')
        ->fields('n', ['nid', 'status', 'created'])
        ->condition('n.type', 'senate_votes');

      $query->innerJoin('node__field_senate_votes', 'votes', 'votes.entity_id = n.nid AND votes.deleted = 0');

      if (!empty($date) && !empty($events_sync_helper)) {
        $date = $events_sync_helper->normalizeExternalDateData($date, DateTimeItemInterface::DATE_STORAGE_FORMAT);
        $query->leftJoin('paragraph__field_senate_votes_date', 'votes_date', 'votes.field_senate_votes_target_id = votes_date.entity_id AND votes_date.deleted = 0');
        $query->fields('votes_date', ['field_senate_votes_date_value']);
        $query->condition('votes_date.field_senate_votes_date_value', $date);
      }

      if (!empty($measure)) {
        $query->leftJoin('paragraph__field_senate_votes_measure', 'votes_measure', 'votes.field_senate_votes_target_id = votes_measure.entity_id AND votes_measure.deleted = 0');
        $query->fields('votes_measure', ['field_senate_votes_measure_value']);
        $query->condition('votes_measure.field_senate_votes_measure_value', $measure);
      }

      if (!empty($author)) {
        $query->leftJoin('paragraph__field_senate_votes_author', 'votes_author', 'votes.field_senate_votes_target_id = votes_author.entity_id AND votes_author.deleted = 0');
        $query->fields('votes_author', ['field_senate_votes_author_value']);
        $query->condition('votes_author.field_senate_votes_author_value', $author);
      }

      $query->orderBy('n.created', 'ASC');

      //      $a = $query->__toString();

      $result = $query->execute()->fetchAll();
      $result = !empty($result) ? $result : [];
      $result_nid = '';

      if (!empty($result[0]) && ($result[0]->status === '1')) {
        $result_nid = $result[0]->nid;
      }
      else {
        foreach ($result as $node) {
          if (empty($result_nid) && ($node->status === '1')) {
            $result_nid = $node->nid;
          }
        }

        if (empty($result_nid) && !empty($result[0])) {
          $result_nid = $result[0]->nid;
        }
      }

      return $result_nid;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }

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

  public function updateParagraphFields(&$paragraph, $data, $op = 'update') {
    $new_data = $this->prepareParagraphData($data);

    if (!empty($new_data['date'])) {
      $paragraph->set('field_senate_votes_date', $new_data["date"]);
    }

    if (!empty($new_data['measure'])) {
      $paragraph->set('field_senate_votes_measure', $new_data["measure"]);
    }
    if (!empty($new_data['measure_link']) && UrlHelper::isValid($new_data['measure_link'], TRUE)) {
      $paragraph->set('field_senate_votes_measure_link', $new_data['measure_link']);
    }

    if (!empty($new_data['author'])) {
      $paragraph->set('field_senate_votes_author', $new_data["author"]);
    }
    if (!empty($new_data['author_link']) && UrlHelper::isValid($new_data['author_link'], TRUE)) {
      $paragraph->set('field_senate_votes_author_link', $new_data['author_link']);
    }

    if (!empty($new_data['fid'])) {
      $paragraph->set('field_senate_votes_action_file', [
        'target_id' => $new_data['fid'],
        'description' => $new_data['file_name'],
      ]);
    }
    if (isset($new_data['yeas']) && is_numeric($new_data["yeas"])) {
      $paragraph->set('field_senate_votes_yeas', $new_data["yeas"]);
    }
    if (isset($new_data['nays']) && is_numeric($new_data["nays"])) {
      $paragraph->set('field_senate_votes_nays', $new_data["nays"]);
    }

    if (!empty($new_data['action'])) {
      $url = !empty($new_data['action_link']) ? $new_data['action_link'] : 'route:<nolink>';
      $paragraph->set('field_senate_votes_action_link',
        [
          'uri' => $url,
          'title' => $new_data["action"],
        ]
      );
    }
  }

  public function prepareParagraphData($data) {
    $new_data = [];
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    $new_data['measure'] = !empty($data['@measure']) ? $data['@measure'] : '';
    $new_data['measure_link'] = !empty($data['@measureLink']) ? $data['@measureLink'] : '';
    $new_data['author'] = !empty($data['@author']) ? $data['@author'] : '';
    $new_data['author_link'] = !empty($data['@authorLink']) ? $data['@authorLink'] : '';
    $new_data['yeas'] = isset($data['@yeas']) && is_numeric($data['@yeas']) ? $data['@yeas'] : '';
    $new_data['nays'] = isset($data['@nays']) && is_numeric($data['@nays']) ? $data['@nays'] : '';
    $new_data['action'] = !empty($data['@action']) ? $data['@action'] : 'action';
    $new_data['action_link'] = !empty($data['@actionLink']) ? $data['@actionLink'] : '';

    if (!empty($events_sync_helper) && !empty($data['@date'])) {
      $new_data['date'] = $events_sync_helper->normalizeExternalDateData($data['@date'], DateTimeItemInterface::DATE_STORAGE_FORMAT);
    }

    return $new_data;
  }
}
