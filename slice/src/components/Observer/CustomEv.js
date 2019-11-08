class CustomEv {

	constructor() {
		this.addAccessibilityCookie();
		this.menuMobileOpen();
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