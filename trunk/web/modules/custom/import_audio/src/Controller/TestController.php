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
    $url = 'http://www.oksenate.gov/news/week_in_review/week_in_review_2016/wir2016031417.htm';
    \Drupal::getContainer()->get('import_audio.week_parser')->parseAndSave($url);

    return [
      '#type' => 'markup',
      '#markup' => $this->t('')
    ];
  }

}
