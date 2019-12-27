<?php

namespace Drupal\import_audio\Service;

use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\import_audio\Exceptions\ImportParseError;
use Drupal\import_audio\ParserHelper;
use Drupal\node\Entity\Node;
use Drupal\paragraphs\Entity\Paragraph;

/**
 * Class JournalParserService.
 */
class JournalParserService {

  /**
   * Constructs a new JournalParserService object.
   */
  public function __construct() {

  }

  public function parseAndSaveSession($url, $title) {
    $this->saveSessionNode($url, $title);

    if($this->isMultipleSession($url)) {
      $this->pushMultipleSessionFiles($url);
    } else {
      $this->pushToSaveFile($url, $url);
    }
  }

  private function isMultipleSession($url) {
    return !preg_match('/\.pdf/i', $url);
  }

  private function saveSessionNode($url, $title) {

    $node = $this->getNodebyOldUrl($url);

    if(empty($node)) {

      $title_parts = explode('-', $title);
      $node = Node::create(
        [
          'title' => trim($title_parts[0]),
          'field_journals_subtitle' => trim(implode('-', array_splice($title_parts, 1))),
          'field_old_url' => $url,
          'type' => 'journals'
        ]
      );

      $node->save();
    }
  }

  public function pushMultipleSessionFiles($url) {
    $files = [];

    $html = ParserHelper::getPageHtml($url);
    $pq  = \phpQuery::newDocument($html);

    $file_urls = [];
//    $absolute_urls = [];
    $pq_links = $pq->find('a');
    $queue = \Drupal::queue('import_audio_save_journal_file');
    foreach ($pq_links as $link) {
      $pq_link = pq($link);
      $file_url = $pq_link->attr('href');
      if(!in_array($file_url, $file_urls) && $this->isValidFileUrl($file_url)) {
        $file_urls[] = $file_url;
        //$absolute_urls[] = ParserHelper::getAbsoluteUrl($url, $file_url);
        $queue->createItem(['file_url' => ParserHelper::getAbsoluteUrl($url, $file_url), 'parent_url' => $url]);
      }
    }

//    dsm($absolute_urls);
    //return $files;
  }

  private function pushToSaveFile($file_url, $parent_url) {
    \Drupal::queue('import_audio_save_journal_file')
      ->createItem(['file_url' => $file_url, 'parent_url' => $parent_url]);
  }

  public function saveFile($file_url, $parent_url) {
//    $data['file_url'];
//    $data['parent_url'];

    $node = $this->getNodebyOldUrl($parent_url);



    $paragraphs = \Drupal::entityTypeManager()
      ->getStorage('paragraph')
      ->loadByProperties(['field_journals_old_url' => $file_url]);

    $paragraph = !empty($paragraphs) ? reset($paragraphs) : NULL;
    if (empty($paragraph)) {
      $folder = 'public://journals';
      $file = ParserHelper::saveExternalFile($file_url, $folder);
      $paragraph = Paragraph::create(

        [
          'type' => 'journals_files',
          'field_journals_old_url' => $file_url,
          'field_journals_files_file' => [
            'target_id' => $file->id(),
          ],
        ]
      );
      if($this->isMultipleSession($parent_url)) {
        $date_string = $this->parseFileDate($file_url);
        if(!empty($date_string)) {
          $paragraph->field_journals_files_date = $date_string;
        } else {
          \Drupal::logger('journal_parse_error')->error('<pre><code>' . print_r(['file' => $file_url, 'parent' => $parent_url], TRUE)  .  '</code></pre>');
          throw new ImportParseError('Missing file date');
        }
      }

      $paragraph->save();
    }
//    $node->field_content = array(
//      array(
//        'target_id' => $paragraph->id(),
//        'target_revision_id' => $paragraph->getRevisionId(),
//      )
    $file_exist = FALSE;
    if (!empty($node->field_journals_files)) {
      foreach ($node->field_journals_files as $file) {
        //remove exist values, from array to add
        if ($file->target_id ==$paragraph->id() ) {
          $file_exist = TRUE;
          break;
        }
      }
    }

      if (!$file_exist) {
        $node->field_journals_files->appendItem([
          'target_id' => $paragraph->id(),
          'target_revision_id' => $paragraph->getRevisionId(),
        ]);
        $node->save();
      }
  }

  /**
   * @param $url
   *
   * @return \Drupal\node\Entity\Node
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  private function getNodebyOldUrl($url) {
    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(['type' => 'journals', 'field_old_url' => $url]);

    return !empty($nodes) ? reset($nodes) : NULL;
  }

  /**
   * @param $file_url
   *
   * @return string
   */
  public function parseFileDate($file_url): string {
    $file_name = basename($file_url);
    $date_obj = date_create_from_format(
      'Ymd', preg_replace("/[^0-9]/", "", $file_name)
    );
    $date_string = $date_obj->format(
      DateTimeItemInterface::DATE_STORAGE_FORMAT
    );
    return $date_string;
  }

  private function isValidFileUrl($url) {
    if(empty($url)) {
      return FALSE;
    }
    $check_parts = ['#', 'adobe.com'];
    foreach ($check_parts as $bad_url_part) {
      if(strpos($url, $bad_url_part) !== FALSE) {
        return FALSE;
      }
    }

    return TRUE;
  }

}
