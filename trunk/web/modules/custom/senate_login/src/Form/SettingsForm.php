<?php
/**
 * @file
 * Contains Drupal\upverter_api_service\Form\SettingsForm.
 */
namespace Drupal\senate_login\Form;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class SettingsForm extends ConfigFormBase {
  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'senate_login.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'senate_login_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('senate_login.settings');

    $form['senate_login_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Login Url'),
      '#description' => $this->t('Login Url'),
      '#default_value' => $config->get('senate_login_url'),
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('senate_login.settings')
      ->set('senate_login_url', $form_state->getValue('senate_login_url'))
      ->save();
  }
}
