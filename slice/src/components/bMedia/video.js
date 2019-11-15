const $ = jQuery;


  const pluginName = 'bMedia';

  class VideoPlay {
    constructor(elm, options) {
      this.elm = elm;
      this.config = Object.assign({
        //options here
      }, options);

      this.processed = false;

      if(!this.processed) {
        this.init();
      }
    }

    init() {
      this.processed = !this.processed;

      var $Wrap = $(this.elm);
      var $playBtn = $Wrap.find('.bMedia__play-btn');

      if (!$playBtn.length) return;

      $playBtn.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);

        var target = $this.attr('href');
        if (!target) return;

        var $video = $Wrap.find(target);
        $Wrap.addClass('bMedia_active');

        if ($video.length) {
          toggleVideo($video[0], 'playVideo');
        }
      });

      function toggleVideo(video, state) {
        var func = state == 'pause' ? 'pauseVideo' : 'playVideo';
        var iframe = video.contentWindow;

        iframe.postMessage('{"event":"command","func":"' + func + '","args":""}', '*');
      }
    }
  }

  window.BlockVideo = (item, options) => {
    var videoBlocks = document.querySelectorAll('.' + pluginName);

    if (videoBlocks.length)  {
      videoBlocks = $(videoBlocks);

      if (!$('#iframe-youtube-api').length) {
        var tag = document.createElement('script');
        tag.id = 'iframe-youtube-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      var dataRedirectUrl = 'data-redirect-url';
      var videoBlocksClass = '.' + pluginName;

      if (window.initOnYouTubeIframeAPIReady) {
        var reOpenPreview = videoBlocks.has('.bMedia__play-btn').not('[' + dataRedirectUrl + ']');

        $(reOpenPreview).each(function (index) {
          var reOpenPreviewoId = $(this).find('iframe').attr('id');
          if (!reOpenPreviewoId) return;

          window['player-' + index + '-' + reOpenPreviewoId] = new YT.Player(reOpenPreviewoId, {
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChangeReOpen
            }
          });
        });
      } else {

        window.onYouTubeIframeAPIReady = function () {

          window.initOnYouTubeIframeAPIReady = true;

          var reOpenPreview = videoBlocks.has('.bMedia__play-btn').not('[' + dataRedirectUrl + ']');
          var redirectVideo = videoBlocks.filter('[' + dataRedirectUrl + ']');

          $(redirectVideo).each(function (index) {
            var redirectVideoId = $(this).find('iframe').attr('id');
            if (!redirectVideoId) return;

            window['player-' + index + '-' + redirectVideoId] = new YT.Player(redirectVideoId, {
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChangeForRedirect
              }
            });
          });

          $(reOpenPreview).each(function (index) {
            var reOpenPreviewoId = $(this).find('iframe').attr('id');
            if (!reOpenPreviewoId) return;

            window['player-' + index + '-' + reOpenPreviewoId] = new YT.Player(reOpenPreviewoId, {
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChangeReOpen
              }
            });
          });
        };
      }

      window.onPlayerReady = function(event) {
        var $videoWrap = $(event.target.a).closest(videoBlocksClass);

        if ($videoWrap.hasClass('bMedia_active')) {
          event.target.playVideo();
        }
      };

      window.onPlayerStateChangeReOpen = function (event) {

        if (event.data !== 0) return;

        var $videoWrap = $(event.target.a).closest(videoBlocksClass);
        if (!$videoWrap.length) return;

        $videoWrap.removeClass('bMedia_active');
      };

      window.onPlayerStateChangeForRedirect = function (event) {

        if (event.data !== 0) return;

        var $videoWrap = $(event.target.a).closest(videoBlocksClass);
        if (!$videoWrap.length) return;

        $videoWrap.addClass('bMedia_end');
        var urlRedirect = $videoWrap.attr(dataRedirectUrl);

        console.log($videoWrap);
        if (urlRedirect) {
          window.location.replace(urlRedirect);
        }
      };

    }

    document.querySelectorAll('.' + (item || pluginName)).forEach((item) => {
      if(!item.classList.contains(pluginName + '_processed')) {
        item.classList.add(pluginName + '_processed');
        new VideoPlay(item, options);
      }
    });
  };


export default BlockVideo;