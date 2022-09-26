<?php

namespace Drupal\custom_module\Controller;

use Drupal\Core\Render\Element\RenderCallbackInterface;

/**
 * Provides a captcha callback to alter the commerce cart block.
 *
 */
class SenateChangeCaptchaDescription implements RenderCallbackInterface {
  /**
   * {@inheritdoc}
   */
  public static function trustedCallbacks() {
    return ['preRender'];
  }


  /**
   * Sets senate_captcha - #pre_render callback.
   */
  public static function preRender($build) {
    $description = !empty($build["captcha_widgets"]) &&
    !empty($build["captcha_widgets"]["captcha_response"]) &&
    !empty($build["captcha_widgets"]["captcha_response"]["#description"]) ?
      $build["captcha_widgets"]["captcha_response"]["#description"] : '';
    $add_description = t('Math question not to test basic math skills.');
    $title = !empty($build["captcha_widgets"]) && !empty($build["captcha_widgets"]["captcha_response"]) &&
    !empty($build["captcha_widgets"]["captcha_response"]["#title"]) ?
      $build["captcha_widgets"]["captcha_response"]["#title"] : '';
    $add_title = t('CAPTCHA:');

    if (!empty($description)) {
      $desc = is_object($description) ? $description->__toString() : $description;
      $add_desc = $add_description->__toString();

      $has_add_desc = (strpos($desc, $add_desc) !== FALSE);
      if (!$has_add_desc) {
        $build["captcha_widgets"]["captcha_response"]["#description"] = $description . ' ' . $add_description;
      }
    }

    if (!empty($title)) {
      $title = is_object($title) ? $title->__toString() : $title;
      $add_title = $add_title->__toString();

      $has_add_title = (strpos($title, $add_title) !== FALSE);
      if (!$has_add_title) {
        $build["captcha_widgets"]["captcha_response"]["#title"] = $add_title . ' ' . $title;
      }
    }

    return $build;
  }

}
