<?php

namespace Drupal\senate_file_search\Service;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Database\Connection;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\search_file_attachments\Plugin\Search\FileSearch;
use Drupal\Core\Database\Query\Condition;

/**
 * Executes a keyword search for files against {file_managed} database table.
 *
 */
class SenateFileSearch extends FileSearch {

  /**
   * A database connection object.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * An entity manager object.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * A config object.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $config_factory;

  protected $pluginId;


  /**
   * Constructor.
   *
   *   The plugin implementation definition.
   * @param \Drupal\Core\Database\Connection $database
   *   A database connection object.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   An entity manager object.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   */
  public function __construct(Connection $database, EntityTypeManagerInterface $entity_type_manager, ConfigFactoryInterface $config_factory) {
    $this->database = $database;
    $this->entityTypeManager = $entity_type_manager;
    $this->config_factory = $config_factory;
    $this->moduleSettings = $config_factory->get('search_file_attachments.settings');
    $this->pluginId = 'file_search';

    $this->setIncludedMimetypes();
  }

  /**
   * {@inheritdoc}
   */
  public function updateIndex($fids = []) {

    if (empty($fids)) {
      return;
    }

    $file_storage = $this->entityTypeManager->getStorage('file');
    foreach ($file_storage->loadMultiple($fids) as $file) {
      $this->indexFile($file);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function getPluginId() {
    return $this->pluginId;
  }

  /**
   * Get not indexed files.
   * @param $fids
   *
   * @return array
   */
  public function getNotIndexedFiles($fids) {
    $query = $this->database->select('file_managed', 'f');
    $query->leftJoin('search_dataset', 'sd', 'sd.sid = f.fid AND sd.type = \'' . $this->getPluginId() . '\'');
    $query->addExpression('MAX (sd.reindex)', 'max_reindex');
    $query->fields('f', ['fid']);

    if (!empty($fids)) {
      $query->condition('f.fid', $fids, 'IN');
    }

    $or = new Condition('OR');
    $query->condition(
      $or->condition('sd.sid', NULL, 'IS')
        ->condition('sd.reindex', 0, '<>')
    );
    $query->groupBy('f.fid');
    //    $a = $query->__toString();
    $not_indexed_fids = $query->execute()->fetchCol();
    return !empty($not_indexed_fids) ? $not_indexed_fids : [];
  }
}
