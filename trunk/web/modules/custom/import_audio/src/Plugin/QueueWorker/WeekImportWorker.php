<?php

namespace Drupal\import_audio\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;


/**
 * Parse press release month html worker
 *
 * @QueueWorker(
 *   id = "week_import",
 *   title = @Translation("Week in review import Worker"),
 *   cron = {"time" = 60}
 * )
 */
class WeekImportWorker extends QueueWorkerBase {

  public function processItem($data) {
      \Drupal::getContainer()->get('import_audio.week_parser')->parseAndSave($data);
  }

}
