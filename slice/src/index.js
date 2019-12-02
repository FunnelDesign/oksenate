import './styles'

import bEvent from './components/bEvent/bEvent'
import Observer from "./components/Observer/Observer";
import BlockVideo from "./components/bMedia/video";
import bSort from "./components/bSort/bSort";
import navSelect from "./components/navSelect/navSelect";
import SliderThumb from "./components/slider-thumb/SliderThumb";
import FancyBox from "./components/fancybox/FancyBox";

const $ = jQuery;

window.addEventListener('load', () => {
	$('body').addClass('loaded');
});

if (window.Drupal?.behaviors) {
	Drupal.behaviors.projectName = {
		attach: (context, settings) => {
			init();

			$('#views-exposed-form-senators-page-1').ajaxComplete(function(event, xhr, settings) {+
				console.log(event, xhr, settings);

				if ($(event.target.id) === 'views-exposed-form-senators-page-1') {
					console.log(event.target.id);
				}
			});
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
	new navSelect();
});

function init() {
	new bEvent();
	new bSort();
	new SliderThumb();
	// new FancyBox();
	initSelect();


	new BlockVideo();
}

function initSelect() {
	$('select').select2({
		width: 'full',
		minimumResultsForSearch: Infinity
	});

	$('select').on('select2:open', function(e){

		$('.select2-results .select2-results__options').scrollbar({
			disableBodyScroll: false,
			duration: 600,
			scrollStep: 160
		});
	});
}

