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

    $c = [];
    WeekImportBatch::getImportPages($c);

    return [
      '#type' => 'markup',
      '#markup' => $this->t('')
    ];
  }

}
