<?php
namespace Drupal\senate_login\EventSubscriber;

use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Event subscriber subscribing to KernelEvents::REQUEST.
 */
class RedirectLoginSubscriber implements EventSubscriberInterface {

  /**
   * @var \Drupal\Core\Session\AccountProxyInterface|null
   */
  private $account = NULL;

  public function __construct() {
    $this->account = \Drupal::currentUser();
  }

  public function redirectLogin(RequestEvent $event) {

//    if (\Drupal::service('path.current')->getPath() == '/user') {
//
//      // add logic to check other routes you want available to anonymous users,
//      // otherwise, redirect to login page.
//      $route_name = \Drupal::routeMatch()->getRouteName();
//      if (strpos($route_name, 'view') === 0 && strpos($route_name, 'rest_') !== FALSE) {
//        return;
//      }
//
//      $response = new RedirectResponse('/404', 301);
//      $event->setResponse($response);
//      $event->stopPropagation();
//    }
  }

  public static function getSubscribedEvents() {
    $events[KernelEvents::REQUEST][] = array('redirectLogin');
    return $events;
  }

//  public function checkNodeRedirection(GetResponseEvent $event) {
//    $baseUrl = $event->getRequest()->getBaseUrl();
//    $attr = $event->getRequest()->attributes;
//    $node = !empty($attr) && is_object($attr) ? $attr->get('node') : '';
//    $node_type = !empty($node) ? $node->bundle() : '';
//    $edit_page = ($attr->get('_entity_form') === 'node.edit');
//    $redirect_url = $this->getRedirectUrl($node_type);
//
//    if (!$edit_page) {
//      switch ($node_type) {
//        case 'committee_events':
////          if ($node->hasField('field_comt_evt_committee')) {
////            $committee = $node->get('field_comt_evt_committee');
////            $committee = $committee->getValue();
////            if (!empty($committee)) {
////              $redirect_url .= '/' . $committee[0]["target_id"];
////            }
////          }
//          break;
//        case 'agencies_doc':
//          if ($node->hasField('field_agencies_doc_agency')) {
//            $agencies = $node->get('field_agencies_doc_agency');
//            $agencies = $agencies->getValue();
//            if (!empty($agencies)) {
//              $redirect_url .= '/' . $agencies[0]["target_id"];
//            }
//          }
//          if ($node->hasField('field_agencies_doc_comtt')) {
//            $committee = $node->get('field_agencies_doc_comtt');
//            $committee = $committee->getValue();
//            if (!empty($committee)) {
//              $committee = $committee[0]["target_id"];
//              $redirect_url = str_replace('%', $committee, $redirect_url);
//            }
//          }
//          break;
//      }
//
//      if (!empty($redirect_url)) {
//        $redirect = new RedirectResponse($redirect_url, 301);
//        $event->setResponse($redirect);
//        $event->stopPropagation();
//      }
//    }
//  }
//
//  public function getRedirectUrl($bundle) {
//    $map = [
//      'agencies_doc' => '/committees/appropriations/%/agencies-documents', // smth,
////      'committee_events' => '/upcoming-events', // committee
//      'glossary' => '/education/glossary',
//      'journals' => '/calendar/journals', // year, month
//      'session_summary' => '/publications/session-summary',
//      'staff' => '/contacts/senate-staff',
//      'statutes_constit' => '/search-statutes-constitutions',
//    ];
//
//    return !empty($map[$bundle]) ? $map[$bundle] : '';
//  }
}
