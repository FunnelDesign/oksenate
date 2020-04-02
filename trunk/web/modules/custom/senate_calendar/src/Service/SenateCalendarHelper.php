<?php

namespace Drupal\senate_calendar\Service;

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
class SenateCalendarHelper {

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
    $regex = '/.*\.(xls|xlsx)$/i';

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
        \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = Can\'t open %dir directory.', [
            '%dir' => $dir,
          ]));
      }
    }
    else {
      \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = Check path %dir is not a directory', [
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
      \Drupal::logger('senate_calendar')
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
        \Drupal::logger('senate_calendar')
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

    $regex = '/.*\.(xls|xlsx)$/i';
    if (!preg_match($regex, $file)) {
      return [];
    }

    try {
      $reader = $reader = IOFactory::createReaderForFile($absolute_path);
      $spreadsheet = $reader->load($absolute_path);
      $sheets_amount = $spreadsheet->getSheetCount();

      for ($i = 0; $i < $sheets_amount; $i++) {
        $sheet = $spreadsheet->getSheet($i);
        $sheet_title = $sheet->getTitle();
        $sheet_title = !empty($sheet_title) ? strtolower($sheet_title) : '';
        $sheet_type = (strpos($sheet_title, 'a&b') !== FALSE) ? 'cl_app_bud' : 'cl_jnt_cnf';
        $file_data[$i]['type'] = $sheet_type;
        $cells = $sheet->toArray(null, false, true, true);
        $cells = !empty($cells) ? $cells : [];
        $data_keys = [];

        foreach ($cells as $row_number => $row) {
          $row = !empty($row) ? $row : [];

          if (empty($data_keys)) {
            $next_row = !empty($cells[$row_number + 1]) ? $cells[$row_number + 1] : [];
            $data_keys = $this->getDataKeys($sheet_type, $row, $next_row);
          }
          else {
            foreach ($row as $cell_key => $row_value) {
              if (!empty($row_value)) {
                $key = array_search($cell_key, $data_keys);

                if (!empty($key) && ($sheet_type == 'cl_app_bud')) {
                  switch ($key) {
                    case 'joint_committee_report_date':
                    case 'house_of_origin_action_date':
                    case 'opposite_house_action_date':
                      $row_value = trim($row_value);
                      $file_data[$i]['rows'][$row_number][$key] = $this->getDate($row_value);
                      break;
                    default:
                      $file_data[$i]['rows'][$row_number][$key] = trim($row_value);
                      break;
                  }
                }
                else if (!empty($key) && ($sheet_type == 'cl_jnt_cnf')) {
                  $bill_key = !empty($data_keys['bill_#']) ? $data_keys['bill_#'] : '';
                  $authors_key = !empty($data_keys['authors']) ? $data_keys['authors'] : '';
                  $short_title_key = !empty($data_keys["short_title"]) ? $data_keys["short_title"] : '';
                  $next_row = !empty($cells[$row_number + 1]) ? $cells[$row_number + 1] : [];
                  $next_row_same = !empty($next_row) && empty($next_row[$authors_key]) && empty($next_row[$short_title_key]);

                  if ($next_row_same && !empty($next_row[$cell_key])) {
                    $row_value = trim($row_value) . ' ' . trim($next_row[$cell_key]);
                  }

                  if (!empty($row[$bill_key]) && !empty($row[$authors_key])) {
                    switch ($key) {
                      case 'submitted_in_chamber':
                      case 'adopted_in_chamber':
                      case 'adopted_in_opposite':
                        $row_value = trim($row_value);
                        $file_data[$i]['rows'][$row_number][$key] = $this->getDate($row_value, 'n/j/Y g:i:s A');
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
        }

        if (empty($data_keys)) {
          \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = Empty data reading file %filename, sheet %sheet.', [
              '%filename' => $file,
              '%sheet' => $i,
            ]));
        }
      }

      return $file_data;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = Error during open file %error.', [
          '%error' => $e,
        ]));
    }
  }

  protected function getDataKeys($sheet_type, $row, $next_row) {
    $data_keys = [];

    $row_strlow = $this->getDataKeysNormalize($row);

    if (($sheet_type == 'cl_app_bud') && in_array('bill_#', $row_strlow) &&
      in_array('authors', $row_strlow) &&
      in_array('short_title', $row_strlow) &&
      in_array('joint_committee_report_date', $row_strlow) &&
      in_array('house_of_origin_action_date', $row_strlow) &&
      in_array('opposite_house_action_date', $row_strlow)) {

      $data_keys = array_flip($row_strlow);
    }
    else if ($sheet_type == 'cl_jnt_cnf') {
      $next_row_strlow = $this->getDataKeysNormalize($next_row);
      $keys = ['bill_#', 'authors', 'short_title', 'submitted_in_chamber',
        'adopted_in_chamber', 'adopted_in_opposite'];

      foreach ($row_strlow as $char => $field) {
        if (!empty($next_row_strlow[$char])) {
          $field .= '_' . $next_row_strlow[$char];
        }

        if (in_array($field, $keys)) {
          $data_keys[$field] = $char;
        }
      }
    }

    return $data_keys;
  }

  protected function getDataKeysNormalize($row) {
    $row_strlow = array_map(function ($val) {
      $val = strtolower($val);
      $val = trim($val);
      $val = str_replace(' ', '_', $val);
      $val = str_replace('__', '_', $val);
      return $val;
    }, $row);

    return $row_strlow;
  }

  public function createParagraph($parent, $parent_field, $data, $type, $paragraph_type) {
    if (empty($parent) || !is_object($parent) || empty($parent_field) || empty($data)) {
      return '';
    }

    $paragraph = Paragraph::create([
      'type' => $paragraph_type,
      'parent_id' => $parent->id(),
      'parent_type' => 'node',
      'parent_field_name' => $parent_field
    ]);

    $this->updateParagraphFields($paragraph, $data, $type, 'create');

    $paragraph->isNew();
    $paragraph->save();

    return !empty($paragraph) ? $paragraph : '';
  }

  public function updateParagraphFields(&$paragraph, $data, $type, $op = 'update') {
    $this->prepareParagraphData($data, $type);

    if ($type == 'cl_app_bud') {
      if (!empty($data['bill_#'])) {
        $paragraph->set('field_cl_app_budget_bill', $data['bill_#']);
      }
      if (!empty($data['authors'])) {
        $paragraph->set('field_cl_app_budget_auth', $data['authors']);
      }
      if (!empty($data['short_title'])) {
        $paragraph->set('field_cl_app_budget_title', $data['short_title']);
      }
      if (!empty($data['joint_committee_report_date'])) {
        $paragraph->set('field_cl_app_budget_rep_date', $data['joint_committee_report_date']);
      }
      if (!empty($data['house_of_origin_action_date'])) {
        $paragraph->set('field_cl_app_budget_hsorg_act_dt', $data['house_of_origin_action_date']);
      }
      if (!empty($data['opposite_house_action_date'])) {
        $paragraph->set('field_cl_app_budget_ophs_act_dt', $data['opposite_house_action_date']);
      }
    }
    else if ($type == 'cl_jnt_cnf') {
      if (!empty($data['bill_#'])) {
        $paragraph->set('field_cl_jnt_cnf_bill', $data['bill_#']);
      }
      if (!empty($data['authors'])) {
        $paragraph->set('field_cl_jnt_cnf_auth', $data['authors']);
      }
      if (!empty($data['short_title'])) {
        $paragraph->set('field_cl_jnt_cnf_title', $data['short_title']);
      }
      if (!empty($data['submitted_in_chamber'])) {
        $paragraph->set('field_cl_jnt_cnf_sub_ch_orgn', $data['submitted_in_chamber']);
      }
      if (!empty($data['adopted_in_chamber'])) {
        $paragraph->set('field_cl_jnt_cnf_adop_ch_orgn', $data['adopted_in_chamber']);
      }
      if (!empty($data['adopted_in_opposite'])) {
        $paragraph->set('field_cl_jnt_cnf_adop_opp_ch', $data['adopted_in_opposite']);
      }
    }
  }

  public function prepareParagraphData(&$data, $type) {
    $events_sync_helper = \Drupal::hasService('events_custom.helper') ?
      \Drupal::service('events_custom.helper') : '';

    if ($type == 'cl_app_bud') {
      if (!empty($events_sync_helper)) {
        if (!empty($data["joint_committee_report_date"])) {
          $data["joint_committee_report_date"] = $events_sync_helper->normalizeExternalDateData($data["joint_committee_report_date"], DateTimeItemInterface::DATE_STORAGE_FORMAT);
        }
        if (!empty($data["house_of_origin_action_date"])) {
          $data["house_of_origin_action_date"] = $events_sync_helper->normalizeExternalDateData($data["house_of_origin_action_date"], DateTimeItemInterface::DATE_STORAGE_FORMAT);
        }
        if (!empty($data["opposite_house_action_date"])) {
          $data["opposite_house_action_date"] = $events_sync_helper->normalizeExternalDateData($data["opposite_house_action_date"], DateTimeItemInterface::DATE_STORAGE_FORMAT);
        }
      }
    }
    else if ($type == 'cl_jnt_cnf') {
      if (!empty($events_sync_helper)) {
        if (!empty($data["submitted_in_chamber"])) {
          $data["submitted_in_chamber"] = $events_sync_helper->normalizeExternalDateData($data["submitted_in_chamber"], DateTimeItemInterface::DATETIME_STORAGE_FORMAT);
        }
        if (!empty($data["adopted_in_chamber"])) {
          $data["adopted_in_chamber"] = $events_sync_helper->normalizeExternalDateData($data["adopted_in_chamber"], DateTimeItemInterface::DATETIME_STORAGE_FORMAT);
        }
        if (!empty($data["adopted_in_opposite"])) {
          $data["adopted_in_opposite"] = $events_sync_helper->normalizeExternalDateData($data["adopted_in_opposite"], DateTimeItemInterface::DATETIME_STORAGE_FORMAT);
        }
      }
    }
  }

  public function getABData($nid, $type) {
    if (empty($nid)) {
      return '';
    }
    $new_data = [];

    try {
      $query = $this->database->select('node_field_data', 'n')
        ->condition('n.type', $type)
        ->condition('n.nid', $nid);
//        ->condition('n.status', 1);

      $query->innerJoin('node__field_cl_app_bud_calendar', 'calendar', 'calendar.entity_id = n.nid AND calendar.deleted = 0');
      $query->fields('calendar', ['field_cl_app_bud_calendar_target_id']);

      $query->leftJoin('paragraph__field_cl_app_budget_bill', 'bill', 'bill.entity_id = calendar.field_cl_app_bud_calendar_target_id AND bill.deleted = 0');
      $query->fields('bill', ['field_cl_app_budget_bill_value']);

      $query->leftJoin('paragraph__field_cl_app_budget_auth', 'auth', 'auth.entity_id = calendar.field_cl_app_bud_calendar_target_id AND auth.deleted = 0');
      $query->fields('auth', ['field_cl_app_budget_auth_value']);

      $query->leftJoin('paragraph__field_cl_app_budget_title', 'title', 'title.entity_id = calendar.field_cl_app_bud_calendar_target_id AND title.deleted = 0');
      $query->fields('title', ['field_cl_app_budget_title_value']);

      $query->leftJoin('paragraph__field_cl_app_budget_rep_date', 'rep_date', 'rep_date.entity_id = calendar.field_cl_app_bud_calendar_target_id AND rep_date.deleted = 0');
      $query->fields('rep_date', ['field_cl_app_budget_rep_date_value']);

      $query->leftJoin('paragraph__field_cl_app_budget_hsorg_act_dt', 'origin', 'origin.entity_id = calendar.field_cl_app_bud_calendar_target_id AND origin.deleted = 0');
      $query->fields('origin', ['field_cl_app_budget_hsorg_act_dt_value']);

      $query->leftJoin('paragraph__field_cl_app_budget_ophs_act_dt', 'opposite', 'opposite.entity_id = calendar.field_cl_app_bud_calendar_target_id AND opposite.deleted = 0');
      $query->fields('opposite', ['field_cl_app_budget_ophs_act_dt_value']);

//      $a = $query->__toString();

      $result = $query->execute()->fetchAll();

      foreach ($result as $row) {
        $report_date = !empty($row->field_cl_app_budget_rep_date_value) ?
          $this->getDate($row->field_cl_app_budget_rep_date_value) : '';
        $origin_action_date = !empty($row->field_cl_app_budget_hsorg_act_dt_value) ?
          $this->getDate($row->field_cl_app_budget_hsorg_act_dt_value) : '';
        $opposite_house_action_date = !empty($row->field_cl_app_budget_ophs_act_dt_value) ?
          $this->getDate($row->field_cl_app_budget_ophs_act_dt_value) : '';

        $bill = !empty($row->field_cl_app_budget_bill_value) ?
          $row->field_cl_app_budget_bill_value : '';
        $author = !empty($row->field_cl_app_budget_auth_value) ?
          $row->field_cl_app_budget_auth_value : '';
        $title = !empty($row->field_cl_app_budget_title_value) ?
          $row->field_cl_app_budget_title_value : '';

        $pid = !empty($row->field_cl_app_bud_calendar_target_id) ?
          $row->field_cl_app_bud_calendar_target_id : '';

        $report_date = !empty($report_date) ? $report_date : '0';

        if (!empty($bill)) {
          $new_data[$report_date][$bill] = [
            'bill_#' => $bill,
            'authors' => $author,
            'short_title' => $title,
            'joint_committee_report_date' => $report_date,
            'house_of_origin_action_date' => $origin_action_date,
            'opposite_house_action_date' => $opposite_house_action_date,
            'pid' => $pid,
          ];
        }
      }

      return $new_data;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }

  public function getConferenceData($nid, $type) {
    if (empty($nid)) {
      return '';
    }
    $new_data = [];

    try {
      $query = $this->database->select('node_field_data', 'n')
        ->condition('n.type', $type)
        ->condition('n.nid', $nid);
      //        ->condition('n.status', 1);

      $query->innerJoin('node__field_cl_jnt_cnf_calendar', 'calendar', 'calendar.entity_id = n.nid AND calendar.deleted = 0');
      $query->fields('calendar', ['field_cl_jnt_cnf_calendar_target_id']);

      $query->leftJoin('paragraph__field_cl_jnt_cnf_bill', 'bill', 'bill.entity_id = calendar.field_cl_jnt_cnf_calendar_target_id AND bill.deleted = 0');
      $query->fields('bill', ['field_cl_jnt_cnf_bill_value']);

      $query->leftJoin('paragraph__field_cl_jnt_cnf_auth', 'auth', 'auth.entity_id = calendar.field_cl_jnt_cnf_calendar_target_id AND auth.deleted = 0');
      $query->fields('auth', ['field_cl_jnt_cnf_auth_value']);

      $query->leftJoin('paragraph__field_cl_jnt_cnf_title', 'title', 'title.entity_id = calendar.field_cl_jnt_cnf_calendar_target_id AND title.deleted = 0');
      $query->fields('title', ['field_cl_jnt_cnf_title_value']);

      $query->leftJoin('paragraph__field_cl_jnt_cnf_sub_ch_orgn', 'sub_chamber_date', 'sub_chamber_date.entity_id = calendar.field_cl_jnt_cnf_calendar_target_id AND sub_chamber_date.deleted = 0');
      $query->fields('sub_chamber_date', ['field_cl_jnt_cnf_sub_ch_orgn_value']);

      $query->leftJoin('paragraph__field_cl_jnt_cnf_adop_ch_orgn', 'adop_chamber_date', 'adop_chamber_date.entity_id = calendar.field_cl_jnt_cnf_calendar_target_id AND adop_chamber_date.deleted = 0');
      $query->fields('adop_chamber_date', ['field_cl_jnt_cnf_adop_ch_orgn_value']);

      $query->leftJoin('paragraph__field_cl_jnt_cnf_adop_opp_ch', 'adop_opposite', 'adop_opposite.entity_id = calendar.field_cl_jnt_cnf_calendar_target_id AND adop_opposite.deleted = 0');
      $query->fields('adop_opposite', ['field_cl_jnt_cnf_adop_opp_ch_value']);

      //      $a = $query->__toString();

      $result = $query->execute()->fetchAll();

      foreach ($result as $row) {
        $sub_chamber_date = !empty($row->field_cl_jnt_cnf_sub_ch_orgn_value) ?
          $this->getDate($row->field_cl_jnt_cnf_sub_ch_orgn_value) : '';
        $adop_chamber_date = !empty($row->field_cl_jnt_cnf_adop_ch_orgn_value) ?
          $this->getDate($row->field_cl_jnt_cnf_adop_ch_orgn_value) : '';
        $adop_opposite = !empty($row->field_cl_jnt_cnf_adop_opp_ch_value) ?
          $this->getDate($row->field_cl_jnt_cnf_adop_opp_ch_value) : '';

        $bill = !empty($row->field_cl_jnt_cnf_bill_value) ?
          $row->field_cl_jnt_cnf_bill_value : '';
        $author = !empty($row->field_cl_jnt_cnf_auth_value) ?
          $row->field_cl_jnt_cnf_auth_value : '';
        $title = !empty($row->field_cl_jnt_cnf_title_value) ?
          $row->field_cl_jnt_cnf_title_value : '';

        $pid = !empty($row->field_cl_jnt_cnf_calendar_target_id) ?
          $row->field_cl_jnt_cnf_calendar_target_id : '';

        $sub_chamber_date = !empty($sub_chamber_date) ? $sub_chamber_date : '0';

        if (!empty($bill)) {
          $new_data[$sub_chamber_date][$bill] = [
            'bill_#' => $bill,
            'authors' => $author,
            'short_title' => $title,
            'submitted_in_chamber' => $sub_chamber_date,
            'adopted_in_chamber' => $adop_chamber_date,
            'adopted_in_opposite' => $adop_opposite,
            'pid' => $pid,
          ];
        }
      }

      return $new_data;
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
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

  public function checkParagraphExists($existing_paragraph, $new_data, $type) {
    $result = FALSE;

    if ($type == 'cl_app_bud') {
      $date = !empty($new_data["joint_committee_report_date"]) ?
        $new_data["joint_committee_report_date"] : '0';
      $bill = !empty($new_data["bill_#"]) ? $new_data["bill_#"] : '';

      $result = !empty($bill) && !empty($existing_paragraph[$date]) &&
        !empty($existing_paragraph[$date][$bill]) ? $existing_paragraph[$date][$bill]['pid'] : '';
    }
    else if ($type == 'cl_jnt_cnf') {
      $date = !empty($new_data["submitted_in_chamber"]) ?
        $this->getDate($new_data["submitted_in_chamber"]) : '0';
      $bill = !empty($new_data["bill_#"]) ? $new_data["bill_#"] : '';

      $result = !empty($bill) && !empty($existing_paragraph[$date]) &&
        !empty($existing_paragraph[$date][$bill]) ? $existing_paragraph[$date][$bill]['pid'] : '';
    }

    return $result;
  }

  public function updateParagraph($pid, $data, $type) {
    if (empty($pid) || empty($data)) {
      return '';
    }

    $paragraph = \Drupal\paragraphs\Entity\Paragraph::load($pid);

    if (!empty($paragraph)) {
      $this->updateParagraphFields($paragraph, $data, $type, 'update');

      $paragraph->save();
    }
    else {
      \Drupal::logger('senate_calendar')->error(__METHOD__ . ' ' . t('failed. Message = Can\'t load %pid paragraph.', [
          '%pid' => $pid,
        ]));
    }

    return !empty($paragraph) ? $paragraph : '';
  }

  public function getLastNid($type) {
    if (empty($type)) {
      return '';
    }

    $query = $this->database->select('node_field_data', 'n')
      ->condition('n.type', $type)
      ->condition('n.status', 1);
    $query->addExpression('MAX(nid)');
    $nid = $query->execute()->fetchField();

    return !empty($nid) ? $nid : '';
  }

  public function getParagraphData($nid, $type) {
    $data = [];

    if ($type == 'cl_app_bud') {
      $data = $this->getABData($nid, $type);
    }
    else if ($type == 'cl_jnt_cnf') {
      $data = $this->getConferenceData($nid, $type);
    }

    return $data;
  }
}
