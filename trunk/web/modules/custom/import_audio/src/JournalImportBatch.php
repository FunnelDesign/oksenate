<?php

namespace Drupal\import_audio;

use Drupal\import_audio\Exceptions\ImportParseError;
use phpQuery;

class JournalImportBatch {

  const START_PAGE = 'http://www.oksenate.gov/publications/journals.html';

  const RESULT_KEYS = [
    'get_pages',
    'journal_import',
  ];

  public static function getImportPages(&$context) {


    $context['message'] = t('Get import Urls');


    $journal_urls = self::getUrls();
    $queue = \Drupal::queue('journal_import');
    foreach ($journal_urls as $journal_url) {
      $queue->createItem($journal_url);
    }

    $context['results']['get_pages'] = count($journal_urls);
  }


  public static function processImportQueue(&$context) {
    $queue_name = 'journal_import';
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
      } catch (ImportParseError $e) {
        //skip logging, logs inside parser
      } catch (\Exception $e) {
        \Drupal::logger('journals_unknown_error')->error(t('Error parse @url @message', ['@url' => $item->data, '@message' => $e->getMessage()]));
        $message = '<a href="' . $item->data . '">' . $item->data ."</a><br>\r\n";
        file_put_contents('journals_parse_errors.html', $message, FILE_APPEND);
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
      foreach (self::RESULT_KEYS as $key) {

        if(!empty($results[$key])) {
          $message .= t('Processed @key - @number', ['@key' => $key, '@number' => $results[$key]]);
        }
      }

      \Drupal::messenger()->addStatus($message);
    }
    else {
      \Drupal::messenger()->addError(t('Finished with an error.'));
    }
  }

  /**
   * @return array
   */
  public static function getUrls(): array {
    $urls = [];

    $body = ParserHelper::getPageHtml(self::START_PAGE);

    $pq = PhpQuery::newDocument($body);
    $links = $pq->find('a');

    foreach ($links as $link) {
      $pq_link = pq($link);
      $url = $pq_link->attr('href');
      $urls[] = ParserHelper::getAbsoluteUrl(self::START_PAGE, $url);
    }

    return array_unique($urls);
  }

}
