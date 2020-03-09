<?php

namespace Drupal\senate_votes\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;
use Drupal\node\Entity\Node;

/**
 * A events_custom worker.
 *
 * @QueueWorker(
 *   id = "senate_votes",
 *   title = @Translation("Senate votes"),
 *   cron = {"time" = 60}
 * )
 */
class SenateVotes extends QueueWorkerBase {

  /**
   * {@inheritdoc}
   */
  public function processItem($data) {
    $type = !empty($data->type) ? $data->type : '';
    $update_all = !empty($data->update_all) ? $data->update_all : FALSE;
    $directory = !empty($data->directory) ? $data->directory : '';
    $prev_execution = !empty($data->prev_execution) ? $data->prev_execution : 0;
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';

    if (!empty($senate_votes_helper) && !empty($type) && !empty($directory)) {
      $files_list = $senate_votes_helper->getListFiles($directory, $prev_execution);
      $files_list = (!empty($files_list) && is_array($files_list)) ? $files_list : [];
      $files_content = [];
      $nodes = [];

      foreach ($files_list as $file) {
        $files_content[$file] = $senate_votes_helper->getFileContentXls($file, $directory);

        if (!empty($files_content[$file])) {
          foreach ($files_content[$file] as $file_sheet) {
            if (!empty($file_sheet)) {
              $rows = !empty($file_sheet["rows"]) ? $file_sheet["rows"] : [];

              foreach ($rows as $file_row) {
                if (!empty($file_row['action']) && !empty($file_row['action']['link'])) {
                  $file_row['fid'] = $senate_votes_helper->createFile($file_row['action']['link'], $directory);
                }

                if (!empty($file_row['date'])) {
                  $year = $senate_votes_helper->getYear($file_row['date']);
                  $session = !empty($file_row['session']) ? $file_row['session'] : '1st';
                  $year_session = $year . '_' . $session;

                  if (!empty($year) && empty($nodes[$year_session])) {
                    $parent_nid = $senate_votes_helper->getNodeByYearSession($year, $session);

                    if (!empty($parent_nid)) {
                      $nodes[$year_session] = Node::load($parent_nid);
                    }
                    else {
                      $node_data['title'] = !empty($file_sheet["title"]) ? $file_sheet["title"] : '';
                      $node_data['description'] = !empty($file_sheet["description"]) ? $file_sheet["description"] : '';
                      $node_data['year'] = $year;
                      $nodes[$year_session] = $senate_votes_helper->createNode($node_data);
                    }
                  }

                  if (!empty($nodes[$year_session]) && is_object($nodes[$year_session])) {
                    $parent_node = $nodes[$year_session];
                    $existing_paragraph = $senate_votes_helper->getVotesData($parent_node->id());
                    $paragraph_exists = $senate_votes_helper->checkParagraphExists($existing_paragraph, $file_row);

                    if (!$paragraph_exists) {
                      $paragraph = $senate_votes_helper->createParagraph($parent_node, 'field_senate_votes', $file_row);

                      if (!empty($paragraph)) {
                        $parent_node->field_senate_votes[] = [
                          'target_id' => $paragraph->id(),
                          'target_revision_id' => $paragraph->getRevisionId(),
                        ];
                        $parent_node->save();
                      }
                    }
                  }
                  else {
                    \Drupal::logger('senate_votes')
                      ->error(__METHOD__ . ' ' . t('failed. Message = Parent node problem %file.', [
                          '%file' => $file,
                        ]));
                  }
                }
              }
            }
          }
//          $senate_votes_helper->setFileStatus($file, $directory);
        }

      }
    }
  }
}
