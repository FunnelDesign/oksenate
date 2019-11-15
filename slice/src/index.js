import './styles'

import bEvent from './components/bEvent/bEvent'
import Observer from "./components/Observer/Observer";
import BlockVideo from "./components/bMedia/video";

const $ = jQuery;

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});

if (window.Drupal?.behaviors) {
	Drupal.behaviors.projectName = {
		attach: (context, settings) => {
			init();
		},
		completedCallback: () => { /*Do nothing. But it's here in case other modules/themes want to override it.*/}
	}
} else {
	document.addEventListener('DOMContentLoaded', () => {
		init();
	});
}

document.addEventListener('DOMContentLoaded', () => {
	new Observer();
});

function init() {
	new bEvent();
	initSelect();


	new BlockVideo();
}

function initSelect() {
	$('select').select2({
		width: 'full',
		minimumResultsForSearch: Infinity
	});
}

