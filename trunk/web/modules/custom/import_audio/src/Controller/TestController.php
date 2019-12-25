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

    dsm(JournalImportBatch::getUrls());

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
