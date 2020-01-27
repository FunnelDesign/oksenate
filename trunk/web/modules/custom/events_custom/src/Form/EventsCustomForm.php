<?php

namespace Drupal\events_custom\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\CronInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Queue\QueueFactory;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\State\StateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class EventsCustomForm extends ConfigFormBase {

  /**
   * The current user.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * The cron service.
   *
   * @var \Drupal\Core\CronInterface
   */
  protected $cron;

  /**
   * The queue object.
   *
   * @var \Drupal\Core\Queue\QueueFactory
   */
  protected $queue;

  /**
   * The state keyvalue collection.
   *
   * @var \Drupal\Core\State\StateInterface
   */
  protected $state;

  /**
   * {@inheritdoc}
   */
  public function __construct(ConfigFactoryInterface $config_factory, AccountInterface $current_user, CronInterface $cron, QueueFactory $queue, StateInterface $state) {
    parent::__construct($config_factory);
    $this->currentUser = $current_user;
    $this->cron = $cron;
    $this->queue = $queue;
    $this->state = $state;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    $form = new static(
      $container->get('config.factory'),
      $container->get('current_user'),
      $container->get('cron'),
      $container->get('queue'),
      $container->get('state')
    );
    $form->setMessenger($container->get('messenger'));
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'events_custom';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->configFactory->get('events_custom.settings');

    $request_time = \Drupal::time()->getRequestTime();
    $next_execution = $this->state->get('events_custom.next_execution');
    $next_execution = !empty($next_execution) ? $next_execution : $request_time;

    $form['status'] = [
      '#type' => 'details',
      '#title' => $this->t('Cron status information'),
      '#open' => TRUE,
    ];
    $args = [
      '%time' => date('c', $this->state->get('events_custom.next_execution')),
      '%seconds' => $next_execution - $request_time,
    ];
    $form['status']['last'] = [
      '#type' => 'item',
      '#markup' => $this->t('Cron runs after %time (%seconds seconds from now)', $args),
    ];

    $form['cron_run'] = [
      '#type' => 'details',
      '#title' => $this->t('Run cron manually'),
      '#open' => TRUE,
    ];
    $form['cron_run']['cron_reset'] = [
      '#type' => 'checkbox',
      '#title' => $this->t("Run cron regardless of whether interval has expired."),
      '#default_value' => FALSE,
    ];
    $form['cron_run']['cron_get_all'] = [
      '#type' => 'checkbox',
      '#title' => $this->t("Get all events."),
      '#default_value' => FALSE,
    ];
    $form['cron_run']['cron_trigger']['actions'] = ['#type' => 'actions'];
    $form['cron_run']['cron_trigger']['actions']['sumbit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Run cron now'),
      '#submit' => [[$this, 'cronRun']],
    ];

    $form['configuration'] = [
      '#type' => 'details',
      '#title' => $this->t('Configuration'),
      '#open' => TRUE,
    ];
    $form['configuration']['interval'] = [
      '#type' => 'select',
      '#title' => $this->t('Cron interval'),
      '#description' => $this->t('Time after which cron will respond to a processing request.'),
      '#default_value' => $config->get('interval'),
      '#options' => [
        60 => $this->t('1 minute'),
        300 => $this->t('5 minutes'),
        3600 => $this->t('1 hour'),
        86400 => $this->t('1 day'),
      ],
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * Allow user to directly execute cron, optionally forcing it.
   */
  public function cronRun(array &$form, FormStateInterface &$form_state) {
    $cron_reset = $form_state->getValue('cron_reset');
    $cron_get_all = $form_state->getValue('cron_get_all');
    if (!empty($cron_reset)) {
      $this->state->set('events_custom.next_execution', 0);
    }
    if (!empty($cron_get_all)) {
      $this->state->set('events_custom.prev_execution', 0);
    }

    // Use a state variable to signal that cron was run manually from this form.
    $this->state->set('events_custom_show_status_message', TRUE);
    if ($this->cron->run()) {
      $this->messenger()->addMessage($this->t('Cron ran successfully.'));
    }
    else {
      $this->messenger()->addError($this->t('Cron run failed.'));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

    $this->configFactory->getEditable('events_custom.settings')
      ->set('interval', $form_state->getValue('interval'))
      ->save();

    parent::submitForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['events_custom.settings'];
  }

}
