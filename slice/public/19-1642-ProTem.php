<!DOCTYPE html>
<html>
<?php $title = '19-1642-ProTem'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">
      <?php include 'tpl/blocks/bShare-no-bread.inc'; ?>
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-21.jpg')"></div>
      </div>
      <div class="section__v-inner section__v-inner_d">
        <div class="bContainer">

          <div class="pageIn__ico">
            <img src="../dist/images/titleIco/title-ico-50.png"
                 srcset="../dist/images/titleIco/title-ico-50-2x.png 2x">
          </div>

          <div class="bTitle bTitle_wSub_a">
            <h1>Latest from the Pro Tem</h1>
          </div>

        </div>
      </div>

    </section>



    <section class="section section_ind_md section_bg-color_b">

      <div class="bContainer">
       <h2>OK Senate On Deck</h2>

        <div class="bEvents bEvents_gap_a">

          <div class="bEvents__items">

            <?php
            $sSen__item = array(
              array("event-img-tmp-1.jpg", "Ep 35: Making the Grade", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-2.jpg", "Ep 34: Date & The Electoral College", "September 23, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of..."),
              array("event-img-tmp-3.jpg", "Ep 33: Oklahoma Health Care", "September 4, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In...")
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <?php include '../src/components/bEvents/bEvents.inc'; ?>
            <?php endforeach; ?>
          </div>
          <div class="bEvents__btnAll">
            <a href="#" class="btn">
              see all
            </a>
          </div>
        </div>

        <h2>Budget Breakdown</h2>

        <div class="bEvents bEvents_gap_a">

          <div class="bEvents__items">

            <?php
            $sSen__item = array(
              array("event-img-tmp-4.jpg", "Ep 23: New Agriculture Investments", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-4.jpg", "Ep 23: New Agriculture Investments", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-4.jpg", "Ep 23: New Agriculture Investments", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In...")
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <?php include '../src/components/bEvents/bEvents.inc'; ?>
            <?php endforeach; ?>
          </div>
          <div class="bEvents__btnAll">
            <a href="#" class="btn">
              see all
            </a>
          </div>
        </div>

        <h2>OK Senate Sit Down</h2>

        <div class="bEvents bEvents_gap_a">

          <div class="bEvents__items">

            <?php
            $sSen__item = array(
              array("event-img-tmp-5.jpg", "Ep 23: New Agriculture Investments", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-5.jpg", "Ep 23: New Agriculture Investments", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-5.jpg", "Ep 23: New Agriculture Investments", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In...")
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <?php include '../src/components/bEvents/bEvents.inc'; ?>
            <?php endforeach; ?>
          </div>
          <div class="bEvents__btnAll">
            <a href="#" class="btn">
              see all
            </a>
          </div>
        </div>


        <h2>Graphics & Other Senate Info</h2>

        <div class="bEvents bEvents_gap_a">

          <div class="bEvents__itemsWr">

            <div class="bEvents__items">

              <?php
              $sSen__item = array(
                array("event-img-tmp-6.jpg"),
                array("event-img-tmp-7.jpg"),
                array("event-img-tmp-8.jpg")
              )
              ?>
              <?php foreach($sSen__item as $key => $element): ?>
                <?php include '../src/components/bEvents/bEvents-only-img.inc'; ?>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="bEvents__btnAll">
            <a href="#" class="btn">
              see all
            </a>
          </div>
        </div>

        <h2>2019 Budget Graphics</h2>

        <div class="bEvents bEvents_gap_a">

          <div class="bEvents__itemsWr">
            <div class="bEvents__items">

              <?php
              $sSen__item = array(
                array("event-img-tmp-6.jpg"),
                array("event-img-tmp-7.jpg"),
                array("event-img-tmp-8.jpg")
              )
              ?>
              <?php foreach($sSen__item as $key => $element): ?>
                <?php include '../src/components/bEvents/bEvents-only-img.inc'; ?>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="bEvents__btnAll">
            <a href="#" class="btn">
              see all
            </a>
          </div>
        </div>


      </div>

    </section>


  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
