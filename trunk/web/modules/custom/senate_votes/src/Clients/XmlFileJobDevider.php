<?php

namespace Drupal\senate_votes\Clients;


use Drupal\Component\Utility\Html;

class XmlFileJobDevider {

  protected $xmlFileClient;

  protected $xmlFileDbClient;

  protected $updateAll;

  public function __construct($xmlFileClient, $xmlFileDbClient, $updateAll) {
    $this->xmlFileClient = $xmlFileClient;
    $this->xmlFileDbClient = $xmlFileDbClient;
    $this->updateAll = $updateAll;
  }

  public function getCronJobs() {
    $senate_votes_api_helper = \Drupal::hasService('senate_votes.api_helper') ?
      \Drupal::service('senate_votes.api_helper') : '';
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';
    $votes = $this->xmlFileClient->getVotes();
    $votes_to_create = [];
    $items = [];
    $limit = 50;
    $pids = [];

    if (!empty($senate_votes_api_helper) && !empty($votes)) {
      $db_votes = $this->xmlFileDbClient->getVotes();
      $pids = $this->xmlFileDbClient->getPids();

      foreach ($votes as $vote) {
        $id = $senate_votes_api_helper->getVoteId($vote['date'], $vote['measure'], $vote['author'], $vote['action']);
        $year = $senate_votes_helper->getYear($vote['date']);
        $key = Html::getId($vote['file_name'] . '__' . $year);
        $is_new_node = $this->isNewNode($db_votes, $key);
        $is_new_vote = $this->isNewVote($db_votes, $key, $id);

        if ($is_new_node) {
          $nid = _senate_votes_api_create_node($vote, 'files', $vote['file_name']);
          $votes_to_create[] = [
            'nid' => $nid,
            'vote' => $vote,
          ];
          $db_votes[$key] = [
            $id => ['nid' => $nid],
          ];
        }
        elseif ($is_new_vote || !empty($this->updateAll)) {
          reset($db_votes[$key]);
          $first_row_data = current($db_votes[$key]);
          $nid = $first_row_data['nid'] ?? '';
          $votes_to_create[] = [
            'nid' => $nid,
            'vote' => $vote,
          ];
        }
      }
    }

    while (!empty($votes_to_create)) {
      $rows_part = array_splice($votes_to_create, 0, $limit);

      if (!empty($rows_part)) {
        $items[] = [
          'rows' => $rows_part,
          'pids' => $pids,
          'update_all' => $this->updateAll,
        ];
      }
    }

    return $items;
  }

  private function isNewVote($db_votes, $key, $id) {
    return !(!empty($db_votes[$key]) && !empty($db_votes[$key][$id]));
  }

  private function isNewNode($db_votes, $key) {
    return empty($db_votes[$key]);
  }
}
