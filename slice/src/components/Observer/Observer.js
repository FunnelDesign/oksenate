window.Observer = class {
	constructor(props) {
		this.attrCloseParent = 'data-close-parent';
		this.init();
	}

	init() {
		$(document).on('click', (e) => {
			const $target = $(e.target);
			const attr = $target.attr(this.attrCloseParent);

			if(attr) {
				e.preventDefault();
				$target.closest(attr).hide();
			}
		});
	}
};

export default Observer;