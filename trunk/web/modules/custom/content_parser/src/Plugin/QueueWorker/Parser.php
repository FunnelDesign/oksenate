<?php  

namespace Drupal\content_parser\Plugin\QueueWorker;


use Drupal\Core\Queue\QueueWorkerBase AS Queue;

/**
 * Processes tasks for example module.
 *
 * @QueueWorker(
 *   id = "queue_parser",
 *   title = @Translation("Parser Queue worker"),
 *   cron = {"time" = 1}
 * )
 */

class Parser extends Queue {

  /**
   * {@inheritdoc}
   */
  public function processItem($item) {
    $item['entity']->processUrl($item['url'], $item['options']);
  }
}
