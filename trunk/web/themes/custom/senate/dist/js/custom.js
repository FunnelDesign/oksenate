(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.senateCustom = {
    attach: function (context, settings) {
      var senateSettings = settings.senate || {};
      var datesArray = senateSettings.active_dates || [];

      $(once('bef-datepicker', 'input.bef-datepicker', context)).each(function () {
        var options = {
          beforeShowDay: function(date) {
            var dateString = jQuery.datepicker.formatDate('mm/dd/yy', date);
            var checkEmptyDay = datesArray.indexOf(dateString) === -1 ? 'empty-day' : 'event-day';
            return [ true, checkEmptyDay ]
          },
          changeMonth: 'true',
          changeYear: 'true',
        };
        var $altField = $('#edit-datepicker-alt-field');
        if ($altField && $altField[0]) {
          options['altField'] = '#edit-datepicker-alt-field';
          options['altFormat'] = 'MM yy';
        }

        if (typeof $.datepicker !== 'undefined') {
          $(this, context).datepicker(options);
        }
      });

    //   $(once('journals-options','#views-exposed-form-journals-page-1', context)).each(function () {
    //     var yearElm = this.elements.item(0);
    //     var monthElm = this.elements.item(1);
    //     var daysElm = this.elements.item(2);
    //     var options = drupalSettings.senate.view_journals || {};
    //     var _this = this;
    //     var $yearSelect = $('#views-exposed-form-journals-page-1 #edit-year + .select2');
    //     var event = ($yearSelect.css('display') === 'none') ? 'change' : 'select2:select';
    //     var year = yearElm ? yearElm.value : '';
    //
    //     $(yearElm).on(event, function (e) {
    //       year = (event === 'select2:select') ? e.params.data.id : this.value;
    //
    //       var keys = Object.keys(options[year]);
    //       keys.sort(function(a, b){
    //         return parseInt(a) - parseInt(b);
    //       });
    //       monthElm.innerHTML = keys.map(function (key) {
    //         return '<option value="' + key + '">' + options[year][key]['month'] + '</option>';
    //       }).join();
    //
    //       var defaultMonth = keys[0];
    //       var keysDay = Object.keys(options[year][defaultMonth]['days']);
    //       keysDay.sort(function(a, b){
    //         return parseInt(a) - parseInt(b);
    //       });
    //       daysElm.innerHTML = keysDay.map(function (key) {
    //         return '<option value="' + key + '">' + options[year][defaultMonth]['days'][key] + '</option>';
    //       }).join();
    //       daysElm.innerHTML = '<option value="all">Day</option>' + daysElm.innerHTML;
    //
    //       _this.submit();
    //     });
    //
    //     $(monthElm).on(event, function (e) {
    //       var monthValue = (event === 'select2:select') ? e.params.data.id : this.value;
    //
    //       var keys = Object.keys(options[year][monthValue]['days']);
    //       keys.sort(function(a, b){
    //         return parseInt(a) - parseInt(b);
    //       });
    //       daysElm.innerHTML = keys.map(function (key) {
    //         return '<option value="' + key + '">' + options[year][monthValue]['days'][key] + '</option>';
    //       }).join();
    //       daysElm.innerHTML = '<option value="all">Day</option>' + daysElm.innerHTML;
    //       _this.submit();
    //     });
    //
    //     $(daysElm).on(event, function (e) {
    //       _this.submit();
    //     });
    //   });

      $(once('statutes','#views-exposed-form-search-statutes-constitutions-page-1', context)).each(function () {
        var constitutions = this.elements['edit-constitutions'];
        var statutes = this.elements['edit-statutes'];

        constitutions.addEventListener("focus", function () {
          statutes.value = '';
        });

        statutes.addEventListener("focus", function () {
          constitutions.value = '';
        });
      });

      $(once('senators', '#views-exposed-form-senators-page-1', context)).each(function () {
        var formElements = this.elements;
        var formElementsLength = formElements.length;
        var zip = document.querySelector('input[id^="edit-zip"]');
        var zipSubmit = document.querySelector('input[id^="edit-submit-senators"]');

        this.addEventListener('focus', function (event) {
          for (var i = 0; i < formElementsLength; i++) {
            $zip_rule = (zipSubmit === event.target) && (formElements[i] === zip);

            if (formElements[i] !== event.target && formElements[i].type !== "submit" && !$zip_rule) {
              switch (formElements[i].type) {
                case 'text':
                  formElements[i].value = '';
                  break;
                case 'select-one':
                  if (formElements[i].value !== 'All') {
                    formElements[i].value = 'All';
                    $(formElements[i]).trigger('change.select2');
                  }
                  break;
              }
            }
          }
        }, true);
      });

      $(once('votes','[data-drupal-selector="views-exposed-form-senate-votes-inner-block-1"]')).each(function () {
        var formElements = this.elements;
        var formElementsLength = formElements.length;

        this.addEventListener('focus', function (event) {
          for (var i = 0; i < formElementsLength; i++) {

            if (formElements[i] !== event.target && formElements[i].type !== "submit") {
              switch (formElements[i].type) {
                case 'text':
                  formElements[i].value = '';
                  break;
                case 'select-one':
                  if (formElements[i].value) {
                    formElements[i].value = '';
                    $(formElements[i]).trigger('change.select2');
                  }
                  break;
              }
            }
          }
        }, true);
      });

      this.setBackButtonUrl(context);
      this.setSenateCustomCaptcha(context);
    },

    setBackButtonUrl: function (context) {
      var _this = this;
      $(once('backButton','.page-node-type-press-release .section__btnBack', context)).each(function () {
        var backUrl = _this.getQueryParameterByName('back');
        if (backUrl) {
          this.setAttribute("href", backUrl);
        }
      });
    },

    getQueryParameterByName: function (name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    },

    setSenateCustomCaptcha: function (context) {
      var _this = this;
      this.senateCustomCaptcha = document.getElementById('senateCustomCaptcha');
      this.senateCustomCaptchaTextBox = document.getElementById('senateCustomCaptchaTextBox');
      this.senateCustomCaptchaWrapper = document.getElementById('senateCustomCaptchaWrapper');

      $(once('senateCustomCaptcha','.senate-custom-captcha', context)).each(function () {
        _this.createCaptcha();

        this.addEventListener('submit', function (event) {
          event.preventDefault();
          _this.validateCaptcha();
        });
      });
    },

    createCaptcha: function () {
      this.senateCustomCaptcha.innerHTML = "";
      var charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
      var lengthOtp = 6;
      var captcha = [];
      for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length + 1);
        if (captcha.indexOf(charsArray[index]) === -1)
          captcha.push(charsArray[index]);
        else i--;
      }
      var canv = document.createElement("canvas");
      canv.id = "captcha";
      canv.width = 100;
      canv.height = 50;
      var ctx = canv.getContext("2d");
      ctx.font = "25px Georgia";
      ctx.fillText(captcha.join(""), 0, 30);
      this.code = captcha.join("");
      this.senateCustomCaptcha.appendChild(canv);
    },

    validateCaptcha: function () {
      if (this.senateCustomCaptchaTextBox.value === this.code) {
        var element = document.getElementById('senateCustomCaptchaError');
        if (element) {
          element.parentNode.removeChild(element);
        }
        document.querySelector('.senate-custom-captcha').submit();
      }
      else {
        var errorMsg = document.getElementById('senateCustomCaptchaError');
        if (!errorMsg) {
          var error = document.createElement('span');
          error.setAttribute('id', 'senateCustomCaptchaError');
          error.setAttribute('style', 'color:#b3292e');
          error.textContent = 'Invalid Captcha. Try Again.';
          this.senateCustomCaptchaWrapper.appendChild(error);
        }

        this.createCaptcha();
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
/*
// Remove redundant title attributes from Select2 elements (accessibility fix)
(function($) {
  $(document).on('select2:open select2:close', function() {
    $('.select2-selection__rendered[title]').removeAttr('title');
    $('.select2-selection__choice[title]').removeAttr('title');
  });
  
  // Clean up on load as well
  $(window).on('load', function() {
    setTimeout(function() {
      $('.select2-selection__rendered[title]').removeAttr('title');
      $('.select2-selection__choice[title]').removeAttr('title');
    }, 500);
  });
})(jQuery);
*/ 