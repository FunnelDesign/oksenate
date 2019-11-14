<!DOCTYPE html>
<html>
<?php $title = '19-1642-Senator-FindMySenator'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="front">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <div class="section sSen">

      <div class="sSen__head">
        <div class="sSen__byAdd">
          <a href="#" class="sSen__btnByAdd">Search By Address</a>
        </div>
        <div class="sSen__fil">

          <div class="sSen__filCol">
            <div class="sSen__filIco">
              <img src="#" alt="">
            </div>
            <div class="sSen__filTitle">
              search by zip code
            </div>
            <div class="sSen__filSearch">
              <div class="form f-search">
                <form action="/search/node" method="get" id="search-block-form" accept-charset="UTF-8">
                  <div class="js-form-item form-item js-form-type-search form-type-search js-form-item-keys form-item-keys form-no-label">
                    <label for="edit-keys" class="visually-hidden">Search</label>
                    <input title="Enter the terms you wish to search for." placeholder="search here" data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">

                  </div>
                  <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit">
                  </div>

                </form>

              </div>
            </div>

          </div>
          <div class="sSen__filCol"></div>
          <div class="sSen__filCol"></div>
          <div class="sSen__filCol"></div>
          <div class="sSen__filCol"></div>
        </div>
      </div>
      <div class="sSen__res">

        <div class="bContainer">

          <div class="sSen__senShow">
            <h4>Showing All 48 Senators</h4>
          </div>

          <div class="sSen__items">

            <?php
            $sSen__item = array(
              array("Darryl Wilkerson", "PRESIDENT AND CEO", "team-img-1.jpg"),
              array("Pete Hennessey", "EXECUTIVE VICE PRESIDENT", "team-img-2.jpg"),
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <div class="sSen__item">

                <a class="team-link" href="#"  data-toggle="modal" data-target="#popup-team-<?php print $key ?>">
                  <span class="img">
                    <img src="<?php print "theme/images/tmp/" . $element[2] ?>" alt=""/>
                  </span>
                  <span class="title">
                    <span class="title-inner">
                      <span class="name"><?php print $element[0] ?></span>
                      <span class="position"><?php print $element[1] ?></span>
                    </span>
                  </span>
                </a>

              </div>
            <?php endforeach; ?>

          </div>

        </div>

      </div>


    </div>

  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
