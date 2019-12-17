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

		let $more = $elm.find(`.${this.name}__more`);


		$letters.each((i, item)=> {
			let letter = $(item).attr('href').replace('#' + prefix, '');
			let $target = $items.filter((i, term)=> {
				return $(term).attr('data-letter') === letter
			});

			if (!$target.length) {
				$(item).addClass(`${this.name}__let_disabled`)
			}
		});

		$elm.on('click touch', `.${this.name}__filLetters a`, (e) => {
			e.preventDefault();

			let $curLetter = $(e.target);

			let letter = $curLetter.attr('href').replace('#' + prefix, '');

			let $target = $items.filter((i, term)=> {
				return $(term).attr('data-letter') === letter
			});

			if (!$target.length) return;

			$letters.removeClass(`${this.name}__let_active`);
			$items.removeClass(`${this.name}__it_active`);
			$items.removeClass(`${this.name}__it_active_show`);
			$elm.removeClass(`${this.name}_showMore`);
			$elm.removeClass(`${this.name}_open`);

			$target.addClass(`${this.name}__it_active`);
			$target.slice(0, 10).addClass(`${this.name}__it_active_show`);

			//showItems($target.index());

			$curLetter.addClass(`${this.name}__let_active`);

			if ($target.length > 10) {
				$elm.addClass(`${this.name}_showMore`);
			}

		});

		$more.on('click touch', (e) => {
			e.preventDefault();
			$elm.toggleClass(`${this.name}_open`)
		});

		showItems(0);

		function showItems(index) {
			$items.slice(index, index + 10).addClass(`${compName}__it_active ${compName}__it_active_show`);
		}
	}
};

export default bTerms;



