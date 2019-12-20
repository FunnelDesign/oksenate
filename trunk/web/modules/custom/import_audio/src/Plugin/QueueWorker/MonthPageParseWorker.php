<?php

namespace Drupal\import_audio\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;


/**
 * Parse press release month html worker
 *
 * @QueueWorker(
 *   id = "audio_import_month_parse",
 *   title = @Translation("Audio Month page parser Worker"),
 *   cron = {"time" = 60}
 * )
 */
class MonthPageParseWorker extends QueueWorkerBase {

  public function processItem($data) {
    $parser = \Drupal::getContainer()->get('import_audio.parser');
    $audio_releases = $parser->parseAudioReleases($data);
    $queue = \Drupal::queue('audio_import_press_release');

    if(!empty($audio_releases)) {
      foreach ($audio_releases as $item) {
        $queue->createItem($item);
      }
    } else {
      \Drupal::logger('audio_import_month_parse')->notice(t('No releases for page @url', ['@url' => $data]));
    }
  }

}
