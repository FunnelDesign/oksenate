import {checkInit} from "../helper";

const $ = jQuery;

window.lightSlider = class {
	constructor(props = {}) {
		this.name = props.name || `bLightSlider`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		let $slider = $elm.find(`.${this.name}__slides`);

		if (!$slider.length) return;

		$slider.lightSlider({
			gallery: true,
			item: 1,
			adaptiveHeight: true,
			vThumbWidth: 118,
			thumbItem: 5,
			thumbMargin: 4,
			slideMargin: 0,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						thumbItem: 4
					}
				},
				{
					breakpoint: 450,
					settings: {
						thumbItem: 3
					}
				}
			]
		});
	}
};

export default lightSlider;



