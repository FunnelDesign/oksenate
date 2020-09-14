<?php

namespace Drupal\senate_breadcrumb;

use Drupal\Component\Render\FormattableMarkup;
use Drupal\Component\Utility\Unicode;
use Drupal\Component\Utility\Xss;
use Drupal\Core\Access\AccessManagerInterface;
use Drupal\Core\Breadcrumb\Breadcrumb;
use Drupal\Core\Breadcrumb\BreadcrumbBuilderInterface;
use Drupal\Core\Cache\CacheableDependencyInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Controller\TitleResolverInterface;
use Drupal\Core\Extension\ModuleHandler;
use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Link;
use Drupal\Core\Logger\LoggerChannelFactoryInterface;
use Drupal\Core\Menu\MenuLinkManager;
use Drupal\Core\ParamConverter\ParamNotConvertedException;
use Drupal\Core\Path\CurrentPathStack;
use Drupal\Core\PathProcessor\InboundPathProcessorInterface;
use Drupal\Core\Routing\RequestContext;
use Drupal\Core\Routing\RouteMatch;
use Drupal\Core\Routing\RouteMatchInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\Core\Url;
use Drupal\Core\Messenger\MessengerInterface;
use Drupal\Component\Utility\UrlHelper;
use Symfony\Cmf\Component\Routing\RouteObjectInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Matcher\RequestMatcherInterface;
use Symfony\Component\Routing\Exception\RouteNotFoundException;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\EntityRepositoryInterface;
use Drupal\easy_breadcrumb\EasyBreadcrumbBuilder;
use Drupal\custom_module\Plugin\views\argument\CustomNidToAuthor;


/**
 * Primary implementation for the Easy Breadcrumb builder.
 */
class SenateBreadcrumbBuilder extends EasyBreadcrumbBuilder implements BreadcrumbBuilderInterface {
  use StringTranslationTrait;

  /**
   * The router request context.
   *
   * @var \Drupal\Core\Routing\RequestContext
   */
  protected $context;

  /**
   * The access manager service.
   *
   * @var \Drupal\Core\Access\AccessManagerInterface
   */
  protected $accessManager;
  /**
   * The request stack service.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  protected $requestStack;

  /**
   * The dynamic router service.
   *
   * @var \Symfony\Component\Routing\Matcher\RequestMatcherInterface
   */
  protected $router;

  /**
   * The path processor service.
   *
   * @var \Drupal\Core\PathProcessor\InboundPathProcessorInterface
   */
  protected $pathProcessor;

  /**
   * Site config object.
   *
   * @var \Drupal\Core\Config\Config
   */
  protected $siteConfig;

  /**
   * Breadcrumb config object.
   *
   * @var \Drupal\Core\Config\Config
   */
  protected $config;

  /**
   * The title resolver.
   *
   * @var \Drupal\Core\Controller\TitleResolverInterface
   */
  protected $titleResolver;

  /**
   * The current user object.
   *
   * @var \Drupal\Core\Session\AccountInterface
   */
  protected $currentUser;

  /**
   * The current path object.
   *
   * @var \Drupal\Core\Path\CurrentPathStack
   */
  protected $currentPath;

  /**
   * The menu link manager.
   *
   * @var \Drupal\Core\Menu\MenuLinkManager
   */
  protected $menuLinkManager;

  /**
   * The language manager.
   *
   * @var \Drupal\Core\Language\LanguageManagerInterface
   */
  protected $languageManager;

  /**
   * The logger service.
   *
   * @var \Drupal\Core\Logger\LoggerChannelFactoryInterface
   */
  protected $logger;

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The entity repository.
   *
   * @var \Drupal\Core\Entity\EntityRepositoryInterface
   */
  protected $entityRepository;

  /**
   * The messenger service.
   *
   * @var \Drupal\Core\Messenger\MessengerInterface
   */
  protected $messenger;

  protected $easyBreadcrumb;

  protected $useEasyBreadcrumb;

  const COMMITTEE_MAIN_PAGE_NID = 1384;

