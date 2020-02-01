
/* ======= Model ======= */

var modelEvents = {
  events: []
};


/* ======= Controller ======= */

var controllerEvents = {
  apiUrl: '/events-custom/get-complete-meeting/',
  EVENT_OPENED: -4,
  EVENT_CANCELLED: -3,
  EVENT_END_PENDING: -2,
  EVENT_ENDED: -1,
  EVENT_NOT_STARTED: 0,
  EVENT_STARTED: 1,
  EVENT_PAUSED: 2,
  EVENT_IN_CAMERA: 101,
  EVENT_IN_CAMERA_PAUSED: 102,
  TEST_MODE: false,

  init: function() {
    if (drupalSettings.hasOwnProperty('events_custom')) {
      var eventsTimetable = drupalSettings.events_custom.timetable || {};
      var now = moment.utc();
      var _this = this;

      eventsTimetable.filter(function (event) {
        var eventEnd = moment.utc(event.endUtc);
        return eventEnd > now;
      }).forEach(function (event) {
        var eventStart = moment.utc(event.startUtc);
        var eventEnd = moment.utc(event.endUtc);

        event.status = _this.EVENT_NOT_STARTED;
        event.statusChanged = false;

        if ((eventStart <= now) && (eventEnd >= now)) {
          var url = _this.apiUrl + event.meetingId;
          url = controllerEvents.TEST_MODE ? url + '/test' : url;
          _this.getEventInfo(url, _this.setEventStatus, event);
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
    var _this = this;

    setInterval(function () {
      var now = moment.utc();
      var eventNids = Object.keys(modelEvents.events);

      eventNids.forEach(function (nid) {
        var event = modelEvents.events[nid];
        var eventStart = moment.utc(event.startUtc);
        var eventEnd = moment.utc(event.endUtc);
        var isOnline = _this.checkEventStatusOnline(event);
        var url = _this.apiUrl + event.meetingId;
        url = controllerEvents.TEST_MODE ? url + '/test' : url;

        if ((eventStart <= now) && (eventEnd >= now)) {
          if (!isOnline) {
            _this.getEventInfo(url, _this.setEventStatus, event);
          }
        }
        else if (isOnline) {
          _this.getEventInfo(url, _this.setEventStatus, event);
        }
      });
    }, 10000);
  },

  getEventInfo: function(url, clb, event) {
    if(!clb) {clb = function() {console.warn('Use callback!')}}

    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        return clb(data, event);
      } else {
        console.warn('We reached our target server, but it returned an error');
      }
    };

    request.onerror = function() {
      console.warn('There was a connection error of some sort');
    };

    request.send();
  },

  setEventStatus: function (data, event) {
    var eventStatus = data.EntityStatus || controllerEvents.EVENT_NOT_STARTED;

    if (event.status !== eventStatus) {
      event.status = eventStatus;
      event.statusChanged = true;

      viewEvents.render();
    }
  },

  checkEventStatusOnline: function (event) {
    return (event.status === this.EVENT_STARTED) ||
      (event.status === this.EVENT_PAUSED) ||
      (event.status === this.EVENT_IN_CAMERA) ||
      (event.status === this.EVENT_IN_CAMERA_PAUSED);
  }
};


/* ======= View ======= */

var viewEvents = {

  init: function() {
    this.eventsElem = document.querySelectorAll('a.events_custom_timetable');

    this.render();
  },

  render: function() {
    var events = controllerEvents.getEvents();
    var _this = this;

    this.eventsElem.forEach(function(eventElem) {
      var eventElemNid = eventElem.dataset.nid;
      var event = events[eventElemNid] || {};

      if (event.statusChanged) {
        var isOnline = controllerEvents.checkEventStatusOnline(event);
        if (isOnline) {
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
