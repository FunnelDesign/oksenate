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
    if(strpos($url, '.html') !== FALSE) {
      $url = str_replace('.html', '.htm', $url);
    } else {
      $url = str_replace('.htm', '.html', $url);
    }

    $body = ParserHelper::getPageHtml($url);
  }

    $pq = PhpQuery::newDocument($body);

    $pq_links = $pq->find('a');
    foreach ($pq_links as $link) {
      $pq_link = pq($link);
      $file_url = $pq_link->attr('href');
      if(strpos(strtolower($file_url), '.mp3') !== FALSE) {
        $absolute_file_url = ParserHelper::getAbsoluteUrl($url, $file_url);
        //dsm($absolute_file_url);
//        \Drupal::database()->merge('import_audio_check')
//          ->insertFields(['audio' => $absolute_file_url, 'month_page' => $url])
//          ->keys(['audio' => $absolute_file_url, 'month_page' => $url])
//          ->execute();
      }
    }




    $rows = $pq->find('table table table table tr');

    foreach($rows as $delta => $row) {
      $row_html = pq($row)->find('td:first')->html();

      if(!$this->isEmptyReleaseDividerRow($row_html)) {
        $releases[] = $this->parseAudioRelease($row_html);
      }
    }

    if(empty($releases)) {
      $message = $url . "\n";
      file_put_contents('import_logs/no_releases.log', $message, FILE_APPEND);
      \Drupal::logger('audio_import_month_parse')->notice(t('No releases for page @url', ['@url' => $url]));
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
      } else {
        $info['date'] = $this->grepDateFromFirstRow($rows);
        if(!empty($info['date'])) {
          //date in first row with title, skip 1st row
          $files_rows = array_splice($rows, 1 );
        }
      }
    }
    //Default mp3 location, skip 2 first rows
    $files_rows = (empty($files_rows)) ? array_splice($rows, 2) : $files_rows;

    foreach ($files_rows as $delta => $filesRow) {
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

      if(empty($file_info['url']) && !empty($file_info['desc'])) {
        $find_delta = $delta-1;
        $found_position = FALSE;
        while ($find_delta >= 0) {
          if(!empty($info['files'][$find_delta]['desc']) && !empty($info['files'][$find_delta]['url'])) {
            $info['files'][$find_delta]['desc'] .= ' ' . $file_info['desc'];
            $info['files'][$find_delta]['desc'] = ParserHelper::removeNewLinesAndMultiSpaces($info['files'][$find_delta]['desc']);
            $found_position = TRUE;
            break;
          } else {
            $find_delta = $find_delta - 1;
          }
        }
        if(!$found_position) {
          \Drupal::logger('import_file_not_found_position')->notice('<pre><code>' . print_r([$file_info, $info], TRUE)  .  '</code></pre>');
        }

      } else if(!empty($file_info['url']) || !empty($file_info['desc'])) {
        $info['files'][] = $file_info;
      }
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

  protected function grepDateFromFirstRow(array $rows) {
    $date = '';

    $pattern = "/(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])\.[0-9]{2}/";
    preg_match($pattern, reset($rows), $matches);
    if (!empty($matches[0])) {
      $date = $matches[0];
    }

    return $date;
  }

  protected function getAbsoluteUrl($relative_url) {
    return ParserHelper::getAbsoluteUrl($this->base_url, $relative_url);
  }

}
