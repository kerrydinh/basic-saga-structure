import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";

const addQueryString = (url, params) => {
  if (
    params &&
    (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object"
  ) {
    var queryString = "",
      e = encodeURIComponent;

    // Must encode data
    for (var paramName in params) {
      queryString += "&" + e(paramName) + "=" + e(params[paramName]);
    }

    if (!queryString) {
      return url;
    }

    url = url + (url.indexOf("?") !== -1 ? "&" : "?") + queryString.slice(1);
  }

  return url;
};
const _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

const backendOptions = {
  loadPath:
    "https://api.phraseapp.com/api/v2/projects/9ce2986232a03af801205fbc4edd4ebf/locales/5ccf9ef16ff9b074bde69762a0f3c2ee/download?file_format=i18next",
  addPath:
    "https://api.phraseapp.com/api/v2/projects/9ce2986232a03af801205fbc4edd4ebf/keys",
  customHeaders: {
    Authorization: `token 631dfe889f247060b116f5d02903f34a0dec1d723a44fefafad50b5569358c79`
    // ...
  },
  ajax: (url, options, callback, data, cache) => {
    debugger;
    let newData = undefined;
    if (
      data &&
      (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object"
    ) {
      newData = {};
      newData["name"] = Object.keys(data)[0];
      if (!cache) {
        newData["_t"] = new Date();
      }
      // URL encoded form data must be in querystring format
      newData = addQueryString("", newData).slice(1);
    }

    if (options.queryStringParams) {
      url = addQueryString(url, options.queryStringParams);
    }

    try {
      var x;

      x = new XMLHttpRequest();

      x.open(newData ? "POST" : "GET", url, 1);
      if (!options.crossDomain) {
        x.setRequestHeader("X-Requested-With", "XMLHttpRequest");
      }
      x.withCredentials = !!options.withCredentials;
      if (newData) {
        x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      }
      if (x.overrideMimeType) {
        x.overrideMimeType("application/json");
      }
      var h = options.customHeaders;
      if (h) {
        for (var i in h) {
          x.setRequestHeader(i, h[i]);
        }
      }
      x.onreadystatechange = function() {
        x.readyState > 3 && callback && callback(x.responseText, x);
      };
      x.send(newData);
    } catch (e) {
      console && console.log(e);
    }
  }
};

i18n
  // i18next-locize-backend
  // loads translations from your project, saves new keys to it (saveMissing: true)
  // https://github.com/locize/i18next-locize-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    saveMissing: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    backend: backendOptions,
    react: {
      bindI18n: "languageChanged editorSaved"
    }
  });

export default i18n;
