<?php

namespace Drupal\senate_votes\Clients;

use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\datetime\Plugin\Field\FieldType\DateTimeItemInterface;
use GuzzleHttp\Exception\RequestException;
use Symfony\Component\Serializer\Encoder\XmlEncoder;

class FetchClient implements SenateVotesClientInterface {

  private $url;

  public function __construct($url) {
    $this->url = $url;
  }

  /**
	 * @inheritDoc
	 */
	public function getVotes() {
		$data = $this->sendXmlRequest();
    $xml_encode = new XmlEncoder();
    $data = $xml_encode->decode($data, 'xml');
    $votes = !empty($data["vote"]) ? $data["vote"] : [];

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

  /**
   * Send Xml request.
   * @param $url
   *
   * @return array|mixed|\Psr\Http\Message\StreamInterface
   */
  public function sendXmlRequest() {
    $client = \Drupal::httpClient();
    $data = '';

    try {
      $response = $client->get($this->url);

      if ($response->getStatusCode() === 200) {
        $data = $response->getBody();
      }
      else {
        \Drupal::logger('senate_votes')->error(t('Request of "@url" failed with error "@error" (HTTP code @code).', [
          '@url' => $this->url,
          '@error' => $response->getReasonPhrase(),
          '@code' => $response->getStatusCode()
        ]));
      }

      return $data;
    }
    catch (RequestException $e) {
      watchdog_exception('senate_votes', $e);
    }
  }
}
