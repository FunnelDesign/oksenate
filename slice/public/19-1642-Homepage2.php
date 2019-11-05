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
      <div class="section__v-inner">
        <div class="bContainer">

          <div class="sHero__img">
            <img src="../dist/images/logo.png" alt="">
          </div>
          <div class="sHero__title">
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

            <div class="bTiles__item">

            </div>
            <div class="bTiles__item">

            </div>
            <div class="bTiles__item">

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
