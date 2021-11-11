<?php

namespace Drupal\senate_votes\Plugin\QueueWorker;

use Drupal\Core\Queue\QueueWorkerBase;
use Drupal\node\Entity\Node;

/**
 * A events_custom worker.
 *
 * @QueueWorker(
 *   id = "senate_votes_api",
 *   title = @Translation("Senate votes Api"),
 *   cron = {"time" = 60}
 * )
 */
class SenateVotesApi extends QueueWorkerBase {

  /**
   * {@inheritdoc}
   */
  public function processItem($data) {
    $rows = !empty($data->rows) ? $data->rows : [];
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';
    $senate_votes_api_helper = \Drupal::hasService('senate_votes.api_helper') ?
      \Drupal::service('senate_votes.api_helper') : '';

    if (!empty($rows) && !empty($senate_votes_helper) && !empty($senate_votes_api_helper)) {
      foreach ($rows as $row) {
        $parent_node = \Drupal\node\Entity\Node::load($row['nid']);
        $paragraph = $senate_votes_api_helper->createParagraph($parent_node, 'field_senate_votes', $row["vote"]);

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

          $this->log('create', $parent_node->id(), $paragraph->id());
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
