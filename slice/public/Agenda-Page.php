<!DOCTYPE html>
<html>
<?php $title = 'Agenda-Page'; ?>
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
          <div class="pageIn__ico">
            <img src="../dist/images/titleIco/title-ico-60.png"
                 srcset="../dist/images/titleIco/title-ico-60-2x.png 2x">
          </div>


          <div class="bTitle bTitle_wSub_a">
            <h1>OK Senate GOP</h1>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_i section_bg-color_c">

      <div class="bContainer">

        <div class="b-agenda">
          <div class="b-agenda__group">

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-1.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  The global pandemic has disrupted nearly every aspect of our lives: from the toll on our health, to keeping students out of the classroom, to harming local and state economies.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Senate Republicans will help Oklahoma rebound from the global pandemic so that our state can advance, grow and thrive once again.</li>
                </ul>
              </div>
            </div>

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-2.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  The key to growing Oklahoma’s economy is diversifying Oklahoma’s economy.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Aggressively recruit jobs and economic investment to Oklahoma.</li>
                  <li>Reform government and eliminate regulations that keep job-creators from growing in Oklahoma.</li>
                </ul>
              </div>
            </div>

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-3.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  Parts of state government operate on dial-up technology in a wireless world.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Continue efforts to modernize services in a safe and secure manner making them more accessible and user friendly for taxpayers.</li>
                  <li>Modernize the outdated state employment process to provide better flexibility for hiring, developing, and paying state employees.</li>
                </ul>
              </div>
            </div>

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-4.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  The early days of a child’s life are among the most critical and providing support during this time will help make Oklahoma stronger and healthier.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Focus care and services on children from conception to age 2 to support optimal health, growth and development.</li>
                  <li>Support expectant mothers and fathers, and families with young children.</li>
                </ul>
              </div>
              <div class="b-agenda__title">
                <h3>
                  Protect and secure the rights and liberties of the people of Oklahoma.
                </h3>
              </div>
            </div>

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-5.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  A healthier Oklahoma is one that is well positioned to grow and thrive.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Increase access to quality, affordable health care services and providers.</li>
                  <li>Focus efforts to improve health outcomes in Oklahoma.</li>
                  <li>Work to lower the cost of health care for all Oklahomans.</li>
                </ul>
              </div>
            </div>

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-6.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  High-speed Internet is essential in the 21st Century. Connecting all of Oklahoma is important for education, health care, and economic competitiveness.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Remove regulatory barriers that prevent expansion of high-speed Internet, especially in rural Oklahoma.</li>
                  <li>Lay the foundation for infrastructure investment to help connect more of Oklahoma.</li>

                </ul>
              </div>
            </div>

            <div class="b-agenda__item">
              <div class="b-agenda__img">
                <img src="../dist/images/agenda/agenda-img-7.jpg">
              </div>
              <div class="b-agenda__title">
                <h3>
                  Oklahomans appreciate the men and women who protect our freedoms and our communities.
                </h3>
              </div>
              <div class="b-agenda__quote">
                <ul>
                  <li>Make Oklahoma the state that military families and veterans want to call home.</li>
                  <li>Support the men and women of law enforcement who keep our communities safe.</li>

                </ul>
              </div>
            </div>
          </div>
          
          <div class="b-agenda__btn-group">
            <a href="#" class="btn">download agenda</a>
          </div>
        </div>

      </div>

    </section>
    <section class="section section_ind_i section_bg-color_b">
      <div class="bContainer">
        <div class="bEvents _two-cols">
          <div class="bEvents__items">
            <?php
            $sSen__item = array(
              array("agenda-img-video-1.jpg",
                "Video Title Goes Here"),
              array("agenda-img-video-1.jpg",
                "Video Title Goes Here"),
              array("agenda-img-video-1.jpg",
                "Video Title Goes Here"),
              array("agenda-img-video-1.jpg",
                "Video Title Goes Here"),
              array("agenda-img-video-1.jpg",
                "Video Title Goes Here"),
              array("agenda-img-video-1.jpg",
                "Video Title Goes Here"),
            )
            ?>
            <?php foreach($sSen__item as $key => $element): ?>
              <?php include '../src/components/bEvents/bEvents-agenda-video.inc'; ?>
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
