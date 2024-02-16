<?php

namespace Drupal\senate_votes\Clients;

use Drupal\Component\Utility\Html;

class XmlFileDbClient implements SenateVotesClientInterface {

  protected $source;

  protected $votes;

  protected $nodes;

  protected $pids;

  public function __construct($source) {
    $this->source = $source;
  }

  /**
	 * @inheritDoc
	 */
	public function getVotes() {
    if (empty($this->votes)) {
      $this->getAllFromDb();
    }

    return $this->votes;
	}

  public function getPids() {
    if (empty($this->votes)) {
      $this->getAllFromDb();
    }

    return $this->pids;
  }

  public function getNodes() {
    if (empty($this->nodes)) {
      $this->getAllFromDb();
    }

    return $this->nodes;
  }

  /**
	 * @inheritDoc
	 */
	public function normalize(array $data, array $additional = []) {
    $senate_votes_helper = \Drupal::hasService('senate_votes.helper') ?
      \Drupal::service('senate_votes.helper') : '';
    $senate_votes_api_helper = \Drupal::hasService('senate_votes.api_helper') ?
      \Drupal::service('senate_votes.api_helper') : '';
    $sorted_votes = [];
    $pids = [];
    $nodes = [];

    foreach ($data as $vote) {
      $date = $vote->field_senate_votes_date_value ?? '';
      $measure = $vote->field_senate_votes_measure_value ?? '';
      $author = $vote->field_senate_votes_author_value ?? '';
      $action = $vote->field_senate_votes_action_link_title ?? '';
      $id = $senate_votes_api_helper->getVoteId($date, $measure, $author, $action);
      $year = $senate_votes_helper->getYear($date);
      $pid = $vote->field_senate_votes_target_id ?? '';
      $file_name = $vote->field_senate_votes_file_name_value ?? '';
      $key = Html::getId($file_name . '__' . $year);

      if (!empty($id)) {
        $sorted_votes[$key][$id] = [
          'nid' => $vote->nid,
          'date' => $vote->field_senate_votes_date_value
        ];
      }

      if(!empty($file_name) && !empty($vote->field_senate_votes_year_value)) {
        $nodes_key = Html::getId($file_name . '__' . $vote->field_senate_votes_year_value);
        $nodes[$nodes_key] = ['nid' => $vote->nid];
      }


      if (!empty($pid)) {
        $pids[] = $pid;
      }
    }

    return [
      'votes' => $sorted_votes,
      'pids' => $pids,
      'nodes' => $nodes,
    ];
	}

  /**
   * Get votes from db.
   *
   * @return array|void
   */
  private function getDbVotes($source) {
    try {
      $query = \Drupal::service('database')->select('node_field_data', 'n')
        ->fields('n', ['nid', 'status', 'created'])
        ->condition('n.type', 'senate_votes');

      $query->leftJoin('node__field_senate_votes_file_name', 'file_name', 'file_name.entity_id = n.nid AND file_name.deleted = 0');
      $query->fields('file_name', ['field_senate_votes_file_name_value']);


      $query->leftJoin('node__field_senate_votes_year', 'node_year', 'node_year.entity_id = n.nid AND node_year.deleted = 0');
      $query->fields('node_year', ['field_senate_votes_year_value']);

      $query->innerJoin('node__field_senate_votes', 'votes', 'votes.entity_id = n.nid AND votes.deleted = 0');
      $query->fields('votes', ['field_senate_votes_target_id']);

      $query->leftJoin('node__field_senate_votes_type', 'type', 'type.entity_id = n.nid AND type.deleted = 0');
      $query->condition('type.field_senate_votes_type_value', $source);

      $query->leftJoin('paragraph__field_senate_votes_date', 'votes_date', 'votes.field_senate_votes_target_id = votes_date.entity_id AND votes_date.deleted = 0');
      $query->fields('votes_date', ['field_senate_votes_date_value']);

      $query->leftJoin('paragraph__field_senate_votes_measure', 'votes_measure', 'votes.field_senate_votes_target_id = votes_measure.entity_id AND votes_measure.deleted = 0');
      $query->fields('votes_measure', ['field_senate_votes_measure_value']);

      $query->leftJoin('paragraph__field_senate_votes_author', 'votes_author', 'votes.field_senate_votes_target_id = votes_author.entity_id AND votes_author.deleted = 0');
      $query->fields('votes_author', ['field_senate_votes_author_value']);

      $query->leftJoin('paragraph__field_senate_votes_action_link', 'votes_action', 'votes.field_senate_votes_target_id = votes_action.entity_id AND votes_action.deleted = 0');
      $query->fields('votes_action', ['field_senate_votes_action_link_title']);

      $query->orderBy('votes_date.field_senate_votes_date_value');

      //      $a = $query->__toString();

      $result = $query->execute()->fetchAll();

      return !empty($result) ? $result : [];
    }
    catch (\Exception $e) {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }
  }

  /**
   * @return void
   */
  protected function getAllFromDb() {
    $votes = $this->getDbVotes($this->source);
    $votes = $this->normalize($votes);
    $this->votes = $votes['votes'];
    $this->pids = $votes['pids'];
    $this->nodes = $votes['nodes'];
  }

}