  /**
   * The module handler service.
   *
   * @var \Drupal\Core\Extension\ModuleHandler
   */
  protected $moduleHandler;

  /**
   * Constructs the EasyBreadcrumbBuilder.
   *
   * @param \Drupal\Core\Routing\RequestContext $context
   *   The router request context.
   * @param \Drupal\Core\Access\AccessManagerInterface $access_manager
   *   The access manager service.
   * @param \Symfony\Component\Routing\Matcher\RequestMatcherInterface $router
   *   The dynamic router service.
   * @param \Symfony\Component\HttpFoundation\RequestStack $request_stack
   *   The request stack service.
   * @param \Drupal\Core\PathProcessor\InboundPathProcessorInterface $path_processor
   *   The inbound path processor.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory service.
   * @param \Drupal\Core\Controller\TitleResolverInterface $title_resolver
   *   The title resolver service.
   * @param \Drupal\Core\Session\AccountInterface $current_user
   *   The current user object.
   * @param \Drupal\Core\Path\CurrentPathStack $current_path
   *   The current path.
   * @param \Drupal\Core\Menu\MenuLinkManager $menu_link_manager
   *   The menu link manager.
   * @param \Drupal\Core\Language\LanguageManagerInterface $language_manager
   *   The language manager service.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Drupal\Core\Entity\EntityRepositoryInterface $entity_repository
   *   The entity repository.
   * @param \Drupal\Core\Logger\LoggerChannelFactoryInterface $logger
   *   The logger service.
   * @param \Drupal\Core\Messenger\MessengerInterface $messenger
   *   The messenger service.
   * @param \Drupal\Core\Extension\ModuleHandler $module_handler
   *   The module handler.
   */
  public function __construct(RequestContext $context, AccessManagerInterface $access_manager,
                              RequestMatcherInterface $router, RequestStack $request_stack,
                              InboundPathProcessorInterface $path_processor,
                              ConfigFactoryInterface $config_factory, TitleResolverInterface $title_resolver,
                              AccountInterface $current_user, CurrentPathStack $current_path,
                              MenuLinkManager $menu_link_manager, LanguageManagerInterface $language_manager,
                              EntityTypeManagerInterface $entity_type_manager,
                              EntityRepositoryInterface $entity_repository,
                              LoggerChannelFactoryInterface $logger, MessengerInterface $messenger,
                              ModuleHandler $module_handler,
                              EasyBreadcrumbBuilder $easy_breadcrumb_breadcrumb) {
    $this->context = $context;
    $this->accessManager = $access_manager;
    $this->router = $router;
    $this->requestStack = $request_stack;
    $this->pathProcessor = $path_processor;
    $this->siteConfig = $config_factory->get('system.site');
    $this->config = $config_factory->get('easy_breadcrumb.settings');
    $this->titleResolver = $title_resolver;
    $this->currentUser = $current_user;
    $this->currentPath = $current_path;
    $this->menuLinkManager = $menu_link_manager;
    $this->languageManager = $language_manager;
    $this->entityTypeManager = $entity_type_manager;
    $this->entityRepository = $entity_repository;
    $this->logger = $logger;
    $this->messenger = $messenger;
    $this->easyBreadcrumb = $easy_breadcrumb_breadcrumb;
    $this->useEasyBreadcrumb = TRUE;
    $this->moduleHandler = $module_handler;
  }

  /**
   * {@inheritdoc}
   */
  public function applies(RouteMatchInterface $route_match) {
    $result = $this->easyBreadcrumb->applies($route_match);

    return $result;
  }

