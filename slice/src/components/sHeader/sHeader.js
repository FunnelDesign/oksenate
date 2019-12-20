import {checkInit} from "../helper";

const $ = jQuery;

window.sHeader = class {
	constructor(props = {}) {
		this.name = props.name || `sHeader`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		$elm.on('click touch', `.${this.name}__btn-mobile`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_mobileMenu`);
			$('body').toggleClass(`mobileMenu-open`);

			$elm.removeClass(`${this.name}_searchOpen`);
		});

		$elm.on('click touch', `.${this.name}__searchBtn`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_searchOpen`);

			$elm.removeClass(`${this.name}_mobileMenu`);
			$('body').removeClass(`mobileMenu-open`);

			$elm.find('.f-search input.form-search').focus();

		});

		addPadding();
		addAccessibilityCookie();

		$(window).on('resize', () => {
			addPadding();
		});

		$elm.on('click touch', `.bMessage__close`, () => {
			addPadding();
		});

		$(document).on('drupalViewportOffsetChange.toolbar', function (event, offsets) {
			$elm.css('top', offsets.top);
		});

		function addAccessibilityCookie() {
			let $accessibility = $('#accessibility');

			if (!$accessibility.length) return;
			let cookeName = 'accessibility_message_was_shown';

			if ($.cookie(cookeName)) {
				$accessibility.hide();
				addPadding();
			} else {
				$accessibility.on('ev.hide', () => {

					$.cookie('accessibility_message_was_shown', "1", {
						expires: 86400,
						path: '/'
					});

					addPadding();
				});
			}
		}

		function addPadding() {
			let $pageWr = $(`.pageWr`);
			if (!$pageWr.length) return;
			$pageWr.css(`padding-top`, $elm.outerHeight());
		}
	}
};

export default sHeader;



