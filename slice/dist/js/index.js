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
          $(item).addClass("".concat(_this2.name, "__let_disabled")).attr({
            'aria-disabled': 'true',
            'tabindex': '-1'
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RydXBhbC1zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2ZvbnRzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9nbG9iYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2dyaWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2hlbHBlcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL25vcm1hbGl6ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3MtZ2x5cGhpc2gtZmlsbGVkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9zcy1nbHlwaGlzaC1vdXRsaW5lZC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3Mtc29jaWFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT2JzZXJ2ZXIvQ3VzdG9tRXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvT2JzZXJ2ZXIvT2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjZXNzaWJpbGl0eS9hY2Nlc3NpYmlsaXR5LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjZXNzaWJpbGl0eS9pbml0QWNjZXNzaWJpbGl0eVdpZGdldEExMXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYi1hZ2VuZGEvYi1hZ2VuZGEuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iLWRpc3RyaWN0LW1hcHMvYi1kaXN0cmljdC1tYXBzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkFib3V0L2JBYm91dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JBdWRpby9iQXVkaW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iQ29scy9iQ29scy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JDb2x1bW5zL2JDb2x1bW5zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkNvbnRhaW5lci9iQ29udGFpbmVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkRhdGVMaXN0L2JEYXRlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JEaXN0cmljdC9iRGlzdHJpY3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iRHJvcC9iRHJvcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JFdmVudC9iRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkV2ZW50L2JFdmVudC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JFdmVudHMvYkV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iRXZlbnRzL2JFdmVudHMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iSGlkZS9iSGlkZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JIaXN0L2JIaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYklzUGFwZXJzL2JJc1BhcGVycy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JMaWdodFNsaWRlci9saWdodFNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iTGlnaHRTbGlkZXIvbGlnaHRTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iTGlzdC9iTGlzdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JMaXN0SW5saW5lL2JMaXN0SW5saW5lLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkxpc3RJdGVtcy9iTGlzdEl0ZW1zLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYkxpc3RMaW5rcy9iTGlzdExpbmtzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYk1lZGlhL2JNZWRpYS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JNZWRpYS92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iTWVtYmVyc2hpcC9iTWVtYmVyc2hpcC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JNZXNzYWdlL2JNZXNzYWdlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYk5ld3MvYk5ld3Muc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iT3ZlcnZpZXcvYk92ZXJ2aWV3LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlBhZ2VOYXYvYlBhZ2VOYXYuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iUG9zdC9iUG9zdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JQb3N0TGlzdC9iUG9zdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iU2NoZWR1bGUvYlNjaGVkdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlNlYXRzL2JTZWF0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTZWxlY3QvYlNlbGVjdC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTZW5CaW8vYlNlbkJpby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTaGFyZS9iU2hhcmUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iU2lkZWJhci9iU2lkZWJhci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTb2MvYlNvYy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTb3J0L2JTb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JTb3J0L2JTb3J0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlN0YWZmL2JTdGFmZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iU3RhZmYvYlN0YWZmLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlN1Yk5hdi9iU3ViTmF2LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlRhYmxlL2JUYWJsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JUYi9iVGIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iVGVybXMvYlRlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JUZXJtcy9iVGVybXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9iVGlsZXMvYlRpbGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYlRpdGxlL2JUaXRsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JWaWRlb0dhbGxlcnkvYlZpZGVvR2FsbGVyeS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2JXcmFwL2JXcmFwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnRuL2J0bi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvcm0vZi1zZWFyY2guc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2ZTaWduVXAuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL2Zvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb3JtL3NlYXJjaC1mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ292ZGVsaXZlcnlPdmVybGF5L2dvdmRlbGl2ZXJ5T3ZlcmxheS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9saW5rL2xpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvL2xvZ28uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL25hdkxpbmtzL25hdkxpbmtzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbmF2U2VsZWN0L25hdlNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wTWFpbi9wTWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3BhZ2VJbi9wYWdlSW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlV3IvcGFnZVdyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmludC9wcmludC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3M0MDQvczQwNC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NGaW5kZXIvc0ZpbmRlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NGb290ZXIvc0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NIZWFkZXIvc0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zSGVhZGVyL3NIZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zSGVyby9zSGVyby5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NIaXN0L3NIaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc0xlYWQvc0xlYWQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zU2VuL3NTZW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zU2xpZGVyL3NTbGlkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0cy9zZWFyY2gtcmVzdWx0cy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24vc2VjdGlvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbGVjdDIvc2VsZWN0Mi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlbmF0b3JzL3NlbmF0b3JzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpZGVyLXR5cGUtYS9TbGlkZXJUeXBlQS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zbGlkZXItdHlwZS1hL3NsaWRlci10eXBlLWEuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvYm9vdHN0cmFwLW1vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSBqUXVlcnk7XG5cbmNsYXNzIEN1c3RvbUV2IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmN1c3RvbUNsaWNrKCk7XG5cdH1cblxuXHRjdXN0b21DbGljaygpIHtcblxuXHRcdGFkZExpc3RlbmVyRm9yU2VuYXRvckZpbHRlcigpO1xuXG5cdFx0JChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uIChldmVudCwgeGhyLCBzZXR0aW5ncykge1xuXHRcdFx0aWYgKH5zZXR0aW5ncy5kYXRhPy5pbmRleE9mKCd2aWV3X25hbWU9c2VuYXRvcnMnKSkge1xuXHRcdFx0XHRhZGRMaXN0ZW5lckZvclNlbmF0b3JGaWx0ZXIoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaCcsIChlKSA9PiB7XG5cdFx0XHRsZXQgJGV2ID0gJChlLnRhcmdldCk7XG5cblx0XHRcdGlmICghJGV2LmNsb3Nlc3QoJy5iRHJvcCcpLmxlbmd0aCkge1xuXHRcdFx0XHQkKCcuYkRyb3AnKS5yZW1vdmVDbGFzcygnc2VsZWN0Mi1jb250YWluZXItLW9wZW4nKVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoJGV2LmNsb3Nlc3QoJy5oYXNoTGluaycpLmxlbmd0aCB8fCAkZXYuaGFzQ2xhc3MoYGhhc2hMaW5rYCkpIHtcblx0XHRcdFx0bGV0ICRib2R5ID0gJCgnYm9keSwgaHRtbCcpO1xuXHRcdFx0XHRsZXQgcHJlZml4ID0gYGwtYDtcblx0XHRcdFx0bGV0IHNwZWVkID0gNjAwO1xuXG5cdFx0XHRcdGxldCB2YWwgPSAkZXYuY2xvc2VzdCgnLmhhc2hMaW5rJykuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cblx0XHRcdFx0bGV0ICR0YXJnZXQgPSAkKCcjJyArIHZhbCk7XG5cblx0XHRcdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcHJlZml4ICsgdmFsO1xuXG5cdFx0XHRcdGxldCBhZG1pbk1lbnUgPSBwYXJzZUludCgkKGBib2R5YCkuY3NzKCdwYWRkaW5nLXRvcCcpKTtcblxuXHRcdFx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLnNIZWFkZXInKS5sZW5ndGggPyAkKCcuc0hlYWRlcicpLm91dGVySGVpZ2h0KCkgOiAwO1xuXG5cdFx0XHRcdCRib2R5LmFuaW1hdGUoe3Njcm9sbFRvcDogJHRhcmdldC5vZmZzZXQoKS50b3AgLSAxMCAtIGhlYWRlckhlaWdodCAtIGFkbWluTWVudX0sIHNwZWVkKTtcblxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gYWRkTGlzdGVuZXJGb3JTZW5hdG9yRmlsdGVyKCkge1xuXG5cdFx0XHQkKCcjdmlld3MtZXhwb3NlZC1mb3JtLXNlbmF0b3JzLXBhZ2UtMSAuZm9ybS1zdWJtaXQnKS5vbignY2xpY2sgdG91Y2gnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJy5zU2VuIC5zU2VuX19yZXMnKS5hZGRDbGFzcygnc1Nlbl9fcmVzX2xvYWRpbmcnKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FdjsiLCJpbXBvcnQgQ3VzdG9tRXYgZnJvbSAnLi9DdXN0b21FdidcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5PYnNlcnZlciA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdCQoZG9jdW1lbnQpLm9uKCdjbGljayB0b3VjaCcsIChlKSA9PiB7XG5cdFx0XHRsZXQgZXZlbnQgPSBlLnRhcmdldC5kYXRhc2V0LmV2O1xuXHRcdFx0aWYgKCFldmVudCkgcmV0dXJuO1xuXG5cdFx0XHRsZXQgZXZlbnRzID0ge1xuXHRcdFx0XHRldnM6IGUudGFyZ2V0LmRhdGFzZXQuZXYuc3BsaXQoJzsnKSxcblx0XHRcdFx0aXRlbXM6IFtdXG5cdFx0XHR9O1xuXG5cdFx0XHRldmVudHMuZXZzLmZvckVhY2goKGV2SXRlbSwgaSkgPT4ge1xuXHRcdFx0XHRsZXQgW2V2LCBzZWwsIGNsTmFtZV0gPSBldkl0ZW0uc3BsaXQoJzonKTtcblxuXHRcdFx0XHRldmVudHMuaXRlbXNbaV0gPSB7XG5cdFx0XHRcdFx0ZXYsXG5cdFx0XHRcdFx0c2VsLFxuXHRcdFx0XHRcdGNsTmFtZVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0ZXZlbnRzLml0ZW1zLmZvckVhY2goKHtldiwgc2VsLCBjbE5hbWV9KSA9PiB7XG5cdFx0XHRcdGlmICghc2VsIHx8ICF0aGlzW2V2XSkgcmV0dXJuO1xuXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpc1tldl0oJChlLnRhcmdldCksIHNlbCwgY2xOYW1lLCBldik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdG5ldyBDdXN0b21Fdjtcblx0fVxuXG5cdGhpZGUoJHRhcmdldCwgc2VsLCBjbE5hbWUsIGV2KSB7XG5cdFx0JHRhcmdldC5jbG9zZXN0KGAuJHtzZWx9YCkuaGlkZSgpLnRyaWdnZXIoYGV2LiR7ZXZ9YCk7XG5cdH1cblxuXHR0b2dnbGVDbGFzcygkdGFyZ2V0LCBzZWwsIGNsTmFtZSwgZXYpIHtcblx0XHQkdGFyZ2V0LmNsb3Nlc3QoYC4ke3NlbH1gKS50b2dnbGVDbGFzcyhgJHtzZWx9XyR7Y2xOYW1lfWApLnRyaWdnZXIoYGV2LiR7ZXZ9LiR7Y2xOYW1lfWApO1xuXHR9XG5cblx0dG9nZ2xlQ3VzdG9tQ2xhc3MoJHRhcmdldCwgc2VsLCBjbE5hbWUsIGV2KSB7XG5cdFx0JHRhcmdldC5jbG9zZXN0KGAuJHtzZWx9YCkudG9nZ2xlQ2xhc3MoYCR7Y2xOYW1lfWApLnRyaWdnZXIoYGV2LiR7ZXZ9LiR7Y2xOYW1lfWApO1xuXHR9XG5cblx0cmVtb3ZlQ2xhc3MoJHRhcmdldCwgc2VsLCBjbE5hbWUsIGV2KSB7XG5cdFx0JHRhcmdldC5jbG9zZXN0KGAuJHtzZWx9YCkucmVtb3ZlQ2xhc3MoYCR7c2VsfV8ke2NsTmFtZX1gKS50cmlnZ2VyKGBldi4ke2V2fS4ke2NsTmFtZX1gKTtcblx0fVxuXG5cdHRvZ2dsZSgkdGFyZ2V0LCBzZWwpIHtcblx0XHQkKGAuJHtzZWx9YCkudG9nZ2xlKCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9ic2VydmVyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0IEExMVlfVE9HR0xFX1NFTEVDVE9SID0gJ2J1dHRvbiNhY2Nlc3NpYmlsaXR5X3NldHRpbmdzX3RvZ2dsZSc7XG5jb25zdCBJQ09OX1NFTEVDVE9SID0gJy5hY2Nlc3NpYmlsaXR5X3NldHRpbmdzX3RvZ2dsZV9pY29uJztcblxuZnVuY3Rpb24gdXBkYXRlQWNjZXNzaWJpbGl0eVRyaWdnZXJBMTF5KHRyaWdnZXJCdXR0b24pIHtcblx0aWYgKCF0cmlnZ2VyQnV0dG9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVhc29uOiBUaGUgaWNvbiBpcyBkZWNvcmF0aXZlOyB0aGUgYnV0dG9uIGl0c2VsZiBuZWVkcyB0aGUgc3Bva2VuIGxhYmVsLlxuXHRpZiAoIXRyaWdnZXJCdXR0b24uZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcblx0XHR0cmlnZ2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdBY2Nlc3NpYmlsaXR5IHNldHRpbmdzJyk7XG5cdH1cblxuXHRjb25zdCB0cmlnZ2VySWNvbiA9IHRyaWdnZXJCdXR0b24ucXVlcnlTZWxlY3RvcihJQ09OX1NFTEVDVE9SKTtcblx0aWYgKHRyaWdnZXJJY29uKSB7XG5cdFx0dHJpZ2dlckljb24uc2V0QXR0cmlidXRlKCdhbHQnLCAnJyk7XG5cdFx0dHJpZ2dlckljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdEFjY2Vzc2liaWxpdHlXaWRnZXRBMTF5KCkge1xuXHRjb25zdCB0cmlnZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihBMTFZX1RPR0dMRV9TRUxFQ1RPUik7XG5cdHVwZGF0ZUFjY2Vzc2liaWxpdHlUcmlnZ2VyQTExeSh0cmlnZ2VyQnV0dG9uKTtcblxuXHQvLyBSZWFzb246IFRoaXJkLXBhcnR5IHdpZGdldCBjYW4gcmUtcmVuZGVyIHRoZSB0cmlnZ2VyIGFmdGVyIGluaXRpYWwgcGFnZSBsb2FkLlxuXHRpZiAoIWRvY3VtZW50LmJvZHkuZGF0YXNldC5zZW5hdGVBY2Nlc3NpYmlsaXR5T2JzZXJ2ZXIpIHtcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHVwZGF0ZWRUcmlnZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihBMTFZX1RPR0dMRV9TRUxFQ1RPUik7XG5cdFx0XHR1cGRhdGVBY2Nlc3NpYmlsaXR5VHJpZ2dlckExMXkodXBkYXRlZFRyaWdnZXJCdXR0b24pO1xuXHRcdH0pO1xuXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcblx0XHRkb2N1bWVudC5ib2R5LmRhdGFzZXQuc2VuYXRlQWNjZXNzaWJpbGl0eU9ic2VydmVyID0gJ3RydWUnO1xuXHR9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmJFdmVudCA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYGJFdmVudGA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblxuXHRcdGxldCAkc2xpZGVyID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19zbGlkZXItaXRlbXNgKTtcblx0XHRsZXQgJHNsaWRlcl9fc2xpZGVfbmF2ID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19zbGlkZXItbmF2YCk7XG5cblx0XHQkc2xpZGVyLm9uKCdpbml0JywgKGV2ZW50LCBzbGljaykgPT4ge1xuXHRcdFx0JChldmVudC5jdXJyZW50VGFyZ2V0KS5maW5kKCcuc2xpY2stc2xpZGVbYXJpYS1kZXNjcmliZWRieV0nKS5yZW1vdmVBdHRyKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG5cdFx0fSk7XG5cblx0XHQkc2xpZGVyLnNsaWNrKHtcblx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2UsXG5cdFx0XHRwYXVzZU9uRm9jdXM6IGZhbHNlLFxuXHRcdFx0YWNjZXNzaWJpbGl0eTogdHJ1ZSxcblx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRhcHBlbmREb3RzOiAkc2xpZGVyX19zbGlkZV9uYXYsXG5cdFx0XHRhcnJvd3M6IHRydWUsXG5cdFx0XHRpbmZpbml0ZTogdHJ1ZSxcblx0XHRcdHNwZWVkOiA0MDAsXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcblx0XHRcdGF1dG9wbGF5U3BlZWQ6IDE1MDAwLFxuXHRcdFx0c3dpcGU6IGZhbHNlLFxuXHRcdFx0c2xpZGVzVG9TaG93OiAyLFxuXHRcdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0XHRjc3NFYXNlOiBcImVhc2VcIixcblx0XHRcdHJlc3BvbnNpdmU6IFt7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDc2OCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdFx0XHRcdHN3aXBlOiB0cnVlLFxuXHRcdFx0XHRcdGF1dG9wbGF5OiBmYWxzZSxcblx0XHRcdFx0XHRpbmZpbml0ZTogZmFsc2UsXG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAxXG5cdFx0XHRcdH1cblx0XHRcdH1dXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJFdmVudDtcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7Y2hlY2tJbml0fSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5iRXZlbnRzID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0dGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBgYkV2ZW50c2A7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblx0XHRsZXQgJG1vZGFsID0gJChgI21vZGFsLXZpZGVvYCk7XG5cdFx0aWYgKCEkbW9kYWwubGVuZ3RoKSByZXR1cm47XG5cdFx0bGV0IGlmcmFtZSA9ICRtb2RhbC5maW5kKGBpZnJhbWVgKTtcblxuXHRcdCRlbG0ub24oJ2NsaWNrIHRvdWNoJywgYC4ke3RoaXMubmFtZX1fX2ltZ1dyYXAsIC4ke3RoaXMubmFtZX1fX3JlYWRNb3JlYCwgKGUpID0+IHtcblx0XHRcdGxldCB2aWRlb0lkID0gJChlLnRhcmdldCkuY2xvc2VzdChgLiR7dGhpcy5uYW1lfV9faXRlbWApLmF0dHIoJ2RhdGEtdmlkZW9JZCcpO1xuXHRcdFx0aWYgKCF2aWRlb0lkKSByZXR1cm47XG5cblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWZyYW1lLmF0dHIoYGlkYCwgdmlkZW9JZCk7XG5cdFx0XHRpZnJhbWUuYXR0cihgc3JjYCwgYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/cmVsPTAmYW1wO2NvbnRyb2xzPTEmYW1wO3Nob3dpbmZvPTAmYW1wO2VuYWJsZWpzYXBpPTFgKTtcblx0XHRcdCRtb2RhbC5tb2RhbChgc2hvd2ApO1xuXHRcdFx0d2luZG93LnBsYXllclZpZGVvTW9kYWwgPSAnJztcblxuXHRcdFx0b25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKTtcblxuXHRcdFx0ZnVuY3Rpb24gb25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkoKSB7XG5cdFx0XHRcdHdpbmRvdy5wbGF5ZXJWaWRlb01vZGFsID0gbmV3IFlULlBsYXllcih2aWRlb0lkLCB7XG5cdFx0XHRcdFx0dmlkZW9JZDogdmlkZW9JZCxcblx0XHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRcdCdvblJlYWR5Jzogb25QbGF5ZXJSZWFkeVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0JG1vZGFsLm9uKCdoaWRlLmJzLm1vZGFsJywgKCkgPT4ge1xuXHRcdFx0aWZyYW1lLmF0dHIoYGlkYCwgJycpO1xuXHRcdFx0aWZyYW1lLmF0dHIoYHNyY2AsIGBgKTtcblx0XHRcdHdpbmRvdy5wbGF5ZXIgPSAnJztcblx0XHR9KVxuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJFdmVudHM7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG53aW5kb3cubGlnaHRTbGlkZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBiTGlnaHRTbGlkZXJgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHRsZXQgJHNsaWRlciA9ICRlbG0uZmluZChgLiR7dGhpcy5uYW1lfV9fc2xpZGVzYCk7XG5cblx0XHRpZiAoISRzbGlkZXIubGVuZ3RoKSByZXR1cm47XG5cblx0XHQkc2xpZGVyLmxpZ2h0U2xpZGVyKHtcblx0XHRcdGdhbGxlcnk6IHRydWUsXG5cdFx0XHRpdGVtOiAxLFxuXHRcdFx0YWRhcHRpdmVIZWlnaHQ6IHRydWUsXG5cdFx0XHR2VGh1bWJXaWR0aDogMTE4LFxuXHRcdFx0dGh1bWJJdGVtOiA1LFxuXHRcdFx0dGh1bWJNYXJnaW46IDQsXG5cdFx0XHRzbGlkZU1hcmdpbjogMCxcblx0XHRcdHJlc3BvbnNpdmU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDc2OCxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0dGh1bWJJdGVtOiA0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YnJlYWtwb2ludDogNDUwLFxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHR0aHVtYkl0ZW06IDNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRTbGlkZXI7XG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0galF1ZXJ5O1xuXG5cbiAgY29uc3QgcGx1Z2luTmFtZSA9ICdiTWVkaWEnO1xuXG4gIGNsYXNzIFZpZGVvUGxheSB7XG4gICAgY29uc3RydWN0b3IoZWxtLCBvcHRpb25zKSB7XG4gICAgICB0aGlzLmVsbSA9IGVsbTtcbiAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8vb3B0aW9ucyBoZXJlXG4gICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgdGhpcy5wcm9jZXNzZWQgPSBmYWxzZTtcblxuICAgICAgaWYoIXRoaXMucHJvY2Vzc2VkKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnByb2Nlc3NlZCA9ICF0aGlzLnByb2Nlc3NlZDtcblxuICAgICAgdmFyICRXcmFwID0gJCh0aGlzLmVsbSk7XG4gICAgICB2YXIgJHBsYXlCdG4gPSAkV3JhcC5maW5kKCcuYk1lZGlhX19wbGF5LWJ0bicpO1xuXG4gICAgICBpZiAoISRwbGF5QnRuLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAkcGxheUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2hyZWYnKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHJldHVybjtcblxuICAgICAgICB2YXIgJHZpZGVvID0gJFdyYXAuZmluZCh0YXJnZXQpO1xuICAgICAgICAkV3JhcC5hZGRDbGFzcygnYk1lZGlhX2FjdGl2ZScpO1xuXG4gICAgICAgIGlmICgkdmlkZW8ubGVuZ3RoKSB7XG4gICAgICAgICAgdG9nZ2xlVmlkZW8oJHZpZGVvWzBdLCAncGxheVZpZGVvJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiB0b2dnbGVWaWRlbyh2aWRlbywgc3RhdGUpIHtcbiAgICAgICAgdmFyIGZ1bmMgPSBzdGF0ZSA9PSAncGF1c2UnID8gJ3BhdXNlVmlkZW8nIDogJ3BsYXlWaWRlbyc7XG4gICAgICAgIHZhciBpZnJhbWUgPSB2aWRlby5jb250ZW50V2luZG93O1xuXG4gICAgICAgIGlmcmFtZS5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcIicgKyBmdW5jICsgJ1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3aW5kb3cuQmxvY2tWaWRlbyA9IChpdGVtLCBvcHRpb25zKSA9PiB7XG4gICAgdmFyIHZpZGVvQmxvY2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBwbHVnaW5OYW1lKTtcblxuICAgIGlmICh2aWRlb0Jsb2Nrcy5sZW5ndGgpICB7XG4gICAgICB2aWRlb0Jsb2NrcyA9ICQodmlkZW9CbG9ja3MpO1xuXG4gICAgICBpZiAoISQoJyNpZnJhbWUteW91dHViZS1hcGknKS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICB0YWcuaWQgPSAnaWZyYW1lLXlvdXR1YmUtYXBpJztcbiAgICAgICAgdGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcbiAgICAgICAgdmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRhdGFSZWRpcmVjdFVybCA9ICdkYXRhLXJlZGlyZWN0LXVybCc7XG4gICAgICB2YXIgdmlkZW9CbG9ja3NDbGFzcyA9ICcuJyArIHBsdWdpbk5hbWU7XG5cbiAgICAgIGlmICh3aW5kb3cuaW5pdE9uWW91VHViZUlmcmFtZUFQSVJlYWR5KSB7XG4gICAgICAgIHZhciByZU9wZW5QcmV2aWV3ID0gdmlkZW9CbG9ja3MuaGFzKCcuYk1lZGlhX19wbGF5LWJ0bicpLm5vdCgnWycgKyBkYXRhUmVkaXJlY3RVcmwgKyAnXScpO1xuXG4gICAgICAgICQocmVPcGVuUHJldmlldykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICB2YXIgcmVPcGVuUHJldmlld29JZCA9ICQodGhpcykuZmluZCgnaWZyYW1lJykuYXR0cignaWQnKTtcbiAgICAgICAgICBpZiAoIXJlT3BlblByZXZpZXdvSWQpIHJldHVybjtcblxuICAgICAgICAgIHdpbmRvd1sncGxheWVyLScgKyBpbmRleCArICctJyArIHJlT3BlblByZXZpZXdvSWRdID0gbmV3IFlULlBsYXllcihyZU9wZW5QcmV2aWV3b0lkLCB7XG4gICAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAnb25TdGF0ZUNoYW5nZSc6IG9uUGxheWVyU3RhdGVDaGFuZ2VSZU9wZW5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgIHdpbmRvdy5pbml0T25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHJlT3BlblByZXZpZXcgPSB2aWRlb0Jsb2Nrcy5oYXMoJy5iTWVkaWFfX3BsYXktYnRuJykubm90KCdbJyArIGRhdGFSZWRpcmVjdFVybCArICddJyk7XG4gICAgICAgICAgdmFyIHJlZGlyZWN0VmlkZW8gPSB2aWRlb0Jsb2Nrcy5maWx0ZXIoJ1snICsgZGF0YVJlZGlyZWN0VXJsICsgJ10nKTtcblxuICAgICAgICAgICQocmVkaXJlY3RWaWRlbykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgIHZhciByZWRpcmVjdFZpZGVvSWQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoIXJlZGlyZWN0VmlkZW9JZCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB3aW5kb3dbJ3BsYXllci0nICsgaW5kZXggKyAnLScgKyByZWRpcmVjdFZpZGVvSWRdID0gbmV3IFlULlBsYXllcihyZWRpcmVjdFZpZGVvSWQsIHtcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZUZvclJlZGlyZWN0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJChyZU9wZW5QcmV2aWV3KS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIHJlT3BlblByZXZpZXdvSWQgPSAkKHRoaXMpLmZpbmQoJ2lmcmFtZScpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICBpZiAoIXJlT3BlblByZXZpZXdvSWQpIHJldHVybjtcblxuICAgICAgICAgICAgd2luZG93WydwbGF5ZXItJyArIGluZGV4ICsgJy0nICsgcmVPcGVuUHJldmlld29JZF0gPSBuZXcgWVQuUGxheWVyKHJlT3BlblByZXZpZXdvSWQsIHtcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgJ29uUmVhZHknOiBvblBsYXllclJlYWR5LFxuICAgICAgICAgICAgICAgICdvblN0YXRlQ2hhbmdlJzogb25QbGF5ZXJTdGF0ZUNoYW5nZVJlT3BlblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgd2luZG93Lm9uUGxheWVyUmVhZHkgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgJHZpZGVvV3JhcCA9ICQoZXZlbnQudGFyZ2V0LmEpLmNsb3Nlc3QodmlkZW9CbG9ja3NDbGFzcyk7XG5cbiAgICAgICAgaWYgKCR2aWRlb1dyYXAuaGFzQ2xhc3MoJ2JNZWRpYV9hY3RpdmUnKSkge1xuICAgICAgICAgIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgd2luZG93Lm9uUGxheWVyU3RhdGVDaGFuZ2VSZU9wZW4gPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQuZGF0YSAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciAkdmlkZW9XcmFwID0gJChldmVudC50YXJnZXQuYSkuY2xvc2VzdCh2aWRlb0Jsb2Nrc0NsYXNzKTtcbiAgICAgICAgaWYgKCEkdmlkZW9XcmFwLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICR2aWRlb1dyYXAucmVtb3ZlQ2xhc3MoJ2JNZWRpYV9hY3RpdmUnKTtcbiAgICAgIH07XG5cbiAgICAgIHdpbmRvdy5vblBsYXllclN0YXRlQ2hhbmdlRm9yUmVkaXJlY3QgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICBpZiAoZXZlbnQuZGF0YSAhPT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciAkdmlkZW9XcmFwID0gJChldmVudC50YXJnZXQuYSkuY2xvc2VzdCh2aWRlb0Jsb2Nrc0NsYXNzKTtcbiAgICAgICAgaWYgKCEkdmlkZW9XcmFwLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgICR2aWRlb1dyYXAuYWRkQ2xhc3MoJ2JNZWRpYV9lbmQnKTtcbiAgICAgICAgdmFyIHVybFJlZGlyZWN0ID0gJHZpZGVvV3JhcC5hdHRyKGRhdGFSZWRpcmVjdFVybCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJHZpZGVvV3JhcCk7XG4gICAgICAgIGlmICh1cmxSZWRpcmVjdCkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHVybFJlZGlyZWN0KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIH1cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgKGl0ZW0gfHwgcGx1Z2luTmFtZSkpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucyhwbHVnaW5OYW1lICsgJ19wcm9jZXNzZWQnKSkge1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQocGx1Z2luTmFtZSArICdfcHJvY2Vzc2VkJyk7XG4gICAgICAgIG5ldyBWaWRlb1BsYXkoaXRlbSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tWaWRlbzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2NoZWNrSW5pdH0gZnJvbSBcIi4uL2hlbHBlclwiO1xuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmJTb3J0ID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0dGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBgYlNvcnRgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuJHt0aGlzLm5hbWV9X190aXRsZWAsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGNvbnNvbGUubG9nKHRoaXMpO1xuXHRcdFx0bGV0ICR0aGlzID0gJChlLnRhcmdldCk7XG5cdFx0XHRsZXQgJGl0ZW0gPSAkdGhpcy5jbG9zZXN0KGAuJHt0aGlzLm5hbWV9X19pdGVtYCk7XG5cblx0XHRcdGlmICghJGl0ZW0ubGVuZ3RoKSByZXR1cm47XG5cblx0XHRcdCRpdGVtLnRvZ2dsZUNsYXNzKGAke3RoaXMubmFtZX1fb3BlbmApO1xuXHRcdFx0JGl0ZW0uZmluZChgLiR7dGhpcy5uYW1lfV9fYm9keWApLnNsaWRlVG9nZ2xlKCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJTb3J0O1xuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtjaGVja0luaXR9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmJTdGFmZiA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYGJTdGFmZmA7XG5cdFx0dGhpcy5zZWxlY3RvciA9IHByb3BzLnNlbGVjdG9yIHx8IGAuJHt0aGlzLm5hbWV9YDtcblxuXHRcdGNoZWNrSW5pdCh0aGlzLnNlbGVjdG9yLCB0aGlzLm5hbWUsIChpdGVtKSA9PiB7XG5cdFx0XHR0aGlzLmluaXQoJChpdGVtKSk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0KCRlbG0pIHtcblx0XHRsZXQgcHJlZml4ID0gJ2xldHRlci0nO1xuXHRcdGxldCBjb21wTmFtZSA9IGAke3RoaXMubmFtZX1gO1xuXG5cdFx0bGV0ICRsZXR0ZXJzID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFgKTtcblx0XHRsZXQgJGl0ZW1zID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19pdGApO1xuXG5cdFx0JGxldHRlcnMuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0bGV0IGxldHRlciA9ICQoaXRlbSkuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cdFx0XHRsZXQgJHRhcmdldCA9ICRpdGVtcy5maWx0ZXIoKGksIHRlcm0pID0+IHtcblx0XHRcdFx0cmV0dXJuICQodGVybSkuYXR0cignZGF0YS1sZXR0ZXInKSA9PT0gbGV0dGVyXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHQkKGl0ZW0pLmFkZENsYXNzKGAke3RoaXMubmFtZX1fX2xldF9kaXNhYmxlZGApXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFgLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRsZXQgJGN1ckxldHRlciA9ICQoZS50YXJnZXQpO1xuXHRcdFx0bGV0IGxldHRlciA9ICRjdXJMZXR0ZXIuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cblx0XHRcdHNob3dJdGVtcyhsZXR0ZXIsICRjdXJMZXR0ZXIpO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gc2hvd0l0ZW1zKGxldHRlciwgJGN1ckxldHRlcikge1xuXG5cdFx0XHRsZXQgJHRhcmdldCA9ICRpdGVtcy5maWx0ZXIoKGksIHRlcm0pID0+IHtcblx0XHRcdFx0cmV0dXJuICQodGVybSkuYXR0cignZGF0YS1sZXR0ZXInKSA9PT0gbGV0dGVyXG5cdFx0XHR9KTtcblxuXHRcdFx0JGxldHRlcnMucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X19sZXRfYWN0aXZlYCk7XG5cdFx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X19pdF9hY3RpdmVgKTtcblx0XHRcdCRpdGVtcy5yZW1vdmVDbGFzcyhgYlRiX190cl9sYXN0YCk7XG5cdFx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoYGJUYl9fdHJfZmlyc3RgKTtcblxuXHRcdFx0JGVsbS5hZGRDbGFzcyhgJHtjb21wTmFtZX1fZmlsdGVyYCk7XG5cdFx0XHQkdGFyZ2V0LmFkZENsYXNzKGAke2NvbXBOYW1lfV9faXRfYWN0aXZlYCk7XG5cdFx0XHQkKCR0YXJnZXRbMF0pLmFkZENsYXNzKGBiVGJfX3RyX2ZpcnN0YCk7XG5cdFx0XHQkKCR0YXJnZXRbJHRhcmdldC5sZW5ndGggLSAxXSkuYWRkQ2xhc3MoYGJUYl9fdHJfbGFzdGApO1xuXHRcdFx0JGN1ckxldHRlci5hZGRDbGFzcyhgJHtjb21wTmFtZX1fX2xldF9hY3RpdmVgKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJTdGFmZjtcblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7Y2hlY2tJbml0fSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5iVGVybXMgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBiVGVybXNgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cdFx0bGV0IHByZWZpeCA9ICdsZXR0ZXItJztcblx0XHRsZXQgcHJlZml4Q29udGVudCA9ICdpdGVtLSc7XG5cdFx0bGV0IGNvbXBOYW1lID0gYCR7dGhpcy5uYW1lfWA7XG5cblx0XHRsZXQgJGxldHRlcnMgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX2ZpbExldHRlcnMgYWApO1xuXHRcdGxldCAkaXRlbXMgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX2l0YCk7XG5cblx0XHRsZXQgJG1vcmUgPSAkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX21vcmVgKTtcblxuXG5cdFx0JGxldHRlcnMuZWFjaCgoaSwgaXRlbSkgPT4ge1xuXHRcdFx0bGV0IGxldHRlciA9ICQoaXRlbSkuYXR0cignaHJlZicpLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJyk7XG5cdFx0XHRsZXQgJHRhcmdldCA9ICRpdGVtcy5maWx0ZXIoKGksIHRlcm0pID0+IHtcblx0XHRcdFx0cmV0dXJuICQodGVybSkuYXR0cignZGF0YS1sZXR0ZXInKSA9PT0gbGV0dGVyXG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkge1xuXHRcdFx0XHQkKGl0ZW0pXG5cdFx0XHRcdFx0LmFkZENsYXNzKGAke3RoaXMubmFtZX1fX2xldF9kaXNhYmxlZGApXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0J2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG5cdFx0XHRcdFx0XHQndGFiaW5kZXgnOiAnLTEnXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQkZWxtLm9uKCdjbGljayB0b3VjaCcsIGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFgLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRsZXQgJGN1ckxldHRlciA9ICQoZS50YXJnZXQpO1xuXG5cdFx0XHRsZXQgbGV0dGVyID0gJGN1ckxldHRlci5hdHRyKCdocmVmJykucmVwbGFjZSgnIycgKyBwcmVmaXgsICcnKTtcblxuXHRcdFx0c2hvd0l0ZW1zKGxldHRlciwgJGN1ckxldHRlcik7XG5cdFx0fSk7XG5cblx0XHQkbW9yZS5vbignY2xpY2sgdG91Y2gnLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JGVsbS50b2dnbGVDbGFzcyhgJHt0aGlzLm5hbWV9X29wZW5gKVxuXHRcdH0pO1xuXG5cdFx0c2hvd0l0ZW1zKCdhJywgJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19maWxMZXR0ZXJzIGFbaHJlZj1cIiNsZXR0ZXItYVwiXWApKTtcblxuXHRcdGZ1bmN0aW9uIHNob3dJdGVtcyhsZXR0ZXIsICRjdXJMZXR0ZXIpIHtcblxuXHRcdFx0bGV0ICR0YXJnZXQgPSAkaXRlbXMuZmlsdGVyKChpLCB0ZXJtKSA9PiB7XG5cdFx0XHRcdHJldHVybiAkKHRlcm0pLmF0dHIoJ2RhdGEtbGV0dGVyJykgPT09IGxldHRlclxuXHRcdFx0fSk7XG5cblx0XHRcdCRsZXR0ZXJzLnJlbW92ZUNsYXNzKGAke2NvbXBOYW1lfV9fbGV0X2FjdGl2ZWApO1xuXHRcdFx0JGl0ZW1zLnJlbW92ZUNsYXNzKGAke2NvbXBOYW1lfV9faXRfYWN0aXZlYCk7XG5cdFx0XHQkaXRlbXMucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X19pdF9hY3RpdmVfc2hvd2ApO1xuXHRcdFx0JGVsbS5yZW1vdmVDbGFzcyhgJHtjb21wTmFtZX1fc2hvd01vcmVgKTtcblx0XHRcdCRlbG0ucmVtb3ZlQ2xhc3MoYCR7Y29tcE5hbWV9X29wZW5gKTtcblxuXHRcdFx0JHRhcmdldC5hZGRDbGFzcyhgJHtjb21wTmFtZX1fX2l0X2FjdGl2ZWApO1xuXHRcdFx0JHRhcmdldC5zbGljZSgwLCAxMCkuYWRkQ2xhc3MoYCR7Y29tcE5hbWV9X19pdF9hY3RpdmVfc2hvd2ApO1xuXHRcdFx0JGN1ckxldHRlci5hZGRDbGFzcyhgJHtjb21wTmFtZX1fX2xldF9hY3RpdmVgKTtcblxuXHRcdFx0aWYgKCR0YXJnZXQubGVuZ3RoID4gMTApIHtcblx0XHRcdFx0JGVsbS5hZGRDbGFzcyhgJHtjb21wTmFtZX1fc2hvd01vcmVgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJUZXJtcztcblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY29uc3QgY2hlY2tJbml0ID0gKHNlbGVjdG9yLCBuYW1lLCBpbml0KT0+IHtcblxuXHRsZXQgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NlbGVjdG9yfWApO1xuXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZXMsIGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0aWYoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGAke25hbWV9X3Byb2Nlc3NlZGApKSB7XG5cdFx0XHRpdGVtLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1fcHJvY2Vzc2VkYCk7XG5cdFx0XHRpbml0KGl0ZW0pO1xuXHRcdH1cblx0fSk7XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtjaGVja0luaXR9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93Lk1vZGFsID0gY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG5cdFx0dGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBgbW9kYWxgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHR0aGlzLmNoZWNrSGFzaCgpO1xuXG5cdFx0JCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5jaGVja0hhc2goKTtcblx0XHR9KTtcblxuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uID0gZmFsc2U7XG5cblx0XHQkKCRlbG0pLm9uKCdoaWRlLmJzLm1vZGFsJywgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG5cblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5zY3JvbGxUb3Aoc2Nyb2xsVG9wKTtcblx0XHR9KTtcblx0fVxuXG5cdGNoZWNrSGFzaCgpIHtcblx0XHRjb25zdCAkZWwgPSAkKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcblxuXHRcdGlmKCRlbC5sZW5ndGggJiYgJGVsLmhhc0NsYXNzKCdtb2RhbCcpKSB7XG5cdFx0XHQkZWwubW9kYWwoJ3Nob3cnKTtcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtjaGVja0luaXR9IGZyb20gXCIuLi9oZWxwZXJcIjtcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5uYXZTZWxlY3QgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBuYXZTZWxlY3RgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cdFx0dGhpcy5wcmVmaXggPSBwcm9wcy5wcmVmaXggfHwgYHllYXItYDtcblx0XHR0aGlzLnByZWZpeENvbnRlbnQgPSBwcm9wcy5wcmVmaXhDb250ZW50IHx8IGBvdmVydmlldy1gO1xuXG5cdFx0Y2hlY2tJbml0KHRoaXMuc2VsZWN0b3IsIHRoaXMubmFtZSwgKGl0ZW0pID0+IHtcblx0XHRcdHRoaXMuaW5pdCgkKGl0ZW0pKTtcblx0XHR9KTtcblx0fVxuXG5cdGluaXQoJGVsbSkge1xuXG5cdFx0bGV0ICRzZWxlY3QgPSAkZWxtLmZpbmQoYHNlbGVjdGApO1xuXG5cdFx0aWYoISRzZWxlY3QubGVuZ3RoKSByZXR1cm47XG5cblx0XHRsZXQgJGJvZHkgPSAkKCdib2R5LCBodG1sJyk7XG5cdFx0bGV0IHByZWZpeCA9IGAke3RoaXMucHJlZml4fWA7XG5cdFx0bGV0IHByZWZpeENvbnRlbnQgPSBgJHt0aGlzLnByZWZpeENvbnRlbnR9YDtcblx0XHRsZXQgc3BlZWQgPSA2MDA7XG5cblx0XHRpZih3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB+d2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignIycgKyBwcmVmaXgpKSB7XG5cdFx0XHRhbmltYXRpb24od2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycgKyBwcmVmaXgsICcnKSk7XG5cdFx0fVxuXG5cdFx0JHNlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0YW5pbWF0aW9uKCQodGhpcykudmFsKCkpO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gYW5pbWF0aW9uKHZhbCkge1xuXHRcdFx0bGV0ICR0YXJnZXQgPSAkKCcjJyArIHByZWZpeENvbnRlbnQgKyB2YWwpO1xuXG5cdFx0XHRpZighJHRhcmdldC5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBwcmVmaXggKyB2YWw7XG5cblx0XHRcdGxldCBhZG1pbk1lbnUgPSBwYXJzZUludCgkKGBib2R5YCkuY3NzKCdwYWRkaW5nLXRvcCcpKTtcblxuXHRcdFx0bGV0IGhlYWRlckhlaWdodCA9ICQoJy5zSGVhZGVyJykubGVuZ3RoID8gJCgnLnNIZWFkZXInKS5vdXRlckhlaWdodCgpIDogMDtcblxuXHRcdFx0JGJvZHkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEwIC0gaGVhZGVySGVpZ2h0IC0gYWRtaW5NZW51fSwgc3BlZWQpO1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2U2VsZWN0O1xuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtjaGVja0luaXR9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LnNIZWFkZXIgPSBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcblx0XHR0aGlzLm5hbWUgPSBwcm9wcy5uYW1lIHx8IGBzSGVhZGVyYDtcblx0XHR0aGlzLnNlbGVjdG9yID0gcHJvcHMuc2VsZWN0b3IgfHwgYC4ke3RoaXMubmFtZX1gO1xuXG5cdFx0Y2hlY2tJbml0KHRoaXMuc2VsZWN0b3IsIHRoaXMubmFtZSwgKGl0ZW0pID0+IHtcblx0XHRcdHRoaXMuaW5pdCgkKGl0ZW0pKTtcblx0XHR9KTtcblx0fVxuXG5cdGluaXQoJGVsbSkge1xuXHRcdGNvbnN0IGNvbXBvbmVudE5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0Y29uc3QgJHNlYXJjaFRvZ2dsZUJ1dHRvbiA9ICRlbG0uZmluZChgLiR7dGhpcy5uYW1lfV9fc2VhcmNoQnRuYCk7XG5cdFx0Y29uc3QgJHNlYXJjaEZvcm1XcmFwcGVyID0gJGVsbS5maW5kKGAuJHt0aGlzLm5hbWV9X19zZWFyY2hGb3JtYCk7XG5cdFx0Y29uc3QgaXNTZWFyY2hJbml0aWFsbHlFeHBhbmRlZCA9ICRlbG0uaGFzQ2xhc3MoYCR7dGhpcy5uYW1lfV9zZWFyY2hPcGVuYCk7XG5cblx0XHQvLyBSZWFzb246IEtlZXAgQVJJQSBhbmQgZm9jdXNhYmlsaXR5IGluIHN5bmMgd2l0aG91dCBicmVha2luZyBDU1MgdHJhbnNmb3JtIGFuaW1hdGlvbi5cblx0XHRjb25zdCBzeW5jU2VhcmNoQWNjZXNzaWJpbGl0eVN0YXRlID0gKCR0YXJnZXRTZWFyY2hGb3JtV3JhcHBlciwgaXNFeHBhbmRlZCkgPT4ge1xuXHRcdFx0JHNlYXJjaFRvZ2dsZUJ1dHRvbi5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNFeHBhbmRlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuXHRcdFx0JHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLmF0dHIoJ2FyaWEtaGlkZGVuJywgaXNFeHBhbmRlZCA/ICdmYWxzZScgOiAndHJ1ZScpO1xuXHRcdFx0aWYgKGlzRXhwYW5kZWQpIHtcblx0XHRcdFx0JHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLnJlbW92ZUF0dHIoJ2luZXJ0Jyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCR0YXJnZXRTZWFyY2hGb3JtV3JhcHBlci5hdHRyKCdpbmVydCcsICdpbmVydCcpO1xuXHRcdH07XG5cdFx0Y29uc3QgY29sbGFwc2VTZWFyY2hGb3JtID0gKCR0YXJnZXRTZWFyY2hGb3JtV3JhcHBlciA9ICRzZWFyY2hGb3JtV3JhcHBlcikgPT4ge1xuXHRcdFx0JGVsbS5yZW1vdmVDbGFzcyhgJHt0aGlzLm5hbWV9X3NlYXJjaE9wZW5gKTtcblx0XHRcdHN5bmNTZWFyY2hBY2Nlc3NpYmlsaXR5U3RhdGUoJHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLCBmYWxzZSk7XG5cdFx0fTtcblxuXHRcdHN5bmNTZWFyY2hBY2Nlc3NpYmlsaXR5U3RhdGUoJHNlYXJjaEZvcm1XcmFwcGVyLCBpc1NlYXJjaEluaXRpYWxseUV4cGFuZGVkKTtcblxuXHRcdCRlbG0ub24oJ2NsaWNrIHRvdWNoJywgYC4ke3RoaXMubmFtZX1fX2J0bi1tb2JpbGVgLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0JGVsbS50b2dnbGVDbGFzcyhgJHt0aGlzLm5hbWV9X21vYmlsZU1lbnVgKTtcblx0XHRcdCQoJ2JvZHknKS50b2dnbGVDbGFzcyhgbW9iaWxlTWVudS1vcGVuYCk7XG5cblx0XHRcdGNvbGxhcHNlU2VhcmNoRm9ybSgkc2VhcmNoRm9ybVdyYXBwZXIpO1xuXG5cdFx0XHRjb25zdCBpc0V4cGFuZGVkID0gJGVsbS5oYXNDbGFzcyhgJHt0aGlzLm5hbWV9X21vYmlsZU1lbnVgKTtcblx0XHRcdCQoZS5jdXJyZW50VGFyZ2V0KS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNFeHBhbmRlZCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuXHRcdFx0Ly9hZGRpbmcgQXJpYSBhdHRyaWJ1dGUgdG8gcmVmbGVjdCBlaXRoZXIgbWVudSBleHBhbmRlZCBvciBjb2xsYXBzZWRcblx0XHR9KTtcblxuXHRcdCRlbG0ub24oJ2NsaWNrIHRvdWNoJywgYC4ke3RoaXMubmFtZX1fX3NlYXJjaEJ0bmAsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHQkZWxtLnRvZ2dsZUNsYXNzKGAke3RoaXMubmFtZX1fc2VhcmNoT3BlbmApO1xuXG5cdFx0XHQkZWxtLnJlbW92ZUNsYXNzKGAke3RoaXMubmFtZX1fbW9iaWxlTWVudWApO1xuXHRcdFx0JCgnYm9keScpLnJlbW92ZUNsYXNzKGBtb2JpbGVNZW51LW9wZW5gKTtcblxuXHRcdFx0Y29uc3QgaXNFeHBhbmRlZCA9ICRlbG0uaGFzQ2xhc3MoYCR7dGhpcy5uYW1lfV9zZWFyY2hPcGVuYCk7XG5cdFx0XHRjb25zdCAkY2xpY2tlZFNlYXJjaEZvcm1XcmFwcGVyID0gJChlLmN1cnJlbnRUYXJnZXQpLnNpYmxpbmdzKGAuJHt0aGlzLm5hbWV9X19zZWFyY2hGb3JtYCkuZmlyc3QoKTtcblx0XHRcdGNvbnN0ICR0YXJnZXRTZWFyY2hGb3JtV3JhcHBlciA9ICRjbGlja2VkU2VhcmNoRm9ybVdyYXBwZXIubGVuZ3RoID8gJGNsaWNrZWRTZWFyY2hGb3JtV3JhcHBlciA6ICRzZWFyY2hGb3JtV3JhcHBlcjtcblx0XHRcdHN5bmNTZWFyY2hBY2Nlc3NpYmlsaXR5U3RhdGUoJHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLCBpc0V4cGFuZGVkKTtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuXHRcdFx0XHRjb25zdCBpc0V4cGFuZGVkQWZ0ZXJBbGxIYW5kbGVycyA9ICRlbG0uaGFzQ2xhc3MoYCR7dGhpcy5uYW1lfV9zZWFyY2hPcGVuYCk7XG5cdFx0XHRcdHN5bmNTZWFyY2hBY2Nlc3NpYmlsaXR5U3RhdGUoJHRhcmdldFNlYXJjaEZvcm1XcmFwcGVyLCBpc0V4cGFuZGVkQWZ0ZXJBbGxIYW5kbGVycyk7XG5cdFx0XHR9KTtcblx0XHRcdC8vYWRkaW5nIEFyaWEgYXR0cmlidXRlIHRvIHJlZmxlY3Qgd2hldGhlciB0aGUgU2VhcmNoIGZvcm0gaXMgZXhwYW5kZWQgb3IgY29sbGFwc2VkXG5cdFx0XHQkZWxtLmZpbmQoYC4ke3RoaXMubmFtZX1fX2J0bi1tb2JpbGVgKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cblx0XHRcdGlmIChpc0V4cGFuZGVkKSB7XG5cdFx0XHRcdCRlbG0uZmluZCgnLmYtc2VhcmNoIGlucHV0LmZvcm0tc2VhcmNoJykuZm9jdXMoKTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXHRcdCQoZG9jdW1lbnQpLm9uKCdmb2N1c2luJywgYC5iU2hhcmUuc2VjdGlvbl9fYlNoYXJlIGJ1dHRvbiwgLmJTaGFyZS5zZWN0aW9uX19iU2hhcmUgYSwgLmJTaGFyZS5zZWN0aW9uX19iU2hhcmUgW3JvbGU9XCJidXR0b25cIl1gLCAoKSA9PiB7XG5cdFx0XHRpZiAoISRlbG0uaGFzQ2xhc3MoYCR7dGhpcy5uYW1lfV9zZWFyY2hPcGVuYCkpIHJldHVybjtcblx0XHRcdC8vIFJlYXNvbjogS2VlcCBmb2N1c2VkIHNoYXJlIGJ1dHRvbnMgdmlzaWJsZSB3aGVuIGtleWJvYXJkIHVzZXJzIG1vdmUgYmVoaW5kIHRoZSBzZWFyY2ggb3ZlcmxheS5cblx0XHRcdGNvbGxhcHNlU2VhcmNoRm9ybSgkc2VhcmNoRm9ybVdyYXBwZXIpO1xuXHRcdH0pO1xuXG5cdFx0YWRkUGFkZGluZygpO1xuXHRcdGFkZEFjY2Vzc2liaWxpdHlDb29raWUoKTtcblxuXHRcdCQod2luZG93KS5vbigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0YWRkUGFkZGluZygpO1xuXHRcdH0pO1xuXG5cdFx0JGVsbS5vbignY2xpY2sgdG91Y2gnLCBgLmJNZXNzYWdlX19jbG9zZWAsICgpID0+IHtcblx0XHRcdGFkZFBhZGRpbmcoKTtcblx0XHR9KTtcblxuXHRcdGluaXRLZXlib2FyZE5hdmlnYXRpb24oKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uKCdkcnVwYWxWaWV3cG9ydE9mZnNldENoYW5nZS50b29sYmFyJywgZnVuY3Rpb24gKGV2ZW50LCBvZmZzZXRzKSB7XG5cdFx0XHQkZWxtLmNzcygndG9wJywgb2Zmc2V0cy50b3ApO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gaW5pdEtleWJvYXJkTmF2aWdhdGlvbigpIHtcblx0XHRcdGNvbnN0IHRvcExldmVsRXhwYW5kZWRTZWxlY3RvciA9IGAuJHtjb21wb25lbnROYW1lfV9fbWVudS13cmFwID4gdWwubWVudSA+IGxpLm1lbnUtaXRlbS0tZXhwYW5kZWRgO1xuXHRcdFx0Y29uc3Qga2V5Ym9hcmRPcGVuQ2xhc3MgPSBgaG92ZXJgO1xuXG5cdFx0XHQkZWxtLmZpbmQodG9wTGV2ZWxFeHBhbmRlZFNlbGVjdG9yKS5lYWNoKChfLCBsaXN0SXRlbUVsZW1lbnQpID0+IHtcblx0XHRcdFx0Y29uc3QgJGxpc3RJdGVtID0gJChsaXN0SXRlbUVsZW1lbnQpO1xuXHRcdFx0XHRjb25zdCAkc3VibWVudSA9ICRsaXN0SXRlbS5jaGlsZHJlbihgdWwubWVudWApLmZpcnN0KCk7XG5cdFx0XHRcdGNvbnN0ICR0cmlnZ2VyID0gJGxpc3RJdGVtLmNoaWxkcmVuKGBhLCBzcGFuYCkuZmlyc3QoKTtcblxuXHRcdFx0XHRpZiAoISRzdWJtZW51Lmxlbmd0aCB8fCAhJHRyaWdnZXIubGVuZ3RoKSByZXR1cm47XG5cblx0XHRcdFx0Ly8gUmVhc29uOiBTb21lIG1lbnUgaXRlbXMgYXJlIHJlbmRlcmVkIGFzIDxzcGFuPiwgc28gd2UgbWFrZSB0aGVtIGZvY3VzYWJsZSBrZXlib2FyZCB0cmlnZ2Vycy5cblx0XHRcdFx0aWYgKCR0cmlnZ2VyLmlzKGBzcGFuYCkpIHtcblx0XHRcdFx0XHQkdHJpZ2dlci5hdHRyKHtcblx0XHRcdFx0XHRcdCd0YWJpbmRleCc6ICcwJyxcblx0XHRcdFx0XHRcdCdyb2xlJzogJ2J1dHRvbidcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdCR0cmlnZ2VyLmF0dHIoe1xuXHRcdFx0XHRcdCdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuXHRcdFx0XHRcdCdhcmlhLWV4cGFuZGVkJzogJ2ZhbHNlJ1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkbGlzdEl0ZW0ub24oYGZvY3VzaW5gLCAoKSA9PiB7XG5cdFx0XHRcdFx0b3BlblN1Ym1lbnUoJGxpc3RJdGVtLCAkdHJpZ2dlciwga2V5Ym9hcmRPcGVuQ2xhc3MpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkbGlzdEl0ZW0ub24oYGZvY3Vzb3V0YCwgKGZvY3VzRXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBoYXNGb2N1c2VkRGVzY2VuZGFudCA9IGxpc3RJdGVtRWxlbWVudC5jb250YWlucyhmb2N1c0V2ZW50LnJlbGF0ZWRUYXJnZXQpO1xuXHRcdFx0XHRcdGlmIChoYXNGb2N1c2VkRGVzY2VuZGFudCkgcmV0dXJuO1xuXHRcdFx0XHRcdGNsb3NlU3VibWVudSgkbGlzdEl0ZW0sICR0cmlnZ2VyLCBrZXlib2FyZE9wZW5DbGFzcyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdCR0cmlnZ2VyLm9uKGBrZXlkb3duYCwgKGtleWJvYXJkRXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXlDb2RlID0ga2V5Ym9hcmRFdmVudC5rZXk7XG5cdFx0XHRcdFx0aWYgKFtgIGAsIGBTcGFjZWJhcmAsIGBFbnRlcmAsIGBBcnJvd0Rvd25gLCBgQXJyb3dVcGAsIGBFc2NhcGVgXS5pbmRleE9mKGtleUNvZGUpID09PSAtMSkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0a2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdFx0aWYgKGtleUNvZGUgPT09IGBFc2NhcGVgKSB7XG5cdFx0XHRcdFx0XHRjbG9zZVN1Ym1lbnUoJGxpc3RJdGVtLCAkdHJpZ2dlciwga2V5Ym9hcmRPcGVuQ2xhc3MpO1xuXHRcdFx0XHRcdFx0JHRyaWdnZXIudHJpZ2dlcihgZm9jdXNgKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvcGVuU3VibWVudSgkbGlzdEl0ZW0sICR0cmlnZ2VyLCBrZXlib2FyZE9wZW5DbGFzcyk7XG5cblx0XHRcdFx0XHRpZiAoa2V5Q29kZSA9PT0gYEFycm93VXBgKSB7XG5cdFx0XHRcdFx0XHRmb2N1c1N1Ym1lbnVMaW5rKCRzdWJtZW51LCBgbGFzdGApO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZvY3VzU3VibWVudUxpbmsoJHN1Ym1lbnUsIGBmaXJzdGApO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkc3VibWVudS5vbihga2V5ZG93bmAsIGBhYCwgKGtleWJvYXJkRXZlbnQpID0+IHtcblx0XHRcdFx0XHRjb25zdCBrZXlDb2RlID0ga2V5Ym9hcmRFdmVudC5rZXk7XG5cdFx0XHRcdFx0aWYgKFtgQXJyb3dEb3duYCwgYEFycm93VXBgLCBgSG9tZWAsIGBFbmRgLCBgRXNjYXBlYF0uaW5kZXhPZihrZXlDb2RlKSA9PT0gLTEpIHJldHVybjtcblxuXHRcdFx0XHRcdGNvbnN0ICRzdWJtZW51TGlua3MgPSAkc3VibWVudS5maW5kKGBhOnZpc2libGVgKTtcblx0XHRcdFx0XHRpZiAoISRzdWJtZW51TGlua3MubGVuZ3RoKSByZXR1cm47XG5cblx0XHRcdFx0XHRrZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0Y29uc3QgY3VycmVudExpbmtJbmRleCA9ICRzdWJtZW51TGlua3MuaW5kZXgoa2V5Ym9hcmRFdmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdFx0XHRsZXQgdGFyZ2V0TGlua0luZGV4ID0gY3VycmVudExpbmtJbmRleDtcblxuXHRcdFx0XHRcdGlmIChrZXlDb2RlID09PSBgRXNjYXBlYCkge1xuXHRcdFx0XHRcdFx0Y2xvc2VTdWJtZW51KCRsaXN0SXRlbSwgJHRyaWdnZXIsIGtleWJvYXJkT3BlbkNsYXNzKTtcblx0XHRcdFx0XHRcdCR0cmlnZ2VyLnRyaWdnZXIoYGZvY3VzYCk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleUNvZGUgPT09IGBBcnJvd0Rvd25gKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRMaW5rSW5kZXggPSAoY3VycmVudExpbmtJbmRleCArIDEpICUgJHN1Ym1lbnVMaW5rcy5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleUNvZGUgPT09IGBBcnJvd1VwYCkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0TGlua0luZGV4ID0gKGN1cnJlbnRMaW5rSW5kZXggLSAxICsgJHN1Ym1lbnVMaW5rcy5sZW5ndGgpICUgJHN1Ym1lbnVMaW5rcy5sZW5ndGg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGtleUNvZGUgPT09IGBIb21lYCkge1xuXHRcdFx0XHRcdFx0dGFyZ2V0TGlua0luZGV4ID0gMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoa2V5Q29kZSA9PT0gYEVuZGApIHtcblx0XHRcdFx0XHRcdHRhcmdldExpbmtJbmRleCA9ICRzdWJtZW51TGlua3MubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQkc3VibWVudUxpbmtzLmVxKHRhcmdldExpbmtJbmRleCkudHJpZ2dlcihgZm9jdXNgKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvcGVuU3VibWVudSgkbGlzdEl0ZW0sICR0cmlnZ2VyLCBrZXlib2FyZE9wZW5DbGFzcykge1xuXHRcdFx0JGxpc3RJdGVtLmFkZENsYXNzKGtleWJvYXJkT3BlbkNsYXNzKTtcblx0XHRcdCR0cmlnZ2VyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNsb3NlU3VibWVudSgkbGlzdEl0ZW0sICR0cmlnZ2VyLCBrZXlib2FyZE9wZW5DbGFzcykge1xuXHRcdFx0JGxpc3RJdGVtLnJlbW92ZUNsYXNzKGtleWJvYXJkT3BlbkNsYXNzKTtcblx0XHRcdCR0cmlnZ2VyLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmb2N1c1N1Ym1lbnVMaW5rKCRzdWJtZW51LCBmb2N1c1Bvc2l0aW9uKSB7XG5cdFx0XHRjb25zdCAkc3VibWVudUxpbmtzID0gJHN1Ym1lbnUuZmluZChgYTp2aXNpYmxlYCk7XG5cdFx0XHRpZiAoISRzdWJtZW51TGlua3MubGVuZ3RoKSByZXR1cm47XG5cblx0XHRcdGlmIChmb2N1c1Bvc2l0aW9uID09PSBgbGFzdGApIHtcblx0XHRcdFx0JHN1Ym1lbnVMaW5rcy5sYXN0KCkudHJpZ2dlcihgZm9jdXNgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQkc3VibWVudUxpbmtzLmZpcnN0KCkudHJpZ2dlcihgZm9jdXNgKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBhZGRBY2Nlc3NpYmlsaXR5Q29va2llKCkge1xuXHRcdFx0bGV0ICRhY2Nlc3NpYmlsaXR5ID0gJCgnI2FjY2Vzc2liaWxpdHknKTtcblxuXHRcdFx0aWYgKCEkYWNjZXNzaWJpbGl0eS5sZW5ndGgpIHJldHVybjtcblx0XHRcdGxldCBjb29rZU5hbWUgPSAnYWNjZXNzaWJpbGl0eV9tZXNzYWdlX3dhc19zaG93bic7XG5cblx0XHRcdGlmICgkLmNvb2tpZShjb29rZU5hbWUpKSB7XG5cdFx0XHRcdCRhY2Nlc3NpYmlsaXR5LmhpZGUoKTtcblx0XHRcdFx0YWRkUGFkZGluZygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGFjY2Vzc2liaWxpdHkuc2hvdygpO1xuXHRcdFx0XHQkYWNjZXNzaWJpbGl0eS5yZW1vdmVDbGFzcyhgYk1lc3NhZ2VfaGlkZWApO1xuXHRcdFx0XHQkYWNjZXNzaWJpbGl0eS5vbignZXYuaGlkZScsICgpID0+IHtcblxuXHRcdFx0XHRcdCQuY29va2llKCdhY2Nlc3NpYmlsaXR5X21lc3NhZ2Vfd2FzX3Nob3duJywgXCIxXCIsIHtcblx0XHRcdFx0XHRcdGV4cGlyZXM6IDg2NDAwLFxuXHRcdFx0XHRcdFx0cGF0aDogJy8nXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRhZGRQYWRkaW5nKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGFkZFBhZGRpbmcoKSB7XG5cdFx0XHRsZXQgJHBhZ2VXciA9ICQoYC5wYWdlV3JgKTtcblx0XHRcdGlmICghJHBhZ2VXci5sZW5ndGgpIHJldHVybjtcblx0XHRcdCRwYWdlV3IuY3NzKGBwYWRkaW5nLXRvcGAsICRlbG0ub3V0ZXJIZWlnaHQoKSk7XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzSGVhZGVyO1xuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHtjaGVja0luaXR9IGZyb20gXCIuLi9oZWxwZXJcIjtcbmNvbnN0ICQgPSBqUXVlcnk7XG5cbndpbmRvdy5TbGlkZXJUeXBlQSA9IGNsYXNzIHtcblx0Y29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuXHRcdHRoaXMubmFtZSA9IHByb3BzLm5hbWUgfHwgYHNsaWRlci10eXBlLWFgO1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBwcm9wcy5zZWxlY3RvciB8fCBgLiR7dGhpcy5uYW1lfWA7XG5cblx0XHRjaGVja0luaXQodGhpcy5zZWxlY3RvciwgdGhpcy5uYW1lLCAoaXRlbSkgPT4ge1xuXHRcdFx0dGhpcy5pbml0KCQoaXRlbSkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgkZWxtKSB7XG5cblx0XHRsZXQgJGN1cnJlbnRXcmFwID0gJGVsbTtcblxuXHRcdGxldCAkc2xpZGVyX2JnID0gJGN1cnJlbnRXcmFwLmZpbmQoJy4nICsgdGhpcy5uYW1lICsgJ19fYmctaXRlbXMnKTtcblx0XHRsZXQgJHNsaWRlcl9kZXNjID0gJGN1cnJlbnRXcmFwLmZpbmQoJy4nICsgdGhpcy5uYW1lICsgJ19fZGVzYycpO1xuXHRcdGxldCAkc2xpZGVyX19zbGlkZV9uYXYgPSAkY3VycmVudFdyYXAuZmluZCgnLicgKyB0aGlzLm5hbWUgKyAnX19uYXYnKTtcblxuXHRcdGlmICgkY3VycmVudFdyYXAuZmluZCgnLicgKyB0aGlzLm5hbWUgKyAnX19kZXNjLWl0ZW0nKS5sZW5ndGggPiAxKSB7XG5cdFx0XHQkY3VycmVudFdyYXAuYWRkQ2xhc3ModGhpcy5uYW1lICsgJ19zbGlkZXMnKTtcblx0XHR9XG5cblx0XHQkc2xpZGVyX2JnLnNsaWNrKHtcblx0XHRcdHBhdXNlT25Ib3ZlcjogZmFsc2UsXG5cdFx0XHRwYXVzZU9uRm9jdXM6IGZhbHNlLFxuXHRcdFx0YWNjZXNzaWJpbGl0eTogdHJ1ZSxcblx0XHRcdGRvdHM6IGZhbHNlLFxuXHRcdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdFx0c3BlZWQ6IDUwMCxcblx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdFx0YXV0b3BsYXlTcGVlZDogMTUwMDAsXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRcdHN3aXBlOiBmYWxzZSxcblx0XHRcdGFzTmF2Rm9yOiAkc2xpZGVyX2Rlc2MsXG5cdFx0XHRyZXNwb25zaXZlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRicmVha3BvaW50OiA3NjgsXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRcdHN3aXBlOiB0cnVlLFxuXHRcdFx0XHRcdFx0YXV0b3BsYXk6IGZhbHNlLFxuXHRcdFx0XHRcdFx0aW5maW5pdGU6IGZhbHNlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cblx0XHQkc2xpZGVyX2Rlc2Muc2xpY2soe1xuXHRcdFx0cGF1c2VPbkhvdmVyOiBmYWxzZSxcblx0XHRcdHBhdXNlT25Gb2N1czogZmFsc2UsXG5cdFx0XHRhY2Nlc3NpYmlsaXR5OiBmYWxzZSxcblx0XHRcdGRvdHM6IHRydWUsXG5cdFx0XHRhcHBlbmREb3RzOiAkc2xpZGVyX19zbGlkZV9uYXYsXG5cdFx0XHRhcnJvd3M6IGZhbHNlLFxuXHRcdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0XHRzcGVlZDogNzAwLFxuXHRcdFx0YXV0b3BsYXk6IHRydWUsXG5cdFx0XHRhdXRvcGxheVNwZWVkOiAxNTAwMCxcblx0XHRcdGZhZGU6IHRydWUsXG5cdFx0XHRzd2lwZTogZmFsc2UsXG5cdFx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRcdGNzc0Vhc2U6IFwiZWFzZVwiLFxuXHRcdFx0YXNOYXZGb3I6ICRzbGlkZXJfYmcsXG5cdFx0XHRyZXNwb25zaXZlOiBbe1xuXHRcdFx0XHRicmVha3BvaW50OiA3NjgsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c3dpcGU6IHRydWUsXG5cdFx0XHRcdFx0YXV0b3BsYXk6IGZhbHNlLFxuXHRcdFx0XHRcdGluZmluaXRlOiBmYWxzZSxcblx0XHRcdFx0fVxuXHRcdFx0fV1cblx0XHR9KTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyVHlwZUE7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vc3R5bGVzJ1xuXG5pbXBvcnQgYkV2ZW50IGZyb20gJy4vY29tcG9uZW50cy9iRXZlbnQvYkV2ZW50J1xuaW1wb3J0IE9ic2VydmVyIGZyb20gXCIuL2NvbXBvbmVudHMvT2JzZXJ2ZXIvT2JzZXJ2ZXJcIjtcbmltcG9ydCBCbG9ja1ZpZGVvIGZyb20gXCIuL2NvbXBvbmVudHMvYk1lZGlhL3ZpZGVvXCI7XG5pbXBvcnQgYlNvcnQgZnJvbSBcIi4vY29tcG9uZW50cy9iU29ydC9iU29ydFwiO1xuaW1wb3J0IG5hdlNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL25hdlNlbGVjdC9uYXZTZWxlY3RcIjtcbmltcG9ydCBTbGlkZXJUeXBlQSBmcm9tIFwiLi9jb21wb25lbnRzL3NsaWRlci10eXBlLWEvU2xpZGVyVHlwZUFcIjtcbmltcG9ydCBzSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvc0hlYWRlci9zSGVhZGVyXCI7XG5pbXBvcnQgYlRlcm1zIGZyb20gXCIuL2NvbXBvbmVudHMvYlRlcm1zL2JUZXJtc1wiO1xuaW1wb3J0IGJTdGFmZiBmcm9tIFwiLi9jb21wb25lbnRzL2JTdGFmZi9iU3RhZmZcIjtcbmltcG9ydCBsaWdodFNsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2JMaWdodFNsaWRlci9saWdodFNsaWRlclwiO1xuaW1wb3J0IE1vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWxcIjtcbmltcG9ydCBiRXZlbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvYkV2ZW50cy9iRXZlbnRzXCI7XG5pbXBvcnQgaW5pdEFjY2Vzc2liaWxpdHlXaWRnZXRBMTF5IGZyb20gXCIuL2NvbXBvbmVudHMvYWNjZXNzaWJpbGl0eS9pbml0QWNjZXNzaWJpbGl0eVdpZGdldEExMXlcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG5cdCQoJ2JvZHknKS5hZGRDbGFzcygnbG9hZGVkJyk7XG59KTtcblxuaWYgKHdpbmRvdy5EcnVwYWw/LmJlaGF2aW9ycykge1xuXHREcnVwYWwuYmVoYXZpb3JzLnByb2plY3ROYW1lID0ge1xuXHRcdGF0dGFjaDogKGNvbnRleHQsIHNldHRpbmdzKSA9PiB7XG5cdFx0XHRpbml0KCk7XG5cdFx0fSxcblx0XHRjb21wbGV0ZWRDYWxsYmFjazogKCkgPT4geyAvKkRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhlcmUgaW4gY2FzZSBvdGhlciBtb2R1bGVzL3RoZW1lcyB3YW50IHRvIG92ZXJyaWRlIGl0LiovXG5cdFx0fVxuXHR9XG59IGVsc2Uge1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXHRcdGluaXQoKTtcblx0fSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdG5ldyBPYnNlcnZlcigpO1xuXHRuZXcgbmF2U2VsZWN0KCk7XG5cdG5ldyBuYXZTZWxlY3Qoe1xuXHRcdG5hbWU6ICduYXZTZWxlY3RJc3N1ZVBhcGVycycsXG5cdFx0cHJlZml4OiAnY2F0ZWdvcnktJyxcblx0XHRwcmVmaXhDb250ZW50OiAnaWQtJyxcblx0fSk7XG5cdG5ldyBzSGVhZGVyKCk7XG5cdGFkZFBhZGRpbmcoKTtcblx0aGFzaFNjcm9sbCgpO1xuXHRpbml0Rm9jdXNlZEVsZW1lbnRWaWV3cG9ydFNjcm9sbCgpO1xufSk7XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0YWRkUGFkZGluZygpO1xufSk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cdGluaXRBY2Nlc3NpYmlsaXR5V2lkZ2V0QTExeSgpO1xuXHRuZXcgTW9kYWwoKTtcblx0bmV3IGJFdmVudCgpO1xuXHRuZXcgYlNvcnQoKTtcblx0bmV3IFNsaWRlclR5cGVBKCk7XG5cdG5ldyBiVGVybXMoKTtcblx0bmV3IGJTdGFmZigpO1xuXHRuZXcgbGlnaHRTbGlkZXIoKTtcblx0bmV3IGJFdmVudHMoKTtcblx0aW5pdEZvcm1SZWRpcmVjdCgpO1xuXHRpbml0U2VsZWN0KCk7XG5cdGluaXRBY2Nlc3NpYmlsaXR5KCk7XG5cdGluaXRIZWFkZXJIb3ZlcigpO1xuXHRpbml0Q291bnRlcigkKCcuYlNlYXRzX19jYXAnKSwgZmFsc2UsIDIpO1xuXHRpbml0Q291bnRlcigkKCcuYlNlYXRzX19jb3VudEQnKSwgZmFsc2UsIDIpO1xuXHRpbml0Q291bnRlcigkKCcuYlNlYXRzX19jb3VudFInKSwgZmFsc2UsIDIpO1xuXHRpbml0Q291bnRlcigkKCcuYlNlYXRzX19jb3VudFYnKSwgZmFsc2UsIDIpO1xuXHRjaGFuZ2VBdXRvY29tcGxldGUoKTtcblx0c2Nyb2xsQmxvY2soKTtcblx0Y2hhbmdlUGxhY2Vob2xkZXJUaW1lKCk7XG5cdGluaXREYXRlKCk7XG5cblx0bmV3IEJsb2NrVmlkZW8oKTtcblxuXHQkKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24gKGV2ZW50LCB4aHIsIHNldHRpbmdzKSB7XG5cblx0XHRpZiAoc2V0dGluZ3MudXJsID09PSAnL3ZpZXdzL2FqYXg/X3dyYXBwZXJfZm9ybWF0PWRydXBhbF9hamF4Jykge1xuXHRcdFx0bGV0IGRhdGFBcnIgPSBzZXR0aW5ncy5kYXRhLnNwbGl0KCcmJyk7XG5cblx0XHRcdGlmICh+JC5pbkFycmF5KGBjb21taXR0ZWU9QWxsYCwgZGF0YUFycikpIHJldHVyblxuXG5cdFx0XHRsZXQgc1NlblJlcyA9ICQoYC5zU2VuX19yZXNgKVxuXG5cdFx0XHRpZighc1NlblJlcy5sZW5ndGgpIHJldHVybjtcblxuXHRcdFx0c1NlblJlcy5hZGRDbGFzcygnc1Nlbl9fcmVzX2NvbW1pdHRlZScpO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRlKCkge1xuXHR2YXIgJHdyYXAgPSAkKCBcIi5oYXNEYXRlcGlja2VyXCIgKTtcblxuXHRpZighJHdyYXAubGVuZ3RoKSByZXR1cm47XG5cblx0dHJ5IHtcblx0XHQkd3JhcC5kYXRlcGlja2VyKCBcIm9wdGlvblwiLCBcImNoYW5nZU1vbnRoXCIsIGZhbHNlKTtcblx0XHQkd3JhcC5kYXRlcGlja2VyKCBcIm9wdGlvblwiLCBcImNoYW5nZVllYXJcIiwgZmFsc2UpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYoY29uc29sZSAmJiBjb25zb2xlLmxvZykge2NvbnNvbGUubG9nKCdkYXRlcGlja2VyIHVuZGVmaW5lZDogJyArIGUubWVzc2FnZSl9XG5cdH1cblxuXHR2YXIgJHBhcmVudCA9ICR3cmFwLnBhcmVudCgnLmZvcm0taXRlbS1maWVsZC1qb3VybmFscy1maWxlcy1kYXRlLXZhbHVlJyk7XG5cblx0aWYgKCRwYXJlbnQuaGFzQ2xhc3MoJ3Byb2Nlc3NlZCcpKSByZXR1cm47XG5cdCRwYXJlbnQuYWRkQ2xhc3MoJ3Byb2Nlc3NlZCcpO1xuXG5cdCR3cmFwLm9uKCdmb2N1c2luJywgZnVuY3Rpb24oKSB7XG5cdFx0JHBhcmVudC5hZGRDbGFzcygnb3BlbicpO1xuXHR9KTtcblxuXHQkd3JhcC5vbignZm9jdXNvdXQnLCBmdW5jdGlvbigpIHtcblx0XHQkcGFyZW50LnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRQYWRkaW5nKCkge1xuXG5cdGxldCAkaGVhZGVyID0gJChgLnNIZWFkZXJgKTtcblx0aWYgKCEkaGVhZGVyLmxlbmd0aCkgcmV0dXJuO1xuXG5cdGxldCAkcGFnZVdyID0gJChgLnBhZ2VXcmApO1xuXHRpZiAoISRwYWdlV3IubGVuZ3RoKSByZXR1cm47XG5cdCRwYWdlV3IuY3NzKGBwYWRkaW5nLXRvcGAsICRoZWFkZXIub3V0ZXJIZWlnaHQoKSk7XG59XG5cbmZ1bmN0aW9uIGhhc2hTY3JvbGwoKSB7XG5cdGxldCAkYm9keSA9ICQoJ2JvZHksIGh0bWwnKTtcblx0bGV0ICRib2R5T25seSA9ICQoJ2JvZHknKTtcblxuXHRpZiAoJGJvZHlPbmx5Lmhhc0NsYXNzKCdoYXNoU2Nyb2xsX3Byb2Nlc3NlZCcpKSByZXR1cm47XG5cdCRib2R5T25seS5hZGRDbGFzcygnaGFzaFNjcm9sbF9wcm9jZXNzZWQnKTtcblxuXHRsZXQgcHJlZml4ID0gYGwtYDtcblx0Ly9sZXQgcHJlZml4Q29udGVudCA9IGAke3RoaXMucHJlZml4Q29udGVudH1gO1xuXHRsZXQgc3BlZWQgPSA2MDA7XG5cblx0aWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIH53aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjJyArIHByZWZpeCkpIHtcblx0XHRhbmltYXRpb24od2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycgKyBwcmVmaXgsICcnKSk7XG5cdH1cblxuXHQkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgfndpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyMnICsgcHJlZml4KSkge1xuXHRcdFx0YW5pbWF0aW9uKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnICsgcHJlZml4LCAnJykpO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gYW5pbWF0aW9uKHZhbCkge1xuXHRcdGxldCAkdGFyZ2V0ID0gJCgnIycgKyB2YWwpO1xuXG5cdFx0aWYgKCEkdGFyZ2V0Lmxlbmd0aCkgcmV0dXJuO1xuXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBwcmVmaXggKyB2YWw7XG5cblx0XHRsZXQgYWRtaW5NZW51ID0gcGFyc2VJbnQoJChgYm9keWApLmNzcygncGFkZGluZy10b3AnKSk7XG5cblx0XHRsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLnNIZWFkZXInKS5sZW5ndGggPyAkKCcuc0hlYWRlcicpLm91dGVySGVpZ2h0KCkgOiAwO1xuXG5cdFx0JGJvZHkuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEwIC0gaGVhZGVySGVpZ2h0IC0gYWRtaW5NZW51fSwgc3BlZWQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUF1dG9jb21wbGV0ZSgpIHtcblx0bGV0ICR6aXAgPSAkKGAuc1NlbiAuZm9ybS1pdGVtLXppcCAuZm9ybS1hdXRvY29tcGxldGVgKTtcblxuXHRpZiAoISR6aXAubGVuZ3RoKSByZXR1cm47XG5cblx0JHppcC5hdHRyKCdhdXRvY29tcGxldGUnLCAnbmV3LXBhc3N3b3JkJyk7XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlUGxhY2Vob2xkZXJUaW1lKCkge1xuXHRsZXQgJGlucHV0U3RhcnQgPSAkKGAuZm9ybS1pdGVtLWRhdGUtdGltZSBpbnB1dGApO1xuXHRsZXQgJGlucHV0RW5kID0gJChgLmZvcm0taXRlbS1lbmQtdGltZS10aW1lIGlucHV0YCk7XG5cblx0aWYgKCEkaW5wdXRTdGFydC5sZW5ndGgpIHJldHVybjtcblx0aWYgKCEkaW5wdXRFbmQubGVuZ3RoKSByZXR1cm47XG5cblx0JGlucHV0U3RhcnQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhcnQgVGltZScpO1xuXHQkaW5wdXRFbmQuYXR0cigncGxhY2Vob2xkZXInLCAnRW5kIFRpbWUnKTtcblxuXHRmb2N1c0luaXQoWyRpbnB1dEVuZCwgJGlucHV0U3RhcnRdKTtcblxuXHRmdW5jdGlvbiBmb2N1c0luaXQoaW5wdXRzKSB7XG5cdFx0aW5wdXRzLmZvckVhY2goKGlucHV0KT0+IHtcblx0XHRcdGlucHV0LmF0dHIoJ3R5cGUnLCAndGV4dCcpO1xuXG5cdFx0XHQvLyBpZiAoIWlucHV0Lmhhc0NsYXNzKCdmb2N1cy1pbml0JykpIHtcblx0XHRcdC8vIFx0aW5wdXQuYWRkQ2xhc3MoJ2ZvY3VzLWluaXQnKTtcblx0XHRcdC8vXG5cdFx0XHQvLyBcdGlucHV0Lm9uKCdmb2N1cycsICgpID0+IHtcblx0XHRcdC8vIFx0XHRpbnB1dC5hdHRyKCd0eXBlJywgJ3RpbWUnKTtcblx0XHRcdC8vIFx0fSlcblx0XHRcdC8vIH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiBpbml0Q291bnRlcih3cmFwLCBlYXNpbmcsIHNwZWVkKSB7XG5cdHZhciAkd3JhcCA9IHdyYXAuZmluZCgnLmNvdW50Jyk7XG5cblx0aWYgKCEkd3JhcC5sZW5ndGgpIHJldHVybjtcblxuXHRpZiAoJHdyYXAuaGFzQ2xhc3MoJ3Byb2Nlc3NlZCcpKSByZXR1cm47XG5cdCR3cmFwLmFkZENsYXNzKCdwcm9jZXNzZWQnKTtcblxuXHR2YXIgc3RhcnQgPSArJHdyYXAuZGF0YSgnc3RhcnQnKTtcblx0dmFyIGVuZCA9ICskd3JhcC5kYXRhKCdlbmQnKTtcblxuXHR2YXIgY291bnRlciA9IG5ldyBDb3VudFVwKCR3cmFwWzBdLCBzdGFydCwgZW5kLCAwLCBzcGVlZCwge1xuXHRcdHVzZUVhc2luZzogZWFzaW5nLFxuXHRcdHVzZUdyb3VwaW5nOiB0cnVlLFxuXHRcdHNlcGFyYXRvcjogJywnXG5cdH0pO1xuXG5cdGNoZWNrUG9zaXRpb24oKTtcblxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcblx0XHRjaGVja1Bvc2l0aW9uKCk7XG5cdH0pO1xuXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24gKCkge1xuXHRcdGNoZWNrUG9zaXRpb24oKTtcblx0fSk7XG5cblx0ZnVuY3Rpb24gY2hlY2tQb3NpdGlvbigpIHtcblx0XHRpZiAoJHdyYXAuaGFzQ2xhc3MoJ2FjdGl2ZScpKSByZXR1cm47XG5cblx0XHRpZiAoKCQod2luZG93KS5vdXRlckhlaWdodCgpICsgJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSA+ICgkd3JhcC5vZmZzZXQoKS50b3AgKyAkd3JhcC5vdXRlckhlaWdodCgpICsgMjApKSB7XG5cdFx0XHQkd3JhcC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdGNvdW50ZXIuc3RhcnQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvL2NvdW50ZXJSZXN0YXJ0KClcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNvdW50ZXJSZXN0YXJ0KCkge1xuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb3VudGVyLnJlc2V0KCk7XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0XHRjb3VudGVyLnN0YXJ0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRjb3VudGVyUmVzdGFydCgpXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSwgMjAwKVxuXG5cdFx0fSwgMTAwMCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gaW5pdEZvcm1SZWRpcmVjdCgpIHtcblx0dmFyICRmb3JtID0gJCgnLmYtc2VhcmNoLXJlZGlyZWN0Jyk7XG5cdHZhciAkaW5wdXQgPSAkZm9ybS5maW5kKCcuZm9ybS10ZXh0Jyk7XG5cblx0JGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHZhciB2YWwgPSAkaW5wdXQudmFsKCkudHJpbSgpO1xuXG5cdFx0aWYgKHZhbCkge1xuXHRcdFx0bG9jYXRpb24uaHJlZiA9ICdodHRwOi8vd3d3Lm9rbGVnaXNsYXR1cmUuZ292L0JpbGxJbmZvLmFzcHg/QmlsbD0nICsgdmFsO1xuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XG5cdGZ1bmN0aW9uIG1hdGNoQ3VzdG9tKHBhcmFtcywgZGF0YSkge1xuXHRcdC8vIElmIHRoZXJlIGFyZSBubyBzZWFyY2ggdGVybXMsIHJldHVybiBhbGwgb2YgdGhlIGRhdGFcblx0XHRpZiAoJC50cmltKHBhcmFtcy50ZXJtKSA9PT0gJycpIHtcblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIERvIG5vdCBkaXNwbGF5IHRoZSBpdGVtIGlmIHRoZXJlIGlzIG5vICd0ZXh0JyBwcm9wZXJ0eVxuXHRcdGlmICh0eXBlb2YgZGF0YS50ZXh0ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gYHBhcmFtcy50ZXJtYCBzaG91bGQgYmUgdGhlIHRlcm0gdGhhdCBpcyB1c2VkIGZvciBzZWFyY2hpbmdcblx0XHQvLyBgZGF0YS50ZXh0YCBpcyB0aGUgdGV4dCB0aGF0IGlzIGRpc3BsYXllZCBmb3IgdGhlIGRhdGEgb2JqZWN0XG5cdFx0Ly8gaWYgKGRhdGEudGV4dC5pbmRleE9mKHBhcmFtcy50ZXJtKSA+IC0xKSB7XG5cdFx0Ly8gICB2YXIgbW9kaWZpZWREYXRhID0gJC5leHRlbmQoe30sIGRhdGEsIHRydWUpO1xuXHRcdC8vICAgbW9kaWZpZWREYXRhLnRleHQgKz0gJyAobWF0Y2hlZCknO1xuXHRcdC8vXG5cdFx0Ly8gICAvLyBZb3UgY2FuIHJldHVybiBtb2RpZmllZCBvYmplY3RzIGZyb20gaGVyZVxuXHRcdC8vICAgLy8gVGhpcyBpbmNsdWRlcyBtYXRjaGluZyB0aGUgYGNoaWxkcmVuYCBob3cgeW91IHdhbnQgaW4gbmVzdGVkIGRhdGEgc2V0c1xuXHRcdC8vICAgcmV0dXJuIG1vZGlmaWVkRGF0YTtcblx0XHQvLyB9XG5cblx0XHRpZiAoZGF0YS50ZXh0LnRvVXBwZXJDYXNlKCkuaW5kZXhPZihwYXJhbXMudGVybS50b1VwcGVyQ2FzZSgpKSA9PSAwKSB7XG5cdFx0XHR2YXIgbW9kaWZpZWREYXRhID0gJC5leHRlbmQoe30sIGRhdGEsIHRydWUpO1xuXG5cdFx0XHRyZXR1cm4gbW9kaWZpZWREYXRhO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiBgbnVsbGAgaWYgdGhlIHRlcm0gc2hvdWxkIG5vdCBiZSBkaXNwbGF5ZWRcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdCQoJ3NlbGVjdDpub3QoI2VkaXQtcGVybWFuZW50LXN0YXRlKTpub3QoI2VkaXQtbG9jYWwtc3RhdGUpJykuc2VsZWN0Mih7XG5cdFx0d2lkdGg6ICdmdWxsJyxcblx0XHRtaW5pbXVtUmVzdWx0c0ZvclNlYXJjaDogSW5maW5pdHlcblx0fSk7XG5cblx0JCgnc2VsZWN0I2VkaXQtcGVybWFuZW50LXN0YXRlLCBzZWxlY3QjZWRpdC1sb2NhbC1zdGF0ZScpLnNlbGVjdDIoe1xuXHRcdHdpZHRoOiAnZnVsbCcsXG5cdFx0bWluaW11bVJlc3VsdHNGb3JTZWFyY2g6IDAsXG5cdFx0bWF0Y2hlcjogbWF0Y2hDdXN0b21cblx0fSk7XG5cblx0JCgnc2VsZWN0Jykub24oJ3NlbGVjdDI6b3BlbicsIGZ1bmN0aW9uIChlKSB7XG5cblx0XHQkKCcuc2VsZWN0Mi1yZXN1bHRzIC5zZWxlY3QyLXJlc3VsdHNfX29wdGlvbnMnKS5zY3JvbGxiYXIoe1xuXHRcdFx0ZGlzYWJsZUJvZHlTY3JvbGw6IGZhbHNlLFxuXHRcdFx0ZHVyYXRpb246IDYwMCxcblx0XHRcdHNjcm9sbFN0ZXA6IDE2MFxuXHRcdH0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsQmxvY2soKSB7XG5cblx0JCgnLm1vZGFsX21lZXRpbmdub3RpY2VzIC5mb3JtLWNoZWNrYm94ZXMsIC5tb2RhbF9tZWV0aW5nbm90aWNlcyAuZm9ybS1yYWRpb3MgJykuc2Nyb2xsYmFyKHtcblx0XHRkaXNhYmxlQm9keVNjcm9sbDogZmFsc2UsXG5cdFx0ZHVyYXRpb246IDYwMCxcblx0XHRzY3JvbGxTdGVwOiAxNjBcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gaW5pdEFjY2Vzc2liaWxpdHkoKSB7XG5cdGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2FjY2Vzc2liaWxpdHknKSkge1xuXHRcdCQoJ3NlbGVjdFt0YWJpbmRleD1cIi0xXCJdJykucmVtb3ZlQXR0cigndGFiaW5kZXgnKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGluaXRGb2N1c2VkRWxlbWVudFZpZXdwb3J0U2Nyb2xsKCkge1xuXHRjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cblx0aWYgKCFib2R5RWxlbWVudCB8fCBib2R5RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZvY3VzLXNjcm9sbC1wcm9jZXNzZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGJvZHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZvY3VzLXNjcm9sbC1wcm9jZXNzZWQnKTtcblxuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZnVuY3Rpb24gKGZvY3VzRXZlbnQpIHtcblx0XHRjb25zdCBmb2N1c1RhcmdldCA9IGZvY3VzRXZlbnQudGFyZ2V0O1xuXG5cdFx0aWYgKCEoZm9jdXNUYXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZWFzb246IFNvbWUgZm9jdXMgdGFyZ2V0cyBhcmUgdGlueSBvciBoaWRkZW4gd3JhcHBlcnMsIHNvIHdlIHNraXAgemVyby1zaXplIGVsZW1lbnRzLlxuXHRcdGNvbnN0IHRhcmdldFJlY3QgPSBmb2N1c1RhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRpZiAoIXRhcmdldFJlY3Qud2lkdGggJiYgIXRhcmdldFJlY3QuaGVpZ2h0KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG5cdFx0XHRzY3JvbGxFbGVtZW50SW50b1ZpZXdwb3J0KGZvY3VzVGFyZ2V0KTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEVsZW1lbnRJbnRvVmlld3BvcnQoZWxlbWVudCkge1xuXHRjb25zdCB2aWV3cG9ydE1hcmdpbiA9IDEyO1xuXHRjb25zdCBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNIZWFkZXInKTtcblx0Y29uc3QgaGVhZGVySGVpZ2h0ID0gaGVhZGVyRWxlbWVudCA/IGhlYWRlckVsZW1lbnQub2Zmc2V0SGVpZ2h0IDogMDtcblx0Y29uc3QgYWRtaW5PZmZzZXQgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5wYWRkaW5nVG9wLCAxMCkgfHwgMDtcblx0Y29uc3QgdG9wU2FmZUFyZWEgPSBoZWFkZXJIZWlnaHQgKyBhZG1pbk9mZnNldCArIHZpZXdwb3J0TWFyZ2luO1xuXHRjb25zdCBib3R0b21TYWZlQXJlYSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHZpZXdwb3J0TWFyZ2luO1xuXHRjb25zdCBlbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdGNvbnN0IGVsZW1lbnRIZWlnaHQgPSBlbGVtZW50UmVjdC5oZWlnaHQ7XG5cdGxldCB0YXJnZXRTY3JvbGxZID0gd2luZG93LnNjcm9sbFk7XG5cblx0Ly8gUmVhc29uOiBUYWxsIHRpbGVzIGNhbm5vdCBmdWxseSBmaXQgaW4gdmlld3BvcnQsIHNvIHdlIGFsaWduIHRoZWlyIHRvcCBlZGdlIHVuZGVyIHN0aWNreSBjaHJvbWUuXG5cdGlmICgoZWxlbWVudEhlaWdodCArIHRvcFNhZmVBcmVhICsgdmlld3BvcnRNYXJnaW4pID4gd2luZG93LmlubmVySGVpZ2h0KSB7XG5cdFx0dGFyZ2V0U2Nyb2xsWSArPSBlbGVtZW50UmVjdC50b3AgLSB0b3BTYWZlQXJlYTtcblx0fSBlbHNlIGlmIChlbGVtZW50UmVjdC50b3AgPCB0b3BTYWZlQXJlYSkge1xuXHRcdHRhcmdldFNjcm9sbFkgKz0gZWxlbWVudFJlY3QudG9wIC0gdG9wU2FmZUFyZWE7XG5cdH0gZWxzZSBpZiAoZWxlbWVudFJlY3QuYm90dG9tID4gYm90dG9tU2FmZUFyZWEpIHtcblx0XHR0YXJnZXRTY3JvbGxZICs9IGVsZW1lbnRSZWN0LmJvdHRvbSAtIGJvdHRvbVNhZmVBcmVhO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG1heFNjcm9sbFkgPSBNYXRoLm1heCgwLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KTtcblx0Y29uc3QgY2xhbXBlZFNjcm9sbFkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbih0YXJnZXRTY3JvbGxZLCBtYXhTY3JvbGxZKSk7XG5cblx0d2luZG93LnNjcm9sbFRvKHtcblx0XHR0b3A6IGNsYW1wZWRTY3JvbGxZLFxuXHRcdGJlaGF2aW9yOiAnc21vb3RoJ1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaW5pdEhlYWRlckhvdmVyKCkge1xuXHR2YXIgJHdyYXBwZXIgPSAkKCcuc0hlYWRlcl9fbWVudS13cmFwJyk7XG5cdHZhciAkbGlzdERlc2t0b3BXcmFwID0gJHdyYXBwZXIuZmluZCgnID4gdWwubWVudScpO1xuXHR2YXIgJGxpc3REZXNrdG9wV3JhcExpID0gJGxpc3REZXNrdG9wV3JhcC5maW5kKCdsaScpO1xuXHR2YXIgJGxpc3REZXNrdG9wV3JhcEEgPSAkbGlzdERlc2t0b3BXcmFwLmZpbmQoJ2EnKTtcblxuXHRpZiAoJHdyYXBwZXIuaGFzQ2xhc3MoJ3NIZWFkZXJfX21lbnUtcHJvY2Vzc2VkJykpIHJldHVybjtcblx0JHdyYXBwZXIuYWRkQ2xhc3MoJ3NIZWFkZXJfX21lbnUtcHJvY2Vzc2VkJyk7XG5cblx0aWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ2FjY2Vzc2liaWxpdHknKSkgcmV0dXJuO1xuXG5cdCRsaXN0RGVza3RvcFdyYXBMaS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRyZW1vdmVCbHVyKCk7XG5cdFx0Z2V0TWVudVdyYXAodGhpcyk7XG5cdH0pO1xuXG5cdCRsaXN0RGVza3RvcFdyYXBMaS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcblx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuXHR9KTtcblxuXHQkbGlzdERlc2t0b3BXcmFwQS5vbignZm9jdXMnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Z2V0TWVudVdyYXAodGhpcy5wYXJlbnROb2RlKTtcblx0XHQkKHRoaXMucGFyZW50Tm9kZSkuc2libGluZ3MoJ2xpJykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG5cdH0pO1xuXG5cdCRsaXN0RGVza3RvcFdyYXBBLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0aGlzID09PSAkbGlzdERlc2t0b3BXcmFwQVskbGlzdERlc2t0b3BXcmFwQS5sZW5ndGggLSAxXSkge1xuXHRcdFx0JGxpc3REZXNrdG9wV3JhcExpLnJlbW92ZUNsYXNzKCdob3ZlcicpO1xuXHRcdH1cblx0fSk7XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQmx1cigpIHtcblx0XHQkbGlzdERlc2t0b3BXcmFwTGkucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG5cdFx0JGxpc3REZXNrdG9wV3JhcEEuYmx1cigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TWVudVdyYXAoZWxtKSB7XG5cblx0XHRpZiAoZWxtLmNsYXNzTGlzdC5jb250YWlucygnc0hlYWRlcl9fbWVudS13cmFwJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbG0uY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcblxuXHRcdGdldE1lbnVXcmFwKGVsbS5wYXJlbnROb2RlKTtcblx0fVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJcbmltcG9ydCBcIi4vY29tbW9uL3NzLXNvY2lhbC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvbW1vbi9zcy1nbHlwaGlzaC1maWxsZWQuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb21tb24vc3MtZ2x5cGhpc2gtb3V0bGluZWQuc2Nzc1wiO1xuXG5pbXBvcnQgJy4vY29tbW9uL2ZvbnRzLnNjc3MnO1xuaW1wb3J0ICcuL2NvbW1vbi9ub3JtYWxpemUuc2Nzcyc7XG5pbXBvcnQgJy4vY29tbW9uL2dsb2JhbC5zY3NzJztcbmltcG9ydCAnLi9jb21tb24vZ3JpZC5zY3NzJztcbmltcG9ydCAnLi9jb21tb24vaGVscGVycy5zY3NzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VsZWN0Mi9zZWxlY3QyLnNjc3MnXG5pbXBvcnQgJy4vbW9kdWxlcy9ib290c3RyYXAtbW9kYWwuc2NzcydcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlRpdGxlL2JUaXRsZS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZm9ybS9mb3JtLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iV3JhcC9iV3JhcC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZm9ybS9mLXNlYXJjaC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYnRuL2J0bi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VjdGlvbi9zZWN0aW9uLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wTWFpbi9wTWFpbi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcGFnZVdyL3BhZ2VXci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkNvbnRhaW5lci9iQ29udGFpbmVyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zSGVhZGVyL3NIZWFkZXIuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NGb290ZXIvc0Zvb3Rlci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbG9nby9sb2dvLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZMaW5rcy9uYXZMaW5rcy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc0hlcm8vc0hlcm8uc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NGaW5kZXIvc0ZpbmRlci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlRpbGVzL2JUaWxlcy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkV2ZW50L2JFdmVudC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc0xlYWQvc0xlYWQuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JDb2xzL2JDb2xzLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZW5hdG9ycy9zZW5hdG9ycy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYk1lc3NhZ2UvYk1lc3NhZ2Uuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NTZW4vc1Nlbi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcGFnZUluL3BhZ2VJbi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlNlbkJpby9iU2VuQmlvLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iU29jL2JTb2Muc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JOZXdzL2JOZXdzLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iQWJvdXQvYkFib3V0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTWVkaWEvYk1lZGlhLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iSGlkZS9iSGlkZS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYk1lbWJlcnNoaXAvYk1lbWJlcnNoaXAuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JEaXN0cmljdC9iRGlzdHJpY3Quc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTZWxlY3QvYlNlbGVjdC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbGluay9saW5rLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2Zvcm0vZlNpZ25VcC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkxpc3RJdGVtcy9iTGlzdEl0ZW1zLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iU2NoZWR1bGUvYlNjaGVkdWxlLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTGlzdExpbmtzL2JMaXN0TGlua3Muc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JEYXRlTGlzdC9iRGF0ZUxpc3Quc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JUYi9iVGIuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JEcm9wL2JEcm9wLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iUG9zdC9iUG9zdC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlNvcnQvYlNvcnQuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTaWRlYmFyL2JTaWRlYmFyLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iUG9zdExpc3QvYlBvc3RMaXN0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9wYWdlci9wYWdlci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkNvbHVtbnMvYkNvbHVtbnMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JPdmVydmlldy9iT3ZlcnZpZXcuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JUYWJsZS9iVGFibGUuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3NTbGlkZXIvc1NsaWRlci5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyLXR5cGUtYS9zbGlkZXItdHlwZS1hLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTGlzdC9iTGlzdC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZm9ybS9zZWFyY2gtZm9ybS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTZWF0cy9iU2VhdHMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JIaXN0L2JIaXN0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zSGlzdC9zSGlzdC5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlRlcm1zL2JUZXJtcy5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYkF1ZGlvL2JBdWRpby5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlN0YWZmL2JTdGFmZi5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvczQwNC9zNDA0LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iTGlnaHRTbGlkZXIvbGlnaHRTbGlkZXIuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JJc1BhcGVycy9iSXNQYXBlcnMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JTaGFyZS9iU2hhcmUuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JMaXN0SW5saW5lL2JMaXN0SW5saW5lLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iRXZlbnRzL2JFdmVudHMuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL21vZGFsL21vZGFsLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9nb3ZkZWxpdmVyeU92ZXJsYXkvZ292ZGVsaXZlcnlPdmVybGF5LnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9iU3ViTmF2L2JTdWJOYXYuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2JWaWRlb0dhbGxlcnkvYlZpZGVvR2FsbGVyeS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYlBhZ2VOYXYvYlBhZ2VOYXYuc2NzcydcblxuaW1wb3J0ICcuL2NvbW1vbi9kcnVwYWwtc3R5bGVzLnNjc3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hY2Nlc3NpYmlsaXR5L2FjY2Vzc2liaWxpdHkuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL3ByaW50L3ByaW50LnNjc3MnXG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9iLXRpbWVsaW5lL2ItdGltZWxpbmUuc2Nzcydcbi8vaW1wb3J0ICcuL2NvbXBvbmVudHMvYi1mYXEvYi1mYXEuc2Nzcydcbi8vaW1wb3J0ICcuL2NvbXBvbmVudHMvYi1ub3RlL2Itbm90ZS5zY3NzJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYi1hZ2VuZGEvYi1hZ2VuZGEuc2NzcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2ItZGlzdHJpY3QtbWFwcy9iLWRpc3RyaWN0LW1hcHMuc2NzcydcbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQzVEQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xDQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDbkRBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7Ozs7Ozs7Ozs7O0FDdkRBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7QUM5Q0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7QUNsS0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQzlCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDN0RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7QUNqRkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQzFDQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQ2xEQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7Ozs7Ozs7Ozs7O0FDblBBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7OztBQ2hGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQy9iQTs7Ozs7Ozs7Ozs7O0FDQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9