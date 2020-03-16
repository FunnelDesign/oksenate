<!DOCTYPE html>
<html>
<?php $title = '19-1642-Homepage2'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="front user-logged-in ">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>

  <div id="block-senate-local-tasks" class="contextual-region">

    <div data-contextual-id="block:block=senate_local_tasks:langcode=en" data-contextual-token="s5_KDf1HgSLUKbIOKkNfbLTxAti1Tag4AgZyj8qvy-c" class="contextual" role="form"><button class="trigger focusable visually-hidden" type="button" aria-pressed="false">Open Primary tabs configuration options</button><ul class="contextual-links" hidden=""><li class="block-configure"><a href="/admin/structure/block/manage/senate_local_tasks?destination=/node/1278">Configure block</a></li><li class="sharethis-block-configure"><a href="/admin/config/services/sharethis?block=senate_local_tasks&amp;destination=/node/1278">Configure Sharethis block</a></li></ul></div>
    <nav class="tabs" role="navigation" aria-label="Tabs">
      <h2 class="visually-hidden">Primary tabs</h2>
      <ul class="tabs primary"><li class="is-active"><a href="/node/1278" data-drupal-link-system-path="node/1278" class="is-active">View<span class="visually-hidden">(active tab)</span></a></li>
        <li><a href="/node/1278/edit" data-drupal-link-system-path="node/1278/edit">Edit</a></li>
        <li><a href="/node/1278/delete" data-drupal-link-system-path="node/1278/delete">Delete</a></li>
        <li><a href="/node/1278/revisions" data-drupal-link-system-path="node/1278/revisions">Revisions</a></li>
        <li><a href="/devel/node/1278" data-drupal-link-system-path="devel/node/1278">Devel</a></li>
      </ul>

    </nav>
  </div>

  <div class="pageIn">

    <!--only for slice!!!-->
    <a href="#" class="btn" data-toggle="modal" data-target="#simpleModal" style="position: absolute">!ONLY FOR SLICE Launch modal</a>
    <?php include 'tpl/blocks/modals/simpleModal.inc'; ?>
    <!--only for slice!!!-->

    <section class="section sSlider">
      <div class="sSlider__in">
        <div class="slider-type-a">

          <div class="slider-type-a__bg-items">
            <?php
            $bg_items_slider_a = "../dist/images/tmp/";
            $slider_type_a_bg_items = array(
              "section-bg-img-14-a.jpg",
              "section-bg-img-14-a.jpg",
            ) ?>

            <?php foreach ($slider_type_a_bg_items as $element): ?>
              <div class="slider-type-a__bg-item">
                <div class="section__bg-wrap">
                  <div class="section__bg section__bg_a" style="background-image: url('<?php print $bg_items_slider_a . $element ?>')"></div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
          <div class="slider-type-a__desc-wrap">
            <div class="bContainer">

              <div class="slider-type-a__desc">
                <?php
                $desc_items = [
                  ['
                   <div class="pageIn__ico sSlider__ico">
                      <img src="../dist/images/titleIco/title-ico-37.png" 
                           srcset="../dist/images/titleIco/title-ico-37-2x.png 2x"
                           alt="">
                    </div>
                    <div class="bTitle bTitle_b bTitle_line sSlider__bTitle">
                      <h1>Weather <span>Advisory</span></h1>
                    </div>
                    
                    <div class="sSlider__desc">
                      <p>Due to extreme weather, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. </p>
                    </div>
                    <div class="sSlider__btnWrap">
                      <a href="#" class="btn">read more</a>
                    </div>
                      '],
                  ['
                    <div class="pageIn__ico sSlider__ico">
                      <img src="../dist/images/titleIco/title-ico-37.png" 
                           srcset="../dist/images/titleIco/title-ico-37-2x.png 2x"
                           alt="">
                    </div>
                    <div class="bTitle bTitle_b bTitle_line sSlider__bTitle">
                      <h1>Weather <span>Advisory</span></h1>
                    </div>
                    
                    <div class="sSlider__desc">
                      <p>Due to extreme weather, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor. </p>
                      
                    </div>
                     <div class="sSlider__btnWrap">
                      <a href="#" class="btn">read more</a>
                    </div>
                      '],
                ]
                ?>
                <?php foreach ($desc_items as $element): ?>

                  <div class="slider-type-a__desc-item">
                    <?php print $element[0]; ?>
                  </div>
                <?php endforeach; ?>

              </div>
              <div class="slider-type-a__nav">

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

<!--    <section class="section section_inner-v-centered sHero">-->
<!---->
<!--      <div class="section__bg-wrap section__bg-wrap_mobile">-->
<!--        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-1-mobile.jpg')"></div>-->
<!--      </div>-->
<!---->
<!--      <div class="section__bg-wrap">-->
<!--        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-1.jpg')"></div>-->
<!--      </div>-->
<!---->
<!---->
<!--      <div class="section__v-inner section__v-inner_a">-->
<!--        <div class="bContainer">-->
<!---->
<!--          <div class="sHero__img desktop-only">-->
<!--            <img src="../dist/images/logo.png" alt="">-->
<!--          </div>-->
<!--          <div class="bTitle bTitle_b bTitle_line sHero__bTitle">-->
<!--            <h1>Oklahoma <span>Strong</span></h1>-->
<!--          </div>-->
<!--          -->
<!--          <div class="sHero__desc">-->
<!--            <p>Serving Oklahoma for the creation of laws and budgets. </p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->

    <section class="section sFinder">
      <div class="sFinder__bg">
        <span></span>
      </div>

      <div class="bContainer">
        <div class="sFinder__in">
          <div class="sFinder__col">

            <div class="sFinder__ico">
              <img src="../dist/images/tmp/finder-ico-img-1.png" srcset="../dist/images/tmp/finder-ico-img-1-2x.png 2x"  alt="">
            </div>
            <h3>Find My Senator</h3>
            <div class="sFinder__desc">
              <p>We’ve made it easy to contact your senator.</p>
            </div>
            <div class="sFinder__btn-wrap">
              <a href="#" class="btn">find your senator here</a>
            </div>

          </div>
          <div class="sFinder__col">

            <div class="sFinder__ico">
              <img src="../dist/images/tmp/finder-ico-img-2.png" srcset="../dist/images/tmp/finder-ico-img-2-2x.png 2x"  alt="">
            </div>
            <h3>Find Legislation</h3>
            <div class="sFinder__desc">
              <p>If you know the bill number, enter it below.</p>
            </div>
            <form class="form f-search f-search-redirect">
              <div class="form-item">
                <input type="text" class="form-text" placeholder="Enter Bill Number"/>
              </div>
              <div class="form-actions">
                <input type="submit" class="form-submit" value="search">
                <div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="section section_bg-color_a section_ind_a">

      <div class="bContainer">
        <div class="bTiles">
          <div class="bTiles__items">

            <a href="#" class="bTiles__item">
              <span class="bTiles__ico">
                <img src="../dist/images/tmp/tiles-ico-img-1.png" srcset="../dist/images/tmp/tiles-ico-img-1-2x.png 2x" alt="">
              </span>
              <span class="bTiles__title">
                Track a Bill
              </span>
            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__ico">
                 <img src="../dist/images/tmp/tiles-ico-img-2.png" srcset="../dist/images/tmp/tiles-ico-img-2-2x.png 2x" alt="">
              </span>
              <span class="bTiles__title">
               Live Proceedings
              </span>
            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__ico">
                <img src="../dist/images/tmp/tiles-ico-img-3.png" srcset="../dist/images/tmp/tiles-ico-img-3-2x.png 2x" alt="">
              </span>
              <span class="bTiles__title">
                Calendar of Events
              </span>
            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__ico">
                <img src="../dist/images/titleIco/title-ico-55.png"
                     srcset="../dist/images/titleIco/title-ico-55-2x.png 2x">
              </span>
              <span class="bTiles__title">
                Floor Agenda
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section section_inner-v-centered">
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-2-m.jpg')"></div>
      </div>
      <div class="section__v-inner">
        <div class="bContainer">
          <div class="bTitle bTitle_a">
            <h2>48 Strong and Committed.</h2>
          </div>
        </div>
      </div>
    </section>

    <section class="section section_ind_b">
      <div class="section__bg-wrap">
        <div class="section__bg section__bg_mobile" style="background-image: url('../dist/images/tmp/section-bg-img-3-mobile.jpg')"></div>
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-3.jpg')"></div>
      </div>
      <div class="bContainer">
        <div class="bEvent">
          <h3>This Week at the Senate</h3>
          <div class="pageIn__loader">
            <div class="loader loader_circle"></div>
          </div>

          <div class="pageIn__noRes pageIn__noRes_a">
            <h2>No events</h2>
          </div>
          <div class="bEvent__slider">
            <div class="bEvent__slider-items">
              <?php
              $event_items = [
//                ['slider-tmp-img-1-a.jpg'],
//                ['slider-tmp-img-2-a.jpg'],
//                ['slider-tmp-img-1-a.jpg'],
//                ['slider-tmp-img-2-a.jpg'],
//                ['slider-tmp-img-1-a.jpg'],
//                ['slider-tmp-img-2-a.jpg']
                [' Monday, October 28, 2019', '19-28', 'Study on Reducing Poverty by Increasing Home Ownership and Entrepreneurship Opportunities'],
                [' Monday, October 28, 2019', ' ', 'Joint Meeting of the Senate Business, Commerce and Tourism Committee and the House Tourism Committee'],

                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],
                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],
                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],
