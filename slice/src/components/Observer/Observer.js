window.Observer = class {
	constructor() {
		this.init();
	}

	init() {
		$(document).on('click touch', (e) => {
			let event = e.target.dataset.ev;
			if (!event) return;

			let sel = e.target.dataset.sel;
			if (!sel || !this[event]) return;

			e.preventDefault();
			this[event]($(e.target), sel);
		});
	}

	hide($target, sel) {
		$target.closest(`.${sel}`).hide();
	}

	toggleClass($target, sel) {
		$target.closest(`.${sel}`).toggleClass(`${sel}_active`);
	}

	toggle($target, sel) {
		$(`.${sel}`).toggle();
	}
};

export default Observer;