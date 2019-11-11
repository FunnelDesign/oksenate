import {checkInit} from "../helper";
const $ = jQuery;

window.bEvent = class {
	constructor(props = {}) {
		this.name = props.name || `bEvent`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		let $slider = $elm.find(`.${this.name}__slider-items`);
		let $slider__slide_nav = $elm.find(`.${this.name}__slider-nav`);

		$slider.slick({
			pauseOnHover: false,
			pauseOnFocus: false,
			accessibility: true,
			dots: true,
			appendDots: $slider__slide_nav,
			arrows: true,
			infinite: true,
			speed: 400,
			autoplay: true,
			autoplaySpeed: 15000,
			swipe: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			cssEase: "ease",
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false,
					swipe: true,
					autoplay: false,
					infinite: false,
					slidesToShow: 1
				}
			}]
		});
	}
};

export default bEvent;



