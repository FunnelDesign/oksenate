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

		let $select = $(`.${this.name} select`);

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

			//let adminMenuHeight = $('.adminimal-admin-toolbar').length ? $('.adminimal-admin-toolbar').css('padding-top') : 0;

			let headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;

			$body.animate({scrollTop: $target.offset().top - 10 - headerHeight}, speed);
		}
	}
};

export default navSelect;



