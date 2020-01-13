<!DOCTYPE html>
<html>
<?php $title = '19-1642-ProTem-Individual'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_ind_j section_bg-color_c">
      <div class="section__sNav section__sNav_a">

        <div class="bContainer">
          <a href="#" class="link link_cl_b link_back">back</a>
          <div class="breadcrumb breadcrumb_a">
            <a href="#">Education</a>
            <a href="#">Senate Artwork</a>
            <span>OK Senate On Deck</span>
          </div>
          <?php include 'tpl/blocks/bShare-color-a.inc'; ?>
        </div>

      </div>


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
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-1.jpg", "Ep 35: Making the Grade", "October 7, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
              array("event-img-tmp-2.jpg", "Ep 34: Date & The Electoral College", "September 23, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of..."),
              array("event-img-tmp-3.jpg", "Ep 33: Oklahoma Health Care", "September 4, 2019",
                "The latest On Deck Podcast is here and focuses on Oklahoma Redistricting and the importance of t accountability when using federal grants. In..."),
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
        </div>
      </div>

    </section>

  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>

<?php include 'tpl/blocks/modals/video.inc'; ?>
</body>
</html>
