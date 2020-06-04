import './styles'

import bEvent from './components/bEvent/bEvent'
import Observer from "./components/Observer/Observer";
import BlockVideo from "./components/bMedia/video";
import bSort from "./components/bSort/bSort";
import navSelect from "./components/navSelect/navSelect";
import SliderTypeA from "./components/slider-type-a/SliderTypeA";
import sHeader from "./components/sHeader/sHeader";
import bTerms from "./components/bTerms/bTerms";
import bStaff from "./components/bStaff/bStaff";
import lightSlider from "./components/bLightSlider/lightSlider";
import Modal from "./components/modal/modal";
import bEvents from "./components/bEvents/bEvents";

const $ = jQuery;

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});

if (window.Drupal?.behaviors) {
	Drupal.behaviors.projectName = {
		attach: (context, settings) => {
			init();
		},
		completedCallback: () => { /*Do nothing. But it's here in case other modules/themes want to override it.*/
		}
	}
} else {
	document.addEventListener('DOMContentLoaded', () => {
		init();
	});
}

document.addEventListener('DOMContentLoaded', () => {
	new Observer();
	new navSelect();
	new navSelect({
		name: 'navSelectIssuePapers',
		prefix: 'category-',
		prefixContent: 'id-',
	});
	new sHeader();
	addPadding();
	hashScroll();
});

$(window).on('load', function () {
	addPadding();
});

function init() {
	new Modal();
	new bEvent();
	new bSort();
	new SliderTypeA();
	new bTerms();
	new bStaff();
	new lightSlider();
	new bEvents();
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

	new BlockVideo();

	$(document).ajaxComplete(function (event, xhr, settings) {

		if (settings.url === '/views/ajax?_wrapper_format=drupal_ajax') {
			let dataArr = settings.data.split('&');

			if (~$.inArray(`committee=All`, dataArr)) return

			let sSenRes = $(`.sSen__res`)

			if(!sSenRes.length) return;

			sSenRes.addClass('sSen__res_committee');
		}
	});
}

function addPadding() {

	let $header = $(`.sHeader`);
	if (!$header.length) return;

	let $pageWr = $(`.pageWr`);
	if (!$pageWr.length) return;
	$pageWr.css(`padding-top`, $header.outerHeight());
}

function hashScroll() {
	let $body = $('body, html');
	let $bodyOnly = $('body');

	if ($bodyOnly.hasClass('hashScroll_processed')) return;
	$bodyOnly.addClass('hashScroll_processed');

	let prefix = `l-`;
	//let prefixContent = `${this.prefixContent}`;
	let speed = 600;

	if (window.location.hash && ~window.location.hash.indexOf('#' + prefix)) {
		animation(window.location.hash.replace('#' + prefix, ''));
	}

	$(window).on('hashchange', function () {

		if (window.location.hash && ~window.location.hash.indexOf('#' + prefix)) {
			animation(window.location.hash.replace('#' + prefix, ''));
		}
	});

	function animation(val) {
		let $target = $('#' + val);

		if (!$target.length) return;

		window.location.hash = prefix + val;

		let adminMenu = parseInt($(`body`).css('padding-top'));

		let headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;

		$body.animate({scrollTop: $target.offset().top - 10 - headerHeight - adminMenu}, speed);
	}
}

function changeAutocomplete() {
	let $zip = $(`.sSen .form-item-zip .form-autocomplete`);

	if (!$zip.length) return;

	$zip.attr('autocomplete', 'new-password');

}

function changePlaceholderTime() {
	let $inputStart = $(`.form-item-date-time input`);
	let $inputEnd = $(`.form-item-end-time-time input`);

	if (!$inputStart.length) return;
	if (!$inputEnd.length) return;

	$inputStart.attr('placeholder', 'Start Time');
	$inputEnd.attr('placeholder', 'End Time');

	focusInit([$inputEnd, $inputStart]);

	function focusInit(inputs) {
		inputs.forEach((input)=> {
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

		if (($(window).outerHeight() + $(window).scrollTop()) > ($wrap.offset().top + $wrap.outerHeight() + 20)) {
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
					counterRestart()
				});
			}, 200)

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

