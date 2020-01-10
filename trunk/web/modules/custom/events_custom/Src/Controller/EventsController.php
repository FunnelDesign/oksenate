<?php
namespace Drupal\events_custom\Controller;

use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\AlertCommand;
use Drupal\Core\Ajax\HtmlCommand;
use Drupal\Core\Ajax\InvokeCommand;
use Drupal\Core\Controller\ControllerBase;

class EventsController  extends ControllerBase {

  /**
   * Open video.
   *
   * @return AjaxResponse
   */
  public function insertEvents() {

    $response = new AjaxResponse();

    $element  = ['#theme' => 'events_custom_upcoming'];
    $response->addCommand(new HtmlCommand('.events-holder', render($element)));

    return $response;
  }

  public function insertHomeEvents() {

    $response = new AjaxResponse();

    $element  = ['#theme' => 'events_custom_home'];
    $response->addCommand(new HtmlCommand('.events-home-holder', render($element)));
    //$response->addCommand(new AlertCommand('test'));

    return $response;
  }

}
