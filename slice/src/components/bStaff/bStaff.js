import {checkInit} from "../helper";

const $ = jQuery;

window.bStaff = class {
	constructor(props = {}) {
		this.name = props.name || `bStaff`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {
		let prefix = 'letter-';
		let compName = `${this.name}`;

		let $letters = $elm.find(`.${this.name}__filLetters a`);
		let $items = $elm.find(`.${this.name}__it`);

		$letters.each((i, item) => {
			let letter = $(item).attr('href').replace('#' + prefix, '');
			let $target = $items.filter((i, term) => {
				return $(term).attr('data-letter') === letter
			});

			if (!$target.length) {
				$(item)
					.addClass(`${this.name}__let_disabled`)
					.attr({
						'aria-disabled': 'true',
						'tabindex': '-1'
					});
			}
		});

		$elm.on('click touch', `.${this.name}__filLetters a`, (e) => {
			e.preventDefault();

			let $curLetter = $(e.target);
			let letter = $curLetter.attr('href').replace('#' + prefix, '');

			showItems(letter, $curLetter);
		});

		function showItems(letter, $curLetter) {

			let $target = $items.filter((i, term) => {
				return $(term).attr('data-letter') === letter
			});

			$letters.removeClass(`${compName}__let_active`);
			$items.removeClass(`${compName}__it_active`);
			$items.removeClass(`bTb__tr_last`);
			$items.removeClass(`bTb__tr_first`);

			$elm.addClass(`${compName}_filter`);
			$target.addClass(`${compName}__it_active`);
			$($target[0]).addClass(`bTb__tr_first`);
			$($target[$target.length - 1]).addClass(`bTb__tr_last`);
			$curLetter.addClass(`${compName}__let_active`);
		}
	}
};

export default bStaff;


