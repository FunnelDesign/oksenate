
(function ($) {

  Drupal.behaviors.eventsCustom = {
    attach: function (context, settings) {

      $(once('events-holder', '.events-holder', context)).each(function(){

        Drupal.ajax({url: '/events-custom/insert'}).execute();
      });
      $(once('events-holder','.events-home-holder', context)).each(function(){

        Drupal.ajax({url: '/events-custom/insert-home'}).execute();
      });

    }
    //,detach = function(context, settings) {}
  };


})(jQuery);
