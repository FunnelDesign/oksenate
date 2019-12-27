<?php

namespace Drupal\import_audio\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\import_audio\ImportBatch;
use Drupal\import_audio\JournalImportBatch;
use Drupal\import_audio\WeekImportBatch;

/**
 * Class ImportForm.
 */
class JournalImportForm extends FormBase {

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
          'Import Journals', [
        ]
        ) . '<br></div>',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Full process'),
    ];

    $form['submit_sessions_pages'] = [
      '#type' => 'submit',
      '#value' => $this->t('Only get session pages'),
      '#submit' => ['::submitGetPagesOnlyForm']
    ];

    $form['submit_sessions_queue'] = [
      '#type' => 'submit',
      '#value' => $this->t('Only process sessions queue'),
      '#submit' => ['::submitSessionQueueOnlyForm']
    ];

    $form['submit_files_queue'] = [
      '#type' => 'submit',
      '#value' => $this->t('Only process files queue'),
      '#submit' => ['::submitFilesQueueOnlyForm']
    ];

    return $form;
  }

  /**
 * {@inheritdoc}
 */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[JournalImportBatch::class, 'getImportPages'], []];
    $operations[] = [[JournalImportBatch::class, 'processImportSessionPageQueue'], []];
    $operations[] = [[JournalImportBatch::class, 'processSaveFileQueue'], []];

    $this->batch($operations);
  }

  /**
   * {@inheritdoc}
   */
  public function submitGetPagesOnlyForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[JournalImportBatch::class, 'getImportPages'], []];

    $this->batch($operations);
  }
  /**
   * {@inheritdoc}
   */
  public function submitSessionQueueOnlyForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[JournalImportBatch::class, 'processImportSessionPageQueue'], []];

    $this->batch($operations);
  }

  public function submitFilesQueueOnlyForm(array &$form, FormStateInterface $form_state) {
    $operations = [];
    $operations[] = [[JournalImportBatch::class, 'processSaveFileQueue'], []];

    $this->batch($operations);
  }

  public function batch($operations) {
    $batch = [
      'title' => t('Import Journals'),
      'operations' => $operations,
      'finished' => [JournalImportBatch::class, 'FinishedCallback'],
    ];
    batch_set($batch);
  }

}
