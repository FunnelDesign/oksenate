<!DOCTYPE html>
<html>
<?php $title = 'page-seach'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page path-search">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">


      <div id="block-senate-content">


        <form class="search-form" data-drupal-selector="search-form" action="/search/node?keys=senator" method="post" id="search-form" accept-charset="UTF-8" data-drupal-form-fields="edit-keys,edit-submit,edit-or,edit-phrase,edit-negative,edit-type-agencies-doc,edit-type-article,edit-type-committee,edit-type-committee-events,edit-type-homepage,edit-type-interim-studies,edit-type-page,edit-type-press-release,edit-type-senator,edit-type-subcommittee,edit-type-test-type,edit-type-webform,edit-language-en,edit-language-und,edit-language-zxx,edit-submit--2">
          <div class="container-inline js-form-wrapper form-wrapper" data-drupal-selector="edit-basic" id="edit-basic"><div class="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys">
              <label for="edit-keys">Enter your keywords</label>
              <input data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="senator" size="30" maxlength="255" class="form-search">

            </div>
            <input data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Search" class="button js-form-submit form-submit">
          </div>
          <a href="/search/node/help" class="search-help-link" data-drupal-selector="edit-help-link" id="edit-help-link">Search help</a><details class="search-advanced js-form-wrapper form-wrapper" data-drupal-selector="edit-advanced" id="edit-advanced">    <summary role="button" aria-controls="edit-advanced" aria-expanded="false" aria-pressed="false">Advanced search</summary><div class="details-wrapper">
              <fieldset data-drupal-selector="edit-keywords-fieldset" id="edit-keywords-fieldset" class="js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                  <span class="fieldset-legend">Keywords</span>
                </legend>
                <div class="fieldset-wrapper">
                  <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-or form-item-or">
                    <label for="edit-or">Containing any of the words</label>
                    <input data-drupal-selector="edit-or" type="text" id="edit-or" name="or" value="" size="30" maxlength="255" class="form-text">

                  </div>
                  <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-phrase form-item-phrase">
                    <label for="edit-phrase">Containing the phrase</label>
                    <input data-drupal-selector="edit-phrase" type="text" id="edit-phrase" name="phrase" value="" size="30" maxlength="255" class="form-text">

                  </div>
                  <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-negative form-item-negative">
                    <label for="edit-negative">Containing none of the words</label>
                    <input data-drupal-selector="edit-negative" type="text" id="edit-negative" name="negative" value="" size="30" maxlength="255" class="form-text">

                  </div>

                </div>
              </fieldset>
              <div class="criterion"></div><fieldset data-drupal-selector="edit-types-fieldset" id="edit-types-fieldset" class="js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                  <span class="fieldset-legend">Types</span>
                </legend>
                <div class="fieldset-wrapper">
                  <div class="criterion"><fieldset data-drupal-selector="edit-type" id="edit-type--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                      <legend>
                        <span class="fieldset-legend">Only of the type(s)</span>
                      </legend>
                      <div class="fieldset-wrapper">
                        <div id="edit-type" class="form-checkboxes"><div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-agencies-doc form-item-type-agencies-doc">
                            <input data-drupal-selector="edit-type-agencies-doc" type="checkbox" id="edit-type-agencies-doc" name="type[agencies_doc]" value="agencies_doc" class="form-checkbox">

                            <label for="edit-type-agencies-doc" class="option">Agencies Documents</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-article form-item-type-article">
                            <input data-drupal-selector="edit-type-article" type="checkbox" id="edit-type-article" name="type[article]" value="article" class="form-checkbox">

                            <label for="edit-type-article" class="option">Article</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-committee form-item-type-committee">
                            <input data-drupal-selector="edit-type-committee" type="checkbox" id="edit-type-committee" name="type[committee]" value="committee" class="form-checkbox">

                            <label for="edit-type-committee" class="option">Committee</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-committee-events form-item-type-committee-events">
                            <input data-drupal-selector="edit-type-committee-events" type="checkbox" id="edit-type-committee-events" name="type[committee_events]" value="committee_events" class="form-checkbox">

                            <label for="edit-type-committee-events" class="option">Committee Events</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-homepage form-item-type-homepage">
                            <input data-drupal-selector="edit-type-homepage" type="checkbox" id="edit-type-homepage" name="type[homepage]" value="homepage" class="form-checkbox">

                            <label for="edit-type-homepage" class="option">Homepage</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-interim-studies form-item-type-interim-studies">
                            <input data-drupal-selector="edit-type-interim-studies" type="checkbox" id="edit-type-interim-studies" name="type[interim_studies]" value="interim_studies" class="form-checkbox">

                            <label for="edit-type-interim-studies" class="option">Interim Studies</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-page form-item-type-page">
                            <input data-drupal-selector="edit-type-page" type="checkbox" id="edit-type-page" name="type[page]" value="page" class="form-checkbox">

                            <label for="edit-type-page" class="option">Basic page</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-press-release form-item-type-press-release">
                            <input data-drupal-selector="edit-type-press-release" type="checkbox" id="edit-type-press-release" name="type[press_release]" value="press_release" class="form-checkbox">

                            <label for="edit-type-press-release" class="option">Press release</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-senator form-item-type-senator">
                            <input data-drupal-selector="edit-type-senator" type="checkbox" id="edit-type-senator" name="type[senator]" value="senator" class="form-checkbox">

                            <label for="edit-type-senator" class="option">Senator</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-subcommittee form-item-type-subcommittee">
                            <input data-drupal-selector="edit-type-subcommittee" type="checkbox" id="edit-type-subcommittee" name="type[subcommittee]" value="subcommittee" class="form-checkbox">

                            <label for="edit-type-subcommittee" class="option">Subcommittee</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-test-type form-item-type-test-type">
                            <input data-drupal-selector="edit-type-test-type" type="checkbox" id="edit-type-test-type" name="type[test_type]" value="test_type" class="form-checkbox">

                            <label for="edit-type-test-type" class="option">Test Type</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-type-webform form-item-type-webform">
                            <input data-drupal-selector="edit-type-webform" type="checkbox" id="edit-type-webform" name="type[webform]" value="webform" class="form-checkbox">

                            <label for="edit-type-webform" class="option">Webform</label>
                          </div>
                        </div>

                      </div>
                    </fieldset>
                  </div>
                </div>
              </fieldset>
              <fieldset data-drupal-selector="edit-lang-fieldset" id="edit-lang-fieldset" class="js-form-item form-item js-form-wrapper form-wrapper">
                <legend>
                  <span class="fieldset-legend">Languages</span>
                </legend>
                <div class="fieldset-wrapper">
                  <div class="criterion"><fieldset data-drupal-selector="edit-language" id="edit-language--wrapper" class="fieldgroup form-composite js-form-item form-item js-form-wrapper form-wrapper">
                      <legend>
                        <span class="fieldset-legend">Languages</span>
                      </legend>
                      <div class="fieldset-wrapper">
                        <div id="edit-language" class="form-checkboxes"><div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-language-en form-item-language-en">
                            <input data-drupal-selector="edit-language-en" type="checkbox" id="edit-language-en" name="language[en]" value="en" class="form-checkbox">

                            <label for="edit-language-en" class="option">English</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-language-und form-item-language-und">
                            <input data-drupal-selector="edit-language-und" type="checkbox" id="edit-language-und" name="language[und]" value="und" class="form-checkbox">

                            <label for="edit-language-und" class="option">- Not specified -</label>
                          </div>
                          <div class="js-form-item form-item js-form-type-checkbox form-type-checkbox js-form-item-language-zxx form-item-language-zxx">
                            <input data-drupal-selector="edit-language-zxx" type="checkbox" id="edit-language-zxx" name="language[zxx]" value="zxx" class="form-checkbox">

                            <label for="edit-language-zxx" class="option">- Not applicable -</label>
                          </div>
                        </div>

                      </div>
                    </fieldset>
                  </div>
                </div>
              </fieldset>
              <div class="action"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit--2" name="op" value="Advanced search" class="button js-form-submit form-submit">
              </div></div>
          </details>
          <input autocomplete="off" data-drupal-selector="form-tb1w2632kqwtehoeyw9xeln3uwnakic2m72z2lzxrn0" type="hidden" name="form_build_id" value="form-Tb1w2632kQWtehoeyW9xEln3UWNAKic2m72z2LzxRn0">
          <input data-drupal-selector="edit-search-form-form-token" type="hidden" name="form_token" value="EnSq2eYXYyHJJbdfMA3EUthvFsmL5byfmmMn5D3d4L8">
          <input data-drupal-selector="edit-search-form" type="hidden" name="form_id" value="search_form">

        </form>
        <h2>Search results</h2><div class="item-list"><ol class="search-results node_search-results"><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1300">Find My Senator</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">Find My <strong>Senator</strong>

                  Find My <strong>Senator</strong>
                  Page not complete



                  …</p>
                <p class="search-result__info"></p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1283">Individual Senator Pages</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">Individual <strong>Senator</strong> Pages

                  Individual <strong>Senator</strong> Pages
                  Page not complete




                  …</p>
                <p class="search-result__info"></p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1290">How Do I Contact my Senator</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">How Do I Contact my <strong>Senator</strong>

                  How Do I Contact my <strong>Senator</strong>
                  Page not complete




                  …</p>
                <p class="search-result__info"></p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1278">Homepage</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">…


                  find your <strong>senator</strong> here


                  We’ve made it easy to contact your <strong>senator</strong>.



                  Find My <strong>Senator</strong>



                  If you know the bill …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/02/2019 - 15:06</p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1894">Darrell Weaver</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">Darrell Weaver

                  Elected in 2018, state <strong>Senator</strong> Darrell Weaver of Moore represents Senate District 24. He is the only <strong>Senator</strong> to serve as the former Director of a state agency. …  and retired after serving the Bureau for 28 years. In 2014, <strong>Senator</strong> Weaver was inducted into the Oklahoma Law …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/03/2019 - 14:12</p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1849"> Kay Floyd</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">…  a minor degree in philosophy. After graduating from OSU, <strong>Senator</strong> Floyd attended law school at the University of …  Doctor degree.

                  After two years in private practice, <strong>Senator</strong> Floyd became an Assistant Attorney General for the …  working in both the civil and criminal divisions. In 1987, <strong>Senator</strong> Floyd accepted the position of Deputy Executive …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/03/2019 - 07:47</p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1891">Ron Sharp</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">Ron Sharp

                  <strong>Senator</strong> Ron Sharp proudly represents Senate District 17. <strong>Senator</strong> Sharp is now in his sixth year in office.
                  He is currently Vice Chair of the Senate Education Committee.
                  <strong>Senator</strong> Sharp also serves on the Transportation, …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/04/2019 - 06:26</p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1841"> Mary B. Boren</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">Mary B. Boren

                  <strong>Senator</strong> Mary B. Boren was elected to the Oklahoma State …  from the University of Oklahoma, College of Law in 1992, <strong>Senator</strong> Boren began her education policy career as a Carl …  and briefed legislation for the Governors’ approval.

                  <strong>Senator</strong> Boren was an active member of the Young Democrats …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/04/2019 - 09:30</p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1847"> J.J. Dossett</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">J.J. Dossett

                  <strong>Senator</strong> Dossett is a lifelong resident of Oklahoma Senate …  State University, where he majored in History Education. <strong>Senator</strong> Dossett was a high school teacher and coach at …  two active duty deployments in Iraq and Afghanistan.

                  <strong>Senator</strong> Dossett resides in Owasso with his wife Ashley, also …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/04/2019 - 07:34</p>
              </div>
            </li><li>

              <h3 class="search-result__title">
                <a href="http://senate.funnelstaging.com/node/1859"> Kevin Matthews</a>
              </h3>

              <div class="search-result__snippet-info">
                <p class="search-result__snippet">Kevin Matthews

                  <strong>Senator</strong> Kevin L. Matthews is Membership Chair of the 100 …  on November 14th. He was then elected as a State <strong>Senator</strong> in April 2015. Prior to becoming an elected …  a 2015 graduate of Leadership Oklahoma, Class XXVIII.

                  <strong>Senator</strong> Matthews became Chair of the Oklahoma Legislative …</p>
                <p class="search-result__info"><a title="View user profile." href="/user/1" lang="" about="/user/1" typeof="schema:Person" property="schema:name" datatype="" class="username">webmaster</a> - 12/03/2019 - 07:39</p>
              </div>
            </li></ol></div>  <nav class="pager" role="navigation" aria-labelledby="pagination-heading">
          <h4 id="pagination-heading" class="visually-hidden">Pagination</h4>
          <ul class="pager__items js-pager__items">
            <li class="pager__item is-active">
              <a href="?keys=senator&amp;page=0" title="Current page">
            <span class="visually-hidden">
              Current page
            </span>1</a>
            </li>
            <li class="pager__item">
              <a href="?keys=senator&amp;page=1" title="Go to page 2">
            <span class="visually-hidden">
              Page
            </span>2</a>
            </li>
            <li class="pager__item">
              <a href="?keys=senator&amp;page=2" title="Go to page 3">
            <span class="visually-hidden">
              Page
            </span>3</a>
            </li>
            <li class="pager__item">
              <a href="?keys=senator&amp;page=3" title="Go to page 4">
            <span class="visually-hidden">
              Page
            </span>4</a>
            </li>
            <li class="pager__item">
              <a href="?keys=senator&amp;page=4" title="Go to page 5">
            <span class="visually-hidden">
              Page
            </span>5</a>
            </li>
            <li class="pager__item">
              <a href="?keys=senator&amp;page=5" title="Go to page 6">
            <span class="visually-hidden">
              Page
            </span>6</a>
            </li>
            <li class="pager__item pager__item--next">
              <a href="?keys=senator&amp;page=1" title="Go to next page" rel="next">
                <span class="visually-hidden">Next page</span>
                <span aria-hidden="true">Next ›</span>
              </a>
            </li>
            <li class="pager__item pager__item--last">
              <a href="?keys=senator&amp;page=5" title="Go to last page">
                <span class="visually-hidden">Last page</span>
                <span aria-hidden="true">Last »</span>
              </a>
            </li>
          </ul>
        </nav>

      </div>




  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
