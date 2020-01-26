<?php

namespace Drupal\events_custom\Service;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Database\Driver\mysql\Connection;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Messenger\MessengerTrait;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\node\Entity\Node;
use Drupal\time_field\Time;
use GuzzleHttp\Exception\RequestException;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\node\NodeStorageInterface;

/**
 * Class EventsCustomHelper.
 */
class EventsCustomHelper {

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
   * Creates new node.
   * @param $data
   * @param $taxonomy
   *
   * @return int|string|null
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function createNode($data) {
    $date_obj = new DrupalDateTime('now', DateTimeItemInterface::STORAGE_TIMEZONE);
    $node = Node::create([
      'type' => 'committee_events',
      'created' => $date_obj->getTimestamp(),
    ]);

    $this->updateNodeFields($node, $data, 'create');
    $node->enforceIsNew();

    $node->save();
    $nid = $node->id();

    return $nid;
  }

  /**
   * Updates existing node.
   * @param $nid
   * @param $data
   * @param $taxonomy
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function updateNode($nid, $data) {
    $node = $this->nodeStorage->load($nid);
    if (!empty($node)) {
      $this->updateNodeFields($node, $data);
      $node->save();
    }
  }

  /**
   * Delete nodes.
   * @param $nids
   * @return string
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function deleteNodes($nids) {
    if (empty($nids)) {
      return '';
    }

    $nodes = $this->nodeStorage->loadMultiple($nids);
    if (!empty($nodes)) {
      $this->nodeStorage->delete($nodes);
    }
  }

  /**
   * Unpublish node.
   * @param $nid
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function unpublishNode($nid) {
    $node = $this->nodeStorage->load($nid);
    if (!empty($node)) {
      $node->setPublished(FALSE);
      $node->save();
    }
  }

  /**
   * Updates node fields.
   * @param $node
   * @param $data
   * @param $taxonomy
   * @param $op
   */
  public function updateNodeFields(&$node, $data, $op = 'update') {
    $new_data = $this->prepareNodeData($data);

    if (!empty($new_data['title'])) {
      $node->set('title', $new_data['title']);
    }
    if (!empty($new_data["id"])) {
      $node->set('field_comt_evt_src_id', $new_data["id"]);
    }
    if (!empty($new_data["last_modified"])) {
      $node->set('field_comt_evt_src_mod_date', $new_data["last_modified"]);
    }
    if (!empty($new_data["date"])) {
      $node->set('field_comt_evt_date', $new_data["date"]);
    }
    if (!empty($new_data["desc"])) {
      $node->set('field_comt_evt_subtitle', $new_data["desc"]);
    }
    if (!empty($new_data["room"])) {
      $node->set('field_comt_evt_room_reference', $new_data["room"]);
    }
  }

  /**
   * Prepares field data.
   * @param $data
   *
   * @return array
   */
  public function prepareNodeData($event) {
    $result = [];
    $result['title'] = !empty($event->Title) ? $event->Title : '';
    $result['id'] = !empty($event->Id) ? $event->Id : '';
    $last_modified = !empty($event->LastModifiedTime) ? $event->LastModifiedTime : '';
    $result['committee_id'] = !empty($event->CommitteeId) ? $event->CommitteeId : '';
    $date = !empty($event->ScheduledStart) ? $event->ScheduledStart : '';
    $result['desc'] = !empty($event->Description) ? $event->Description : '';
    $result['room'] = !empty($event->location_room) ? $event->location_room : '';

    $result['last_modified'] = $this->normalizeExternalDateData($last_modified);
    $result['date'] = $this->normalizeExternalDateData($date);

    return $result;
  }

  /**
   * Normalize Date field.
   * @param $date
   * @param $format
   *
   * @return false|string
   */
  public function normalizeDateData($date, $format = DateTimeItemInterface::DATETIME_STORAGE_FORMAT) {
    if (empty($date)) {
      return '';
    }

    $config = \Drupal::config('system.date');
    $default_timezone = $config->get('timezone.default');
    $date_obj = new DrupalDateTime($date, DateTimeItemInterface::STORAGE_TIMEZONE);
    $date_obj->setTimezone(new \DateTimeZone($default_timezone));
    $new_date = $date_obj->format($format);

    return $new_date;
  }

  /**
   * Normalize Date field.
   * @param $date
   * @param $format
   *
   * @return false|string
   */
  public function normalizeExternalDateData($date, $format = DateTimeItemInterface::DATETIME_STORAGE_FORMAT) {
    if (empty($date)) {
      return '';
    }

    $config = \Drupal::config('system.date');
    $default_timezone = $config->get('timezone.default');
    $date_obj = new DrupalDateTime($date, $default_timezone);
    $date_obj->setTimezone(new \DateTimeZone(DateTimeItemInterface::STORAGE_TIMEZONE));
    $new_date = $date_obj->format($format);

    return $new_date;
  }

  /**
   * Get nodes by type.
   * @param $bundle
   *
   * @return mixed
   */
  public function getNodesByType($bundle) {
    try {
      $query = $this->database->select('node_field_data', 'n')
        ->fields('n', ['nid'])
        ->condition('n.type', $bundle)
        ->condition('n.status', 1);

      $query->innerJoin('node__field_comt_evt_src_id', 'src_id', 'src_id.entity_id = n.nid AND src_id.deleted = 0');
      $query->fields('src_id', ['field_comt_evt_src_id_value']);

      $query->leftJoin('node__field_comt_evt_src_mod_date', 'src_mod', 'src_mod.entity_id = n.nid AND src_mod.deleted = 0');
      $query->fields('src_mod', ['field_comt_evt_src_mod_date_value']);

//      $a = $query->__toString();

      $result = $query->execute()->fetchAllAssoc('nid');
      $result = !empty($result) ? $result : [];
      $nodes = [];

      foreach ($result as $nid => $value) {
        $src_id = !empty($value->field_comt_evt_src_id_value) ? $value->field_comt_evt_src_id_value : '';
        $src_modified = !empty($value->field_comt_evt_src_mod_date_value) ? $value->field_comt_evt_src_mod_date_value : '';

        $nodes[$src_id] = [
          'nid' => $nid,
          'src_modified' => $this->normalizeDateData($src_modified),
        ];
      }

      return $nodes;
    }
    catch (\Exception $e) {
      \Drupal::logger('events_custom')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }
}
