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
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';

    if (!empty($senate_votes_helper) && !empty($type) && !empty($directory)) {
      $files_list = $senate_votes_helper->getListFiles($directory);
      $files_list = (!empty($files_list) && is_array($files_list)) ? $files_list : [];
      $files_content = [];
      $nodes = [];

      foreach ($files_list as $file) {
        $files_content[$file] = $senate_votes_helper->getFileContent($file, $directory);

        if (!empty($files_content[$file]) && empty($files_content[$file]["status"])) {
          if (!empty($files_content[$file]['action']) && !empty($files_content[$file]['action']['link'])) {
            $files_content[$file]['fid'] = $senate_votes_helper->createFile($files_content[$file]['action']['link'], $directory);
          }

          if (!empty($files_content[$file]['date'])) {
            $year = $senate_votes_helper->getYear($files_content[$file]['date']);
            $session = !empty($files_content[$file]['session']) ? $files_content[$file]['session'] : '';
            $year_session = $year . '_' . $session;

            if (!empty($year) && empty($nodes[$year_session])) {
              $parent_nid = $senate_votes_helper->getNodeByYearSession($year, $session);

              if (!empty($parent_nid)) {
                $nodes[$year_session] = Node::load($parent_nid);
              }
            }

            if (!empty($nodes[$year_session]) && is_object($nodes[$year_session])) {
              $parent_node = $nodes[$year_session];
              $paragraph = $senate_votes_helper->createParagraph($parent_node, 'field_senate_votes', $files_content[$file]);

              if (!empty($paragraph)) {
                $parent_node->field_senate_votes[] = [
                  'target_id' => $paragraph->id(),
                  'target_revision_id' => $paragraph->getRevisionId(),
                ];
                $parent_node->save();

                $senate_votes_helper->setFileStatus($file, $directory);
              }
            }
            else {
              \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Parent node problem %file.', [
                  '%file' => $file,
                ]));
            }
          }
        }
      }
    }
  }
}
