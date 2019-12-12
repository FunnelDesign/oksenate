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
    }
  };
})(jQuery, Drupal, drupalSettings);
