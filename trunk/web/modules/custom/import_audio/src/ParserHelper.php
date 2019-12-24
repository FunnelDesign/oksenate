<?php


namespace Drupal\import_audio;

use phpUri;

class ParserHelper {

  /**
   * @param $url
   *
   * @return string
   */
  public static function getPageHtml($url): string {
    $body = (string) \Drupal::httpClient()
      ->get($url, ['timeout' => 0, 'headers' => [],])
      ->getBody();
    return $body;
  }

  public static function fixEncoding($val) {
    return mb_check_encoding($val, 'UTF-8') ? $val : utf8_encode($val);
  }

  public static function grepFirstHref($html) {
    preg_match('/<a href="(.+)">/U', $html, $match);
    return $match[1] ?? '';
  }

  public static function getAbsoluteUrl($base_url, $relative_url) {
    if (preg_match('#^[a-z]+://[^/]+$#', $base_url)) {
      $base_url .= '/';
    }

    return !empty($relative_url) ? phpUri::parse($base_url)->join($relative_url) : '';
  }
}
