<?php

namespace Drupal\senate_api\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Connection;
use Drupal\Core\Logger\LoggerChannelFactory;
use Drupal\senate_api\Service\SenateApiHelper;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class SenateApiController.
 */
class SenateApiController extends ControllerBase {

  /**
   * Drupal\Core\Database\Connection definition.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * Drupal\Core\Logger\LoggerChannelInterface definition.
   *
   * @var \Drupal\Core\Logger\LoggerChannelInterface
   */
  protected $logger;

  protected $helper;


  /**
   * Constructs a new SenateApiController object.
   *
   * @param \Drupal\Core\Database\Connection $database
   * @param \Drupal\Core\Logger\LoggerChannelFactory $logger
   * @param \Drupal\senate_api\Service\SenateApiHelper $senate_api_helper
   */
  public function __construct(Connection $database, LoggerChannelFactory $logger, SenateApiHelper $senate_api_helper) {
    $this->database = $database;
    $this->logger = $logger->get('senate_api');
    $this->helper = $senate_api_helper;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('database'),
      $container->get('logger.factory'),
      $container->get('senate_api.helper')
    );
  }

  /**
   * Get Senators.
   *
   * @return string
   *   Return string.
   */
  public function getSenators() {
    $result = $this->helper->getSenatorsInfoDb();
    $result = $this->normalizeData($result);
    $response = new JsonResponse($result);
//    $http_origin = !empty($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
//    $response->headers->set('Access-Control-Allow-Origin', $http_origin);
    return $response;
  }

  private function normalizeData($data) {
    $new_data = [];

    foreach ($data as $nid => $senator) {
      $senator_data = [];
      $senator_data['First/Last Name'] = !empty($senator->title) ? $senator->title : '';
      $senator_data['Title'] = '';
      $senator_data['Party'] = !empty($senator->name) ? $senator->name : '';
      $senator_data['Photo'] = !empty($senator->uri) ?
        $this->helper->getUrlByUri($senator->uri) : '';
      $senator_data['Description'] = !empty($senator->body_value) ?
        $senator->body_value : '';
      $senator_data['Phone Number'] = !empty($senator->field_senator_telephone_value) ?
        $senator->field_senator_telephone_value : '';
      $senator_data['Room Number'] = !empty($senator->field_senator_address_txt_value) ?
        $this->helper->getRoomNumberFromString($senator->field_senator_address_txt_value) : '';
      $senator_data['District'] = !empty($senator->tax_district_name) ?
        $senator->tax_district_name : '';
      $senator_data['Hometown'] = !empty($senator->field_senator_hometown_txt_value) ?
        $senator->field_senator_hometown_txt_value : '';
      array_push($new_data, $senator_data);
    }

    return $new_data;
  }
}
