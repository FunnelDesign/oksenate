import './styles'

import SHeader from './components/SHeader/SHeader'
import bEvent from './components/bEvent/bEvent'

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
    new SHeader();
    new bEvent();
	}

});

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});
