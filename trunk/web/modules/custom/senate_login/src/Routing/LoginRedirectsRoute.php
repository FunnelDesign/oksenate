<?php

namespace Drupal\senate_login\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

class LoginRedirectsRoute extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    if ($route = $collection->get('user.login')) {
      $route->setPath('/editor');
    }
    if ($route = $collection->get('user.page')) {
      $route->setPath('/editor/view');
    }
  }
}
