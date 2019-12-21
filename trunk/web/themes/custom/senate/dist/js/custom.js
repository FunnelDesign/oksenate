(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.senateCustom = {
    attach: function (context, settings) {
      $('#views-exposed-form-journals-page-1', context).once('journals-options').each(function () {
        var month = this.elements['edit-month'];
        var options = drupalSettings.senate.view_journals || {};
        var _this = this;

        $('#views-exposed-form-journals-page-1 #edit-year').on('select2:select', function (e) {
          var year = e.params.data.id;

          var keys = Object.keys(options[year]);
          month.innerHTML = keys.map(function (key) {
            return `<option value="${key}">${options[year][key]}</option>`;
          }).join();
          _this.submit();
        });

        $('#views-exposed-form-journals-page-1 #edit-month').on('select2:select', function (e) {
          _this.submit();
        });
      });

      $('#views-exposed-form-search-statutes-constitutions-page-1', context).once('statutes').each(function () {
        var constitutions = this.elements['edit-constitutions'];
        var statutes = this.elements['edit-statutes'];

        constitutions.addEventListener("focus", function () {
          statutes.value = '';
        });

        statutes.addEventListener("focus", function () {
          constitutions.value = '';
        });
      });

      $('#views-exposed-form-senators-page-1', context).once('senators').each(function () {
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
    }
  };
})(jQuery, Drupal, drupalSettings);
