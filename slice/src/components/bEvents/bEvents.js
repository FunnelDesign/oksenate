import {checkInit} from "../helper";

const $ = jQuery;

window.bEvents = class {
	constructor(props = {}) {
		this.name = props.name || `bEvents`;
		this.selector = props.selector || `.${this.name}`;

		checkInit(this.selector, this.name, (item) => {
			this.init($(item));
		});
	}

	init($elm) {
		let $modal = $(`#modal-video`);
		if (!$modal.length) return;
		let iframe = $modal.find(`iframe`);

		$elm.on('click touch', `.${this.name}__imgWrap, .${this.name}__readMore`, (e) => {
			e.preventDefault();

			let videoId = $(e.target).closest(`.${this.name}__item`).attr('data-videoId');

			if (!videoId) return;
			iframe.attr(`id`, videoId);
			iframe.attr(`src`, `https://www.youtube.com/embed/${videoId}?rel=0&amp;controls=1&amp;showinfo=0&amp;enablejsapi=1`);
			$modal.modal(`show`);
			window.playerVideoModal = '';

			onYouTubeIframeAPIReady();

			function onYouTubeIframeAPIReady() {
				window.playerVideoModal = new YT.Player(videoId, {
					videoId: videoId,
					events: {
						'onReady': onPlayerReady
					}
				});
			}

			function onPlayerReady(event) {
				event.target.playVideo();
			}
		});

		$modal.on('hide.bs.modal', () => {
			iframe.attr(`id`, '');
			iframe.attr(`src`, ``);
			window.player = '';
		})
	}

};

export default bEvents;



