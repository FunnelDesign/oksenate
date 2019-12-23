<?php

namespace Drupal\import_audio\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\import_audio\ImportBatch;

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
      '#value' => $this->t('Full process Submit'),
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
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
