<?php

namespace Drupal\content_parser\Entity;

use Drupal\Component\Utility\Html;
use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\content_parser\Results;
use Drupal\field\Entity\FieldConfig;
use Drupal\field\Entity\FieldStorageConfig;

/**
 * Defines the ContentParser entity.
 *
 * @ConfigEntityType(
 *   id = "content_parser",
 *   label = @Translation("ContentParser"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\content_parser\ContentParserListBuilder",
 *     "form" = {
 *       "add" = "Drupal\content_parser\Form\ContentParserForm",
 *       "edit" = "Drupal\content_parser\Form\ContentParserForm",
 *       "delete" = "Drupal\content_parser\Form\ContentParserDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\content_parser\ContentParserHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "content_parser",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/content_parser/{content_parser}",
 *     "add-form" = "/admin/structure/content_parser/add",
 *     "edit-form" = "/admin/structure/content_parser/{content_parser}/edit",
 *     "delete-form" = "/admin/structure/content_parser/{content_parser}/delete",
 *     "collection" = "/admin/structure/content_parser"
 *   }
 * )
 */
class ContentParser extends ConfigEntityBase {

  /**
   * The ContentParser ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The ContentParser label.
   *
   * @var string
   */
  protected $label;

  /**
   * The ContentParser start_url.
   *
   * @var string
   */
  protected $start_url;

  /**
   * The ContentParser test_url.
   *
   * @var string
   */
  protected $test_url;

  /**
   * Static var for senator check
   *
   * @var $senatorUrl
   */
  static $senatorUrl;

  /**
   * The ContentParser check_code.
   *
   * @var string
   */
  protected $check_code;

  /**
   * The ContentParser depth.
   *
   * @var string
   */
  protected $depth = 3;

  /**
   * The ContentParser white_list.
   *
   * @var string
   */
  protected $white_list;

  /**
   * The ContentParser entity_type.
   *
   * @var string
   */
  protected $entity_type;

  /**
   * The ContentParser bundle.
   *
   * @var string
   */
  protected $bundle;

  /**
   * The ContentParser bundle.
   *
   * @var string
   */
  protected $codes;

  /**
   * The settings.
   *
   * @var string
   */
  protected $settings;

  /**
   * The settings.
   *
   * @var string
   */
  protected $results;

  /**
   * The is use sitemap.
   *
   * @var string
   */
  protected $use_sitemap;

