<?php

namespace Drupal\senate_votes\Clients;

use Drupal\Core\Datetime\DrupalDateTime;

class FileClient {

  /**
   * Try to decrease prev execution time to avoid not loading file updates.
   */
  const DECREASE_PREV_EXECUTION_IN_SECONDS = 5 * 60;

  private $directory;

  private $prevExecution;

  public function __construct($directory, $prev_execution) {
    $this->directory = $directory;
    $this->prevExecution = $prev_execution;
  }

  public function getFilesList($extension) {
    $files = [];
    $regex = '/\.(' . preg_replace('/ +/', '|', preg_quote($extension)) . ')$/i';

    if (is_dir($this->directory)) {
      if ($dh = opendir($this->directory)) {
        while (($file = readdir($dh)) !== FALSE) {
          $last_updated = filemtime($this->directory . '/' . $file);

          $is_time_to_update = ($last_updated >= ($this->prevExecution - self::DECREASE_PREV_EXECUTION_IN_SECONDS));

          if (($file[0] !== '.') && preg_match($regex, $file) && $is_time_to_update) {
            $files[] = $file;
          }

          $this->logDebugs($file, $last_updated, $this->prevExecution, $is_time_to_update);

        }
        closedir($dh);
      }
      else {
        \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Can\'t open %dir directory.', [
            '%dir' => $this->directory,
          ]));
      }
    }
    else {
      \Drupal::logger('senate_votes')->error(__METHOD__ . ' ' . t('failed. Message = Check path %dir is not a directory', [
          '%dir' => $this->directory,
        ]));
    }

    return $files;
  }

  public function getFileContent($file) {
    $absolute_path = $this->directory . '/' . $file;
    $file_content = file_get_contents($absolute_path);

    if ($file_content === FALSE) {
      \Drupal::logger('senate_votes')
        ->error(__METHOD__ . ' ' . t('failed. Message = Can\'t open file %file.', [
            '%file' => $absolute_path,
          ]));
    }

    return $file_content ?? '';
  }

  public function logDebugs($file, $lastUpdated, $prevExecution, $is_time_to_update) {
    try {

      if ($file === 'oks_fullvotesresults.xml') {

        $data = [
          '$file' => $file,
          'File_date' => $lastUpdated,
          'Last_check ' => $prevExecution,
          'File_date_formatted' => (DrupalDateTime::createFromTimestamp($lastUpdated))->format('Y-m-d\TH:i:s T P'),
          'Last_check_formatted' => (DrupalDateTime::createFromTimestamp($prevExecution))->format('Y-m-d\TH:i:s T P'),
          'Last_check_minus_load_interval' => $prevExecution - self::DECREASE_PREV_EXECUTION_IN_SECONDS,
          'Last_check_minus_load_interval_formated' => (DrupalDateTime::createFromTimestamp($prevExecution - self::DECREASE_PREV_EXECUTION_IN_SECONDS))->format('Y-m-d\TH:i:s T P'),
          'is_time_to_update' => $is_time_to_update ? 'TRUE' : 'FALSE',
        ];

        \Drupal::logger('senate_votes_debug')->info(__METHOD__ . ' ' . '<pre><code>' . print_r($data, TRUE)  .  '</code></pre>' );
      }

    } catch (\Exception $e) {
      \Drupal::logger('senate_votes_debug')
        ->error(__METHOD__ . ' ' . t('Error %message.', [
            '%message' => $e->getMessage(),
          ]));
    }
  }
}
