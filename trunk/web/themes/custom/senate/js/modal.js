/**
 * Lightweight modal implementation for the theme's Bootstrap 3 markup.
 *
 * It preserves the jQuery .modal() API and Bootstrap modal event names used by
 * the compiled theme while remaining compatible with jQuery 4.
 */
(function ($, Drupal) {
  'use strict';

  const backdropClass = 'modal-backdrop fade in';

  function trigger($modal, name, relatedTarget) {
    const event = $.Event(`${name}.bs.modal`, { relatedTarget });
    $modal.trigger(event);
    return event;
  }

  function show($modal, relatedTarget) {
    const event = trigger($modal, 'show', relatedTarget);
    if (event.isDefaultPrevented() || $modal.hasClass('in')) {
      return;
    }

    const $backdrop = $('<div>').addClass(backdropClass).appendTo(document.body);
    $modal.data('senate.modal.backdrop', $backdrop);
    $('body').addClass('modal-open');
    $modal
      .show()
      .attr({ 'aria-hidden': 'false', 'aria-modal': 'true' })
      .addClass('in')
      .trigger('focus');
    trigger($modal, 'shown', relatedTarget);
  }

  function hide($modal) {
    const event = trigger($modal, 'hide');
    if (event.isDefaultPrevented() || !$modal.hasClass('in')) {
      return;
    }

    $modal.removeClass('in').hide().attr('aria-hidden', 'true').removeAttr('aria-modal');
    const $backdrop = $modal.data('senate.modal.backdrop');
    if ($backdrop) {
      $backdrop.remove();
      $modal.removeData('senate.modal.backdrop');
    }
    if (!$('.modal.in').length) {
      $('body').removeClass('modal-open');
    }
    trigger($modal, 'hidden');
  }

  $.fn.modal = function (action, relatedTarget) {
    return this.each(function () {
      const $modal = $(this);
      if (action === 'hide') {
        hide($modal);
      }
      else if (action === 'toggle') {
        $modal.hasClass('in') ? hide($modal) : show($modal, relatedTarget);
      }
      else {
        show($modal, relatedTarget);
      }
    });
  };

  $(document)
    .on('click.senate.modal', '[data-toggle="modal"]', function (event) {
      const selector = $(this).attr('data-target') || ($(this).attr('href') || '').replace(/.*(?=#[^\s]+$)/, '');
      if (selector) {
        event.preventDefault();
        $(selector).modal('show', this);
      }
    })
    .on('click.senate.modal', '[data-dismiss="modal"]', function (event) {
      event.preventDefault();
      $(this).closest('.modal').modal('hide');
    })
    .on('click.senate.modal', '.modal', function (event) {
      if (event.target === this) {
        $(this).modal('hide');
      }
    })
    .on('keydown.senate.modal', function (event) {
      if (event.key === 'Escape') {
        $('.modal.in').modal('hide');
      }
    });

  Drupal.behaviors.senateModal = Drupal.behaviors.senateModal || { attach() {} };
})(jQuery, Drupal);
