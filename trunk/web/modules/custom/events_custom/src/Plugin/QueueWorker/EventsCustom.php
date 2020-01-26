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
    $a = 9;
    $events = !empty($data->events) ? $data->events : [];
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    if (!empty($events_sync_helper) && !empty($events)) {
      $existing_nodes = $events_sync_helper->getNodesByType('committee_events');

      foreach ($events as $event) {
        $src_id = !empty($event->Id) ? $event->Id : '';
        $src_mod = !empty($event->LastModifiedTime) ? $event->LastModifiedTime : '';

        if (!empty($existing_nodes[$src_id]) && ($existing_nodes[$src_id]['src_modified'] != $src_mod)) {
          $events_sync_helper->updateNode($existing_nodes[$src_id]['nid'], $event);
        }
        elseif (empty($existing_nodes[$src_id])) {
          $nid = $events_sync_helper->createNode($event);
        }
      }

      if (!empty($result['nids'])) {
        $delete_nids = [];
        foreach ($existing_nodes as $local_nid => $alias) {
          if (!empty($alias) && !array_search($alias, $nids_alias)) {
            $delete_nids[] = $local_nid;
          }
        }
        $events_sync_helper->deleteNodes($delete_nids);
      }
    }
  }
}
