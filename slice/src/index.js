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

const $ = jQuery;

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});

if (window.Drupal?.behaviors) {
	Drupal.behaviors.projectName = {
		attach: (context, settings) => {
			init();
		},
		completedCallback: () => { /*Do nothing. But it's here in case other modules/themes want to override it.*/}
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
});

function init() {
	new Modal();
	new bEvent();
	new bSort();
	new SliderTypeA();
	new sHeader();
	new bTerms();
	new bStaff();
	new lightSlider();
	initFormRedirect();
	initSelect();
	initAccessibility();
	initHeaderHover();

	new BlockVideo();
}

function initFormRedirect() {
	var $form = $('.f-search-redirect');
	var $input = $form.find('.form-text');

	$form.on('submit', function(e) {
		e.preventDefault();
		var val = $input.val().trim();

		if(val) {
			location.href = 'http://www.oklegislature.gov/BillInfo.aspx?Bill=' + val;
		}
	});
}

function initSelect() {
	$('select').select2({
		width: 'full',
		minimumResultsForSearch: Infinity
	});

	$('select').on('select2:open', function(e){

		$('.select2-results .select2-results__options').scrollbar({
			disableBodyScroll: false,
			duration: 600,
			scrollStep: 160
		});
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

