(function ($, Drupal) {
  Drupal.behaviors.eventsCustomTimetable = {
    attach: function (context, settings) {
      $('body', context).once('eventsCustomTimetable').each(function () {
        controllerEvents.init();
      });
    }
  };
})(jQuery, Drupal);
