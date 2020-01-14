<?php

namespace Drupal\senate_paragraphs\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\paragraphs\Entity\Paragraph;
use Drupal\paragraphs_edit\Form\ParagraphEditForm;
use Drupal\paragraphs_edit\ParagraphFormHelperTrait;
use Drupal\node\Entity\Node;

class SenateParagraphAddForm extends FormBase {

  public function buildForm(array $form, FormStateInterface $form_state, $root_parent_type = NULL, $root_parent = NULL, $root_parent_field = NULL) {
    $form['#parents'] = [];
    $parent_type = !empty($root_parent_type) ? $root_parent_type : 'node';
    $parent_id = !empty($root_parent) && is_object($root_parent) ? $root_parent->id() : '';
    $parent_bundle = !empty($root_parent) && is_object($root_parent) ? $root_parent->bundle() : '';
    $root_parent_field = !empty($root_parent_field) ? $root_parent_field : '';

    $paragraph = Paragraph::create([
      'type' => $parent_bundle,
      'parent_id' => $parent_id,
      'parent_type' => $parent_type,
      'parent_field_name' => $root_parent_field,
    ]);

    $form_state->set('entity', $paragraph);
    $form_state->set('parent_entity', $root_parent);
    $form_state->set('parent_field', $root_parent_field);

    /** @var \Drupal\Core\Entity\Display\EntityFormDisplayInterface $form_display */
    $form_display = \Drupal::service('entity_type.manager')->getStorage('entity_form_display')->load('paragraph.senate_votes.default');
    $form_state->set('form_display', $form_display);
    $submit_weight = 0;

    foreach ($form_display->getComponents() as $name => $component) {
      $widget = $form_display->getRenderer($name);
      if (!$widget) {
        continue;
      }
      $items = $paragraph->get($name);
      $items->filterEmptyItems();
      $form[$name] = $widget->form($items, $form, $form_state);
      $form[$name]['#access'] = $items->access('edit');
      $form[$name]['#weight'] = $component['weight'];
      $submit_weight = $component['weight'];
    }

    $form['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Save'),
      '#attributes' => [
        'class' => ['button', 'button--primary'],
      ],
      '#weight' => ++$submit_weight,
      '#prefix' => '<div class="form-actions">',
      '#suffix' => '</div>',
    ];

    return $form;
  }

  /**
   * Getter method for Form ID.
   *
   * The form ID is used in implementations of hook_form_alter() to allow other
   * modules to alter the render array built by this form controller. It must be
   * unique site wide. It normally starts with the providing module's name.
   *
   * @return string
   *   The unique ID of the form defined by this class.
   */
  public function getFormId() {
    return 'senate_paragraphs_add_form';
  }

  public function submitForm(array &$form, FormStateInterface $form_state) {
    $form_display = $form_state->get('form_display');
    $paragraph = $form_state->get('entity');
    $parent_entity = $form_state->get('parent_entity');
    $parent_field = $form_state->get('parent_field');

    if (!empty($parent_entity) && is_object($parent_entity) && !empty($parent_field)) {
      $form_display->extractFormValues($paragraph, $form, $form_state);
      $paragraph->isNew();
      $paragraph->save();
      $id = $paragraph->id();

      $parent_entity->$parent_field[] = [
        'target_id' => $id,
        'target_revision_id' => $paragraph->getRevisionId(),
      ];
      $parent_entity->save();
    }
  }
}
