<?php

namespace Drupal\events_custom\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;

/**
 * A events_custom worker.
 *
 * @QueueWorker(
 *   id = "events_custom",
 *   title = @Translation("Events custom"),
 *   cron = {"time" = 60}
 * )
 */
class EventsCustom extends QueueWorkerBase {

  /**
   * {@inheritdoc}
   */
  public function processItem($data) {
    $type = !empty($data->type) ? $data->type : '';
    $update_all = !empty($data->update_all) ? $data->update_all : FALSE;
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    if (!empty($events_sync_helper) && !empty($type)) {
      switch ($type) {
        case 'all':
          $events = $events_sync_helper->getAllEvents();
          break;
        case 'week':
          $events = $events_sync_helper->getWeekEvents();
          break;
      }

      $events = !empty($events) ? $events : [];
      $existing_nodes = $events_sync_helper->getNodesByType('committee_events');

      foreach ($events as $event) {
        $src_id = !empty($event['Id']) ? $event['Id'] : '';
        $src_mod = !empty($event['LastModifiedTime']) ? $event['LastModifiedTime'] : '';

        if (!empty($existing_nodes[$src_id]) &&
          (($existing_nodes[$src_id]['src_modified'] != $src_mod) || $update_all)) {
          $events_sync_helper->updateNode($existing_nodes[$src_id]['nid'], $event);
        }
        elseif (empty($existing_nodes[$src_id])) {
          $nid = $events_sync_helper->createNode($event);
        }
      }
    }
  }
}
