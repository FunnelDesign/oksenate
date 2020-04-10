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
              reset($rows);
              $first_row_data = current($rows);
              $parent_nid = $senate_votes_helper->getNodeByFirstRowData($first_row_data);
              $operation = '';
              $paragraphs = [
                'created' => [],
                'updated' => [],
              ];

              if (!empty($parent_nid)) {
                $parent_node = Node::load($parent_nid);
                $operation = 'update';
              }
              else {
                $node_data['title'] = !empty($file_sheet["title"]) ? $file_sheet["title"] : '';
                $node_data['description'] = !empty($file_sheet["description"]) ? $file_sheet["description"] : '';
                $year = !empty($first_row_data['date']) ? $first_row_data['date'] : '';
                $node_data['year'] = $senate_votes_helper->getYear($year);
                $parent_node = $senate_votes_helper->createNode($node_data);
                $operation = 'create';
              }

              if (!empty($parent_node) && is_object($parent_node)) {
                $existing_paragraph = $senate_votes_helper->getVotesData($parent_node->id());

                foreach ($rows as $file_row) {
                  if (!empty($file_row['action']) && !empty($file_row['action']['link'])) {
                    $file_row['fid'] = $senate_votes_helper->createFile($file_row['action']['link'], $directory);
                  }

                  if (!empty($file_row['date'])) {
                    $pid = $senate_votes_helper->checkParagraphExists($existing_paragraph, $file_row);

                    if (empty($pid)) {
                      $paragraph = $senate_votes_helper->createParagraph($parent_node, 'field_senate_votes', $file_row);

                      if (!empty($paragraph)) {
                        $parent_node->field_senate_votes[] = [
                          'target_id' => $paragraph->id(),
                          'target_revision_id' => $paragraph->getRevisionId(),
                        ];
                        $parent_node->save();
                        $paragraphs['created'][] = $paragraph->id();
                      }
                    }
                    else {
                      $paragraphs['updated'][] = $pid;
//                      $paragraph = $senate_votes_helper->updateParagraph($pid, $file_row);
                    }
                  }
                }

                $this->log($operation, $parent_node->id(), $paragraphs);
              }
              else {
                \Drupal::logger('senate_votes')
                  ->error(__METHOD__ . ' ' . t('failed. Message = Parent node problem %file.', [
                      '%file' => $file,
                    ]));
              }
            }
          }
//          $senate_votes_helper->setFileStatus($file, $directory);
        }

      }
    }
  }

  public function log($operation, $nid, $paragraphs) {

    if (!empty($operation) && !empty($nid) && !empty($paragraphs)) {
      switch ($operation) {
        case 'update':
          \Drupal::logger('senate_votes')->notice(t('Node %nid has been updated. Paragraphs = <pre><code> %message </code></pre>', [
            '%message' => print_r($paragraphs, TRUE),
            '%nid' => $nid
          ]));
          break;
        case 'create':
          \Drupal::logger('senate_votes')->notice(t('Node %nid has been created. Paragraphs = <pre><code> %message </code></pre>', [
            '%message' => print_r($paragraphs, TRUE),
            '%nid' => $nid
          ]));
          break;
        default:
          \Drupal::logger('senate_votes')->notice(t('Node %nid operation: %op. Paragraphs = <pre><code> %message </code></pre>', [
            '%message' => print_r($paragraphs, TRUE),
            '%op' => $operation,
            '%nid' => $nid
          ]));
          break;
      }
    }
  }
}
