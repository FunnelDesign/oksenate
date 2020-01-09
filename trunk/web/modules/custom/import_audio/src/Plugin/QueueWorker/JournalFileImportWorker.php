<?php

namespace Drupal\import_audio\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;


/**
 * Parse press release month html worker
 *
 * @QueueWorker(
 *   id = "import_audio_save_journal_file",
 *   title = @Translation("Journal File import Worker"),
 *   cron = {"time" = 60}
 * )
 */
class JournalFileImportWorker extends QueueWorkerBase {

  public function processItem($data) {
      \Drupal::getContainer()->get('import_audio.journal_parser')->saveFile($data['file_url'], $data['parent_url']);
  }

}
