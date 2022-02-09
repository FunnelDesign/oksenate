<?php

namespace Drupal\senate_votes\Clients;

use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use Symfony\Component\Serializer\Encoder\XmlEncoder;

class XmlFileClient extends FileClient implements SenateVotesClientInterface {

  public function __construct($directory, $prev_execution) {
    parent::__construct($directory, $prev_execution);
  }

  /**
	 * @inheritDoc
	 */
	public function getVotes() {
    $files_list = $this->getFilesList('xml');
    $files_list = (!empty($files_list) && is_array($files_list)) ? $files_list : [];
    $votes = [];
    $xml_encode = new XmlEncoder();

    foreach ($files_list as $file) {
      $data = $this->getFileContent($file);
      $data = !empty($data) ? $xml_encode->decode($data, 'xml') : [];
      $file_votes = !empty($data["vote"]) ? $data["vote"] : [];

      if ($this->isAssoc($file_votes)) {
        $file_votes = [$file_votes];
      }

      $temp_arr = array_merge($votes, $file_votes);
      $votes = $temp_arr;
    }

    return $this->normalize($votes);
	}

	/**
	 * @inheritDoc
	 */
	public function normalize(array $data) {
    $normalizedData = [];

    foreach ($data as $vote) {
      $normalizedData[] = [
        'date' => !empty($vote["@date"]) ?
          $this->normalizeExternalDateData($vote["@date"], DateTimeItemInterface::DATE_STORAGE_FORMAT) : '',
        'measure' => $vote["@measure"] ?? '',
        'author' => $vote["@author"] ?? '',
        'action' => $vote['@action'] ?? '',
        'yeas' => $vote['@yeas'] ?? '',
        'nays' => $vote['@nays'] ?? '',
        'measure_link' => $vote['@measureLink'] ?? '',
        'author_link' => $vote['@authorLink'] ?? '',
        'action_link' => $vote['@actionLink'] ?? '',
      ];
    }

    return $normalizedData;
	}

  /**
   * Normalize Date field.
   *
   * @param $date
   * @param string $format
   *
   * @return false|string
   */
  public function normalizeExternalDateData($date, string $format = DateTimeItemInterface::DATETIME_STORAGE_FORMAT) {
    if (empty($date)) {
      return '';
    }

    $config = \Drupal::config('system.date');
    $default_timezone = $config->get('timezone.default');
    $date_obj = new DrupalDateTime($date, $default_timezone);
    $date_obj->setTimezone(new \DateTimeZone(DateTimeItemInterface::STORAGE_TIMEZONE));

    return $date_obj->format($format);
  }

  public function isAssoc(array $arr) {
    if (array() === $arr) {
      return FALSE;
    }
    return array_keys($arr) !== range(0, count($arr) - 1);
  }
}
