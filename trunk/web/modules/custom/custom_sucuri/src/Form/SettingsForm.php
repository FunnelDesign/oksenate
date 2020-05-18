<?php

namespace Drupal\custom_sucuri\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SettingsForm.
 */
class SettingsForm extends ConfigFormBase  {

  /**
   * Config settings.
   *
   * @var string
   */
  const CONFIG_NAME = 'custom_sucuri.settings';


  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'suciri_settings_form';
  }



  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config(static::CONFIG_NAME);
    $form['clear_cache_api_url'] = [
      '#type' => 'url',
      '#title' => $this->t('Clear cache api url'),
      '#description' => $this->t('Get from here https://waf.sucuri.net/?settings in API section Quick Links -> Clear cache button url'),
      '#weight' => '0',
      '#default_value' => $config->get('clear_cache_api_url')
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    $this->configFactory->getEditable(static::CONFIG_NAME)
      ->set('clear_cache_api_url', $form_state->getValue('clear_cache_api_url'))
      ->save();

    parent::submitForm($form, $form_state);
  }

  protected function getEditableConfigNames() {
    return [
      static::CONFIG_NAME,
    ];
  }

}
