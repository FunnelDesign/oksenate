<!DOCTYPE html>
<html>
<?php $title = ' welcome-page'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page welcome-page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <div id="block-senate-content">
      <article>
        <section class="section">

          <div class="section__bg-wrap section__bg-wrap_mobile">
            <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-1-mobile.jpg')"></div>
          </div>

          <div class="section__bg-wrap">
            <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-1.jpg')"></div>
          </div>

        </section>

        <section class="section sFinder">
          <div class="sFinder__bg">
            <span></span>
          </div>

          <div class="bContainer">
            <div class="sFinder__in">
              <div class="sFinder__col">

            <span class="bTiles__ico">
                <img src="../dist/images/ico/ico-tmp-18.png" srcset="../dist/images/ico/ico-tmp-18-2x.png 2x">
              </span>
                <h1>Welcome!</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="section__bg-wrap">
            <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-4.jpg')"></div>
          </div>
        </section>
      </article>

    </div>

  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
