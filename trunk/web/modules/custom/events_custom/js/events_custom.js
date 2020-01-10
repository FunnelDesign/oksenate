console.log('events init1');
(function ($) {
  console.log('events init');
  Drupal.behaviors.eventsCustom = {
    attach: function (context, settings) {
      console.log('attach');
      $('.events-holder', context).once('events-holder').each(function(){
        console.log('execute');
        Drupal.ajax({url: '/events-custom/insert'}).execute();
      });
      $('.events-home-holder', context).once('events-holder').each(function(){
        console.log('execute');
        Drupal.ajax({url: '/events-custom/insert-home'}).execute();
      });

      //first day of week
      var date = moment().weekday(0).format('YYYYMMDD');

      // $.ajax({
      //   // url: "https://sg001-harmony.sliq.net/00282/Harmony/en/api/Data/GetContentEntityByWeek/" + date + "/-1",
      //   url: "https://sg001-harmony.sliq.net/00282/Harmony/en/api/Data/GetUpcomingEvents?lastModified=20200101223226000",
      //   type: "GET",
      //   dataType: "json",
      //   success: function (data) {
      //     console.log('success');
      //     console.log(data);
      //   },
      //   error: function(){
      //     console.log('error');
      //   }
      // });

      // $.ajax({
      //   url: Drupal.url('altium-progress/get'),
      //   type: 'POST',
      //   data: JSON.stringify(data),
      //   dataType: 'json',
      //   success: function (results) {
      //
      //   }
      // });

    }
    //,detach = function(context, settings) {}
  };


})(jQuery);
