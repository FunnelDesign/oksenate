<?php

namespace Drupal\senate_redirect\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\redirect\Entity\Redirect;
use Drupal\node\Entity\NodeType;

class SenateRedirectForm extends FormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'senate_redirect';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $nojs = NULL) {
    $input = $form_state->getUserInput();
    $bundle_default = !empty($input['bundle']) ? $input['bundle'] : '';
    $field_default = !empty($input['field']) ? $input['field'] : '';

    $form['bundle'] = [
      '#type' => 'select',
      '#title' => $this->t('Node bundle'),
      '#default_value' => $bundle_default,
      '#options' => $this->getNodeTypes(),
      '#ajax' => [
        'callback' => '::bundleDropdownCallback',
        'wrapper' => 'field-dropdown-wrapper',
      ],
    ];

    $form['field'] = [
      '#type' => 'select',
      '#title' => $this->t('Node field with old url'),
      '#default_value' => $field_default,
      '#options' => $this->getNodeFields($bundle_default),
      '#prefix' => '<div id="field-dropdown-wrapper">',
      '#suffix' => '</div>',
    ];

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  public function bundleDropdownCallback(array $form, FormStateInterface $form_state) {
    return $form['field'];
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $url = $this->getUrlFromNode($form_state->getValue('bundle'), $form_state->getValue('field'));
    $this->setRedirect($url);
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['senate_redirect.settings'];
  }

  /**
   * Get url from field.
   * @param $bundle
   * @param $field
   *
   * @return array
   */
  public function getUrlFromNode($bundle, $field) {
    if (empty($bundle) || empty($field)) {
      return [];
    }

    $query = \Drupal::database()->select('node_field_data', 'nfd')
      ->condition('nfd.type', $bundle)
      ->condition('nfd.status', 1);
    $query->leftJoin('node__' . $field, 'old', 'old.entity_id = nfd.nid AND old.deleted = 0 AND old.bundle = \'' . $bundle . '\'');
    $query->fields('nfd', ['nid']);
    $query->fields('old', [$field . '_value']);
    $result = $query->execute()->fetchAllKeyed();

    return !empty($result) ? $result : [];
  }

  /**
   * Set redirect.
   * @param $urls
   *
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function setRedirect($urls) {
    $batch = $this->generateBatch($urls);
    batch_set($batch);
  }

  public function getNodeTypes() {
    $node_types = NodeType::loadMultiple();
    $options = [];
    foreach ($node_types as $node_type) {
      $options[$node_type->id()] = $node_type->label();
    }

    return $options;
  }

  public function getNodeFields($bundle) {
    if (empty($bundle)) {
      return [];
    }

    $form_display = \Drupal::service('entity_type.manager')->getStorage('entity_form_display')->load('node.' . $bundle . '.default');
    $options = [];
    foreach ($form_display->getComponents() as $name => $component) {
      $options[$name] = $name;
    }

    return $options;
  }


  protected function generateBatch($urls) {
    $operations[] = [
      'senate_redirect_batch_op',
      [$urls],
    ];

    $batch = [
      'operations' => $operations,
      'finished' => 'senate_redirect_batch_finished',
      'title' => t('Processing batch'),
      'init_message' => t('Batch is starting.'),
      'progress_message' => t('Processed @current out of @total.'),
      'error_message' => t('Batch has encountered an error.'),
    ];

    return $batch;
  }
}
