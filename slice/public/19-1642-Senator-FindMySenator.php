<!DOCTYPE html>
<html>
<?php $title = '19-1642-Senator-FindMySenator'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section sSen">

      <div class="sSen__head">
        <div class="sSen__byAdd">
          <?php include 'tpl/blocks/bShare-no-bread.inc'; ?>

          <a href="#" class="sSen__btnByAdd">search by address</a>
        </div>
        <div class="sSen__fil" id="views-exposed-form-senators-page-1">

          <a href="#" class="form-submit TEST-ONLY_FOR_SLICE" style="position: absolute;">loader ONLY FOR SLICE</a>

          <div class="sSen__filCol">
            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-1.png" srcset="../dist/images/filterIco/senator-filter-icons-1-2x.png 2x"  alt="">
            </div>
<!--            <div class="sSen__filTitle">-->
<!--              search by zip code-->
<!--            </div>-->
            <div class="sSen__opt">
              <div  class="form f-search f-search_min">
                <div class="js-form-item form-item js-form-type-entity-autocomplete form-type-entity-autocomplete js-form-item-zip form-item-zip">
                  <label for="edit-zip">search by zip code</label>
                  <input

                    data-drupal-selector="edit-zip"
                    class="form-autocomplete form-text ui-autocomplete-input"
                    data-autocomplete-path="/entity_reference_autocomplete/taxonomy_term/default/kLVypGEEaZEicbnexfCrIxnl21qjo0yEHO7q0PzdfnE"
                    type="text" id="edit-zip" name="zip" value="" size="60" maxlength="128"
                    autocomplete="new-password"
                    placeholder="Enter Zip"
                  >

                </div>
                <a href="#" class="btn btn_action">go</a>
              </div>

              <div class="form f-search f-search_min">
                <div class="form-item">
                  <input type="text" class="form-text" placeholder="Enter Zip"/>
                </div>
                <div class="form-actions">
                  <input type="submit" class="form-submit" value="">
                  <div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>
                </div>
              </div>

              <ul id="ui-id-1"
                  tabindex="0"
                  class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"
                  style="top: 0px;left: 280px;width: 150px;position: absolute"><li class="ui-menu-item"><a id="ui-id-14" tabindex="-1" class="ui-menu-item-wrapper" style="
    /* padding: 5px; */
    /* display: block; */
">67950</a></li><li class="ui-menu-item">
                  <a id="ui-id-15" tabindex="-1" class="ui-menu-item-wrapper ui-state-active">73002</a></li><li class="ui-menu-item"><a id="ui-id-16" tabindex="-1" class="ui-menu-item-wrapper">73003</a></li><li class="ui-menu-item"><a id="ui-id-17" tabindex="-1" class="ui-menu-item-wrapper">73004</a></li><li class="ui-menu-item"><a id="ui-id-18" tabindex="-1" class="ui-menu-item-wrapper">73005</a></li><li class="ui-menu-item"><a id="ui-id-19" tabindex="-1" class="ui-menu-item-wrapper">73006</a></li><li class="ui-menu-item"><a id="ui-id-20" tabindex="-1" class="ui-menu-item-wrapper">73007</a></li><li class="ui-menu-item"><a id="ui-id-21" tabindex="-1" class="ui-menu-item-wrapper">73008</a></li><li class="ui-menu-item"><a id="ui-id-22" tabindex="-1" class="ui-menu-item-wrapper">73009</a></li><li class="ui-menu-item"><a id="ui-id-23" tabindex="-1" class="ui-menu-item-wrapper">73010</a></li></ul>

            </div>

          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-2.png" srcset="../dist/images/filterIco/senator-filter-icons-2-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by county
            </div>
            <div class="sSen__opt">

              <div class="form-item form-type-select">
                <select class="form-select">
                  <option>Select County</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                  <option>Select County</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                  <option>Select County</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                  <option>Select County</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                </select>
              </div>

            </div>

          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-3.png" srcset="../dist/images/filterIco/senator-filter-icons-3-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by district
            </div>
            <div class="sSen__opt">

              <div class="form-item form-type-select">
                <select class="form-select">
                  <option>Select District</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                </select>
              </div>

            </div>

            <div class="sSen__filLink">
              <a href="#">see district map</a>
            </div>
          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-4.png" srcset="../dist/images/filterIco/senator-filter-icons-4-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by committee
            </div>
            <div class="sSen__opt">

              <div class="form-item form-type-select">
                <select class="form-select">
                  <option>Select Committee</option>
                  <optgroup label="Standing Committees">
                    <option>Agriculture and Wildlife</option>
                    <option>Appropriations</option>
                    <option>Business, Commerce and Tourism</option>
                    <option>Education</option>
                    <option>Energy</option>
                    <option>Finance</option>
                    <option>Finance</option>
                    <option>General Government</option>
                  </optgroup>
                  <optgroup label="Subcommittees">
                    <option>Education</option>
                    <option>General Government and Transoration</option>
                    <option>Health and Human Services</option>
                  </optgroup>
                </select>
              </div>

            </div>
          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-5.png" srcset="../dist/images/filterIco/senator-filter-icons-5-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by party
            </div>
            <div class="sSen__opt">

              <div class="form-item form-type-select">
                <select class="form-select">
                  <option>Select Party</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                </select>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="sSen__res sSen__res_loading">

        <div class="bContainer">

          <div class="sSen__senShow">
            <h4>Showing All 48 Senators</h4>
          </div>
          
          <div class="sSen__noRes">
            <h2>No result</h2>
          </div>

          <div class="sSen__items">

            <?php
            $sSen__item = array(
              array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
              array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
              array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
              array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett"),
              array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
              array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
              array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
              array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett"),
              array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
              array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
              array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
              array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett"),
              array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
              array("s-sen-img-3.jpg", "d", "44", "Michael Brooks cvgdfg fgdfg dftgdf dfghdfg dfghdf"),
              array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett"),
              array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
              array("s-sen-img-3.jpg", "d", "44", "Michael Brooks")
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <?php include 'tpl/blocks/senatorItem.inc'; ?>
            <?php endforeach; ?>

          </div>

        </div>

      </div>


    </section>

  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
