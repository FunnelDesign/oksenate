<?php

namespace Drupal\import_audio\Controller;

use Drupal\Core\Controller\ControllerBase;
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

//    $c = [];
//    WeekImportBatch::getImportPages($c);
    $url = 'http://www.oksenate.gov/news/week_in_review/week_in_review_2018/wir2018041619.htm';
    dsm(\Drupal::getContainer()->get('import_audio.week_parser')->parseAndSave($url));

    return [
      '#type' => 'markup',
      '#markup' => $this->t('')
    ];
  }

  public function testWeekImport() {

    $web_week_urls = \Drupal::state()->get('import_audio.web_week_urls');
    if(empty($web_week_urls)) {
      $web_week_urls =  WeekImportBatch::getWeekUrls();
      \Drupal::state()->set('import_audio.web_week_urls', $web_week_urls);
    }


    $out = '<h2>Not found</h2>';

    $urls = \Drupal::database()->select('node__field_old_url', 'u')
      //->fields('u')
      ->fields('u', ['field_old_url_value'])
      ->execute()
      //->fetchCol();
      ->fetchCol();


    dsm(array_diff($web_week_urls, $urls), 'NOT FOUND');

    dsm($web_week_urls, 'web');

    dsm($urls);



    return [
      '#type' => 'markup',
      '#markup' => $out,
    ];

  }
}
