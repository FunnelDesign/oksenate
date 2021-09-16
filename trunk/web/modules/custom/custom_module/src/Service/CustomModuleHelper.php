<?php

namespace Drupal\custom_module\Service;

use Drupal\Core\Database\Driver\mysql\Connection;
use Drupal\Core\Logger\LoggerChannelFactory;

/**
 * Class CustomModuleHelper.
 */
class CustomModuleHelper {

  /**
   * Drupal\Core\Database\Driver\mysql\Connection definition.
   *
   * @var \Drupal\Core\Database\Driver\mysql\Connection
   */
  protected $database;

  /**
   * The logger service.
   *
   * @var \Drupal\Core\Logger\LoggerChannelFactory
   */
  protected $logger;


  /**
   * SenateApiHelper constructor.
   *
   * @param \Drupal\Core\Database\Driver\mysql\Connection $database
   * @param \Drupal\Core\Logger\LoggerChannelFactory $logger
   */
  public function __construct(Connection $database, LoggerChannelFactory $logger) {
    $this->database = $database;
    $this->logger = $logger->get('custom_module');
  }

  public function getJournalsOptions() {
    try {
      $query = $this->database->select('paragraphs_item_field_data', 'pifd')
        ->condition('pifd.type', 'journals_files')
        ->condition('pifd.status', 1);
      $query->innerJoin('node__field_journals_files', 'nfjf', 'pifd.id = nfjf.field_journals_files_target_id AND nfjf.deleted = 0');
      $query->innerJoin('node_field_data', 'nfd', 'nfjf.entity_id = nfd.nid AND nfd.status = 1 AND nfd.type = \'journals\'');
      $query->innerJoin('paragraph__field_journals_files_date', 'pfjfd', 'pifd.id = pfjfd.entity_id AND pfjfd.deleted = 0');

      $query->addExpression("DATE_FORMAT(field_journals_files_date_value, '%M')", 'month');
      $query->addExpression("DATE_FORMAT(field_journals_files_date_value, '%m')", 'month_digits');
      $query->addExpression("DATE_FORMAT(field_journals_files_date_value, '%Y')", 'year');
      $query->addExpression("DATE_FORMAT(field_journals_files_date_value, '%d')", 'day');

      $query->groupBy('year');
      $query->groupBy('month_digits');
      $query->groupBy('month');
      $query->groupBy('day');
      $query->orderBy('year', 'desc');
      $query->orderBy('month_digits', 'desc');
      $query->orderBy('day', 'asc');

      $result = $query->execute()->fetchAll();

      $options = [];
      foreach ($result as $row) {
        $date_key = $row->month_digits . '/01/' . $row->year;
        $options['options'][$date_key] = $row->month . ' ' . $row->year;
        $options['dates'][] = $row->month_digits . "/" . $row->day . "/" . $row->year;
        $last_date = \DateTime::createFromFormat('m/d/Y', $date_key);

        if (empty($options['last_date'])) {
          $options['last_date'] = $last_date;
        }
        if ($options['last_date'] < $last_date) {
          $options['last_date'] = $last_date;
        }
      }
      $options['last_date_alt'] = $options['last_date']->format('F Y');
      $options['last_date'] = $options['last_date']->format('m/d/Y');
    }
    catch (\Exception $e) {
      $this->logger->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }

    return !empty($options) ? $options : [];
  }
}
