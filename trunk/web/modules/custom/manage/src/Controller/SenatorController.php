<?php

namespace Drupal\manage\Controller;

use Drupal\Core\Controller\ControllerBase;
use Zend\Diactoros\Response\RedirectResponse;

/**
 * Class SenatorController.
 */
class SenatorController extends ControllerBase {

  /**
   * Edit my page.
   */
  public function editMyPage() {

    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(['type' => 'senator', 'uid' => \Drupal::currentUser()->id()]);


    if(!empty($nodes)) {
      $node = reset($nodes);
      return new RedirectResponse('/node/' . $node->id() . '/edit', 301);
    } else {
      return [
        '#type' => 'markup',
        '#markup' => '<h2>' . $this->t('Senator page not exist' ) . '</h2>',
      ];
    }

  }

}
