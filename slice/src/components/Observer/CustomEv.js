const $ = jQuery;

class CustomEv {

	constructor() {
		this.addAccessibilityCookie();
		this.customClick();
	}

	customClick() {

		addListenerForSenatorFilter();

		$(document).ajaxStart(function(event, xhr, settings) {
			// console.log('ajaxStart event: ', event);
			// console.log('ajaxStart xhr: ', xhr);
			// console.log('ajaxStart settings: ', settings);
		});

		$(document).ajaxComplete(function(event, xhr, settings) {
			console.log('ajaxComplete event: ', event);
			console.log('ajaxComplete xhr: ', xhr);
			console.log('ajaxComplete settings: ', settings);

			if (~settings.data?.indexOf('view_name=senators') ) {
				addListenerForSenatorFilter();
			}
		});

		$(document).on('click touch', (e) => {
			let $ev =  $(e.target);

			if (!$ev.closest('.bDrop').length) {
				$('.bDrop').removeClass('select2-container--open')
			}
		});

		function addListenerForSenatorFilter() {

			$('#views-exposed-form-senators-page-1 .form-submit').on('click touch', ()=> {
				console.log('filter submit');

				$('.sSen .sSen__res').addClass('sSen__res_loading');
			});
		}
	}

	addAccessibilityCookie() {
		let $accessibility = $('#accessibility');

		if (!$accessibility.length) return;
		let cookeName = 'accessibility_message_was_shown';

		if ($.cookie(cookeName)) {
			$accessibility.hide();
		} else {
			$accessibility.on('ev.hide', () => {

				$.cookie('accessibility_message_was_shown', "1", {
					expires: 86400,
					path: '/'
				});
			});
		}
	}
}

export default CustomEv;