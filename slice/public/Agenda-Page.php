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
    <div class="bContainer">

      <p class="text-align-center">&nbsp;</p>

      <p class="text-align-center"><span><span><span><a><strong><em><span>1st Regular Session of the 58<sup>th</sup> Oklahoma Legislature</span></em></strong></a></span></span></span></p>

      <p class="text-align-center"><span><span><span><strong><span>Senate Floor Agenda</span></strong></span></span></span></p>

      <p class="text-align-center"><span><span><span><strong><span>Wednesday, February 3rd, 2021</span></strong></span></span></span></p>

      <p class="text-align-center"><span><span><strong><span>SESSION CONVENES AT 9:30 AM</span></strong></span></span></p>

      <p class="text-align-center"><span><span><strong><span>CHAPLAIN</span></strong></span></span></p>

      <p class="text-align-center"><span><span><span>Pastor LeRon G. West, Gilcrease Hills Baptist Church, Tulsa, Senator Matthews</span></span></span></p>

      <p class="text-align-center">&nbsp;</p>

      <p class="text-align-center"><span><span><strong><span>GENERAL ORDER</span></strong></span></span></p>

      <p>&nbsp;</p>

      <ol><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB772&amp;Session=2100"><strong><span>SB</span></strong><strong><span>772</span></strong></a><strong> </strong><span>By <strong>Murdock </strong>of the Senate and Newton of the House</span></span></span></span></li>
      </ol><p><span><span><span>Hunting; authorizing the control of certain nuisance wildlife; modifying language; requiring certain written permission; providing certain exception; increasing penalties; prohibiting nuisance control at night for persons convicted within certain period of time. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="2"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB773&amp;Session=2100"><strong><span>SB773</span></strong></a><strong> </strong><span>By <strong>Murdock </strong>of the Senate and Newton of the House</span></span></span></span></li>
      </ol><p><span><span><span>Nuisance wildlife; authorizing certain persons to hunt or kill prairie dogs without a permit. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="3"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB776&amp;Session=2100"><strong><span>SB776</span></strong></a><strong> </strong><span>By <strong>Murdock </strong>of the Senate and Newton of the House</span></span></span></span></li>
      </ol><p><span><span><span>Game and fish; modifying authority of the Wildlife Conservation Commission relating to the acquisition of certain property. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="4"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB812&amp;Session=2100"><strong><span>SB812</span></strong></a><strong> </strong><span>By <strong>Murdock </strong>of the Senate and Fetgatter of the House</span></span></span></span></li>
      </ol><p><span><span><span>Game and fish; authorizing submission of license or permit. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="5"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB839&amp;Session=2100"><strong><span>SB839</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>of the Senate and Roberts (Sean) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Game wardens; prohibiting cameras on private property without permission unless pursuant to a warrant. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="6"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB844&amp;Session=2100"><strong><span>SB844</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>of the Senate and Gann of the House</span></span></span></span></li>
      </ol><p><span><span><span>Agriculture; repealing Southern Dairy Compact. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="7"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB298&amp;Session=2100"><strong><span>SB298</span></strong></a><strong> </strong><span>By <strong>Dugger </strong>of the Senate and McDugle of the House</span></span></span></span></li>
      </ol><p><span><span><span>Motor Fuel Tax Code; extending date of prior remittance percentage basis increase. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB298 INT FI.pdf</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="8"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB236&amp;Session=2100"><strong><span>SB236</span></strong></a><strong> </strong><span>By <strong>Standridge </strong>of the Senate and Rosecrants of the House</span></span></span></span></li>
      </ol><p><span><span><span>Sales tax; providing sales tax exemption for sales of clothing to certain nonprofit. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="9"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB382&amp;Session=2100"><strong><span>SB382</span></strong></a><strong> </strong><span>By <strong>Standridge </strong>of the Senate and Conley of the House</span></span></span></span></li>
      </ol><p><span><span><span>Oklahoma Central Purchasing Act; excluding certain acquisitions made by the J.D. McCarty Center from provisions of the Central Purchasing Act. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="10"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB551&amp;Session=2100"><strong><span>SB551</span></strong></a><strong> </strong><span>By <strong>Standridge </strong>of the Senate and Conley of the House</span></span></span></span></li>
      </ol><p><span><span><span>J.D. McCarty Center for Children with Developmental Disabilities; modifying positions included as unclassified service positions. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="11"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB237&amp;Session=2100"><strong><span>SB237</span></strong></a><strong> </strong><span>By <strong>Pemberton </strong>of the Senate and McBride of the House</span></span></span></span></li>
      </ol><p><span><span><span>Tuition aid grants; modifying factors used to determine priorities for participation. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB237 INT FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="12"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB238</span></strong></a><strong> </strong><span>By <strong>Pemberton </strong>of the Senate and Nollan of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; creating a task force to study a requirement for high school students to complete the FAFSA. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB238 INT FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="13"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB253</span></strong></a><strong> </strong><span>By <strong>Rader </strong>of the Senate and CrosswhiteHader of the House</span></span></span></span></li>
      </ol><p><span><span><span>Candidate filing for elective office; adding information to be included on declaration of candidacy form. Effective date.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB253 (3-01-21) (Rader) FS FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="14"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB330</span></strong></a><strong> </strong><span>By <strong>Rader </strong>of the Senate and Pfeiffer of the House</span></span></span></span></li>
      </ol><p><span><span><span>Self-insurance Guaranty Fund; removing certain Tax Commission notification requirement. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="15"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB595</span></strong></a><strong> </strong><span>By <strong>Rader </strong>of the Senate and Pfeiffer of the House</span></span></span></span></li>
      </ol><p><span><span><span>Oklahoma Tax Commission; authorizing Commission to contract with agencies for the collection of funds. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB595 INT FI.pdf</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="16"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB599</span></strong></a><strong> </strong><span>By <strong>Rader </strong>of the Senate and Pfeiffer of the House</span></span></span></span></li>
      </ol><p><span><span><span>Tax procedure; modifying time frame for remittance from debt collection agencies. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB599 INT FI.pdf</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="17"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB603</span></strong></a><strong> </strong><span>By <strong>Rader </strong>of the Senate and Pfeiffer of the House</span></span></span></span></li>
      </ol><p><span><span><span>Film expenditure rebates; modifying certain provisions of Oklahoma Film Enhancement Rebate Program. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB603 CS FI.pdf</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB603 INT FI.pdf</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="18"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB364</span></strong></a><strong> </strong><span>By <strong>David </strong>of the Senate and West (Josh) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Grand River Dam Authority; moving the domicile of the district. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="19"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB272</span></strong></a><strong> </strong><span>By <strong>Weaver </strong>et al of the Senate and Worthen of the House</span></span></span></span></li>
      </ol><p><span><span><span>Wireless telecommunications carriers; requiring carriers to provide call location information under certain emergency circumstances. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="20"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB292</span></strong></a><strong> </strong><span>By <strong>Haste </strong>of the Senate and Nollan of the House</span></span></span></span></li>
      </ol><p><span><span><span>Higher education; creating a task force to study concurrent enrollment needs of the state. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="21"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB304</span></strong></a><strong> </strong><span>By <strong>Jech </strong>of the Senate and Gann of the House</span></span></span></span></li>
      </ol><p><span><span><span>Corrections; modifying certain documentation; modifying assumption of custody. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="22"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB335</span></strong></a><strong> </strong><span>By <strong>Pederson </strong>of the Senate and Newton of the House</span></span></span></span></li>
      </ol><p><span><span><span>Cemeteries; providing for method of burial space reversion. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="23"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB339</span></strong></a><strong> </strong><span>By <strong>Pederson </strong>et al of the Senate and Ford of the House</span></span></span></span></li>
      </ol><p><span><span><span>Motor vehicles; modifying requirements for seatbelt usage. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="24"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB485</span></strong></a><strong> </strong><span>By <strong>Pederson </strong>of the Senate and Mize of the House</span></span></span></span></li>
      </ol><p><span><span><span>Wreckers and towing; requiring insurer to pay claim for wrecker and towing services. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="25"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB343</span></strong></a><strong> </strong><span>By <strong>Paxton </strong>of the Senate and Boles of the House</span></span></span></span></li>
      </ol><p><span><span><span>Court fines and costs; clarifying authority of courts to collect certain fines and costs through tax warrant intercept. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="26"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB436</span></strong></a><strong> </strong><span>By <strong>Paxton </strong>of the Senate and Pae of the House</span></span></span></span></li>
      </ol><p><span><span><span>Income tax refunds; providing refund checkoff donation for certain Y.M.C.A. Youth and Government Program. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="27"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB523</span></strong></a><strong> </strong><span>By <strong>Paxton </strong>et al of the Senate and Lepak of the House</span></span></span></span></li>
      </ol><p><span><span><span>Elections; prohibiting alteration or amendment of election procedures under certain circumstances. Effective date.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB523 (2-19-21) (Paxton) FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="28"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB441</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>of the Senate and Steagall of the House</span></span></span></span></li>
      </ol><p><span><span><span>Motor vehicles; prohibiting contracting for use of photo monitoring devices. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="29"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB457</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>et al of the Senate and ODonnell of the House</span></span></span></span></li>
      </ol><p><span><span><span>Oklahoma Open Records Act; requiring disclosure of recordings from certain law enforcement equipment. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="30"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB503</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>et al of the Senate and Martinez of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; requiring certain subject matter standards and assessment include certain historical documents. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="31"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB544</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>et al of the Senate and Mize of the House</span></span></span></span></li>
      </ol><p><span><span><span>Sales of farmed products; creating the Right to Commerce Act; providing for the sale of eggs and milk direct to consumers. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="32"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB594</span></strong></a><strong> </strong><span>By <strong>McCortney </strong>et al of the Senate and Pfeiffer of the House</span></span></span></span></li>
      </ol><p><span><span><span>Income tax credit; increasing investment requirement for credit; deleting credit for increase of payroll. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB594 INT FI.pdf</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="33"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB22</span></strong></a><strong> </strong><span>By <strong>Floyd </strong>of the Senate and West (Tammy) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Boards of education; directing a lessee be given right of first refusal to purchase certain property. Effective date. Emergency.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB22 (3-01-21) (Floyd) RT FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="34"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB128</span></strong></a><strong> </strong><span>By <strong>Rader </strong>of the Senate and Lowe (Dick) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; creating the Seizure-Safe Schools Act; requiring certain training; providing for administration of medication; providing exemption from certain disciplinary proceeding. Emergency.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB128 (2-23-21) (Rader) FS FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB128 (2-23-21) (Rader) RT FA2.doc</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB128 CS FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="35"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB142</span></strong></a><strong> </strong><span>By <strong>Pederson </strong>of the Senate and Patzkowsky of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; allowing certain school districts to enroll certain out-of-state students without tuition. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB142 CS FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="36"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB197</span></strong></a><strong> </strong><span>By <strong>Dugger </strong>of the Senate and West (Tammy) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Board of education elections; directing members to be seated after certain April election date. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="37"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB211</span></strong></a><strong> </strong><span>By <strong>Dugger </strong>of the Senate and Luttrell of the House</span></span></span></span></li>
      </ol><p><span><span><span>Private education; modifying duties and fees of the Oklahoma Board of Private Vocational Schools. Emergency.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB211 (3-01-21) (Dugger) RT FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB211 INT FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="38"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB267</span></strong></a><strong> </strong><span>By <strong>Pemberton </strong>et al of the Senate and Nollan of the House</span></span></span></span></li>
      </ol><p><span><span><span>Teacher retirement; authorizing retired members to return with no earnings limitations for certain period.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB267 INT AO.docx</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="39"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB406</span></strong></a><strong> </strong><span>By <strong>Garvin </strong>of the Senate and McEntire of the House</span></span></span></span></li>
      </ol><p><span><span><span>University Hospitals Authority; modifying names and definitions; prohibiting certain unauthorized use of titles; authorizing certain assignment of facilities. Effective date.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB406 (3-02-21) (Garvin) FS FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="40"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB619</span></strong></a><strong> </strong><span>By <strong>Bullard </strong>of the Senate and West (Kevin) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; allowing certain students to participate in apprenticeships, internships and mentorships. Effective date. Emergency.</span></span></span></p>

      <p><span><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span></p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB619 (3-01-21) (Bullard) RT FA1.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="41"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB634</span></strong></a><strong> </strong><span>By <strong>Daniels </strong>et al of the Senate and ODonnell of the House</span></span></span></span></li>
      </ol><p><span><span><span>School employee payroll deductions; requiring authorization for certain dues and political contributions. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="42"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB658</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>of the Senate and West (Kevin) of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; requiring State Department of Education and school districts to provide certain information to parents. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB658 INT FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="43"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB705</span></strong></a><strong> </strong><span>By <strong>Dahm </strong>of the Senate and Gann of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; repealing sections of law relating to the Oklahoma Center for Rural Development Act. Effective date.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB705 INT FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <ol start="44"><li><span><span><span><a href="http://www.oklegislature.gov/BillInfo.aspx?Bill=SB238&amp;Session=2100"><strong><span>SB707</span></strong></a><strong> </strong><span>By <strong>McCortney </strong>of the Senate and Roe of the House</span></span></span></span></li>
      </ol><p><span><span><span>Schools; setting deadline for presentation of certain certification or certificate of exemption for immunizations; allowing attendance of school during certain period. Effective date. Emergency.</span></span></span></p>

      <p>&nbsp;</p>

      <p><span><span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SB707 INT FI.doc</span></span></span></p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p>&nbsp;</p>

      <p class="text-align-center">&nbsp;</p>

      <p class="text-align-center">&nbsp;</p>

      <p>&nbsp;</p>



      <h2></h2>
      <div class="bWrap bWrap_size_a bWrap_cl_a bWrap_f_a bWrap_gap_a">

      </div>
    </div>
    <section>

    </section>

  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
<?php include 'tpl/blocks/modals/video.inc'; ?>
</body>
</html>
