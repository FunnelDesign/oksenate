import {checkInit} from "../helper";
const $ = jQuery;

window.SliderTypeA = class {
	constructor(props = {}) {
		this.name = props.name || `slider-type-a`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		let $currentWrap = $elm;

		let $slider_bg = $currentWrap.find('.' + this.name + '__bg-items');
		let $slider_desc = $currentWrap.find('.' + this.name + '__desc');
		let $slider__slide_nav = $currentWrap.find('.' + this.name + '__nav');

		if ($currentWrap.find('.' + this.name + '__desc-item').length > 1) {
			$currentWrap.addClass(this.name + '_slides');
		}

		$slider_bg.slick({
			pauseOnHover: false,
			pauseOnFocus: false,
			accessibility: true,
			dots: false,
			arrows: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 15000,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipe: false,
			asNavFor: $slider_desc,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						swipe: true,
						autoplay: false,
						infinite: false
					}
				}
			]
		});

		$slider_desc.slick({
			pauseOnHover: false,
			pauseOnFocus: false,
			accessibility: false,
			dots: true,
			appendDots: $slider__slide_nav,
			arrows: false,
			infinite: true,
			speed: 700,
			autoplay: true,
			autoplaySpeed: 15000,
			fade: true,
			swipe: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: "ease",
			asNavFor: $slider_bg,
			responsive: [{
				breakpoint: 768,
				settings: {
					swipe: true,
					autoplay: false,
					infinite: false,
				}
			}]
		});
	}
};

export default SliderTypeA;
