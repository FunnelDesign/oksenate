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
		let compName = `${this.name}`;

		let $letters = $elm.find(`.${this.name}__filLetters a`);
		let $items = $elm.find(`.${this.name}__it`);

		let $more = $elm.find(`.${this.name}__more`);


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

		$more.on('click touch', (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_open`)
		});

		showItems('a', $elm.find(`.${this.name}__filLetters a[href="#letter-a"]`));

		function showItems(letter, $curLetter) {

			let $target = $items.filter((i, term) => {
				return $(term).attr('data-letter') === letter
			});

			$letters.removeClass(`${compName}__let_active`);
			$items.removeClass(`${compName}__it_active`);
			$items.removeClass(`${compName}__it_active_show`);
			$elm.removeClass(`${compName}_showMore`);
			$elm.removeClass(`${compName}_open`);

			$target.addClass(`${compName}__it_active`);
			$target.slice(0, 10).addClass(`${compName}__it_active_show`);
			$curLetter.addClass(`${compName}__let_active`);

			if ($target.length > 10) {
				$elm.addClass(`${compName}_showMore`);
			}
		}
	}
};

export default bTerms;


