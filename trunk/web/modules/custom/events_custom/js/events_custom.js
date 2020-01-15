
(function ($) {

  Drupal.behaviors.eventsCustom = {
    attach: function (context, settings) {

      $('.events-holder', context).once('events-holder').each(function(){

        Drupal.ajax({url: '/events-custom/insert'}).execute();
      });
      $('.events-home-holder', context).once('events-holder').each(function(){

        Drupal.ajax({url: '/events-custom/insert-home'}).execute();
      });

    }
    //,detach = function(context, settings) {}
  };


})(jQuery);
