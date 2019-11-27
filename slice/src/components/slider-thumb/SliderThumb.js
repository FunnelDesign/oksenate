import {checkInit} from "../helper";
const $ = jQuery;

window.SliderThumb = class {
	constructor(props = {}) {
		this.name = props.name || `slider-thumb`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		let $slider = $elm.find(`.${this.name}__slider`);
		let $thumb = $elm.find(`.${this.name}__thumb`);

		if (!$slider.length || !$thumb.length) return;

		$slider.flexslider({
			animation: "slide",
			controlNav: false,
			animationLoop: false,
			slideshow: false,
			directionNav: false,
			sync: $thumb
		});

		$thumb.flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: false,
			animationLoop: false,
			slideshow: false,
			itemWidth: 127,
			itemMargin: 6,
			asNavFor: $slider
		});
	}
};

export default SliderThumb;



