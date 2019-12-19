<?php

namespace Drupal\senate_file_search\Service;

use Drupal\Component\Utility\SafeMarkup;
use Drupal\Core\Access\AccessResult;
use Drupal\Core\Config\Config;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Database\Connection;
use Drupal\Core\Database\StatementInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityManagerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessibleInterface;
use Drupal\search\Plugin\SearchPluginBase;
use Drupal\search\Plugin\SearchIndexingInterface;
use Drupal\Search\SearchQuery;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\search_file_attachments\Plugin\Search\FileSearch;

/**
 * Executes a keyword search for files against {file_managed} database table.
 *
 * @SearchPlugin(
 *   id = "senate_file_search",
 *   title = @Translation("Senate File")
 * )
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
   * @var \Drupal\Core\Entity\EntityManagerInterface
   */
  protected $entityTypeManager;

  /**
   * A config object.
   *
   * @var \Drupal\Core\Config\Config
   */
  protected $config_factory;

  /**
   * Constructs a \Drupal\node\Plugin\Search\NodeSearch object.
   *
   *   The plugin implementation definition.
   * @param \Drupal\Core\Database\Connection $database
   *   A database connection object.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface  $entity_type_manager
   *   An entity manager object.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   */
  public function __construct(Connection $database, EntityTypeManagerInterface $entity_type_manager, ConfigFactoryInterface $config_factory) {
    $this->database = $database;
    $this->entityTypeManager = $entity_type_manager;
    $this->config_factory = $config_factory;
    $this->moduleSettings = $config_factory->get('search_file_attachments.settings');

    $this->setIncludedMimetypes();
  }

  /**
   * {@inheritdoc}
   */
  public function updateIndex() {
    $limit = (int) $this->config_factory->get('search.settings')->get('index.cron_limit');

    $result = $this->database->queryRange("SELECT f.fid, MAX(sd.reindex) FROM {file_managed} f LEFT JOIN {search_dataset} sd ON sd.sid = f.fid AND sd.type = :type WHERE sd.sid IS NULL OR sd.reindex <> 0 GROUP BY f.fid ORDER BY MAX (sd.reindex) is null DESC, MAX (sd.reindex) ASC, f.fid ASC", 0, $limit, array(':type' => $this->getPluginId()), array('target' => 'replica'));
    $fids = $result->fetchCol();
    if (!$fids) {
      return;
    }

    $file_storage = $this->entityTypeManager->getStorage('file');
    foreach ($file_storage->loadMultiple($fids) as $file) {
      $this->indexFile($file);
    }
  }
}
