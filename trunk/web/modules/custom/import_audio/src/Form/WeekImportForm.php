<?php

namespace Drupal\import_audio\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\import_audio\ImportBatch;
use Drupal\import_audio\WeekImportBatch;

/**
 * Class ImportForm.
 */
class WeekImportForm extends FormBase {

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
          'Import Week In Review', [
        ]
        ) . '<br></div>',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Full process'),
    ];


    $form['submit_queue'] = [
      '#type' => 'submit',
      '#value' => $this->t('Only process queue'),
      '#submit' => ['::submitQueueOnlyForm']
    ];

    return $form;
  }

  /**
 * {@inheritdoc}
 */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[WeekImportBatch::class, 'getImportPages'], []];
    $operations[] = [[WeekImportBatch::class, 'processImportQueue'], []];

    $this->batch($operations);
  }

  /**
   * {@inheritdoc}
   */
  public function submitQueueOnlyForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[WeekImportBatch::class, 'processImportQueue'], []];

    $this->batch($operations);
  }

  public function batch($operations) {
    $batch = [
      'title' => t('Import Week In Review'),
      'operations' => $operations,
      'finished' => [WeekImportBatch::class, 'FinishedCallback'],
    ];
    batch_set($batch);
  }

}
