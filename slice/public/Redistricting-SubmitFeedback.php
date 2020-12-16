<!DOCTYPE html>
<html>
<?php $title = 'Redistricting-SubmitFeedback'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_ind_j section_bg-color_c">

      <div class="section__sNav section__sNav_a">

        <div class="bContainer">
          <a href="#" class="link link_cl_b link_back">back</a>
          <div class="breadcrumb breadcrumb_a">
            <a href="#">Redistricting</a>
            <span>Submit Feedback</span>
          </div>
          <?php include 'tpl/blocks/bShare-color-a.inc'; ?>
        </div>

      </div>

      <div class="bContainer">

        <div class="pageIn__ico pageIn__ico_b">
          <img src="../dist/images/titleIco/title-ico-58.png"
               srcset="../dist/images/titleIco/title-ico-58-2x.png 2x"
               alt="">
        </div>
        <div class="bTitle bTitle_wSub_a bTitle_gap_b">
          <h1>Submit Feedback</h1>
        </div>

        <div class="form fSignUp">

          <div class="fSignUp__desc">
            <p>Fill out the form below to give us your feedback.</p>
          </div>
          <div class="fSignUp__items">
            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <input type="text" class="form-text" placeholder="First Name"/>
            </div>
            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <input type="text" class="form-text" placeholder="Last Name"/>
            </div>
            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <input type="text" class="form-text" placeholder="Email Address"/>
            </div>

            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <textarea class="form-textarea" placeholder="Type your message here."></textarea>
            </div>
          </div>
          <div class="captcha">
            <img src="../dist/images/tmp/captcha.jpg" alt="">
          </div>

          <div class="captcha"><input data-drupal-selector="edit-captcha-sid" type="hidden" name="captcha_sid" value="31269">
            <input data-drupal-selector="edit-captcha-token" type="hidden" name="captcha_token" value="f19d80619d3bc41f1b2e5a824b14f5a0">
            <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-captcha-response form-item-captcha-response">
              <label for="edit-captcha-response" class="js-form-required form-required">Math question</label>
              <span class="field-prefix">1 + 2 =</span>
              <input autocomplete="off" data-drupal-selector="edit-captcha-response" aria-describedby="edit-captcha-response--description" type="text" id="edit-captcha-response" name="captcha_response" value="" size="4" maxlength="2" class="form-text required" required="required" aria-required="true">

              <div id="edit-captcha-response--description" class="description">
                Solve this simple math problem and enter the result. E.g. for 1+3, enter 4.
              </div>
            </div>
          </div>

          <div class="form-actions">
            <input type="submit" class="form-submit" value="submit">
            <div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>
          </div>

          <div class="form-required-note">
            <span>*</span> Required
          </div>

          <div class="webform-confirmation__message">
            <p>
              Your form was successfully submitted!
            </p>
          </div>
        </div>

      </div>

    </section>


  </div>
  <?php include 'tpl/blocks/sFooter.inc'; ?>
</div>
</body>
</html>
