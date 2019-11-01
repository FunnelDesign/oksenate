import {checkInit} from "../helper";

window.SHeader = class {
	constructor(props = {}) {
		this.name = props.name || `s-header`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		$elm.on('click touch', `.${this.name}__btn-mobile`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_mobile-active`);
		});
	}
};

export default SHeader;



