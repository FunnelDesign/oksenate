<?php

namespace Drupal\import_audio\Service;

use phpQuery;
use phpUri;

/**
 * Class ParserService.
 */
class ParserService {

  public $url;
  public $base_url;

  CONST MIN_RELEASE_HTML_SIZE = 5;


  /**
   * Constructs a new ParserService object.
   */
  public function __construct() {

  }


  public function parseAudioReleases($url) {
    $this->url = $url;
    $this->base_url = pathinfo($url)['dirname'] ?? '';
    $releases = [];

    $body = (string) \Drupal::httpClient()
      ->get($url, [
        'timeout' => 0,
        'headers' => [],
      ])
      ->getBody();
    $pq = PhpQuery::newDocument($body);

    $rows = $pq->find('table table table table tr');

    foreach($rows as $delta => $row) {
      $row_html = pq($row)->find('td:first')->html();

      if(!$this->isEmptyReleaseDividerRow($row_html)) {

        $releases[] = $this->parseAudioRelease($row_html);
      }
    }

    return $releases;
  }

  protected function isEmptyReleaseDividerRow($html) {
    return strlen($html) < self::MIN_RELEASE_HTML_SIZE;
  }

  protected function parseAudioRelease($html) {
    $info = ['title' => '', 'url' => '', 'date' => '', 'files' => []];
    $rows = explode('<br>', $html);

    $info['title'] = strip_tags(trim(preg_replace('/\s\s+/', ' ', $rows[0])));
    $info['url'] =  $this->getAbsoluteUrl($this->grepFirstHref($rows[0]));
    $info['date'] = $this->grepDate($rows);

    $files_rows = array_splice($rows, 2);

    foreach ($files_rows as $filesRow) {
      $file_info = ['url' => '', 'desc' => ''];
      $file_info['desc'] = strip_tags($filesRow);
      $file_info['desc'] = str_replace(['mp3', ')', '('], '', $file_info['desc']);
      $file_info['desc'] = trim(preg_replace('/\s\s+/', ' ', $file_info['desc']));
      $file_info['url'] = $this->getAbsoluteUrl($this->grepFirstHref($filesRow));

//    $media = \Drupal::entityTypeManager()->getStorage('media')->loadByProperties(['field_media_audio_old_url' => $file_info['url']]);
//    $file_info['media'] = $media[0] ?? NULL;

      $info['files'][] = $file_info;
    }
    return $info;
  }

  /**
   * @param array $rows
   * @param       $matches
   * @param array $parts
   *
   * @return string
   */
  protected function grepDate(array $rows) {
    $date = '';
    $pattern = "/(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])\.[0-9]{2}/";
    preg_match($pattern, $rows[1], $matches);
    if (!empty($matches[0])) {
      $date = $matches[0];
    }
    else {
      preg_match($pattern, $rows[0], $matches);
      $date = $matches[0] ?? '';
    }

    return $date;
  }

  protected function getAbsoluteUrl($relative_url) {
    $base_url = $this->base_url;
    if (preg_match('#^[a-z]+://[^/]+$#', $base_url)) {
      $base_url .= '/';
    }

    return !empty($relative_url) ? phpUri::parse($base_url)->join($relative_url) : '';
  }

  protected function grepFirstHref($html) {
      preg_match('/<a href="(.+)">/', $html, $match);
      return $match[1] ?? '';
  }
}
