<?php

namespace Drupal\import_audio\Service;

use Drupal\import_audio\ParserHelper;
use phpQuery;

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
    $this->base_url = pathinfo($url)['dirname'] . '/' ?? '';
    $releases = [];

  try{
    $body = ParserHelper::getPageHtml($url);
  } catch(\Exception $e) {
    //try to get from second variant of url
    $url = str_replace('.html', '.htm', $url);
    $body = ParserHelper::getPageHtml($url);
  }

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
    $info['title'] = html_entity_decode(
      ParserHelper::fixEncoding($info['title'])
    );

    $info['url'] =  $this->getAbsoluteUrl(ParserHelper::grepFirstHref($rows[0]));
    $info['date'] = $this->grepDate($rows);

    if(empty($info['date'])) {
      $info['date'] = $this->grepDateFromLastRow($rows);
      if(!empty($info['date'])) {
        //date in the last row remove first and last element to get mp3 arrays
        $files_rows = array_splice($rows, 1, -1);
      }
    }
    //Default mp3 location, skip 2 first rows
    $files_rows = (empty($files_rows)) ? array_splice($rows, 2) : $files_rows;

    foreach ($files_rows as $filesRow) {
      $file_info = ['url' => '', 'desc' => ''];
      $file_info['desc'] = strip_tags($filesRow);
      $file_info['desc'] = str_replace(['mp3', ')', '('], '', $file_info['desc']);
      $file_info['desc'] = trim(preg_replace('/\s\s+/', ' ', $file_info['desc']));
      $file_info['desc'] = html_entity_decode(
        ParserHelper::fixEncoding($file_info['desc'])
      );

      $file_info['url'] = $this->getAbsoluteUrl(
        ParserHelper::grepFirstHref($filesRow)
      );

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
    $matches = [];
    $pattern = "/(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])\.[0-9]{2}/";
    if(!empty($rows[1])) {
      preg_match($pattern, $rows[1], $matches);
    }

    if (!empty($matches[0])) {
      $date = $matches[0];
    }
    else {
      preg_match($pattern, $rows[0], $matches);
      $date = $matches[0] ?? '';
    }

    return $date;
  }

  protected function grepDateFromLastRow(array $rows) {
    $date = '';

    $pattern = "/(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])\.[0-9]{2}/";
    preg_match($pattern, end($rows), $matches);
    if (!empty($matches[0])) {
      $date = $matches[0];
    }

    return $date;
  }

  protected function getAbsoluteUrl($relative_url) {
    return ParserHelper::getAbsoluteUrl($this->base_url, $relative_url);
  }

}