//                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],


              ]
              ?>
              <?php foreach ($event_items as $element): ?>

                <div class="bEvent__slider-item">

                    <img src="../dist/images/<?php print $element[0]; ?>" alt="">


                  <div class="bEvent__header">
                    <?php print $element[0]; ?>
                  </div>
                  <div class="bEvent__body">
                    <div class="bEvent__time">
                      <?php print $element[1]; ?>
                    </div>
                    <div class="bEvent__text">

                      <p>
                        <?php print $element[2]; ?>
                      </p>
                    </div>
                  </div>

                  <div class="bEvent__btnWrap">
                    <a href="#" class="btn btn_a">get more information</a>
                  </div>
                </div>

              <?php endforeach; ?>
            </div>

            <div class="bEvent__slider-nav">

            </div>
          </div>


        </div>

        <div class="bEvent bTiles bTiles_ev">
          <div class="bEvent__slider">
            <div class="bEvent__slider-items">
              <?php
              $event_items = [
                [' Thur. Nov. 7, 2019 |  9:00am',
                  'Public Safety and Judiciary Subcommittee Budget Hearings',
                  ' Third Meeting',
                  ''],
                [' Thur. Nov. 7, 2019 |  9:00am',
                  'Public Safety and Judiciary Subcommittee Budget Hearings',
                  ' Third Meeting',
                  ''],
                [' Thur. Nov. 7, 2019 |  9:00am',
                  'Public Safety and Judiciary Subcommittee Budget Hearings',
                  ' Third Meeting',
                  ''],
                [' Thur. Nov. 7, 2019 |  9:00am',
                  'Public Safety and Judiciary Subcommittee Budget Hearings',
                  ' Third Meeting',
                  ''],
                [' Thur. Nov. 7, 2019 |  9:00am',
                  'Public Safety and Judiciary Subcommittee Budget Hearings',
                  ' Third Meeting',
                  ''],

              ]
              ?>
              <?php foreach ($event_items as $element): ?>

                <div class="bEvent__slider-item bTiles__item">

                  <span class="bTiles__date">
                    <?php print $element[0]; ?>
                  </span>
                  <span class="bTiles__live">
                    <span>•</span> live now
                  </span>
                  <span class="bTiles__title">
                    <?php print $element[1]; ?>
                  </span>
                  <span class="bTiles__sub">
                                   Third Meeting • Room 511-A
                  </span>
                  <span class="bTiles__btnWrap">
                    <a href="#" class="bTiles__btn btn btn_d">
                      view meeting details
                    </a>
                  </span>

                </div>

              <?php endforeach; ?>
            </div>

            <div class="bEvent__slider-nav">

            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="section section_inner-v-centered s-lead">
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-4.jpg')"></div>
      </div>
      <div class="section__v-inner section__v-inner_b">
        <div class="bContainer">

          <div class="bCols bCols_item_2 bCols_v-cent">

            <div class="bCols__col">

              <div class="senators">

                <div class="senators__items">
                  <a href="#" class="senators__item">
                    <span class="senators__imgWrap">
                      <span class="senators__img" style="background-image: url('../dist/images/tmp/senators-img-1.jpg')"></span>
                    </span>

                    <span class="senators__name">
                      Sen. Greg Treat
                    </span>
                    <span class="senators__position">
                      President Pro Tempore
                    </span>

                  </a>

                  <a href="#" class="senators__item">
                    <span class="senators__imgWrap">
                      <span class="senators__img" style="background-image: url('../dist/images/tmp/senators-img-2.jpg')"></span>
                    </span>

                    <span class="senators__name">
                      Sen. Kim David
                    </span>
                    <span class="senators__position">
                      Majority Floor Leader
                    </span>

                  </a>

                </div>

              </div>

            </div>
            <div class="bCols__col">

              <div class="sLead__col">

                <div class="sLead__img">
                  <img src="../dist/images/tmp/lead-img-tmp-1.png" srcset="../dist/images/tmp/lead-img-tmp-1-2x.png 2x" alt="">
                </div>
                <div class="bTitle bTitle_b bTitle_line bTitle_line_a sLead__bTitle">
                  <h2>Oklahoma
                   <span>Leadership</span></h2>
                </div>
                <div class="sLead__btnWrap">
                  <a href="#" class="btn">meet your oklahoma senators</a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>



  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
