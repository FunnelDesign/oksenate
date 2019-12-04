import {checkInit} from "../helper";
const $ = jQuery;

window.sHeader = class {
	constructor(props = {}) {
		this.name = props.name || `sHeader`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {

		$elm.on('click touch', `.${this.name}__btn-mobile`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_mobileMenu`);
			$('body').toggleClass(`mobileMenu-open`);

			$elm.removeClass(`${this.name}_searchOpen`);
		});

		$elm.on('click touch', `.${this.name}__searchBtn`, (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_searchOpen`);

			$elm.removeClass(`${this.name}_mobileMenu`);
			$('body').removeClass(`mobileMenu-open`);

			$elm.find('.f-search input.form-search').focus();

		});
	}
};

export default sHeader;



