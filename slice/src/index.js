import './styles'

(function ($) {
	if (typeof Drupal != 'undefined') {

		console.log('drupal init TEST');
		Drupal.behaviors.projectName = {
			attach: function (context, settings) {
				initTEST();
			},

			completedCallback: function () {
				// Do nothing. But it's here in case other modules/themes want to override it.
			}
		}
	}

	$(function () {
		if (typeof Drupal == 'undefined') {
			initTEST();
		}
	});

	function initTEST() {
		console.log(window.Drupal?.behaviors, 'TESTSSTTST');
	}

})(jQuery);

import bEvent from './components/bEvent/bEvent'
import Observer from "./components/Observer/Observer";
const $ = jQuery;

document.addEventListener('DOMContentLoaded', () => {

	if (window.Drupal?.behaviors) {
		console.log('drupal init');

		Drupal.behaviors.projectName = {
			attach: function (context, settings) {
				init();
			},
			completedCallback: function () {
				// Do nothing. But it's here in case other modules/themes want to override it.
			}
		}
	} else {
		init();
	}

	new Observer();

	function init() {
		console.log(window.Drupal?.behaviors);
    new bEvent();
	}

});

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});
