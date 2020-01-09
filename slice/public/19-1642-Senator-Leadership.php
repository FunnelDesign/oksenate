<!DOCTYPE html>
<html>
<?php $title = '19-1642-Senator-Leadership'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">
      <?php include 'tpl/blocks/bShare-no-bread.inc'; ?>
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-19.jpg')"></div>
      </div>
      <div class="section__v-inner section__v-inner_d">
        <div class="bContainer">

          <div class="pageIn__ico">
            <img src="../dist/images/titleIco/title-ico-47.png"
                 srcset="../dist/images/titleIco/title-ico-47-2x.png 2x"
                 alt="">
          </div>

          <div class="bTitle bTitle_wSub_a">
            <h1>Leadership</h1>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_d section_bg-color_c">

      <div class="bContainer">

        <div class="pageIn__btnWr pageIn__btnWr_gap_b">
          <a href="#" class="btn btn_a">
            see historical members
          </a>
        </div>

        <div class="sSen">

          <div class="sSen__senShow">
            <h4>Senate Majority Leadership</h4>
          </div>

          <div class="sSen__itemsWraps">
            <div class="sSen__itemsWrap">
              <div class="sSen__items">
                <?php $sSen__item = array(
                  array("s-sen-img-5.jpg", "r", "4", "Sen Greg Treat <br> President Pro Tempore")
                )?>
                <?php foreach($sSen__item as $key => $element): ?>
                  <?php include 'tpl/blocks/senatorItem.inc'; ?>
                <?php endforeach; ?>
              </div>
            </div>

            <div class="sSen__itemsWrap">
              <div class="sSen__items">
                <?php $sSen__item = array(
                  array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
                  array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
                  array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
                  array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett"),
                  array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
                  array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
                  array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
                  array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett")
                )?>
                <?php foreach($sSen__item as $key => $element): ?>
                  <?php include 'tpl/blocks/senatorItem.inc'; ?>
                <?php endforeach; ?>
              </div>
            </div>
          </div>

          <div class="sSen__senShow">
            <h4>Senate Democratic Leadership</h4>
          </div>

          <div class="sSen__itemsWraps">
            <div class="sSen__itemsWrap">
              <div class="sSen__items">
                <?php $sSen__item = array(
                  array("s-sen-img-5.jpg", "r", "4", "Sen Greg Treat <br> President Pro Tempore")
                )?>
                <?php foreach($sSen__item as $key => $element): ?>
                  <?php include 'tpl/blocks/senatorItem.inc'; ?>
                <?php endforeach; ?>
              </div>
            </div>

            <div class="sSen__itemsWrap">
              <div class="sSen__items">
                <?php $sSen__item = array(
                  array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
                  array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
                  array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
                  array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett"),
                  array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
                  array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
                  array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
                  array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett")
                )?>
                <?php foreach($sSen__item as $key => $element): ?>
                  <?php include 'tpl/blocks/senatorItem.inc'; ?>
                <?php endforeach; ?>
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
