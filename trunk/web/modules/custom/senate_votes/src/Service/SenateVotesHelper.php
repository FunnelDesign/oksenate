<?php

namespace Drupal\senate_votes\Service;

use Drupal\Component\Serialization\Json;
use Drupal\Core\Database\Driver\mysql\Connection;
use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\File\FileSystemInterface;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Core\Messenger\MessengerTrait;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Drupal\migrate\MigrateException;
use Drupal\node\Entity\Node;
use Drupal\paragraphs\Entity\Paragraph;
use GuzzleHttp\Exception\RequestException;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\node\NodeStorageInterface;
use Drupal\file\Entity\File;

/**
 * Class EventsCustomHelper.
 */
class SenateVotesHelper {

  use MessengerTrait;

  /**
   * Drupal\Core\Database\Driver\mysql\Connection definition.
   *
   * @var \Drupal\Core\Database\Driver\mysql\Connection
   */
  protected $database;

  /**
   * @var EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * @var NodeStorageInterface
   */
  protected $nodeStorage;

  /**
   * EventsCustomHelper constructor.
   *
   * @param \Drupal\Core\Database\Driver\mysql\Connection $database
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function __construct(Connection $database, MessengerInterface $messenger, EntityTypeManagerInterface $entity_type_manager) {
    $this->database = $database;
    $this->setMessenger($messenger);
    $this->entityTypeManager = $entity_type_manager;
    $this->nodeStorage = $this->entityTypeManager->getStorage('node');
  }

  public function getListFiles($dir) {
    $files = [];
    $regex = '/\.(' . preg_replace('/ +/', '|', preg_quote('txt')) . ')$/i';

    if (is_dir($dir)) {
      if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== FALSE) {
          if (($file[0] != '.') && preg_match($regex, $file)) {
            $files[] = $file;
          }
        }
        closedir($dh);
      }
      else {
        \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Can\'t open %dir directory.', [
            '%dir' => $dir,
          ]));
      }
    }
    else {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Check path %dir is not a directory', [
          '%dir' => $dir,
        ]));
    }

    return $files;
  }

  public function getFileContent($file, $directory) {
    $regex = '/\.(' . preg_replace('/ +/', '|', preg_quote('txt')) . ')$/i';
    if (!preg_match($regex, $file)) {
      return [];
    }

    $absolute_path = $directory . '/' . $file;
    $handle = fopen($absolute_path, "r");
    $file_content = [];

    if (!empty($handle)) {
      while (!feof($handle)) {
        $file_content[] = fgets($handle);
      }
    }
    else {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Can\'t open file %file.', [
          '%file' => $absolute_path,
        ]));
    }

    $file_content_imp = implode("", $file_content);
    $file_content_imp = str_replace("\r", '', $file_content_imp);
    $file_content_imp = str_replace("\n", '', $file_content_imp);
    $file_content_imp = trim($file_content_imp);

    $data = Json::decode($file_content_imp);
    if (empty($data)) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Error in decoding %file.', [
          '%file' => $absolute_path,
        ]));
    }

    return (!empty($data) && is_array($data)) ? $data : [];
  }

  public function createParagraph($parent, $parent_field, $data) {
    if (empty($parent) || !is_object($parent) || empty($parent_field) || empty($data)) {
      return '';
    }

    $paragraph = Paragraph::create([
      'type' => $parent->bundle(),
      'parent_id' => $parent->id(),
      'parent_type' => 'node',
      'parent_field_name' => $parent_field,
    ]);

    $this->updateParagraphFields($paragraph, $data, 'create');

    $paragraph->isNew();
    $paragraph->save();

    return !empty($paragraph) ? $paragraph : '';
  }

  public function updateParagraphFields(&$paragraph, $data, $op = 'update') {
    $new_data = $this->prepareParagraphData($data);

    if (!empty($new_data['date'])) {
      $paragraph->set('field_senate_votes_date', $new_data["date"]);
    }
    if (!empty($new_data['measure'])) {
      $paragraph->set('field_senate_votes_measure', $new_data["measure"]);
    }
    if (!empty($new_data['author'])) {
      $paragraph->set('field_senate_votes_author', $new_data["author"]);
    }
    if (!empty($new_data['fid'])) {
      $paragraph->set('field_senate_votes_action_file', [
        'target_id' => $new_data['fid'],
        'description' => $new_data['file_name'],
      ]);
    }
    if (!empty($new_data['yeas'])) {
      $paragraph->set('field_senate_votes_yeas', $new_data["yeas"]);
    }
    if (!empty($new_data['noes'])) {
      $paragraph->set('field_senate_votes_nays', $new_data["noes"]);
    }
  }

  public function prepareParagraphData($data) {
    $new_data = [];
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    $new_data['date'] = !empty($data['date']) ? $data['date'] : '';
    $new_data['measure'] = !empty($data['measure']) ? $data['measure'] : '';
    $new_data['author'] = !empty($data['author']) ? $data['author'] : '';
    $new_data['fid'] = !empty($data['fid']) ? $data['fid'] : '';
    $new_data['file_name'] = !empty($data['action']) && !empty($data['action']['name']) ?
      $data['action']['name'] : t('Description');
    $new_data['yeas'] = !empty($data['yeas']) ? $data['yeas'] : '';
    $new_data['noes'] = !empty($data['noes']) ? $data['noes'] : '';

    if (!empty($events_sync_helper) && !empty($new_data['date'])) {
      $new_data['date'] = $events_sync_helper->normalizeExternalDateData($new_data['date'], DateTimeItemInterface::DATE_STORAGE_FORMAT);
    }

    return $new_data;
  }

  public function createFile($file_name, $directory) {
    $file_uri = $this->copyFile($file_name, $directory, 'senate_votes_pdf');
    $fid = '';

    if (!empty($file_uri)) {
      $file = File::create([
        'uid' => 1,
        'filename' => $file_name,
        'uri' => $file_uri,
        'status' => 1,
      ]);
      $file->save();
      $fid = $file->id();

      $file_usage = \Drupal::service('file.usage');
      $file_usage->add($file, 'senate_votes', 'user', 1);
      $file->save();
    }

    return $fid;
  }

  public function copyFile($source, $directory, $destination) {
    $absolute_path = $directory . '/' . $source;
    $destination_path = 'public://' . $destination . '/' . $source;

    try {
      $dir = $this->getDirectory('public://' );
      $dir_destination = $dir . '/' . $destination;

      if (!is_dir($dir_destination ) || !is_writable($dir_destination)) {
        if (!\Drupal::service('file_system')->prepareDirectory($dir_destination, FileSystemInterface::CREATE_DIRECTORY | FileSystemInterface::MODIFY_PERMISSIONS)) {
          throw new \Drupal\Core\File\Exception\FileException("Could not create or write to directory '$dir'");
        }
      }

      $file_uri = \Drupal::service('file_system')->copy($absolute_path, $destination_path);

      return !empty($file_uri) ? $file_uri : '';
    }
    catch (\Drupal\Core\File\Exception\FileException $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Error during copy file %error.', [
          '%error' => $e,
        ]));
    }
  }

  public function getDirectory($uri) {
    $dir = \Drupal::service('file_system')->dirname($uri);
    if (substr($dir, -3) == '://') {
      return \Drupal::service('file_system')->realpath($dir);
    }
    return $dir;
  }
}
