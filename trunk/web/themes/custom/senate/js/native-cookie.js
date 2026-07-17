/**
 * Native cookie adapter for the legacy theme bundle.
 *
 * The compiled theme calls $.cookie() in two places. Keep that small public
 * contract without loading the abandoned jquery.cookie plugin.
 */
(function ($) {
  'use strict';

  function readCookie(name) {
    const prefix = `${encodeURIComponent(name)}=`;
    const item = document.cookie.split('; ').find((cookie) => cookie.startsWith(prefix));

    return item ? decodeURIComponent(item.substring(prefix.length)) : undefined;
  }

  function writeCookie(name, value, options) {
    const settings = options || {};
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (typeof settings.expires === 'number') {
      const expires = new Date();
      expires.setTime(expires.getTime() + settings.expires * 864e5);
      cookie += `; expires=${expires.toUTCString()}`;
    }
    if (settings.path) {
      cookie += `; path=${settings.path}`;
    }
    if (settings.domain) {
      cookie += `; domain=${settings.domain}`;
    }
    if (settings.secure) {
      cookie += '; secure';
    }
    cookie += '; SameSite=Lax';
    document.cookie = cookie;

    return value;
  }

  $.cookie = function (name, value, options) {
    return arguments.length > 1 ? writeCookie(name, value, options) : readCookie(name);
  };
})(jQuery);
