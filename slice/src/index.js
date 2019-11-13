import './styles'

import bEvent from './components/bEvent/bEvent'
import Observer from "./components/Observer/Observer";

const $ = jQuery;

(function ($) {

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
		document.addEventListener('DOMContentLoaded', () => {
			init();
		});
	}

	new Observer();

	function init() {
		console.log(window.Drupal?.behaviors, 'new window.Drupal?.behaviors');
		new bEvent();
	}
})(jQuery);

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});

// (function ($) {
// 	console.log('TEST OLD');
//
// 	if (typeof Drupal != 'undefined') {
//
// 		console.log('drupal init TEST');
// 		Drupal.behaviors.projectName = {
// 			attach: function (context, settings) {
// 				initTmp();
// 			},
//
// 			completedCallback: function () {
// 				// Do nothing. But it's here in case other modules/themes want to override it.
// 			}
// 		}
// 	}
//
// 	function initTmp() {
// 		console.log(window.Drupal?.behaviors, 'OLD window.Drupal?.behaviors');
// 		new bEvent();
// 	}
//
// })(jQuery);
