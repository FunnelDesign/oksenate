/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/drupal-styles.scss":
/*!***************************************!*\
  !*** ./src/common/drupal-styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/fonts.scss":
/*!*******************************!*\
  !*** ./src/common/fonts.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/global.scss":
/*!********************************!*\
  !*** ./src/common/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/grid.scss":
/*!******************************!*\
  !*** ./src/common/grid.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/helpers.scss":
/*!*********************************!*\
  !*** ./src/common/helpers.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/normalize.scss":
/*!***********************************!*\
  !*** ./src/common/normalize.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/ss-glyphish-filled.scss":
/*!********************************************!*\
  !*** ./src/common/ss-glyphish-filled.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/ss-glyphish-outlined.scss":
/*!**********************************************!*\
  !*** ./src/common/ss-glyphish-outlined.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/common/ss-social.scss":
/*!***********************************!*\
  !*** ./src/common/ss-social.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Observer/CustomEv.js":
/*!*********************************************!*\
  !*** ./src/components/Observer/CustomEv.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var $ = jQuery;
var CustomEv = /*#__PURE__*/function () {
  function CustomEv() {
    _classCallCheck(this, CustomEv);
    this.customClick();
  }
  return _createClass(CustomEv, [{
    key: "customClick",
    value: function customClick() {
      addListenerForSenatorFilter();
      $(document).ajaxComplete(function (event, xhr, settings) {
        var _settings$data;
        if (~((_settings$data = settings.data) === null || _settings$data === void 0 ? void 0 : _settings$data.indexOf('view_name=senators'))) {
          addListenerForSenatorFilter();
        }
      });
      $(document).on('click touch', function (e) {
        var $ev = $(e.target);
        if (!$ev.closest('.bDrop').length) {
          $('.bDrop').removeClass('select2-container--open');
        }
        if ($ev.closest('.hashLink').length || $ev.hasClass("hashLink")) {
          var $body = $('body, html');
          var prefix = "l-";
          var speed = 600;
          var val = $ev.closest('.hashLink').attr('href').replace('#' + prefix, '');
          var $target = $('#' + val);
          if (!$target.length) return;
          window.location.hash = prefix + val;
          var adminMenu = parseInt($("body").css('padding-top'));
          var headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;
          $body.animate({
            scrollTop: $target.offset().top - 10 - headerHeight - adminMenu
          }, speed);
        }
      });
      function addListenerForSenatorFilter() {
        $('#views-exposed-form-senators-page-1 .form-submit').on('click touch', function () {
          $('.sSen .sSen__res').addClass('sSen__res_loading');
        });
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (CustomEv);

/***/ }),

/***/ "./src/components/Observer/Observer.js":
/*!*********************************************!*\
  !*** ./src/components/Observer/Observer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CustomEv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CustomEv */ "./src/components/Observer/CustomEv.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.Observer = /*#__PURE__*/function () {
  function _class() {
    _classCallCheck(this, _class);
    this.init();
  }
  return _createClass(_class, [{
    key: "init",
    value: function init() {
      var _this = this;
      $(document).on('click touch', function (e) {
        var event = e.target.dataset.ev;
        if (!event) return;
        var events = {
          evs: e.target.dataset.ev.split(';'),
          items: []
        };
        events.evs.forEach(function (evItem, i) {
          var _evItem$split = evItem.split(':'),
            _evItem$split2 = _slicedToArray(_evItem$split, 3),
            ev = _evItem$split2[0],
            sel = _evItem$split2[1],
            clName = _evItem$split2[2];
          events.items[i] = {
            ev: ev,
            sel: sel,
            clName: clName
          };
        });
        events.items.forEach(function (_ref) {
          var ev = _ref.ev,
            sel = _ref.sel,
            clName = _ref.clName;
          if (!sel || !_this[ev]) return;
          e.preventDefault();
          _this[ev]($(e.target), sel, clName, ev);
        });
      });
      new _CustomEv__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
  }, {
    key: "hide",
    value: function hide($target, sel, clName, ev) {
      $target.closest(".".concat(sel)).hide().trigger("ev.".concat(ev));
    }
  }, {
    key: "toggleClass",
    value: function toggleClass($target, sel, clName, ev) {
      $target.closest(".".concat(sel)).toggleClass("".concat(sel, "_").concat(clName)).trigger("ev.".concat(ev, ".").concat(clName));
    }
  }, {
    key: "toggleCustomClass",
    value: function toggleCustomClass($target, sel, clName, ev) {
      $target.closest(".".concat(sel)).toggleClass("".concat(clName)).trigger("ev.".concat(ev, ".").concat(clName));
    }
  }, {
    key: "removeClass",
    value: function removeClass($target, sel, clName, ev) {
      $target.closest(".".concat(sel)).removeClass("".concat(sel, "_").concat(clName)).trigger("ev.".concat(ev, ".").concat(clName));
    }
  }, {
    key: "toggle",
    value: function toggle($target, sel) {
      $(".".concat(sel)).toggle();
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (Observer);

/***/ }),

/***/ "./src/components/accessibility/accessibility.scss":
/*!*********************************************************!*\
  !*** ./src/components/accessibility/accessibility.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/accessibility/initAccessibilityWidgetA11y.js":
/*!*********************************************************************!*\
  !*** ./src/components/accessibility/initAccessibilityWidgetA11y.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initAccessibilityWidgetA11y; });
var A11Y_TOGGLE_SELECTOR = 'button#accessibility_settings_toggle';
var ICON_SELECTOR = '.accessibility_settings_toggle_icon';
function updateAccessibilityTriggerA11y(triggerButton) {
  if (!triggerButton) {
    return;
  }

  // Reason: The icon is decorative; the button itself needs the spoken label.
  if (!triggerButton.getAttribute('aria-label')) {
    triggerButton.setAttribute('aria-label', 'Accessibility settings');
  }
  var triggerIcon = triggerButton.querySelector(ICON_SELECTOR);
  if (triggerIcon) {
    triggerIcon.setAttribute('alt', '');
    triggerIcon.setAttribute('aria-hidden', 'true');
  }
}
function initAccessibilityWidgetA11y() {
  var triggerButton = document.querySelector(A11Y_TOGGLE_SELECTOR);
  updateAccessibilityTriggerA11y(triggerButton);

  // Reason: Third-party widget can re-render the trigger after initial page load.
  if (!document.body.dataset.senateAccessibilityObserver) {
    var observer = new MutationObserver(function () {
      var updatedTriggerButton = document.querySelector(A11Y_TOGGLE_SELECTOR);
      updateAccessibilityTriggerA11y(updatedTriggerButton);
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    document.body.dataset.senateAccessibilityObserver = 'true';
  }
}

/***/ }),

/***/ "./src/components/b-agenda/b-agenda.scss":
/*!***********************************************!*\
  !*** ./src/components/b-agenda/b-agenda.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/b-district-maps/b-district-maps.scss":
/*!*************************************************************!*\
  !*** ./src/components/b-district-maps/b-district-maps.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bAbout/bAbout.scss":
/*!*******************************************!*\
  !*** ./src/components/bAbout/bAbout.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bAudio/bAudio.scss":
/*!*******************************************!*\
  !*** ./src/components/bAudio/bAudio.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bCols/bCols.scss":
/*!*****************************************!*\
  !*** ./src/components/bCols/bCols.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bColumns/bColumns.scss":
/*!***********************************************!*\
  !*** ./src/components/bColumns/bColumns.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bContainer/bContainer.scss":
/*!***************************************************!*\
  !*** ./src/components/bContainer/bContainer.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bDateList/bDateList.scss":
/*!*************************************************!*\
  !*** ./src/components/bDateList/bDateList.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bDistrict/bDistrict.scss":
/*!*************************************************!*\
  !*** ./src/components/bDistrict/bDistrict.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bDrop/bDrop.scss":
/*!*****************************************!*\
  !*** ./src/components/bDrop/bDrop.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bEvent/bEvent.js":
/*!*****************************************!*\
  !*** ./src/components/bEvent/bEvent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.bEvent = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "bEvent";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var $slider = $elm.find(".".concat(this.name, "__slider-items"));
      var $slider__slide_nav = $elm.find(".".concat(this.name, "__slider-nav"));
      $slider.on('init', function (event, slick) {
        $(event.currentTarget).find('.slick-slide[aria-describedby]').removeAttr('aria-describedby');
      });
      $slider.slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        accessibility: true,
        dots: true,
        appendDots: $slider__slide_nav,
        arrows: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 15000,
        swipe: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "ease",
        responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            swipe: true,
            autoplay: false,
            infinite: false,
            slidesToShow: 1
          }
        }]
      });
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (bEvent);

/***/ }),

/***/ "./src/components/bEvent/bEvent.scss":
/*!*******************************************!*\
  !*** ./src/components/bEvent/bEvent.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bEvents/bEvents.js":
/*!*******************************************!*\
  !*** ./src/components/bEvents/bEvents.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.bEvents = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "bEvents";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var _this2 = this;
      var $modal = $("#modal-video");
      if (!$modal.length) return;
      var iframe = $modal.find("iframe");
      $elm.on('click touch', ".".concat(this.name, "__imgWrap, .").concat(this.name, "__readMore"), function (e) {
        var videoId = $(e.target).closest(".".concat(_this2.name, "__item")).attr('data-videoId');
        if (!videoId) return;
        e.preventDefault();
        iframe.attr("id", videoId);
        iframe.attr("src", "https://www.youtube.com/embed/".concat(videoId, "?rel=0&amp;controls=1&amp;showinfo=0&amp;enablejsapi=1"));
        $modal.modal("show");
        window.playerVideoModal = '';
        onYouTubeIframeAPIReady();
        function onYouTubeIframeAPIReady() {
          window.playerVideoModal = new YT.Player(videoId, {
            videoId: videoId,
            events: {
              'onReady': onPlayerReady
            }
          });
        }
        function onPlayerReady(event) {
          event.target.playVideo();
        }
      });
      $modal.on('hide.bs.modal', function () {
        iframe.attr("id", '');
        iframe.attr("src", "");
        window.player = '';
      });
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (bEvents);

/***/ }),

/***/ "./src/components/bEvents/bEvents.scss":
/*!*********************************************!*\
  !*** ./src/components/bEvents/bEvents.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bHide/bHide.scss":
/*!*****************************************!*\
  !*** ./src/components/bHide/bHide.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bHist/bHist.scss":
/*!*****************************************!*\
  !*** ./src/components/bHist/bHist.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bIsPapers/bIsPapers.scss":
/*!*************************************************!*\
  !*** ./src/components/bIsPapers/bIsPapers.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bLightSlider/lightSlider.js":
/*!****************************************************!*\
  !*** ./src/components/bLightSlider/lightSlider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.lightSlider = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "bLightSlider";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var $slider = $elm.find(".".concat(this.name, "__slides"));
      if (!$slider.length) return;
      $slider.lightSlider({
        gallery: true,
        item: 1,
        adaptiveHeight: true,
        vThumbWidth: 118,
        thumbItem: 5,
        thumbMargin: 4,
        slideMargin: 0,
        responsive: [{
          breakpoint: 768,
          settings: {
            thumbItem: 4
          }
        }, {
          breakpoint: 450,
          settings: {
            thumbItem: 3
          }
        }]
      });
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (lightSlider);

/***/ }),

/***/ "./src/components/bLightSlider/lightSlider.scss":
/*!******************************************************!*\
  !*** ./src/components/bLightSlider/lightSlider.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bList/bList.scss":
/*!*****************************************!*\
  !*** ./src/components/bList/bList.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bListInline/bListInline.scss":
/*!*****************************************************!*\
  !*** ./src/components/bListInline/bListInline.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bListItems/bListItems.scss":
/*!***************************************************!*\
  !*** ./src/components/bListItems/bListItems.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bListLinks/bListLinks.scss":
/*!***************************************************!*\
  !*** ./src/components/bListLinks/bListLinks.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bMedia/bMedia.scss":
/*!*******************************************!*\
  !*** ./src/components/bMedia/bMedia.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bMedia/video.js":
/*!****************************************!*\
  !*** ./src/components/bMedia/video.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var $ = jQuery;
var pluginName = 'bMedia';
var VideoPlay = /*#__PURE__*/function () {
  function VideoPlay(elm, options) {
    _classCallCheck(this, VideoPlay);
    this.elm = elm;
    this.config = Object.assign({
      //options here
    }, options);
    this.processed = false;
    if (!this.processed) {
      this.init();
    }
  }
  return _createClass(VideoPlay, [{
    key: "init",
    value: function init() {
      this.processed = !this.processed;
      var $Wrap = $(this.elm);
      var $playBtn = $Wrap.find('.bMedia__play-btn');
      if (!$playBtn.length) return;
      $playBtn.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var target = $this.attr('href');
        if (!target) return;
        var $video = $Wrap.find(target);
        $Wrap.addClass('bMedia_active');
        if ($video.length) {
          toggleVideo($video[0], 'playVideo');
        }
      });
      function toggleVideo(video, state) {
        var func = state == 'pause' ? 'pauseVideo' : 'playVideo';
        var iframe = video.contentWindow;
        iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
      }
    }
  }]);
}();
window.BlockVideo = function (item, options) {
  var videoBlocks = document.querySelectorAll('.' + pluginName);
  if (videoBlocks.length) {
    videoBlocks = $(videoBlocks);
    if (!$('#iframe-youtube-api').length) {
      var tag = document.createElement('script');
      tag.id = 'iframe-youtube-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    var dataRedirectUrl = 'data-redirect-url';
    var videoBlocksClass = '.' + pluginName;
    if (window.initOnYouTubeIframeAPIReady) {
      var reOpenPreview = videoBlocks.has('.bMedia__play-btn').not('[' + dataRedirectUrl + ']');
      $(reOpenPreview).each(function (index) {
        var reOpenPreviewoId = $(this).find('iframe').attr('id');
        if (!reOpenPreviewoId) return;
        window['player-' + index + '-' + reOpenPreviewoId] = new YT.Player(reOpenPreviewoId, {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChangeReOpen
          }
        });
      });
    } else {
      window.onYouTubeIframeAPIReady = function () {
        window.initOnYouTubeIframeAPIReady = true;
        var reOpenPreview = videoBlocks.has('.bMedia__play-btn').not('[' + dataRedirectUrl + ']');
        var redirectVideo = videoBlocks.filter('[' + dataRedirectUrl + ']');
        $(redirectVideo).each(function (index) {
          var redirectVideoId = $(this).find('iframe').attr('id');
          if (!redirectVideoId) return;
          window['player-' + index + '-' + redirectVideoId] = new YT.Player(redirectVideoId, {
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChangeForRedirect
            }
          });
        });
        $(reOpenPreview).each(function (index) {
          var reOpenPreviewoId = $(this).find('iframe').attr('id');
          if (!reOpenPreviewoId) return;
          window['player-' + index + '-' + reOpenPreviewoId] = new YT.Player(reOpenPreviewoId, {
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChangeReOpen
            }
          });
        });
      };
    }
    window.onPlayerReady = function (event) {
      var $videoWrap = $(event.target.a).closest(videoBlocksClass);
      if ($videoWrap.hasClass('bMedia_active')) {
        event.target.playVideo();
      }
    };
    window.onPlayerStateChangeReOpen = function (event) {
      if (event.data !== 0) return;
      var $videoWrap = $(event.target.a).closest(videoBlocksClass);
      if (!$videoWrap.length) return;
      $videoWrap.removeClass('bMedia_active');
    };
    window.onPlayerStateChangeForRedirect = function (event) {
      if (event.data !== 0) return;
      var $videoWrap = $(event.target.a).closest(videoBlocksClass);
      if (!$videoWrap.length) return;
      $videoWrap.addClass('bMedia_end');
      var urlRedirect = $videoWrap.attr(dataRedirectUrl);
      console.log($videoWrap);
      if (urlRedirect) {
        window.location.replace(urlRedirect);
      }
    };
  }
  document.querySelectorAll('.' + (item || pluginName)).forEach(function (item) {
    if (!item.classList.contains(pluginName + '_processed')) {
      item.classList.add(pluginName + '_processed');
      new VideoPlay(item, options);
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (BlockVideo);

/***/ }),

/***/ "./src/components/bMembership/bMembership.scss":
/*!*****************************************************!*\
  !*** ./src/components/bMembership/bMembership.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bMessage/bMessage.scss":
/*!***********************************************!*\
  !*** ./src/components/bMessage/bMessage.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bNews/bNews.scss":
/*!*****************************************!*\
  !*** ./src/components/bNews/bNews.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bOverview/bOverview.scss":
/*!*************************************************!*\
  !*** ./src/components/bOverview/bOverview.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bPageNav/bPageNav.scss":
/*!***********************************************!*\
  !*** ./src/components/bPageNav/bPageNav.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bPost/bPost.scss":
/*!*****************************************!*\
  !*** ./src/components/bPost/bPost.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bPostList/bPostList.scss":
/*!*************************************************!*\
  !*** ./src/components/bPostList/bPostList.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSchedule/bSchedule.scss":
/*!*************************************************!*\
  !*** ./src/components/bSchedule/bSchedule.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSeats/bSeats.scss":
/*!*******************************************!*\
  !*** ./src/components/bSeats/bSeats.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSelect/bSelect.scss":
/*!*********************************************!*\
  !*** ./src/components/bSelect/bSelect.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSenBio/bSenBio.scss":
/*!*********************************************!*\
  !*** ./src/components/bSenBio/bSenBio.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bShare/bShare.scss":
/*!*******************************************!*\
  !*** ./src/components/bShare/bShare.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSidebar/bSidebar.scss":
/*!***********************************************!*\
  !*** ./src/components/bSidebar/bSidebar.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSoc/bSoc.scss":
/*!***************************************!*\
  !*** ./src/components/bSoc/bSoc.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSort/bSort.js":
/*!***************************************!*\
  !*** ./src/components/bSort/bSort.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.bSort = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "bSort";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var _this2 = this;
      $elm.on('click touch', ".".concat(this.name, "__title"), function (e) {
        e.preventDefault();
        console.log(_this2);
        var $this = $(e.target);
        var $item = $this.closest(".".concat(_this2.name, "__item"));
        if (!$item.length) return;
        $item.toggleClass("".concat(_this2.name, "_open"));
        $item.find(".".concat(_this2.name, "__body")).slideToggle();
      });
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (bSort);

/***/ }),

/***/ "./src/components/bSort/bSort.scss":
/*!*****************************************!*\
  !*** ./src/components/bSort/bSort.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bStaff/bStaff.js":
/*!*****************************************!*\
  !*** ./src/components/bStaff/bStaff.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.bStaff = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "bStaff";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var _this2 = this;
      var prefix = 'letter-';
      var compName = "".concat(this.name);
      var $letters = $elm.find(".".concat(this.name, "__filLetters a"));
      var $items = $elm.find(".".concat(this.name, "__it"));
      $letters.each(function (i, item) {
        var letter = $(item).attr('href').replace('#' + prefix, '');
        var $target = $items.filter(function (i, term) {
          return $(term).attr('data-letter') === letter;
        });
        if (!$target.length) {
          $(item).addClass("".concat(_this2.name, "__let_disabled"));
        }
      });
      $elm.on('click touch', ".".concat(this.name, "__filLetters a"), function (e) {
        e.preventDefault();
        var $curLetter = $(e.target);
        var letter = $curLetter.attr('href').replace('#' + prefix, '');
        showItems(letter, $curLetter);
      });
      function showItems(letter, $curLetter) {
        var $target = $items.filter(function (i, term) {
          return $(term).attr('data-letter') === letter;
        });
        $letters.removeClass("".concat(compName, "__let_active"));
        $items.removeClass("".concat(compName, "__it_active"));
        $items.removeClass("bTb__tr_last");
        $items.removeClass("bTb__tr_first");
        $elm.addClass("".concat(compName, "_filter"));
        $target.addClass("".concat(compName, "__it_active"));
        $($target[0]).addClass("bTb__tr_first");
        $($target[$target.length - 1]).addClass("bTb__tr_last");
        $curLetter.addClass("".concat(compName, "__let_active"));
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (bStaff);

/***/ }),

