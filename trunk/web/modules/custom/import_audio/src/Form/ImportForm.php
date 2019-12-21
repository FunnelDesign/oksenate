<?php

namespace Drupal\import_audio\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\import_audio\ImportBatch;

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
        ) . '<br></div>',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Full process Submit'),
    ];

    $form['submit_get_pages'] = [
      '#type' => 'submit',
      '#value' => $this->t('Get Pages Only'),
      '#submit' => ['::submitOnlyGetPages'],
    ];

    $form['submit_process_pages'] = [
      '#type' => 'submit',
      '#value' => $this->t('Process Pages Queue Only'),
      '#submit' => ['::submitOnlyGetPages'],
    ];

    $form['submit_process_audio'] = [
      '#type' => 'submit',
      '#value' => $this->t('Process Audio Queue Only'),
      '#submit' => ['::submitOnlyAudioQueue'],
    ];


    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[ImportBatch::class, 'getMonthPages'], []];
    $operations[] = [[ImportBatch::class, 'processMonthPagesQueue'], []];
    $operations[] = [[ImportBatch::class, 'processImportPressReleseQueue'], []];

    $this->batch($operations);
  }

  /**
   * {@inheritdoc}
   */
  public function submitOnlyAudioQueue(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[ImportBatch::class, 'processImportPressReleseQueue'], []];

    $this->batch($operations);
  }

  /**
   * {@inheritdoc}
   */
  public function submitOnlyGetPages(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[ImportBatch::class, 'getMonthPages'], []];

    $this->batch($operations);
  }

  public function batch($operations) {
    $batch = [
      'title' => t('Import press audio press releases'),
      'operations' => $operations,
      'finished' => [ImportBatch::class, 'FinishedCallback'],
    ];
    batch_set($batch);
  }

}
