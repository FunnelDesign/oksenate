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
				let [ev, sel, clName] = evItem.split(':');

				events.items[i] = {
					ev,
					sel,
					clName
				}
			});

			events.items.forEach(({ev, sel, clName}) => {
				if (!sel || !this[ev]) return;

				e.preventDefault();
				this[ev]($(e.target), sel, clName);
			});

		});
	}

	hide($target, sel) {
		$target.closest(`.${sel}`).hide();
	}

	toggleClass($target, sel, clName) {
		$target.closest(`.${sel}`).toggleClass(`${sel}_${clName}`);
	}

	removeClass($target, sel, clName) {
		$target.closest(`.${sel}`).removeClass(`${sel}_${clName}`);
	}

	toggle($target, sel) {
		$(`.${sel}`).toggle();
	}
};

export default Observer;