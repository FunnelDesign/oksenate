<?php

namespace Drupal\content_parser\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;
use Drupal\content_parser\Results;
use Drupal\node\Entity\Node;
use Drupal\paragraphs\Entity\Paragraph;

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
    $removeTable = 'this table contains return links';
    $searchForReplace = [
      'Audio',
      'Print',
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
      'Press Releases'
    ];

    //    $remote_code = $this->getCode('remote_id');
    //
    //    if ($remote_code) {
    //      $remote_id = $this->eval($doc, $remote_code, $base_url);
    //    }
    //
    //    if ($remote_id) {
    //      $entity = $this->getEntityByRemoteId($remote_id);
    //    }
    //
    //    if ($entity && $this->getSetting('no_update')) {
    //      return $this->results->getNoUpdateCode();
    //    }
    //
    //    if (!$entity) {
    //      $entity = _entity_create($this->entity_type, $this->bundle);
    //    }
    //
    //    if ($this->getSetting('save_url')) {
    //      $entity->set('path', [
    //        'alias' => $this->toAbsolutePath($base_url)
    //      ]);
    //    }

    foreach ($doc->find('a') as $key=>$a) {
      $href = pq($a)->attr('href');
      $href = parser_get_absolute_url($base_url, $href);
      $href = preg_replace('/#.*$/', '', $href);
      if(strpos($href, '/districts/dist') !== false){
        if(strpos($href, 'population.html') !== false){
          continue;
        }
        $content = $this->loadUrl($href);
        $docYears = $this->getPhpQuery($content, $href);
        foreach ($docYears->find('a') as $key=>$a) {
          $href = pq($a)->attr('href');
          $href = parser_get_absolute_url($base_url, $href);

          if (strpos($href, 'news/press_releases/press_releases_') !== FALSE) {
            $text = pq($a)->text();
            //          if($href == 'http://www.oksenate.gov/news/press_releases/press_releases_2015/pr20150729a.htm'){
            //            $text = 'Oklahoma Legislative Black Caucus to focus on education, public safety concerns';
            //          }
            //          if($href == 'http://www.oksenate.gov/news/press_releases/press_releases_2017/pr20170119b.htm'){
            //            $text = 'Oklahoma Legislative Black Caucus to focus on education, public safety concerns';
            //          }

            $date = str_replace($text, '', pq($a)->parent()->text());
            $content = $this->loadUrl($href);
            $docNews = $this->getPhpQuery($content, $href);
            $returnLinks = 'this table contains return links';
            $mainContent = 'this table contains the main content of the page';
            $html = 'empty';
            foreach ($docNews['table'] as $table){
              if(pq($table)->attr('summary') == $returnLinks){
                pq($table)->remove();
              }
            }
            foreach ($docNews['table'] as $key=>$table){
              if(pq($table)->attr('summary') == $mainContent){
                $html = ['value'=>str_replace($searchForReplace, '', strip_tags(pq($table)->html(), '<br>')), 'format'=>'full_html'];
                $html['value'] = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $html['value'])));
              }
            }
            // Remove hash
            $text = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $text)));
            $date = preg_replace("/[^.0-9]/", '', $date);
            //          $date = ltrim(trim(str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date)))));
            if($html == 'empty'){
              $message = 'Empty Body'.'<br>'.$base_url . '<br>' . $href . '<br>';
              \Drupal::logger('not_parsed')->notice($message);
              continue;
            }
            else{
              $contactInfo = [];
              $regexp = "/(For more information, contact:|For more information,contact|For more information:)(?s)(.*$)/";
              $all = preg_match($regexp, $html['value'], $matches);
              if(!empty($matches)){
                foreach ($matches as $matchKey=>$match){
                  if($matchKey === 0 || $matchKey === 1){
                    continue;
                  }
                  else{
                    $contactInfo[] = ['value' => trim(strip_tags($match))];
                  }
                }
              }else{
                $message = 'Cant identify contact data'.$base_url . '<br>' . $href . '<br>';
                \Drupal::logger('not_parsed_contact_data')->notice($message);
              }
              $html['value'] = preg_replace($regexp, '', $html['value']);
              $html['value'] = preg_replace('#(<br */?>\s*)+#i', '<br>', $html['value']);
              if($this->makeSummary($html['value'], $text)){
                $bodyHeader = ['value'=>$this->makeSummary($html['value'], $text)['head'], 'format'=>'full_html'];
                $html['value'] = $this->makeSummary($html['value'], $text)['body'];
              }
              else{
                $message = 'Cant separate header and body'.$base_url . '<br>' . $href . '<br>';
                \Drupal::logger('not_parsed_body')->notice($message);
              }
            }
            if(empty($date)){
              $date = pq($a)->parent()->parent()->text();
              $date = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date)));
              $date = trim(str_replace($text, '', $date));
            }
            if(strpos($base_url, '_bio.html') !== FALSE){

              //        $news = \Drupal::entityTypeManager()
              //          ->getStorage('node')
              //          ->loadByProperties(['field_press_release_old_url' => 'test.html']);

              ///get senator id
              $nodes = \Drupal::entityTypeManager()
                ->getStorage('node')
                ->loadByProperties(['field_temp_old_url' => $base_url]);
              $senator = $nodes[key($nodes)]->id();
              //        foreach ( $nodes as $node ) {
              //          $senator = $node->id();
              //        }
              $news = \Drupal::entityTypeManager()
                ->getStorage('node')
                ->loadByProperties(['field_press_release_old_url' => $href]);
              if(is_array($news) && !empty($news)){
                $entity = $news[key($news)];
                $entity->field_senator[] = ['target_id' => $senator];
                $entity->save();
                continue;
              }
              else{
                $entity = _entity_create($this->entity_type, $this->bundle);
              }
            }
            $mini = parser_download_images($docNews, $href);

            $entity->set('field_release_img', $mini);

            $entity->set('field_press_release_old_url', $href);
            $entity->set('title', $text);
            $entity->set('body', $html);
            $entity->set('field_press_release_header', isset($bodyHeader)?$bodyHeader:'');
            $entity->set('field_press_release_contact_info', $contactInfo);
            $entity->set('field_senator', isset($senator)?$senator:[]);
            try {
              $dateFormat = \DateTime::createFromFormat('m.d.y', $date);
              $entity->set('field_date', $dateFormat->format('Y-m-d\TH:i:s'));
              $entity->save();
            }catch (\Error $exception){
              $message = $exception->getMessage().$base_url . '<br>' . $href . '<br>';
              \Drupal::logger('not_parsed')->notice($message);
              continue;
            }catch (\Exception $exception){
              $message = $exception->getMessage().$base_url . '<br>' . $href . '<br>';
              \Drupal::logger('not_parsed')->notice($message);
              continue;
            }
          }
        }
        //      $text = pq($a)->text();
        //      $date = str_replace($text, '', pq($a)->parent()->text());
        //      $content = $this->loadUrl($href);
        //      $docNews = $this->getPhpQuery($content, $href);
        //      $mainContent = 'this table contains the main content of the page';
        //      $html = 'empty';
        //
        //      foreach ($docNews['table'] as $table){
        //        if(pq($table)->attr('summary') == $mainContent){
        //          $html = ['value'=>strip_tags(pq($table)->html(), '<p><br>'), 'format'=>'full_html'];
        //        }
        //      }
        //      // Remove hash
        //      $text = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $text)));
        //      $date = trim(str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date))));
        //      if(empty($date)){
        //        $date = pq($a)->parent()->parent()->text();
        //        $date = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date)));
        //        $date = trim(str_replace($text, '', $date));
        //      }
        //      if(strpos($base_url, '_bio.html') !== FALSE){
        //
        ////        $news = \Drupal::entityTypeManager()
        ////          ->getStorage('node')
        ////          ->loadByProperties(['field_press_release_old_url' => 'test.html']);
        //
        //        ///get senator id
        //        $nodes = \Drupal::entityTypeManager()
        //          ->getStorage('node')
        //          ->loadByProperties(['field_temp_old_url' => $base_url]);
        //        $senator = $nodes[key($nodes)]->id();
        ////        foreach ( $nodes as $node ) {
        ////          $senator = $node->id();
        ////        }
        //        $news = \Drupal::entityTypeManager()
        //          ->getStorage('node')
        //          ->loadByProperties(['field_press_release_old_url' => $href]);
        //        if(is_array($news) && !empty($news)){
        //          $entity = $news[key($news)];
        //          $entity->field_senator[] = ['target_id' => $senator];
        //          $entity->save();
        //          continue;
        //        }
        //        else{
        //          $entity = _entity_create($this->entity_type, $this->bundle);
        //        }
        //      }
        //      $mini = parser_download_images($docNews, $href);
        //
        //      $entity->set('field_release_img', $mini);
        //
        //      $entity->set('field_press_release_old_url', $href);
        //      $entity->set('title', $text);
        //      $entity->set('body', $html);
        //      $entity->set('field_senator', $senator?:1);
        //      $dateFormat = \DateTime::createFromFormat('m.d.y', $date);
        //      $entity->set('field_date', $dateFormat->format('Y-m-d\TH:i:s'));
        //      $entity->save();
      }
      if (strpos($href, 'news/press_releases/press_releases_') !== FALSE) {
        $text = pq($a)->text();
        $date = str_replace($text, '', pq($a)->parent()->text());
        $content = $this->loadUrl($href);
        $docNews = $this->getPhpQuery($content, $href);
        $returnLinks = 'this table contains return links';
        $mainContent = 'this table contains the main content of the page';
        $html = 'empty';

        foreach ($docNews['table'] as $table){
          if(pq($table)->attr('summary') == $returnLinks){
            pq($table)->remove();
          }
        }

        foreach ($docNews['table'] as $table){
          if(pq($table)->attr('summary') == $mainContent){
            $html = ['value'=>str_replace($searchForReplace, '', strip_tags(pq($table)->html(), '<p><br>')), 'format'=>'full_html'];
          }
        }
        if($html == 'empty'){
          $message = 'Empty Body'.'<br>'.$base_url . '<br>' . $href . '<br>';
          \Drupal::logger('not_parsed')->notice($message);
          continue;
        }
        else{
          $contactInfo = [];
          $regexp = "/(For more information, contact:|For more information,contact|For more information:)(?s)(.*$)/";
          $all = preg_match($regexp, $html['value'], $matches);
          if(!empty($matches)){
            foreach ($matches as $matchKey=>$match){
              if($matchKey === 0 || $matchKey === 1){
                continue;
              }
              else{
                $contactInfo[] = ['value' => trim(strip_tags($match))];
              }
            }
          }else{
            $message = 'Cant identify contact data'.$base_url . '<br>' . $href . '<br>';
            \Drupal::logger('not_parsed_contact_data')->notice($message);
          }
          $html['value'] = preg_replace($regexp, '', $html['value']);
          if($this->makeSummary($html['value'], $text)){
            $bodyHeader = ['value'=>$this->makeSummary($html['value'], $text)['head'], 'format'=>'full_html'];
            $html['value'] = $this->makeSummary($html['value'], $text)['body'];
          }
          else{
            $message = 'Cant separate header and body'.$base_url . '<br>' . $href . '<br>';
            \Drupal::logger('not_parsed_body')->notice($message);
          }
        }
        // Remove hash
        $text = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $text)));
        $date = preg_replace("/[^.0-9]/", '', $date);
        if(empty($date)){
          $date = pq($a)->parent()->parent()->text();
          $date = str_replace("\r\n", NULL, trim(preg_replace('/\s{2,}/', ' ', $date)));
          $date = trim(str_replace($text, '', $date));
        }
        if(strpos($base_url, '_bio.html') !== FALSE){

          //        $news = \Drupal::entityTypeManager()
          //          ->getStorage('node')
          //          ->loadByProperties(['field_press_release_old_url' => 'test.html']);

          ///get senator id
          $nodes = \Drupal::entityTypeManager()
            ->getStorage('node')
            ->loadByProperties(['field_temp_old_url' => $base_url]);
          $senator = $nodes[key($nodes)]->id();
          //        foreach ( $nodes as $node ) {
          //          $senator = $node->id();
          //        }
          $news = \Drupal::entityTypeManager()
            ->getStorage('node')
            ->loadByProperties(['field_press_release_old_url' => $href]);
          if(is_array($news) && !empty($news)){
            $entity = $news[key($news)];
            $entity->field_senator[] = ['target_id' => $senator];
            $entity->save();
            continue;
          }
          else{
            $entity = _entity_create($this->entity_type, $this->bundle);
          }
        }
        $mini = parser_download_images($docNews, $href);
        try {
          $entity->set('field_release_img', $mini);

          $entity->set('field_press_release_old_url', $href);
          $entity->set('title', $text);
          $entity->set('body', $html);
          $entity->set('field_press_release_contact_info', $contactInfo);
          $entity->set('field_press_release_header', isset($bodyHeader)?$bodyHeader:'');
          $entity->set('field_senator', isset($senator) ? $senator : []);
          $dateFormat = \DateTime::createFromFormat('m.d.y', $date);
          $entity->set('field_date', $dateFormat->format('Y-m-d\TH:i:s'));
          $entity->save();
        }catch (\Error $exception){
          $message = $exception->getMessage().$base_url . '<br>' . $href . '<br>';
          \Drupal::logger('not_parsed')->notice($message);
          continue;
        }catch (\Exception $exception){
          $message = $exception->getMessage().$base_url . '<br>' . $href . '<br>';
          \Drupal::logger('not_parsed')->notice($message);
          continue;
        }
      }
    }
    return true;

    //    $mini = parser_download_images($doc, $base_url);
    //
    //    $entity->set('field_senator_photo', $mini);


    foreach ($this->getCodes() as $field_name => $field) {
      $php_code = $this->getCode($field_name);

      if (!$php_code || $field_name == 'remote_id') {
        continue;
      }

      $result = $this->evalEntity(
        $doc,
        $entity,
        $php_code,
        $base_url
      );

      $value = [];
      //        if($field_name == 'field_senator_committee_taxonomy') {
      //
      //          foreach ($result as $li){
      //            $string = trim(strip_tags($li->textContent));
      //            if(strpos($string, '-')){
      //              $string = stristr($string, '-', TRUE);
      //            }
      //            $string = str_replace('Appropriations Subcommittee on ', '', $string);
      //            $string = str_replace('&', 'and', $string);
      //            $term = \Drupal::entityTypeManager()
      //              ->getStorage('taxonomy_term')
      //              ->loadByProperties(['name' => $string]);
      //            if(!empty($term))
      //              $value[] = $term[key($term)]->id();
      //            else{}
      //          }
      //
      //        }
      //      if($field_name == 'field_senator_district_taxonomy') {
      //
      //          $term = \Drupal::entityTypeManager()
      //            ->getStorage('taxonomy_term')
      //            ->loadByProperties(['name' => $result]);
      //          if(!empty($term))
      //            $value[] = $term[key($term)]->id();
      //          else{}
      //          $result = null;
      //        }
      //      if($field_name == 'field_senator_county_taxonomy') {
      //        foreach ($result as $li){
      //          $string = trim(strip_tags($li->textContent));
      //          $term = \Drupal::entityTypeManager()
      //            ->getStorage('taxonomy_term')
      //            ->loadByProperties(['name' => $string]);
      //          if(!empty($term))
      //            $value[] = $term[key($term)]->id();
      //          else{}
      //        }
      //      }
      //      if($field_name == 'field_senator_index_zip_taxonomy') {
      //        foreach ($result as $li){
      //          $string = trim(strip_tags($li->textContent));
      //          $term = \Drupal::entityTypeManager()
      //            ->getStorage('taxonomy_term')
      //            ->loadByProperties(['name' => $string]);
      //          if(!empty($term))
      //            $value[] = $term[key($term)]->id();
      //          else{}
      //        }
      //      }
      //
      //      if($field_name == 'field_senator_occupation_txt') {
      //        $mini = explode('<br>', $result);
      //        foreach ($mini as $string) {
      //          $string = trim(strip_tags($string));
      //          if (!$string) {
      //            continue;
      //          }
      //          if(strpos($string, 'Occupation') !== FALSE){
      //            $pos = strpos($string, ':');
      //            $value = trim(substr($string, $pos+1));
      //          }
      //        }
      //        $result = NULL;
      //      }
      //
      //      if($field_name == 'field_senator_education_txt') {
      //        $mini = explode('<br>', $result);
      //        foreach ($mini as $string) {
      //          $string = trim(strip_tags($string));
      //          if (!$string) {
      //            continue;
      //          }
      //          if(strpos($string, 'Education') !== FALSE){
      //            $pos = strpos($string, ':');
      //            $value = trim(substr($string, $pos+1));
      //          }
      //        }
      //        $result = NULL;
      //      }
      //
      //      if($field_name == 'field_senator_hometown_txt') {
      //        $mini = explode('<br>', $result);
      //        foreach ($mini as $string) {
      //          $string = trim(strip_tags($string));
      //          if (!$string) {
      //            continue;
      //          }
      //          if(strpos($string, 'Hometown') !== FALSE){
      //            $pos = strpos($string, ':');
      //            $value = trim(substr($string, $pos+1));
      //
      //          }
      //          $result = NULL;
      //        }
      //      }
      //
      //      if($field_name == 'field_senator_leg_experience_txt') {
      //        $mini = explode('<br>', $result);
      //        foreach ($mini as $string) {
      //          $string = trim(strip_tags($string));
      //          if (!$string) {
      //            continue;
      //          }
      //          if(strpos($string, 'Legislative Experience') !== FALSE){
      //            $pos = strpos($string, ':');
      //            $value = trim(substr($string, $pos+1));
      //          }
      //        }
      //        $result = NULL;
      //      }
      //      if($field_name == 'title') {
      //        $result = str_replace('Senator', '', $result);
      //      }
      //
      //      if($field_name == 'field_senator_social_links_par'){
      //        $arr = [
      //          'type' => 'senator_socials',   // paragraph type machine name
      //          'field_senator_social_fb_link' => [   // paragraph's field machine name
      //            'uri' => $result[0],                  // body field value// body text format
      //          ],
      //          'field_senator_social_inst_link' => [   // paragraph's field machine name
      //            'uri' => $result[0],                  // body field value// body text format
      //          ],
      //          'field_senator_social_tw_link' => [   // paragraph's field machine name
      //            'uri' => $result[0],                  // body field value// body text format
      //          ],
      //        ];
      //
      //        $paragraph = Paragraph::create($arr);
      //
      //        $paragraph->save();
      //
      //        $entity->set('field_senator_social_links_par',
      //        [
      //          'target_id' => $paragraph->id(),
      //          'target_revision_id' => $paragraph->getRevisionId(),
      //        ]);
      //
      //        continue;
      //      }

      if ($field['isMulti'] && is_array($result)) {
        foreach ($result as $data) {
          if ($field['reference_create'] && $type = $field['reference']) {
            $value[] = [
              'target_id' => _reference_create($type, $data),
            ];
          } else {
            $value[] = $data;
          }
        }
      } elseif(!$field['isMulti'] && $result) {
        if ($field['reference_create'] && $type = $field['reference']) {
          $value = _reference_create($type, $result);
        } else {
          $value = $result;
        }
      }

      if ($value && $field_name !== 'field_bio_info') {
        $entity->set($field_name, $value);
      }
    }

    //    \Drupal::moduleHandler()
    //        ->invokeAll('content_parser_prepare_entity_' . $this->id, [$entity]);
    //
    //    if ($prepare_code = $this->getSetting('prepare_code')) {
    //       $entity = $this->evalEntity($doc, $entity, $prepare_code, $base_url);
    //     }
    //
    //    $is_new = $entity->isNew();
    //
    //    try {
    //      $entity->save();
    //    } catch (\Exception $e) {
    //      return $this->results->getErrorCode();
    //    }
    //
    //    if ($is_new) {
    //      $this->insertRemote($this->entity_type, $entity->id(), $remote_id, $base_url);
    //    }
    //
    //    return !$is_new ? $this->results->getUpdateCode() : $this->results->getCreateCode();
  }

  /**
   * {@inheritdoc}
   */
  public function runTestUrl($base_url, $check_code) {
    $html = $this->loadUrl($base_url);

    if (!$html) {
      return 'Не удалось загрузить страницу';
    }

    $doc = $this->getPhpQuery($html, $base_url);

    if (!$doc) {
      return 'Не удалось прочитать страницу';
    }
    //    http://www.oksenate.gov/Senators/biographies/allen_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/bergstrom_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/bice_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/boggs_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/boren_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/brooks_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/bullard_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/coleman_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/dahm_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/daniels_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/david_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/dossett_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/dugger_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/floyd_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/hall_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/haste_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/hicks_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/howard_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/ikley-freeman_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/jech_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/kidd_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/kirt_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/leewright_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/matthews_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/mccortney_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/montgomery_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/murdock_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/newhouse_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/paxton_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/pederson_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/pemberton_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/pugh_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/quinn_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/rader_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/rosino_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/scott_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/sharp_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/shaw_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/silk_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/simpson_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/smalley_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/standridge_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/stanislawski_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/stanley_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/thompson_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/treat_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/weaver_bio.aspx
    //    http://www.oksenate.gov/Senators/biographies/young_bio.aspx
    //    foreach($doc['img'] as $img){
    //      if(pq($img)->attr('src') == '../bandblue.gif'){
    //        return true;
    //      }
    //    }
    //    return false;
    //    $doc = parser_download_images($doc, $base_url);

    try {
      return eval($check_code);
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  public function makeSummary($text, $title){
    $len = (int) strlen($title);
    $strpos = (int) strpos($text, $title);
    $headerString = substr($text, 0, $strpos);
    $bodyString = substr($text, $strpos+$len);
    if($bodyString && $headerString){
      return ['body' => $bodyString,'head'=>$headerString];
    }else{
      return FALSE;
    }

//    $regexp = "/($title)(?s)(.*$)/";
//    $all = preg_match($regexp, $text, $matches);
//    if(!empty($matches)){
//      return $matches[2];
//      foreach ($matches as $key=>$match){
//        if($key === 0 || $key === 1){
//          continue;
//        }
//        if($key === 2){
////          $summary = preg_match('/^(.*)\./', $match, $matches);
//          $summary = preg_match('/^[^.]+./', $match, $matchSummary);
//          return $matchSummary[0];
//        }
//      }
//    }
//    return FALSE;
  }

}
