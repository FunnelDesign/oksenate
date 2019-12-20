<?php

namespace Drupal\import_audio;

use DateInterval;
use DateTime;

class ImportBatch {


  public static function getMonthPages(&$context) {

    $context['message'] = t('Generate import Urls');
    $context['results']['month_pages'] = $context['results']['month_pages'] ?? 0;

    $start = new DateTime(IMPORT_AUDIO_START_DATE);
    $current = $start;
    $end = new DateTime();

    $queue = \Drupal::queue('audio_import_month_parse');

    while($current <= $end) {
      $current->add(new DateInterval('P1M'));
      $context['results']['month_pages']++;
      $queue->createItem(self::getMonthUrl($current));
    }
  }


  public static function processMonthPagesQueue(&$context) {
    $queue_name = 'audio_import_month_parse';
    $queue = \Drupal::queue('audio_import_month_parse');

    $context['finished'] = 0;

    $title = t('Process import %name queue %count items remaining', [
      '%name' => $queue_name,
      '%count' => $queue->numberOfItems(),
    ]);

    if ($item = $queue->claimItem()) {

      $context['message'] = $title;

      // Process and delete item
      /** @var $queue_manager \Drupal\Core\Queue\QueueWorkerManagerInterface */
      $queue_worker = \Drupal::getContainer()->get('plugin.manager.queue_worker')->createInstance($queue_name);
      try {
        $queue_worker->processItem($item->data);
        $context['results'][$queue_name] += 1;
        $queue->deleteItem($item);
      } catch (\Exception $e) {
        \Drupal::logger('audio_import_month_parse_error')->error(t('Error parse @url @message', ['@url' => $item->data, '@message' => $e->getMessage()]));
      }

    }
    else {
      // If we cannot claim an item we must be done processing this queue.
      $context['finished'] = 1;
    }
  }



  public static function FinishedCallback($success, $results, $operations) {

    if ($success) {

      $message = '';
      if(!empty($results['month_pages'])) {
        $message .= \Drupal::translation()->formatPlural(
          $results['month_pages'] ?? 0,
          '@count Month pages. ', '@count Month pages. '
        );
      }
      if(!empty($results['audio_import_month_parse'])) {
        $message .= \Drupal::translation()->formatPlural(
          $results['audio_import_month_parse'] ?? 0,
          '@count Month pages parsed. ', '@count Month pages parsed. '
        );
      }

//      $message .= \Drupal::translation()->formatPlural(
//        $results['videos_count'] ?? 0,
//        '@count video imported.', '@count videos imported.'
//      );

      \Drupal::messenger()->addStatus($message);
    }
    else {
      \Drupal::messenger()->addError(t('Finished with an error.'));
    }
  }

  /**
   * @param $date DateTime
   *
   * @return mixed
   */
  private static function getMonthUrl($date) {
    $url = str_replace(':Y', $date->format('Y'), IMPORT_AUDIO_MONTH_URL);
    return str_replace(':M', $date->format('m'), $url);
  }

}
