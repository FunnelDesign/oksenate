window.Observer = class {
	constructor() {
		this.init();
	}

	init() {
		$(document).on('click touch', (e) => {
			let event = e.target.dataset.ev;
			if (!event) return;

			let events = {
				evs: e.target.dataset.ev.split(';'),
				items: []
			};

			events.evs.forEach((evItem, i) => {
				let [ev, sel] = evItem.split(':');

				events.items[i] = {
					ev,
					sel
				}
			});

			events.items.forEach(({ev, sel}) => {
				if (!sel || !this[ev]) return;

				e.preventDefault();
				this[ev]($(e.target), sel);
			});

		});
	}

	hide($target, sel) {
		$target.closest(`.${sel}`).hide();
	}

	toggleClass($target, sel) {
		$target.closest(`.${sel}`).toggleClass(`${sel}_active`);
	}

	removeClass($target, sel) {
		$target.closest(`.${sel}`).removeClass(`${sel}_active`);
	}

	removeSiblingClass($target, sel) {
		$target.siblings(`.${sel}`).removeClass(`${sel}_active`);
	}

	toggle($target, sel) {
		$(`.${sel}`).toggle();
	}
};

export default Observer;