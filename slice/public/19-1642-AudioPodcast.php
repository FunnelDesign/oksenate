<!DOCTYPE html>
<html>
<?php $title = '19-1642-AudioPodcast'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">
      <div class="section__bg-wrap">
        <div class="section__bg" style="background-image: url('../dist/images/tmp/section-bg-img-9.jpg')"></div>
      </div>
      <div class="section__v-inner section__v-inner_d">
        <div class="bContainer">

          <div class="pageIn__ico">
            <img src="../dist/images/titleIco/title-ico-13.png" srcset="../dist/images/titleIco/title-ico-13-2x.png 2x"
                 alt="">
          </div>

          <div class="bTitle bTitle_wSub_a bTitle_gap_a">
            <h1>Audio & Podcasts</h1>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_c section_bg-color_c">

      <div class="bContainer">
        <div class="bPostList__sortBy">
          Showing: February 2019
        </div>

        <div class="pageIn__pCols">
          <aside class="bSidebar pageIn__bSidebar">
            <div class="bSort">
              <h4>Sort By Date</h4>


              <div class="bHide bHide_a">
                <div class="bHide__cont">

                  <div class="bSort__items">
                    <?php
                    $event_items = [
                      ['2019'],
                      ['2018'],
                      ['2017'],
                      ['2016'],
                      ['2015'],
                      ['2014'],
                      ['2013'],
                      ['2012'],
                      ['2011'],
                      ['2010'],
                      ['2009'],
                      ['2008'],
                      ['2007'],
                      ['2006'],
                      ['2005'],
                    ]
                    ?>
                    <?php foreach ($event_items as $element): ?>

                      <div class="bSort__item">
                        <div class="bSort__title">
                          <?php print $element[0]; ?>
                        </div>
                        <div class="bSort__body">
                          <a href="#">Decemeber</a>
                          <a href="#">November</a>
                          <a href="#">October</a>
                          <a href="#">September</a>
                          <a href="#">August</a>
                          <a href="#">July</a>
                          <a href="#">June</a>
                          <a href="#">May</a>
                          <a href="#">April</a>
                          <a href="#">March</a>
                          <a href="#" class="bef-link-active">February</a>
                          <a href="#">January</a>
                        </div>
                      </div>

                    <?php endforeach; ?>


                  </div>

                </div>
                <div class="bHide__moreWr">
                  <a class="bHide__more" data-ev="toggleClass:bHide:open" href="#">
                    <span class="bHide__moreOpen">show more</span>
                    <span class="bHide__moreClose">show less</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div class="pageIn__main">

            <div class="bPostList bPostList_a">

              <div class="bPostList__items">

                <div class="bPostList__item">
                  <div class="bPostList__header">

                    <div class="bPostList__date">
                      February 26, 2019
                    </div>

                    <a href="#" class="bPostList__title">
                      Pro Tem Treat bill prohibiting abortion passes out of Senate Health Committee
                    </a>

                  </div>


                  <div class="bPostList__text">
                    
                    <p>The Senate Health and Human Services Committee approved with an 11-4 vote a bill from President Pro Tempore Greg Treat that would prohibit abortion in Oklahoma when the U.S. Supreme Court overturns Roe v. Wade or if the U.S. Constitution is amended. ...  <a href="#" class="bPostList__readMore">read more.</a>

                    </p>
                  </div>

                  <div class="bPostList__btnWrap">
                    <a href="#" class="btn btn_a">listen now</a>
                  </div>

                  <?php include 'tpl/blocks/bSoc.inc'; ?>
                </div>

                <div class="bPostList__item">
                  <div class="bPostList__header">

                    <div class="bPostList__date">
                      February 25, 2019
                    </div>

                    <a href="#" class="bPostList__title">
                      Coffee Talk with Sen. Glenn Coffee (9th Week of Session)
                    </a>

                  </div>


                  <div class="bPostList__text">
                  </div>

                  <div class="bPostList__btnWrap">
                    <a href="#" class="btn btn_a">listen now</a>
                  </div>

                  <?php include 'tpl/blocks/bSoc.inc'; ?>
                </div>

                <div class="bPostList__item">
                  <div class="bPostList__header">

                    <div class="bPostList__date">
                      February 26, 2019
                    </div>

                    <a href="#" class="bPostList__title">
                      Senate Pro Tem Greg Treat Week 7 preview
                    </a>

                  </div>


                  <div class="bPostList__text">

                  </div>

                  <div class="bPostList__btnWrap">
                    <a href="#" class="btn btn_a">listen now</a>
                  </div>


                  <?php include 'tpl/blocks/bSoc.inc'; ?>
                </div>

                <div class="bPostList__item">
                  <div class="bPostList__header">

                    <div class="bPostList__date">
                      February 25, 2019
                    </div>

                    <a href="#" class="bPostList__title">
                      Coffee Talk with Sen. Glenn Coffee (8th Week of Session)
                    </a>

                  </div>


                  <div class="bPostList__text">

                  </div>

                  <div class="bPostList__btnWrap">
                    <a href="#" class="btn btn_a">listen now</a>
                  </div>

                  <?php include 'tpl/blocks/bSoc.inc'; ?>
                </div>

              </div>

            </div>

            <div class="bPostList__pager">
              <div class="bPostList__pagerTitle">
                Page:
              </div>
              <nav class="pager">
                <ul class="pager__items js-pager__items">
                  <li class="pager__item pager__item--previous">
                    <a href="#">
                      <span></span>
                    </a>
                  </li>
                  <li class="pager__item is-active">
                    <a href="#">
                      1
                    </a>
                  </li>
                  <li class="pager__item">
                    <a href="#">
                      2
                    </a>
                  </li>
                  <li class="pager__item">
                    <a href="#">
                      3
                    </a>
                  </li>
                  <li class="pager__item">
                    <a href="#">
                      4
                    </a>
                  </li>
                  <li class="pager__item pager__item--next">
                    <a href="#">
                      <span></span>
                    </a>
                  </li>
                </ul>
              </nav>
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
