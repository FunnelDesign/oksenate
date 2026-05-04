<div class="modal fade modal_newsletter" id="newsletter" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal__dialog modal__dialog_v-centered">
    <div class="modal__content">
      <span class="modal__close" data-dismiss="modal" aria-hidden="true">&times;</span>
      <div class="modal__body">

        <div class="form">
          <div class="pageIn__ico not-selectable">
            <img src="../dist/images/titleIco/title-ico-11.png"
                 srcset="../dist/images/titleIco/title-ico-11-2x.png 2x">
          </div>
          
          <h2>Sign up for our Newsletter</h2>

          <form id="GD-snippet-form"
                action="https://public.govdelivery.com/accounts/OKSENATE/subscribers/qualify"
                accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="m4ks0k1RmE8MHN8GcgS512HfRuaaqNpgXXMyc+pajnroui5iyKXl4fEhEahfGUtTIjhenlW3ux57LtcvSKj+dg==" />
            <fieldset>
              <legend>
                Email Updates
              </legend>
              <div>
                To sign up for updates or to access your subscriber preferences, please enter your contact information below.
              </div>
              <ol class='form'>
                <li>
                  <label for="subscription_type">Subscription Type</label>
                  <div class='input_group'>
                    <select name="subscription_type" id="subscription_type"><option selected="selected" value="email">Email</option>
                      <option value="phone">SMS/Text Message</option></select>
                  </div>

                </li>
                <li class='wireless_fields' style='display: none'>
                  <label for="phone"><img class="required" src="https://content.govdelivery.com/images/required.gif" alt="Required" />Wireless Number</label>
                  <div class='input_group'>
                    <select name="country_code_display" id="country_code_display" disabled="disabled" aria-label="Country code"><option value="1 (US)">1 (US)</option>
                      <option value="1">1</option></select>
                    <input type="hidden" name="country_code" id="country_code" value="1" title="Country code" />

                    <input type="text" name="phone" id="phone" class="medium" title="Wireless Number" />
                  </div>

                </li>
                <li class='email_fields' style='display: block'>
                  <label for="email"><img class="required" src="https://content.govdelivery.com/images/required.gif" alt="Required" />Email Address</label>
                  <input type="text" name="email" id="email" class="long" />

                </li>
              </ol>
              <div class='button_panel'>
                <input type="submit" name="commit" value="Submit" class="sr-button reverse" />
              </div>
            </fieldset>
          </form>

          <div class="form-required-note">
            <span>
              <img class="required" src="https://content.govdelivery.com/images/required.gif" alt="Required">
            </span> Required
          </div>
        </div>

        <script type='text/javascript'>
		      //<![CDATA[
		      var GOVDSNIPPET = function() {
			      var form  = document.getElementById('GD-snippet-form');
			      var typeSelect = form.getElementsByTagName('select')[0];
			      var getStyleType = function(type) {
				      return typeSelect.value === type ? 'block' : 'none';
			      };
			      var toggleType = function() {
				      form.getElementsByTagName('li')[2].style.display = getStyleType('email');
				      form.getElementsByTagName('li')[1].style.display = getStyleType('phone');
			      };
			      if (typeSelect.addEventListener) {
				      typeSelect.addEventListener('change', toggleType);
			      } else if (typeSelect.attachEvent)  {
				      typeSelect.attachEvent('onchange', toggleType);
			      }
		      }();
		      //]]>
        </script>
      </div>    
    </div>
  </div>
</div>