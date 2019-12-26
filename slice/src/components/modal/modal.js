import {checkInit} from "../helper";

const $ = jQuery;

window.Modal = class {
	constructor(props = {}) {
		this.name = props.name || `modal`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		this.checkHash();

		$(window).on('hashchange', () => {
			this.checkHash();
		});

		$.support.transition = false;

		$($elm).on('hide.bs.modal', () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			window.location.hash = '';

			$('html, body').scrollTop(scrollTop);
		});
	}

	checkHash() {
		const $el = $(window.location.hash);

		if($el.length && $el.hasClass('modal')) {
			$el.modal('show');
		}
	}
};

export default Modal;



