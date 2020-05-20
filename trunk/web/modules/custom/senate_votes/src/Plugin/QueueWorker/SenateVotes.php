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
    $parent_node = !empty($data->parent_node) ? $data->parent_node : '';
    $rows = !empty($data->rows) ? $data->rows : [];
    $operation = !empty($data->operation) ? $data->operation : '';
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';
    $directory = !empty($data->directory) ? $data->directory : '';
    $paragraphs = [
      'created' => [],
      'updated' => [],
    ];

    if (!empty($parent_node) && !empty($rows) && !empty($senate_votes_helper)) {
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
              $last_delta = $this->getFieldDelta('node__field_senate_votes', 'senate_votes', $parent_node->id());

              $row = [
                'bundle' => 'senate_votes',
                'entity_id' => $parent_node->id(),
                'revision_id' => $parent_node->getRevisionId(),
                'delta' => ++$last_delta,
                'langcode' => 'en',
                'field_senate_votes_target_id' => $paragraph->id(),
                'field_senate_votes_target_revision_id' => $paragraph->getRevisionId(),
              ];

              \Drupal::database()->insert('node__field_senate_votes')->fields($row)->execute();
              $paragraphs['created'][] = $paragraph->id();
            }
          }
          else {
            $paragraphs['updated'][] = $pid;
//            $paragraph = $senate_votes_helper->updateParagraph($pid, $file_row);
          }
        }
      }

      $this->log($operation, $parent_node->id(), $paragraphs);
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
          \Drupal::logger('senate_votes')->notice(t('New paragraphs in node %nid have been created. Paragraphs = <pre><code> %message </code></pre>', [
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

  public function getFieldDelta($field, $bundle, $entity_id) {
    $query = \Drupal::database()->select($field, 'f')
      ->condition('f.bundle', $bundle)
      ->condition('f.entity_id', $entity_id);
    $query->addExpression('MAX(delta)');

//    $a = $query->__toString();
    $max = $query->execute()->fetchField();

    return !empty($max) ? $max : 0;
  }
}