/***/ "./src/components/bStaff/bStaff.scss":
/*!*******************************************!*\
  !*** ./src/components/bStaff/bStaff.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bSubNav/bSubNav.scss":
/*!*********************************************!*\
  !*** ./src/components/bSubNav/bSubNav.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bTable/bTable.scss":
/*!*******************************************!*\
  !*** ./src/components/bTable/bTable.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bTb/bTb.scss":
/*!*************************************!*\
  !*** ./src/components/bTb/bTb.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bTerms/bTerms.js":
/*!*****************************************!*\
  !*** ./src/components/bTerms/bTerms.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.bTerms = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "bTerms";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var _this2 = this;
      var prefix = 'letter-';
      var prefixContent = 'item-';
      var compName = "".concat(this.name);
      var $letters = $elm.find(".".concat(this.name, "__filLetters a"));
      var $items = $elm.find(".".concat(this.name, "__it"));
      var $more = $elm.find(".".concat(this.name, "__more"));
      $letters.each(function (i, item) {
        var letter = $(item).attr('href').replace('#' + prefix, '');
        var $target = $items.filter(function (i, term) {
          return $(term).attr('data-letter') === letter;
        });
        if (!$target.length) {
          $(item).addClass("".concat(_this2.name, "__let_disabled"));
        }
      });
      $elm.on('click touch', ".".concat(this.name, "__filLetters a"), function (e) {
        e.preventDefault();
        var $curLetter = $(e.target);
        var letter = $curLetter.attr('href').replace('#' + prefix, '');
        showItems(letter, $curLetter);
      });
      $more.on('click touch', function (e) {
        e.preventDefault();
        $elm.toggleClass("".concat(_this2.name, "_open"));
      });
      showItems('a', $elm.find(".".concat(this.name, "__filLetters a[href=\"#letter-a\"]")));
      function showItems(letter, $curLetter) {
        var $target = $items.filter(function (i, term) {
          return $(term).attr('data-letter') === letter;
        });
        $letters.removeClass("".concat(compName, "__let_active"));
        $items.removeClass("".concat(compName, "__it_active"));
        $items.removeClass("".concat(compName, "__it_active_show"));
        $elm.removeClass("".concat(compName, "_showMore"));
        $elm.removeClass("".concat(compName, "_open"));
        $target.addClass("".concat(compName, "__it_active"));
        $target.slice(0, 10).addClass("".concat(compName, "__it_active_show"));
        $curLetter.addClass("".concat(compName, "__let_active"));
        if ($target.length > 10) {
          $elm.addClass("".concat(compName, "_showMore"));
        }
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (bTerms);

/***/ }),

/***/ "./src/components/bTerms/bTerms.scss":
/*!*******************************************!*\
  !*** ./src/components/bTerms/bTerms.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bTiles/bTiles.scss":
/*!*******************************************!*\
  !*** ./src/components/bTiles/bTiles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bTitle/bTitle.scss":
/*!*******************************************!*\
  !*** ./src/components/bTitle/bTitle.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bVideoGallery/bVideoGallery.scss":
/*!*********************************************************!*\
  !*** ./src/components/bVideoGallery/bVideoGallery.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/bWrap/bWrap.scss":
/*!*****************************************!*\
  !*** ./src/components/bWrap/bWrap.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/breadcrumb/breadcrumb.scss":
/*!***************************************************!*\
  !*** ./src/components/breadcrumb/breadcrumb.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/btn/btn.scss":
/*!*************************************!*\
  !*** ./src/components/btn/btn.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/form/f-search.scss":
/*!*******************************************!*\
  !*** ./src/components/form/f-search.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/form/fSignUp.scss":
/*!******************************************!*\
  !*** ./src/components/form/fSignUp.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/form/form.scss":
/*!***************************************!*\
  !*** ./src/components/form/form.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/form/search-form.scss":
/*!**********************************************!*\
  !*** ./src/components/form/search-form.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/govdeliveryOverlay/govdeliveryOverlay.scss":
/*!*******************************************************************!*\
  !*** ./src/components/govdeliveryOverlay/govdeliveryOverlay.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/helper.js":
/*!**********************************!*\
  !*** ./src/components/helper.js ***!
  \**********************************/
/*! exports provided: checkInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInit", function() { return checkInit; });
var checkInit = function checkInit(selector, name, init) {
  var nodes = document.querySelectorAll("".concat(selector));
  Array.prototype.forEach.call(nodes, function (item) {
    if (!item.classList.contains("".concat(name, "_processed"))) {
      item.classList.add("".concat(name, "_processed"));
      init(item);
    }
  });
};

/***/ }),

/***/ "./src/components/link/link.scss":
/*!***************************************!*\
  !*** ./src/components/link/link.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/logo/logo.scss":
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.Modal = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "modal";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var _this2 = this;
      this.checkHash();
      $(window).on('hashchange', function () {
        _this2.checkHash();
      });
      $.support.transition = false;
      $($elm).on('hide.bs.modal', function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        window.location.hash = '';
        $('html, body').scrollTop(scrollTop);
      });
    }
  }, {
    key: "checkHash",
    value: function checkHash() {
      var $el = $(window.location.hash);
      if ($el.length && $el.hasClass('modal')) {
        $el.modal('show');
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/components/modal/modal.scss":
/*!*****************************************!*\
  !*** ./src/components/modal/modal.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/navLinks/navLinks.scss":
/*!***********************************************!*\
  !*** ./src/components/navLinks/navLinks.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/navSelect/navSelect.js":
/*!***********************************************!*\
  !*** ./src/components/navSelect/navSelect.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.navSelect = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "navSelect";
    this.selector = props.selector || ".".concat(this.name);
    this.prefix = props.prefix || "year-";
    this.prefixContent = props.prefixContent || "overview-";
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var $select = $elm.find("select");
      if (!$select.length) return;
      var $body = $('body, html');
      var prefix = "".concat(this.prefix);
      var prefixContent = "".concat(this.prefixContent);
      var speed = 600;
      if (window.location.hash && ~window.location.hash.indexOf('#' + prefix)) {
        animation(window.location.hash.replace('#' + prefix, ''));
      }
      $select.on('change', function () {
        animation($(this).val());
      });
      function animation(val) {
        var $target = $('#' + prefixContent + val);
        if (!$target.length) return;
        window.location.hash = prefix + val;
        var adminMenu = parseInt($("body").css('padding-top'));
        var headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;
        $body.animate({
          scrollTop: $target.offset().top - 10 - headerHeight - adminMenu
        }, speed);
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (navSelect);

/***/ }),

/***/ "./src/components/pMain/pMain.scss":
/*!*****************************************!*\
  !*** ./src/components/pMain/pMain.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pageIn/pageIn.scss":
/*!*******************************************!*\
  !*** ./src/components/pageIn/pageIn.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pageWr/pageWr.scss":
/*!*******************************************!*\
  !*** ./src/components/pageWr/pageWr.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/pager/pager.scss":
/*!*****************************************!*\
  !*** ./src/components/pager/pager.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/print/print.scss":
/*!*****************************************!*\
  !*** ./src/components/print/print.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/s404/s404.scss":
/*!***************************************!*\
  !*** ./src/components/s404/s404.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sFinder/sFinder.scss":
/*!*********************************************!*\
  !*** ./src/components/sFinder/sFinder.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sFooter/sFooter.scss":
/*!*********************************************!*\
  !*** ./src/components/sFooter/sFooter.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sHeader/sHeader.js":
/*!*******************************************!*\
  !*** ./src/components/sHeader/sHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.sHeader = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "sHeader";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var _this2 = this;
      var componentName = this.name;
      var $searchToggleButton = $elm.find(".".concat(this.name, "__searchBtn"));
      var $searchFormWrapper = $elm.find(".".concat(this.name, "__searchForm"));
      var isSearchInitiallyExpanded = $elm.hasClass("".concat(this.name, "_searchOpen"));

      // Reason: Keep ARIA and focusability in sync without breaking CSS transform animation.
      var syncSearchAccessibilityState = function syncSearchAccessibilityState($targetSearchFormWrapper, isExpanded) {
        $searchToggleButton.attr('aria-expanded', isExpanded ? 'true' : 'false');
        $targetSearchFormWrapper.attr('aria-hidden', isExpanded ? 'false' : 'true');
        if (isExpanded) {
          $targetSearchFormWrapper.removeAttr('inert');
          return;
        }
        $targetSearchFormWrapper.attr('inert', 'inert');
      };
      var collapseSearchForm = function collapseSearchForm() {
        var $targetSearchFormWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $searchFormWrapper;
        $elm.removeClass("".concat(_this2.name, "_searchOpen"));
        syncSearchAccessibilityState($targetSearchFormWrapper, false);
      };
      syncSearchAccessibilityState($searchFormWrapper, isSearchInitiallyExpanded);
      $elm.on('click touch', ".".concat(this.name, "__btn-mobile"), function (e) {
        e.preventDefault();
        $elm.toggleClass("".concat(_this2.name, "_mobileMenu"));
        $('body').toggleClass("mobileMenu-open");
        collapseSearchForm($searchFormWrapper);
        var isExpanded = $elm.hasClass("".concat(_this2.name, "_mobileMenu"));
        $(e.currentTarget).attr('aria-expanded', isExpanded ? 'true' : 'false');
        //adding Aria attribute to reflect either menu expanded or collapsed
      });
      $elm.on('click touch', ".".concat(this.name, "__searchBtn"), function (e) {
        e.preventDefault();
        $elm.toggleClass("".concat(_this2.name, "_searchOpen"));
        $elm.removeClass("".concat(_this2.name, "_mobileMenu"));
        $('body').removeClass("mobileMenu-open");
        var isExpanded = $elm.hasClass("".concat(_this2.name, "_searchOpen"));
        var $clickedSearchFormWrapper = $(e.currentTarget).siblings(".".concat(_this2.name, "__searchForm")).first();
        var $targetSearchFormWrapper = $clickedSearchFormWrapper.length ? $clickedSearchFormWrapper : $searchFormWrapper;
        syncSearchAccessibilityState($targetSearchFormWrapper, isExpanded);
        window.requestAnimationFrame(function () {
          var isExpandedAfterAllHandlers = $elm.hasClass("".concat(_this2.name, "_searchOpen"));
          syncSearchAccessibilityState($targetSearchFormWrapper, isExpandedAfterAllHandlers);
        });
        //adding Aria attribute to reflect whether the Search form is expanded or collapsed
        $elm.find(".".concat(_this2.name, "__btn-mobile")).attr('aria-expanded', 'false');
        if (isExpanded) {
          $elm.find('.f-search input.form-search').focus();
        }
      });
      $(document).on('focusin', ".bShare.section__bShare button, .bShare.section__bShare a, .bShare.section__bShare [role=\"button\"]", function () {
        if (!$elm.hasClass("".concat(_this2.name, "_searchOpen"))) return;
        // Reason: Keep focused share buttons visible when keyboard users move behind the search overlay.
        collapseSearchForm($searchFormWrapper);
      });
      addPadding();
      addAccessibilityCookie();
      $(window).on('resize', function () {
        addPadding();
      });
      $elm.on('click touch', ".bMessage__close", function () {
        addPadding();
      });
      initKeyboardNavigation();
      $(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
        $elm.css('top', offsets.top);
      });
      function initKeyboardNavigation() {
        var topLevelExpandedSelector = ".".concat(componentName, "__menu-wrap > ul.menu > li.menu-item--expanded");
        var keyboardOpenClass = "hover";
        $elm.find(topLevelExpandedSelector).each(function (_, listItemElement) {
          var $listItem = $(listItemElement);
          var $submenu = $listItem.children("ul.menu").first();
          var $trigger = $listItem.children("a, span").first();
          if (!$submenu.length || !$trigger.length) return;

          // Reason: Some menu items are rendered as <span>, so we make them focusable keyboard triggers.
          if ($trigger.is("span")) {
            $trigger.attr({
              'tabindex': '0',
              'role': 'button'
            });
          }
          $trigger.attr({
            'aria-haspopup': 'true',
            'aria-expanded': 'false'
          });
          $listItem.on("focusin", function () {
            openSubmenu($listItem, $trigger, keyboardOpenClass);
          });
          $listItem.on("focusout", function (focusEvent) {
            var hasFocusedDescendant = listItemElement.contains(focusEvent.relatedTarget);
            if (hasFocusedDescendant) return;
            closeSubmenu($listItem, $trigger, keyboardOpenClass);
          });
          $trigger.on("keydown", function (keyboardEvent) {
            var keyCode = keyboardEvent.key;
            if ([" ", "Spacebar", "Enter", "ArrowDown", "ArrowUp", "Escape"].indexOf(keyCode) === -1) return;
            keyboardEvent.preventDefault();
            if (keyCode === "Escape") {
              closeSubmenu($listItem, $trigger, keyboardOpenClass);
              $trigger.trigger("focus");
              return;
            }
            openSubmenu($listItem, $trigger, keyboardOpenClass);
            if (keyCode === "ArrowUp") {
              focusSubmenuLink($submenu, "last");
              return;
            }
            focusSubmenuLink($submenu, "first");
          });
          $submenu.on("keydown", "a", function (keyboardEvent) {
            var keyCode = keyboardEvent.key;
            if (["ArrowDown", "ArrowUp", "Home", "End", "Escape"].indexOf(keyCode) === -1) return;
            var $submenuLinks = $submenu.find("a:visible");
            if (!$submenuLinks.length) return;
            keyboardEvent.preventDefault();
            var currentLinkIndex = $submenuLinks.index(keyboardEvent.currentTarget);
            var targetLinkIndex = currentLinkIndex;
            if (keyCode === "Escape") {
              closeSubmenu($listItem, $trigger, keyboardOpenClass);
              $trigger.trigger("focus");
              return;
            }
            if (keyCode === "ArrowDown") {
              targetLinkIndex = (currentLinkIndex + 1) % $submenuLinks.length;
            }
            if (keyCode === "ArrowUp") {
              targetLinkIndex = (currentLinkIndex - 1 + $submenuLinks.length) % $submenuLinks.length;
            }
            if (keyCode === "Home") {
              targetLinkIndex = 0;
            }
            if (keyCode === "End") {
              targetLinkIndex = $submenuLinks.length - 1;
            }
            $submenuLinks.eq(targetLinkIndex).trigger("focus");
          });
        });
      }
      function openSubmenu($listItem, $trigger, keyboardOpenClass) {
        $listItem.addClass(keyboardOpenClass);
        $trigger.attr('aria-expanded', 'true');
      }
      function closeSubmenu($listItem, $trigger, keyboardOpenClass) {
        $listItem.removeClass(keyboardOpenClass);
        $trigger.attr('aria-expanded', 'false');
      }
      function focusSubmenuLink($submenu, focusPosition) {
        var $submenuLinks = $submenu.find("a:visible");
        if (!$submenuLinks.length) return;
        if (focusPosition === "last") {
          $submenuLinks.last().trigger("focus");
          return;
        }
        $submenuLinks.first().trigger("focus");
      }
      function addAccessibilityCookie() {
        var $accessibility = $('#accessibility');
        if (!$accessibility.length) return;
        var cookeName = 'accessibility_message_was_shown';
        if ($.cookie(cookeName)) {
          $accessibility.hide();
          addPadding();
        } else {
          $accessibility.show();
          $accessibility.removeClass("bMessage_hide");
          $accessibility.on('ev.hide', function () {
            $.cookie('accessibility_message_was_shown', "1", {
              expires: 86400,
              path: '/'
            });
            addPadding();
          });
        }
      }
      function addPadding() {
        var $pageWr = $(".pageWr");
        if (!$pageWr.length) return;
        $pageWr.css("padding-top", $elm.outerHeight());
      }
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (sHeader);

/***/ }),

/***/ "./src/components/sHeader/sHeader.scss":
/*!*********************************************!*\
  !*** ./src/components/sHeader/sHeader.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sHero/sHero.scss":
/*!*****************************************!*\
  !*** ./src/components/sHero/sHero.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sHist/sHist.scss":
/*!*****************************************!*\
  !*** ./src/components/sHist/sHist.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sLead/sLead.scss":
/*!*****************************************!*\
  !*** ./src/components/sLead/sLead.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sSen/sSen.scss":
/*!***************************************!*\
  !*** ./src/components/sSen/sSen.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/sSlider/sSlider.scss":
/*!*********************************************!*\
  !*** ./src/components/sSlider/sSlider.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/search-results/search-results.scss":
/*!***********************************************************!*\
  !*** ./src/components/search-results/search-results.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/section/section.scss":
/*!*********************************************!*\
  !*** ./src/components/section/section.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/select2/select2.scss":
/*!*********************************************!*\
  !*** ./src/components/select2/select2.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/senators/senators.scss":
/*!***********************************************!*\
  !*** ./src/components/senators/senators.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/slider-type-a/SliderTypeA.js":
/*!*****************************************************!*\
  !*** ./src/components/slider-type-a/SliderTypeA.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper */ "./src/components/helper.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var $ = jQuery;
window.SliderTypeA = /*#__PURE__*/function () {
  function _class() {
    var _this = this;
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, _class);
    this.name = props.name || "slider-type-a";
    this.selector = props.selector || ".".concat(this.name);
    Object(_helper__WEBPACK_IMPORTED_MODULE_0__["checkInit"])(this.selector, this.name, function (item) {
      _this.init($(item));
    });
  }
  return _createClass(_class, [{
    key: "init",
    value: function init($elm) {
      var $currentWrap = $elm;
      var $slider_bg = $currentWrap.find('.' + this.name + '__bg-items');
      var $slider_desc = $currentWrap.find('.' + this.name + '__desc');
      var $slider__slide_nav = $currentWrap.find('.' + this.name + '__nav');
      if ($currentWrap.find('.' + this.name + '__desc-item').length > 1) {
        $currentWrap.addClass(this.name + '_slides');
      }
      $slider_bg.slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        accessibility: true,
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 15000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        asNavFor: $slider_desc,
        responsive: [{
          breakpoint: 768,
          settings: {
            swipe: true,
            autoplay: false,
            infinite: false
          }
        }]
      });
      $slider_desc.slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        accessibility: false,
        dots: true,
        appendDots: $slider__slide_nav,
        arrows: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 15000,
        fade: true,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease",
        asNavFor: $slider_bg,
        responsive: [{
          breakpoint: 768,
          settings: {
            swipe: true,
            autoplay: false,
            infinite: false
          }
        }]
      });
    }
  }]);
}();
/* harmony default export */ __webpack_exports__["default"] = (SliderTypeA);

/***/ }),

/***/ "./src/components/slider-type-a/slider-type-a.scss":
/*!*********************************************************!*\
  !*** ./src/components/slider-type-a/slider-type-a.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/styles.js");
/* harmony import */ var _components_bEvent_bEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bEvent/bEvent */ "./src/components/bEvent/bEvent.js");
/* harmony import */ var _components_Observer_Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Observer/Observer */ "./src/components/Observer/Observer.js");
/* harmony import */ var _components_bMedia_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bMedia/video */ "./src/components/bMedia/video.js");
/* harmony import */ var _components_bSort_bSort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bSort/bSort */ "./src/components/bSort/bSort.js");
/* harmony import */ var _components_navSelect_navSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navSelect/navSelect */ "./src/components/navSelect/navSelect.js");
/* harmony import */ var _components_slider_type_a_SliderTypeA__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider-type-a/SliderTypeA */ "./src/components/slider-type-a/SliderTypeA.js");
/* harmony import */ var _components_sHeader_sHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sHeader/sHeader */ "./src/components/sHeader/sHeader.js");
/* harmony import */ var _components_bTerms_bTerms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bTerms/bTerms */ "./src/components/bTerms/bTerms.js");
/* harmony import */ var _components_bStaff_bStaff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bStaff/bStaff */ "./src/components/bStaff/bStaff.js");
/* harmony import */ var _components_bLightSlider_lightSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bLightSlider/lightSlider */ "./src/components/bLightSlider/lightSlider.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _components_bEvents_bEvents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bEvents/bEvents */ "./src/components/bEvents/bEvents.js");
/* harmony import */ var _components_accessibility_initAccessibilityWidgetA11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/accessibility/initAccessibilityWidgetA11y */ "./src/components/accessibility/initAccessibilityWidgetA11y.js");
var _window$Drupal;














