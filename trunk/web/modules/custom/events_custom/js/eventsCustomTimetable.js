(function ($, Drupal) {
  Drupal.behaviors.eventsCustomTimetable = {
    attach: function (context, settings) {
      $(once('eventsCustomTimetable', 'body', context)).each(function () {
        controllerEvents.init();
      });
    }
  };
})(jQuery, Drupal);
