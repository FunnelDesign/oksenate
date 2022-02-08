<?php

namespace Drupal\senate_votes\Clients;

/**
 * Provides an interface for votes client.
 */
interface SenateVotesClientInterface {

  /**
   * Get votes.
   */
  public function getVotes();

  /**
   * Normalize data.
   *
   * @param array $data
   *
   * @return mixed
   */
  public function normalize(array $data);

}
