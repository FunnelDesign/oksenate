<!DOCTYPE html>
<html>
<?php $title = 'authorization'; ?>
<?php include 'tpl/includes/head.inc'; ?>
<body class="page page-authorization path-user">
<div class="pageWr">

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

                <div class="sFinder__ico">
                  <img src="../dist/images/tmp/auth.svg" alt="">
                </div>
                <h3>Authorization</h3>
                <div class="form f-authorization">
                  <div id="block-senate-content">


                    <form class="user-login-form" data-drupal-selector="user-login-form" action="/user/login" method="post" id="user-login-form" accept-charset="UTF-8">
                      <div class="js-form-item form-item js-form-type-textfield form-type-textfield js-form-item-name form-item-name">
                        <label for="edit-name" class="js-form-required form-required">Username</label>
                        <input autocorrect="none" autocapitalize="none" spellcheck="false" autofocus="autofocus" data-drupal-selector="edit-name" aria-describedby="edit-name--description" type="text" id="edit-name" name="name" value="" size="60" maxlength="60" class="form-text required" required="required" aria-required="true">

                        <div id="edit-name--description" class="description">
                          Enter your Oklahoma Senate username.
                        </div>
                      </div>
                      <div class="js-form-item form-item js-form-type-password form-type-password js-form-item-pass form-item-pass">
                        <label for="edit-pass" class="js-form-required form-required">Password</label>
                        <input data-drupal-selector="edit-pass" aria-describedby="edit-pass--description" type="password" id="edit-pass" name="pass" size="60" maxlength="128" class="form-text required" required="required" aria-required="true">

                        <div id="edit-pass--description" class="description">
                          Enter the password that accompanies your username.
                        </div>
                      </div>
                      <input autocomplete="off" data-drupal-selector="form-rwmxjpyy-ns3s7mqm-gk2zy-yqsrax4ycpqdxewf7y" type="hidden" name="form_build_id" value="form-RWMxJpYy_NS3S7MQm-gk2Zy_-yQSrAX4YcPQdXewf7Y">
                      <input data-drupal-selector="edit-user-login-form" type="hidden" name="form_id" value="user_login_form">
                      <div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions"><input class="testtest button js-form-submit form-submit" data-drupal-selector="edit-submit" type="submit" id="edit-submit" name="op" value="Log in">
                      </div>

                    </form>

                  </div>


                </div>
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

</div>
</body>
</html>