  /**
   * The is use sitemap.
   *
   * @var string
   */
  protected $sitemap;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $values, $entity_type) {
    parent::__construct($values, $entity_type);
    $this->results = new Results($this->id);
  }

  /**
   * {@inheritdoc}
   */
  public function getStartUrl() {
    return $this->start_url;
  }

  /**
   * {@inheritdoc}
   */
  public function getTestUrl() {
    return $this->test_url;
  }

  /**
   * {@inheritdoc}
   */
  public function getCheckCode() {
    return $this->check_code;
  }

  /**
   * {@inheritdoc}
   */
  public function getDepth() {
    return (int) $this->depth;
  }

  /**
   * {@inheritdoc}
   */
  public function getWhiteList() {
    return $this->white_list;
  }

  /**
   * {@inheritdoc}
   */
  public function getBlackList() {
    return isset($this->black_list) ? $this->black_list : '';
  }

  /**
   * {@inheritdoc}
   */
  public function getSelectEntityType() {
    return $this->entity_type ? $this->entity_type : 'node';
  }

  /**
   * {@inheritdoc}
   */
  public function getSelectBundle() {
    return $this->bundle;
  }

  /**
   * {@inheritdoc}
   */
  public function isSitemap() {
    return $this->use_sitemap;
  }

  /**
   * {@inheritdoc}
   */
  public function getSitemap() {
    return $this->sitemap;
  }

  /**
   * {@inheritdoc}
   */
  public function setSelectEntityType($entity_type) {
    return $this->entity_type = $entity_type;
  }

  /**
   * {@inheritdoc}
   */
  public function setSelectEntityBundle($bundle) {
    return $this->bundle = $bundle;
  }

  /**
   * {@inheritdoc}
   */
  public function getCodes() {
    return $this->codes ? $this->codes : [];
  }

  /**
   * {@inheritdoc}
   */
  public function getCode($name) {
    return isset($this->codes[$name]['code']) ? $this->codes[$name]['code'] : '';
  }

  /**
   * {@inheritdoc}
   */
  public function setResults(array $array) {
    return $this->results->setResults($array);
  }

  /**
   * {@inheritdoc}
   */
  public function generateResults() {
    return $this->results->generateResults();
  }

  /**
   * {@inheritdoc}
   */
  public function getResults() {
    return $this->results->getResults();
  }

  /**
   * {@inheritdoc}
   */
  public function getSettings() {
    return $this->settings;
  }

  /**
   * {@inheritdoc}
   */
  public function getSetting($name) {
    return isset($this->settings[$name]) ? $this->settings[$name] : null;
  }

  /**
   * {@inheritdoc}
   */
  public function sleep() {
    $sleep = $this->getSetting('sleep');

    if ($sleep) {
      sleep($sleep);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function parseSitemap() {
    $file = simplexml_load_file($this->sitemap);

    if (!$file) {
      return [];
    }

    $json = json_encode($file);
    $array = json_decode($json, true);

    return array_map(function($item) {
      return $item['loc'];
    }, $array['url']);
  }

  /**
   * {@inheritdoc}
   */
  public function getStartUrls() {
    if ($this->isSitemap()) {
      return $this->parseSitemap();
    }

    $start_urls = _get_array_from_text_lines($this->start_url);

    $urls = [];

    foreach ($start_urls as $start_url) {
      $start_url = trim($start_url);
      if (preg_match('#\[mask:(\d+),(\d+)\]#', $start_url, $matches)) {
        $min = (int) $matches[1];
        $max = (int) $matches[2];
        for ($i = $min; $i <= $max; $i++) {
          $urls[] = str_replace('[mask:' . $matches[1] . ',' . $matches[2] . ']', $i, $start_url);
        }
      }
      else {
        $urls[] = $start_url;
      }
    }

    return $urls;
  }


  /**
   * Return TRUE if URL is allowed.
   */
  public function findUrls($doc, $base_url) {
    $list = [];
    if(strpos($base_url, '_bio.aspx')){
      $base_url = str_replace('_bio.aspx', '_bio.html', $base_url);
    }
    $content = $this->loadUrl($base_url);
    $doc = $this->getPhpQuery($content, $base_url);
    foreach (_parser_get_page_links($doc) as $url) {


      $link_url_absolute = parser_get_absolute_url($base_url, $url);
      if(strpos($link_url_absolute, '/districts/') !== false){
        $mini = 2;
      }

      if ($this->isAllowedUrl($link_url_absolute)) {
        $list[] = $link_url_absolute;
      }
    }

    return $list;
  }

  /**
   * Return TRUE if URL is allowed.
   */
  public function isAllowedUrl($absolute_url) {
    $start_urls = $this->getStartUrls();

    if (in_array($absolute_url, $start_urls)) {
      return true;
    }

    if ($this->white_list && !_content_parser_match_path($absolute_url, $this->white_list)) {
      return false;
    }

    if ($this->black_list && _content_parser_match_path($absolute_url, $this->black_list)) {
      return false;
    }

    if ($this->getSetting('only_this_domen')) {
      $url_host_allowed = FALSE;

      foreach ($start_urls as $start_url) {
        if (_parser_check_urls_host($start_url, $absolute_url)) {
          $url_host_allowed = TRUE;
          break;
        }
      }

      if (!$url_host_allowed) {
        return FALSE;
      }
    }

    return true;
  }

  /**
   * {@inheritdoc}
   */
  public function getElements($doc) {
    if (!$this->getSetting('list_mode')) {
      return [$doc];
    }

    return $this->eval($doc, $this->getSetting('list_code'));
  }

  /**
   * {@inheritdoc}
   */
  public function getEntityByRemoteId($remote_id) {
    return content_parser_get_entity_by_remote_id($remote_id);
  }

  /**
   * {@inheritdoc}
   */
  public function insertRemote($entity_type, $entity_id, $remote_id, $url) {
    if ($remote_id) {
      content_parser_insert_remote_id($entity_type, $entity_id, $remote_id, $url, $this->id);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function loadUrl($url, $headers = [], $cookieJar = null) {
    return _get_page_by_url($url, $headers, $cookieJar);
  }

  /**
   * {@inheritdoc}
   */
  public function getPhpQuery($html, $base_url) {
    return _content_parser_create_phpquery(
      $html,
      $this->getSetting('charset_fix')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function toAbsolutePath($url) {
    return parse_url($url)['path'];
  }

  /**
   * {@inheritdoc}
   */
  public function eval($doc, $code, $base_url = null) {
    return eval($code);
  }

  /**
   * {@inheritdoc}
   */
  public function evalEntity($doc, $entity, $code, $base_url) {
    return eval($code);
  }

  /**
   * {@inheritdoc}
   */
  public function evalInitCode() {
    $headers = [];
    $cookieJar = null;

    if ($init_code = $this->getSetting('init_code')) {
      eval($init_code);
    }

    return [
      'headers' => $headers,
      'cookieJar' => $cookieJar
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function isCheck($doc, $base_url) {
    $code = $this->getCheckCode();

    if (!$code) {
      return true;
    }

    return $this->eval($doc, $code, $base_url);
  }

  /**
   * {@inheritdoc}
   */
  public function processUrl($url, $options = [], $callback = null) {
    if(strpos($url, 'Senators/districts/')){
      $mini =2;
    }
    if (!$this->isAllowedUrl($url)) {
      return;
    }
    if(strpos($url, '_bio.aspx')){
      $url = str_replace('_bio.aspx', '_bio.html', $url);
      static::$senatorUrl = $url;
    }

    $headers = isset($options['headers']) ? $options['headers'] : [];
    $cookieJar = isset($options['cookieJar']) ? $options['cookieJar'] : [];

    $html = $this->loadUrl($url, $headers, $cookieJar);

    if (!$html) {
      return [];
    }

    $doc = $this->getPhpQuery($html, $url);

    if (!$doc || !$this->isCheck($doc, $url)) {
      return [];
    }

    foreach ($this->getElements($doc) as $el) {
      $result = $this->processElement($el, $url);

      if ($callback && $callback($result)) {
        return;
      }
    }
  }

  /**
   * {@inheritdoc}
   */
  public function processElement($doc, $base_url) {
    if (!$this->isCheck($doc, $base_url)) {
      return $this->results->getNoAccessCode();
    }
    $case = $this->evalEntity(true, true, $this->getCode('field_press_release_type'), true);
    switch ($case){
      case 'archived':
        foreach ($doc->find('a') as $key=>$a) {
          $secondBase = pq($a)->attr('href');
          if($secondBase == '#top'){
            continue;
          }
          $base_url = parser_get_absolute_url($base_url, $secondBase);
          $base_url = preg_replace('/#.*$/', '', $base_url);
          $content = $this->loadUrl($base_url);
          $docYears = $this->getPhpQuery($content, $base_url);
          if(preg_match('/\b(?:[A-Za-z]+)?(?:\W+){1,6}?(?:[0-9]{4})?(?:\W+){1,6}?PRESS RELEASES\b/i', $content) === 1){
            $this->extractContent($base_url, $docYears);
          }
        }
        break;
      case 'four_years':
        $this->extractContent($base_url, $doc);
        break;
      case 'senators':
        $this->extractContent($base_url, $doc, TRUE);
        foreach ($doc->find('a') as $key=>$a) {
          $href = pq($a)->attr('href');
          $href = parser_get_absolute_url($base_url, $href);
          $href = preg_replace('/#.*$/', '', $href);
          if(strpos($href, '/districts/dist') !== false) {
            if (strpos($href, 'population.html') !== FALSE) {
              continue;
            }
            $content  = $this->loadUrl($href);
            $docYears = $this->getPhpQuery($content, $href);
            $this->extractContent($base_url, $docYears, TRUE);
          }
        }
        break;
    }
    return true;
  }

  /**
   * {@inheritdoc}
   */
  public function runTestUrl($base_url, $check_code) {
    $fields = [
      'field_press_release_contact_info' => [
        'table' => 'node__field_press_release_contact_info',
        'revision_table' => 'node_revision__field_press_release_contact_info',
        'format_col' => 'field_press_release_contact_info_format',
      ],
    ];

    $database = \Drupal::database();

    foreach ($fields as $field_name => $f) {
      $table = $f['table'];
      $revision_table = $f['revision_table'];
      // Entity type here.
      $entity_type = 'node';

      // Step 1: Get field storage.
      $field_storage = FieldStorageConfig::loadByName($entity_type, $field_name);

      // Check if field not found.
      if (is_null($field_storage)) {
        continue;
      }

      // Step 2: Store data.
      $rows = NULL;
      $revision_rows = NULL;
      if ($database->schema()->tableExists($table)) {
        // The table data to restore after the update is completed.
        $rows = $database->select($table, 'n')->fields('n')->execute()
          ->fetchAll();
        $revision_rows = $database->select($revision_table, 'n')->fields('n')->execute()
          ->fetchAll();
      }

      // Step 3: Save new field configs & delete existing fields.
      $new_fields = array();
      foreach ($field_storage->getBundles() as $bundle => $label) {
        $field = FieldConfig::loadByName($entity_type, $bundle, $field_name);
        $new_field = $field->toArray();
        $new_field['field_type'] = 'text';
        $new_fields[] = $new_field;
        // Delete field.
        $field->delete();
      }

      // Step 4: Create new storage configs from existing.
      $new_field_storage = $field_storage->toArray();
      $new_field_storage['type'] = 'text';
      $new_field_storage['module'] = 'text';
      $new_field_storage['settings'] = [
        'max_length' => 255,
      ];

      // Step 5: Purge deleted fields data.
      // This is required to create new fields.
      field_purge_batch(250);

      // Step 6: Create new fieldstorage.
      FieldStorageConfig::create($new_field_storage)->save();

      // Step 7: Create new fields for all bundles.
      foreach ($new_fields as $new_field) {
        $new_field = FieldConfig::create($new_field);
        $new_field->save();
      }

      // Step 8: Restore existing data in fields & revision tables.
      if (!is_null($rows)) {
        foreach ($rows as $row) {
          $row = (array)$row;
          $row[$f['format_col']] = 'basic_html';
          $database->insert($table)->fields($row)->execute();
        }
      }
      if (!is_null($revision_rows)) {
        foreach ($revision_rows as $row) {
          $row = (array)$row;
          $row[$f['format_col']] = 'basic_html';
          $database->insert($revision_table)->fields($row)->execute();
        }
      }

    }


    $html = $this->loadUrl($base_url);

    if (!$html) {
      return 'Не удалось загрузить страницу';
    }

    $doc = $this->getPhpQuery($html, $base_url);

    if (!$doc) {
      return 'Не удалось прочитать страницу';
    }
    try {
      return eval($check_code);
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  /**
   * @param $alt
   * @param $content
   *
   * @return mixed
   */
  public function trimAltFromContent($alt, $content){
    foreach ($alt as $image){
      $content = str_replace($image['alt'], '', $content);
    }
    return $content;
  }

  /**
   * @param $title
   *
   * @return bool|string
   */
  public function makeBodyHeaderRegexp($title){
    $searchForReplaceSpecial = [
      '.' => '\.',
      '$'=> '\$',
      ','=> "\,",
      '-'=> "\-",
      '/'=> "\/",
      '('=> "\(",
      ')'=> "\)",
      '?'=> "\?",
      '+'=> "\+",
      '*'=> "\*",
    ];
    $title = str_replace(array_keys($searchForReplaceSpecial), array_values($searchForReplaceSpecial), $title);
    $explodeByWhitespace = explode(' ', $title);
    if(empty($explodeByWhitespace)){
      return FALSE;
    }
    $regexp = implode('((<b>|<\/b>|<br>|<br \/>)*\s*|\”*|\“*|\"*|\,*|\;*|\.*)*?', $explodeByWhitespace);
    $regexp = '/'.$regexp.'/i';
    return $regexp;
  }

  public function makeSummary($text, $title, $imageAltArray){

    $text = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $text)));
    $title = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $title)));
    $title = str_replace("&", '&amp;', $title);
    $title = HTML::normalize($title);
    $title = preg_replace("/<p[^>]*>(\s|&nbsp;|(<b>\s*<\/b>)|(<strong>\s*<\/strong>))*<\/?p>/", '', $title);
    $text = HTML::normalize($text);
    $text = preg_replace("/<p[^>]*>(\s|&nbsp;|(<b>\s*<\/b>)|(<strong>\s*<\/strong>))*<\/?p>/", '', $text);
    $regexp = $this->makeBodyHeaderRegexp($title);
    $match = preg_match($regexp, $text, $matches, PREG_OFFSET_CAPTURE);
    if($match){
      $startPos = $matches[0][1];
      $strPos = (int) strlen($matches[0][0]) + $startPos;
      $headerString = substr($text, 0, $startPos);
      $bodyString = substr($text, $strPos);
      $headerString = preg_replace("/<p[^>]*>(\s|&nbsp;|(<b>\s*<\/b>))*<\/p>/", '', $headerString);

      $headerString = HTML::normalize($headerString);
      if(!empty($imageAltArray)){
        $headerString = $this->trimAltFromContent($imageAltArray, $headerString);
      }
      $bodyString = preg_replace("/<p[^>]*>(\s|&nbsp;|(<b>\s*<\/b>))*<\/p>/", '', $bodyString);
      $bodyString = HTML::normalize($bodyString);
      $filter = new \Zend\Filter\StripTags();
      $filter->setAttributesAllowed('none');
      $filter->setTagsAllowed(['p','br','strong','ul','li','bold','b','i','em']);
      $bodyString = $filter->filter($bodyString);
      $headerString = $filter->filter($headerString);
      $headerString = '<p>'.preg_replace("/^\s*(<br \/>)*\s*/", '', $headerString).'</p>';
      $bodyString = preg_replace("/^\s*(<br \/>)*\s*/", '', $bodyString);
      if($bodyString && $headerString){
        return ['body' => $bodyString,'head'=>$headerString];
      }
    }
    return FALSE;
  }

  /**
   * @param      $base_url
   * @param      $docYears
   * @param bool $senator
   *
   * @return bool
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   * @throws \Drupal\Core\Entity\EntityStorageException
   */
  public function extractContent($base_url, $docYears, $senator = FALSE): bool {
    $searchForReplace = [
      'Audio',
      'Print',
      'Clip',
      'October Press Releases',
      'January Press Releases',
      'February Press Releases',
      'March Press Releases',
      'April Press Releases',
      'May Press Releases',
      'June Press Releases',
      'July Press Releases',
      'August Press Releases',
      'September Press Releases',
      'November Press Releases',
      'December Press Releases',
      '|',
      'Press Releases',
      'Oklahoma State Senate Homepage'
    ];
    foreach ($docYears->find('a') as $key => $a) {
      $href = pq($a)->attr('href');
      if (empty($href)) {
        continue;
      }
      if ($href == '#top') {
        continue;
      }
      $notSeparated       = FALSE;
      $notSetContactField = FALSE;
      $href = parser_get_absolute_url($base_url, $href);
      if($href == 'http://www.oksenate.gov/news/press_releases/press_releases_2014/pr20141231a.htm'){
        $forTestingPurposes = 1;
      }
      if (strpos($href, 'news/press_releases/press_releases_') !== FALSE) {
        if(!$senator){
          $nodes              = \Drupal::entityTypeManager()
            ->getStorage('node')
            ->loadByProperties(['field_press_release_old_url' => $href]);
          if (is_array($nodes) && !empty($nodes)) {
            continue;
          }
        }
        $text    = pq($a)->text();
        $date    = str_replace($text, '', pq($a)->parent()->text());
        $content = $this->loadUrl($href);
        if (!$content) {
          $message = '404 page ' . $base_url . '<br>' . $href . '<br>' . "\r\n";
          file_put_contents('parse_errors_404.txt', $message, FILE_APPEND);
          \Drupal::logger('404_content_parser')->notice($message);
          continue;
        }
        $content                 = iconv('UTF-8', 'cp1252//IGNORE', $content);
        $searchForReplaceSpecial = [
          '&#148;'  => '"',
          '&#147;'  => '"',
          '&#146;'  => "'",
          '&#145;'  => "'",
          '&#60;'   => "<",
          '&#47;'   => "/",
          '&#34;'   => '"',
          '&#38;'   => '&',
          '&#62;'   => ">",
          '&#137;'  => "%",
          '&#139;'  => "<",
          '&#155;'  => ">",
          '&#132;'  => '"',
          '&#130;'  => "'",
          '&#160;'  => " ",
          '&#8242;' => "'",
          '&#8243;' => '"',
          '&#8226;' => '',
        ];
        $content                 = str_replace(array_keys($searchForReplaceSpecial), array_values($searchForReplaceSpecial), $content);
        $text                    = str_replace(array_keys($searchForReplaceSpecial), array_values($searchForReplaceSpecial), $text);
        $content                 = str_replace("&nbsp;", '', $content);
        /*              $content = preg_replace("#(<p[^>]*>|<b[^>]*>)(\s|&nbsp;|</?\s?br\s?/?>|</?\s?b\s?/?>|</?\s?p\s?/?>)*(</?p>|</?b>)#", '', $content);*/
        $content        = preg_replace("/<p>(&nbsp;|\s)*<\/p>/", '', $content);
        $docNews        = $this->getPhpQuery($content, $href);
        $returnLinks    = 'this table contains return links';
        $mainNavigation = 'this table contains the news navigation menu';
        $mainContent    = 'this table contains the main content of the page';
        $html           = 'empty';
        foreach ($docNews['table'] as $table) {
          if (pq($table)->attr('summary') == $returnLinks) {
            pq($table)->remove();
          }
          if (pq($table)->attr('summary') == $mainNavigation) {
            pq($table)->remove();
          }
        }
        $hasMainContent = FALSE;
        foreach ($docNews['table'] as $key => $table) {
          if (pq($table)->attr('summary') == $mainContent) {
            $hasMainContent = TRUE;
            $html           = [
              'value'  => str_replace($searchForReplace, '', strip_tags(pq($table)->html(), '<p><br><strong><ul><li><bold><b><i><em>')),
              'format' => 'full_html'
            ];
            $html['value']  = str_replace($searchForReplace, '', strip_tags($html['value'], '<p><br><strong><ul><li><bold><b><i><em>'));
            $html['value']  = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $html['value'])));
          }
        }
        if (!$hasMainContent) {
          $html          = [
            'value'  => str_replace($searchForReplace, '', strip_tags($docNews['body']->html(), '<p><br><strong><ul><li><bold><b><i><em>')),
            'format' => 'full_html'
          ];
          $html['value'] = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $html['value'])));
          $html['value'] = str_replace($searchForReplace, '', strip_tags($html['value'], '<p><br><strong><ul><li><bold><b><i><em>'));

        }
        // Remove hash
        //              $text = preg_replace(array_keys($searchForReplaceSpecial), array_values($searchForReplaceSpecial), $text);
        $text = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $text)));
        $text = preg_replace('~[^A-Za-z0-9?.\s+,\.\(\)\/\$\'\"\’\‘\”\“\:\;\-/!]~', '', $text);
        $date = preg_replace("/[^.0-9]/", '', $date);
        $date = ltrim(trim(str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date)))));
        if ($html == 'empty') {
          $message = 'Empty Body ' . '<br>' . $base_url . '<br>' . $href . '<br>' . "\r\n";
          file_put_contents('parse_errors_empty_body.txt', $message, FILE_APPEND);
          \Drupal::logger('not_parsed')->notice($message);
          continue;
        }
        else {
          $contactInfo = [];
          $regexp      = "/(For more information, contact:|For more information,contact|For more information contact:|For more information|For additional information contact:|For additional information, contact:|For additional information,contact:)(?s)(.*$)/";
          $all         = preg_match($regexp, $html['value'], $matches);
          if (!empty($matches)) {
            foreach ($matches as $matchKey => $match) {
              if ($matchKey === 0 || $matchKey === 1) {
                continue;
              }
              else {
                $searchForReplaceContact = [
                  'contact:',
                  'contact',
                  'October',
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'November',
                  'December',
                  '|',
                ];
                $contactInfo[]           = ['value' => trim(str_replace($searchForReplaceContact, '', strip_tags($match)))];
              }
            }
          }
          else {
            $notSetContactField = TRUE;
          }
          $html['value'] = preg_replace($regexp, '', $html['value']);
          $mini = _content_parser_retrieve_images($docNews, 'img', 'src', $href);
          /*                $html['value'] = preg_replace('/(<br *\/?>\s*)+/i', '<br>', $html['value']);*/
          if ($this->makeSummary($html['value'], $text, $mini)) {
            $bodyHeader    = [
              'value'  => $this->makeSummary($html['value'], $text, $mini)['head'],
              'format' => 'full_html'
            ];
            $html['value'] = $this->makeSummary($html['value'], $text, $mini)['body'];
          }
          else {
            $notSeparated = TRUE;
          }
        }
        if (empty($date)) {
          $date = pq($a)->parent()->parent()->text();
          $date = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date)));
          $date = trim(str_replace($text, '', $date));
        }
        if(!$senator){
          $entity = _entity_create($this->entity_type, $this->bundle);
        }
        else{
          if(strpos($base_url, '_bio.html') !== FALSE){
            ///get senator id
            $nodes = \Drupal::entityTypeManager()
              ->getStorage('node')
              ->loadByProperties(['field_temp_old_url' => $base_url]);
            $senator = $nodes[key($nodes)]->id();
            $news = \Drupal::entityTypeManager()
              ->getStorage('node')
              ->loadByProperties(['title' => $text]);
            if(is_array($news) && !empty($news)){
              $entity = $news[key($news)];
              foreach ($entity->field_senator as $existSenator){
                if($existSenator->target_id == $senator){
                  continue 2;
                }
              }
              $entity->field_senator[] = ['target_id' => $senator];
              $entity->save();
              continue;
            }
          }
          $entity = _entity_create($this->entity_type, $this->bundle);
        }
        try {
          $entity->set('field_release_img', $mini);

          $entity->set('field_press_release_old_url', $href);
          $entity->set('field_press_release_is_archived', 1);
          $entity->set('field_press_release_migration_nu', 1);
          $entity->set('title', $text);
          $entity->set('body', $html);
          $entity->set('field_press_release_header', isset($bodyHeader) ? $bodyHeader : '');
          $entity->set('field_press_release_contact_info', $contactInfo);
          $entity->set('field_senator', isset($senator) ? $senator : []);
          $date       = preg_replace('/[\x00-\x1F\x7F-\xA0\xAD]/u', '', $date);
          $dateFormat = \DateTime::createFromFormat('m.d.y', $date);
          $entity->set('field_date', $dateFormat->format('Y-m-d\TH:i:s'));
          $saved = $entity->save();
          if ($saved) {
            $urlEntityObject = $entity->url();
            $scheme          = \Drupal::request()->getSchemeAndHttpHost();
            $message         = "<a href='$scheme$urlEntityObject'>-[$scheme$urlEntityObject]-</a><br>";
            if (isset($notSeparated) && $notSeparated) {
              $message .= ' - Cant separate header and body ' . $base_url . '<br>' . $href . '<br>' . "\r\n";
              file_put_contents('parse_errors_to_edit.html', $message, FILE_APPEND);
              \Drupal::logger('not_parsed_body')->notice($message);
            }
            if (isset($notSetContactField) && $notSetContactField) {
              $message .= ' - Cant identify contact data ' . $base_url . '<br>' . $href . '<br>' . "\r\n";
              file_put_contents('parse_errors_to_edit.html', $message, FILE_APPEND);
              \Drupal::logger('not_parsed_contact_data')->notice($message);
            }
          }
        }
        catch (\Error $exception) {
          $message = utf8_encode('Node not saved <br>' . $base_url . '<br>' . $href . '<br>' . "\r\n");
          file_put_contents('parse_errors_sys.html', $message, FILE_APPEND);
          \Drupal::logger('not_parsed')->notice($message);
          continue;
        }
        catch (\Exception $exception) {
          $message = utf8_encode('Node not saved <br>' . $base_url . '<br>' . $href . '<br>' . "\r\n");
          file_put_contents('parse_errors_sys.html', $message, FILE_APPEND);
          \Drupal::logger('not_parsed')->notice($message);
          continue;
        }
      }

    }
    return TRUE;
  }

}
