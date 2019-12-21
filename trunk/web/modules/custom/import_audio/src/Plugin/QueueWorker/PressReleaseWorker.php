<?php

namespace Drupal\import_audio\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;


/**
 * Parse press release month html worker
 *
 * @QueueWorker(
 *   id = "audio_import_press_release",
 *   title = @Translation("Press relese import Worker"),
 *   cron = {"time" = 60}
 * )
 */
class PressReleaseWorker extends QueueWorkerBase {

  public function processItem($data) {
      \Drupal::getContainer()->get('import_audio.audio_creator')->saveAudio($data);
  }

}
