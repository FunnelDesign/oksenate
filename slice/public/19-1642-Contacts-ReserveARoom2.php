<!DOCTYPE html>
<html>
<?php $title = '19-1642-Education-LegislativeGlossary'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page">
<div class="pageWr">
  <?php include 'tpl/blocks/sHeader.inc'; ?>
  <div class="pageIn">

    <section class="section section_bg-color_f section_inner-v-centered">

      <div class="section__sNav">

        <div class="bContainer">
          <a href="#" class="link link_cl_a link_back">back</a>
          <div class="breadcrumb">
            <a href="#">Contacts</a>
            <span>Reserve a Room</span>
          </div>
          <?php include 'tpl/blocks/bShare.inc'; ?>
        </div>

      </div>

      <div class="section__v-inner section__v-inner_c">
        <div class="bContainer">
          <div class="pageIn__ico">
            <img src="../dist/images/titleIco/title-ico-48.png"
                 srcset="../dist/images/titleIco/title-ico-48-2x.png 2x"
                 alt="">
          </div>

          <div class="bTitle bTitle_wSub_a bTitle_gap_a">
            <h1>Reserve a Room</h1>
          </div>

        </div>
      </div>

    </section>

    <section class="section section_ind_c section_bg-color_c">

      <div class="bContainer">
        <div class="bWrap bWrap_size_a bWrap_f_a bWrap_f_a_16 bWrap_cl_a bWrap_gap_b">
          <div class="bLightSlider bLightSlider_gap_a">

            <div class="bLightSlider__slider">
              <ul class="bLightSlider__slides">
                <?php $SliderThumb = array(
                  array("slider-thumb-img-1.jpg"),
                  array("creek_council_oak_tree.jpg"),
                  array("slider-thumb-img-1.jpg"),
                  array("slider-thumb-img-1.jpg"),
                  array("slider-thumb-img-1.jpg"),
                  array("slider-thumb-img-1.jpg")
                )
                ?>
                <?php foreach($SliderThumb as $key => $element): ?>
                  <li data-thumb="../dist/images/tmp/<?php print $element[0]; ?>">
                    <img src="../dist/images/tmp/<?php print $element[0]; ?>" />
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>

          </div>
        </div>

        <div class="bWrap bWrap_size_a bWrap_f_a bWrap_f_a_16 bWrap_cl_a bWrap_gap_b">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>

        <div class="form fSignUp">

          <div class="fSignUp__desc fSignUp__desc_a">
            <p>Please fill out the form below and we’ll be <br>
              in touch with you regarding your room rental.</p>
          </div>
          <div class="fSignUp__items">
            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <textarea class="form-textarea" placeholder="Meeting title and description"></textarea>
            </div>

            <fieldset class="js-webform-type-fieldset webform-type-fieldset js-form-item form-item js-form-wrapper form-wrapper" data-drupal-selector="edit-date-fieldset" id="edit-date-fieldset">
              <legend>
                <span class="visually-hidden fieldset-legend">date</span>
              </legend>
              <div class="fieldset-wrapper">
                <div class="form-item form-type-text js-form-item form-item js-form-type-datetime form-type-datetime js-form-item-date form-item-date form-no-label">
                  <label class="visually-hidden js-form-required form-required">Start Date</label>
                  <div id="edit-date" class="container-inline">
                    <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-date-date form-item-date-date form-no-label">
                      <label for="edit-date-date" class="visually-hidden js-form-required form-required">Start Date: Date</label>
                      <input min="2020-01-08" data-min-year="2020" placeholder="Start Time" data-drupal-selector="edit-date-date" title="Date (e.g. 2020-01-08)" type="text" data-drupal-date-format="Y-m-d" id="edit-date-date" name="date[date]" value="" size="12" maxlength="128" class="form-text required" required="required" aria-required="true"/>
                    </div>
                    <div class="js-form-item form-item js-form-type-webform-time form-type-webform-time js-form-item-date-time form-item-date-time form-no-label">
                      <label for="edit-date-time" class="visually-hidden js-form-required form-required">Start Date: Time</label>
                      <input min="2020-01-08" placeholder="Start Time" data-drupal-selector="edit-date-time" title="Time (e.g. 04:29:58)" type="time" step="600" data-webform-time-format="H:i" id="edit-date-time" name="date[time]" value="" size="12" maxlength="12" class="form-time webform-time required" required="required" aria-required="true"/>
                    </div>
                  </div>
                </div>
                <div class="form-item form-type-text js-form-item form-item js-form-type-datetime form-type-datetime js-form-item-end-time form-item-end-time form-no-label">
                  <div id="edit-end-time" class="container-inline">
                    <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-end-time-date form-item-end-time-date form-no-label">
                      <label for="edit-end-time-date" class="visually-hidden js-form-required form-required">End Date: Date</label>
                      <input min="2020-01-08" data-min-year="2020" placeholder="End Time" data-drupal-selector="edit-end-time-date" title="Date (e.g. 2020-01-08)" type="text" data-drupal-date-format="Y-m-d" id="edit-end-time-date" name="end_time[date]" value="" size="12" maxlength="128" class="form-text required" required="required" aria-required="true"/>
                    </div>
                    <div class="js-form-item form-item js-form-type-webform-time form-type-webform-time js-form-item-end-time-time form-item-end-time-time form-no-label">
                      <label for="edit-end-time-time" class="visually-hidden js-form-required form-required">End Date: Time</label>
                      <input min="2020-01-08" placeholder="End Time" data-drupal-selector="edit-end-time-time" title="Time (e.g. 04:29:58)" type="time" step="600" data-webform-time-format="H:i" id="edit-end-time-time" name="end_time[time]" value="" size="12" maxlength="12" class="form-time webform-time required" required="required" aria-required="true"/>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <div class="am-row">
              <div class="am-col-sm-6 form-item form-type-text">
                <label class="form-required"></label>
                <input type="text" class="form-text" placeholder="Start Time"/>
              </div>
              <div class="am-col-sm-6 form-item form-type-text">
                <label class="form-required"></label>
                <input type="text" class="form-text" placeholder="End Time"/>
              </div>
            </div>

            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <input type="text" class="form-text" placeholder="Number in Attendance"/>
            </div>
            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <input type="text" class="form-text" placeholder="Your Name"/>
            </div>
            <div class="form-item form-type-text">
              <label class="form-required"></label>
              <input type="text" class="form-text" placeholder="Phone Number"/>
            </div>

            <div class="form-item form-type-text">
              <label></label>
              <textarea class="form-textarea" placeholder="If you have any special needs for the meeting, please lis them here."></textarea>
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
