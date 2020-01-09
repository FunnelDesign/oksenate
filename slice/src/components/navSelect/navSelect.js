import {checkInit} from "../helper";
const $ = jQuery;

window.navSelect = class {
	constructor(props = {}) {
		this.name = props.name || `navSelect`;
		this.selector = props.selector || `.${this.name}`;
		this.prefix = props.prefix || `year-`;
		this.prefixContent = props.prefixContent || `overview-`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		let $select = $elm.find(`select`);

		if(!$select.length) return;

		let $body = $('body, html');
		let prefix = `${this.prefix}`;
		let prefixContent = `${this.prefixContent}`;
		let speed = 600;

		if(window.location.hash && ~window.location.hash.indexOf('#' + prefix)) {
			animation(window.location.hash.replace('#' + prefix, ''));
		}

		$select.on('change', function () {
			animation($(this).val());
		});

		function animation(val) {
			let $target = $('#' + prefixContent + val);

			if(!$target.length) return;

			window.location.hash = prefix + val;

			let adminMenu = parseInt($(`body`).css('padding-top'));

			let headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;

			$body.animate({scrollTop: $target.offset().top - 10 - headerHeight - adminMenu}, speed);
		}
	}
};

export default navSelect;



