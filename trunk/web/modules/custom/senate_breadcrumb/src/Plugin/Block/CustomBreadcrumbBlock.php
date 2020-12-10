<?php

namespace Drupal\senate_breadcrumb\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\easy_breadcrumb\EasyBreadcrumbConstants;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Controller\TitleResolverInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\Component\Utility\Html;

/**
 * Provides a 'Breadcrumb' Block.
 *
 * @Block(
 *   id = "custom_breadcrumb_block",
 *   admin_label = @Translation("Custom Breadcrumb block"),
 *   category = @Translation("Custom Blocks"),
 * )
 */
class CustomBreadcrumbBlock extends BlockBase implements ContainerFactoryPluginInterface {


  /**
   * The breadcrumb manager.
   *
   * @var \Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface
   */
  protected $breadcrumbManager;

  /**
   * The current route match.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  protected $routeMatch;

  /**
   * The title resolver service.
   *
   * @var \Drupal\Core\Controller\TitleResolverInterface
   */
  protected $titleResolver;

  /**
   * Constructs a new CustomBreadcrumbBlock object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param \Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface $breadcrumb_manager
   *   The breadcrumb manager.
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The current route match.
   * @param \Drupal\Core\Controller\TitleResolverInterface $titleResolver
   *   The title resolver.
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, BreadcrumbBuilderInterface $breadcrumb_manager, RouteMatchInterface $route_match, TitleResolverInterface $titleResolver) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->breadcrumbManager = $breadcrumb_manager;
    $this->routeMatch = $route_match;
    $this->titleResolver = $titleResolver;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('breadcrumb'),
      $container->get('current_route_match'),
      $container->get('title_resolver')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $breadcrumbs = $this->breadcrumbManager->build($this->routeMatch)->getLinks();
    $text_color = $this->getTextColor();

    if (!empty($breadcrumbs[0]) && ($breadcrumbs[0]->getUrl()->toString() == '/')) {
      unset($breadcrumbs[0]);
    }
    if (!empty($breadcrumbs[1]) && ($breadcrumbs[1]->getUrl()->toString() == '/node')) {
      unset($breadcrumbs[1]);
    }
    $last = end($breadcrumbs);

    $request = \Drupal::request();
    $page_title = $this->titleResolver->getTitle($request, $this->routeMatch->getRouteObject());

    $page_title = $this->replaceTitle($page_title);
    $last_title = !empty($last) && is_object($last) ? $last->getText() : '';
    $page_title_compare = Html::getId($page_title);
    $last_title_compare = Html::getId($last_title);

    if (!empty($page_title) && !empty($last) && ($page_title_compare == $last_title_compare)) {
      array_pop($breadcrumbs);
    }

    $back = end($breadcrumbs);
    if (!empty($back)) {
      $url = $back->getUrl()->toString();
      $uri_parts = parse_url($url);
      if (empty($uri_parts["scheme"])) {
        $url = 'internal:' . $url;
      }
      $back_url = Url::fromUri($url);
      $options = ['class' => ['link', 'link_back']];
      if (!empty($text_color['back_link'])) {
        $options['class'][] = $text_color['back_link'];
      }
      $back_url->setOption('attributes', $options);
      $back_link = Link::fromTextAndUrl(t('back'), $back_url);
    }

    return [
      '#type' => 'inline_template',
      '#template' => '
        {{ back_link }}

        {% if breadcrumbs %}
          <div class="breadcrumb {{ breadcrumb_class }}">
            {% for breadcrumb in breadcrumbs %}
              {{ breadcrumb }}
            {% endfor %}

            {% if page_title is not empty %}
              <span>{{ page_title }}</span>
            {% endif %}
          </div>
        {% endif %}',
      '#context' => [
        'breadcrumbs' => !empty($breadcrumbs) ? $breadcrumbs : [],
        'page_title' => !empty($page_title) ? $page_title : NULL,
        'back_link' => !empty($back_link) ? $back_link : NULL,
        'breadcrumb_class' => !empty($text_color['breadcrumbs']) ? $text_color['breadcrumbs'] : '',
      ],
      '#cache' => [
        'contexts' => ['url.path'],
      ],
    ];
  }

  public function getTextColor() {
    $color = 'white';
    $color_map = [
      'white' => [
        'back_link' => 'link_cl_a',
        'breadcrumbs' => '',
      ],
      'navy' => [
        'back_link' => 'link_cl_b',
        'breadcrumbs' => 'breadcrumb_a',
      ],
    ];

    $view_id = \Drupal::routeMatch()->getParameter('view_id');
    $node = \Drupal::request()->attributes->get('node');

    if (!empty($view_id)) {
      switch ($view_id) {
        case 'agencies_documents':
        case 'subcommittee_events':
          $color = 'navy';
          break;
      }
    }

    if (!empty($node) && is_object($node)) {
      switch ($node->bundle()) {
        case 'senate_votes':
        case 'edu_indiv_art_work':
        case 'contact':
        case 'protem_podcast':
        case 'feedback':
          $color = 'navy';
          break;
      }
    }

    return !empty($color_map[$color]) ? $color_map[$color] : [];
  }

  /**
   * Replace title.
   * @param $title
   *
   * @return mixed
   */
  public function replaceTitle($title) {
    $config = \Drupal::config('easy_breadcrumb.settings');
    $mapValues = preg_split('/[\r\n]+/', $config->get(EasyBreadcrumbConstants::REPLACED_TITLES));

    foreach ($mapValues as $mapValue) {
      $values = explode("::", $mapValue);
      if ((count($values) == 2) && ($values[0] == $title)) {
        $title = $values[1];
      }
    }

    return trim($title);
  }
}
