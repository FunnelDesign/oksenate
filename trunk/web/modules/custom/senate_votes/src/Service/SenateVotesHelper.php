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
use Drupal\Component\Utility\UrlHelper;

use PhpOffice\PhpSpreadsheet\IOFactory;

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

  public function getListFiles($dir, $updated = 0) {
    $files = [];
    $regex = '/\.(' . preg_replace('/ +/', '|', preg_quote('xls')) . ')$/i';

    if (is_dir($dir)) {
      if ($dh = opendir($dir)) {
        while (($file = readdir($dh)) !== FALSE) {
          $last_updated = filemtime($dir . '/' . $file);
          if (($file[0] != '.') && preg_match($regex, $file) && ($last_updated >= $updated)) {
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
    $data = [];
    $regex = '/\.(' . preg_replace('/ +/', '|', preg_quote('txt')) . ')$/i';
    if (!preg_match($regex, $file)) {
      return [];
    }

    $absolute_path = $directory . '/' . $file;
    $file_content = file_get_contents($absolute_path);

    if ($file_content === FALSE) {
      \Drupal::logger('senate_votes')
        ->error(__METHOD__ . ' ' . t('failed. Message = Can\'t open file %file.', [
            '%file' => $absolute_path,
          ]));
    }

    if (strpos($file_content, '[status:1]') === FALSE) {
      $file_regex = '/([1-9]|1[0-2])\/([1-9]|[12]\d|3[01])\/([12]\d{3})(.*)(\d{1,2})/i';
      preg_match_all($file_regex, $file_content, $out);

      if (!empty($out) && !empty($out[0]) && is_array($out[0])) {
        foreach ($out[0] as $key => $row) {
          $parts = preg_split('/[\t]{1,2}/', $row);
          if (!empty($parts[0])) {
            $data[$key]['date'] = trim($parts[0]);
          }
          if (!empty($parts[1])) {
            $data[$key]['measure'] = trim($parts[1]);
          }
          if (!empty($parts[2])) {
            $data[$key]['author'] = trim($parts[2]);
          }
          if (!empty($parts[3])) {
            $data[$key]['action'] = [
              'name' => trim($parts[3])
            ];
          }
          if (!empty($parts[4])) {
            $data[$key]['yeas'] = trim($parts[4]);
          }
          if (!empty($parts[5])) {
            $data[$key]['noes'] = trim($parts[5]);
          }
        }
      }

      if (empty($data)) {
        \Drupal::logger('senate_votes')
          ->error(__METHOD__ . ' ' . t('failed. Message = Error in decoding %file.', [
              '%file' => $absolute_path,
            ]));
      }
    }

    return (!empty($data) && is_array($data)) ? $data : [];
  }

  public function getFileContentXls($file, $directory) {
    $file_data = [];
    $absolute_path = $directory . '/' . $file;

    $regex = '/\.(' . preg_replace('/ +/', '|', preg_quote('xls')) . ')$/i';
    if (!preg_match($regex, $file)) {
      return [];
    }

    try {
      $reader = IOFactory::createReaderForFile($absolute_path);
      $spreadsheet = $reader->load($absolute_path);
      $sheets_amount = $spreadsheet->getSheetCount();

      for ($i = 0; $i < $sheets_amount; $i++) {
        $sheet = $spreadsheet->getSheet($i);
        $cells = $sheet->toArray(null, false, false, true);
        $cells = !empty($cells) ? $cells : [];
        $data_keys = [];

        foreach ($cells as $row_number => $row) {
          $row = !empty($row) ? $row : [];

          if (empty($data_keys)) {
            $row_strlow = array_map(function ($val) {
              $val = strtolower($val);
              $val = trim($val);
              return $val;
            }, $row);

            if (in_array('date', $row_strlow) &&
              in_array('measure', $row_strlow) &&
              in_array('author', $row_strlow) &&
              in_array('action', $row_strlow) &&
              in_array('yeas', $row_strlow) &&
              in_array('nays', $row_strlow)) {

              $data_keys = array_flip($row_strlow);

              $main_title = $sheet->getCell('A1')->getValue();
              $main_title = !empty($main_title) ? trim($main_title) : 'Votes';
              $title = $sheet->getCell('A2')->getValue();
              $title = !empty($title) ? trim($title) : $main_title;
              $desc = $sheet->getCell('A3')->getValue();
              $desc = trim($desc);
              $file_data[$i] = [
                'title' => $title,
                'description' => $desc
              ];
            }
          }
          else {
            foreach ($row as $cell_key => $row_value) {
              if (!empty($row_value)) {
                $key = array_search($cell_key, $data_keys);

                if (!empty($key)) {
                  switch ($key) {
                    case 'measure':
                    case 'author':
                    case 'action':
                      $url = $sheet->getCell($cell_key . $row_number)->getHyperlink();
                      $url = !empty($url) ? $url->getUrl() : '';
                      $file_data[$i]['rows'][$row_number][$key] = [
                        'value' => trim($row_value),
                        'url' => $url
                      ];
                      break;
                    case 'date':
                      $row_value = trim($row_value);
                      $file_data[$i]['rows'][$row_number][$key] = $this->getDate($row_value);
                      break;
                    default:
                      $file_data[$i]['rows'][$row_number][$key] = trim($row_value);
                      break;
                  }
                }
              }
            }
          }
        }

        if (empty($data_keys)) {
          \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Empty data reading file %filename, sheet %sheet.', [
              '%filename' => $file,
              '%sheet' => $i,
            ]));
        }
      }

      return $file_data;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Error during open file %error.', [
          '%error' => $e,
        ]));
    }
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
    $regex = '/(\b(https?):\/\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]/i';

    if (!empty($new_data['date'])) {
      $paragraph->set('field_senate_votes_date', $new_data["date"]);
    }

    if (!empty($new_data['measure']['value'])) {
      $paragraph->set('field_senate_votes_measure', $new_data["measure"]['value']);
    }
    if (!empty($new_data['measure']['url']) && UrlHelper::isValid($new_data['measure']['url'], TRUE)) {
      $paragraph->set('field_senate_votes_measure_link', $new_data["measure"]['url']);
    }

    if (!empty($new_data['author']['value'])) {
      $paragraph->set('field_senate_votes_author', $new_data["author"]['value']);
    }
    if (!empty($new_data['author']['url']) && UrlHelper::isValid($new_data['author']['url'], TRUE)) {
      $paragraph->set('field_senate_votes_author_link', $new_data["author"]['url']);
    }

    if (!empty($new_data['fid'])) {
      $paragraph->set('field_senate_votes_action_file', [
        'target_id' => $new_data['fid'],
        'description' => $new_data['file_name'],
      ]);
    }
    if (isset($new_data['yeas']) && is_numeric($new_data["yeas"])) {
      $paragraph->set('field_senate_votes_yeas', $new_data["yeas"]);
    }
    if (isset($new_data['nays']) && is_numeric($new_data["nays"])) {
      $paragraph->set('field_senate_votes_nays', $new_data["nays"]);
    }

    if (!empty($new_data['action']['value'])) {
      $url = !empty($new_data['action']['url']) && preg_match($regex, $new_data['action']['url']) ?
        $new_data['action']['url'] : 'route:<nolink>';
      $paragraph->set('field_senate_votes_action_link',
        [
          'uri' => $url,
          'title' => $new_data["action"]['value'],
        ]
      );
    }
  }

  public function prepareParagraphData($data) {
    $new_data = [];
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    $new_data['date'] = !empty($data['date']) ? $data['date'] : '';
    $new_data['measure'] = !empty($data['measure']) ? $data['measure'] : [];
    $new_data['author'] = !empty($data['author']) ? $data['author'] : [];
//    $new_data['fid'] = !empty($data['fid']) ? $data['fid'] : '';
//    $new_data['file_name'] = !empty($data['action']) && !empty($data['action']['name']) ?
//      $data['action']['name'] : t('Description');
    $new_data['yeas'] = isset($data['yeas']) && is_numeric($data['yeas']) ? $data['yeas'] : '';
    $new_data['nays'] = isset($data['nays']) && is_numeric($data['nays']) ? $data['nays'] : '';
    $new_data['action'] = !empty($data['action']) ? $data['action'] : [];

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

  public function setFileStatus($file, $directory) {
    $file_path = $directory . '/' . $file;
    $text = '[status:1]';
    $new_contents = PHP_EOL . $text;

    if (!empty($new_contents)) {
      $result = file_put_contents($file_path, $new_contents, FILE_APPEND | LOCK_EX);

      if ($result === FALSE) {
        \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Status. Could not insert into file %file.', [
            '%file' => $file_path,
          ]));
      }
    }
  }

  /**
   * Normalize Date field.
   * @param $date
   * @param $format
   *
   * @return false|string
   */
  public function getYear($date, $format = 'Y') {
    if (empty($date)) {
      return '';
    }

    $config = \Drupal::config('system.date');
    $default_timezone = $config->get('timezone.default');
    $date_obj = new DrupalDateTime($date, $default_timezone);
    $new_date = $date_obj->format($format);

    return $new_date;
  }

  public function getNodeByYearSession($year, $session = '1st') {
    if (empty($year)) {
      return '';
    }

    try {
      $query = $this->database->select('node_field_data', 'n')
        ->fields('n', ['nid'])
        ->condition('n.type', 'senate_votes');
//        ->condition('n.status', 1);

      $query->innerJoin('node__field_senate_votes_year', 'votes_year', 'votes_year.entity_id = n.nid AND votes_year.deleted = 0');
      $query->condition('votes_year.field_senate_votes_year_value', $year);

      if (!empty($session)) {
        $query->leftJoin('node__field_senate_votes_title', 'votes_title', 'votes_title.entity_id = n.nid AND votes_title.deleted = 0');
        $query->fields('votes_title', ['field_senate_votes_title_value']);
        $query->condition('votes_title.field_senate_votes_title_value', '%' . $session . '%', 'LIKE');
      }

      //      $a = $query->__toString();

      $result = $query->execute()->fetchAllKeyed();
      $result = !empty($result) ? $result : [];
      $is_ext = (strpos($session, 'ext') !== FALSE);
      reset($result);
      $result_nid = key($result);

      foreach ($result as $nid => $title) {
        $title = strtolower($title);
        $title_ext = (strpos($title, 'ext') !== FALSE);

        if ($is_ext && $title_ext) {
          $result_nid = $nid;
        }
        elseif (!$is_ext && !$title_ext) {
          $result_nid = $nid;
        }
      }

      return $result_nid;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }

  public function getVotesData($nid) {
    if (empty($nid)) {
      return '';
    }
    $new_data = [];

    try {
      $query = $this->database->select('node_field_data', 'n')
        ->condition('n.type', 'senate_votes')
        ->condition('n.nid', $nid);
//        ->condition('n.status', 1);

      $query->innerJoin('node__field_senate_votes', 'votes', 'votes.entity_id = n.nid AND votes.deleted = 0');
      $query->fields('votes', ['field_senate_votes_target_id']);
      $query->leftJoin('paragraph__field_senate_votes_date', 'votes_date', 'votes_date.entity_id = votes.field_senate_votes_target_id AND votes_date.deleted = 0');
      $query->fields('votes_date', ['field_senate_votes_date_value']);

      $query->leftJoin('paragraph__field_senate_votes_measure', 'votes_measure', 'votes_measure.entity_id = votes.field_senate_votes_target_id AND votes_measure.deleted = 0');
      $query->fields('votes_measure', ['field_senate_votes_measure_value']);

      $query->leftJoin('paragraph__field_senate_votes_author', 'author', 'author.entity_id = votes.field_senate_votes_target_id AND author.deleted = 0');
      $query->fields('author', ['field_senate_votes_author_value']);

      $query->leftJoin('paragraph__field_senate_votes_nays', 'nays', 'nays.entity_id = votes.field_senate_votes_target_id AND nays.deleted = 0');
      $query->fields('nays', ['field_senate_votes_nays_value']);

      $query->leftJoin('paragraph__field_senate_votes_yeas', 'yeas', 'yeas.entity_id = votes.field_senate_votes_target_id AND yeas.deleted = 0');
      $query->fields('yeas', ['field_senate_votes_yeas_value']);

      $query->leftJoin('paragraph__field_senate_votes_action_link', 'action', 'action.entity_id = votes.field_senate_votes_target_id AND action.deleted = 0');
      $query->fields('action', ['field_senate_votes_action_link_title']);

//      $a = $query->__toString();

      $result = $query->execute()->fetchAll();

      foreach ($result as $row) {
        $date = !empty($row->field_senate_votes_date_value) ?
          $this->getDate($row->field_senate_votes_date_value) : '';
        $measure = !empty($row->field_senate_votes_measure_value) ?
          $row->field_senate_votes_measure_value : '';
        $author = !empty($row->field_senate_votes_author_value) ?
          $row->field_senate_votes_author_value : '';
        $yeas = !empty($row->field_senate_votes_yeas_value) ?
          $row->field_senate_votes_yeas_value : '';
        $nays = !empty($row->field_senate_votes_nays_value) ?
          $row->field_senate_votes_nays_value : '';
        $action = !empty($row->field_senate_votes_action_link_title) ?
          $row->field_senate_votes_action_link_title : '';
        $pid = !empty($row->field_senate_votes_target_id) ?
          $row->field_senate_votes_target_id : '';

        if (!empty($date)) {
          $new_data[$date][] = [
            'measure' => $measure,
            'author' => $author,
            'action' => $action,
            'yeas' => $yeas,
            'nays' => $nays,
            'pid' => $pid,
          ];
        }
      }

      return $new_data;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }

  /**
   * Normalize Date field.
   * @param $date
   * @param $format
   *
   * @return false|string
   */
  public function getDate($date, $format = 'n/j/Y') {
    if (empty($date)) {
      return '';
    }

    $config = \Drupal::config('system.date');
    $default_timezone = $config->get('timezone.default');
    $date_obj = new DrupalDateTime($date, $default_timezone);
    $new_date = $date_obj->format($format);

    return $new_date;
  }

  public function checkParagraphExists($existing_paragraph, $new_data) {
    $date = !empty($new_data["date"]) ? $new_data["date"] : '';
    $measure = !empty($new_data["measure"]) ? $new_data["measure"]["value"] : '';
    $author = !empty($new_data["author"]) ? $new_data["author"]["value"] : '';
    $yeas = !empty($new_data["yeas"]) ? $new_data["yeas"] : '';
    $nays = !empty($new_data["nays"]) ? $new_data["nays"] : '';
    $action = !empty($new_data["action"]) ? $new_data["action"]['value'] : '';

    $rows = !empty($existing_paragraph[$date]) ? $existing_paragraph[$date] : [];
    $add_rules = strpos($measure, '*') !== FALSE;
    $result = FALSE;
    $pid = '';

    foreach ($rows as $row) {
      $row_action = !empty($row['action']) ? $row['action'] : '';
      $row_yeas = !empty($row['yeas']) ? $row['yeas'] : '';
      $row_nays = !empty($row['nays']) ? $row['nays'] : '';
      $row_measure = !empty($row['measure']) ? $row['measure'] : '';

      if (($measure == $row_measure) && ($action == $row_action) &&
        ($yeas == $row_yeas) && ($nays == $row_nays)) {
        $result = TRUE;
        $pid = !empty($row['pid']) ? $row['pid'] : '';
      }
    }

    return (!empty($existing_paragraph[$date]) && $result && !empty($pid)) ? $pid : FALSE;
  }

  /**
   * Creates new node.
   * @param $node_data
   *
   * @return \Drupal\Core\Entity\EntityInterface
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function createNode($node_data) {
    $date_obj = new DrupalDateTime('now', DateTimeItemInterface::STORAGE_TIMEZONE);
    $node = Node::create([
      'type' => 'senate_votes',
      'created' => $date_obj->getTimestamp(),
    ]);

    $this->updateNodeFields($node, $node_data, 'create');

    $node->set('status', 0);

    $node->enforceIsNew();
    $node->save();

    return $node;
  }

  /**
   * Updates node fields.
   * @param $node
   * @param $data
   * @param $taxonomy
   * @param $op
   */
  public function updateNodeFields(&$node, $data, $op = 'update') {
    $legislature = !empty($data["legislature"]) ? $data["legislature"] : 'Legislature';

    if (!empty($data['title'])) {
      $node->set('title', $data['title']);
    }
    if (!empty($data["description"])) {
      $node->set('body', $data["description"]);
    }
    if (!empty($data["year"])) {
      $node->set('field_senate_votes_year', $data["year"]);
      $node->set('field_senate_votes_title', $data["year"] . ' - 1st Session');
    }

    $node->set('field_senate_votes_legislature', $legislature);
  }


  public function updateParagraph($pid, $data) {
    if (empty($pid) || empty($data)) {
      return '';
    }

    $paragraph = \Drupal\paragraphs\Entity\Paragraph::load($pid);

    if (!empty($paragraph)) {
      $this->updateParagraphFields($paragraph, $data);

      $paragraph->save();
    }
    else {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Can\'t load %pid paragraph.', [
          '%pid' => $pid,
        ]));
    }

    return !empty($paragraph) ? $paragraph : '';
  }

  /**
   * Get node by first row data.
   * @param $data
   *
   * @return string
   */
  public function getNodeByFirstRowData($data) {
    if (empty($data)) {
      return '';
    }

    $date = !empty($data["date"]) ? $data["date"] : '';
    $measure = !empty($data["measure"]) && !empty($data["measure"]["value"]) ?
      $data["measure"]["value"] : '';
    $author = !empty($data["author"]) && !empty($data["author"]["value"]) ?
      $data["author"]["value"] : '';

    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    try {
      $query = $this->database->select('node_field_data', 'n')
        ->fields('n', ['nid', 'status', 'created'])
        ->condition('n.type', 'senate_votes');

      $query->innerJoin('node__field_senate_votes', 'votes', 'votes.entity_id = n.nid AND votes.deleted = 0');

      if (!empty($date) && !empty($events_sync_helper)) {
        $date = $events_sync_helper->normalizeExternalDateData($date, DateTimeItemInterface::DATE_STORAGE_FORMAT);
        $query->leftJoin('paragraph__field_senate_votes_date', 'votes_date', 'votes.field_senate_votes_target_id = votes_date.entity_id AND votes_date.deleted = 0');
        $query->fields('votes_date', ['field_senate_votes_date_value']);
        $query->condition('votes_date.field_senate_votes_date_value', $date);
      }

      if (!empty($measure)) {
        $query->leftJoin('paragraph__field_senate_votes_measure', 'votes_measure', 'votes.field_senate_votes_target_id = votes_measure.entity_id AND votes_measure.deleted = 0');
        $query->fields('votes_measure', ['field_senate_votes_measure_value']);
        $query->condition('votes_measure.field_senate_votes_measure_value', $measure);
      }

      if (!empty($author)) {
        $query->leftJoin('paragraph__field_senate_votes_author', 'votes_author', 'votes.field_senate_votes_target_id = votes_author.entity_id AND votes_author.deleted = 0');
        $query->fields('votes_author', ['field_senate_votes_author_value']);
        $query->condition('votes_author.field_senate_votes_author_value', $author);
      }

      $query->orderBy('n.created', 'ASC');

//      $a = $query->__toString();

      $result = $query->execute()->fetchAll();
      $result = !empty($result) ? $result : [];
      $result_nid = '';

      if (!empty($result[0]) && ($result[0]->status === '1')) {
        $result_nid = $result[0]->nid;
      }
      else {
        foreach ($result as $node) {
          if (empty($result_nid) && ($node->status === '1')) {
            $result_nid = $node->nid;
          }
        }

        if (empty($result_nid) && !empty($result[0])) {
          $result_nid = $result[0]->nid;
        }
      }

      return $result_nid;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }
}
