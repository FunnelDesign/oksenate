import {checkInit} from "../helper";
const $ = jQuery;

window.FancyBox = class {
	constructor(props = {}) {
		this.name = props.name || `fancybox`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		let $items = $elm.find(`.${this.name}__item`);
		$items.fancybox({
			hash: false
		});
	}
};

export default FancyBox;



