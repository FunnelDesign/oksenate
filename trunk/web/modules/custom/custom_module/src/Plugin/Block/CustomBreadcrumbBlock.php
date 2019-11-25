<?php

namespace Drupal\custom_module\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Controller\TitleResolverInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;

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

    if (!empty($breadcrumbs[0]) && ($breadcrumbs[0]->getUrl()->toString() == '/')) {
      unset($breadcrumbs[0]);
    }
    if (!empty($breadcrumbs[1]) && ($breadcrumbs[1]->getUrl()->toString() == '/node')) {
      unset($breadcrumbs[1]);
    }
    $last = end($breadcrumbs);

    $request = \Drupal::request();
    $page_title = $this->titleResolver->getTitle($request, $this->routeMatch->getRouteObject());
    if (!empty($page_title) && !empty($last) && ($page_title == $last->getText())) {
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
      $options = ['class' => ['link', 'link_cl_a', 'link_back']];
      $back_url->setOption('attributes', $options);
      $back_link = Link::fromTextAndUrl(t('back'), $back_url);
    }

    return [
      '#type' => 'inline_template',
      '#template' => '
          <div class="section__sNav">
            <div class="bContainer">
              {{ back_link }}
              
              {% if breadcrumbs %}
                <div class="breadcrumb">
                  {% for breadcrumb in breadcrumbs %}
                    {{ breadcrumb }}
                  {% endfor %}
                  
                  {% if page_title is not empty %}
                    <span>{{ page_title }}</span>
                  {% endif %}
                </div>
              {% endif %}
            </div>
          </div>',
      '#context' => [
        'breadcrumbs' => !empty($breadcrumbs) ? $breadcrumbs : [],
        'page_title' => !empty($page_title) ? $page_title : NULL,
        'back_link' => !empty($back_link) ? $back_link : NULL,
      ],
      '#cache' => [
        'contexts' => ['url.path'],
      ],
    ];
  }

}
