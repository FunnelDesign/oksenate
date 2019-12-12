import {checkInit} from "../helper";
const $ = jQuery;

window.bTerms = class {
	constructor(props = {}) {
		this.name = props.name || `bTerms`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {
		let prefix = 'letter-';
		let prefixContent = 'item-';
		let compName =  `${this.name}`;

		let $letters = $elm.find(`.${this.name}__filLetters a`);
		let $items = $elm.find(`.${this.name}__it`);


		$letters.each((i, item)=> {
			let letter = $(item).attr('href').replace('#' + prefix, '');
			let $target = $('#' + prefixContent + letter);

			if (!$target.length) {
				$(item).addClass(`${this.name}__let_disabled`)
			}
		});

		$elm.on('click touch', `.${this.name}__filLetters a`, (e) => {
			e.preventDefault();

			let $curLetter = $(e.target);

			let letter = $curLetter.attr('href').replace('#' + prefix, '');
			let $target = $('#' + prefixContent + letter);

			if (!$target.length) return;

			$letters.removeClass(`${this.name}__let_active`);
			$items.removeClass(`${this.name}__it_active`);

			showItems($target.index());

			$curLetter.addClass(`${this.name}__let_active`);

		});

		showItems(0);

		function showItems(index) {
			$items.slice(index, index + 10).addClass(`${compName}__it_active`);
		}
	}
};

export default bTerms;



