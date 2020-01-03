<?php

namespace Drupal\import_audio;

use DateInterval;
use DateTime;
use Drupal\import_audio\Exceptions\ImportNoNodeError;

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
    $queue = \Drupal::queue($queue_name);

    $context['finished'] = 0;
    $context['results'][$queue_name] = $context['results'][$queue_name] ?? 0;

    $title = t('Process import %name queue %count items remaining', [
      '%name' => $queue_name,
      '%count' => $queue->numberOfItems(),
    ]);

    if ($item = $queue->claimItem()) {
//      dsm($item);
      $context['message'] = $title;

      // Process and delete item
      /** @var $queue_manager \Drupal\Core\Queue\QueueWorkerManagerInterface */
      $queue_worker = \Drupal::getContainer()->get('plugin.manager.queue_worker')->createInstance($queue_name);
      try {
        $queue_worker->processItem($item->data);
        $context['results'][$queue_name] += 1;
        $queue->deleteItem($item);
      } catch (\Exception $e) {
        $message = $item->data . ' error ' .  $e->getMessage()  ."<br>\n";
        file_put_contents('import_logs/month_page_error.log', $message, FILE_APPEND);
        \Drupal::logger('audio_import_month_parse_page_error')->error(t('Error parse @url @message', ['@url' => $item->data, '@message' => $e->getMessage()]));
      }

    }
    else {
      // If we cannot claim an item we must be done processing this queue.
      $context['finished'] = 1;
    }
  }

  public static function processImportPressReleseQueue(&$context) {
    $queue_name = 'audio_import_press_release';
    $queue = \Drupal::queue($queue_name);

    $context['finished'] = 0;
    $context['results'][$queue_name] = $context['results'][$queue_name] ?? 0;

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
      } catch (ImportNoNodeError $e) {
        //skip logs inside parser
      } catch (\Exception $e) {
        $safe_data_string = ParserHelper::fixEncoding(
          '<code><pre>' . print_r($item->data, TRUE) . '</pre></code>'
        );
        \Drupal::logger('audio_import_create_audio_error')
          ->error(t('Error parse ' . $safe_data_string . ' @message', ['@message' => $e->getMessage()]));
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

      if(!empty($results['audio_import_press_release'])) {
        $message .= \Drupal::translation()->formatPlural(
          $results['audio_import_press_release'] ?? 0,
          '@count Audio imported. ', '@count Audio imported. '
        );
      }

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
