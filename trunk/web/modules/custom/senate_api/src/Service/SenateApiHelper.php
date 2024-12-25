<?php

namespace Drupal\senate_api\Service;

use Drupal\Core\Database\Connection;
use Drupal\Core\Logger\LoggerChannelFactory;
use Drupal\Core\Url;

/**
 * Class SenateApiHelper.
 */
class SenateApiHelper {

  /**
   * Drupal\Core\Database\Connection definition.
   *
   * @var \Drupal\Core\Database\Connection
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
   * @param \Drupal\Core\Database\Connection $database
   * @param \Drupal\Core\Logger\LoggerChannelFactory $logger
   */
  public function __construct(Connection $database, LoggerChannelFactory $logger) {
    $this->database = $database;
    $this->logger = $logger->get('senate_api');
  }

  public function getSenatorsInfoDb() {
    try {
      $query = $this->database->select('node_field_data', 'n')
        ->fields('n', ['nid', 'title'])
        ->condition('n.type', 'senator')
        ->condition('n.status', 1);

      $query->innerJoin('node__field_party', 'party', 'party.entity_id = n.nid AND party.deleted = 0');
      $query->innerJoin('taxonomy_term_field_data', 'tax', 'tax.tid = party.field_party_target_id');
      $query->fields('tax', ['name']);

      $query->leftJoin('node__field_senator_photo', 'photo', 'photo.entity_id = n.nid AND photo.deleted = 0');
      $query->innerJoin('file_managed', 'file', 'file.fid = photo.field_senator_photo_target_id AND file.status = 1');
      $query->fields('file', ['uri']);

      $query->leftJoin('node__body', 'body', 'body.entity_id = n.nid AND body.deleted = 0');
      $query->fields('body', ['body_value']);

      $query->leftJoin('node__field_senator_telephone', 'phone', 'phone.entity_id = n.nid AND phone.deleted = 0');
      $query->fields('phone', ['field_senator_telephone_value']);

      $query->leftJoin('node__field_senator_address_txt', 'address', 'address.entity_id = n.nid AND address.deleted = 0');
      $query->fields('address', ['field_senator_address_txt_value']);

      $query->innerJoin('node__field_senator_district_taxonomy', 'district', 'district.entity_id = n.nid AND district.deleted = 0');
      $query->innerJoin('taxonomy_term_field_data', 'tax_district', 'tax_district.tid = district.field_senator_district_taxonomy_target_id');
      $query->fields('tax_district', ['name']);

      $query->leftJoin('node__field_senator_hometown_txt', 'hometown', 'hometown.entity_id = n.nid AND hometown.deleted = 0');
      $query->fields('hometown', ['field_senator_hometown_txt_value']);

//      $a = $query->__toString();

      $result = $query->execute()->fetchAllAssoc('nid');
      $result = !empty($result) ? $result : [];
    }
    catch (\Exception $e) {
      $this->logger->error(__METHOD__ . ' ' . t('failed. Message = %message', [
          '%message' => $e->getMessage(),
        ]));
    }

    return $result;
  }

  public function getUrlByUri($uri) {
    $url = '';
    if (!empty($uri) && (strpos($uri, 'public:') !== FALSE)) {
      $url = \Drupal::service('file_url_generator')->generateAbsoluteString($uri);
    }

    return $url;
  }

  public function getRoomNumberFromString($desc) {
    preg_match('/(Rm\.?|Room)\s*(\d{1,4})/', $desc, $matches);
    return !empty($matches[2]) && is_numeric($matches[2]) ? $matches[2] : '';
  }
}
