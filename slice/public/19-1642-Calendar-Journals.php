<!DOCTYPE html>
<html>
<?php $title = '19-1642-Calendar-Journals'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">
      <div class="section__sNav">

        <div class="bContainer">
          <a href="#" class="link link_cl_a link_back">back</a>
          <div class="breadcrumb">
            <a href="#">Calendar</a>
            <span>State Journals</span>
          </div>
        </div>

      </div>

      <div class="section__v-inner section__v-inner_d">
        <div class="bContainer">

          <div class="pageIn__ico">
            <img src="../dist/images/titleIco/title-ico-11.png" srcset="../dist/images/titleIco/title-ico-11-2x.png 2x"
                 alt="">
          </div>

          <div class="bTitle bTitle_wSub_a">
            <h1>State Journals</h1>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_h section_bg-color_c">

      <div class="bContainer">

<!--        <div class="bSelect bSelect_a bSelect_size_b  bSelect_gap_b">-->
          <form class="views-exposed-form bSelect bSelect_a bSelect_size_d  bSelect_gap_b" data-drupal-selector="views-exposed-form-journals-page-1" action="/calendar/journals" method="get" id="views-exposed-form-journals-page-1" accept-charset="UTF-8">
            <div class="js-form-item form-item js-form-type-select form-type-select js-form-item-year form-item-year form-no-label">
              <select data-drupal-selector="edit-year" id="edit-year" name="year" class="form-select">
                <option value="2019">2019</option>
                <option value="2018" selected="selected">2018</option>
              </select>
            </div>
            <div class="js-form-item form-item js-form-type-select form-type-select js-form-item-month form-item-month form-no-label">
              <select data-drupal-selector="edit-month" id="edit-month" name="month" class="form-select">
                <option value="02">February</option>
                <option value="03" selected="selected">March</option>
              </select>
            </div>
            <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">
              <input data-drupal-selector="edit-submit-journals" type="submit" id="edit-submit-journals" value="Apply" class="button js-form-submit form-submit"/>
            </div>
          </form>

<!--        </div>-->

<!--        <div class="bSelect bSelect_a bSelect_size_b  bSelect_gap_b">-->
<!--          <div class="form-item form-type-select">-->
<!--            <select class="form-select">-->
<!--              <option>2019</option>-->
<!--              <option>2019</option>-->
<!--              <option>2019</option>-->
<!--              <option>2019</option>-->
<!--              <option>2019</option>-->
<!--              <option>2019</option>-->
<!--            </select>-->
<!--          </div>-->
<!---->
<!--          <div class="form-item form-type-select">-->
<!--            <select class="form-select">-->
<!--              <option>January</option>-->
<!--              <option>January</option>-->
<!--              <option>January</option>-->
<!--              <option>January</option>-->
<!--              <option>January</option>-->
<!--              <option>January</option>-->
<!--            </select>-->
<!--          </div>-->
<!--        </div>-->

        <div class="bTitle bTitle_wSub_a bTitle_gap_b">
          <h1>2019 Senate Journals</h1>
          <div class="bTitle__sub bTitle__sub_a">
            1st Session - 57th Legislature
          </div>
        </div>

        <div class="bListLinks bListLinks_a bListLinks_gap_a">
          <div class="bListLinks__items bListLinks__items_cen">
            <a href="#" class="btn btn_b btn_s_b">january 3 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 4 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 5 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 6 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 7 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 8 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 9 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 10 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 11 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 12 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 13 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 14 pdf</a>
            <a href="#" class="btn btn_b btn_s_b">january 15 pdf</a>
          </div>
        </div>

        <div class="bTitle bTitle_wSub_a bTitle_gap_b">
          <h1>2019 Senate Journals</h1>
          <div class="bTitle__sub bTitle__sub_a">
            1st Session - 57th Legislature
          </div>
        </div>

        <div class="bListLinks bListLinks_a bListLinks_gap_a">
          <div class="bListLinks__items bListLinks__items_cen">
            <a href="#" class="btn btn_b btn_s_b">january 3 pdf</a>
          </div>
        </div>

      </div>

    </section>


  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
