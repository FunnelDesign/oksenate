<?php

namespace Drupal\import_audio\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;


/**
 * Parse press release month html worker
 *
 * @QueueWorker(
 *   id = "import_audio_parse_session_page",
 *   title = @Translation("Journal File import Worker"),
 *   cron = {"time" = 60}
 * )
 */
class JournalSessionImportWorker extends QueueWorkerBase {

  public function processItem($data) {
      \Drupal::getContainer()->get('import_audio.journal_parser')->parseAndSaveSession($data['url'], $data['title']);
  }

}
