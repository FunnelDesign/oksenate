/**
 * Temporary compatibility helpers for legacy theme plugins on jQuery 4.
 *
 * Remove this file after the bundled Select2 and jquery.cookie libraries have
 * been replaced with jQuery 4 compatible versions.
 */
(function ($) {
  'use strict';

  $.isArray ??= Array.isArray;
  $.isFunction ??= function (value) {
    return typeof value === 'function';
  };
  $.trim ??= function (value) {
    return value == null ? '' : String(value).trim();
  };
})(jQuery);
