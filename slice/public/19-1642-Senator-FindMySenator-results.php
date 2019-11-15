<!DOCTYPE html>
<html>
<?php $title = '19-1642-Senator-FindMySenator-results'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section sSen">

      <div class="sSen__head">

        <div class="sSen__filRes">

          <div class="bContainer">
            <a href="#" class="btn btn_a sSen__btnBack">
              back to senators
            </a>

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-2.png" srcset="../dist/images/filterIco/senator-filter-icons-2-2x.png 2x"  alt="">
            </div>

            <h2>delaware county</h2>
          </div>

        </div>

      </div>
      <div class="sSen__res">

        <div class="bContainer">

          <div class="sSen__senShow">
            <h4>Showing 4 Senators</h4>
          </div>

          <div class="sSen__items">

            <?php
            $sSen__item = array(
              array("s-sen-img-1.jpg", "r", "4", "Mark Allen"),
              array("s-sen-img-2.jpg", "r", "1", "Micheal Bergstrom"),
              array("s-sen-img-3.jpg", "d", "44", "Michael Brooks"),
              array("s-sen-img-4.jpg", "d", "34", "J.J. Dossett")
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <div class="sSen__item">

                <a class="sSen__sLink" href="#">
                  <span class="sSen__sImgWrap">
                    <span class="sSen__sImg" style="background-image: url('../dist/images/senImg/<?php print $element[0]; ?>')"></span>
                    <span class="sSen__sMask sSen__sMask_<?php print $element[1]; ?>"><?php print $element[1]; ?></span>
                    <span class="sSen__sDis">district <?php print $element[2]; ?></span>
                  </span>
                  <span class="sSen__sName">
                    <?php print $element[3]; ?>
                  </span>
                </a>

              </div>
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