var $ = jQuery;
window.addEventListener('load', function () {
  $('body').addClass('loaded');
});
if ((_window$Drupal = window.Drupal) !== null && _window$Drupal !== void 0 && _window$Drupal.behaviors) {
  Drupal.behaviors.projectName = {
    attach: function attach(context, settings) {
      init();
    },
    completedCallback: function completedCallback() {/*Do nothing. But it's here in case other modules/themes want to override it.*/
    }
  };
} else {
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  new _components_Observer_Observer__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _components_navSelect_navSelect__WEBPACK_IMPORTED_MODULE_5__["default"]();
  new _components_navSelect_navSelect__WEBPACK_IMPORTED_MODULE_5__["default"]({
    name: 'navSelectIssuePapers',
    prefix: 'category-',
    prefixContent: 'id-'
  });
  new _components_sHeader_sHeader__WEBPACK_IMPORTED_MODULE_7__["default"]();
  addPadding();
  hashScroll();
  initFocusedElementViewportScroll();
});
$(window).on('load', function () {
  addPadding();
});
function init() {
  Object(_components_accessibility_initAccessibilityWidgetA11y__WEBPACK_IMPORTED_MODULE_13__["default"])();
  new _components_modal_modal__WEBPACK_IMPORTED_MODULE_11__["default"]();
  new _components_bEvent_bEvent__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _components_bSort_bSort__WEBPACK_IMPORTED_MODULE_4__["default"]();
  new _components_slider_type_a_SliderTypeA__WEBPACK_IMPORTED_MODULE_6__["default"]();
  new _components_bTerms_bTerms__WEBPACK_IMPORTED_MODULE_8__["default"]();
  new _components_bStaff_bStaff__WEBPACK_IMPORTED_MODULE_9__["default"]();
  new _components_bLightSlider_lightSlider__WEBPACK_IMPORTED_MODULE_10__["default"]();
  new _components_bEvents_bEvents__WEBPACK_IMPORTED_MODULE_12__["default"]();
  initFormRedirect();
  initSelect();
  initAccessibility();
  initHeaderHover();
  initCounter($('.bSeats__cap'), false, 2);
  initCounter($('.bSeats__countD'), false, 2);
  initCounter($('.bSeats__countR'), false, 2);
  initCounter($('.bSeats__countV'), false, 2);
  changeAutocomplete();
  scrollBlock();
  changePlaceholderTime();
  initDate();
  new _components_bMedia_video__WEBPACK_IMPORTED_MODULE_3__["default"]();
  $(document).ajaxComplete(function (event, xhr, settings) {
    if (settings.url === '/views/ajax?_wrapper_format=drupal_ajax') {
      var dataArr = settings.data.split('&');
      if (~$.inArray("committee=All", dataArr)) return;
      var sSenRes = $(".sSen__res");
      if (!sSenRes.length) return;
      sSenRes.addClass('sSen__res_committee');
    }
  });
}
function initDate() {
  var $wrap = $(".hasDatepicker");
  if (!$wrap.length) return;
  try {
    $wrap.datepicker("option", "changeMonth", false);
    $wrap.datepicker("option", "changeYear", false);
  } catch (e) {
    if (console && console.log) {
      console.log('datepicker undefined: ' + e.message);
    }
  }
  var $parent = $wrap.parent('.form-item-field-journals-files-date-value');
  if ($parent.hasClass('processed')) return;
  $parent.addClass('processed');
  $wrap.on('focusin', function () {
    $parent.addClass('open');
  });
  $wrap.on('focusout', function () {
    $parent.removeClass('open');
  });
}
function addPadding() {
  var $header = $(".sHeader");
  if (!$header.length) return;
  var $pageWr = $(".pageWr");
  if (!$pageWr.length) return;
  $pageWr.css("padding-top", $header.outerHeight());
}
function hashScroll() {
  var $body = $('body, html');
  var $bodyOnly = $('body');
  if ($bodyOnly.hasClass('hashScroll_processed')) return;
  $bodyOnly.addClass('hashScroll_processed');
  var prefix = "l-";
  //let prefixContent = `${this.prefixContent}`;
  var speed = 600;
  if (window.location.hash && ~window.location.hash.indexOf('#' + prefix)) {
    animation(window.location.hash.replace('#' + prefix, ''));
  }
  $(window).on('hashchange', function () {
    if (window.location.hash && ~window.location.hash.indexOf('#' + prefix)) {
      animation(window.location.hash.replace('#' + prefix, ''));
    }
  });
  function animation(val) {
    var $target = $('#' + val);
    if (!$target.length) return;
    window.location.hash = prefix + val;
    var adminMenu = parseInt($("body").css('padding-top'));
    var headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;
    $body.animate({
      scrollTop: $target.offset().top - 10 - headerHeight - adminMenu
    }, speed);
  }
}
function changeAutocomplete() {
  var $zip = $(".sSen .form-item-zip .form-autocomplete");
  if (!$zip.length) return;
  $zip.attr('autocomplete', 'new-password');
}
function changePlaceholderTime() {
  var $inputStart = $(".form-item-date-time input");
  var $inputEnd = $(".form-item-end-time-time input");
  if (!$inputStart.length) return;
  if (!$inputEnd.length) return;
  $inputStart.attr('placeholder', 'Start Time');
  $inputEnd.attr('placeholder', 'End Time');
  focusInit([$inputEnd, $inputStart]);
  function focusInit(inputs) {
    inputs.forEach(function (input) {
      input.attr('type', 'text');

      // if (!input.hasClass('focus-init')) {
      // 	input.addClass('focus-init');
      //
      // 	input.on('focus', () => {
      // 		input.attr('type', 'time');
      // 	})
      // }
    });
  }
}
function initCounter(wrap, easing, speed) {
  var $wrap = wrap.find('.count');
  if (!$wrap.length) return;
  if ($wrap.hasClass('processed')) return;
  $wrap.addClass('processed');
  var start = +$wrap.data('start');
  var end = +$wrap.data('end');
  var counter = new CountUp($wrap[0], start, end, 0, speed, {
    useEasing: easing,
    useGrouping: true,
    separator: ','
  });
  checkPosition();
  $(window).on('scroll', function () {
    checkPosition();
  });
  $(window).on('resize', function () {
    checkPosition();
  });
  function checkPosition() {
    if ($wrap.hasClass('active')) return;
    if ($(window).outerHeight() + $(window).scrollTop() > $wrap.offset().top + $wrap.outerHeight() + 20) {
      $wrap.addClass('active');
      counter.start(function () {
        //counterRestart()
      });
    }
  }
  function counterRestart() {
    setTimeout(function () {
      counter.reset();
      setTimeout(function () {
        counter.start(function () {
          counterRestart();
        });
      }, 200);
    }, 1000);
  }
}
function initFormRedirect() {
  var $form = $('.f-search-redirect');
  var $input = $form.find('.form-text');
  $form.on('submit', function (e) {
    e.preventDefault();
    var val = $input.val().trim();
    if (val) {
      location.href = 'http://www.oklegislature.gov/BillInfo.aspx?Bill=' + val;
    }
  });
}
function initSelect() {
  function matchCustom(params, data) {
    // If there are no search terms, return all of the data
    if ($.trim(params.term) === '') {
      return data;
    }

    // Do not display the item if there is no 'text' property
    if (typeof data.text === 'undefined') {
      return null;
    }

    // `params.term` should be the term that is used for searching
    // `data.text` is the text that is displayed for the data object
    // if (data.text.indexOf(params.term) > -1) {
    //   var modifiedData = $.extend({}, data, true);
    //   modifiedData.text += ' (matched)';
    //
    //   // You can return modified objects from here
    //   // This includes matching the `children` how you want in nested data sets
    //   return modifiedData;
    // }

    if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
      var modifiedData = $.extend({}, data, true);
      return modifiedData;
    }

    // Return `null` if the term should not be displayed
    return null;
  }
  $('select:not(#edit-permanent-state):not(#edit-local-state)').select2({
    width: 'full',
    minimumResultsForSearch: Infinity
  });
  $('select#edit-permanent-state, select#edit-local-state').select2({
    width: 'full',
    minimumResultsForSearch: 0,
    matcher: matchCustom
  });
  $('select').on('select2:open', function (e) {
    $('.select2-results .select2-results__options').scrollbar({
      disableBodyScroll: false,
      duration: 600,
      scrollStep: 160
    });
  });
}
function scrollBlock() {
  $('.modal_meetingnotices .form-checkboxes, .modal_meetingnotices .form-radios ').scrollbar({
    disableBodyScroll: false,
    duration: 600,
    scrollStep: 160
  });
}
function initAccessibility() {
  if ($('body').hasClass('accessibility')) {
    $('select[tabindex="-1"]').removeAttr('tabindex').removeAttr('aria-hidden');
  }
}
function initFocusedElementViewportScroll() {
  var bodyElement = document.body;
  if (!bodyElement || bodyElement.classList.contains('focus-scroll-processed')) {
    return;
  }
  bodyElement.classList.add('focus-scroll-processed');
  document.addEventListener('focusin', function (focusEvent) {
    var focusTarget = focusEvent.target;
    if (!(focusTarget instanceof HTMLElement)) {
      return;
    }

    // Reason: Some focus targets are tiny or hidden wrappers, so we skip zero-size elements.
    var targetRect = focusTarget.getBoundingClientRect();
    if (!targetRect.width && !targetRect.height) {
      return;
    }
    window.requestAnimationFrame(function () {
      scrollElementIntoViewport(focusTarget);
    });
  });
}
function scrollElementIntoViewport(element) {
  var viewportMargin = 12;
  var headerElement = document.querySelector('.sHeader');
  var headerHeight = headerElement ? headerElement.offsetHeight : 0;
  var adminOffset = parseInt(window.getComputedStyle(document.body).paddingTop, 10) || 0;
  var topSafeArea = headerHeight + adminOffset + viewportMargin;
  var bottomSafeArea = window.innerHeight - viewportMargin;
  var elementRect = element.getBoundingClientRect();
  var elementHeight = elementRect.height;
  var targetScrollY = window.scrollY;

  // Reason: Tall tiles cannot fully fit in viewport, so we align their top edge under sticky chrome.
  if (elementHeight + topSafeArea + viewportMargin > window.innerHeight) {
    targetScrollY += elementRect.top - topSafeArea;
  } else if (elementRect.top < topSafeArea) {
    targetScrollY += elementRect.top - topSafeArea;
  } else if (elementRect.bottom > bottomSafeArea) {
    targetScrollY += elementRect.bottom - bottomSafeArea;
  } else {
    return;
  }
  var maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  var clampedScrollY = Math.max(0, Math.min(targetScrollY, maxScrollY));
  window.scrollTo({
    top: clampedScrollY,
    behavior: 'smooth'
  });
}
function initHeaderHover() {
  var $wrapper = $('.sHeader__menu-wrap');
  var $listDesktopWrap = $wrapper.find(' > ul.menu');
  var $listDesktopWrapLi = $listDesktopWrap.find('li');
  var $listDesktopWrapA = $listDesktopWrap.find('a');
  if ($wrapper.hasClass('sHeader__menu-processed')) return;
  $wrapper.addClass('sHeader__menu-processed');
  if (!$('body').hasClass('accessibility')) return;
  $listDesktopWrapLi.on('mouseenter', function () {
    removeBlur();
    getMenuWrap(this);
  });
  $listDesktopWrapLi.on('mouseleave', function () {
    $(this).removeClass('hover');
  });
  $listDesktopWrapA.on('focus', function () {
    getMenuWrap(this.parentNode);
    $(this.parentNode).siblings('li').removeClass('hover');
  });
  $listDesktopWrapA.on('blur', function () {
    if (this === $listDesktopWrapA[$listDesktopWrapA.length - 1]) {
      $listDesktopWrapLi.removeClass('hover');
    }
  });
  function removeBlur() {
    $listDesktopWrapLi.removeClass('hover');
    $listDesktopWrapA.blur();
  }
  function getMenuWrap(elm) {
    if (elm.classList.contains('sHeader__menu-wrap')) {
      return;
    }
    elm.classList.add('hover');
    getMenuWrap(elm.parentNode);
  }
}

/***/ }),

/***/ "./src/modules/bootstrap-modal.scss":
/*!******************************************!*\
  !*** ./src/modules/bootstrap-modal.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles.js":
/*!***********************!*\
  !*** ./src/styles.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_ss_social_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/ss-social.scss */ "./src/common/ss-social.scss");
/* harmony import */ var _common_ss_social_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_common_ss_social_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_ss_glyphish_filled_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/ss-glyphish-filled.scss */ "./src/common/ss-glyphish-filled.scss");
/* harmony import */ var _common_ss_glyphish_filled_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_ss_glyphish_filled_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ss_glyphish_outlined_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/ss-glyphish-outlined.scss */ "./src/common/ss-glyphish-outlined.scss");
/* harmony import */ var _common_ss_glyphish_outlined_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_common_ss_glyphish_outlined_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/fonts.scss */ "./src/common/fonts.scss");
/* harmony import */ var _common_fonts_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_fonts_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_normalize_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/normalize.scss */ "./src/common/normalize.scss");
/* harmony import */ var _common_normalize_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_normalize_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_global_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/global.scss */ "./src/common/global.scss");
/* harmony import */ var _common_global_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_global_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_grid_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/grid.scss */ "./src/common/grid.scss");
/* harmony import */ var _common_grid_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_grid_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_helpers_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/helpers.scss */ "./src/common/helpers.scss");
/* harmony import */ var _common_helpers_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_common_helpers_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_select2_select2_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select2/select2.scss */ "./src/components/select2/select2.scss");
/* harmony import */ var _components_select2_select2_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_select2_select2_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_bootstrap_modal_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/bootstrap-modal.scss */ "./src/modules/bootstrap-modal.scss");
/* harmony import */ var _modules_bootstrap_modal_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_bootstrap_modal_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_bTitle_bTitle_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bTitle/bTitle.scss */ "./src/components/bTitle/bTitle.scss");
/* harmony import */ var _components_bTitle_bTitle_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_bTitle_bTitle_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_form_form_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form/form.scss */ "./src/components/form/form.scss");
/* harmony import */ var _components_form_form_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_components_form_form_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_bWrap_bWrap_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bWrap/bWrap.scss */ "./src/components/bWrap/bWrap.scss");
/* harmony import */ var _components_bWrap_bWrap_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_components_bWrap_bWrap_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_form_f_search_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/form/f-search.scss */ "./src/components/form/f-search.scss");
/* harmony import */ var _components_form_f_search_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_components_form_f_search_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_btn_btn_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/btn/btn.scss */ "./src/components/btn/btn.scss");
/* harmony import */ var _components_btn_btn_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_btn_btn_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_section_section_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/section/section.scss */ "./src/components/section/section.scss");
/* harmony import */ var _components_section_section_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_components_section_section_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_pMain_pMain_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pMain/pMain.scss */ "./src/components/pMain/pMain.scss");
/* harmony import */ var _components_pMain_pMain_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_components_pMain_pMain_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_pageWr_pageWr_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pageWr/pageWr.scss */ "./src/components/pageWr/pageWr.scss");
/* harmony import */ var _components_pageWr_pageWr_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_pageWr_pageWr_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _components_bContainer_bContainer_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/bContainer/bContainer.scss */ "./src/components/bContainer/bContainer.scss");
/* harmony import */ var _components_bContainer_bContainer_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_components_bContainer_bContainer_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_sHeader_sHeader_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/sHeader/sHeader.scss */ "./src/components/sHeader/sHeader.scss");
/* harmony import */ var _components_sHeader_sHeader_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_components_sHeader_sHeader_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_sFooter_sFooter_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/sFooter/sFooter.scss */ "./src/components/sFooter/sFooter.scss");
/* harmony import */ var _components_sFooter_sFooter_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_components_sFooter_sFooter_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_logo_logo_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/logo/logo.scss */ "./src/components/logo/logo.scss");
/* harmony import */ var _components_logo_logo_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_components_logo_logo_scss__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_navLinks_navLinks_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/navLinks/navLinks.scss */ "./src/components/navLinks/navLinks.scss");
/* harmony import */ var _components_navLinks_navLinks_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_navLinks_navLinks_scss__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_sHero_sHero_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sHero/sHero.scss */ "./src/components/sHero/sHero.scss");
/* harmony import */ var _components_sHero_sHero_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_components_sHero_sHero_scss__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_sFinder_sFinder_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/sFinder/sFinder.scss */ "./src/components/sFinder/sFinder.scss");
/* harmony import */ var _components_sFinder_sFinder_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_components_sFinder_sFinder_scss__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_bTiles_bTiles_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/bTiles/bTiles.scss */ "./src/components/bTiles/bTiles.scss");
/* harmony import */ var _components_bTiles_bTiles_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_components_bTiles_bTiles_scss__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_bEvent_bEvent_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/bEvent/bEvent.scss */ "./src/components/bEvent/bEvent.scss");
/* harmony import */ var _components_bEvent_bEvent_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_components_bEvent_bEvent_scss__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_sLead_sLead_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/sLead/sLead.scss */ "./src/components/sLead/sLead.scss");
/* harmony import */ var _components_sLead_sLead_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_components_sLead_sLead_scss__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_bCols_bCols_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/bCols/bCols.scss */ "./src/components/bCols/bCols.scss");
/* harmony import */ var _components_bCols_bCols_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_components_bCols_bCols_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_senators_senators_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/senators/senators.scss */ "./src/components/senators/senators.scss");
/* harmony import */ var _components_senators_senators_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_components_senators_senators_scss__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _components_bMessage_bMessage_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/bMessage/bMessage.scss */ "./src/components/bMessage/bMessage.scss");
/* harmony import */ var _components_bMessage_bMessage_scss__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_components_bMessage_bMessage_scss__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _components_sSen_sSen_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/sSen/sSen.scss */ "./src/components/sSen/sSen.scss");
/* harmony import */ var _components_sSen_sSen_scss__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_components_sSen_sSen_scss__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _components_pageIn_pageIn_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/pageIn/pageIn.scss */ "./src/components/pageIn/pageIn.scss");
/* harmony import */ var _components_pageIn_pageIn_scss__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_components_pageIn_pageIn_scss__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _components_bSenBio_bSenBio_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/bSenBio/bSenBio.scss */ "./src/components/bSenBio/bSenBio.scss");
/* harmony import */ var _components_bSenBio_bSenBio_scss__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_components_bSenBio_bSenBio_scss__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _components_bSoc_bSoc_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/bSoc/bSoc.scss */ "./src/components/bSoc/bSoc.scss");
/* harmony import */ var _components_bSoc_bSoc_scss__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_components_bSoc_bSoc_scss__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _components_bNews_bNews_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/bNews/bNews.scss */ "./src/components/bNews/bNews.scss");
/* harmony import */ var _components_bNews_bNews_scss__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_components_bNews_bNews_scss__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _components_bAbout_bAbout_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/bAbout/bAbout.scss */ "./src/components/bAbout/bAbout.scss");
/* harmony import */ var _components_bAbout_bAbout_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_components_bAbout_bAbout_scss__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _components_bMedia_bMedia_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/bMedia/bMedia.scss */ "./src/components/bMedia/bMedia.scss");
/* harmony import */ var _components_bMedia_bMedia_scss__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_components_bMedia_bMedia_scss__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _components_bHide_bHide_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/bHide/bHide.scss */ "./src/components/bHide/bHide.scss");
/* harmony import */ var _components_bHide_bHide_scss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_components_bHide_bHide_scss__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _components_bMembership_bMembership_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/bMembership/bMembership.scss */ "./src/components/bMembership/bMembership.scss");
/* harmony import */ var _components_bMembership_bMembership_scss__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_components_bMembership_bMembership_scss__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _components_bDistrict_bDistrict_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/bDistrict/bDistrict.scss */ "./src/components/bDistrict/bDistrict.scss");
/* harmony import */ var _components_bDistrict_bDistrict_scss__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_components_bDistrict_bDistrict_scss__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _components_bSelect_bSelect_scss__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/bSelect/bSelect.scss */ "./src/components/bSelect/bSelect.scss");
/* harmony import */ var _components_bSelect_bSelect_scss__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_components_bSelect_bSelect_scss__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _components_link_link_scss__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/link/link.scss */ "./src/components/link/link.scss");
/* harmony import */ var _components_link_link_scss__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_components_link_link_scss__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _components_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.scss */ "./src/components/breadcrumb/breadcrumb.scss");
/* harmony import */ var _components_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_components_breadcrumb_breadcrumb_scss__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _components_form_fSignUp_scss__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/form/fSignUp.scss */ "./src/components/form/fSignUp.scss");
/* harmony import */ var _components_form_fSignUp_scss__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_components_form_fSignUp_scss__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _components_bListItems_bListItems_scss__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/bListItems/bListItems.scss */ "./src/components/bListItems/bListItems.scss");
/* harmony import */ var _components_bListItems_bListItems_scss__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_components_bListItems_bListItems_scss__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _components_bSchedule_bSchedule_scss__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/bSchedule/bSchedule.scss */ "./src/components/bSchedule/bSchedule.scss");
/* harmony import */ var _components_bSchedule_bSchedule_scss__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_components_bSchedule_bSchedule_scss__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _components_bListLinks_bListLinks_scss__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/bListLinks/bListLinks.scss */ "./src/components/bListLinks/bListLinks.scss");
/* harmony import */ var _components_bListLinks_bListLinks_scss__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_components_bListLinks_bListLinks_scss__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _components_bDateList_bDateList_scss__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/bDateList/bDateList.scss */ "./src/components/bDateList/bDateList.scss");
/* harmony import */ var _components_bDateList_bDateList_scss__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_components_bDateList_bDateList_scss__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _components_bTb_bTb_scss__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/bTb/bTb.scss */ "./src/components/bTb/bTb.scss");
/* harmony import */ var _components_bTb_bTb_scss__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_components_bTb_bTb_scss__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _components_bDrop_bDrop_scss__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/bDrop/bDrop.scss */ "./src/components/bDrop/bDrop.scss");
/* harmony import */ var _components_bDrop_bDrop_scss__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_components_bDrop_bDrop_scss__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _components_bPost_bPost_scss__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/bPost/bPost.scss */ "./src/components/bPost/bPost.scss");
/* harmony import */ var _components_bPost_bPost_scss__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_components_bPost_bPost_scss__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _components_bSort_bSort_scss__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/bSort/bSort.scss */ "./src/components/bSort/bSort.scss");
/* harmony import */ var _components_bSort_bSort_scss__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_components_bSort_bSort_scss__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _components_bSidebar_bSidebar_scss__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/bSidebar/bSidebar.scss */ "./src/components/bSidebar/bSidebar.scss");
/* harmony import */ var _components_bSidebar_bSidebar_scss__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_components_bSidebar_bSidebar_scss__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var _components_bPostList_bPostList_scss__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/bPostList/bPostList.scss */ "./src/components/bPostList/bPostList.scss");
/* harmony import */ var _components_bPostList_bPostList_scss__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_components_bPostList_bPostList_scss__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _components_pager_pager_scss__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/pager/pager.scss */ "./src/components/pager/pager.scss");
/* harmony import */ var _components_pager_pager_scss__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_components_pager_pager_scss__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var _components_bColumns_bColumns_scss__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/bColumns/bColumns.scss */ "./src/components/bColumns/bColumns.scss");
/* harmony import */ var _components_bColumns_bColumns_scss__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_components_bColumns_bColumns_scss__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _components_bOverview_bOverview_scss__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/bOverview/bOverview.scss */ "./src/components/bOverview/bOverview.scss");
/* harmony import */ var _components_bOverview_bOverview_scss__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_components_bOverview_bOverview_scss__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var _components_bTable_bTable_scss__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/bTable/bTable.scss */ "./src/components/bTable/bTable.scss");
/* harmony import */ var _components_bTable_bTable_scss__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_components_bTable_bTable_scss__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var _components_sSlider_sSlider_scss__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/sSlider/sSlider.scss */ "./src/components/sSlider/sSlider.scss");
/* harmony import */ var _components_sSlider_sSlider_scss__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_components_sSlider_sSlider_scss__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var _components_slider_type_a_slider_type_a_scss__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/slider-type-a/slider-type-a.scss */ "./src/components/slider-type-a/slider-type-a.scss");
/* harmony import */ var _components_slider_type_a_slider_type_a_scss__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_components_slider_type_a_slider_type_a_scss__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _components_bList_bList_scss__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/bList/bList.scss */ "./src/components/bList/bList.scss");
/* harmony import */ var _components_bList_bList_scss__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_components_bList_bList_scss__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _components_form_search_form_scss__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/form/search-form.scss */ "./src/components/form/search-form.scss");
/* harmony import */ var _components_form_search_form_scss__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(_components_form_search_form_scss__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var _components_search_results_search_results_scss__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/search-results/search-results.scss */ "./src/components/search-results/search-results.scss");
/* harmony import */ var _components_search_results_search_results_scss__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(_components_search_results_search_results_scss__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _components_bSeats_bSeats_scss__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/bSeats/bSeats.scss */ "./src/components/bSeats/bSeats.scss");
/* harmony import */ var _components_bSeats_bSeats_scss__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(_components_bSeats_bSeats_scss__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var _components_bHist_bHist_scss__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/bHist/bHist.scss */ "./src/components/bHist/bHist.scss");
/* harmony import */ var _components_bHist_bHist_scss__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(_components_bHist_bHist_scss__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var _components_sHist_sHist_scss__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/sHist/sHist.scss */ "./src/components/sHist/sHist.scss");
/* harmony import */ var _components_sHist_sHist_scss__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(_components_sHist_sHist_scss__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var _components_bTerms_bTerms_scss__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/bTerms/bTerms.scss */ "./src/components/bTerms/bTerms.scss");
/* harmony import */ var _components_bTerms_bTerms_scss__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(_components_bTerms_bTerms_scss__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var _components_bAudio_bAudio_scss__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/bAudio/bAudio.scss */ "./src/components/bAudio/bAudio.scss");
/* harmony import */ var _components_bAudio_bAudio_scss__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(_components_bAudio_bAudio_scss__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var _components_bStaff_bStaff_scss__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/bStaff/bStaff.scss */ "./src/components/bStaff/bStaff.scss");
/* harmony import */ var _components_bStaff_bStaff_scss__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(_components_bStaff_bStaff_scss__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var _components_s404_s404_scss__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/s404/s404.scss */ "./src/components/s404/s404.scss");
/* harmony import */ var _components_s404_s404_scss__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(_components_s404_s404_scss__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var _components_bLightSlider_lightSlider_scss__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/bLightSlider/lightSlider.scss */ "./src/components/bLightSlider/lightSlider.scss");
/* harmony import */ var _components_bLightSlider_lightSlider_scss__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(_components_bLightSlider_lightSlider_scss__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var _components_bIsPapers_bIsPapers_scss__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/bIsPapers/bIsPapers.scss */ "./src/components/bIsPapers/bIsPapers.scss");
/* harmony import */ var _components_bIsPapers_bIsPapers_scss__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(_components_bIsPapers_bIsPapers_scss__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var _components_bShare_bShare_scss__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/bShare/bShare.scss */ "./src/components/bShare/bShare.scss");
/* harmony import */ var _components_bShare_bShare_scss__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(_components_bShare_bShare_scss__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var _components_bListInline_bListInline_scss__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./components/bListInline/bListInline.scss */ "./src/components/bListInline/bListInline.scss");
/* harmony import */ var _components_bListInline_bListInline_scss__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(_components_bListInline_bListInline_scss__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var _components_bEvents_bEvents_scss__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./components/bEvents/bEvents.scss */ "./src/components/bEvents/bEvents.scss");
/* harmony import */ var _components_bEvents_bEvents_scss__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(_components_bEvents_bEvents_scss__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var _components_modal_modal_scss__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./components/modal/modal.scss */ "./src/components/modal/modal.scss");
/* harmony import */ var _components_modal_modal_scss__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal_scss__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var _components_govdeliveryOverlay_govdeliveryOverlay_scss__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./components/govdeliveryOverlay/govdeliveryOverlay.scss */ "./src/components/govdeliveryOverlay/govdeliveryOverlay.scss");
/* harmony import */ var _components_govdeliveryOverlay_govdeliveryOverlay_scss__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(_components_govdeliveryOverlay_govdeliveryOverlay_scss__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var _components_bSubNav_bSubNav_scss__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./components/bSubNav/bSubNav.scss */ "./src/components/bSubNav/bSubNav.scss");
/* harmony import */ var _components_bSubNav_bSubNav_scss__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(_components_bSubNav_bSubNav_scss__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var _components_bVideoGallery_bVideoGallery_scss__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./components/bVideoGallery/bVideoGallery.scss */ "./src/components/bVideoGallery/bVideoGallery.scss");
/* harmony import */ var _components_bVideoGallery_bVideoGallery_scss__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(_components_bVideoGallery_bVideoGallery_scss__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var _components_bPageNav_bPageNav_scss__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./components/bPageNav/bPageNav.scss */ "./src/components/bPageNav/bPageNav.scss");
/* harmony import */ var _components_bPageNav_bPageNav_scss__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(_components_bPageNav_bPageNav_scss__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var _common_drupal_styles_scss__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./common/drupal-styles.scss */ "./src/common/drupal-styles.scss");
/* harmony import */ var _common_drupal_styles_scss__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(_common_drupal_styles_scss__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var _components_accessibility_accessibility_scss__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./components/accessibility/accessibility.scss */ "./src/components/accessibility/accessibility.scss");
/* harmony import */ var _components_accessibility_accessibility_scss__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(_components_accessibility_accessibility_scss__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var _components_print_print_scss__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./components/print/print.scss */ "./src/components/print/print.scss");
/* harmony import */ var _components_print_print_scss__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(_components_print_print_scss__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var _components_b_agenda_b_agenda_scss__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./components/b-agenda/b-agenda.scss */ "./src/components/b-agenda/b-agenda.scss");
/* harmony import */ var _components_b_agenda_b_agenda_scss__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(_components_b_agenda_b_agenda_scss__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var _components_b_district_maps_b_district_maps_scss__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./components/b-district-maps/b-district-maps.scss */ "./src/components/b-district-maps/b-district-maps.scss");
/* harmony import */ var _components_b_district_maps_b_district_maps_scss__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(_components_b_district_maps_b_district_maps_scss__WEBPACK_IMPORTED_MODULE_85__);




















































































