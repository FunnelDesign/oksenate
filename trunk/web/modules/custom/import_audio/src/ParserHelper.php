<?php


namespace Drupal\import_audio;

use Drupal;
use Drupal\Core\File\FileSystemInterface;
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

  public static function removeNewLinesAndMultiSpaces($string) {
    return str_replace("\r\n", NULL, preg_replace('/\s{2,}/', ' ',trim($string)));
  }
  public static function removeNewLines($string) {
    return str_replace(["\n", "\r"], '', $string);
  }

  /**
   * @param $file_url string
   *                  External url
   *
   * @param $folder folder uri
   *  like $folder = 'public://press_release_audio';
   *
   * @return array
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public static function saveExternalFile($file_url, $folder) {
    $file_url_info = basename($file_url);
    $file_uri = $folder . '/' . $file_url_info;

    $files = \Drupal::entityTypeManager()
      ->getStorage('file')
      ->loadByProperties(['uri' => $file_uri]);
    $file = reset($files);

    if (empty($file)) {
      //Download and save

      file_prepare_directory($folder, FILE_CREATE_DIRECTORY);

      $file_request = Drupal::httpClient()->get(
        $file_url, [
          'connect_timeout' => 600,
          'read_timeout' => 600,
          'timeout' => 600,
          'verify' => FALSE,
        ]
      );

      $data = $file_request->getBody(TRUE);

      // Save the audio file and add to Drupal managed files.
      $file = file_save_data(
        $data, $file_uri, FileSystemInterface::EXISTS_REPLACE
      );
    }
    return $file;
  }
}