  /**
   * {@inheritdoc}
   */
  public function build(RouteMatchInterface $route_match) {
    $view_id = \Drupal::routeMatch()->getParameter('view_id');
    $breadcrumb = new Breadcrumb();

    if (!empty($view_id)) {
      switch ($view_id) {
        case 'agencies_documents':
          $current_path = \Drupal::service('path.current')->getPath();
          $arg = explode('/', $current_path);
          $removed = array_pop($arg);
          if (is_numeric($removed)) {
            $current_path_without_tid = implode('/', $arg);
            $this->context->setPathInfo($current_path_without_tid);
            $this->useEasyBreadcrumb = FALSE;
            $breadcrumb = parent::build($route_match);
          }
          break;
        case 'subcommittee_events':
          $current_path = \Drupal::service('path.current')->getPath();
          $arg = explode('/', $current_path);
          $tid = array_pop($arg);
          $links = [];

          if (is_numeric($tid)) {
            $this->useEasyBreadcrumb = FALSE;
            $ancestors = $this->getTaxonomyAncestors($tid);
            $nodes = $this->getNidsByTids($ancestors);

            $url = Url::fromUserInput('/node/' . $this::COMMITTEE_MAIN_PAGE_NID);
            $links[] = Link::fromTextAndUrl(t('Committees'), $url);
            $nodes = !empty($nodes) ? $nodes : [];

            foreach ($nodes as $node) {
              $nid = !empty($node->nid) ? $node->nid : '';
              $title = !empty($node->title) ? $node->title : '';
              if (!empty($nid) && !empty($title)) {
                $url = Url::fromUserInput('/node/' . $nid);
                $links[] = Link::fromTextAndUrl($title, $url);
              }
            }
            $breadcrumb->setLinks($links);
          }
          break;
        case 'senator_press_release':
          $current_path = \Drupal::service('path.current')->getPath();
          $arg = explode('/', $current_path);
          $senator_nid = !empty($arg[2]) ? $arg[2] : '';
          $links = [];

          if (!empty($senator_nid) && !is_numeric($senator_nid)) {
            $senator_nid = CustomNidToAuthor::convertSenatorNameToNid($senator_nid);
          }

          if (!empty($senator_nid) && is_numeric($senator_nid)) {
            $this->useEasyBreadcrumb = FALSE;
            $node_storage = \Drupal::entityTypeManager()->getStorage('node');
            $node = $node_storage->load($senator_nid);
            $name = !empty($node) ? $node->get('title')->value : '';

            $url = Url::fromUserInput('/node/' . $senator_nid);
            $links[] = Link::fromTextAndUrl($name, $url);
            $breadcrumb->setLinks($links);
          }
          break;
      }
    }

    if ($this->useEasyBreadcrumb) {
      $breadcrumb = $this->easyBreadcrumb->build($route_match);
    }

    return $breadcrumb;
  }

  /**
   * Set request context from passed in $route_match if route is available.
   *
   * @param Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The route match for the breadcrumb.
   */
  protected function setRouteContextFromRouteMatch(RouteMatchInterface $route_match) {
    if ($this->useEasyBreadcrumb) {
      $this->easyBreadcrumb->setRouteContextFromRouteMatch($route_match);
    }
  }

  public function getTaxonomyAncestors($tid) {
    $ancestors = \Drupal::service('entity_type.manager')
      ->getStorage("taxonomy_term")->loadAllParents($tid);
    $ancestors = !empty($ancestors) ? $ancestors : [];
    $tids = [];

    foreach ($ancestors as $ancestor) {
      $tids[] = !empty($ancestor) ? $ancestor->id() : '';
    }

    return $tids;
  }

  public function getNidsByTids($tids) {
    if (empty($tids) || !is_array($tids)) {
      return '';
    }

    $query = \Drupal::database()->select('node_field_data', 'nfd');
    $query->fields('nfd', ['nid', 'title']);
    $query->condition('nfd.status', 1)
      ->condition('nfd.type', 'subcommittee');

    $query->join('node__field_subcomt', 'nfs', 'nfs.entity_id = nfd.nid');
    $query->fields('nfs', ['field_subcomt_target_id']);
    $query->condition('nfs.bundle', 'subcommittee')
      ->condition('nfs.field_subcomt_target_id', $tids, 'IN');

    $result = $query->execute()->fetchAllAssoc('field_subcomt_target_id');

    return !empty($result) ? $result : [];
  }
}
