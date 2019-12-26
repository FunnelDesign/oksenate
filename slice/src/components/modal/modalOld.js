(function ($, win) {
  const pluginName = 'modal';

  class Modal {
    constructor(elm, options) {
      this.elm = elm;

      this.processed = false;

      if(!this.processed) {
        this.init();
      }
    }

    init() {
      this.processed = !this.processed;

      this.checkHash();

      $(window).on('hashchange', () => {
        this.checkHash();
      });

      $.support.transition = false;

      $(this.elm).on('hide.bs.modal', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        window.location.hash = '';

        $('html, body').scrollTop(scrollTop);
      });
    }

    checkHash() {
      const $el = $(window.location.hash);

      if($el.length && $el.hasClass('modal')) {
        $el.modal('show');
      }
    }
  }

  window.blocks.Modal = (item, options) => {
    document.querySelectorAll('.' + (item || pluginName)).forEach((item) => {
      if(!item.classList.contains(pluginName + '_processed')) {
        item.classList.add(pluginName + '_processed');
        new Modal(item, options);
      }
    });
  };

})(jQuery, window);
