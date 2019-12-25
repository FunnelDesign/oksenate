<?php

namespace Drupal\import_audio\Service;

use DateTime;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\import_audio\Exceptions\ImportParseError;
use Drupal\import_audio\ParserHelper;
use Drupal\node\Entity\Node;
use phpQuery;

/**
 * Class WeekParserService.
 */
class WeekParserService {

  /**
   * Constructs a new WeekParserService object.
   */
  public function __construct() {

  }

  public function parseAndSave($url) {
//    $url = 'http://www.oksenate.gov/news/week_in_review/week_in_review_2016/wir2016031417.htm';
//    $url = 'http://www.oksenate.gov/news/week_in_review/week_in_review_1998/WIR980202.html';
    $parts = ['title' => '', 'body' => '', 'start_date' => '', 'end_date' => '', 'url' => $url];
    //$html = \Drupal::state()->get('audio_import.temp');
//    if(empty($html)) {
      $html = ParserHelper::getPageHtml($url);
//      \Drupal::state()->set('audio_import.temp', $html);
////      dsm($html, 'html');
//    }


    $pq_html = PhpQuery::newDocument($html);
    $content = $pq_html->find('table tr td:first:contains(Week)')->html();
    if(empty($content)) {
      $content = $pq_html->find('body')->html();
    }

    $parts['title'] = $this->grepFullTitle($content);
    if(empty($parts['title'])) {
      $parts['title'] = $this->grepTitleOnlyWithFromDate($content);
    }

    $content_parts = explode($parts['title'], $content);
    //remove header
    $parts['body'] = implode('', array_slice($content_parts, 1));
    if(!empty($parts['body'])) {
      $parts['body'] = $this->cleanBody($parts['body']);
    }


    $parts['title'] = trim(strip_tags(ParserHelper::removeNewLines($parts['title'])));

    list($parts['start_date'], $parts['end_date']) = $this->grepDatesFromTitle($parts['title']);

//    dsm($parts);
    $this->validateParts($parts);

    $this->saveNode($parts);
    return $parts;
  }

  /**
   * Grep title with text like Monday, Mar. 14, to Thursday, Mar. 17, 2016
   * @param $html
   *
   * @return mixed|string
   */
  public function grepFullTitle($html) {
    preg_match('/(For the|Mon)(.*)(jan|feb|mar|apr|may|june|july|aug|sep|nov|dec)(.*)[\r\n]?(.*)(to|-|through)(.*)[\r\n]?(.*)(jan|feb|mar|apr|may|june|july|aug|sep|nov|dec)(.*)[\r\n]?(.*)\d{4}/iU', $html, $matches);
    return $matches[0] ?? '';
  }

  /**
   * Grep title with text like Monday, Mar. 14, to Thursday, Mar. 17, 2016
   * @param $html
   *
   * @return mixed|string
   */
  public function grepTitleOnlyWithFromDate($html) {
    preg_match('/(For the|Mon)(.*)(jan|feb|mar|apr|may|june|july|aug|sep|nov|dec)(.*)\d{4}/i', $html, $matches);
    return $matches[0] ?? '';
  }

  public function grepDatesFromTitle($html) {
    $splitters = [' to ', ',to', '-', 'through'];

    foreach ($splitters as $splitter) {
      $parts = explode($splitter, $html);
      if(count($parts) > 1) {
        break;
      }
    }

    if(!empty($parts[1])) {
      $end_date_parsed = date_parse($parts[1]);
    }

    if(!empty($parts[0])) {
      $start_date_parsed = date_parse(trim($parts[0]));

      if(empty($start_date_parsed['year']) && !empty($end_date_parsed['year'])) {
        $start_date_parsed['year'] = $end_date_parsed['year'];
      }
    }

    $start_date = $this->createDbDate($start_date_parsed);
    $end_date = $this->createDbDate($end_date_parsed);


    return [$start_date, $end_date];
  }

  /**
   * @param array $date_parsed
   *
   * @return string
   * @throws \Exception
   */
  protected function createDbDate($date_parsed): string {
    if (!empty($date_parsed['year'])
      && !empty($date_parsed['month'])
      && !empty($date_parsed['day'])
    ) {

      $start_date_obj = new DateTime();
      $start_date_obj->setDate($date_parsed['year'], $date_parsed['month'], $date_parsed['day']);
      $start_date_obj->setTime(0, 0, 0);
      $start_date = $start_date_obj->format(DateTimeItemInterface::DATE_STORAGE_FORMAT);
    }
    return $start_date ?? '';
  }

  private function validateParts(array $parts) {
    $errors = [];
    $exclude_optional_keys = ['end_date'];

    foreach ($parts as $key => $value) {
      if(empty($value) && !in_array($key, $exclude_optional_keys)) {
        $errors[] = 'Empty ' . $key;
      }
    }

    if(!empty($errors)) {
      \Drupal::logger('week_preview_parser_errror')->error('<pre><code>' . print_r(['errors' => $errors, 'url' => $parts['url']], TRUE)  .  '</code></pre>');
//      dsm(['errors' => $errors, 'url' => $parts['url']]);
      $message = '<a href="' . $parts['url'] . '">' . $parts['url'] ."</a><br>\r\n";
      file_put_contents('week_preview_parse_errors.html', $message, FILE_APPEND);
      throw new ImportParseError('Parse error');
    }
  }

  private function saveNode(array $parts) {

    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(['field_old_url' => $parts['url']]);
    $node = !empty($nodes) ? reset($nodes) : NULL;

    if(!empty($node)) {
      \Drupal::logger('week_preview_node_already_exist')->notice('<pre><code>' . print_r($parts, TRUE)  .  '</code></pre>');
      return;
    }

      $node = Node::create(
        [
          'type' => 'week_review',
          'title' => $parts['title'],
          'body' => ['value' => $parts['body'], 'format' => 'full_html'],
          'field_old_url' => $parts['url'],
          'field_week_review_date' => $parts['start_date'],
          'field_week_review_end_date' => $parts['end_date'] ?? NULL,
        ]
      );

    $node->save();
  }

  private function cleanBody(string $body) {
    $pq_body = PhpQuery::newDocument($body);
    pq('a:content(Index)')->remove();
    pq('img')->remove();

    return ParserHelper::fixEncoding($pq_body->html());
  }

}
