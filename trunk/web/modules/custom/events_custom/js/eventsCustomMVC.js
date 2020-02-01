
/* ======= Model ======= */

var modelEvents = {
  EVENT_NOT_STARTED: 0,
  EVENT_STARTED: 1,
  EVENT_ADJOURNED: -1,

  events: []
};


/* ======= Controller ======= */

var controllerEvents = {

  init: function() {
    if (drupalSettings.hasOwnProperty('events_custom')) {
      var eventsTimetable = drupalSettings.events_custom.timetable || {};
      var now = moment.utc();

      eventsTimetable.filter(function (event) {
        var eventEnd = moment.utc(event.endUtc);
        return eventEnd > now;
      }).forEach(function (event) {
        var eventStart = moment.utc(event.startUtc);
        var eventEnd = moment.utc(event.endUtc);

        event.status = modelEvents.EVENT_NOT_STARTED;
        event.statusChanged = false;

        if ((eventStart <= now) && (eventEnd >= now)) {
          event.status = modelEvents.EVENT_STARTED;
          event.statusChanged = true;
        }
        modelEvents.events[event.nid]= event;
      });
    }

    viewEvents.init();
    this.eventLoop();
  },

  getEvents: function() {
    return modelEvents.events;
  },

  eventLoop: function () {
    setInterval(function () {
      var now = moment.utc();
      var eventNids = Object.keys(modelEvents.events);
      var hasChangedEvents = false;

      eventNids.forEach(function (nid) {
        var event = modelEvents.events[nid];
        var eventStart = moment.utc(event.startUtc);
        var eventEnd = moment.utc(event.endUtc);

        if ((eventStart <= now) && (eventEnd >= now)) {
          if (event.status !== modelEvents.EVENT_STARTED) {
            event.status = modelEvents.EVENT_STARTED;
            event.statusChanged = true;
            hasChangedEvents = true;
          }
        }
        else if (event.status === modelEvents.EVENT_STARTED) {
          event.status = modelEvents.EVENT_ADJOURNED;
          event.statusChanged = true;
          hasChangedEvents = true;
        }
      });

      if (hasChangedEvents) {
        viewEvents.render();
      }
    }, 10000);
  }
};


/* ======= View ======= */

var viewEvents = {

  init: function() {
    this.eventsElem = document.querySelectorAll('a.bTiles__btn');

    this.render();
  },

  render: function() {
    var events = controllerEvents.getEvents();
    var _this = this;

    this.eventsElem.forEach(function(eventElem) {
      var eventElemNid = eventElem.dataset.nid;
      var event = events[eventElemNid] || {};

      if (event.statusChanged) {
        if (event.status === modelEvents.EVENT_STARTED) {
          _this.setStarted(eventElem);
        }
        else {
          _this.setFinished(eventElem);
        }
      }
    });
  },

  setStarted: function (eventElem) {
    if (!eventElem.classList.contains('btn_b_live')) {
      eventElem.classList.add('btn_b_live');
      var newSpan = document.createElement("span");
      newSpan.innerHTML = '<span>•</span> live now';
      eventElem.prepend(newSpan);
    }
  },

  setFinished: function (eventElem) {
    if (eventElem.classList.contains('btn_b_live')) {
      eventElem.classList.remove('btn_b_live');

      if (eventElem.hasChildNodes()) {
        eventElem.removeChild(eventElem.childNodes[0]);
      }
    }
  }
};
