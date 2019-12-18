<?php


class ImportBatch {


  public static function getMonthPages(&$context) {

    $context['finished'] = 0;
    if(empty($context['sandbox']['start_date'])) {
      //$context['sandbox']['start_date'] = new DateTime()
    }

    $title = t('Process import %name queue %count items remaining', [
      '%name' => 'test1',
      '%count' => 'test2',
    ]);


      $context['finished'] = 1;
  }


  public static function FinishedCallback($success, $results, $operations) {

    if ($success) {

      $message = '';
      if(!empty($results['playlists_count'])) {
        $message .= \Drupal::translation()->formatPlural(
          $results['playlists_count'] ?? 0,
          '@count playlist imported. ', '@count playlists imported. '
        );
      }

      $message .= \Drupal::translation()->formatPlural(
        $results['videos_count'] ?? 0,
        '@count video imported.', '@count videos imported.'
      );

      \Drupal::messenger()->addStatus($message);
    }
    else {
      \Drupal::messenger()->addError(t('Finished with an error.'));
    }
  }

}
