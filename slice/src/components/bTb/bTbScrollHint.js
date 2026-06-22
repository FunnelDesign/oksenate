import {checkInit} from "../helper";

class bTbScrollHint {
	constructor() {
		this.name = 'bTbScrollHint';

		checkInit(`.${this.name}`, this.name, (item) => {
			this.init(item);
		});
	}

	init(hint) {
		const scroller = hint.querySelector('.bTbScroll');

		if (!scroller) return;

		let frame;
		const update = () => {
			frame = null;
			const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
			const scrollPosition = Math.max(0, scroller.scrollLeft);
			const tolerance = 2;

			hint.classList.toggle(`${this.name}_overflow-left`, scrollPosition > tolerance);
			hint.classList.toggle(`${this.name}_overflow-right`, scrollPosition < maxScroll - tolerance);
		};

		const queueUpdate = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};

		scroller.addEventListener('scroll', queueUpdate, {passive: true});

		if (window.ResizeObserver) {
			new ResizeObserver(queueUpdate).observe(scroller);
		} else {
			window.addEventListener('resize', queueUpdate);
		}

		update();
	}
}

export default bTbScrollHint;
