<?php

namespace Drupal\senate_calendar\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;
use Drupal\node\Entity\Node;

/**
 * A events_custom worker.
 *
 * @QueueWorker(
 *   id = "senate_calendar",
 *   title = @Translation("Senate Calendar"),
 *   cron = {"time" = 60}
 * )
 */
class SenateCalendar extends QueueWorkerBase {

  /**
   * {@inheritdoc}
   */
  public function processItem($data) {
    $type = !empty($data->type) ? $data->type : '';
    $update_all = !empty($data->update_all) ? $data->update_all : FALSE;
    $directory = !empty($data->directory) ? $data->directory : '';
    $prev_execution = !empty($data->prev_execution) ? $data->prev_execution : 0;
    $senate_calendar_helper = \Drupal::hasService('senate_calendar.helper') ?
      \Drupal::service('senate_calendar.helper') : '';

    if (!empty($senate_calendar_helper) && !empty($type) && !empty($directory)) {
      $files_list = $senate_calendar_helper->getListFiles($directory, $prev_execution);
      $files_list = (!empty($files_list) && is_array($files_list)) ? $files_list : [];
      $files_content = [];

      foreach ($files_list as $file) {
        $files_content[$file] = $senate_calendar_helper->getFileContentXls($file, $directory);

        if (!empty($files_content[$file])) {
          foreach ($files_content[$file] as $file_sheet) {
            if (!empty($file_sheet)) {
              $rows = !empty($file_sheet["rows"]) ? $file_sheet["rows"] : [];
              $type = !empty($file_sheet["type"]) ? $file_sheet["type"] : '';
              $parent_nid = $senate_calendar_helper->getLastNid($type);
              $parent_node = !empty($parent_nid) ? Node::load($parent_nid) : NULL;

              if (!empty($parent_node)) {
                $existing_paragraph = $senate_calendar_helper->getParagraphData($parent_node->id(), $type);

                foreach ($rows as $file_row) {
                  $pid = $senate_calendar_helper->checkParagraphExists($existing_paragraph, $file_row, $type);

                  if (!$pid) {
                    if ($type == 'cl_app_bud') {
                      $paragraph = $senate_calendar_helper->createParagraph($parent_node, 'field_cl_app_bud_calendar', $file_row, $type, 'cl_app_budget');

                      if (!empty($paragraph)) {
                        $parent_node->field_cl_app_bud_calendar[] = [
                          'target_id' => $paragraph->id(),
                          'target_revision_id' => $paragraph->getRevisionId(),
                        ];
                        $parent_node->save();
                      }
                    }
                    else if ($type == 'cl_jnt_cnf') {
                      $paragraph = $senate_calendar_helper->createParagraph($parent_node, 'field_cl_jnt_cnf_calendar', $file_row, $type, 'cl_jnt_cnf');

                      if (!empty($paragraph)) {
                        $parent_node->field_cl_jnt_cnf_calendar[] = [
                          'target_id' => $paragraph->id(),
                          'target_revision_id' => $paragraph->getRevisionId(),
                        ];
                        $parent_node->save();
                      }
                    }

                  }
                  else {
                    $paragraph = $senate_calendar_helper->updateParagraph($pid, $file_row, $type);
                  }
                }
              }
              else {
                \Drupal::logger('senate_calendar')
                  ->error(__METHOD__ . ' ' . t('failed. Message = Parent node problem %file.', [
                      '%file' => $file,
                    ]));
              }
            }
          }
        }
      }
    }
  }
}
