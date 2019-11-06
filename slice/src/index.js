import './styles'

import SHeader from './components/SHeader/SHeader'
import bEvent from './components/bEvent/bEvent'
import Observer from "./components/Observer/Observer";

document.addEventListener('DOMContentLoaded', () => {

	if (window.Drupal?.behaviors) {
		Drupal.behaviors.projectName = {
			attach: () => {
				init();
			},
			completedCallback: () => {/*Do nothing. But it's here in case other modules/themes want to override it.*/	}
		}
	} else {
		init();
	}

	function init() {
		new Observer();
    new SHeader();
    new bEvent();
	}

});

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});
