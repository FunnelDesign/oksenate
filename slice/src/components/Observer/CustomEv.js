const $ = jQuery;

class CustomEv {

	constructor() {
		this.customClick();
	}

	customClick() {

		addListenerForSenatorFilter();

		$(document).ajaxComplete(function (event, xhr, settings) {
			if (~settings.data?.indexOf('view_name=senators')) {
				addListenerForSenatorFilter();
			}
		});

		$(document).on('click touch', (e) => {
			let $ev = $(e.target);

			if (!$ev.closest('.bDrop').length) {
				$('.bDrop').removeClass('select2-container--open')
			}

			if ($ev.closest('.hashLink').length || $ev.hasClass(`hashLink`)) {
				let $body = $('body, html');
				let prefix = `l-`;
				let speed = 600;

				let val = $ev.closest('.hashLink').attr('href').replace('#' + prefix, '');

				let $target = $('#' + val);

				if (!$target.length) return;

				window.location.hash = prefix + val;

				let adminMenu = parseInt($(`body`).css('padding-top'));

				let headerHeight = $('.sHeader').length ? $('.sHeader').outerHeight() : 0;

				$body.animate({scrollTop: $target.offset().top - 10 - headerHeight - adminMenu}, speed);

			}
		});

		function addListenerForSenatorFilter() {

			$('#views-exposed-form-senators-page-1 .form-submit').on('click touch', () => {
				$('.sSen .sSen__res').addClass('sSen__res_loading');
			});
		}
	}
}

export default CustomEv;