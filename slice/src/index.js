import './styles'

import SHeader from './components/SHeader/SHeader'

document.addEventListener('DOMContentLoaded', () => {

	if (window.Drupal && window.Drupal.behaviors) {
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
	}

});

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});
