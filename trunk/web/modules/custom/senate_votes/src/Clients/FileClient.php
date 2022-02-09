<?php

namespace Drupal\senate_votes\Clients;

class FileClient {

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
          if (($file[0] !== '.') && preg_match($regex, $file) && ($last_updated >= $this->prevExecution)) {
            $files[] = $file;
          }
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
}
