<?php

namespace Drupal\import_audio;

use Drupal\import_audio\Exceptions\ImportParseError;
use phpQuery;

class JournalImportBatch {

  const START_PAGE = 'http://www.oksenate.gov/publications/journals.html';

  const RESULT_KEYS = [
    'get_pages',
    'import_audio_parse_session_page',
    'import_audio_save_journal_file',
  ];

  public static function getImportPages(&$context) {


    $context['message'] = t('Get import Urls');

    $journal_links = self::getSessionLinks();
    $queue = \Drupal::queue('import_audio_parse_session_page');
    foreach ($journal_links as $journal_url) {
      $queue->createItem($journal_url);
    }

    $context['results']['get_pages'] = count($journal_links);
  }

  public static function processImportSessionPageQueue(&$context) {
    $queue_name = 'import_audio_parse_session_page';
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
        \Drupal::logger('journals_parse_session_errors')->error('Error parse ' . $e->getMessage() . '<pre><code>' . print_r($item->data, TRUE)  .  '</code></pre>' );
        $message = '<a href="' . $item->data['url'] . '">' . $item->data['title'] ."</a><br>\r\n";
        file_put_contents('journals_parse_errors.html', $message, FILE_APPEND);
      }

    }
    else {
      // If we cannot claim an item we must be done processing this queue.
      $context['finished'] = 1;
    }
  }

  public static function processSaveFileQueue(&$context) {
    $queue_name = 'import_audio_save_journal_file';
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
        \Drupal::logger('journals_get_file_errors')->error('Error parse ' . $e->getMessage() . '<pre><code>' . print_r($item->data, TRUE)  .  '</code></pre>' );
        $message = '<a href="' . $item->data['file_url'] . '">' . $item->data['file_url'] .  "</a>" . ' Parent ' .  $item->data['parent_url']  ."<br>\r\n";
        file_put_contents('journals_parse_file_errors.html', $message, FILE_APPEND);
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
  public static function getSessionLinks(): array {
    $links = [];
    $urls = [];

    $body = ParserHelper::getPageHtml(self::START_PAGE);

    $pq = PhpQuery::newDocument($body);
    $pq_links = $pq->find('a');

    foreach ($pq_links as $link) {
      $pq_link = pq($link);
      $url = $pq_link->attr('href');

      if(!in_array($url, $urls)) {
        $urls[] = $url;
        $links[] = [
          'url' => ParserHelper::getAbsoluteUrl(self::START_PAGE, $url),
          'title' =>  ParserHelper::fixEncoding(ParserHelper::removeNewLinesAndMultiSpaces($pq_link->html())),
        ];
      }
    }
    return $links;
  }

}
