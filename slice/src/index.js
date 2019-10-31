import './styles'

import Some from './components/some/some'

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
    new Some();
	}

});

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});