// import './components/b-timeline/b-timeline.scss'
//import './components/b-faq/b-faq.scss'
//import './components/b-note/b-note.scss'



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RydXBhbC1zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ZvbnRzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2dyaWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hlbHBlcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3MtZ2x5cGhpc2gtZmlsbGVkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zcy1nbHlwaGlzaC1vdXRsaW5lZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3Mtc29jaWFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT2JzZXJ2ZXIvQ3VzdG9tRXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT2JzZXJ2ZXIvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjZXNzaWJpbGl0eS9hY2Nlc3NpYmlsaXR5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjZXNzaWJpbGl0eS9pbml0QWNjZXNzaWJpbGl0eVdpZGdldEExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYi1hZ2VuZGEvYi1hZ2VuZGEuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iLWRpc3RyaWN0LW1hcHMvYi1kaXN0cmljdC1tYXBzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkFib3V0L2JBYm91dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JBdWRpby9iQXVkaW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iQ29scy9iQ29scy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JDb2x1bW5zL2JDb2x1bW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkNvbnRhaW5lci9iQ29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkRhdGVMaXN0L2JEYXRlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JEaXN0cmljdC9iRGlzdHJpY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iRHJvcC9iRHJvcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JFdmVudC9iRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkV2ZW50L2JFdmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JFdmVudHMvYkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iRXZlbnRzL2JFdmVudHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iSGlkZS9iSGlkZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JIaXN0L2JIaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYklzUGFwZXJzL2JJc1BhcGVycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JMaWdodFNsaWRlci9saWdodFNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iTGlnaHRTbGlkZXIvbGlnaHRTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iTGlzdC9iTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JMaXN0SW5saW5lL2JMaXN0SW5saW5lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkxpc3RJdGVtcy9iTGlzdEl0ZW1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkxpc3RMaW5rcy9iTGlzdExpbmtzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYk1lZGlhL2JNZWRpYS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JNZWRpYS92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iTWVtYmVyc2hpcC9iTWVtYmVyc2hpcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JNZXNzYWdlL2JNZXNzYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYk5ld3MvYk5ld3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iT3ZlcnZpZXcvYk92ZXJ2aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlBhZ2VOYXYvYlBhZ2VOYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iUG9zdC9iUG9zdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JQb3N0TGlzdC9iUG9zdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iU2NoZWR1bGUvYlNjaGVkdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlNlYXRzL2JTZWF0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTZWxlY3QvYlNlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTZW5CaW8vYlNlbkJpby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTaGFyZS9iU2hhcmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iU2lkZWJhci9iU2lkZWJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTb2MvYlNvYy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTb3J0L2JTb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTb3J0L2JTb3J0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlN0YWZmL2JTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iU3RhZmYvYlN0YWZmLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlN1Yk5hdi9iU3ViTmF2LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlRhYmxlL2JUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JUYi9iVGIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iVGVybXMvYlRlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JUZXJtcy9iVGVybXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iVGlsZXMvYlRpbGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlRpdGxlL2JUaXRsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JWaWRlb0dhbGxlcnkvYlZpZGVvR2FsbGVyeS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JXcmFwL2JXcmFwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnRuL2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0vZi1zZWFyY2guc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2ZTaWduVXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL3NlYXJjaC1mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ292ZGVsaXZlcnlPdmVybGF5L2dvdmRlbGl2ZXJ5T3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rL2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdkxpbmtzL25hdkxpbmtzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2U2VsZWN0L25hdlNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wTWFpbi9wTWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VJbi9wYWdlSW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlV3IvcGFnZVdyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmludC9wcmludC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3M0MDQvczQwNC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NGaW5kZXIvc0ZpbmRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NGb290ZXIvc0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NIZWFkZXIvc0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zSGVhZGVyL3NIZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zSGVyby9zSGVyby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NIaXN0L3NIaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc0xlYWQvc0xlYWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zU2VuL3NTZW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zU2xpZGVyL3NTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24vc2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdDIvc2VsZWN0Mi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbmF0b3JzL3NlbmF0b3JzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyLXR5cGUtYS9TbGlkZXJUeXBlQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZXItdHlwZS1hL3NsaWRlci10eXBlLWEuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9vdHN0cmFwLW1vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSBqUXVlcnk7XG5cbmNsYXNzIEN1c3RvbUV2IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmN1c3RvbUNsaWNrKCk7XG5cdH1cblxuXHRjdXN0b21DbGljaygpIHtcblxuXHRcdGFkZExpc3RlbmVyRm9yU2VuYXRvckZpbHRlcigpO1xuXG5cdFx0JChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uIChldmVudCwgeGhyLCBzZXR0aW5ncykge1xuXHRcdFx0aWYgKH5zZXR0aW5ncy5kYXRhPy5pbmRleE9mKCd2aWV3X25hbWU9c2VuYXRvcnMnKSkge1xuXHRcdFx0XHRhZGRMaXN0ZW5lckZvclNlbmF0b3JGaWx0ZXIoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaCcsIChlKSA9PiB7XG5cdFx0XHRsZXQgJGV2ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdGlmICghJGV2LmNsb3Nlc3QoJy5iRHJvcCcpLmxlbmd0aCkge1xuXHRcdFx0XHQkKCcuYkRyb3AnKS5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoJGV2LmNsb3Nlc3QoJy5oYXNoTGluaycpLmxlbmd0aCB8fCAkZXYuaGFzQ2xhc3MoYGhhc2hMaW5rYCkpIHtcblx0XHRcdFx0bGV0ICRib2R5ID0gJCgnYm9keSwgaHRtbCcpO1xuXHRcdFx0XHRsZXQgcHJlZml4ID0gYGwtYDtcblx0XHRcdFx0bGV0IHNwZWVkID0gNjAwO1xuXG5cdFx0XHRcdGxldCB2YWwgPSAkZXYuY2xvc2VzdCgnLmhhc2hMaW5rJykuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cblx0XHRcdFx0bGV0ICR0YXJnZXQgPSAkKCcjJyArIHZhbCk7XG5cblx0XHRcdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcHJlZml4ICsgdmFsO1xuXG5cdFx0XHRcdGxldCBhZG1pbk1lbnUgPSBwYXJzZUludCgkKGBib2R5YCkuY3NzKCdwYWRkaW5nLXRvcCcpKTtcblxuXHRcdFx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLnNIZWFkZXInKS5sZW5ndGggPyAkKCcuc0hlYWRlcicpLm91dGVySGVpZ2h0KCkgOiAwO1xuXG5cdFx0XHRcdCRib2R5LmFuaW1hdGUoe3Njcm9sbFRvcDogJHRhcmdldC5vZmZzZXQoKS50b3AgLSAxMCAtIGhlYWRlckhlaWdodCAtIGFkbWluTWVudX0sIHNwZWVkKTtcblxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JTZW5hdG9yRmlsdGVyKCkge1xuXG5cdFx0XHQkKCcjdmlld3MtZXhwb3NlZC1mb3JtLXNlbmF0b3JzLXBhZ2UtMSAuZm9ybS1zdWJtaXQnKS5vbignY2xpY2sgdG91Y2gnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJy5zU2VuIC5zU2VuX19yZXMnKS5hZGRDbGFzcygnc1Nlbl9fcmVzX2xvYWRpbmcnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FdjsiLCJpbXBvcnQgQ3VzdG9tRXYgZnJvbSAnLi9DdXN0b21FdidcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5PYnNlcnZlciA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaCcsIChlKSA9PiB7XG5cdFx0XHRsZXQgZXZlbnQgPSBlLnRhcmdldC5kYXRhc2V0LmV2O1xuXHRcdFx0aWYgKCFldmVudCkgcmV0dXJuO1xuXG5cdFx0XHRsZXQgZXZlbnRzID0ge1xuXHRcdFx0XHRldnM6IGUudGFyZ2V0LmRhdGFzZXQuZXYuc3BsaXQoJzsnKSxcblx0XHRcdFx0aXRlbXM6IFtdXG5cdFx0XHR9O1xuXG5cdFx0XHRldmVudHMuZXZzLmZvckVhY2goKGV2SXRlbSwgaSkgPT4ge1xuXHRcdFx0XHRsZXQgW2V2LCBzZWwsIGNsTmFtZV0gPSBldkl0ZW0uc3BsaXQoJzonKTtcblxuXHRcdFx0XHRldmVudHMuaXRlbXNbaV0gPSB7XG5cdFx0XHRcdFx0ZXYsXG5cdFx0XHRcdFx0c2VsLFxuXHRcdFx0XHRcdGNsTmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0ZXZlbnRzLml0ZW1zLmZvckVhY2goKHtldiwgc2VsLCBjbE5hbWV9KSA9PiB7XG5cdFx0XHRcdGlmICghc2VsIHx8ICF0aGlzW2V2XSkgcmV0dXJuO1xuXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpc1tldl0oJChlLnRhcmdldCksIHNlbCwgY2xOYW1lLCBldik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdG5ldyBDdXN0b21Fdjtcblx0fVxuXG5cdGhpZGUoJHRhcmdldCwgc2VsLCBjbE5hbWUsIGV2KSB7XG5cdFx0JHRhcmdldC5jbG9zZXN0KGAuJHtzZWx9YCkuaGlkZSgpLnRyaWdnZXIoYGV2LiR7ZXZ9YCk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygkdGFyZ2V0LCBzZWwsIGNsTmFtZSwgZXYpIHtcblx0XHQkdGFyZ2V0LmNsb3Nlc3QoYC4ke3NlbH1gKS50b2dnbGVDbGFzcyhgJHtzZWx9XyR7Y2xOYW1lfWApLnRyaWdnZXIoYGV2LiR7ZXZ9LiR7Y2xOYW1lfWApO1xuXHR9XG5cblx0dG9nZ2xlQ3VzdG9tQ2xhc3MoJHRhcmdldCwgc2VsLCBjbE5hbWUsIGV2KSB7XG5cdFx0JHRhcmdldC5jbG9zZXN0KGAuJHtzZWx9YCkudG9nZ2xlQ2xhc3MoYCR7Y2xOYW1lfWApLnRyaWdnZXIoYGV2LiR7ZXZ9LiR7Y2xOYW1lfWApO1xuXHR9XG5cblx0cmVtb3ZlQ2xhc3MoJHRhcmdldCwgc2VsLCBjbE5hbWUsIGV2KSB7XG5cdFx0JHRhcmdldC5jbG9zZXN0KGAuJHtzZWx9YCkucmVtb3ZlQ2xhc3MoYCR7c2VsfV8ke2NsTmFtZX1gKS50cmlnZ2VyKGBldi4ke2V2fS4ke2NsTmFtZX1gKTtcblx0fVxuXG5cdHRvZ2dsZSgkdGFyZ2V0LCBzZWwpIHtcblx0XHQkKGAuJHtzZWx9YCkudG9nZ2xlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IEExMVlfVE9HR0xFX1NFTEVDVE9SID0gJ2J1dHRvbiNhY2Nlc3NpYmlsaXR5X3NldHRpbmdzX3RvZ2dsZSc7XG5jb25zdCBJQ09OX1NFTEVDVE9SID0gJy5hY2Nlc3NpYmlsaXR5X3NldHRpbmdzX3RvZ2dsZV9pY29uJztcblxuZnVuY3Rpb24gdXBkYXRlQWNjZXNzaWJpbGl0eVRyaWdnZXJBMTF5KHRyaWdnZXJCdXR0b24pIHtcblx0aWYgKCF0cmlnZ2VyQnV0dG9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVhc29uOiBUaGUgaWNvbiBpcyBkZWNvcmF0aXZlOyB0aGUgYnV0dG9uIGl0c2VsZiBuZWVkcyB0aGUgc3Bva2VuIGxhYmVsLlxuXHRpZiAoIXRyaWdnZXJCdXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcblx0XHR0cmlnZ2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdBY2Nlc3NpYmlsaXR5IHNldHRpbmdzJyk7XG5cdH1cblxuXHRjb25zdCB0cmlnZ2VySWNvbiA9IHRyaWdnZXJCdXR0b24ucXVlcnlTZWxlY3RvcihJQ09OX1NFTEVDVE9SKTtcblx0aWYgKHRyaWdnZXJJY29uKSB7XG5cdFx0dHJpZ2dlckljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XG5cdFx0dHJpZ2dlckljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFjY2Vzc2liaWxpdHlXaWRnZXRBMTF5KCkge1xuXHRjb25zdCB0cmlnZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihBMTFZX1RPR0dMRV9TRUxFQ1RPUik7XG5cdHVwZGF0ZUFjY2Vzc2liaWxpdHlUcmlnZ2VyQTExeSh0cmlnZ2VyQnV0dG9uKTtcblxuXHQvLyBSZWFzb246IFRoaXJkLXBhcnR5IHdpZGdldCBjYW4gcmUtcmVuZGVyIHRoZSB0cmlnZ2VyIGFmdGVyIGluaXRpYWwgcGFnZSBsb2FkLlxuXHRpZiAoIWRvY3VtZW50LmJvZHkuZGF0YXNldC5zZW5hdGVBY2Nlc3NpYmlsaXR5T2JzZXJ2ZXIpIHtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHVwZGF0ZWRUcmlnZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihBMTFZX1RPR0dMRV9TRUxFQ1RPUik7XG5cdFx0XHR1cGRhdGVBY2Nlc3NpYmlsaXR5VHJpZ2dlckExMXkodXBkYXRlZFRyaWdnZXJCdXR0b24pO1xuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblx0XHRkb2N1bWVudC5ib2R5LmRhdGFzZXQuc2VuYXRlQWNjZXNzaWJpbGl0eU9ic2VydmVyID0gJ3RydWUnO1xuXHR9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmJFdmVudCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYGJFdmVudGA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblxuXHRcdGxldCAkc2xpZGVyID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19zbGlkZXItaXRlbXNgKTtcblx0XHRsZXQgJHNsaWRlcl9fc2xpZGVfbmF2ID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19zbGlkZXItbmF2YCk7XG5cblx0XHQkc2xpZGVyLm9uKCdpbml0JywgKGV2ZW50LCBzbGljaykgPT4ge1xuXHRcdFx0JChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcuc2xpY2stc2xpZGVbYXJpYS1kZXNjcmliZWRieV0nKS5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG5cdFx0fSk7XG5cblx0XHQkc2xpZGVyLnNsaWNrKHtcblx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2UsXG5cdFx0XHRwYXVzZU9uRm9jdXM6IGZhbHNlLFxuXHRcdFx0YWNjZXNzaWJpbGl0eTogdHJ1ZSxcblx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRhcHBlbmREb3RzOiAkc2xpZGVyX19zbGlkZV9uYXYsXG5cdFx0XHRhcnJvd3M6IHRydWUsXG5cdFx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRcdHNwZWVkOiA0MDAsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDE1MDAwLFxuXHRcdFx0c3dpcGU6IGZhbHNlLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAyLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRjc3NFYXNlOiBcImVhc2VcIixcblx0XHRcdHJlc3BvbnNpdmU6IFt7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDc2OCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdFx0XHRcdHN3aXBlOiB0cnVlLFxuXHRcdFx0XHRcdGF1dG9wbGF5OiBmYWxzZSxcblx0XHRcdFx0XHRpbmZpbml0ZTogZmFsc2UsXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxXG5cdFx0XHRcdH1cblx0XHRcdH1dXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJFdmVudDtcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7Y2hlY2tJbml0fSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5iRXZlbnRzID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0dGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBgYkV2ZW50c2A7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblx0XHRsZXQgJG1vZGFsID0gJChgI21vZGFsLXZpZGVvYCk7XG5cdFx0aWYgKCEkbW9kYWwubGVuZ3RoKSByZXR1cm47XG5cdFx0bGV0IGlmcmFtZSA9ICRtb2RhbC5maW5kKGBpZnJhbWVgKTtcblxuXHRcdCRlbG0ub24oJ2NsaWNrIHRvdWNoJywgYC4ke3RoaXMubmFtZX1fX2ltZ1dyYXAsIC4ke3RoaXMubmFtZX1fX3JlYWRNb3JlYCwgKGUpID0+IHtcblx0XHRcdGxldCB2aWRlb0lkID0gJChlLnRhcmdldCkuY2xvc2VzdChgLiR7dGhpcy5uYW1lfV9faXRlbWApLmF0dHIoJ2RhdGEtdmlkZW9JZCcpO1xuXHRcdFx0aWYgKCF2aWRlb0lkKSByZXR1cm47XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWZyYW1lLmF0dHIoYGlkYCwgdmlkZW9JZCk7XG5cdFx0XHRpZnJhbWUuYXR0cihgc3JjYCwgYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/cmVsPTAmYW1wO2NvbnRyb2xzPTEmYW1wO3Nob3dpbmZvPTAmYW1wO2VuYWJsZWpzYXBpPTFgKTtcblx0XHRcdCRtb2RhbC5tb2RhbChgc2hvd2ApO1xuXHRcdFx0d2luZG93LnBsYXllclZpZGVvTW9kYWwgPSAnJztcblxuXHRcdFx0b25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKTtcblxuXHRcdFx0ZnVuY3Rpb24gb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKSB7XG5cdFx0XHRcdHdpbmRvdy5wbGF5ZXJWaWRlb01vZGFsID0gbmV3IFlULlBsYXllcih2aWRlb0lkLCB7XG5cdFx0XHRcdFx0dmlkZW9JZDogdmlkZW9JZCxcblx0XHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRcdCdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JG1vZGFsLm9uKCdoaWRlLmJzLm1vZGFsJywgKCkgPT4ge1xuXHRcdFx0aWZyYW1lLmF0dHIoYGlkYCwgJycpO1xuXHRcdFx0aWZyYW1lLmF0dHIoYHNyY2AsIGBgKTtcblx0XHRcdHdpbmRvdy5wbGF5ZXIgPSAnJztcblx0XHR9KVxuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJFdmVudHM7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG53aW5kb3cubGlnaHRTbGlkZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBiTGlnaHRTbGlkZXJgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHRsZXQgJHNsaWRlciA9ICRlbG0uZmluZChgLiR7dGhpcy5uYW1lfV9fc2xpZGVzYCk7XG5cblx0XHRpZiAoISRzbGlkZXIubGVuZ3RoKSByZXR1cm47XG5cblx0XHQkc2xpZGVyLmxpZ2h0U2xpZGVyKHtcblx0XHRcdGdhbGxlcnk6IHRydWUsXG5cdFx0XHRpdGVtOiAxLFxuXHRcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cdFx0XHR2VGh1bWJXaWR0aDogMTE4LFxuXHRcdFx0dGh1bWJJdGVtOiA1LFxuXHRcdFx0dGh1bWJNYXJnaW46IDQsXG5cdFx0XHRzbGlkZU1hcmdpbjogMCxcblx0XHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDc2OCxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0dGh1bWJJdGVtOiA0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YnJlYWtwb2ludDogNDUwLFxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHR0aHVtYkl0ZW06IDNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRTbGlkZXI7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0galF1ZXJ5O1xuXG5cbiAgY29uc3QgcGx1Z2luTmFtZSA9ICdiTWVkaWEnO1xuXG4gIGNsYXNzIFZpZGVvUGxheSB7XG4gICAgY29uc3RydWN0b3IoZWxtLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLmVsbSA9IGVsbTtcbiAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vb3B0aW9ucyBoZXJlXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZTtcblxuICAgICAgaWYoIXRoaXMucHJvY2Vzc2VkKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnByb2Nlc3NlZCA9ICF0aGlzLnByb2Nlc3NlZDtcblxuICAgICAgdmFyICRXcmFwID0gJCh0aGlzLmVsbSk7XG4gICAgICB2YXIgJHBsYXlCdG4gPSAkV3JhcC5maW5kKCcuYk1lZGlhX19wbGF5LWJ0bicpO1xuXG4gICAgICBpZiAoISRwbGF5QnRuLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAkcGxheUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgICAgICB2YXIgJHZpZGVvID0gJFdyYXAuZmluZCh0YXJnZXQpO1xuICAgICAgICAkV3JhcC5hZGRDbGFzcygnYk1lZGlhX2FjdGl2ZScpO1xuXG4gICAgICAgIGlmICgkdmlkZW8ubGVuZ3RoKSB7XG4gICAgICAgICAgdG9nZ2xlVmlkZW8oJHZpZGVvWzBdLCAncGxheVZpZGVvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiB0b2dnbGVWaWRlbyh2aWRlbywgc3RhdGUpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBzdGF0ZSA9PSAncGF1c2UnID8gJ3BhdXNlVmlkZW8nIDogJ3BsYXlWaWRlbyc7XG4gICAgICAgIHZhciBpZnJhbWUgPSB2aWRlby5jb250ZW50V2luZG93O1xuXG4gICAgICAgIGlmcmFtZS5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcIicgKyBmdW5jICsgJ1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3aW5kb3cuQmxvY2tWaWRlbyA9IChpdGVtLCBvcHRpb25zKSA9PiB7XG4gICAgdmFyIHZpZGVvQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBwbHVnaW5OYW1lKTtcblxuICAgIGlmICh2aWRlb0Jsb2Nrcy5sZW5ndGgpICB7XG4gICAgICB2aWRlb0Jsb2NrcyA9ICQodmlkZW9CbG9ja3MpO1xuXG4gICAgICBpZiAoISQoJyNpZnJhbWUteW91dHViZS1hcGknKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB0YWcuaWQgPSAnaWZyYW1lLXlvdXR1YmUtYXBpJztcbiAgICAgICAgdGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICAgICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGFSZWRpcmVjdFVybCA9ICdkYXRhLXJlZGlyZWN0LXVybCc7XG4gICAgICB2YXIgdmlkZW9CbG9ja3NDbGFzcyA9ICcuJyArIHBsdWdpbk5hbWU7XG5cbiAgICAgIGlmICh3aW5kb3cuaW5pdE9uWW91VHViZUlmcmFtZUFQSVJlYWR5KSB7XG4gICAgICAgIHZhciByZU9wZW5QcmV2aWV3ID0gdmlkZW9CbG9ja3MuaGFzKCcuYk1lZGlhX19wbGF5LWJ0bicpLm5vdCgnWycgKyBkYXRhUmVkaXJlY3RVcmwgKyAnXScpO1xuXG4gICAgICAgICQocmVPcGVuUHJldmlldykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICB2YXIgcmVPcGVuUHJldmlld29JZCA9ICQodGhpcykuZmluZCgnaWZyYW1lJykuYXR0cignaWQnKTtcbiAgICAgICAgICBpZiAoIXJlT3BlblByZXZpZXdvSWQpIHJldHVybjtcblxuICAgICAgICAgIHdpbmRvd1sncGxheWVyLScgKyBpbmRleCArICctJyArIHJlT3BlblByZXZpZXdvSWRdID0gbmV3IFlULlBsYXllcihyZU9wZW5QcmV2aWV3b0lkLCB7XG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VSZU9wZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIHdpbmRvdy5pbml0T25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHJlT3BlblByZXZpZXcgPSB2aWRlb0Jsb2Nrcy5oYXMoJy5iTWVkaWFfX3BsYXktYnRuJykubm90KCdbJyArIGRhdGFSZWRpcmVjdFVybCArICddJyk7XG4gICAgICAgICAgdmFyIHJlZGlyZWN0VmlkZW8gPSB2aWRlb0Jsb2Nrcy5maWx0ZXIoJ1snICsgZGF0YVJlZGlyZWN0VXJsICsgJ10nKTtcblxuICAgICAgICAgICQocmVkaXJlY3RWaWRlbykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciByZWRpcmVjdFZpZGVvSWQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoIXJlZGlyZWN0VmlkZW9JZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB3aW5kb3dbJ3BsYXllci0nICsgaW5kZXggKyAnLScgKyByZWRpcmVjdFZpZGVvSWRdID0gbmV3IFlULlBsYXllcihyZWRpcmVjdFZpZGVvSWQsIHtcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZUZvclJlZGlyZWN0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJChyZU9wZW5QcmV2aWV3KS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIHJlT3BlblByZXZpZXdvSWQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoIXJlT3BlblByZXZpZXdvSWQpIHJldHVybjtcblxuICAgICAgICAgICAgd2luZG93WydwbGF5ZXItJyArIGluZGV4ICsgJy0nICsgcmVPcGVuUHJldmlld29JZF0gPSBuZXcgWVQuUGxheWVyKHJlT3BlblByZXZpZXdvSWQsIHtcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVJlT3BlblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lm9uUGxheWVyUmVhZHkgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgJHZpZGVvV3JhcCA9ICQoZXZlbnQudGFyZ2V0LmEpLmNsb3Nlc3QodmlkZW9CbG9ja3NDbGFzcyk7XG5cbiAgICAgICAgaWYgKCR2aWRlb1dyYXAuaGFzQ2xhc3MoJ2JNZWRpYV9hY3RpdmUnKSkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93Lm9uUGxheWVyU3RhdGVDaGFuZ2VSZU9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQuZGF0YSAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciAkdmlkZW9XcmFwID0gJChldmVudC50YXJnZXQuYSkuY2xvc2VzdCh2aWRlb0Jsb2Nrc0NsYXNzKTtcbiAgICAgICAgaWYgKCEkdmlkZW9XcmFwLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICR2aWRlb1dyYXAucmVtb3ZlQ2xhc3MoJ2JNZWRpYV9hY3RpdmUnKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5vblBsYXllclN0YXRlQ2hhbmdlRm9yUmVkaXJlY3QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQuZGF0YSAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciAkdmlkZW9XcmFwID0gJChldmVudC50YXJnZXQuYSkuY2xvc2VzdCh2aWRlb0Jsb2Nrc0NsYXNzKTtcbiAgICAgICAgaWYgKCEkdmlkZW9XcmFwLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICR2aWRlb1dyYXAuYWRkQ2xhc3MoJ2JNZWRpYV9lbmQnKTtcbiAgICAgICAgdmFyIHVybFJlZGlyZWN0ID0gJHZpZGVvV3JhcC5hdHRyKGRhdGFSZWRpcmVjdFVybCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJHZpZGVvV3JhcCk7XG4gICAgICAgIGlmICh1cmxSZWRpcmVjdCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybFJlZGlyZWN0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgKGl0ZW0gfHwgcGx1Z2luTmFtZSkpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhwbHVnaW5OYW1lICsgJ19wcm9jZXNzZWQnKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQocGx1Z2luTmFtZSArICdfcHJvY2Vzc2VkJyk7XG4gICAgICAgIG5ldyBWaWRlb1BsYXkoaXRlbSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tWaWRlbzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmJTb3J0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0dGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBgYlNvcnRgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuJHt0aGlzLm5hbWV9X190aXRsZWAsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRcdFx0bGV0ICR0aGlzID0gJChlLnRhcmdldCk7XG5cdFx0XHRsZXQgJGl0ZW0gPSAkdGhpcy5jbG9zZXN0KGAuJHt0aGlzLm5hbWV9X19pdGVtYCk7XG5cblx0XHRcdGlmICghJGl0ZW0ubGVuZ3RoKSByZXR1cm47XG5cblx0XHRcdCRpdGVtLnRvZ2dsZUNsYXNzKGAke3RoaXMubmFtZX1fb3BlbmApO1xuXHRcdFx0JGl0ZW0uZmluZChgLiR7dGhpcy5uYW1lfV9fYm9keWApLnNsaWRlVG9nZ2xlKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJTb3J0O1xuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtjaGVja0luaXR9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmJTdGFmZiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYGJTdGFmZmA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblx0XHRsZXQgcHJlZml4ID0gJ2xldHRlci0nO1xuXHRcdGxldCBjb21wTmFtZSA9IGAke3RoaXMubmFtZX1gO1xuXG5cdFx0bGV0ICRsZXR0ZXJzID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFgKTtcblx0XHRsZXQgJGl0ZW1zID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19pdGApO1xuXG5cdFx0JGxldHRlcnMuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0bGV0IGxldHRlciA9ICQoaXRlbSkuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cdFx0XHRsZXQgJHRhcmdldCA9ICRpdGVtcy5maWx0ZXIoKGksIHRlcm0pID0+IHtcblx0XHRcdFx0cmV0dXJuICQodGVybSkuYXR0cignZGF0YS1sZXR0ZXInKSA9PT0gbGV0dGVyXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHQkKGl0ZW0pLmFkZENsYXNzKGAke3RoaXMubmFtZX1fX2xldF9kaXNhYmxlZGApXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFgLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRsZXQgJGN1ckxldHRlciA9ICQoZS50YXJnZXQpO1xuXHRcdFx0bGV0IGxldHRlciA9ICRjdXJMZXR0ZXIuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cblx0XHRcdHNob3dJdGVtcyhsZXR0ZXIsICRjdXJMZXR0ZXIpO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gc2hvd0l0ZW1zKGxldHRlciwgJGN1ckxldHRlcikge1xuXG5cdFx0XHRsZXQgJHRhcmdldCA9ICRpdGVtcy5maWx0ZXIoKGksIHRlcm0pID0+IHtcblx0XHRcdFx0cmV0dXJuICQodGVybSkuYXR0cignZGF0YS1sZXR0ZXInKSA9PT0gbGV0dGVyXG5cdFx0XHR9KTtcblxuXHRcdFx0JGxldHRlcnMucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X19sZXRfYWN0aXZlYCk7XG5cdFx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X19pdF9hY3RpdmVgKTtcblx0XHRcdCRpdGVtcy5yZW1vdmVDbGFzcyhgYlRiX190cl9sYXN0YCk7XG5cdFx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoYGJUYl9fdHJfZmlyc3RgKTtcblxuXHRcdFx0JGVsbS5hZGRDbGFzcyhgJHtjb21wTmFtZX1fZmlsdGVyYCk7XG5cdFx0XHQkdGFyZ2V0LmFkZENsYXNzKGAke2NvbXBOYW1lfV9faXRfYWN0aXZlYCk7XG5cdFx0XHQkKCR0YXJnZXRbMF0pLmFkZENsYXNzKGBiVGJfX3RyX2ZpcnN0YCk7XG5cdFx0XHQkKCR0YXJnZXRbJHRhcmdldC5sZW5ndGggLSAxXSkuYWRkQ2xhc3MoYGJUYl9fdHJfbGFzdGApO1xuXHRcdFx0JGN1ckxldHRlci5hZGRDbGFzcyhgJHtjb21wTmFtZX1fX2xldF9hY3RpdmVgKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJTdGFmZjtcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7Y2hlY2tJbml0fSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5iVGVybXMgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBiVGVybXNgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cdFx0bGV0IHByZWZpeCA9ICdsZXR0ZXItJztcblx0XHRsZXQgcHJlZml4Q29udGVudCA9ICdpdGVtLSc7XG5cdFx0bGV0IGNvbXBOYW1lID0gYCR7dGhpcy5uYW1lfWA7XG5cblx0XHRsZXQgJGxldHRlcnMgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX2ZpbExldHRlcnMgYWApO1xuXHRcdGxldCAkaXRlbXMgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX2l0YCk7XG5cblx0XHRsZXQgJG1vcmUgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX21vcmVgKTtcblxuXG5cdFx0JGxldHRlcnMuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0bGV0IGxldHRlciA9ICQoaXRlbSkuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cdFx0XHRsZXQgJHRhcmdldCA9ICRpdGVtcy5maWx0ZXIoKGksIHRlcm0pID0+IHtcblx0XHRcdFx0cmV0dXJuICQodGVybSkuYXR0cignZGF0YS1sZXR0ZXInKSA9PT0gbGV0dGVyXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHQkKGl0ZW0pLmFkZENsYXNzKGAke3RoaXMubmFtZX1fX2xldF9kaXNhYmxlZGApXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFgLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRsZXQgJGN1ckxldHRlciA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRsZXQgbGV0dGVyID0gJGN1ckxldHRlci5hdHRyKCdocmVmJykucmVwbGFjZSgnIycgKyBwcmVmaXgsICcnKTtcblxuXHRcdFx0c2hvd0l0ZW1zKGxldHRlciwgJGN1ckxldHRlcik7XG5cdFx0fSk7XG5cblx0XHQkbW9yZS5vbignY2xpY2sgdG91Y2gnLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JGVsbS50b2dnbGVDbGFzcyhgJHt0aGlzLm5hbWV9X29wZW5gKVxuXHRcdH0pO1xuXG5cdFx0c2hvd0l0ZW1zKCdhJywgJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFbaHJlZj1cIiNsZXR0ZXItYVwiXWApKTtcblxuXHRcdGZ1bmN0aW9uIHNob3dJdGVtcyhsZXR0ZXIsICRjdXJMZXR0ZXIpIHtcblxuXHRcdFx0bGV0ICR0YXJnZXQgPSAkaXRlbXMuZmlsdGVyKChpLCB0ZXJtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAkKHRlcm0pLmF0dHIoJ2RhdGEtbGV0dGVyJykgPT09IGxldHRlclxuXHRcdFx0fSk7XG5cblx0XHRcdCRsZXR0ZXJzLnJlbW92ZUNsYXNzKGAke2NvbXBOYW1lfV9fbGV0X2FjdGl2ZWApO1xuXHRcdFx0JGl0ZW1zLnJlbW92ZUNsYXNzKGAke2NvbXBOYW1lfV9faXRfYWN0aXZlYCk7XG5cdFx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X19pdF9hY3RpdmVfc2hvd2ApO1xuXHRcdFx0JGVsbS5yZW1vdmVDbGFzcyhgJHtjb21wTmFtZX1fc2hvd01vcmVgKTtcblx0XHRcdCRlbG0ucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X29wZW5gKTtcblxuXHRcdFx0JHRhcmdldC5hZGRDbGFzcyhgJHtjb21wTmFtZX1fX2l0X2FjdGl2ZWApO1xuXHRcdFx0JHRhcmdldC5zbGljZSgwLCAxMCkuYWRkQ2xhc3MoYCR7Y29tcE5hbWV9X19pdF9hY3RpdmVfc2hvd2ApO1xuXHRcdFx0JGN1ckxldHRlci5hZGRDbGFzcyhgJHtjb21wTmFtZX1fX2xldF9hY3RpdmVgKTtcblxuXHRcdFx0aWYgKCR0YXJnZXQubGVuZ3RoID4gMTApIHtcblx0XHRcdFx0JGVsbS5hZGRDbGFzcyhgJHtjb21wTmFtZX1fc2hvd01vcmVgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJUZXJtcztcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjb25zdCBjaGVja0luaXQgPSAoc2VsZWN0b3IsIG5hbWUsIGluaXQpPT4ge1xuXG5cdGxldCBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7c2VsZWN0b3J9YCk7XG5cblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChub2RlcywgZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRpZighaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoYCR7bmFtZX1fcHJvY2Vzc2VkYCkpIHtcblx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChgJHtuYW1lfV9wcm9jZXNzZWRgKTtcblx0XHRcdGluaXQoaXRlbSk7XG5cdFx0fVxuXHR9KTtcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG53aW5kb3cuTW9kYWwgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBtb2RhbGA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblxuXHRcdHRoaXMuY2hlY2tIYXNoKCk7XG5cblx0XHQkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmNoZWNrSGFzaCgpO1xuXHRcdH0pO1xuXG5cdFx0JC5zdXBwb3J0LnRyYW5zaXRpb24gPSBmYWxzZTtcblxuXHRcdCQoJGVsbSkub24oJ2hpZGUuYnMubW9kYWwnLCAoKSA9PiB7XG5cdFx0XHRjb25zdCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcblxuXHRcdFx0JCgnaHRtbCwgYm9keScpLnNjcm9sbFRvcChzY3JvbGxUb3ApO1xuXHRcdH0pO1xuXHR9XG5cblx0Y2hlY2tIYXNoKCkge1xuXHRcdGNvbnN0ICRlbCA9ICQod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuXG5cdFx0aWYoJGVsLmxlbmd0aCAmJiAkZWwuaGFzQ2xhc3MoJ21vZGFsJykpIHtcblx0XHRcdCRlbC5tb2RhbCgnc2hvdycpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93Lm5hdlNlbGVjdCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYG5hdlNlbGVjdGA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblx0XHR0aGlzLnByZWZpeCA9IHByb3BzLnByZWZpeCB8fCBgeWVhci1gO1xuXHRcdHRoaXMucHJlZml4Q29udGVudCA9IHByb3BzLnByZWZpeENvbnRlbnQgfHwgYG92ZXJ2aWV3LWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHRsZXQgJHNlbGVjdCA9ICRlbG0uZmluZChgc2VsZWN0YCk7XG5cblx0XHRpZighJHNlbGVjdC5sZW5ndGgpIHJldHVybjtcblxuXHRcdGxldCAkYm9keSA9ICQoJ2JvZHksIGh0bWwnKTtcblx0XHRsZXQgcHJlZml4ID0gYCR7dGhpcy5wcmVmaXh9YDtcblx0XHRsZXQgcHJlZml4Q29udGVudCA9IGAke3RoaXMucHJlZml4Q29udGVudH1gO1xuXHRcdGxldCBzcGVlZCA9IDYwMDtcblxuXHRcdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIH53aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjJyArIHByZWZpeCkpIHtcblx0XHRcdGFuaW1hdGlvbih3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJyArIHByZWZpeCwgJycpKTtcblx0XHR9XG5cblx0XHQkc2VsZWN0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRhbmltYXRpb24oJCh0aGlzKS52YWwoKSk7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBhbmltYXRpb24odmFsKSB7XG5cdFx0XHRsZXQgJHRhcmdldCA9ICQoJyMnICsgcHJlZml4Q29udGVudCArIHZhbCk7XG5cblx0XHRcdGlmKCEkdGFyZ2V0Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHByZWZpeCArIHZhbDtcblxuXHRcdFx0bGV0IGFkbWluTWVudSA9IHBhcnNlSW50KCQoYGJvZHlgKS5jc3MoJ3BhZGRpbmctdG9wJykpO1xuXG5cdFx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLnNIZWFkZXInKS5sZW5ndGggPyAkKCcuc0hlYWRlcicpLm91dGVySGVpZ2h0KCkgOiAwO1xuXG5cdFx0XHQkYm9keS5hbmltYXRlKHtzY3JvbGxUb3A6ICR0YXJnZXQub2Zmc2V0KCkudG9wIC0gMTAgLSBoZWFkZXJIZWlnaHQgLSBhZG1pbk1lbnV9LCBzcGVlZCk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZTZWxlY3Q7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG53aW5kb3cuc0hlYWRlciA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYHNIZWFkZXJgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cdFx0Y29uc3QgY29tcG9uZW50TmFtZSA9IHRoaXMubmFtZTtcblx0XHRjb25zdCAkc2VhcmNoVG9nZ2xlQnV0dG9uID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19zZWFyY2hCdG5gKTtcblx0XHRjb25zdCAkc2VhcmNoRm9ybVdyYXBwZXIgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX3NlYXJjaEZvcm1gKTtcblx0XHRjb25zdCBpc1NlYXJjaEluaXRpYWxseUV4cGFuZGVkID0gJGVsbS5oYXNDbGFzcyhgJHt0aGlzLm5hbWV9X3NlYXJjaE9wZW5gKTtcblxuXHRcdC8vIFJlYXNvbjogS2VlcCBBUklBIGFuZCBmb2N1c2FiaWxpdHkgaW4gc3luYyB3aXRob3V0IGJyZWFraW5nIENTUyB0cmFuc2Zvcm0gYW5pbWF0aW9uLlxuXHRcdGNvbnN0IHN5bmNTZWFyY2hBY2Nlc3NpYmlsaXR5U3RhdGUgPSAoJHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLCBpc0V4cGFuZGVkKSA9PiB7XG5cdFx0XHQkc2VhcmNoVG9nZ2xlQnV0dG9uLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc0V4cGFuZGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG5cdFx0XHQkdGFyZ2V0U2VhcmNoRm9ybVdyYXBwZXIuYXR0cignYXJpYS1oaWRkZW4nLCBpc0V4cGFuZGVkID8gJ2ZhbHNlJyA6ICd0cnVlJyk7XG5cdFx0XHRpZiAoaXNFeHBhbmRlZCkge1xuXHRcdFx0XHQkdGFyZ2V0U2VhcmNoRm9ybVdyYXBwZXIucmVtb3ZlQXR0cignaW5lcnQnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0JHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLmF0dHIoJ2luZXJ0JywgJ2luZXJ0Jyk7XG5cdFx0fTtcblx0XHRjb25zdCBjb2xsYXBzZVNlYXJjaEZvcm0gPSAoJHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyID0gJHNlYXJjaEZvcm1XcmFwcGVyKSA9PiB7XG5cdFx0XHQkZWxtLnJlbW92ZUNsYXNzKGAke3RoaXMubmFtZX1fc2VhcmNoT3BlbmApO1xuXHRcdFx0c3luY1NlYXJjaEFjY2Vzc2liaWxpdHlTdGF0ZSgkdGFyZ2V0U2VhcmNoRm9ybVdyYXBwZXIsIGZhbHNlKTtcblx0XHR9O1xuXG5cdFx0c3luY1NlYXJjaEFjY2Vzc2liaWxpdHlTdGF0ZSgkc2VhcmNoRm9ybVdyYXBwZXIsIGlzU2VhcmNoSW5pdGlhbGx5RXhwYW5kZWQpO1xuXG5cdFx0JGVsbS5vbignY2xpY2sgdG91Y2gnLCBgLiR7dGhpcy5uYW1lfV9fYnRuLW1vYmlsZWAsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkZWxtLnRvZ2dsZUNsYXNzKGAke3RoaXMubmFtZX1fbW9iaWxlTWVudWApO1xuXHRcdFx0JCgnYm9keScpLnRvZ2dsZUNsYXNzKGBtb2JpbGVNZW51LW9wZW5gKTtcblxuXHRcdFx0Y29sbGFwc2VTZWFyY2hGb3JtKCRzZWFyY2hGb3JtV3JhcHBlcik7XG5cblx0XHRcdGNvbnN0IGlzRXhwYW5kZWQgPSAkZWxtLmhhc0NsYXNzKGAke3RoaXMubmFtZX1fbW9iaWxlTWVudWApO1xuXHRcdFx0JChlLmN1cnJlbnRUYXJnZXQpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBpc0V4cGFuZGVkID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG5cdFx0XHQvL2FkZGluZyBBcmlhIGF0dHJpYnV0ZSB0byByZWZsZWN0IGVpdGhlciBtZW51IGV4cGFuZGVkIG9yIGNvbGxhcHNlZFxuXHRcdH0pO1xuXG5cdFx0JGVsbS5vbignY2xpY2sgdG91Y2gnLCBgLiR7dGhpcy5uYW1lfV9fc2VhcmNoQnRuYCwgKGUpID0+IHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCRlbG0udG9nZ2xlQ2xhc3MoYCR7dGhpcy5uYW1lfV9zZWFyY2hPcGVuYCk7XG5cblx0XHRcdCRlbG0ucmVtb3ZlQ2xhc3MoYCR7dGhpcy5uYW1lfV9tb2JpbGVNZW51YCk7XG5cdFx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoYG1vYmlsZU1lbnUtb3BlbmApO1xuXG5cdFx0XHRjb25zdCBpc0V4cGFuZGVkID0gJGVsbS5oYXNDbGFzcyhgJHt0aGlzLm5hbWV9X3NlYXJjaE9wZW5gKTtcblx0XHRcdGNvbnN0ICRjbGlja2VkU2VhcmNoRm9ybVdyYXBwZXIgPSAkKGUuY3VycmVudFRhcmdldCkuc2libGluZ3MoYC4ke3RoaXMubmFtZX1fX3NlYXJjaEZvcm1gKS5maXJzdCgpO1xuXHRcdFx0Y29uc3QgJHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyID0gJGNsaWNrZWRTZWFyY2hGb3JtV3JhcHBlci5sZW5ndGggPyAkY2xpY2tlZFNlYXJjaEZvcm1XcmFwcGVyIDogJHNlYXJjaEZvcm1XcmFwcGVyO1xuXHRcdFx0c3luY1NlYXJjaEFjY2Vzc2liaWxpdHlTdGF0ZSgkdGFyZ2V0U2VhcmNoRm9ybVdyYXBwZXIsIGlzRXhwYW5kZWQpO1xuXHRcdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGlzRXhwYW5kZWRBZnRlckFsbEhhbmRsZXJzID0gJGVsbS5oYXNDbGFzcyhgJHt0aGlzLm5hbWV9X3NlYXJjaE9wZW5gKTtcblx0XHRcdFx0c3luY1NlYXJjaEFjY2Vzc2liaWxpdHlTdGF0ZSgkdGFyZ2V0U2VhcmNoRm9ybVdyYXBwZXIsIGlzRXhwYW5kZWRBZnRlckFsbEhhbmRsZXJzKTtcblx0XHRcdH0pO1xuXHRcdFx0Ly9hZGRpbmcgQXJpYSBhdHRyaWJ1dGUgdG8gcmVmbGVjdCB3aGV0aGVyIHRoZSBTZWFyY2ggZm9ybSBpcyBleHBhbmRlZCBvciBjb2xsYXBzZWRcblx0XHRcdCRlbG0uZmluZChgLiR7dGhpcy5uYW1lfV9fYnRuLW1vYmlsZWApLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuXHRcdFx0aWYgKGlzRXhwYW5kZWQpIHtcblx0XHRcdFx0JGVsbS5maW5kKCcuZi1zZWFyY2ggaW5wdXQuZm9ybS1zZWFyY2gnKS5mb2N1cygpO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cdFx0JChkb2N1bWVudCkub24oJ2ZvY3VzaW4nLCBgLmJTaGFyZS5zZWN0aW9uX19iU2hhcmUgYnV0dG9uLCAuYlNoYXJlLnNlY3Rpb25fX2JTaGFyZSBhLCAuYlNoYXJlLnNlY3Rpb25fX2JTaGFyZSBbcm9sZT1cImJ1dHRvblwiXWAsICgpID0+IHtcblx0XHRcdGlmICghJGVsbS5oYXNDbGFzcyhgJHt0aGlzLm5hbWV9X3NlYXJjaE9wZW5gKSkgcmV0dXJuO1xuXHRcdFx0Ly8gUmVhc29uOiBLZWVwIGZvY3VzZWQgc2hhcmUgYnV0dG9ucyB2aXNpYmxlIHdoZW4ga2V5Ym9hcmQgdXNlcnMgbW92ZSBiZWhpbmQgdGhlIHNlYXJjaCBvdmVybGF5LlxuXHRcdFx0Y29sbGFwc2VTZWFyY2hGb3JtKCRzZWFyY2hGb3JtV3JhcHBlcik7XG5cdFx0fSk7XG5cblx0XHRhZGRQYWRkaW5nKCk7XG5cdFx0YWRkQWNjZXNzaWJpbGl0eUNvb2tpZSgpO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKSA9PiB7XG5cdFx0XHRhZGRQYWRkaW5nKCk7XG5cdFx0fSk7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuYk1lc3NhZ2VfX2Nsb3NlYCwgKCkgPT4ge1xuXHRcdFx0YWRkUGFkZGluZygpO1xuXHRcdH0pO1xuXG5cdFx0aW5pdEtleWJvYXJkTmF2aWdhdGlvbigpO1xuXG5cdFx0JChkb2N1bWVudCkub24oJ2RydXBhbFZpZXdwb3J0T2Zmc2V0Q2hhbmdlLnRvb2xiYXInLCBmdW5jdGlvbiAoZXZlbnQsIG9mZnNldHMpIHtcblx0XHRcdCRlbG0uY3NzKCd0b3AnLCBvZmZzZXRzLnRvcCk7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBpbml0S2V5Ym9hcmROYXZpZ2F0aW9uKCkge1xuXHRcdFx0Y29uc3QgdG9wTGV2ZWxFeHBhbmRlZFNlbGVjdG9yID0gYC4ke2NvbXBvbmVudE5hbWV9X19tZW51LXdyYXAgPiB1bC5tZW51ID4gbGkubWVudS1pdGVtLS1leHBhbmRlZGA7XG5cdFx0XHRjb25zdCBrZXlib2FyZE9wZW5DbGFzcyA9IGBob3ZlcmA7XG5cblx0XHRcdCRlbG0uZmluZCh0b3BMZXZlbEV4cGFuZGVkU2VsZWN0b3IpLmVhY2goKF8sIGxpc3RJdGVtRWxlbWVudCkgPT4ge1xuXHRcdFx0XHRjb25zdCAkbGlzdEl0ZW0gPSAkKGxpc3RJdGVtRWxlbWVudCk7XG5cdFx0XHRcdGNvbnN0ICRzdWJtZW51ID0gJGxpc3RJdGVtLmNoaWxkcmVuKGB1bC5tZW51YCkuZmlyc3QoKTtcblx0XHRcdFx0Y29uc3QgJHRyaWdnZXIgPSAkbGlzdEl0ZW0uY2hpbGRyZW4oYGEsIHNwYW5gKS5maXJzdCgpO1xuXG5cdFx0XHRcdGlmICghJHN1Ym1lbnUubGVuZ3RoIHx8ICEkdHJpZ2dlci5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0XHQvLyBSZWFzb246IFNvbWUgbWVudSBpdGVtcyBhcmUgcmVuZGVyZWQgYXMgPHNwYW4+LCBzbyB3ZSBtYWtlIHRoZW0gZm9jdXNhYmxlIGtleWJvYXJkIHRyaWdnZXJzLlxuXHRcdFx0XHRpZiAoJHRyaWdnZXIuaXMoYHNwYW5gKSkge1xuXHRcdFx0XHRcdCR0cmlnZ2VyLmF0dHIoe1xuXHRcdFx0XHRcdFx0J3RhYmluZGV4JzogJzAnLFxuXHRcdFx0XHRcdFx0J3JvbGUnOiAnYnV0dG9uJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0JHRyaWdnZXIuYXR0cih7XG5cdFx0XHRcdFx0J2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG5cdFx0XHRcdFx0J2FyaWEtZXhwYW5kZWQnOiAnZmFsc2UnXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCRsaXN0SXRlbS5vbihgZm9jdXNpbmAsICgpID0+IHtcblx0XHRcdFx0XHRvcGVuU3VibWVudSgkbGlzdEl0ZW0sICR0cmlnZ2VyLCBrZXlib2FyZE9wZW5DbGFzcyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCRsaXN0SXRlbS5vbihgZm9jdXNvdXRgLCAoZm9jdXNFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGhhc0ZvY3VzZWREZXNjZW5kYW50ID0gbGlzdEl0ZW1FbGVtZW50LmNvbnRhaW5zKGZvY3VzRXZlbnQucmVsYXRlZFRhcmdldCk7XG5cdFx0XHRcdFx0aWYgKGhhc0ZvY3VzZWREZXNjZW5kYW50KSByZXR1cm47XG5cdFx0XHRcdFx0Y2xvc2VTdWJtZW51KCRsaXN0SXRlbSwgJHRyaWdnZXIsIGtleWJvYXJkT3BlbkNsYXNzKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0JHRyaWdnZXIub24oYGtleWRvd25gLCAoa2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleUNvZGUgPSBrZXlib2FyZEV2ZW50LmtleTtcblx0XHRcdFx0XHRpZiAoW2AgYCwgYFNwYWNlYmFyYCwgYEVudGVyYCwgYEFycm93RG93bmAsIGBBcnJvd1VwYCwgYEVzY2FwZWBdLmluZGV4T2Yoa2V5Q29kZSkgPT09IC0xKSByZXR1cm47XG5cblx0XHRcdFx0XHRrZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHRpZiAoa2V5Q29kZSA9PT0gYEVzY2FwZWApIHtcblx0XHRcdFx0XHRcdGNsb3NlU3VibWVudSgkbGlzdEl0ZW0sICR0cmlnZ2VyLCBrZXlib2FyZE9wZW5DbGFzcyk7XG5cdFx0XHRcdFx0XHQkdHJpZ2dlci50cmlnZ2VyKGBmb2N1c2ApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG9wZW5TdWJtZW51KCRsaXN0SXRlbSwgJHRyaWdnZXIsIGtleWJvYXJkT3BlbkNsYXNzKTtcblxuXHRcdFx0XHRcdGlmIChrZXlDb2RlID09PSBgQXJyb3dVcGApIHtcblx0XHRcdFx0XHRcdGZvY3VzU3VibWVudUxpbmsoJHN1Ym1lbnUsIGBsYXN0YCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Zm9jdXNTdWJtZW51TGluaygkc3VibWVudSwgYGZpcnN0YCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCRzdWJtZW51Lm9uKGBrZXlkb3duYCwgYGFgLCAoa2V5Ym9hcmRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IGtleUNvZGUgPSBrZXlib2FyZEV2ZW50LmtleTtcblx0XHRcdFx0XHRpZiAoW2BBcnJvd0Rvd25gLCBgQXJyb3dVcGAsIGBIb21lYCwgYEVuZGAsIGBFc2NhcGVgXS5pbmRleE9mKGtleUNvZGUpID09PSAtMSkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Y29uc3QgJHN1Ym1lbnVMaW5rcyA9ICRzdWJtZW51LmZpbmQoYGE6dmlzaWJsZWApO1xuXHRcdFx0XHRcdGlmICghJHN1Ym1lbnVMaW5rcy5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0XHRcdGtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRjb25zdCBjdXJyZW50TGlua0luZGV4ID0gJHN1Ym1lbnVMaW5rcy5pbmRleChrZXlib2FyZEV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdFx0XHRcdGxldCB0YXJnZXRMaW5rSW5kZXggPSBjdXJyZW50TGlua0luZGV4O1xuXG5cdFx0XHRcdFx0aWYgKGtleUNvZGUgPT09IGBFc2NhcGVgKSB7XG5cdFx0XHRcdFx0XHRjbG9zZVN1Ym1lbnUoJGxpc3RJdGVtLCAkdHJpZ2dlciwga2V5Ym9hcmRPcGVuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0JHRyaWdnZXIudHJpZ2dlcihgZm9jdXNgKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5Q29kZSA9PT0gYEFycm93RG93bmApIHtcblx0XHRcdFx0XHRcdHRhcmdldExpbmtJbmRleCA9IChjdXJyZW50TGlua0luZGV4ICsgMSkgJSAkc3VibWVudUxpbmtzLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5Q29kZSA9PT0gYEFycm93VXBgKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRMaW5rSW5kZXggPSAoY3VycmVudExpbmtJbmRleCAtIDEgKyAkc3VibWVudUxpbmtzLmxlbmd0aCkgJSAkc3VibWVudUxpbmtzLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5Q29kZSA9PT0gYEhvbWVgKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRMaW5rSW5kZXggPSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChrZXlDb2RlID09PSBgRW5kYCkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0TGlua0luZGV4ID0gJHN1Ym1lbnVMaW5rcy5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCRzdWJtZW51TGlua3MuZXEodGFyZ2V0TGlua0luZGV4KS50cmlnZ2VyKGBmb2N1c2ApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9wZW5TdWJtZW51KCRsaXN0SXRlbSwgJHRyaWdnZXIsIGtleWJvYXJkT3BlbkNsYXNzKSB7XG5cdFx0XHQkbGlzdEl0ZW0uYWRkQ2xhc3Moa2V5Ym9hcmRPcGVuQ2xhc3MpO1xuXHRcdFx0JHRyaWdnZXIuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2xvc2VTdWJtZW51KCRsaXN0SXRlbSwgJHRyaWdnZXIsIGtleWJvYXJkT3BlbkNsYXNzKSB7XG5cdFx0XHQkbGlzdEl0ZW0ucmVtb3ZlQ2xhc3Moa2V5Ym9hcmRPcGVuQ2xhc3MpO1xuXHRcdFx0JHRyaWdnZXIuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGZvY3VzU3VibWVudUxpbmsoJHN1Ym1lbnUsIGZvY3VzUG9zaXRpb24pIHtcblx0XHRcdGNvbnN0ICRzdWJtZW51TGlua3MgPSAkc3VibWVudS5maW5kKGBhOnZpc2libGVgKTtcblx0XHRcdGlmICghJHN1Ym1lbnVMaW5rcy5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0aWYgKGZvY3VzUG9zaXRpb24gPT09IGBsYXN0YCkge1xuXHRcdFx0XHQkc3VibWVudUxpbmtzLmxhc3QoKS50cmlnZ2VyKGBmb2N1c2ApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdCRzdWJtZW51TGlua3MuZmlyc3QoKS50cmlnZ2VyKGBmb2N1c2ApO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZEFjY2Vzc2liaWxpdHlDb29raWUoKSB7XG5cdFx0XHRsZXQgJGFjY2Vzc2liaWxpdHkgPSAkKCcjYWNjZXNzaWJpbGl0eScpO1xuXG5cdFx0XHRpZiAoISRhY2Nlc3NpYmlsaXR5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0bGV0IGNvb2tlTmFtZSA9ICdhY2Nlc3NpYmlsaXR5X21lc3NhZ2Vfd2FzX3Nob3duJztcblxuXHRcdFx0aWYgKCQuY29va2llKGNvb2tlTmFtZSkpIHtcblx0XHRcdFx0JGFjY2Vzc2liaWxpdHkuaGlkZSgpO1xuXHRcdFx0XHRhZGRQYWRkaW5nKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkYWNjZXNzaWJpbGl0eS5zaG93KCk7XG5cdFx0XHRcdCRhY2Nlc3NpYmlsaXR5LnJlbW92ZUNsYXNzKGBiTWVzc2FnZV9oaWRlYCk7XG5cdFx0XHRcdCRhY2Nlc3NpYmlsaXR5Lm9uKCdldi5oaWRlJywgKCkgPT4ge1xuXG5cdFx0XHRcdFx0JC5jb29raWUoJ2FjY2Vzc2liaWxpdHlfbWVzc2FnZV93YXNfc2hvd24nLCBcIjFcIiwge1xuXHRcdFx0XHRcdFx0ZXhwaXJlczogODY0MDAsXG5cdFx0XHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGFkZFBhZGRpbmcoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYWRkUGFkZGluZygpIHtcblx0XHRcdGxldCAkcGFnZVdyID0gJChgLnBhZ2VXcmApO1xuXHRcdFx0aWYgKCEkcGFnZVdyLmxlbmd0aCkgcmV0dXJuO1xuXHRcdFx0JHBhZ2VXci5jc3MoYHBhZGRpbmctdG9wYCwgJGVsbS5vdXRlckhlaWdodCgpKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNIZWFkZXI7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LlNsaWRlclR5cGVBID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0dGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBgc2xpZGVyLXR5cGUtYWA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblxuXHRcdGxldCAkY3VycmVudFdyYXAgPSAkZWxtO1xuXG5cdFx0bGV0ICRzbGlkZXJfYmcgPSAkY3VycmVudFdyYXAuZmluZCgnLicgKyB0aGlzLm5hbWUgKyAnX19iZy1pdGVtcycpO1xuXHRcdGxldCAkc2xpZGVyX2Rlc2MgPSAkY3VycmVudFdyYXAuZmluZCgnLicgKyB0aGlzLm5hbWUgKyAnX19kZXNjJyk7XG5cdFx0bGV0ICRzbGlkZXJfX3NsaWRlX25hdiA9ICRjdXJyZW50V3JhcC5maW5kKCcuJyArIHRoaXMubmFtZSArICdfX25hdicpO1xuXG5cdFx0aWYgKCRjdXJyZW50V3JhcC5maW5kKCcuJyArIHRoaXMubmFtZSArICdfX2Rlc2MtaXRlbScpLmxlbmd0aCA+IDEpIHtcblx0XHRcdCRjdXJyZW50V3JhcC5hZGRDbGFzcyh0aGlzLm5hbWUgKyAnX3NsaWRlcycpO1xuXHRcdH1cblxuXHRcdCRzbGlkZXJfYmcuc2xpY2soe1xuXHRcdFx0cGF1c2VPbkhvdmVyOiBmYWxzZSxcblx0XHRcdHBhdXNlT25Gb2N1czogZmFsc2UsXG5cdFx0XHRhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuXHRcdFx0ZG90czogZmFsc2UsXG5cdFx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0XHRzcGVlZDogNTAwLFxuXHRcdFx0YXV0b3BsYXk6IHRydWUsXG5cdFx0XHRhdXRvcGxheVNwZWVkOiAxNTAwMCxcblx0XHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdFx0c3dpcGU6IGZhbHNlLFxuXHRcdFx0YXNOYXZGb3I6ICRzbGlkZXJfZGVzYyxcblx0XHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDc2OCxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0c3dpcGU6IHRydWUsXG5cdFx0XHRcdFx0XHRhdXRvcGxheTogZmFsc2UsXG5cdFx0XHRcdFx0XHRpbmZpbml0ZTogZmFsc2Vcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9KTtcblxuXHRcdCRzbGlkZXJfZGVzYy5zbGljayh7XG5cdFx0XHRwYXVzZU9uSG92ZXI6IGZhbHNlLFxuXHRcdFx0cGF1c2VPbkZvY3VzOiBmYWxzZSxcblx0XHRcdGFjY2Vzc2liaWxpdHk6IGZhbHNlLFxuXHRcdFx0ZG90czogdHJ1ZSxcblx0XHRcdGFwcGVuZERvdHM6ICRzbGlkZXJfX3NsaWRlX25hdixcblx0XHRcdGFycm93czogZmFsc2UsXG5cdFx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRcdHNwZWVkOiA3MDAsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDE1MDAwLFxuXHRcdFx0ZmFkZTogdHJ1ZSxcblx0XHRcdHN3aXBlOiBmYWxzZSxcblx0XHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdFx0Y3NzRWFzZTogXCJlYXNlXCIsXG5cdFx0XHRhc05hdkZvcjogJHNsaWRlcl9iZyxcblx0XHRcdHJlc3BvbnNpdmU6IFt7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDc2OCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzd2lwZTogdHJ1ZSxcblx0XHRcdFx0XHRhdXRvcGxheTogZmFsc2UsXG5cdFx0XHRcdFx0aW5maW5pdGU6IGZhbHNlLFxuXHRcdFx0XHR9XG5cdFx0XHR9XVxuXHRcdH0pO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJUeXBlQTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9zdHlsZXMnXG5cbmltcG9ydCBiRXZlbnQgZnJvbSAnLi9jb21wb25lbnRzL2JFdmVudC9iRXZlbnQnXG5pbXBvcnQgT2JzZXJ2ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9PYnNlcnZlci9PYnNlcnZlclwiO1xuaW1wb3J0IEJsb2NrVmlkZW8gZnJvbSBcIi4vY29tcG9uZW50cy9iTWVkaWEvdmlkZW9cIjtcbmltcG9ydCBiU29ydCBmcm9tIFwiLi9jb21wb25lbnRzL2JTb3J0L2JTb3J0XCI7XG5pbXBvcnQgbmF2U2VsZWN0IGZyb20gXCIuL2NvbXBvbmVudHMvbmF2U2VsZWN0L25hdlNlbGVjdFwiO1xuaW1wb3J0IFNsaWRlclR5cGVBIGZyb20gXCIuL2NvbXBvbmVudHMvc2xpZGVyLXR5cGUtYS9TbGlkZXJUeXBlQVwiO1xuaW1wb3J0IHNIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9zSGVhZGVyL3NIZWFkZXJcIjtcbmltcG9ydCBiVGVybXMgZnJvbSBcIi4vY29tcG9uZW50cy9iVGVybXMvYlRlcm1zXCI7XG5pbXBvcnQgYlN0YWZmIGZyb20gXCIuL2NvbXBvbmVudHMvYlN0YWZmL2JTdGFmZlwiO1xuaW1wb3J0IGxpZ2h0U2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvYkxpZ2h0U2xpZGVyL2xpZ2h0U2xpZGVyXCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9tb2RhbC9tb2RhbFwiO1xuaW1wb3J0IGJFdmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9iRXZlbnRzL2JFdmVudHNcIjtcbmltcG9ydCBpbml0QWNjZXNzaWJpbGl0eVdpZGdldEExMXkgZnJvbSBcIi4vY29tcG9uZW50cy9hY2Nlc3NpYmlsaXR5L2luaXRBY2Nlc3NpYmlsaXR5V2lkZ2V0QTExeVwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcblx0JCgnYm9keScpLmFkZENsYXNzKCdsb2FkZWQnKTtcbn0pO1xuXG5pZiAod2luZG93LkRydXBhbD8uYmVoYXZpb3JzKSB7XG5cdERydXBhbC5iZWhhdmlvcnMucHJvamVjdE5hbWUgPSB7XG5cdFx0YXR0YWNoOiAoY29udGV4dCwgc2V0dGluZ3MpID0+IHtcblx0XHRcdGluaXQoKTtcblx0XHR9LFxuXHRcdGNvbXBsZXRlZENhbGxiYWNrOiAoKSA9PiB7IC8qRG8gbm90aGluZy4gQnV0IGl0J3MgaGVyZSBpbiBjYXNlIG90aGVyIG1vZHVsZXMvdGhlbWVzIHdhbnQgdG8gb3ZlcnJpZGUgaXQuKi9cblx0XHR9XG5cdH1cbn0gZWxzZSB7XG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdFx0aW5pdCgpO1xuXHR9KTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0bmV3IE9ic2VydmVyKCk7XG5cdG5ldyBuYXZTZWxlY3QoKTtcblx0bmV3IG5hdlNlbGVjdCh7XG5cdFx0bmFtZTogJ25hdlNlbGVjdElzc3VlUGFwZXJzJyxcblx0XHRwcmVmaXg6ICdjYXRlZ29yeS0nLFxuXHRcdHByZWZpeENvbnRlbnQ6ICdpZC0nLFxuXHR9KTtcblx0bmV3IHNIZWFkZXIoKTtcblx0YWRkUGFkZGluZygpO1xuXHRoYXNoU2Nyb2xsKCk7XG5cdGluaXRGb2N1c2VkRWxlbWVudFZpZXdwb3J0U2Nyb2xsKCk7XG59KTtcblxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuXHRhZGRQYWRkaW5nKCk7XG59KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcblx0aW5pdEFjY2Vzc2liaWxpdHlXaWRnZXRBMTF5KCk7XG5cdG5ldyBNb2RhbCgpO1xuXHRuZXcgYkV2ZW50KCk7XG5cdG5ldyBiU29ydCgpO1xuXHRuZXcgU2xpZGVyVHlwZUEoKTtcblx0bmV3IGJUZXJtcygpO1xuXHRuZXcgYlN0YWZmKCk7XG5cdG5ldyBsaWdodFNsaWRlcigpO1xuXHRuZXcgYkV2ZW50cygpO1xuXHRpbml0Rm9ybVJlZGlyZWN0KCk7XG5cdGluaXRTZWxlY3QoKTtcblx0aW5pdEFjY2Vzc2liaWxpdHkoKTtcblx0aW5pdEhlYWRlckhvdmVyKCk7XG5cdGluaXRDb3VudGVyKCQoJy5iU2VhdHNfX2NhcCcpLCBmYWxzZSwgMik7XG5cdGluaXRDb3VudGVyKCQoJy5iU2VhdHNfX2NvdW50RCcpLCBmYWxzZSwgMik7XG5cdGluaXRDb3VudGVyKCQoJy5iU2VhdHNfX2NvdW50UicpLCBmYWxzZSwgMik7XG5cdGluaXRDb3VudGVyKCQoJy5iU2VhdHNfX2NvdW50VicpLCBmYWxzZSwgMik7XG5cdGNoYW5nZUF1dG9jb21wbGV0ZSgpO1xuXHRzY3JvbGxCbG9jaygpO1xuXHRjaGFuZ2VQbGFjZWhvbGRlclRpbWUoKTtcblx0aW5pdERhdGUoKTtcblxuXHRuZXcgQmxvY2tWaWRlbygpO1xuXG5cdCQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbiAoZXZlbnQsIHhociwgc2V0dGluZ3MpIHtcblxuXHRcdGlmIChzZXR0aW5ncy51cmwgPT09ICcvdmlld3MvYWpheD9fd3JhcHBlcl9mb3JtYXQ9ZHJ1cGFsX2FqYXgnKSB7XG5cdFx0XHRsZXQgZGF0YUFyciA9IHNldHRpbmdzLmRhdGEuc3BsaXQoJyYnKTtcblxuXHRcdFx0aWYgKH4kLmluQXJyYXkoYGNvbW1pdHRlZT1BbGxgLCBkYXRhQXJyKSkgcmV0dXJuXG5cblx0XHRcdGxldCBzU2VuUmVzID0gJChgLnNTZW5fX3Jlc2ApXG5cblx0XHRcdGlmKCFzU2VuUmVzLmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHRzU2VuUmVzLmFkZENsYXNzKCdzU2VuX19yZXNfY29tbWl0dGVlJyk7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGUoKSB7XG5cdHZhciAkd3JhcCA9ICQoIFwiLmhhc0RhdGVwaWNrZXJcIiApO1xuXG5cdGlmKCEkd3JhcC5sZW5ndGgpIHJldHVybjtcblxuXHR0cnkge1xuXHRcdCR3cmFwLmRhdGVwaWNrZXIoIFwib3B0aW9uXCIsIFwiY2hhbmdlTW9udGhcIiwgZmFsc2UpO1xuXHRcdCR3cmFwLmRhdGVwaWNrZXIoIFwib3B0aW9uXCIsIFwiY2hhbmdlWWVhclwiLCBmYWxzZSk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZihjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7Y29uc29sZS5sb2coJ2RhdGVwaWNrZXIgdW5kZWZpbmVkOiAnICsgZS5tZXNzYWdlKX1cblx0fVxuXG5cdHZhciAkcGFyZW50ID0gJHdyYXAucGFyZW50KCcuZm9ybS1pdGVtLWZpZWxkLWpvdXJuYWxzLWZpbGVzLWRhdGUtdmFsdWUnKTtcblxuXHRpZiAoJHBhcmVudC5oYXNDbGFzcygncHJvY2Vzc2VkJykpIHJldHVybjtcblx0JHBhcmVudC5hZGRDbGFzcygncHJvY2Vzc2VkJyk7XG5cblx0JHdyYXAub24oJ2ZvY3VzaW4nLCBmdW5jdGlvbigpIHtcblx0XHQkcGFyZW50LmFkZENsYXNzKCdvcGVuJyk7XG5cdH0pO1xuXG5cdCR3cmFwLm9uKCdmb2N1c291dCcsIGZ1bmN0aW9uKCkge1xuXHRcdCRwYXJlbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFBhZGRpbmcoKSB7XG5cblx0bGV0ICRoZWFkZXIgPSAkKGAuc0hlYWRlcmApO1xuXHRpZiAoISRoZWFkZXIubGVuZ3RoKSByZXR1cm47XG5cblx0bGV0ICRwYWdlV3IgPSAkKGAucGFnZVdyYCk7XG5cdGlmICghJHBhZ2VXci5sZW5ndGgpIHJldHVybjtcblx0JHBhZ2VXci5jc3MoYHBhZGRpbmctdG9wYCwgJGhlYWRlci5vdXRlckhlaWdodCgpKTtcbn1cblxuZnVuY3Rpb24gaGFzaFNjcm9sbCgpIHtcblx0bGV0ICRib2R5ID0gJCgnYm9keSwgaHRtbCcpO1xuXHRsZXQgJGJvZHlPbmx5ID0gJCgnYm9keScpO1xuXG5cdGlmICgkYm9keU9ubHkuaGFzQ2xhc3MoJ2hhc2hTY3JvbGxfcHJvY2Vzc2VkJykpIHJldHVybjtcblx0JGJvZHlPbmx5LmFkZENsYXNzKCdoYXNoU2Nyb2xsX3Byb2Nlc3NlZCcpO1xuXG5cdGxldCBwcmVmaXggPSBgbC1gO1xuXHQvL2xldCBwcmVmaXhDb250ZW50ID0gYCR7dGhpcy5wcmVmaXhDb250ZW50fWA7XG5cdGxldCBzcGVlZCA9IDYwMDtcblxuXHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgfndpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyMnICsgcHJlZml4KSkge1xuXHRcdGFuaW1hdGlvbih3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJyArIHByZWZpeCwgJycpKTtcblx0fVxuXG5cdCQod2luZG93KS5vbignaGFzaGNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB+d2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignIycgKyBwcmVmaXgpKSB7XG5cdFx0XHRhbmltYXRpb24od2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycgKyBwcmVmaXgsICcnKSk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiBhbmltYXRpb24odmFsKSB7XG5cdFx0bGV0ICR0YXJnZXQgPSAkKCcjJyArIHZhbCk7XG5cblx0XHRpZiAoISR0YXJnZXQubGVuZ3RoKSByZXR1cm47XG5cblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHByZWZpeCArIHZhbDtcblxuXHRcdGxldCBhZG1pbk1lbnUgPSBwYXJzZUludCgkKGBib2R5YCkuY3NzKCdwYWRkaW5nLXRvcCcpKTtcblxuXHRcdGxldCBoZWFkZXJIZWlnaHQgPSAkKCcuc0hlYWRlcicpLmxlbmd0aCA/ICQoJy5zSGVhZGVyJykub3V0ZXJIZWlnaHQoKSA6IDA7XG5cblx0XHQkYm9keS5hbmltYXRlKHtzY3JvbGxUb3A6ICR0YXJnZXQub2Zmc2V0KCkudG9wIC0gMTAgLSBoZWFkZXJIZWlnaHQgLSBhZG1pbk1lbnV9LCBzcGVlZCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlQXV0b2NvbXBsZXRlKCkge1xuXHRsZXQgJHppcCA9ICQoYC5zU2VuIC5mb3JtLWl0ZW0temlwIC5mb3JtLWF1dG9jb21wbGV0ZWApO1xuXG5cdGlmICghJHppcC5sZW5ndGgpIHJldHVybjtcblxuXHQkemlwLmF0dHIoJ2F1dG9jb21wbGV0ZScsICduZXctcGFzc3dvcmQnKTtcblxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQbGFjZWhvbGRlclRpbWUoKSB7XG5cdGxldCAkaW5wdXRTdGFydCA9ICQoYC5mb3JtLWl0ZW0tZGF0ZS10aW1lIGlucHV0YCk7XG5cdGxldCAkaW5wdXRFbmQgPSAkKGAuZm9ybS1pdGVtLWVuZC10aW1lLXRpbWUgaW5wdXRgKTtcblxuXHRpZiAoISRpbnB1dFN0YXJ0Lmxlbmd0aCkgcmV0dXJuO1xuXHRpZiAoISRpbnB1dEVuZC5sZW5ndGgpIHJldHVybjtcblxuXHQkaW5wdXRTdGFydC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGFydCBUaW1lJyk7XG5cdCRpbnB1dEVuZC5hdHRyKCdwbGFjZWhvbGRlcicsICdFbmQgVGltZScpO1xuXG5cdGZvY3VzSW5pdChbJGlucHV0RW5kLCAkaW5wdXRTdGFydF0pO1xuXG5cdGZ1bmN0aW9uIGZvY3VzSW5pdChpbnB1dHMpIHtcblx0XHRpbnB1dHMuZm9yRWFjaCgoaW5wdXQpPT4ge1xuXHRcdFx0aW5wdXQuYXR0cigndHlwZScsICd0ZXh0Jyk7XG5cblx0XHRcdC8vIGlmICghaW5wdXQuaGFzQ2xhc3MoJ2ZvY3VzLWluaXQnKSkge1xuXHRcdFx0Ly8gXHRpbnB1dC5hZGRDbGFzcygnZm9jdXMtaW5pdCcpO1xuXHRcdFx0Ly9cblx0XHRcdC8vIFx0aW5wdXQub24oJ2ZvY3VzJywgKCkgPT4ge1xuXHRcdFx0Ly8gXHRcdGlucHV0LmF0dHIoJ3R5cGUnLCAndGltZScpO1xuXHRcdFx0Ly8gXHR9KVxuXHRcdFx0Ly8gfVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGluaXRDb3VudGVyKHdyYXAsIGVhc2luZywgc3BlZWQpIHtcblx0dmFyICR3cmFwID0gd3JhcC5maW5kKCcuY291bnQnKTtcblxuXHRpZiAoISR3cmFwLmxlbmd0aCkgcmV0dXJuO1xuXG5cdGlmICgkd3JhcC5oYXNDbGFzcygncHJvY2Vzc2VkJykpIHJldHVybjtcblx0JHdyYXAuYWRkQ2xhc3MoJ3Byb2Nlc3NlZCcpO1xuXG5cdHZhciBzdGFydCA9ICskd3JhcC5kYXRhKCdzdGFydCcpO1xuXHR2YXIgZW5kID0gKyR3cmFwLmRhdGEoJ2VuZCcpO1xuXG5cdHZhciBjb3VudGVyID0gbmV3IENvdW50VXAoJHdyYXBbMF0sIHN0YXJ0LCBlbmQsIDAsIHNwZWVkLCB7XG5cdFx0dXNlRWFzaW5nOiBlYXNpbmcsXG5cdFx0dXNlR3JvdXBpbmc6IHRydWUsXG5cdFx0c2VwYXJhdG9yOiAnLCdcblx0fSk7XG5cblx0Y2hlY2tQb3NpdGlvbigpO1xuXG5cdCQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuXHRcdGNoZWNrUG9zaXRpb24oKTtcblx0fSk7XG5cblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y2hlY2tQb3NpdGlvbigpO1xuXHR9KTtcblxuXHRmdW5jdGlvbiBjaGVja1Bvc2l0aW9uKCkge1xuXHRcdGlmICgkd3JhcC5oYXNDbGFzcygnYWN0aXZlJykpIHJldHVybjtcblxuXHRcdGlmICgoJCh3aW5kb3cpLm91dGVySGVpZ2h0KCkgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKCkpID4gKCR3cmFwLm9mZnNldCgpLnRvcCArICR3cmFwLm91dGVySGVpZ2h0KCkgKyAyMCkpIHtcblx0XHRcdCR3cmFwLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuXHRcdFx0Y291bnRlci5zdGFydChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdC8vY291bnRlclJlc3RhcnQoKVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY291bnRlclJlc3RhcnQoKSB7XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvdW50ZXIucmVzZXQoKTtcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRcdGNvdW50ZXIuc3RhcnQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvdW50ZXJSZXN0YXJ0KClcblx0XHRcdFx0fSk7XG5cdFx0XHR9LCAyMDApXG5cblx0XHR9LCAxMDAwKTtcblx0fVxufVxuXG5mdW5jdGlvbiBpbml0Rm9ybVJlZGlyZWN0KCkge1xuXHR2YXIgJGZvcm0gPSAkKCcuZi1zZWFyY2gtcmVkaXJlY3QnKTtcblx0dmFyICRpbnB1dCA9ICRmb3JtLmZpbmQoJy5mb3JtLXRleHQnKTtcblxuXHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dmFyIHZhbCA9ICRpbnB1dC52YWwoKS50cmltKCk7XG5cblx0XHRpZiAodmFsKSB7XG5cdFx0XHRsb2NhdGlvbi5ocmVmID0gJ2h0dHA6Ly93d3cub2tsZWdpc2xhdHVyZS5nb3YvQmlsbEluZm8uYXNweD9CaWxsPScgKyB2YWw7XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdFNlbGVjdCgpIHtcblx0ZnVuY3Rpb24gbWF0Y2hDdXN0b20ocGFyYW1zLCBkYXRhKSB7XG5cdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIHNlYXJjaCB0ZXJtcywgcmV0dXJuIGFsbCBvZiB0aGUgZGF0YVxuXHRcdGlmICgkLnRyaW0ocGFyYW1zLnRlcm0pID09PSAnJykge1xuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gRG8gbm90IGRpc3BsYXkgdGhlIGl0ZW0gaWYgdGhlcmUgaXMgbm8gJ3RleHQnIHByb3BlcnR5XG5cdFx0aWYgKHR5cGVvZiBkYXRhLnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBgcGFyYW1zLnRlcm1gIHNob3VsZCBiZSB0aGUgdGVybSB0aGF0IGlzIHVzZWQgZm9yIHNlYXJjaGluZ1xuXHRcdC8vIGBkYXRhLnRleHRgIGlzIHRoZSB0ZXh0IHRoYXQgaXMgZGlzcGxheWVkIGZvciB0aGUgZGF0YSBvYmplY3Rcblx0XHQvLyBpZiAoZGF0YS50ZXh0LmluZGV4T2YocGFyYW1zLnRlcm0pID4gLTEpIHtcblx0XHQvLyAgIHZhciBtb2RpZmllZERhdGEgPSAkLmV4dGVuZCh7fSwgZGF0YSwgdHJ1ZSk7XG5cdFx0Ly8gICBtb2RpZmllZERhdGEudGV4dCArPSAnIChtYXRjaGVkKSc7XG5cdFx0Ly9cblx0XHQvLyAgIC8vIFlvdSBjYW4gcmV0dXJuIG1vZGlmaWVkIG9iamVjdHMgZnJvbSBoZXJlXG5cdFx0Ly8gICAvLyBUaGlzIGluY2x1ZGVzIG1hdGNoaW5nIHRoZSBgY2hpbGRyZW5gIGhvdyB5b3Ugd2FudCBpbiBuZXN0ZWQgZGF0YSBzZXRzXG5cdFx0Ly8gICByZXR1cm4gbW9kaWZpZWREYXRhO1xuXHRcdC8vIH1cblxuXHRcdGlmIChkYXRhLnRleHQudG9VcHBlckNhc2UoKS5pbmRleE9mKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpID09IDApIHtcblx0XHRcdHZhciBtb2RpZmllZERhdGEgPSAkLmV4dGVuZCh7fSwgZGF0YSwgdHJ1ZSk7XG5cblx0XHRcdHJldHVybiBtb2RpZmllZERhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGBudWxsYCBpZiB0aGUgdGVybSBzaG91bGQgbm90IGJlIGRpc3BsYXllZFxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0JCgnc2VsZWN0Om5vdCgjZWRpdC1wZXJtYW5lbnQtc3RhdGUpOm5vdCgjZWRpdC1sb2NhbC1zdGF0ZSknKS5zZWxlY3QyKHtcblx0XHR3aWR0aDogJ2Z1bGwnLFxuXHRcdG1pbmltdW1SZXN1bHRzRm9yU2VhcmNoOiBJbmZpbml0eVxuXHR9KTtcblxuXHQkKCdzZWxlY3QjZWRpdC1wZXJtYW5lbnQtc3RhdGUsIHNlbGVjdCNlZGl0LWxvY2FsLXN0YXRlJykuc2VsZWN0Mih7XG5cdFx0d2lkdGg6ICdmdWxsJyxcblx0XHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogMCxcblx0XHRtYXRjaGVyOiBtYXRjaEN1c3RvbVxuXHR9KTtcblxuXHQkKCdzZWxlY3QnKS5vbignc2VsZWN0MjpvcGVuJywgZnVuY3Rpb24gKGUpIHtcblxuXHRcdCQoJy5zZWxlY3QyLXJlc3VsdHMgLnNlbGVjdDItcmVzdWx0c19fb3B0aW9ucycpLnNjcm9sbGJhcih7XG5cdFx0XHRkaXNhYmxlQm9keVNjcm9sbDogZmFsc2UsXG5cdFx0XHRkdXJhdGlvbjogNjAwLFxuXHRcdFx0c2Nyb2xsU3RlcDogMTYwXG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxCbG9jaygpIHtcblxuXHQkKCcubW9kYWxfbWVldGluZ25vdGljZXMgLmZvcm0tY2hlY2tib3hlcywgLm1vZGFsX21lZXRpbmdub3RpY2VzIC5mb3JtLXJhZGlvcyAnKS5zY3JvbGxiYXIoe1xuXHRcdGRpc2FibGVCb2R5U2Nyb2xsOiBmYWxzZSxcblx0XHRkdXJhdGlvbjogNjAwLFxuXHRcdHNjcm9sbFN0ZXA6IDE2MFxuXHR9KTtcbn1cblxuXG5mdW5jdGlvbiBpbml0QWNjZXNzaWJpbGl0eSgpIHtcblx0aWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnYWNjZXNzaWJpbGl0eScpKSB7XG5cdFx0JCgnc2VsZWN0W3RhYmluZGV4PVwiLTFcIl0nKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaW5pdEZvY3VzZWRFbGVtZW50Vmlld3BvcnRTY3JvbGwoKSB7XG5cdGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcblxuXHRpZiAoIWJvZHlFbGVtZW50IHx8IGJvZHlFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9jdXMtc2Nyb2xsLXByb2Nlc3NlZCcpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ym9keUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZm9jdXMtc2Nyb2xsLXByb2Nlc3NlZCcpO1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBmdW5jdGlvbiAoZm9jdXNFdmVudCkge1xuXHRcdGNvbnN0IGZvY3VzVGFyZ2V0ID0gZm9jdXNFdmVudC50YXJnZXQ7XG5cblx0XHRpZiAoIShmb2N1c1RhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlYXNvbjogU29tZSBmb2N1cyB0YXJnZXRzIGFyZSB0aW55IG9yIGhpZGRlbiB3cmFwcGVycywgc28gd2Ugc2tpcCB6ZXJvLXNpemUgZWxlbWVudHMuXG5cdFx0Y29uc3QgdGFyZ2V0UmVjdCA9IGZvY3VzVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGlmICghdGFyZ2V0UmVjdC53aWR0aCAmJiAhdGFyZ2V0UmVjdC5oZWlnaHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcblx0XHRcdHNjcm9sbEVsZW1lbnRJbnRvVmlld3BvcnQoZm9jdXNUYXJnZXQpO1xuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsRWxlbWVudEludG9WaWV3cG9ydChlbGVtZW50KSB7XG5cdGNvbnN0IHZpZXdwb3J0TWFyZ2luID0gMTI7XG5cdGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc0hlYWRlcicpO1xuXHRjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXJFbGVtZW50ID8gaGVhZGVyRWxlbWVudC5vZmZzZXRIZWlnaHQgOiAwO1xuXHRjb25zdCBhZG1pbk9mZnNldCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLnBhZGRpbmdUb3AsIDEwKSB8fCAwO1xuXHRjb25zdCB0b3BTYWZlQXJlYSA9IGhlYWRlckhlaWdodCArIGFkbWluT2Zmc2V0ICsgdmlld3BvcnRNYXJnaW47XG5cdGNvbnN0IGJvdHRvbVNhZmVBcmVhID0gd2luZG93LmlubmVySGVpZ2h0IC0gdmlld3BvcnRNYXJnaW47XG5cdGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0Y29uc3QgZWxlbWVudEhlaWdodCA9IGVsZW1lbnRSZWN0LmhlaWdodDtcblx0bGV0IHRhcmdldFNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcblxuXHQvLyBSZWFzb246IFRhbGwgdGlsZXMgY2Fubm90IGZ1bGx5IGZpdCBpbiB2aWV3cG9ydCwgc28gd2UgYWxpZ24gdGhlaXIgdG9wIGVkZ2UgdW5kZXIgc3RpY2t5IGNocm9tZS5cblx0aWYgKChlbGVtZW50SGVpZ2h0ICsgdG9wU2FmZUFyZWEgKyB2aWV3cG9ydE1hcmdpbikgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcblx0XHR0YXJnZXRTY3JvbGxZICs9IGVsZW1lbnRSZWN0LnRvcCAtIHRvcFNhZmVBcmVhO1xuXHR9IGVsc2UgaWYgKGVsZW1lbnRSZWN0LnRvcCA8IHRvcFNhZmVBcmVhKSB7XG5cdFx0dGFyZ2V0U2Nyb2xsWSArPSBlbGVtZW50UmVjdC50b3AgLSB0b3BTYWZlQXJlYTtcblx0fSBlbHNlIGlmIChlbGVtZW50UmVjdC5ib3R0b20gPiBib3R0b21TYWZlQXJlYSkge1xuXHRcdHRhcmdldFNjcm9sbFkgKz0gZWxlbWVudFJlY3QuYm90dG9tIC0gYm90dG9tU2FmZUFyZWE7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgbWF4U2Nyb2xsWSA9IE1hdGgubWF4KDAsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRjb25zdCBjbGFtcGVkU2Nyb2xsWSA9IE1hdGgubWF4KDAsIE1hdGgubWluKHRhcmdldFNjcm9sbFksIG1heFNjcm9sbFkpKTtcblxuXHR3aW5kb3cuc2Nyb2xsVG8oe1xuXHRcdHRvcDogY2xhbXBlZFNjcm9sbFksXG5cdFx0YmVoYXZpb3I6ICdzbW9vdGgnXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBpbml0SGVhZGVySG92ZXIoKSB7XG5cdHZhciAkd3JhcHBlciA9ICQoJy5zSGVhZGVyX19tZW51LXdyYXAnKTtcblx0dmFyICRsaXN0RGVza3RvcFdyYXAgPSAkd3JhcHBlci5maW5kKCcgPiB1bC5tZW51Jyk7XG5cdHZhciAkbGlzdERlc2t0b3BXcmFwTGkgPSAkbGlzdERlc2t0b3BXcmFwLmZpbmQoJ2xpJyk7XG5cdHZhciAkbGlzdERlc2t0b3BXcmFwQSA9ICRsaXN0RGVza3RvcFdyYXAuZmluZCgnYScpO1xuXG5cdGlmICgkd3JhcHBlci5oYXNDbGFzcygnc0hlYWRlcl9fbWVudS1wcm9jZXNzZWQnKSkgcmV0dXJuO1xuXHQkd3JhcHBlci5hZGRDbGFzcygnc0hlYWRlcl9fbWVudS1wcm9jZXNzZWQnKTtcblxuXHRpZiAoISQoJ2JvZHknKS5oYXNDbGFzcygnYWNjZXNzaWJpbGl0eScpKSByZXR1cm47XG5cblx0JGxpc3REZXNrdG9wV3JhcExpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuXHRcdHJlbW92ZUJsdXIoKTtcblx0XHRnZXRNZW51V3JhcCh0aGlzKTtcblx0fSk7XG5cblx0JGxpc3REZXNrdG9wV3JhcExpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuXHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG5cdH0pO1xuXG5cdCRsaXN0RGVza3RvcFdyYXBBLm9uKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcblx0XHRnZXRNZW51V3JhcCh0aGlzLnBhcmVudE5vZGUpO1xuXHRcdCQodGhpcy5wYXJlbnROb2RlKS5zaWJsaW5ncygnbGknKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcblx0fSk7XG5cblx0JGxpc3REZXNrdG9wV3JhcEEub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHRoaXMgPT09ICRsaXN0RGVza3RvcFdyYXBBWyRsaXN0RGVza3RvcFdyYXBBLmxlbmd0aCAtIDFdKSB7XG5cdFx0XHQkbGlzdERlc2t0b3BXcmFwTGkucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG5cdFx0fVxuXHR9KTtcblxuXHRmdW5jdGlvbiByZW1vdmVCbHVyKCkge1xuXHRcdCRsaXN0RGVza3RvcFdyYXBMaS5yZW1vdmVDbGFzcygnaG92ZXInKTtcblx0XHQkbGlzdERlc2t0b3BXcmFwQS5ibHVyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRNZW51V3JhcChlbG0pIHtcblxuXHRcdGlmIChlbG0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzSGVhZGVyX19tZW51LXdyYXAnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsbS5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuXG5cdFx0Z2V0TWVudVdyYXAoZWxtLnBhcmVudE5vZGUpO1xuXHR9XG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIlxuaW1wb3J0IFwiLi9jb21tb24vc3Mtc29jaWFsLnNjc3NcIjtcbmltcG9ydCBcIi4vY29tbW9uL3NzLWdseXBoaXNoLWZpbGxlZC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvbW1vbi9zcy1nbHlwaGlzaC1vdXRsaW5lZC5zY3NzXCI7XG5cbmltcG9ydCAnLi9jb21tb24vZm9udHMuc2Nzcyc7XG5pbXBvcnQgJy4vY29tbW9uL25vcm1hbGl6ZS5zY3NzJztcbmltcG9ydCAnLi9jb21tb24vZ2xvYmFsLnNjc3MnO1xuaW1wb3J0ICcuL2NvbW1vbi9ncmlkLnNjc3MnO1xuaW1wb3J0ICcuL2NvbW1vbi9oZWxwZXJzLnNjc3MnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWxlY3QyL3NlbGVjdDIuc2NzcydcbmltcG9ydCAnLi9tb2R1bGVzL2Jvb3RzdHJhcC1tb2RhbC5zY3NzJ1xuXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iVGl0bGUvYlRpdGxlLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9mb3JtL2Zvcm0uc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JXcmFwL2JXcmFwLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9mb3JtL2Ytc2VhcmNoLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9idG4vYnRuLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWN0aW9uL3NlY3Rpb24uc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3BNYWluL3BNYWluLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wYWdlV3IvcGFnZVdyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iQ29udGFpbmVyL2JDb250YWluZXIuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NIZWFkZXIvc0hlYWRlci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc0Zvb3Rlci9zRm9vdGVyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9sb2dvL2xvZ28uc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdkxpbmtzL25hdkxpbmtzLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zSGVyby9zSGVyby5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc0ZpbmRlci9zRmluZGVyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iVGlsZXMvYlRpbGVzLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iRXZlbnQvYkV2ZW50LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zTGVhZC9zTGVhZC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkNvbHMvYkNvbHMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlbmF0b3JzL3NlbmF0b3JzLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTWVzc2FnZS9iTWVzc2FnZS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc1Nlbi9zU2VuLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wYWdlSW4vcGFnZUluLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iU2VuQmlvL2JTZW5CaW8uc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTb2MvYlNvYy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYk5ld3MvYk5ld3Muc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JBYm91dC9iQWJvdXQuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JNZWRpYS9iTWVkaWEuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JIaWRlL2JIaWRlLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTWVtYmVyc2hpcC9iTWVtYmVyc2hpcC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkRpc3RyaWN0L2JEaXN0cmljdC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlNlbGVjdC9iU2VsZWN0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9saW5rL2xpbmsuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZm9ybS9mU2lnblVwLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTGlzdEl0ZW1zL2JMaXN0SXRlbXMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTY2hlZHVsZS9iU2NoZWR1bGUuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JMaXN0TGlua3MvYkxpc3RMaW5rcy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkRhdGVMaXN0L2JEYXRlTGlzdC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlRiL2JUYi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkRyb3AvYkRyb3Auc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JQb3N0L2JQb3N0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iU29ydC9iU29ydC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlNpZGViYXIvYlNpZGViYXIuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JQb3N0TGlzdC9iUG9zdExpc3Quc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3BhZ2VyL3BhZ2VyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iQ29sdW1ucy9iQ29sdW1ucy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYk92ZXJ2aWV3L2JPdmVydmlldy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlRhYmxlL2JUYWJsZS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc1NsaWRlci9zU2xpZGVyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXItdHlwZS1hL3NsaWRlci10eXBlLWEuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JMaXN0L2JMaXN0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9mb3JtL3NlYXJjaC1mb3JtLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlNlYXRzL2JTZWF0cy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkhpc3QvYkhpc3Quc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NIaXN0L3NIaXN0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iVGVybXMvYlRlcm1zLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iQXVkaW8vYkF1ZGlvLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iU3RhZmYvYlN0YWZmLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zNDA0L3M0MDQuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JMaWdodFNsaWRlci9saWdodFNsaWRlci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYklzUGFwZXJzL2JJc1BhcGVycy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlNoYXJlL2JTaGFyZS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkxpc3RJbmxpbmUvYkxpc3RJbmxpbmUuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JFdmVudHMvYkV2ZW50cy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2dvdmRlbGl2ZXJ5T3ZlcmxheS9nb3ZkZWxpdmVyeU92ZXJsYXkuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTdWJOYXYvYlN1Yk5hdi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlZpZGVvR2FsbGVyeS9iVmlkZW9HYWxsZXJ5LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iUGFnZU5hdi9iUGFnZU5hdi5zY3NzJ1xuXG5pbXBvcnQgJy4vY29tbW9uL2RydXBhbC1zdHlsZXMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2FjY2Vzc2liaWxpdHkvYWNjZXNzaWJpbGl0eS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJpbnQvcHJpbnQuc2Nzcydcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2ItdGltZWxpbmUvYi10aW1lbGluZS5zY3NzJ1xuLy9pbXBvcnQgJy4vY29tcG9uZW50cy9iLWZhcS9iLWZhcS5zY3NzJ1xuLy9pbXBvcnQgJy4vY29tcG9uZW50cy9iLW5vdGUvYi1ub3RlLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iLWFnZW5kYS9iLWFnZW5kYS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYi1kaXN0cmljdC1tYXBzL2ItZGlzdHJpY3QtbWFwcy5zY3NzJ1xuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDNURBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbENBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7QUNuREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFJQTs7Ozs7Ozs7Ozs7QUN2REE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQzlDQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7OztBQ2xLQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDOUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQzVFQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDMUNBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDbERBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7QUNuUEE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDaEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDL2JBOzs7Ozs7Ozs7Ozs7QUNDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=