<!DOCTYPE html>
<html>
<?php $title = 'SenateAudio-Video-page'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">
      <?php include 'tpl/blocks/bShare-no-bread.inc'; ?>
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-8.jpg')"></div>
      </div>
      <div class="section__v-inner section__v-inner_d">
        <div class="bContainer">

          <div class="bTitle bTitle_wSub_a">
            <h1>Senate Audio and Video</h1>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_i section_bg-color_b">

      <div class="bContainer">

        <div class="bTiles bTiles_rel bTiles_rel_f">

          <div class="bTiles__items">
            <a href="#" class="bTiles__item">
              <span class="bTiles__ico">
                <img src="../dist/images/ico/ico-tmp-26.png"
                     srcset="../dist/images/ico/ico-tmp-26-2x.png 2x">
              </span>
              <span class="bTiles__title">
                All of our live sessions in one place for your convenience.
              </span>
              <span class="bTiles__btnWrap">
                <span class="btn">
                    view our live senate sessions
                </span>
              </span>

            </a>

            <a href="#" class="bTiles__item">
              <span class="bTiles__ico">
                <img src="../dist/images/ico/ico-tmp-27.png"
                     srcset="../dist/images/ico/ico-tmp-27-2x.png 2x">
              </span>
              <span class="bTiles__title">
                See our list of Committee Meetings as well as our weekly schedule.
              </span>
              <span class="bTiles__btnWrap">
                <span class="btn">
                   view our committee meetings
                </span>
              </span>

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
