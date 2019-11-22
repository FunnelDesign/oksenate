(function ($, win) {
  const pluginName = 'filter-list';

  class FilterList {
    constructor($elm, options) {
      this.$elm = $elm;
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

      let {$elm} = this;

      let url = window.location.pathname + window.location.search;
      let activePage = url.substring(url.lastIndexOf('/') + 1);
      let links = $elm.find(`.${pluginName}__items > a`);

      links.each(function () {
        let $this = $(this);
        let href = $this.attr('href');
        let linkPage = href.substring(href.lastIndexOf('/') + 1);


        if (activePage === linkPage) {
          $this.addClass('bef-link-active');
        }
      });

      if (!links.hasClass('bef-link-active')) {
        links.eq(0).addClass('bef-link-active');
      }
    }
  }

  window.blocks.FilterList = (item, options) => {

    document.querySelectorAll('.' + (item || pluginName)).forEach((item) => {
      if(!item.classList.contains(pluginName + '_processed')) {
        item.classList.add(pluginName + '_processed');
        new FilterList($(item), options);
      }
    });
  };

})(jQuery, window);
