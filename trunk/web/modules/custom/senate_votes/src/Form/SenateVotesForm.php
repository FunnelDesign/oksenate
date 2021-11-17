<?php

namespace Drupal\senate_votes\Form;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\CronInterface;
use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Queue\QueueFactory;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\State\StateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class SenateVotesForm extends ConfigFormBase {

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
    return 'senate_votes';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->configFactory->get('senate_votes.settings');

    $request_time = \Drupal::time()->getRequestTime();
    $next_execution = $this->state->get('senate_votes.next_execution');
    $next_execution = !empty($next_execution) ? $next_execution : $request_time;

    $form['status'] = [
      '#type' => 'details',
      '#title' => $this->t('Cron status information'),
      '#open' => TRUE,
    ];
    $args = [
      '%time' => date('c', $this->state->get('senate_votes.next_execution')),
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
      '#title' => $this->t("Get votes from files regardless of whether file has been updated."),
      '#default_value' => FALSE,
    ];
//    $form['cron_run']['cron_update_all'] = [
//      '#type' => 'checkbox',
//      '#title' => $this->t("Update all votes paragraphs."),
//      '#default_value' => FALSE,
//    ];
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
        900 => $this->t('15 minutes'),
        3600 => $this->t('1 hour'),
        86400 => $this->t('1 day'),
      ],
    ];

    $form['source'] = [
      '#type' => 'select',
      '#title' => $this->t('Source'),
      '#default_value' => $config->get('source'),
      '#options' => [
        'api' => $this->t('Api'),
        'files' => $this->t('Files'),
      ],
      '#attributes' => [
        'name' => 'source',
      ],
    ];

    $form['files'] = [
      '#type' => 'details',
      '#title' => $this->t('Files'),
      '#open' => TRUE,
      '#states' => [
        'visible' => [
          ':input[name="source"]' => ['value' => 'files'],
        ],
      ],
    ];

    $form['files']['directory'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Directory'),
      '#default_value' => $config->get('directory'),
      '#size' => 60,
      '#maxlength' => 128,
      '#required' => TRUE,
    ];

    $form['api'] = [
      '#type' => 'details',
      '#title' => $this->t('Api'),
      '#open' => TRUE,
      '#states' => [
        'visible' => [
          ':input[name="source"]' => ['value' => 'api'],
        ],
      ],
    ];

    $form['api']['api_update_all'] = [
      '#type' => 'checkbox',
      '#title' => $this->t("Update all votes."),
      '#default_value' => $config->get('api_update_all'),
    ];

    $form['api']['api_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Url'),
      '#default_value' => $config->get('api_url'),
      '#size' => 60,
      '#maxlength' => 128,
      '#required' => TRUE,
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * Allow user to directly execute cron, optionally forcing it.
   */
  public function cronRun(array &$form, FormStateInterface &$form_state) {
    $cron_reset = $form_state->getValue('cron_reset');
    $cron_get_all = $form_state->getValue('cron_get_all');
    $cron_update_all = $form_state->getValue('cron_update_all');
    $directory = $form_state->getValue('directory');
    $source = $form_state->getValue('source');
    $api_update_all = $form_state->getValue('api_update_all');
    $api_url = $form_state->getValue('api_url');

    if (!empty($cron_reset)) {
      $this->state->set('senate_votes.next_execution', 0);
    }
    if (!empty($cron_get_all)) {
      $this->state->set('senate_votes.prev_execution', 0);
    }
    if (!empty($cron_update_all)) {
      $this->state->set('senate_votes.update_all', TRUE);
    }
    if (!empty($directory)) {
      $this->state->set('senate_votes.directory', $directory);
    }
    if (!empty($source)) {
      $this->state->set('senate_votes.source', $source);
    }
    if (!empty($api_url)) {
      $this->state->set('senate_votes.api_url', $api_url);
    }

    $this->state->set('senate_votes.api_update_all', $api_update_all);

    // Use a state variable to signal that cron was run manually from this form.
    $this->state->set('senate_votes_show_status_message', TRUE);
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

    $this->configFactory->getEditable('senate_votes.settings')
      ->set('interval', $form_state->getValue('interval'))
      ->save();

    $this->configFactory->getEditable('senate_votes.settings')
      ->set('directory', $form_state->getValue('directory'))
      ->save();

    $this->configFactory->getEditable('senate_votes.settings')
      ->set('source', $form_state->getValue('source'))
      ->save();

    $this->configFactory->getEditable('senate_votes.settings')
      ->set('api_update_all', $form_state->getValue('api_update_all'))
      ->save();

    $this->configFactory->getEditable('senate_votes.settings')
      ->set('api_url', $form_state->getValue('api_url'))
      ->save();

    parent::submitForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return ['senate_votes.settings'];
  }

}
