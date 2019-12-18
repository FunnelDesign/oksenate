<?php

namespace Drupal\import_audio\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\youtube_sync\ImportBatch;

/**
 * Class ImportForm.
 */
class ImportForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'import_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {

    $form['info'] = [
      '#markup' => '<div>' . t(
          'Import Press release audio :from - :to', [
          ':from' => date('Y-m', strtotime(IMPORT_AUDIO_START_DATE)),
          ':to' => date('Y-m'),
        ]
        ) . '</div>',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    foreach ($form_state->getValues() as $key => $value) {
      // @TODO: Validate fields.
    }
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Display result.
//    foreach ($form_state->getValues() as $key => $value) {
//      \Drupal::messenger()->addMessage(
//        $key . ': ' . ($key === 'text_format' ? $value['value'] : $value)
//      );
//    }

    $operations = [];
    $operations[] = [[ImportBatch::class, 'getMonthPages'], []];

    $batch = [
      'title' => t('Import playlists and videos'),
      'operations' => $operations,
      'finished' => [ImportBatch::class, 'FinishedCallback'],
    ];

    batch_set($batch);
  }

}
