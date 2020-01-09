<?php

namespace Drupal\import_audio\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\import_audio\JournalImportBatch;
use Drupal\import_audio\WeekImportBatch;

/**
 * Class TestController.
 */
class TestController extends ControllerBase {

  /**
   * Test.
   *
   * @return string
   *   Return Hello string.
   */
  public function test() {

//    $this->journalUrls();

    //dsm(\Drupal::getContainer()->get('import_audio.journal_parser')->parseFileDate('http://www.oksenate.gov/publications/senate_journals/sj2013/sj20130306.pdf'));

//    dsm('Multiple');
    $url = 'http://www.oksenate.gov/publications/senate_journals/sj2019/index_sj2019.html';
//    $title = '2019 Senate Journals - 57th Legislature - First  Session';
    //\Drupal::getContainer()->get('import_audio.journal_parser')->parseAndSaveSession($url, $title);
    \Drupal::getContainer()->get('import_audio.journal_parser')->pushMultipleSessionFiles($url);
//
    $url = 'http://www.oksenate.gov/publications/senate_journals/archived/sj1991v1.pdf';
    $title = '1991 Senate Journals - 43rd Legislature - First Regular Session';
    dsm('Single');

    //\Drupal::getContainer()->get('import_audio.journal_parser')->saveFile($url, $url);
    //\Drupal::getContainer()->get('import_audio.journal_parser')->parseAndSaveSession($url, $title);

    return [
      '#type' => 'markup',
      '#markup' => $this->t('test')
    ];
  }

  public function journalUrls($ingnore_cache = FALSE) {
    $urls = \Drupal::state()->get('import_audio.journal_links');
    if(empty($urls) || $ingnore_cache) {
      $urls = JournalImportBatch::getSessionLinks();
      \Drupal::state()->set('import_audio.journal_links', $urls);
    }
    $urls_only = [];
    foreach ($urls as $url) {
      $urls_only[] = $url['url'];
    }
    dsm($urls_only);

//    dsm($urls);
    return $urls;
  }

  public function testAudioImport() {

    //$web_week_urls = \Drupal::state()->get('import_audio.web_week_urls');
//    if(empty($web_week_urls)) {
//      $web_week_urls =  WeekImportBatch::getWeekUrls();
//      \Drupal::state()->set('import_audio.web_week_urls', $web_week_urls);
//    }

    $count = \Drupal::database()->query(
      'select count(*) from import_audio_check as c
left join media__field_media_audio_old_url as f on f.field_media_audio_old_url_value = c.audio
where f.field_media_audio_old_url_value is null')
      ->fetchField();

    $urls = \Drupal::database()->query(
      'select c.month_page as page, c.audio as file from import_audio_check as c
left join media__field_media_audio_old_url as f on f.field_media_audio_old_url_value = c.audio
where f.field_media_audio_old_url_value is null')
      ->fetchAll();


    dsm($count, 'TOTAL count');

    dsm($urls, 'List');

    return [
      '#type' => 'markup',
      '#markup' => 'test',
    ];
  }

  public function testWeekImport() {

    $web_week_urls = \Drupal::state()->get('import_audio.web_week_urls');
    if(empty($web_week_urls)) {
      $web_week_urls =  WeekImportBatch::getWeekUrls();
      \Drupal::state()->set('import_audio.web_week_urls', $web_week_urls);
    }

    $urls = \Drupal::database()->select('node__field_old_url', 'u')
      ->fields('u', ['field_old_url_value'])
      ->execute()
      ->fetchCol();


    dsm(array_diff($web_week_urls, $urls), 'NOT FOUND');

    dsm($web_week_urls, 'Old web');

    dsm($urls, 'Imported');



    return [
      '#type' => 'markup',
      '#markup' => 'test',
    ];
  }
}
