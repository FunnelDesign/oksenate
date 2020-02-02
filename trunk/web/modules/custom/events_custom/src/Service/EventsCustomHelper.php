<?php

namespace Drupal\events_custom\Service;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Database\Driver\mysql\Connection;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Messenger\MessengerTrait;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\node\Entity\Node;
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
    if (!empty($new_data["date_finish"])) {
      $node->set('field_comt_evt_to_date', $new_data["date_finish"]);
    }
    if (!empty($new_data["desc"])) {
      $node->set('field_comt_evt_subtitle', $new_data["desc"]);
    }
    if (!empty($new_data["room"])) {
      $node->set('field_comt_evt_room_reference', $new_data["room"]);
    }
    if (!empty($new_data["location"])) {
      $node->set('field_comt_evt_loc', $new_data["location"]);
    }
    if (!empty($new_data["committee_tid"])) {
      $node->set('field_comt_evt_committee', $new_data["committee_tid"]);
    }

    if ($op == 'create') {
      $node->set('status', 0);
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
    $result['title'] = !empty($event['Title']) ? $event['Title'] : '';
    $result['id'] = !empty($event['Id']) ? $event['Id'] : '';
    $last_modified = !empty($event['LastModifiedTime']) ? $event['LastModifiedTime'] : '';
    $result['committee_tid'] = !empty($event['committee_tid']) ? $event['committee_tid'] : '';
    $date = !empty($event['ScheduledStart']) ? $event['ScheduledStart'] : '';
    $date_finish = !empty($event['ScheduledEnd']) ? $event['ScheduledEnd'] : '';
    $result['desc'] = !empty($event['Description']) ? $event['Description'] : '';
    $result['room'] = !empty($event['location_room']) ? $event['location_room'] : '';
    $result['location'] = (!empty($event['Location']) && empty($result['room'])) ? $event['Location'] : '';

    $result['last_modified'] = $this->normalizeExternalDateData($last_modified);
    $result['date'] = $this->normalizeExternalDateData($date);
    $result['date_finish'] = $this->normalizeExternalDateData($date_finish);

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
        ->condition('n.type', $bundle);

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

  /**
   * Get all events.
   * @param string $from
   * Format Ymd.
   * @param string $to
   *
   * @return array
   * @throws \Exception
   */
  public function getAllEvents($from = '20160101', $to = '') {
    $all_events = [];
    $to = !empty($to) ? $to : 'now';
    $date_obj = new DrupalDateTime($from, 'UTC');
    $date_obj_to = new DrupalDateTime($to, 'UTC');
    $date_interval = new \DateInterval('P1M');

    while ($date_obj <= $date_obj_to) {
      $date = $date_obj->format('Ymd');
      $date_obj->add($date_interval);
      $url = 'https://sg001-harmony.sliq.net/00282/Harmony/en/api/Data/GetContentEntityByMonth/' . $date . '/-1';
      $events = $this->sendJsonRequest($url);
      $events = !empty($events) && is_array($events) ? $events : [];
      $all_events = array_merge($all_events, $events);
    }

    $all_events = $this->setRoomData($all_events);

    return $all_events;
  }

  /**
   * Get week
   * @return string
   */
  public function getWeekEvents() {
    $date = date("Ymd", strtotime('monday this week'));
    $url = 'https://sg001-harmony.sliq.net/00282/Harmony/en/api/Data/GetContentEntityByWeek/' . $date . '/-1';
    $events = $this->sendJsonRequest($url);
    $events = !empty($events) && is_array($events) ? $events : [];
    $events = $this->setRoomData($events);

    return $events;
  }

  /**
   * Send Json request.
   * @param $url
   *
   * @return array|mixed|\Psr\Http\Message\StreamInterface
   */
  public function sendJsonRequest($url) {
    $client = \Drupal::httpClient();

    try {
      $response = $client->get($url);

      if ($response->getStatusCode() == 200) {
        $data = $response->getBody();
        $data = Json::decode($data);
      }
      else {
        \Drupal::logger('events_custom')->error(t('Request of "@url" failed with error "@error" (HTTP code @code).', [
          '@url' => $url,
          '@error' => $response->getReasonPhrase(),
          '@code' => $response->getStatusCode()
        ]));
      }

      return $data;
    }
    catch (RequestException $e) {
      watchdog_exception('events_custom', $e);
    }
  }

  public function setRoomData($events) {
    $rooms = [
      '/230/' => ['url' => '/room-230', 'title' => 'room 230', 'room_nid' => 7413],
      '/419.*b/' => ['url' => '/room-419-b', 'title' => 'room 419-b', 'room_nid' => 7416],
      '/419.*c/' => ['url' => '/room-419-c', 'title' => 'room 419-c', 'room_nid' => 7417],
      '/419/' => ['url' => '/room-419', 'title' => 'room 419', 'room_nid' => 7414],
      '/511.*a/' => ['url' => '/room-511a', 'title' => 'room 511a', 'room_nid' => 10507],
      '/535/' => ['url' => '/room-535', 'title' => 'room 535', 'room_nid' => 10508],
    ];
    $ids = [];
    list($first_level, $second_level) = $this->getAllCommittees();

    if (!empty($events)) {
      foreach ($events as $key => &$event) {
        $id = !empty($event["Id"]) ? $event["Id"] : '';

        if (!empty($ids[$id])) {
          unset($events[$key]);
        }
        else {
          //falback value
          $ids[$id] = $key;
          $event['location_url'] = '/audio-video';
          $event['location_title'] = 'view';
          if (!empty($event['Location'])) {
            $loc = strtolower($event['Location']);
            foreach ($rooms as $pattern => $room_info) {
              if (preg_match($pattern, $loc)) {
                $event['location_url'] = $room_info['url'];
                $event['location_title'] = $room_info['title'];
                $event['location_room'] = $room_info['room_nid'];
                break;
              }
            }
          }

          if (!empty($event["Title"])) {
            $event['committee_tid'] = $this->getCommitteeTidByTitle($event["Title"], $first_level, $second_level);
          }
        }
      }
    }

    return array_values($events);
  }

  public function getCommitteeTidByTitle($title, $first_level, $second_level) {
    $event_tid = '';

    if (strpos($title, 'Subcommittee') !== FALSE) {
      $first_array = $second_level;
      $second_array = $first_level;
    }
    else {
      $first_array = $first_level;
      $second_array = $second_level;
    }

    foreach ($first_array as $tid => $name) {
      $spec_name = str_replace(' and ', ' & ', $name);

      if (strpos($title, $name) !== FALSE) {
        $event_tid = $tid;
      }
      else if (strpos($title, $spec_name) !== FALSE) {
        $event_tid = $tid;
      }
    }

    if (empty($event_tid)) {
      foreach ($second_array as $tid => $name) {
        $spec_name = str_replace(' and ', ' & ', $name);

        if (strpos($title, $name) !== FALSE) {
          $event_tid = $tid;
        }
        else if (strpos($title, $spec_name) !== FALSE) {
          $event_tid = $tid;
        }
      }
    }

    return $event_tid;
  }

  public function getAllCommittees() {
    $tree = \Drupal::entityTypeManager()->getStorage('taxonomy_term')
      ->loadTree('committees', 0, NULL, FALSE);
    $first_level_tids = [];
    $second_level_tids = [];
    foreach ($tree as $term) {
      $parent = (!empty($term->parents) && isset($term->parents[0])) ? $term->parents[0] : '';
      if ($parent === '0') {
        $first_level_tids[$term->tid] = $term->name;
      }
      else {
        $second_level_tids[$term->tid] = $term->name;
      }
    }

    return [$first_level_tids, $second_level_tids];
  }
}
