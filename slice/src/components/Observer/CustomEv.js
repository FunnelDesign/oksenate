const $ = jQuery;

class CustomEv {

	constructor() {
		this.addAccessibilityCookie();
		this.customClick();
	}

	customClick() {

		$('#views-exposed-form-senators-page-1 .form-submit').on('click touch', ()=> {
			console.log('filter submit');

			$('.sSen .sSen__res').addClass('sSen__res_loading');
		});

		$(document).on('submit',function(){
			console.log('submit-ev submit');
		});

		$(document).ajaxStart(function(event, xhr, settings) {
			console.log('ajaxStart event: ', event);
			console.log('ajaxStart xhr: ', xhr);
			console.log('ajaxStart settings: ', settings);
		});

		$(document).ajaxComplete(function(event, xhr, settings) {
			console.log('ajaxComplete event: ', event);
			console.log('ajaxComplete xhr: ', xhr);
			console.log('ajaxComplete settings: ', settings);
		});

		$(document).on('click touch', (e) => {
			let $ev =  $(e.target);

			if (!$ev.closest('.bDrop').length) {
				$('.bDrop').removeClass('select2-container--open')
			}
		});
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