<?php

namespace Drupal\import_audio;

use Drupal\import_audio\Exceptions\ImportParseError;
use phpQuery;

class WeekImportBatch {

  const START_PAGE = 'http://www.oksenate.gov/news/wir_index.html';

  const RESULT_KEYS = [
    'get_pages',
    'week_import',
  ];


  public static function getImportPages(&$context) {

//    $week_urls = \Drupal::state()->get('import.week_review');
//
//    if(!empty($week_urls)) {
//      dsm($week_urls, 'saved');
//      return ;
//    }
    $context['message'] = t('Get import Urls');


    $week_urls = self::getWeekUrls();
    //\Drupal::week_import
    $queue = \Drupal::queue('week_import');
    foreach ($week_urls as $week_url) {
      $queue->createItem($week_url);
    }

//    \Drupal::state()->set('import.week_review', $week_urls);

    $context['results']['get_pages'] = count($week_urls);
  }

  protected static function urlBugFixer($url) {
    $replaces = [
    'week_in_review/week_in_review_2016/week_in_review/week_in_review_2017' => 'week_in_review/week_in_review_2017'
   ];
    foreach ($replaces as $from => $to) {
      $url = str_replace($from, $to, $url);
    }
    return $url;
  }

  protected static function isYearPage($url) {
    return preg_match('/\/(.*)(index|Index)(.*)\.htm/U', $url);
  }

  public static function processImportQueue(&$context) {
    $queue_name = 'week_import';
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
        //skip logging, loggs inside parser
      } catch (\Exception $e) {
        \Drupal::logger('week_preview_unknown_error')->error(t('Error parse @url @message', ['@url' => $item->data, '@message' => $e->getMessage()]));
        $message = '<a href="' . $item->data . '">' . $item->data ."</a><br>\r\n";
        file_put_contents('week_preview_parse_errors.html', $message, FILE_APPEND);
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
  public static function getWeekUrls(): array {
    $year_urls = [];
    $week_urls = [];


    $body = ParserHelper::getPageHtml(self::START_PAGE);

    $pq = PhpQuery::newDocument($body);
    $links = $pq->find('a');

    foreach ($links as $link) {
      $pq_link = pq($link);
      $url = $pq_link->attr('href');
      $absolute_url = ParserHelper::getAbsoluteUrl(self::START_PAGE, $url);
      if (self::isYearPage($url)) {
        $year_urls[] = $absolute_url;
      }
      else {
        $week_urls[] = self::urlBugFixer($absolute_url);
      }
    }

    foreach ($year_urls as $yearUrl) {
      $body = ParserHelper::getPageHtml($yearUrl);

      $pq = PhpQuery::newDocument($body);
      $links = $pq->find('a');
      foreach ($links as $link) {
        $pq_link = pq($link);
        $url = $pq_link->attr('href');
        $absolute_url = ParserHelper::getAbsoluteUrl($yearUrl, $url);
        if (!self::isYearPage($url)) {
          $week_urls[] = self::urlBugFixer($absolute_url);
        }
      }
    }

    $week_urls = array_unique($week_urls);
    return $week_urls;
  }

}
