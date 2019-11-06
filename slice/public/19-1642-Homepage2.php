<!DOCTYPE html>
<html>
<?php $title = '19-1642-Homepage2'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="front">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_inner-v-centered sHero">
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-1.jpg')"></div>
      </div>
      <div class="section__v-inner section__v-inner_a">
        <div class="bContainer">

          <div class="sHero__img">
            <img src="../dist/images/logo.png" alt="">
          </div>
          <div class="bTitle bTitle_b bTitle_line">
            <h1>Oklahoma <span>Strong</span></h1>
          </div>
          
          <div class="sHero__desc">
            <p>Serving Oklahoma for the creation of laws and budgets. </p>
          </div>
        </div>
      </div>
    </section>

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
            <div class="form f-search">
              <div class="form-item">
                <input type="text" class="form-text" placeholder="Enter Bill Number"/>
              </div>
              <div class="form-actions">
                <input type="submit" class="form-submit" value="search">
                <div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>
              </div>
            </div>
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
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-3.jpg')"></div>
      </div>
      <div class="bContainer">
        <div class="bEvent">
          <h3>This Week at the Senate</h3>
          <div class="bEvent__slider">
            <div class="bEvent__slider-items">
              <?php
              $event_items = [
                [' Monday, October 28, 2019', '19-28', 'Study on Reducing Poverty by Increasing Home Ownership and Entrepreneurship Opportunities'],
                [' Monday, October 28, 2019', ' ', 'Joint Meeting of the Senate Business, Commerce and Tourism Committee and the House Tourism Committee'],

                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],
                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],
                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],
                ['Monday, October 28, 2019', ' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti distinctio dolor ducimus est et libero nostrum, placeat praesentium quos totam ullam. Alias autem dolore ducimus eum impedit sequi, vero.'],


              ]
              ?>
              <?php foreach ($event_items as $element): ?>

                <div class="bEvent__slider-item">

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
                  <span class="senators__item">
                  <span class="senators__imgWrap">
                      <span class="senators__img" style="background-image: url('../dist/images/tmp/senators-img-1.jpg')"></span>
                    </span>
                      
                    <span class="senators__name">
                      Sen. Greg Treat
                    </span>
                    <span class="senators__position">
                      President Pro Tempore
                    </span>

                  </span>

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
