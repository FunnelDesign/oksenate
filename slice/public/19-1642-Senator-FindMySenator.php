<!DOCTYPE html>
<html>
<?php $title = '19-1642-Senator-FindMySenator'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <div class="section sSen">

      <div class="sSen__head">
        <div class="sSen__byAdd">
          <a href="#" class="sSen__btnByAdd">search by address</a>
        </div>
        <div class="sSen__fil">

          <div class="sSen__filCol">
            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-1.png" srcset="../dist/images/filterIco/senator-filter-icons-1-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by zip code
            </div>
            <div class="sSen__opt">
              <div class="form f-search f-search_min">
                <div class="form-item">
                  <input type="text" class="form-text" placeholder="Enter Zip"/>
                </div>
                <div class="form-actions">
                  <input type="submit" class="form-submit" value=">">
                  <div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>
                </div>
              </div>
            </div>

          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-2.png" srcset="../dist/images/filterIco/senator-filter-icons-2-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by county
            </div>
            <div class="sSen__opt">

              <div class="form-item form-type-select">
                <select class="form-select">
                  <option>Select County</option>
                  <option>Cotton</option>
                  <option>Craig</option>
                  <option>Creek</option>
                  <option>Custer</option>
                  <option>Delaware</option>
                  <option>Dewey</option>
                </select>
              </div>

            </div>

          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-3.png" srcset="../dist/images/filterIco/senator-filter-icons-3-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by district
            </div>
            <div class="sSen__opt">

            </div>

            <div class="sSen__filLink">
              <a href="#">see district map</a>
            </div>
          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-4.png" srcset="../dist/images/filterIco/senator-filter-icons-4-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by committee
            </div>
            <div class="sSen__opt">

            </div>
          </div>
          <div class="sSen__filCol">

            <div class="sSen__filIco">
              <img src="../dist/images/filterIco/senator-filter-icons-5.png" srcset="../dist/images/filterIco/senator-filter-icons-5-2x.png 2x"  alt="">
            </div>
            <div class="sSen__filTitle">
              search by party
            </div>
            <div class="sSen__opt">

            </div>
          </div>
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
