<?php
namespace Drupal\events_custom\Controller;

use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\HtmlCommand;
use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Core\Datetime\DrupalDateTime;

class EventsController extends ControllerBase {

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

  public function getCompleteMeeting($meeting_id, $event_type) {
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';
    $url = 'https://sg001-harmony.sliq.net/00282/Harmony/en/api/Data/GetCompleteMeeting';
    $data = '';

    switch ($event_type) {
      case 'prod':
        if (!empty($events_sync_helper)) {
          $data = $events_sync_helper->sendJsonRequest($url . '?meetingId=' . $meeting_id);
        }
        break;
      case 'test':
        $data = $this->getTestEvent($meeting_id);
        break;
    }

    $data = !empty($data) ? $data : [];

    return new JsonResponse($data);
  }

  public function getTestEvent($meeting_id) {
    $result = _events_custom_get_events_timetable();
    $result = !empty($result) ? $result : [];
    $now = new DrupalDateTime('now', 'UTC');
    $event = ['EntityStatus' => 0];

    foreach ($result as $value) {
      if ($value['meetingId'] == $meeting_id) {
        $from = new DrupalDateTime($value['startUtc'], 'UTC');
        $to = new DrupalDateTime($value['endUtc'], 'UTC');

        if (($from <= $now) && ($to >= $now)) {
          $event['EntityStatus'] = 1;
        }
      }
    }

    return $event;
  }
}
