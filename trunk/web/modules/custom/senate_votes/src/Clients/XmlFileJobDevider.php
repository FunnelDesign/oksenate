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
    $senate_votes_api_helper = \Drupal::getContainer()->get('senate_votes.api_helper');
    $senate_votes_helper = \Drupal::getContainer()->get('senate_votes.helper');
    $file_votes = $this->xmlFileClient->getVotes();
    $votes_to_create = [];
    $items = [];
    $limit = 50;
    $pids = [];

    if (!empty($senate_votes_api_helper) && !empty($file_votes)) {
      $db_votes = $this->xmlFileDbClient->getVotes();
      $db_nodes = $this->xmlFileDbClient->getNodes();
      $pids = $this->xmlFileDbClient->getPids();

      foreach ($file_votes as $file_vote) {
        $id = $senate_votes_api_helper->getVoteId($file_vote['date'], $file_vote['measure'], $file_vote['author'], $file_vote['action']);
        $year = $senate_votes_helper->getYear($file_vote['date']);
        $key = Html::getId($file_vote['file_name'] . '__' . $year);
        $found_node_nid = $this->dbFindNode($db_votes, $db_nodes, $key);
        $is_new_vote = $this->isNewVote($db_votes, $key, $id);

        if (!$found_node_nid) {
          $nid = _senate_votes_api_create_node($file_vote, 'files', $file_vote['file_name']);
          $votes_to_create[] = [
            'nid' => $nid,
            'vote' => $file_vote,
          ];
          $db_votes[$key] = [
            $id => ['nid' => $nid],
          ];
        }
        elseif ($is_new_vote || !empty($this->updateAll)) {
          $votes_to_create[] = [
            'nid' => $found_node_nid,
            'vote' => $file_vote,
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

  private function dbFindNode($db_votes, $db_nodes ,$key) {

    if(!empty($db_votes[$key])) {
      reset($db_votes[$key]);
      $first_row_data = current($db_votes[$key]);
      $nid = $first_row_data['nid'] ?? NULL;
    }

    if(empty($nid)) {
      $nid = $db_nodes[$key]['nid'] ?? NULL;
    }

    return $nid;
  }
}
