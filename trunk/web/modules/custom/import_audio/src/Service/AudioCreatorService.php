<?php

namespace Drupal\import_audio\Service;

use Drupal;
use Drupal\Core\File\FileSystemInterface;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\import_audio\Exceptions\ImportNoNodeError;
use Drupal\import_audio\Exceptions\ImportParseError;
use Drupal\import_audio\ParserHelper;
use Drupal\media\Entity\Media;
use Drupal\node\Entity\Node;
use Exception;

/**
 * Class PressCreatorService.
 */
class AudioCreatorService {

  /**
   * Constructs a new PressCreatorService object.
   */
  public function __construct() {

  }

  public function saveAudio(array $data) {

    if (empty($data['url'])) {
      $node = $this->loadPressByDateTitle($data['title'], $data['date']);
      if (empty($node)) {
        $node = $this->createOnlyAudioNode($data);
      }
    }
    else {
      //fix url
      $data['url'] = $this->fixPressReleaseUrl($data['url']);


      $nodes = \Drupal::entityTypeManager()
        ->getStorage('node')
        ->loadByProperties(['field_press_release_old_url' => $data['url']]);
      $node = !empty($nodes) ? reset($nodes) : NULL;

      if(empty($node)) {
        $data['url'] = $this->fixPressReleaseUrl2($data['url']);
        $nodes = \Drupal::entityTypeManager()
          ->getStorage('node')
          ->loadByProperties(['field_press_release_old_url' => $data['url']]);
        $node = !empty($nodes) ? reset($nodes) : NULL;
      }
    }




      if (empty($data['files'])) {
        $message = $data['url'] . " no files error  \r\n";
        file_put_contents('import_logs/' . IMPORT_LOG_COUNTER . '/no_files.log', $message, FILE_APPEND);
        \Drupal::logger('audio_import_no_files_error')->error('<pre><code>' . print_r($data, TRUE) . '</code></pre>');
        return;
      }

      $drupal_audio_medias = [];

      foreach ($data['files'] as $file_info) {

        try {
          $audio_media = $this->createMedia($file_info['url'], $file_info['desc']);
          $drupal_audio_medias[$audio_media->id()] = $audio_media;

        } catch (Exception $e) {
          $info = [
            'file' => $file_info,
            'error' => $e->getMessage(),
            'data' => $data,
          ];
          $message = $data['url'] . ' ' . $file_info['url'] .   ' save file error ' .  $e->getMessage()  ."\r\n";
          file_put_contents('import_logs/' . IMPORT_LOG_COUNTER . '/save_file_error.log', $message, FILE_APPEND);
          \Drupal::logger('audio_import_save_file_error')->error('<pre><code>' . print_r($info, TRUE) . '</code></pre>');
        }
      }

      if (empty($node)) {
        $message = $data['url'] . ' no node error '   . "\r\n";
        file_put_contents('import_logs/' . IMPORT_LOG_COUNTER . '/save_file_error.log', $message, FILE_APPEND);
        \Drupal::logger('audio_import_no_node_error')->error('<pre><code>' . print_r($data, TRUE) . '</code></pre>');

        throw new ImportNoNodeError('No node');
      }

      if (!empty($node->field_press_release_audio)) {
        foreach ($node->field_press_release_audio as $audio) {
          //remove exist values, from array to add
          if (isset($drupal_audio_medias[$audio->target_id])) {
            unset($drupal_audio_medias[$audio->target_id]);
          }
        }
      }

      if (!empty($drupal_audio_medias)) {
        foreach ($drupal_audio_medias as $id => $drupal_media) {
          $node->field_press_release_audio->appendItem($id);
        }
        $node->save();
      }

      return $node;

  }

  /**
   * @param $title
   * @param $date string
   *              m.d.y  example '02.28.13'
   *
   * @return mixed \Drupal\node\Entity\Node|boolen
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\import_audio\Exceptions\ImportParseError
   */
  public function loadPressByDateTitle($title, $date) {

    $nodes = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadByProperties(
        [
          'type' => 'press_release',
          'title' => $title,
          'field_date' => $this->convertDateInDbFormat($date),
        ]
      );

    return reset($nodes);
  }

  /**
   * @param $date string
   *              m.d.y  example '02.28.13'
   *
   * @return string
   */
  protected function convertDateInDbFormat($date): string {
    $date_obj = date_create_from_format('m.d.y', $date);
    if(empty($date_obj)) {
      throw new ImportParseError('Invalid date ' . $date);
    }
    $date_obj->setTime(0, 0, 0);

    return $date_obj->format(DateTimeItemInterface::DATETIME_STORAGE_FORMAT);
  }

  /**
   * @param array $data
   *
   * @return \Drupal\Core\Entity\EntityInterface
   */
  public function createOnlyAudioNode(array $data) {
    return Node::create(
      [
        'type' => 'press_release',
        'title' => $data['title'],
        'field_press_release_type' => 'only_audio',
        'field_date' => $this->convertDateInDbFormat($data['date']),
      ]
    );
  }

  /**
   * @param $url string
   *
   * @return array
   */
  public function fixPressReleaseUrl($url) {
    if (strpos($url, 'press_releases_audio_clips') !== FALSE) {
      preg_match(
        '/press_releases_audio_clips\/(20[0-9]{2})/', $url, $matches
      );

      //find year and replace
      if (!empty($matches[1])) {
        $url = str_replace(
          'press_releases_audio_clips',
          'press_releases/press_releases_' . $matches[1], $url
        );
      }
    }
    return $url;
  }

  public function fixPressReleaseUrl2($url) {
    $url = preg_replace('/20[0-9]{2}_audio_clips/', '', $url);
    return $url;
  }

  /**
   * @param        $file_url
   * @param string $file_desc
   *
   * @return \Drupal\Core\Entity\EntityInterface|\Drupal\Core\Entity\EntityInterface[]|mixed
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  private function createMedia($file_url, $file_desc = ''): Media {

    $media = \Drupal::entityTypeManager()
      ->getStorage('media')
      ->loadByProperties(['field_media_audio_old_url' => $file_url]);

    $media = reset($media);
    if (!empty($media)) {
      return $media;
    }

    $folder = 'public://press_release_audio';
    $file = ParserHelper::saveExternalFile($file_url, $folder);

    $audio_media = Media::create(
      [
        'bundle' => 'audio',
        'uid' => \Drupal::currentUser()->id(),
        'langcode' => \Drupal::languageManager()->getDefaultLanguage()->getId(),
        'status' => 1,
        'field_media_audio_old_url' => $file_url,
        'field_audio_description' => $file_desc,
        'field_media_audio_file' => [
          'target_id' => $file->id(),
        ],
      ]
    );

    $audio_media->save();

    return $audio_media;
  }

}
