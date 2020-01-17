<?php

namespace Drupal\custom_module\Plugin\views\argument;

use Drupal\views\Plugin\views\argument\ArgumentPluginBase as ArgumentBase;


/**
 * Defines a filter for Taxonomy Term Slugs.
 *
 * @ingroup views_argument_handlers
 *
 * @ViewsArgument("custom_taxonomy_slug")
 */
class CustomNidToAuthor extends ArgumentBase {

  /**
   * {@inheritdoc}
   */
  public function setArgument($arg) {
    // If we are not dealing with the exception argument, example "all".
    if ($this->isException($arg)) {
      return parent::setArgument($arg);
    }
    // Convert slug to taxonomy term ID.
    //
    // Modify this if you do not want to allow integer IDs in the URL and
    // force only URL slugs in the URL.
    $nid = is_numeric($arg)
      ? $arg : $this->convertNidtoAccountName($arg);
    $this->argument = (int) $nid;
    return $this->validateArgument($nid);
  }

  /**
   * Get taxonomy term ID from a slug.
   *
   * You might have to implement some constraints or modules to ensure that
   * the taxonomy term slugs are globally unique.
   *
   * @return int
   *   Taxonomy term ID.
   */
  protected function convertNidToAccountName($nid) {
    $query = \Drupal::database()->select('node_field_data', 'nfd')
      ->condition('nfd.type', 'senator')
      ->condition('nfd.status', 1)
      ->condition('nfd.nid', $nid);
    $query->innerJoin('users_field_data', 'ufd', 'ufd.uid = nfd.uid AND ufd.status = 1');
    $query->fields('ufd', ['uid']);

    $result = $query->execute()->fetchCol();

    $account_object = \Drupal\user\Entity\User::load($result[0]); // pass your uid
    $account = $account_object->getAccountName();
    return !empty($account) ? $account : $nid;
  }
}