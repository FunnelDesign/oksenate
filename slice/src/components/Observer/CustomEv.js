const $ = jQuery;

class CustomEv {

	constructor() {
		this.addAccessibilityCookie();
		this.menuMobileOpen();
		this.customClick();
	}

	customClick() {

		$(document).on('click touch', (e) => {
			let $ev =  $(e.target);

			if ($ev.hasClass('form-submit') && $ev.closest('.sSen__fil').length) {

				$('.sSen__res').addClass('sSen__res_loading')
			}

			if (!$ev.closest('.bDrop').length) {
				$('.bDrop').removeClass('select2-container--open')
			}
		});
	}

	menuMobileOpen() {
		let clName = 'mobileMenu';
		let $elm = $(`.sHeader`);

		$elm.on(`ev.toggleClass.${clName}`, (e) => {
			$('body').toggleClass(`${clName}-open`);
		});

		$elm.on(`ev.removeClass.${clName}`, (e) => {
			$('body').removeClass(`${clName}-open`);
		});

		// var ro = new ResizeObserver( entries => {
		// 	for (let entry of entries) {
		// 		const cr = entry.contentRect;
		// 		console.log('Element:', entry.target);
		// 		console.log(`Element size: ${cr.width}px x ${cr.height}px`);
		// 		console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
		//
		// 		if ($elm.hasClass(`sHeader_fixed`)) {
		// 			$('.pageWr').css('padding-top', `${cr.height}px`)
		// 		}
		// 	}
		// });

// Observe one or multiple elements
/*		ro.observe($elm[0]);*/
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