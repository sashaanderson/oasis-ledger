/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(20)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(14);
} else {}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Unicode names
var EN_SPACE = exports.EN_SPACE = "\u2002";
var EM_SPACE = exports.EM_SPACE = "\u2003";
var EN_DASH = exports.EN_DASH = "\u2013";
var EM_DASH = exports.EM_DASH = "\u2014";

// HTML entity names
var ensp = exports.ensp = EN_SPACE;
var emsp = exports.emsp = EM_SPACE;
var ndash = exports.ndash = EN_DASH;
var mdash = exports.mdash = EM_DASH;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.fetchCheck = fetchCheck;
exports.fetchJSON = fetchJSON;
exports.fetchText = fetchText;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FetchContainer = function (_React$Component) {
  _inherits(FetchContainer, _React$Component);

  function FetchContainer(props) {
    _classCallCheck(this, FetchContainer);

    var _this = _possibleConstructorReturn(this, (FetchContainer.__proto__ || Object.getPrototypeOf(FetchContainer)).call(this, props));

    _this.state = {
      err: null,
      fetchResults: null
    };
    return _this;
  }

  _createClass(FetchContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load();
    }
  }, {
    key: 'load',
    value: function load() {
      var _this2 = this;

      var fetchKeys = Object.keys(this.props.fetch);
      Promise.all(fetchKeys.map(function (key) {
        return Promise.resolve(_this2.props.fetch[key]);
      })).then(function (values) {
        var fetchResults = {};
        fetchKeys.forEach(function (key, i) {
          return fetchResults[key] = values[i];
        });
        _this2.setState({ fetchResults: fetchResults });
      }).catch(function (err) {
        _this2.setState({ err: err });
      });
    }
  }, {
    key: 'renderLoading',
    value: function renderLoading() {
      return _react2.default.createElement(
        'div',
        { className: 'spinner-grow text-primary', role: 'status' },
        _react2.default.createElement(
          'span',
          { className: 'sr-only' },
          'Loading...'
        )
      );
    }
  }, {
    key: 'renderError',
    value: function renderError(err) {
      console.log("Oh sorrow! Error: %o", err);
      return _react2.default.createElement(
        'div',
        { className: 'alert alert-danger' },
        _react2.default.createElement(
          'strong',
          null,
          'Oh sorrow!'
        ),
        ' ',
        err.toString()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.err) {
        return this.renderError(this.state.err);
      }
      if (this.props.wait && !this.state.fetchResults) {
        return this.renderLoading();
      }
      var onlyChild = _react2.default.Children.only(this.props.children);
      return _react2.default.cloneElement(onlyChild, this.state.fetchResults);
    }
  }]);

  return FetchContainer;
}(_react2.default.Component);

FetchContainer.propTypes = {
  children: _propTypes2.default.element.isRequired,
  fetch: _propTypes2.default.object.isRequired,
  wait: _propTypes2.default.bool
};

FetchContainer.defaultProps = {
  wait: true
};

function fetchCheck(res) {
  if (res.ok) {
    return res;
  } else {
    return res.text().then(function (text) {
      throw new Error(text ? text : res.statusText);
    }, function (err) {
      throw new Error(res.statusText);
    }).catch(function (err) {
      console.error("Error in fetchCheck: %o", err);
      throw err;
    });
  }
}

function fetchWithCheck(url, init) {
  return fetch(url, Object.assign({ method: 'get' }, init)).then(fetchCheck);
}

function fetchJSON(url, init) {
  return fetchWithCheck(url, init).then(function (res) {
    return res.json();
  });
}

function fetchText(url, init) {
  return fetchWithCheck(url, init).then(function (res) {
    return res.text();
  });
}

exports.default = FetchContainer;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/warning/warning.js
var warning = __webpack_require__(2);
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/history/node_modules/warning/browser.js
var browser = __webpack_require__(4);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(3);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ./node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ./node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ./node_modules/history/es/PathUtils.js
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;


  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};
// CONCATENATED MODULE: ./node_modules/history/es/LocationUtils.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var LocationUtils_createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var LocationUtils_locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
};
// CONCATENATED MODULE: ./node_modules/history/es/createTransitionManager.js


var createTransitionManager_createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    browser_default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          browser_default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ var es_createTransitionManager = (createTransitionManager_createTransitionManager);
// CONCATENATED MODULE: ./node_modules/history/es/DOMUtils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
// CONCATENATED MODULE: ./node_modules/history/es/createBrowserHistory.js
var createBrowserHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createBrowserHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory_createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_browser_default()(canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;


    var path = pathname + search + hash;

    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createBrowserHistory_extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;


      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        browser_default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createBrowserHistory = (createBrowserHistory_createBrowserHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createHashHistory.js
var createHashHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








var createHashHistory_HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory_createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_browser_default()(canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;


  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    browser_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createHashHistory_extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && LocationUtils_locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  };

  var push = function push(path, state) {
    browser_default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        browser_default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    browser_default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    browser_default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createHashHistory = (createHashHistory_createHashHistory);
// CONCATENATED MODULE: ./node_modules/history/es/createMemoryHistory.js
var createMemoryHistory_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createMemoryHistory_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory_createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;


  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createMemoryHistory_extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? LocationUtils_createLocation(entry, undefined, createKey()) : LocationUtils_createLocation(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = createPath;

  var push = function push(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    browser_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory_typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createMemoryHistory = (createMemoryHistory_createMemoryHistory);
// CONCATENATED MODULE: ./node_modules/history/es/index.js









// CONCATENATED MODULE: ./node_modules/react-router/es/Router.js
var Router_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/**
 * The public API for putting history on context.
 */

var Router_Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: Router_extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;


    invariant_browser_default()(children == null || react_default.a.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? react_default.a.Children.only(children) : null;
  };

  return Router;
}(react_default.a.Component);

Router_Router.propTypes = {
  history: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node
};
Router_Router.contextTypes = {
  router: prop_types_default.a.object
};
Router_Router.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_Router = (Router_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Router.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Router = (es_Router);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/BrowserRouter.js
function BrowserRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BrowserRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function BrowserRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter_BrowserRouter = function (_React$Component) {
  BrowserRouter_inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    BrowserRouter_classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = BrowserRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createBrowserHistory(_this.props), _temp), BrowserRouter_possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(react_default.a.Component);

BrowserRouter_BrowserRouter.propTypes = {
  basename: prop_types_default.a.string,
  forceRefresh: prop_types_default.a.bool,
  getUserConfirmation: prop_types_default.a.func,
  keyLength: prop_types_default.a.number,
  children: prop_types_default.a.node
};


/* harmony default export */ var es_BrowserRouter = (BrowserRouter_BrowserRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/HashRouter.js
function HashRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HashRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function HashRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter_HashRouter = function (_React$Component) {
  HashRouter_inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    HashRouter_classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = HashRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createHashHistory(_this.props), _temp), HashRouter_possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return react_default.a.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(react_default.a.Component);

HashRouter_HashRouter.propTypes = {
  basename: prop_types_default.a.string,
  getUserConfirmation: prop_types_default.a.func,
  hashType: prop_types_default.a.oneOf(["hashbang", "noslash", "slash"]),
  children: prop_types_default.a.node
};


/* harmony default export */ var es_HashRouter = (HashRouter_HashRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Link.js
var Link_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Link_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link_Link = function (_React$Component) {
  Link_inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    Link_classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Link_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;


          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), Link_possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant_browser_default()(this.context.router, "You should not use <Link> outside a <Router>");

    invariant_browser_default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? LocationUtils_createLocation(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return react_default.a.createElement("a", Link_extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(react_default.a.Component);

Link_Link.propTypes = {
  onClick: prop_types_default.a.func,
  target: prop_types_default.a.string,
  replace: prop_types_default.a.bool,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired,
  innerRef: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.func])
};
Link_Link.defaultProps = {
  replace: false
};
Link_Link.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired,
      createHref: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ var es_Link = (Link_Link);
// CONCATENATED MODULE: ./node_modules/react-router/es/MemoryRouter.js
function MemoryRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MemoryRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function MemoryRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter_MemoryRouter = function (_React$Component) {
  MemoryRouter_inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    MemoryRouter_classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = MemoryRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createMemoryHistory(_this.props), _temp), MemoryRouter_possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return react_default.a.createElement(es_Router, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(react_default.a.Component);

MemoryRouter_MemoryRouter.propTypes = {
  initialEntries: prop_types_default.a.array,
  initialIndex: prop_types_default.a.number,
  getUserConfirmation: prop_types_default.a.func,
  keyLength: prop_types_default.a.number,
  children: prop_types_default.a.node
};


/* harmony default export */ var es_MemoryRouter = (MemoryRouter_MemoryRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/MemoryRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_MemoryRouter = (es_MemoryRouter);
// EXTERNAL MODULE: ./node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(8);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ./node_modules/react-router/es/matchPath.js


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var matchPath_compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp_default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;


  if (path == null) return parent;

  var _compilePath = matchPath_compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ var es_matchPath = (matchPath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Route.js
var Route_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Route_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Route_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Route_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Route_isEmptyChildren = function isEmptyChildren(children) {
  return react_default.a.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route_Route = function (_React$Component) {
  Route_inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    Route_classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Route_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), Route_possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: Route_extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant_browser_default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return es_matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning_default()(!(this.props.component && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning_default()(!(this.props.render && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? react_default.a.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !Route_isEmptyChildren(children)) return react_default.a.Children.only(children);

    return null;
  };

  return Route;
}(react_default.a.Component);

Route_Route.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  path: prop_types_default.a.string,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  sensitive: prop_types_default.a.bool,
  component: prop_types_default.a.func,
  render: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.node]),
  location: prop_types_default.a.object
};
Route_Route.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.object.isRequired,
    route: prop_types_default.a.object.isRequired,
    staticContext: prop_types_default.a.object
  })
};
Route_Route.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_Route = (Route_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Route.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Route = (es_Route);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/NavLink.js
var NavLink_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var NavLink_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function NavLink_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink_NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = NavLink_objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : NavLink_typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return react_default.a.createElement(react_router_dom_es_Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return react_default.a.createElement(es_Link, NavLink_extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? NavLink_extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink_NavLink.propTypes = {
  to: es_Link.propTypes.to,
  exact: prop_types_default.a.bool,
  strict: prop_types_default.a.bool,
  location: prop_types_default.a.object,
  activeClassName: prop_types_default.a.string,
  className: prop_types_default.a.string,
  activeStyle: prop_types_default.a.object,
  style: prop_types_default.a.object,
  isActive: prop_types_default.a.func,
  "aria-current": prop_types_default.a.oneOf(["page", "step", "location", "date", "time", "true"])
};

NavLink_NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ var es_NavLink = (NavLink_NavLink);
// CONCATENATED MODULE: ./node_modules/react-router/es/Prompt.js
function Prompt_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Prompt_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Prompt_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt_Prompt = function (_React$Component) {
  Prompt_inherits(Prompt, _React$Component);

  function Prompt() {
    Prompt_classCallCheck(this, Prompt);

    return Prompt_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant_browser_default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(react_default.a.Component);

Prompt_Prompt.propTypes = {
  when: prop_types_default.a.bool,
  message: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]).isRequired
};
Prompt_Prompt.defaultProps = {
  when: true
};
Prompt_Prompt.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      block: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};


/* harmony default export */ var es_Prompt = (Prompt_Prompt);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Prompt.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Prompt = (es_Prompt);
// CONCATENATED MODULE: ./node_modules/react-router/es/generatePath.js


var generatePath_patternCache = {};
var generatePath_cacheLimit = 10000;
var generatePath_cacheCount = 0;

var generatePath_compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = generatePath_patternCache[cacheKey] || (generatePath_patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = path_to_regexp_default.a.compile(pattern);

  if (generatePath_cacheCount < generatePath_cacheLimit) {
    cache[pattern] = compiledGenerator;
    generatePath_cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = generatePath_compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ var es_generatePath = (generatePath);
// CONCATENATED MODULE: ./node_modules/react-router/es/Redirect.js
var Redirect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Redirect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Redirect_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Redirect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect_Redirect = function (_React$Component) {
  Redirect_inherits(Redirect, _React$Component);

  function Redirect() {
    Redirect_classCallCheck(this, Redirect);

    return Redirect_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant_browser_default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = LocationUtils_createLocation(prevProps.to);
    var nextTo = LocationUtils_createLocation(this.props.to);

    if (LocationUtils_locationsAreEqual(prevTo, nextTo)) {
      warning_default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return es_generatePath(to, computedMatch.params);
      } else {
        return Redirect_extends({}, to, {
          pathname: es_generatePath(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(react_default.a.Component);

Redirect_Redirect.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  push: prop_types_default.a.bool,
  from: prop_types_default.a.string,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired
};
Redirect_Redirect.defaultProps = {
  push: false
};
Redirect_Redirect.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired
    }).isRequired,
    staticContext: prop_types_default.a.object
  }).isRequired
};


/* harmony default export */ var es_Redirect = (Redirect_Redirect);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Redirect.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Redirect = (es_Redirect);
// CONCATENATED MODULE: ./node_modules/react-router/es/StaticRouter.js
var StaticRouter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function StaticRouter_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function StaticRouter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaticRouter_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function StaticRouter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var StaticRouter_addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return StaticRouter_extends({}, location, {
    pathname: StaticRouter_addLeadingSlash(basename) + location.pathname
  });
};

var StaticRouter_stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = StaticRouter_addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return StaticRouter_extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var StaticRouter_createURL = function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
};

var StaticRouter_staticHandler = function staticHandler(methodName) {
  return function () {
    invariant_browser_default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter_StaticRouter = function (_React$Component) {
  StaticRouter_inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    StaticRouter_classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = StaticRouter_possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return StaticRouter_addLeadingSlash(_this.props.basename + StaticRouter_createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), StaticRouter_possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = StaticRouter_objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: StaticRouter_stripBasename(basename, LocationUtils_createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: StaticRouter_staticHandler("go"),
      goBack: StaticRouter_staticHandler("goBack"),
      goForward: StaticRouter_staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return react_default.a.createElement(es_Router, StaticRouter_extends({}, props, { history: history }));
  };

  return StaticRouter;
}(react_default.a.Component);

StaticRouter_StaticRouter.propTypes = {
  basename: prop_types_default.a.string,
  context: prop_types_default.a.object.isRequired,
  location: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object])
};
StaticRouter_StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter_StaticRouter.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};


/* harmony default export */ var es_StaticRouter = (StaticRouter_StaticRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/StaticRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_StaticRouter = (es_StaticRouter);
// CONCATENATED MODULE: ./node_modules/react-router/es/Switch.js
function Switch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Switch_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Switch_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch_Switch = function (_React$Component) {
  Switch_inherits(Switch, _React$Component);

  function Switch() {
    Switch_classCallCheck(this, Switch);

    return Switch_possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant_browser_default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    react_default.a.Children.forEach(children, function (element) {
      if (match == null && react_default.a.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = es_matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? react_default.a.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(react_default.a.Component);

Switch_Switch.contextTypes = {
  router: prop_types_default.a.shape({
    route: prop_types_default.a.object.isRequired
  }).isRequired
};
Switch_Switch.propTypes = {
  children: prop_types_default.a.node,
  location: prop_types_default.a.object
};


/* harmony default export */ var es_Switch = (Switch_Switch);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/Switch.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Switch = (es_Switch);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/generatePath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_generatePath = (es_generatePath);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/matchPath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_matchPath = (es_matchPath);
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(12);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/react-router/es/withRouter.js
var withRouter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function withRouter_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






/**
 * A public higher-order component to access the imperative API
 */
var withRouter_withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = withRouter_objectWithoutProperties(props, ["wrappedComponentRef"]);

    return react_default.a.createElement(es_Route, {
      children: function children(routeComponentProps) {
        return react_default.a.createElement(Component, withRouter_extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;
  C.propTypes = {
    wrappedComponentRef: prop_types_default.a.func
  };

  return hoist_non_react_statics_cjs_default()(C, Component);
};

/* harmony default export */ var es_withRouter = (withRouter_withRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/withRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_withRouter = (es_withRouter);
// CONCATENATED MODULE: ./node_modules/react-router-dom/es/index.js
/* concated harmony reexport BrowserRouter */__webpack_require__.d(__webpack_exports__, "BrowserRouter", function() { return es_BrowserRouter; });
/* concated harmony reexport HashRouter */__webpack_require__.d(__webpack_exports__, "HashRouter", function() { return es_HashRouter; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return es_Link; });
/* concated harmony reexport MemoryRouter */__webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return react_router_dom_es_MemoryRouter; });
/* concated harmony reexport NavLink */__webpack_require__.d(__webpack_exports__, "NavLink", function() { return es_NavLink; });
/* concated harmony reexport Prompt */__webpack_require__.d(__webpack_exports__, "Prompt", function() { return react_router_dom_es_Prompt; });
/* concated harmony reexport Redirect */__webpack_require__.d(__webpack_exports__, "Redirect", function() { return react_router_dom_es_Redirect; });
/* concated harmony reexport Route */__webpack_require__.d(__webpack_exports__, "Route", function() { return react_router_dom_es_Route; });
/* concated harmony reexport Router */__webpack_require__.d(__webpack_exports__, "Router", function() { return react_router_dom_es_Router; });
/* concated harmony reexport StaticRouter */__webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return react_router_dom_es_StaticRouter; });
/* concated harmony reexport Switch */__webpack_require__.d(__webpack_exports__, "Switch", function() { return react_router_dom_es_Switch; });
/* concated harmony reexport generatePath */__webpack_require__.d(__webpack_exports__, "generatePath", function() { return react_router_dom_es_generatePath; });
/* concated harmony reexport matchPath */__webpack_require__.d(__webpack_exports__, "matchPath", function() { return react_router_dom_es_matchPath; });
/* concated harmony reexport withRouter */__webpack_require__.d(__webpack_exports__, "withRouter", function() { return react_router_dom_es_withRouter; });





























/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__(22)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatAmount = formatAmount;
exports.formatDateLong = formatDateLong;
exports.formatDateShort = formatDateShort;

var _unicode = __webpack_require__(5);

function formatAmount(amount) {
  if (amount == 0) return "-";
  var s = amount.toLocaleString('en-US', { minimumFractionDigits: 2 });
  if (s.startsWith("-")) s = "(" + s.substring(1) + ")";
  return s;
}

function formatDateLong(date) {
  var m = moment(date);
  var s = m.format('ddd, MMM Do, YYYY');
  var dd = moment().diff(m, 'days');
  return dd == 0 ? s + " " + _unicode.mdash + " Today" : dd == 1 ? s + " " + _unicode.mdash + " Yesterday" : dd > 1 ? s + " " + _unicode.mdash + " " + dd + " days ago" : s;
}

function formatDateShort(date) {
  var m = moment(date);
  return m.format("D MMM YYYY");
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DocumentTitle = function (_React$Component) {
  _inherits(DocumentTitle, _React$Component);

  function DocumentTitle() {
    _classCallCheck(this, DocumentTitle);

    return _possibleConstructorReturn(this, (DocumentTitle.__proto__ || Object.getPrototypeOf(DocumentTitle)).apply(this, arguments));
  }

  _createClass(DocumentTitle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.title = "Oasis Ledger - " + this.props.title;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.title = "Oasis Ledger";
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return DocumentTitle;
}(_react2.default.Component);

DocumentTitle.propTypes = {
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
};

exports.default = DocumentTitle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(7);

var _App = __webpack_require__(23);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRouterDom.HashRouter,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(9),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,A=n?Symbol.for("react.memo"):
60115,B=n?Symbol.for("react.lazy"):60116,C="function"===typeof Symbol&&Symbol.iterator;function aa(a,b,e,c,d,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[e,c,d,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function D(a){for(var b=arguments.length-1,e="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)e+="&args[]="+encodeURIComponent(arguments[c+1]);aa(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",e)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F={};
function G(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}G.prototype.isReactComponent={};G.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?D("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};G.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function H(){}H.prototype=G.prototype;function I(a,b,e){this.props=a;this.context=b;this.refs=F;this.updater=e||E}var J=I.prototype=new H;
J.constructor=I;k(J,G.prototype);J.isPureReactComponent=!0;var K={current:null,currentDispatcher:null},L=Object.prototype.hasOwnProperty,M={key:!0,ref:!0,__self:!0,__source:!0};
function N(a,b,e){var c=void 0,d={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=b[c]);var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];d.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===d[c]&&(d[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:d,_owner:K.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,e,c){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=e;d.context=c;d.count=0;return d}return{result:a,keyPrefix:b,func:e,context:c,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,e,c){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return e(c,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){d=a[h];var f=b+U(d,h);g+=T(d,f,e,c)}else if(null===a||"object"!==typeof a?f=null:(f=C&&a[C]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,h++),g+=T(d,f,e,c);else"object"===d&&(e=""+a,D("31","[object Object]"===e?"object with keys {"+Object.keys(a).join(", ")+"}":e,""));return g}function V(a,b,e){return null==a?0:T(a,"",b,e)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,e){var c=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,c,e,function(a){return a}):null!=a&&(O(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),c.push(a))}function W(a,b,e,c,d){var g="";null!=e&&(g=(""+e).replace(P,"$&/")+"/");b=R(b,g,c,d);V(a,da,b);S(b)}
var X={Children:{map:function(a,b,e){if(null==a)return a;var c=[];W(a,c,null,b,e);return c},forEach:function(a,b,e){if(null==a)return a;b=R(null,null,b,e);V(a,ca,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){O(a)?void 0:D("143");return a}},createRef:function(){return{current:null}},Component:G,PureComponent:I,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:B,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,Suspense:z,createElement:N,cloneElement:function(a,b,e){null===a||void 0===a?D("267",a):void 0;var c=void 0,d=k({},a.props),g=a.key,h=a.ref,f=a._owner;
if(null!=b){void 0!==b.ref&&(h=b.ref,f=K.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)L.call(b,c)&&!M.hasOwnProperty(c)&&(d[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)d.children=e;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];d.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:d,_owner:f}},createFactory:function(a){var b=N.bind(null,a);b.type=a;return b},isValidElement:O,version:"16.7.0",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:K,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(16);
} else {}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(1),n=__webpack_require__(9),ba=__webpack_require__(17);function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function t(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:t("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,fa=null,ha=!1,ia=null,ja={onError:function(a){ea=!0;fa=a}};function ka(a,b,c,d,e,f,g,h,k){ea=!1;fa=null;da.apply(ja,arguments)}function la(a,b,c,d,e,f,g,h,k){ka.apply(this,arguments);if(ea){if(ea){var l=fa;ea=!1;fa=null}else t("198"),l=void 0;ha||(ha=!0,ia=l)}}var ma=null,na={};
function oa(){if(ma)for(var a in na){var b=na[a],c=ma.indexOf(a);-1<c?void 0:t("96",a);if(!pa[c]){b.extractEvents?void 0:t("97",a);pa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;qa.hasOwnProperty(h)?t("99",h):void 0;qa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ra(k[e],g,h);e=!0}else f.registrationName?(ra(f.registrationName,g,h),e=!0):e=!1;e?void 0:t("98",d,a)}}}}
function ra(a,b,c){sa[a]?t("100",a):void 0;sa[a]=b;ta[a]=b.eventTypes[c].dependencies}var pa=[],qa={},sa={},ta={},ua=null,va=null,wa=null;function xa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=wa(c);la(d,b,void 0,a);a.currentTarget=null}function ya(a,b){null==b?t("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function za(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Aa=null;function Ba(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)xa(a,b[d],c[d]);else b&&xa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ca={injectEventPluginOrder:function(a){ma?t("101"):void 0;ma=Array.prototype.slice.call(a);oa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];na.hasOwnProperty(c)&&na[c]===d||(na[c]?t("102",c):void 0,na[c]=d,b=!0)}b&&oa()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=ua(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?t("231",b,typeof c):void 0;
return c}function Ea(a){null!==a&&(Aa=ya(Aa,a));a=Aa;Aa=null;if(a&&(za(a,Ba),Aa?t("95"):void 0,ha))throw a=ia,ha=!1,ia=null,a;}var Fa=Math.random().toString(36).slice(2),Ga="__reactInternalInstance$"+Fa,Ha="__reactEventHandlers$"+Fa;function Ia(a){if(a[Ga])return a[Ga];for(;!a[Ga];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ga];return 5===a.tag||6===a.tag?a:null}function Ja(a){a=a[Ga];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ka(a){if(5===a.tag||6===a.tag)return a.stateNode;t("33")}function La(a){return a[Ha]||null}function Ma(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Na(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a)}
function Oa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ma(b);for(b=c.length;0<b--;)Na(c[b],"captured",a);for(b=0;b<c.length;b++)Na(c[b],"bubbled",a)}}function Pa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ya(c._dispatchListeners,b),c._dispatchInstances=ya(c._dispatchInstances,a))}function Qa(a){a&&a.dispatchConfig.registrationName&&Pa(a._targetInst,null,a)}
function Ra(a){za(a,Oa)}var Sa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ta(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ua={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Va={},Wa={};
Sa&&(Wa=document.createElement("div").style,"AnimationEvent"in window||(delete Ua.animationend.animation,delete Ua.animationiteration.animation,delete Ua.animationstart.animation),"TransitionEvent"in window||delete Ua.transitionend.transition);function Xa(a){if(Va[a])return Va[a];if(!Ua[a])return a;var b=Ua[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Wa)return Va[a]=b[c];return a}
var Ya=Xa("animationend"),Za=Xa("animationiteration"),$a=Xa("animationstart"),ab=Xa("transitionend"),bb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=null,eb=null,fb=null;
function gb(){if(fb)return fb;var a,b=eb,c=b.length,d,e="value"in cb?cb.value:cb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return fb=e.slice(a,1<d?1-d:void 0)}function hb(){return!0}function ib(){return!1}
function z(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?hb:ib;this.isPropagationStopped=ib;return this}
n(z.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=hb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=hb)},persist:function(){this.isPersistent=hb},isPersistent:ib,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ib;this._dispatchInstances=this._dispatchListeners=null}});z.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
z.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;jb(c);return c};jb(z);function kb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function lb(a){a instanceof this?void 0:t("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function jb(a){a.eventPool=[];a.getPooled=kb;a.release=lb}var mb=z.extend({data:null}),nb=z.extend({data:null}),ob=[9,13,27,32],pb=Sa&&"CompositionEvent"in window,qb=null;Sa&&"documentMode"in document&&(qb=document.documentMode);
var rb=Sa&&"TextEvent"in window&&!qb,sb=Sa&&(!pb||qb&&8<qb&&11>=qb),tb=String.fromCharCode(32),ub={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vb=!1;
function wb(a,b){switch(a){case "keyup":return-1!==ob.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function xb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var yb=!1;function zb(a,b){switch(a){case "compositionend":return xb(b);case "keypress":if(32!==b.which)return null;vb=!0;return tb;case "textInput":return a=b.data,a===tb&&vb?null:a;default:return null}}
function Ab(a,b){if(yb)return"compositionend"===a||!pb&&wb(a,b)?(a=gb(),fb=eb=cb=null,yb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return sb&&"ko"!==b.locale?null:b.data;default:return null}}
var Bb={eventTypes:ub,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(pb)b:{switch(a){case "compositionstart":e=ub.compositionStart;break b;case "compositionend":e=ub.compositionEnd;break b;case "compositionupdate":e=ub.compositionUpdate;break b}e=void 0}else yb?wb(a,c)&&(e=ub.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=ub.compositionStart);e?(sb&&"ko"!==c.locale&&(yb||e!==ub.compositionStart?e===ub.compositionEnd&&yb&&(f=gb()):(cb=d,eb="value"in cb?cb.value:cb.textContent,yb=
!0)),e=mb.getPooled(e,b,c,d),f?e.data=f:(f=xb(c),null!==f&&(e.data=f)),Ra(e),f=e):f=null;(a=rb?zb(a,c):Ab(a,c))?(b=nb.getPooled(ub.beforeInput,b,c,d),b.data=a,Ra(b)):b=null;return null===f?b:null===b?f:[f,b]}},Cb=null,Db=null,Eb=null;function Hb(a){if(a=va(a)){"function"!==typeof Cb?t("280"):void 0;var b=ua(a.stateNode);Cb(a.stateNode,a.type,b)}}function Ib(a){Db?Eb?Eb.push(a):Eb=[a]:Db=a}function Jb(){if(Db){var a=Db,b=Eb;Eb=Db=null;Hb(a);if(b)for(a=0;a<b.length;a++)Hb(b[a])}}
function Kb(a,b){return a(b)}function Lb(a,b,c){return a(b,c)}function Mb(){}var Nb=!1;function Ob(a,b){if(Nb)return a(b);Nb=!0;try{return Kb(a,b)}finally{if(Nb=!1,null!==Db||null!==Eb)Mb(),Jb()}}var Pb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Pb[a.type]:"textarea"===b?!0:!1}
function Rb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Sb(a){if(!Sa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Tb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ub(a){var b=Tb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Vb(a){a._valueTracker||(a._valueTracker=Ub(a))}function Wb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Tb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var Xb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yb=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,Zb=D?Symbol.for("react.element"):60103,$b=D?Symbol.for("react.portal"):60106,ac=D?Symbol.for("react.fragment"):60107,bc=D?Symbol.for("react.strict_mode"):60108,cc=D?Symbol.for("react.profiler"):60114,dc=D?Symbol.for("react.provider"):60109,ec=D?Symbol.for("react.context"):60110,fc=D?Symbol.for("react.concurrent_mode"):60111,gc=D?Symbol.for("react.forward_ref"):60112,hc=D?Symbol.for("react.suspense"):
60113,ic=D?Symbol.for("react.memo"):60115,jc=D?Symbol.for("react.lazy"):60116,kc="function"===typeof Symbol&&Symbol.iterator;function lc(a){if(null===a||"object"!==typeof a)return null;a=kc&&a[kc]||a["@@iterator"];return"function"===typeof a?a:null}
function mc(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case fc:return"ConcurrentMode";case ac:return"Fragment";case $b:return"Portal";case cc:return"Profiler";case bc:return"StrictMode";case hc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ec:return"Context.Consumer";case dc:return"Context.Provider";case gc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ic:return mc(a.type);case jc:if(a=1===a._status?a._result:null)return mc(a)}return null}function nc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=mc(a.type);c=null;d&&(c=mc(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Yb,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var oc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pc=Object.prototype.hasOwnProperty,qc={},rc={};
function sc(a){if(pc.call(rc,a))return!0;if(pc.call(qc,a))return!1;if(oc.test(a))return rc[a]=!0;qc[a]=!0;return!1}function tc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function uc(a,b,c,d){if(null===b||"undefined"===typeof b||tc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function E(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var F={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){F[a]=new E(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];F[b]=new E(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){F[a]=new E(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){F[a]=new E(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){F[a]=new E(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){F[a]=new E(a,3,!0,a,null)});
["capture","download"].forEach(function(a){F[a]=new E(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){F[a]=new E(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){F[a]=new E(a,5,!1,a.toLowerCase(),null)});var vc=/[\-:]([a-z])/g;function wc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(vc,
wc);F[b]=new E(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(vc,wc);F[b]=new E(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(vc,wc);F[b]=new E(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});F.tabIndex=new E("tabIndex",1,!1,"tabindex",null);
function xc(a,b,c,d){var e=F.hasOwnProperty(b)?F[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(uc(b,c,e,d)&&(c=null),d||null===e?sc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function yc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function zc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ac(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=yc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bc(a,b){b=b.checked;null!=b&&xc(a,"checked",b,!1)}
function Cc(a,b){Bc(a,b);var c=yc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Dc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Dc(a,b.type,yc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ec(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Dc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Fc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Gc(a,b,c){a=z.getPooled(Fc.change,a,b,c);a.type="change";Ib(c);Ra(a);return a}var Jc=null,Kc=null;function Lc(a){Ea(a)}
function Mc(a){var b=Ka(a);if(Wb(b))return a}function Nc(a,b){if("change"===a)return b}var Oc=!1;Sa&&(Oc=Sb("input")&&(!document.documentMode||9<document.documentMode));function Pc(){Jc&&(Jc.detachEvent("onpropertychange",Qc),Kc=Jc=null)}function Qc(a){"value"===a.propertyName&&Mc(Kc)&&(a=Gc(Kc,a,Rb(a)),Ob(Lc,a))}function Rc(a,b,c){"focus"===a?(Pc(),Jc=b,Kc=c,Jc.attachEvent("onpropertychange",Qc)):"blur"===a&&Pc()}function Sc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Mc(Kc)}
function Tc(a,b){if("click"===a)return Mc(b)}function Uc(a,b){if("input"===a||"change"===a)return Mc(b)}
var Vc={eventTypes:Fc,_isInputEventSupported:Oc,extractEvents:function(a,b,c,d){var e=b?Ka(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Nc:Qb(e)?Oc?f=Uc:(f=Sc,g=Rc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Tc);if(f&&(f=f(a,b)))return Gc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Dc(e,"number",e.value)}},Wc=z.extend({view:null,detail:null}),Xc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Xc[a])?!!b[a]:!1}function Zc(){return Yc}
var $c=0,ad=0,bd=!1,cd=!1,dd=Wc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Zc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=$c;$c=a.screenX;return bd?"mousemove"===a.type?a.screenX-b:0:(bd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=ad;ad=a.screenY;return cd?"mousemove"===a.type?a.screenY-b:0:(cd=!0,0)}}),ed=dd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},gd={eventTypes:fd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ia(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=dd,h=fd.mouseLeave,k=fd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=ed,h=fd.pointerLeave,k=fd.pointerEnter,l="pointer";var m=null==f?e:Ka(f);e=null==b?e:Ka(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Ma(g))l++;g=0;for(k=e;k;k=Ma(k))g++;for(;0<l-g;)b=Ma(b),l--;for(;0<g-l;)e=Ma(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Ma(b);e=Ma(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Ma(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Ma(d)}for(d=0;d<b.length;d++)Pa(b[d],"bubbled",a);for(d=f.length;0<d--;)Pa(f[d],"captured",c);return[a,c]}},hd=Object.prototype.hasOwnProperty;function id(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function jd(a,b){if(id(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!hd.call(b,c[d])||!id(a[c[d]],b[c[d]]))return!1;return!0}function kd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function ld(a){2!==kd(a)?t("188"):void 0}
function md(a){var b=a.alternate;if(!b)return b=kd(a),3===b?t("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return ld(e),a;if(g===d)return ld(e),b;g=g.sibling}t("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:t("189")}}c.alternate!==d?t("190"):void 0}3!==c.tag?t("188"):void 0;return c.stateNode.current===c?a:b}function nd(a){a=md(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var od=z.extend({animationName:null,elapsedTime:null,pseudoElement:null}),pd=z.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),qd=Wc.extend({relatedTarget:null});function rd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},td={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ud=Wc.extend({key:function(a){if(a.key){var b=sd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=rd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?td[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Zc,charCode:function(a){return"keypress"===
a.type?rd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?rd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),vd=dd.extend({dataTransfer:null}),wd=Wc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Zc}),xd=z.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),yd=dd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),zd=[["abort","abort"],[Ya,"animationEnd"],[Za,"animationIteration"],[$a,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[ab,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Ad={},Bd={};function Cd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Ad[a]=b;Bd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Cd(a,!0)});zd.forEach(function(a){Cd(a,!1)});
var Dd={eventTypes:Ad,isInteractiveTopLevelEventType:function(a){a=Bd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Bd[a];if(!e)return null;switch(a){case "keypress":if(0===rd(c))return null;case "keydown":case "keyup":a=ud;break;case "blur":case "focus":a=qd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=dd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
vd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=wd;break;case Ya:case Za:case $a:a=od;break;case ab:a=xd;break;case "scroll":a=Wc;break;case "wheel":a=yd;break;case "copy":case "cut":case "paste":a=pd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=ed;break;default:a=z}b=a.getPooled(e,b,c,d);Ra(b);return b}},Ed=Dd.isInteractiveTopLevelEventType,
Fd=[];function Gd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ia(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Rb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<pa.length;h++){var k=pa[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=ya(g,k))}Ea(g)}}var Hd=!0;
function H(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!1)}function Kd(a,b){if(!b)return null;var c=(Ed(a)?Id:Jd).bind(null,a);b.addEventListener(a,c,!0)}function Id(a,b){Lb(Jd,a,b)}
function Jd(a,b){if(Hd){var c=Rb(b);c=Ia(c);null===c||"number"!==typeof c.tag||2===kd(c)||(c=null);if(Fd.length){var d=Fd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Ob(Gd,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>Fd.length&&Fd.push(a)}}}var Ld={},Md=0,Nd="_reactListenersID"+(""+Math.random()).slice(2);
function Od(a){Object.prototype.hasOwnProperty.call(a,Nd)||(a[Nd]=Md++,Ld[a[Nd]]={});return Ld[a[Nd]]}function Pd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Qd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Rd(a,b){var c=Qd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Qd(c)}}function Sd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Sd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Td(){for(var a=window,b=Pd();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=Pd(a.document)}return b}function Ud(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Vd=Sa&&"documentMode"in document&&11>=document.documentMode,Wd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Xd=null,Yd=null,Zd=null,$d=!1;
function ae(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if($d||null==Xd||Xd!==Pd(c))return null;c=Xd;"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Zd&&jd(Zd,c)?null:(Zd=c,a=z.getPooled(Wd.select,Yd,a,b),a.type="select",a.target=Xd,Ra(a),a)}
var be={eventTypes:Wd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Od(e);f=ta.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ka(b):window;switch(a){case "focus":if(Qb(e)||"true"===e.contentEditable)Xd=e,Yd=b,Zd=null;break;case "blur":Zd=Yd=Xd=null;break;case "mousedown":$d=!0;break;case "contextmenu":case "mouseup":case "dragend":return $d=!1,ae(c,d);case "selectionchange":if(Vd)break;
case "keydown":case "keyup":return ae(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ua=La;va=Ja;wa=Ka;Ca.injectEventPluginsByName({SimpleEventPlugin:Dd,EnterLeaveEventPlugin:gd,ChangeEventPlugin:Vc,SelectEventPlugin:be,BeforeInputEventPlugin:Bb});function de(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function ee(a,b){a=n({children:void 0},b);if(b=de(b.children))a.children=b;return a}function fe(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+yc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function ge(a,b){null!=b.dangerouslySetInnerHTML?t("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function he(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?t("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:t("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:yc(c)}}
function ie(a,b){var c=yc(b.value),d=yc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function je(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var ke={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function le(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?le(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ne=void 0,oe=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==ke.svg||"innerHTML"in a)a.innerHTML=b;else{ne=ne||document.createElement("div");ne.innerHTML="<svg>"+b+"</svg>";for(b=ne.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},re=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(a){re.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qe[b]=qe[a]})});function se(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qe.hasOwnProperty(a)&&qe[a]?(""+b).trim():b+"px"}
function te(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=se(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ue=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ve(a,b){b&&(ue[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?t("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?t("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:t("61")),null!=b.style&&"object"!==typeof b.style?t("62",""):void 0)}
function we(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function xe(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Od(a);b=ta[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Kd("scroll",a);break;case "focus":case "blur":Kd("focus",a);Kd("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Sb(e)&&Kd(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===bb.indexOf(e)&&H(e,a)}c[e]=!0}}}function ye(){}var ze=null,Ae=null;
function Be(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function Ce(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var De="function"===typeof setTimeout?setTimeout:void 0,Ee="function"===typeof clearTimeout?clearTimeout:void 0;
function Fe(a,b,c,d,e){a[Ha]=e;"input"===c&&"radio"===e.type&&null!=e.name&&Bc(a,e);we(c,d);d=we(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?te(a,h):"dangerouslySetInnerHTML"===g?oe(a,h):"children"===g?pe(a,h):xc(a,g,h,d)}switch(c){case "input":Cc(a,e);break;case "textarea":ie(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?fe(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?fe(a,!!e.multiple,e.defaultValue,
!0):fe(a,!!e.multiple,e.multiple?[]:"",!1))}}function Ge(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function He(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Ie=[],Je=-1;function I(a){0>Je||(a.current=Ie[Je],Ie[Je]=null,Je--)}function J(a,b){Je++;Ie[Je]=a.current;a.current=b}var Ke={},K={current:Ke},L={current:!1},Le=Ke;
function Me(a,b){var c=a.type.contextTypes;if(!c)return Ke;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ne(a){I(L,a);I(K,a)}function Oe(a){I(L,a);I(K,a)}
function Pe(a,b,c){K.current!==Ke?t("168"):void 0;J(K,b,a);J(L,c,a)}function Qe(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:t("108",mc(b)||"Unknown",e);return n({},c,d)}function Re(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Ke;Le=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Se(a,b,c){var d=a.stateNode;d?void 0:t("169");c?(b=Qe(a,b,Le),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Te=null,Ue=null;function Ve(a){return function(b){try{return a(b)}catch(c){}}}
function We(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Te=Ve(function(a){return b.onCommitFiberRoot(c,a)});Ue=Ve(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Xe(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function N(a,b,c,d){return new Xe(a,b,c,d)}
function Ye(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ze(a){if("function"===typeof a)return Ye(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gc)return 11;if(a===ic)return 14}return 2}
function $e(a,b){var c=a.alternate;null===c?(c=N(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function af(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ye(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ac:return bf(c.children,e,f,b);case fc:return cf(c,e|3,f,b);case bc:return cf(c,e|2,f,b);case cc:return a=N(12,c,b,e|4),a.elementType=cc,a.type=cc,a.expirationTime=f,a;case hc:return a=N(13,c,b,e),a.elementType=hc,a.type=hc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case dc:g=10;break a;case ec:g=9;break a;case gc:g=11;break a;case ic:g=
14;break a;case jc:g=16;d=null;break a}t("130",null==a?a:typeof a,"")}b=N(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function bf(a,b,c,d){a=N(7,a,d,b);a.expirationTime=c;return a}function cf(a,b,c,d){a=N(8,a,d,b);b=0===(b&1)?bc:fc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function df(a,b,c){a=N(6,a,null,b);a.expirationTime=c;return a}
function ef(a,b,c){b=N(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function ff(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);gf(b,a)}
function hf(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);gf(b,a)}function jf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}
function gf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var kf=!1;function lf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function mf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function of(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=lf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=lf(a.memoizedState),e=c.updateQueue=lf(c.memoizedState)):d=a.updateQueue=mf(e):null===e&&(e=c.updateQueue=mf(d));null===e||d===e?of(d,b):null===d.lastUpdate||null===e.lastUpdate?(of(d,b),of(e,b)):(of(d,b),e.lastUpdate=b)}
function qf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=lf(a.memoizedState):rf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function rf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=mf(b));return b}
function sf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:kf=!0}return d}
function tf(a,b,c,d,e){kf=!1;b=rf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(l=sf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var r=k.expirationTime;r<e?(null===m&&(m=k,null===g&&(f=l)),h<r&&(h=r)):(l=sf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=
32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function uf(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);vf(b.firstEffect,c);b.firstEffect=b.lastEffect=null;vf(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function vf(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?t("191",c):void 0;c.call(d)}a=a.nextEffect}}
function wf(a,b){return{value:a,source:b,stack:nc(b)}}var xf={current:null},yf=null,zf=null,Af=null;function Bf(a,b){var c=a.type._context;J(xf,c._currentValue,a);c._currentValue=b}function Cf(a){var b=xf.current;I(xf,a);a.type._context._currentValue=b}function Df(a){yf=a;Af=zf=null;a.firstContextDependency=null}
function Ef(a,b){if(Af!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Af=a,b=1073741823;b={context:a,observedBits:b,next:null};null===zf?(null===yf?t("293"):void 0,yf.firstContextDependency=zf=b):zf=zf.next=b}return a._currentValue}var Ff={},O={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?t("174"):void 0;return a}
function Jf(a,b){J(Hf,b,a);J(Gf,a,a);J(O,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:me(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=me(b,c)}I(O,a);J(O,b,a)}function Kf(a){I(O,a);I(Gf,a);I(Hf,a)}function Lf(a){If(Hf.current);var b=If(O.current);var c=me(b,a.type);b!==c&&(J(Gf,a,a),J(O,c,a))}function Mf(a){Gf.current===a&&(I(O,a),I(Gf,a))}
function P(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function Nf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var Of=Xb.ReactCurrentOwner,Pf=(new aa.Component).refs;
function Qf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Vf={isMounted:function(a){return(a=a._reactInternalFiber)?2===kd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Rf();d=Sf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Tf();pf(a,e);Uf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Rf();d=Sf(d,a);var e=nf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Tf();pf(a,e);Uf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Rf();c=Sf(c,a);var d=nf(c);d.tag=
2;void 0!==b&&null!==b&&(d.callback=b);Tf();pf(a,d);Uf(a,c)}};function Wf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!jd(c,d)||!jd(e,f):!0}
function Xf(a,b,c){var d=!1,e=Ke;var f=b.contextType;"object"===typeof f&&null!==f?f=Of.currentDispatcher.readContext(f):(e=M(b)?Le:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Me(a,e):Ke);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Vf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Zf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Vf.enqueueReplaceState(b,b.state,null)}
function $f(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Pf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Of.currentDispatcher.readContext(f):(f=M(b)?Le:K.current,e.context=Me(a,f));f=a.updateQueue;null!==f&&(tf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Qf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Vf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(tf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var ag=Array.isArray;
function bg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?t("289"):void 0,d=c.stateNode);d?void 0:t("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Pf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?t("284"):void 0;c._owner?void 0:t("290",a)}return a}
function cg(a,b){"textarea"!==a.type&&t("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function dg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=$e(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=df(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=bg(a,b,c),d.return=a,d;d=af(c.type,c.key,c.props,null,a.mode,d);d.ref=bg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=ef(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,g){if(null===b||7!==b.tag)return b=bf(c,a.mode,d,g),b.return=a,b;b=e(b,c,d);b.return=a;return b}function r(a,b,c){if("string"===typeof b||"number"===typeof b)return b=df(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Zb:return c=af(b.type,b.key,b.props,null,a.mode,c),c.ref=bg(a,null,b),c.return=a,c;case $b:return b=ef(b,a.mode,c),b.return=a,b}if(ag(b)||
lc(b))return b=bf(b,a.mode,c,null),b.return=a,b;cg(a,b)}return null}function w(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Zb:return c.key===e?c.type===ac?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $b:return c.key===e?l(a,b,c,d):null}if(ag(c)||lc(c))return null!==e?null:m(a,b,c,d,null);cg(a,c)}return null}function y(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Zb:return a=a.get(null===d.key?c:d.key)||null,d.type===ac?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $b:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(ag(d)||lc(d))return a=a.get(c)||null,m(b,a,d,e,null);cg(b,d)}return null}function B(e,g,h,k){for(var l=null,q=null,m=g,u=g=0,p=null;null!==m&&u<h.length;u++){m.index>u?(p=m,m=null):p=m.sibling;var v=w(e,m,h[u],k);if(null===v){null===m&&(m=p);break}a&&
m&&null===v.alternate&&b(e,m);g=f(v,g,u);null===q?l=v:q.sibling=v;q=v;m=p}if(u===h.length)return c(e,m),l;if(null===m){for(;u<h.length;u++)if(m=r(e,h[u],k))g=f(m,g,u),null===q?l=m:q.sibling=m,q=m;return l}for(m=d(e,m);u<h.length;u++)if(p=y(m,e,u,h[u],k))a&&null!==p.alternate&&m.delete(null===p.key?u:p.key),g=f(p,g,u),null===q?l=p:q.sibling=p,q=p;a&&m.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=lc(h);"function"!==typeof l?t("150"):void 0;h=l.call(h);null==h?t("151"):void 0;
for(var m=l=null,q=g,u=g=0,p=null,v=h.next();null!==q&&!v.done;u++,v=h.next()){q.index>u?(p=q,q=null):p=q.sibling;var A=w(e,q,v.value,k);if(null===A){q||(q=p);break}a&&q&&null===A.alternate&&b(e,q);g=f(A,g,u);null===m?l=A:m.sibling=A;m=A;q=p}if(v.done)return c(e,q),l;if(null===q){for(;!v.done;u++,v=h.next())v=r(e,v.value,k),null!==v&&(g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);return l}for(q=d(e,q);!v.done;u++,v=h.next())v=y(q,e,u,v.value,k),null!==v&&(a&&null!==v.alternate&&q.delete(null===v.key?u:
v.key),g=f(v,g,u),null===m?l=v:m.sibling=v,m=v);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ac&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Zb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ac:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ac?f.props.children:f.props,h);d.ref=bg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===ac?(d=bf(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=af(f.type,f.key,f.props,null,a.mode,h),h.ref=bg(a,d,f),h.return=a,a=h)}return g(a);case $b:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=ef(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=df(f,a.mode,h),d.return=a,a=d),g(a);if(ag(f))return B(a,d,f,h);if(lc(f))return R(a,d,f,h);l&&cg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,t("152",h.displayName||h.name||"Component")}return c(a,d)}}var eg=dg(!0),fg=dg(!1),gg=null,hg=null,ig=!1;
function jg(a,b){var c=N(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function kg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function lg(a){if(ig){var b=hg;if(b){var c=b;if(!kg(a,b)){b=Ge(c);if(!b||!kg(a,b)){a.effectTag|=2;ig=!1;gg=a;return}jg(gg,c)}gg=a;hg=He(b)}else a.effectTag|=2,ig=!1,gg=a}}function mg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;gg=a}function ng(a){if(a!==gg)return!1;if(!ig)return mg(a),ig=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Ce(b,a.memoizedProps))for(b=hg;b;)jg(a,b),b=Ge(b);mg(a);hg=gg?Ge(a.stateNode):null;return!0}function og(){hg=gg=null;ig=!1}var pg=Xb.ReactCurrentOwner;
function Q(a,b,c,d){b.child=null===a?fg(b,null,c,d):eg(b,a.child,c,d)}function qg(a,b,c,d,e){c=c.render;var f=b.ref;Df(b,e);d=c(d,f);b.effectTag|=1;Q(a,b,d,e);return b.child}
function rg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ye(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,sg(a,b,g,d,e,f);a=af(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:jd,c(e,d)&&a.ref===b.ref))return tg(a,b,f);b.effectTag|=1;a=$e(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function sg(a,b,c,d,e,f){return null!==a&&e<f&&jd(a.memoizedProps,d)&&a.ref===b.ref?tg(a,b,f):ug(a,b,c,d,f)}function vg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function ug(a,b,c,d,e){var f=M(c)?Le:K.current;f=Me(b,f);Df(b,e);c=c(d,f);b.effectTag|=1;Q(a,b,c,e);return b.child}
function wg(a,b,c,d,e){if(M(c)){var f=!0;Re(b)}else f=!1;Df(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Xf(b,c,d,e),$f(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Of.currentDispatcher.readContext(l):(l=M(c)?Le:K.current,l=Me(b,l));var m=c.getDerivedStateFromProps,r="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;r||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Zf(b,g,d,l);kf=!1;var w=b.memoizedState;k=g.state=w;var y=b.updateQueue;null!==y&&(tf(b,y,d,g,e),k=b.memoizedState);h!==d||w!==k||L.current||kf?("function"===typeof m&&(Qf(b,c,m,d),k=b.memoizedState),(h=kf||Wf(b,c,h,d,w,k,l))?(r||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:P(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=Of.currentDispatcher.readContext(l):(l=M(c)?Le:K.current,l=Me(b,l)),m=c.getDerivedStateFromProps,
(r="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Zf(b,g,d,l),kf=!1,k=b.memoizedState,w=g.state=k,y=b.updateQueue,null!==y&&(tf(b,y,d,g,e),w=b.memoizedState),h!==d||k!==w||L.current||kf?("function"===typeof m&&(Qf(b,c,m,d),w=b.memoizedState),(m=kf||Wf(b,c,h,d,k,w,l))?(r||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,w,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,w,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=w),g.props=d,g.state=w,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return xg(a,b,c,d,f,e)}
function xg(a,b,c,d,e,f){vg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Se(b,c,!1),tg(a,b,f);d=b.stateNode;pg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=eg(b,a.child,null,f),b.child=eg(b,null,h,f)):Q(a,b,h,f);b.memoizedState=d.state;e&&Se(b,c,!0);return b.child}function yg(a){var b=a.stateNode;b.pendingContext?Pe(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Pe(a,b.context,!1);Jf(a,b.containerInfo)}
function zg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=bf(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=bf(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=fg(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=$e(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=$e(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=eg(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=bf(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=bf(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=eg(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function tg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?t("153"):void 0;if(null!==b.child){a=b.child;c=$e(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=$e(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Ag(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!L.current&&d<c){switch(b.tag){case 3:yg(b);og();break;case 5:Lf(b);break;case 1:M(b.type)&&Re(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Bf(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return zg(a,b,c);b=tg(a,b,c);return null!==b?b.sibling:null}}return tg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==
a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Me(b,K.current);Df(b,c);e=d(a,e);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;if(M(d)){var f=!0;Re(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Qf(b,d,g,a);e.updater=Vf;b.stateNode=e;e._reactInternalFiber=b;$f(b,d,a,c);b=xg(null,b,d,!0,f,c)}else b.tag=0,Q(null,b,e,c),b=b.child;
return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=Nf(e);b.type=a;e=b.tag=Ze(a);f=P(a,f);g=void 0;switch(e){case 0:g=ug(null,b,a,f,c);break;case 1:g=wg(null,b,a,f,c);break;case 11:g=qg(null,b,a,f,c);break;case 14:g=rg(null,b,a,P(a.type,f),d,c);break;default:t("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),ug(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),wg(a,b,
d,e,c);case 3:yg(b);d=b.updateQueue;null===d?t("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;tf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)og(),b=tg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)hg=He(b.stateNode.containerInfo),gg=b,e=ig=!0;e?(b.effectTag|=2,b.child=fg(b,null,d,c)):(Q(a,b,d,c),og());b=b.child}return b;case 5:return Lf(b),null===a&&lg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ce(d,e)?g=null:null!==
f&&Ce(d,f)&&(b.effectTag|=16),vg(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=1,b=null):(Q(a,b,g,c),b=b.child),b;case 6:return null===a&&lg(b),null;case 13:return zg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=eg(b,null,d,c):Q(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),qg(a,b,d,e,c);case 7:return Q(a,b,b.pendingProps,c),b.child;case 8:return Q(a,b,b.pendingProps.children,c),b.child;case 12:return Q(a,b,b.pendingProps.children,
c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Bf(b,f);if(null!==g){var h=g.value;f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=tg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&f)){if(1===g.tag){var k=nf(c);k.tag=2;pf(g,k)}g.expirationTime<
c&&(g.expirationTime=c);k=g.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(l.childExpirationTime<c)l.childExpirationTime=c,null!==k&&k.childExpirationTime<c&&(k.childExpirationTime=c);else if(null!==k&&k.childExpirationTime<c)k.childExpirationTime=c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;
if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}Q(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Df(b,c),e=Ef(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,Q(a,b,d,c),b.child;case 14:return e=b.type,f=P(e,b.pendingProps),f=P(e.type,f),rg(a,b,e,f,d,c);case 15:return sg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=
!0,Re(b)):a=!1,Df(b,c),Xf(b,d,e,c),$f(b,d,e,c),xg(null,b,d,!0,a,c);default:t("156")}}function Bg(a){a.effectTag|=4}var Cg=void 0,Gg=void 0,Hg=void 0,Ig=void 0;Cg=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Gg=function(){};
Hg=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(O.current);a=null;switch(c){case "input":f=zc(g,f);d=zc(g,d);a=[];break;case "option":f=ee(g,f);d=ee(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=ge(g,f);d=ge(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ye)}ve(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(sa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(sa.hasOwnProperty(c)?(null!=l&&xe(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Bg(b)}};Ig=function(a,b,c,d){c!==d&&Bg(b)};
var Jg="function"===typeof WeakSet?WeakSet:Set;function Kg(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=nc(c));null!==c&&mc(c.type);b=b.value;null!==a&&1===a.tag&&mc(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Lg(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Mg(a,c)}else b.current=null}
function Ng(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=se("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function Og(a){"function"===typeof Ue&&Ue(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(null!==d){var e=a;try{d()}catch(f){Mg(e,f)}}c=c.next}while(c!==b)}break;case 1:Lg(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){Mg(a,f)}break;case 5:Lg(a);break;case 4:Pg(a)}}
function Qg(a){return 5===a.tag||3===a.tag||4===a.tag}
function Rg(a){a:{for(var b=a.return;null!==b;){if(Qg(b)){var c=b;break a}b=b.return}t("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:t("161")}c.effectTag&16&&(pe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Qg(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=ye)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Pg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?t("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Og(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):Og(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Sg(a,b){switch(b.tag){case 0:case 11:case 14:case 15:break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Fe(c,f,e,a,d,b)}break;case 6:null===b.stateNode?t("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=Rf()));null!==a&&Ng(a,d);c=b.updateQueue;
if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new Jg);c.forEach(function(a){var c=Tg.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:t("163")}}var Ug="function"===typeof WeakMap?WeakMap:Map;function Vg(a,b,c){c=nf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Wg(d);Kg(a,b)};return c}
function Xg(a,b,c){c=nf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Yg?Yg=new Set([this]):Yg.add(this));var c=b.value,e=b.stack;Kg(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Zg(a){switch(a.tag){case 1:M(a.type)&&Ne(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Oe(a),b=a.effectTag,0!==(b&64)?t("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 4:return Kf(a),null;case 10:return Cf(a),null;default:return null}}
var $g={readContext:Ef},ah=Xb.ReactCurrentOwner,bh=1073741822,ch=0,dh=!1,S=null,T=null,U=0,eh=-1,fh=!1,V=null,gh=!1,hh=null,ih=null,Yg=null;function jh(){if(null!==S)for(var a=S.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ne(b);break;case 3:Kf(b);Oe(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Cf(b)}a=a.return}T=null;U=0;eh=-1;fh=!1;S=null}function Tf(){null!==ih&&(ba.unstable_cancelCallback(hh),ih())}
function kh(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){S=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&Ne(b);break;case 3:Kf(b);Oe(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)ng(b),b.effectTag&=-3;Gg(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)Hg(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var k=If(O.current);if(ng(b)){g=b;e=g.stateNode;var l=g.type,m=g.memoizedProps,r=h;e[Ga]=g;e[Ha]=m;f=void 0;h=l;switch(h){case "iframe":case "object":H("load",e);break;case "video":case "audio":for(l=0;l<bb.length;l++)H(bb[l],e);break;case "source":H("error",e);break;case "img":case "image":case "link":H("error",e);H("load",e);break;case "form":H("reset",e);H("submit",e);break;case "details":H("toggle",e);break;case "input":Ac(e,m);H("invalid",e);xe(r,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};H("invalid",e);xe(r,"onChange");break;case "textarea":he(e,m),H("invalid",e),xe(r,"onChange")}ve(h,m);l=null;for(f in m)m.hasOwnProperty(f)&&(k=m[f],"children"===f?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):sa.hasOwnProperty(f)&&null!=k&&xe(r,f));switch(h){case "input":Vb(e);Ec(e,m,!0);break;case "textarea":Vb(e);je(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=ye)}f=l;g.updateQueue=f;g=null!==f?!0:!1;g&&Bg(b)}else{m=b;e=f;r=g;l=9===h.nodeType?h:h.ownerDocument;k===ke.html&&(k=le(e));k===ke.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof r.is?l=l.createElement(e,{is:r.is}):(l=l.createElement(e),"select"===e&&r.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ga]=m;e[Ha]=g;Cg(e,b,!1,!1);r=e;l=f;m=g;var w=h,y=we(l,m);switch(l){case "iframe":case "object":H("load",
r);h=m;break;case "video":case "audio":for(h=0;h<bb.length;h++)H(bb[h],r);h=m;break;case "source":H("error",r);h=m;break;case "img":case "image":case "link":H("error",r);H("load",r);h=m;break;case "form":H("reset",r);H("submit",r);h=m;break;case "details":H("toggle",r);h=m;break;case "input":Ac(r,m);h=zc(r,m);H("invalid",r);xe(w,"onChange");break;case "option":h=ee(r,m);break;case "select":r._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});H("invalid",r);xe(w,"onChange");break;case "textarea":he(r,
m);h=ge(r,m);H("invalid",r);xe(w,"onChange");break;default:h=m}ve(l,h);k=void 0;var B=l,R=r,v=h;for(k in v)if(v.hasOwnProperty(k)){var q=v[k];"style"===k?te(R,q):"dangerouslySetInnerHTML"===k?(q=q?q.__html:void 0,null!=q&&oe(R,q)):"children"===k?"string"===typeof q?("textarea"!==B||""!==q)&&pe(R,q):"number"===typeof q&&pe(R,""+q):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(sa.hasOwnProperty(k)?null!=q&&xe(w,k):null!=q&&xc(R,k,q,y))}switch(l){case "input":Vb(r);
Ec(r,m,!1);break;case "textarea":Vb(r);je(r,m);break;case "option":null!=m.value&&r.setAttribute("value",""+yc(m.value));break;case "select":h=r;h.multiple=!!m.multiple;r=m.value;null!=r?fe(h,!!m.multiple,r,!1):null!=m.defaultValue&&fe(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(r.onclick=ye)}(g=Be(f,g))&&Bg(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?t("166"):void 0;break;case 6:e&&null!=b.stateNode?Ig(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?t("166"):void 0),e=If(Hf.current),If(O.current),ng(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Ga]=g,(g=f.nodeValue!==e)&&Bg(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Ga]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;S=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g!==f||0===(b.effectTag&1)&&g)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);Gg(b);break;case 10:Cf(b);break;case 9:break;case 14:break;case 17:M(b.type)&&Ne(b);break;default:t("156")}S=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==S)return S;null!==c&&0===(c.effectTag&1024)&&(null===
c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Zg(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function lh(a){var b=Ag(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=kh(a));ah.current=null;return b}
function mh(a,b){dh?t("243"):void 0;Tf();dh=!0;ah.currentDispatcher=$g;var c=a.nextExpirationTimeToWorkOn;if(c!==U||a!==T||null===S)jh(),T=a,U=c,S=$e(T.current,null,U),a.pendingCommitExpirationTime=0;var d=!1;do{try{if(b)for(;null!==S&&!nh();)S=lh(S);else for(;null!==S;)S=lh(S)}catch(B){if(Af=zf=yf=null,null===S)d=!0,Wg(B);else{null===S?t("271"):void 0;var e=S,f=e.return;if(null===f)d=!0,Wg(B);else{a:{var g=a,h=f,k=e,l=B;f=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==l&&"object"===
typeof l&&"function"===typeof l.then){var m=l;l=h;var r=-1,w=-1;do{if(13===l.tag){var y=l.alternate;if(null!==y&&(y=y.memoizedState,null!==y)){w=10*(1073741822-y.timedOutAt);break}y=l.pendingProps.maxDuration;if("number"===typeof y)if(0>=y)r=0;else if(-1===r||y<r)r=y}l=l.return}while(null!==l);l=h;do{if(y=13===l.tag)y=void 0===l.memoizedProps.fallback?!1:null===l.memoizedState;if(y){h=l.updateQueue;null===h?l.updateQueue=new Set([m]):h.add(m);if(0===(l.mode&1)){l.effectTag|=64;k.effectTag&=-1957;
1===k.tag&&(null===k.alternate?k.tag=17:(f=nf(1073741823),f.tag=2,pf(k,f)));k.expirationTime=1073741823;break a}k=g.pingCache;null===k?(k=g.pingCache=new Ug,h=new Set,k.set(m,h)):(h=k.get(m),void 0===h&&(h=new Set,k.set(m,h)));h.has(f)||(h.add(f),k=oh.bind(null,g,m,f),m.then(k,k));-1===r?g=1073741823:(-1===w&&(w=10*(1073741822-jf(g,f))-5E3),g=w+r);0<=g&&eh<g&&(eh=g);l.effectTag|=2048;l.expirationTime=f;break a}l=l.return}while(null!==l);l=Error((mc(k.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
nc(k))}fh=!0;l=wf(l,k);g=h;do{switch(g.tag){case 3:g.effectTag|=2048;g.expirationTime=f;f=Vg(g,l,f);qf(g,f);break a;case 1:if(m=l,r=g.type,w=g.stateNode,0===(g.effectTag&64)&&("function"===typeof r.getDerivedStateFromError||null!==w&&"function"===typeof w.componentDidCatch&&(null===Yg||!Yg.has(w)))){g.effectTag|=2048;g.expirationTime=f;f=Xg(g,m,f);qf(g,f);break a}}g=g.return}while(null!==g)}S=kh(e);continue}}}break}while(1);dh=!1;Af=zf=yf=ah.currentDispatcher=null;if(d)T=null,a.finishedWork=null;
else if(null!==S)a.finishedWork=null;else{d=a.current.alternate;null===d?t("281"):void 0;T=null;if(fh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<c||0!==f&&f<c||0!==g&&g<c){hf(a,c);ph(a,d,c,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;c=a.nextExpirationTimeToWorkOn=c;b=a.expirationTime=1073741823;ph(a,d,c,b,-1);return}}b&&-1!==eh?(hf(a,c),b=10*(1073741822-jf(a,c)),b<eh&&(eh=b),b=10*(1073741822-Rf()),b=eh-b,ph(a,d,c,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=
c,a.finishedWork=d)}}function Mg(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Yg||!Yg.has(d))){a=wf(b,a);a=Xg(c,a,1073741823);pf(c,a);Uf(c,1073741823);return}break;case 3:a=wf(b,a);a=Vg(c,a,1073741823);pf(c,a);Uf(c,1073741823);return}c=c.return}3===a.tag&&(c=wf(b,a),c=Vg(a,c,1073741823),pf(a,c),Uf(a,1073741823))}
function Sf(a,b){0!==ch?a=ch:dh?a=gh?1073741823:U:b.mode&1?(a=qh?1073741822-10*(((1073741822-a+15)/10|0)+1):1073741822-25*(((1073741822-a+500)/25|0)+1),null!==T&&a===U&&--a):a=1073741823;qh&&(0===rh||a<rh)&&(rh=a);return a}function oh(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==T&&U===c)T=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;gf(c,a);c=a.expirationTime;0!==c&&sh(a,c)}}
function Tg(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=Rf();b=Sf(b,a);a=th(a,b);null!==a&&(ff(a,b),b=a.expirationTime,0!==b&&sh(a,b))}
function th(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function Uf(a,b){a=th(a,b);null!==a&&(!dh&&0!==U&&b>U&&jh(),ff(a,b),dh&&!gh&&T===a||sh(a,a.expirationTime),uh>vh&&(uh=0,t("185")))}function wh(a,b,c,d,e){var f=ch;ch=1073741823;try{return a(b,c,d,e)}finally{ch=f}}var xh=null,W=null,yh=0,zh=void 0,X=!1,Ah=null,Y=0,rh=0,Bh=!1,Ch=null,Z=!1,Dh=!1,qh=!1,Eh=null,Fh=ba.unstable_now(),Gh=1073741822-(Fh/10|0),Hh=Gh,vh=50,uh=0,Ih=null;function Jh(){Gh=1073741822-((ba.unstable_now()-Fh)/10|0)}
function Kh(a,b){if(0!==yh){if(b<yh)return;null!==zh&&ba.unstable_cancelCallback(zh)}yh=b;a=ba.unstable_now()-Fh;zh=ba.unstable_scheduleCallback(Lh,{timeout:10*(1073741822-b)-a})}function ph(a,b,c,d,e){a.expirationTime=d;0!==e||nh()?0<e&&(a.timeoutHandle=De(Mh.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Mh(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;Jh();Hh=Gh;Nh(a,c)}function Rf(){if(X)return Hh;Oh();if(0===Y||1===Y)Jh(),Hh=Gh;return Hh}
function sh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===W?(xh=W=a,a.nextScheduledRoot=a):(W=W.nextScheduledRoot=a,W.nextScheduledRoot=xh)):b>a.expirationTime&&(a.expirationTime=b);X||(Z?Dh&&(Ah=a,Y=1073741823,Ph(a,1073741823,!1)):1073741823===b?Qh(1073741823,!1):Kh(a,b))}
function Oh(){var a=0,b=null;if(null!==W)for(var c=W,d=xh;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===W?t("244"):void 0;if(d===d.nextScheduledRoot){xh=W=d.nextScheduledRoot=null;break}else if(d===xh)xh=e=d.nextScheduledRoot,W.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===W){W=c;W.nextScheduledRoot=xh;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===W)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}Ah=b;Y=a}var Rh=!1;function nh(){return Rh?!0:ba.unstable_shouldYield()?Rh=!0:!1}function Lh(){try{if(!nh()&&null!==xh){Jh();var a=xh;do{var b=a.expirationTime;0!==b&&Gh<=b&&(a.nextExpirationTimeToWorkOn=Gh);a=a.nextScheduledRoot}while(a!==xh)}Qh(0,!0)}finally{Rh=!1}}
function Qh(a,b){Oh();if(b)for(Jh(),Hh=Gh;null!==Ah&&0!==Y&&a<=Y&&!(Rh&&Gh>Y);)Ph(Ah,Y,Gh>Y),Oh(),Jh(),Hh=Gh;else for(;null!==Ah&&0!==Y&&a<=Y;)Ph(Ah,Y,!1),Oh();b&&(yh=0,zh=null);0!==Y&&Kh(Ah,Y);uh=0;Ih=null;if(null!==Eh)for(a=Eh,Eh=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Bh||(Bh=!0,Ch=d)}}if(Bh)throw a=Ch,Ch=null,Bh=!1,a;}function Nh(a,b){X?t("253"):void 0;Ah=a;Y=b;Ph(a,b,!1);Qh(1073741823,!1)}
function Ph(a,b,c){X?t("245"):void 0;X=!0;if(c){var d=a.finishedWork;null!==d?Sh(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),mh(a,c),d=a.finishedWork,null!==d&&(nh()?a.finishedWork=d:Sh(a,d,b)))}else d=a.finishedWork,null!==d?Sh(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Ee(d)),mh(a,c),d=a.finishedWork,null!==d&&Sh(a,d,b));X=!1}
function Sh(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===Eh?Eh=[d]:Eh.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===Ih?uh++:(Ih=a,uh=0);gh=dh=!0;a.current===b?t("177"):void 0;c=a.pendingCommitExpirationTime;0===c?t("261"):void 0;a.pendingCommitExpirationTime=0;d=b.expirationTime;var e=b.childExpirationTime;d=e>d?e:d;a.didError=!1;0===d?(a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=
0):(d<a.latestPingedTime&&(a.latestPingedTime=0),e=a.latestPendingTime,0!==e&&(e>d?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>d&&(a.earliestPendingTime=a.latestPendingTime)),e=a.earliestSuspendedTime,0===e?ff(a,d):d<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,ff(a,d)):d>e&&ff(a,d));gf(0,a);ah.current=null;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ze=Hd;e=Td();if(Ud(e)){if("selectionStart"in
e)var f={start:e.selectionStart,end:e.selectionEnd};else a:{f=(f=e.ownerDocument)&&f.defaultView||window;var g=f.getSelection&&f.getSelection();if(g&&0!==g.rangeCount){f=g.anchorNode;var h=g.anchorOffset,k=g.focusNode;g=g.focusOffset;try{f.nodeType,k.nodeType}catch(db){f=null;break a}var l=0,m=-1,r=-1,w=0,y=0,B=e,R=null;b:for(;;){for(var v;;){B!==f||0!==h&&3!==B.nodeType||(m=l+h);B!==k||0!==g&&3!==B.nodeType||(r=l+g);3===B.nodeType&&(l+=B.nodeValue.length);if(null===(v=B.firstChild))break;R=B;B=v}for(;;){if(B===
e)break b;R===f&&++w===h&&(m=l);R===k&&++y===g&&(r=l);if(null!==(v=B.nextSibling))break;B=R;R=B.parentNode}B=v}f=-1===m||-1===r?null:{start:m,end:r}}else f=null}f=f||{start:0,end:0}}else f=null;Ae={focusedElem:e,selectionRange:f};Hd=!1;for(V=d;null!==V;){e=!1;f=void 0;try{for(;null!==V;){if(V.effectTag&256)a:{var q=V.alternate;h=V;switch(h.tag){case 0:case 11:case 15:break a;case 1:if(h.effectTag&256&&null!==q){var u=q.memoizedProps,A=q.memoizedState,Yf=h.stateNode,Vh=Yf.getSnapshotBeforeUpdate(h.elementType===
h.type?u:P(h.type,u),A);Yf.__reactInternalSnapshotBeforeUpdate=Vh}break a;case 3:case 5:case 6:case 4:case 17:break a;default:t("163")}}V=V.nextEffect}}catch(db){e=!0,f=db}e&&(null===V?t("178"):void 0,Mg(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){q=!1;u=void 0;try{for(;null!==V;){var x=V.effectTag;x&16&&pe(V.stateNode,"");if(x&128){var C=V.alternate;if(null!==C){var p=C.ref;null!==p&&("function"===typeof p?p(null):p.current=null)}}switch(x&14){case 2:Rg(V);V.effectTag&=-3;break;case 6:Rg(V);
V.effectTag&=-3;Sg(V.alternate,V);break;case 4:Sg(V.alternate,V);break;case 8:A=V;Pg(A);A.return=null;A.child=null;A.memoizedState=null;A.updateQueue=null;var G=A.alternate;null!==G&&(G.return=null,G.child=null,G.memoizedState=null,G.updateQueue=null)}V=V.nextEffect}}catch(db){q=!0,u=db}q&&(null===V?t("178"):void 0,Mg(V,u),null!==V&&(V=V.nextEffect))}p=Ae;C=Td();x=p.focusedElem;q=p.selectionRange;if(C!==x&&x&&x.ownerDocument&&Sd(x.ownerDocument.documentElement,x)){null!==q&&Ud(x)&&(C=q.start,p=q.end,
void 0===p&&(p=C),"selectionStart"in x?(x.selectionStart=C,x.selectionEnd=Math.min(p,x.value.length)):(p=(C=x.ownerDocument||document)&&C.defaultView||window,p.getSelection&&(p=p.getSelection(),u=x.textContent.length,G=Math.min(q.start,u),q=void 0===q.end?G:Math.min(q.end,u),!p.extend&&G>q&&(u=q,q=G,G=u),u=Rd(x,G),A=Rd(x,q),u&&A&&(1!==p.rangeCount||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==A.node||p.focusOffset!==A.offset)&&(C=C.createRange(),C.setStart(u.node,u.offset),p.removeAllRanges(),
G>q?(p.addRange(C),p.extend(A.node,A.offset)):(C.setEnd(A.node,A.offset),p.addRange(C))))));C=[];for(p=x;p=p.parentNode;)1===p.nodeType&&C.push({element:p,left:p.scrollLeft,top:p.scrollTop});"function"===typeof x.focus&&x.focus();for(x=0;x<C.length;x++)p=C[x],p.element.scrollLeft=p.left,p.element.scrollTop=p.top}Ae=null;Hd=!!ze;ze=null;a.current=b;for(V=d;null!==V;){d=!1;x=void 0;try{for(C=c;null!==V;){var Fb=V.effectTag;if(Fb&36){var Gb=V.alternate;p=V;G=C;switch(p.tag){case 0:case 11:case 15:break;
case 1:var Hc=p.stateNode;if(p.effectTag&4)if(null===Gb)Hc.componentDidMount();else{var ii=p.elementType===p.type?Gb.memoizedProps:P(p.type,Gb.memoizedProps);Hc.componentDidUpdate(ii,Gb.memoizedState,Hc.__reactInternalSnapshotBeforeUpdate)}var Dg=p.updateQueue;null!==Dg&&uf(p,Dg,Hc,G);break;case 3:var Eg=p.updateQueue;if(null!==Eg){q=null;if(null!==p.child)switch(p.child.tag){case 5:q=p.child.stateNode;break;case 1:q=p.child.stateNode}uf(p,Eg,q,G)}break;case 5:var ji=p.stateNode;null===Gb&&p.effectTag&
4&&Be(p.type,p.memoizedProps)&&ji.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:t("163")}}if(Fb&128){var Ic=V.ref;if(null!==Ic){var Fg=V.stateNode;switch(V.tag){case 5:var ce=Fg;break;default:ce=Fg}"function"===typeof Ic?Ic(ce):Ic.current=ce}}V=V.nextEffect}}catch(db){d=!0,x=db}d&&(null===V?t("178"):void 0,Mg(V,x),null!==V&&(V=V.nextEffect))}dh=gh=!1;"function"===typeof Te&&Te(b.stateNode);Fb=b.expirationTime;b=b.childExpirationTime;b=b>Fb?b:Fb;0===b&&(Yg=
null);a.expirationTime=b;a.finishedWork=null}function Wg(a){null===Ah?t("246"):void 0;Ah.expirationTime=0;Bh||(Bh=!0,Ch=a)}function Th(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||X||Qh(1073741823,!1)}}function Uh(a,b){if(Z&&!Dh){Dh=!0;try{return a(b)}finally{Dh=!1}}return a(b)}function Wh(a,b,c){if(qh)return a(b,c);Z||X||0===rh||(Qh(rh,!1),rh=0);var d=qh,e=Z;Z=qh=!0;try{return a(b,c)}finally{qh=d,(Z=e)||X||Qh(1073741823,!1)}}
function Xh(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===kd(c)&&1===c.tag?void 0:t("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);t("171");g=void 0}if(1===c.tag){var h=c.type;if(M(h)){c=Qe(c,h,g);break a}}c=g}else c=Ke;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Tf();pf(f,e);Uf(f,d);return d}function Yh(a,b,c,d){var e=b.current,f=Rf();e=Sf(f,e);return Xh(a,b,c,e,d)}function Zh(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function $h(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$b,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Cb=function(a,b,c){switch(b){case "input":Cc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=La(d);e?void 0:t("90");Wb(d);Cc(d,e)}}}break;case "textarea":ie(a,c);break;case "select":b=c.value,null!=b&&fe(a,!!c.multiple,b,!1)}};
function ai(a){var b=1073741822-25*(((1073741822-Rf()+500)/25|0)+1);b>=bh&&(b=bh-1);this._expirationTime=bh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}ai.prototype.render=function(a){this._defer?void 0:t("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new bi;Xh(a,b,null,c,d._onCommit);return d};
ai.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
ai.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:t("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?t("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Nh(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};ai.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function bi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}bi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
bi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?t("191",c):void 0;c()}}};
function ci(a,b,c){b=N(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
ci.prototype.render=function(a,b){var c=this._internalRoot,d=new bi;b=void 0===b?null:b;null!==b&&d.then(b);Yh(a,c,null,d._onCommit);return d};ci.prototype.unmount=function(a){var b=this._internalRoot,c=new bi;a=void 0===a?null:a;null!==a&&c.then(a);Yh(null,b,null,c._onCommit);return c};ci.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new bi;c=void 0===c?null:c;null!==c&&e.then(c);Yh(b,d,a,e._onCommit);return e};
ci.prototype.createBatch=function(){var a=new ai(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function di(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Kb=Th;Lb=Wh;Mb=function(){X||0===rh||(Qh(rh,!1),rh=0)};
function ei(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ci(a,!1,b)}
function fi(a,b,c,d,e){di(c)?void 0:t("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Zh(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=ei(c,d);if("function"===typeof e){var h=e;e=function(){var a=Zh(f._internalRoot);h.call(a)}}Uh(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Zh(f._internalRoot)}
function gi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;di(b)?void 0:t("200");return $h(a,b,null,c)}
var ki={createPortal:gi,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?t("188"):t("268",Object.keys(a)));a=nd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return fi(null,a,b,!0,c)},render:function(a,b,c){return fi(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?t("38"):void 0;return fi(a,b,c,!1,d)},unmountComponentAtNode:function(a){di(a)?
void 0:t("40");return a._reactRootContainer?(Uh(function(){fi(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return gi.apply(void 0,arguments)},unstable_batchedUpdates:Th,unstable_interactiveUpdates:Wh,flushSync:function(a,b){X?t("187"):void 0;var c=Z;Z=!0;try{return wh(a,b)}finally{Z=c,Qh(1073741823,!1)}},unstable_createRoot:hi,unstable_flushControlled:function(a){var b=Z;Z=!0;try{wh(a)}finally{(Z=b)||X||Qh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ja,
Ka,La,Ca.injectEventPluginsByName,qa,Ra,function(a){za(a,Qa)},Ib,Jb,Jd,Ea]}};function hi(a,b){di(a)?void 0:t("299","unstable_createRoot");return new ci(a,!0,null!=b&&!0===b.hydrate)}(function(a){var b=a.findFiberByHostInstance;return We(n({},a,{overrideProps:null,findHostInstanceByFiber:function(a){a=nd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ia,bundleType:0,version:"16.7.0",rendererPackageName:"react-dom"});
var li={default:ki},mi=li&&ki||li;module.exports=mi.default||mi;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(18);
} else {}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.12.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=!1,h=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=c.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=h,Q=l;h=a;l=b;try{var g=d()}finally{h=e,l=Q}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,p());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function v(){if(-1===k&&null!==c&&1===c.priorityLevel){m=!0;try{do u();while(null!==c&&1===c.priorityLevel)}finally{m=!1,null!==c?p():n=!1}}}function t(a){m=!0;var b=f;f=a;try{if(a)for(;null!==c;){var d=exports.unstable_now();if(c.expirationTime<=d){do u();while(null!==c&&c.expirationTime<=d)}else break}else if(null!==c){do u();while(null!==c&&!w())}}finally{m=!1,f=b,null!==c?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var d=exports.unstable_now(),e=!1;if(0>=P-d)if(-1!==b&&b<=d)e=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(e)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var d=h,e=k;h=a;k=exports.unstable_now();try{return b()}finally{h=d,k=e,v()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(h){case 1:b=d+-1;break;case 2:b=d+250;break;case 5:b=d+1073741823;break;case 4:b=d+1E4;break;default:b=d+5E3}a={callback:a,priorityLevel:h,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,p();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,p());
b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=h;return function(){var d=h,e=k;h=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{h=d,k=e,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return h};
exports.unstable_shouldYield=function(){return!f&&(null!==c&&c.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==c&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return c};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(21);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _Balances = __webpack_require__(24);

var _Balances2 = _interopRequireDefault(_Balances);

var _ErrorBoundary = __webpack_require__(25);

var _ErrorBoundary2 = _interopRequireDefault(_ErrorBoundary);

var _Postings = __webpack_require__(26);

var _Postings2 = _interopRequireDefault(_Postings);

var _Settings = __webpack_require__(31);

var _Settings2 = _interopRequireDefault(_Settings);

var _Sidebar = __webpack_require__(36);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      showMobileSidebar: false
    };
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleFocus',
    value: function handleFocus() {
      clearTimeout(this.showMobileSidebarTimeoutId);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.setState(function (prevState) {
        return { showMobileSidebar: !prevState.showMobileSidebar };
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this2 = this;

      this.showMobileSidebarTimeoutId = setTimeout(function () {
        if (_this2.state.showMobileSidebar) {
          _this2.setState({ showMobileSidebar: false });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'oasisledger-root' },
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'oasisledger-logo' },
            _react2.default.createElement(
              'div',
              { className: 'oasisledger-logo__content' },
              'Oasis Ledger'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'oasisledger-navbar' },
            _react2.default.createElement(
              'a',
              { href: '#',
                className: 'oasisledger-navbar__sidebar-toggle',
                onClick: this.handleClick,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
              },
              _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'oasisledger-logo-mobile' },
              'Oasis Ledger'
            )
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.HashRouter,
          null,
          _react2.default.createElement(
            'div',
            {
              className: "oasisledger-content" + (this.state.showMobileSidebar ? " oasisledger-content--show-mobile-sidebar" : "") },
            _react2.default.createElement(_reactRouterDom.Route, { path: '/',
              render: function render(routeProps) {
                return _react2.default.createElement(_Sidebar2.default, _extends({}, routeProps, {
                  onFocus: _this3.handleFocus,
                  onBlur: _this3.handleBlur
                }));
              }
            }),
            _react2.default.createElement(
              'main',
              { className: 'oasisledger-main' },
              _react2.default.createElement(
                _ErrorBoundary2.default,
                null,
                _react2.default.createElement(
                  _reactRouterDom.Switch,
                  null,
                  _react2.default.createElement(_reactRouterDom.Redirect, { exact: true, from: '/', to: '/postings' }),
                  _react2.default.createElement(_reactRouterDom.Route, { path: '/postings', component: _Postings2.default }),
                  _react2.default.createElement(_reactRouterDom.Route, { path: '/balances', component: _Balances2.default }),
                  _react2.default.createElement(_reactRouterDom.Route, { path: '/settings', component: _Settings2.default })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _FetchContainer = __webpack_require__(6);

var _FetchContainer2 = _interopRequireDefault(_FetchContainer);

var _formatters = __webpack_require__(10);

var _unicode = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Balances = function (_React$Component) {
  _inherits(Balances, _React$Component);

  function Balances() {
    _classCallCheck(this, Balances);

    return _possibleConstructorReturn(this, (Balances.__proto__ || Object.getPrototypeOf(Balances)).apply(this, arguments));
  }

  _createClass(Balances, [{
    key: 'render',
    value: function render() {
      var balancesDate = moment().subtract(1, "days").toISOString(true).substring(0, 10);
      return _react2.default.createElement(
        'div',
        { className: 'm-3' },
        _react2.default.createElement(
          _FetchContainer2.default,
          { fetch: {
              accounts: (0, _FetchContainer.fetchJSON)("api/account"),
              accountTypes: (0, _FetchContainer.fetchJSON)("api/account-type"),
              accountBalances: (0, _FetchContainer.fetchJSON)("api/account-balance/summary/" + balancesDate),
              balancesDate: balancesDate
            } },
          _react2.default.createElement(BalancesView, null)
        )
      );
    }
  }]);

  return Balances;
}(_react2.default.Component);

var BalancesView = function (_React$Component2) {
  _inherits(BalancesView, _React$Component2);

  function BalancesView(props) {
    _classCallCheck(this, BalancesView);

    return _possibleConstructorReturn(this, (BalancesView.__proto__ || Object.getPrototypeOf(BalancesView)).call(this, props));
  }

  _createClass(BalancesView, [{
    key: 'renderListGroup',
    value: function renderListGroup(accountTypeCode) {
      var _this3 = this;

      var accountType = this.props.accountTypes.find(function (at) {
        return at.accountTypeCode === accountTypeCode;
      });
      if (!accountType) return;
      var accounts = this.props.accounts.filter(function (account) {
        return account.accountTypeId === accountType.accountTypeId;
      });
      return _react2.default.createElement(
        'div',
        { className: 'card d-inline-flex mb-4 mr-4', key: accountType.accountTypeId },
        _react2.default.createElement(
          'div',
          { className: 'card-header' },
          _react2.default.createElement(
            'div',
            { className: 'd-flex w-100 justify-content-between' },
            _react2.default.createElement(
              'div',
              null,
              accountType.accountTypeCode + " - " + accountType.accountTypeName
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'small',
                null,
                accounts.length,
                ' account',
                accounts.length == 1 ? "" : "s"
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-group list-group-flush' },
          accounts.filter(function (account) {
            return !account.parentAccountId;
          }).map(function (account) {
            return _this3.renderListGroupItem(account);
          })
        )
      );
    }
  }, {
    key: 'renderListGroupItem',
    value: function renderListGroupItem(account) {
      var _this4 = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var accountType = this.props.accountTypes.find(function (at) {
        return at.accountTypeId === account.accountTypeId;
      });
      var balances = this.props.accountBalances.filter(function (ab) {
        return ab.accountId === account.accountId;
      }).filter(function (ab) {
        return ab.postingDate <= _this4.props.balancesDate;
      });
      var balancePrev = balances.length > 1 && balances[0].reconciled === "Y" && balances[0];
      var balanceCurr = balances.length > 0 && balances[balances.length - 1];
      var balanceNext = balanceCurr && balanceCurr.postingDate < this.props.balancesDate && Object.assign({}, ["accountId", "currencyId", "postingCount", "amount"].reduce(function (a, key) {
        a[key] = balanceCurr[key];return a;
      }, {}), { postingDate: this.props.balancesDate, reconciled: "N" });
      return _react2.default.createElement(
        _react2.default.Fragment,
        { key: account.accountId },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item py-2', key: account.accountId },
          _react2.default.createElement(
            'div',
            { style: { marginLeft: depth + "em" } },
            _react2.default.createElement(
              'div',
              { className: balancePrev && balancePrev.amount || balanceCurr && balanceCurr.amount ? "font-weight-bold" : "" },
              account.accountCode + " - " + account.accountName
            ),
            _react2.default.createElement(BalanceRow, {
              accountBalance: balancePrev,
              sign: accountType.sign
            }),
            _react2.default.createElement(BalanceRow, {
              accountBalance: balanceCurr,
              sign: accountType.sign,
              balancePrev: balancePrev,
              accountBalances: this.props.accountBalances
            }),
            _react2.default.createElement(BalanceRow, {
              accountBalance: balanceNext,
              sign: accountType.sign
            })
          )
        ),
        this.props.accounts.filter(function (a2) {
          return a2.parentAccountId == account.accountId;
        }).map(function (a2) {
          return _this4.renderListGroupItem(a2, depth + 1);
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderListGroup("A"),
        this.renderListGroup("L"),
        _react2.default.createElement(
          'p',
          null,
          this.props.accountTypes.map(function (accountType) {
            return _react2.default.createElement(
              'div',
              null,
              JSON.stringify(accountType)
            );
          })
        ),
        _react2.default.createElement(
          'p',
          null,
          JSON.stringify(this.props.accountBalances)
        ),
        _react2.default.createElement(
          'p',
          null,
          JSON.stringify(this.props.accounts)
        )
      );
    }
  }]);

  return BalancesView;
}(_react2.default.Component);

var BalanceRow = function (_React$Component3) {
  _inherits(BalanceRow, _React$Component3);

  function BalanceRow(props) {
    _classCallCheck(this, BalanceRow);

    var _this5 = _possibleConstructorReturn(this, (BalanceRow.__proto__ || Object.getPrototypeOf(BalanceRow)).call(this, props));

    _this5.state = {
      loading: false,
      error: null
    };
    _this5.handleReconcile = _this5.handleReconcile.bind(_this5);
    return _this5;
  }

  _createClass(BalanceRow, [{
    key: 'handleReconcile',
    value: function handleReconcile(e) {
      var _this6 = this;

      e.preventDefault();
      this.setState({ loading: true });

      var accountBalance = Object.assign({}, this.props.accountBalance, { reconciled: "Y" });
      (0, _FetchContainer.fetchText)("api/account-balance/reconcile", {
        method: "POST",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(accountBalance)
      }).then(function () {
        _this6.props.accountBalance.reconciled = "Y";
        _this6.setState({ loading: false });
      }).catch(function (err) {
        _this6.setState({ loading: false, error: err });
      });
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox() {
      if (this.state.loading) {
        return _react2.default.createElement(
          'span',
          { className: 'oasisledger-balances__row__checkbox oasisledger-balances__row__checkbox--loading' },
          _react2.default.createElement('i', { className: 'fa fa-spinner fa-pulse fa-fw', 'aria-hidden': 'true' })
        );
      } else if (this.state.error) {
        return _react2.default.createElement(
          'span',
          { className: 'oasisledger-balances__row__checkbox text-danger' },
          _react2.default.createElement('i', { className: 'fa fa-exclamation-triangle fa-fw', 'aria-hidden': 'true' })
        );
      } else if (this.props.accountBalance.reconciled === "Y") {
        return _react2.default.createElement(
          'span',
          { className: 'oasisledger-balances__row__checkbox text-success' },
          _react2.default.createElement('i', { className: 'fa fa-check fa-fw', 'aria-hidden': 'true' })
        );
      } else {
        return _react2.default.createElement(
          'a',
          { href: '#',
            onClick: this.handleReconcile,
            className: 'oasisledger-balances__row__checkbox'
          },
          _react2.default.createElement('i', { className: 'fa fa-check fa-fw', 'aria-hidden': 'true' })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          accountBalance = _props.accountBalance,
          sign = _props.sign,
          balancePrev = _props.balancePrev;

      if (!accountBalance) return null;
      var postingCount = balancePrev && d3.sum(this.props.accountBalances.filter(function (ab) {
        return ab.accountId === accountBalance.accountId && ab.postingDate > balancePrev.postingDate && ab.postingDate <= accountBalance.postingDate;
      }), function (ab) {
        return ab.postingCount;
      });
      return _react2.default.createElement(
        'div',
        { className: 'row oasisledger-balances__row', style: { marginLeft: "1em" } },
        _react2.default.createElement(
          'div',
          { className: 'col' },
          (0, _formatters.formatDateLong)(accountBalance.postingDate),
          Number.isInteger(postingCount) && _react2.default.createElement(
            'span',
            null,
            ' ',
            _unicode.mdash,
            ' ',
            _react2.default.createElement(
              'span',
              { className: 'text-primary' },
              postingCount,
              ' new posting',
              postingCount > 1 && "s"
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-auto' },
          _react2.default.createElement(
            'span',
            { className: accountBalance.amount * sign < 0 ? " text-danger" : "" },
            (0, _formatters.formatAmount)(accountBalance.amount * sign)
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-auto pl-0' },
          this.renderCheckbox()
        )
      );
    }
  }]);

  return BalanceRow;
}(_react2.default.Component);

exports.default = Balances;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// https://reactjs.org/docs/error-boundaries.html

var ErrorBoundary = function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  function ErrorBoundary(props) {
    _classCallCheck(this, ErrorBoundary);

    var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

    _this.state = { err: null };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "render",
    value: function render() {
      if (this.state.err) {
        console.log("Oh sorrow! Error: %o", this.state.err);
        return _react2.default.createElement(
          "div",
          { className: "m-3" },
          _react2.default.createElement(
            "div",
            { className: "alert alert-danger" },
            _react2.default.createElement(
              "strong",
              null,
              "Oh sorrow!"
            ),
            " ",
            this.state.err.toString()
          )
        );
      }
      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(err) {
      return { err: err };
    }
  }]);

  return ErrorBoundary;
}(_react2.default.Component);

exports.default = ErrorBoundary;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _FetchContainer = __webpack_require__(6);

var _FetchContainer2 = _interopRequireDefault(_FetchContainer);

var _formatters = __webpack_require__(10);

var _Post = __webpack_require__(27);

var _Post2 = _interopRequireDefault(_Post);

var _Upload = __webpack_require__(30);

var _Upload2 = _interopRequireDefault(_Upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //TODO: move from .. to .


var Postings = function Postings() {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/postings', component: PostingsIndex }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/postings/upload', component: _Upload2.default })
  );
};

var PostingsIndex = function PostingsIndex() {
  return _react2.default.createElement(
    'div',
    { className: 'm-3' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-md mb-3' },
        'zzz'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-auto mb-3' },
        _react2.default.createElement(
          _FetchContainer2.default,
          { wait: false, fetch: {
              accountTypes: (0, _FetchContainer.fetchJSON)("api/account-type"),
              accounts: (0, _FetchContainer.fetchJSON)("api/account"),
              currencies: (0, _FetchContainer.fetchJSON)("api/currency")
            } },
          _react2.default.createElement(_Post2.default, null)
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col mb-3' },
        _react2.default.createElement('hr', null),
        _react2.default.createElement(PostingsListing, null)
      )
    )
  );
};

var PostingsListing = function (_React$Component) {
  _inherits(PostingsListing, _React$Component);

  function PostingsListing(props) {
    _classCallCheck(this, PostingsListing);

    var _this = _possibleConstructorReturn(this, (PostingsListing.__proto__ || Object.getPrototypeOf(PostingsListing)).call(this, props));

    _this.state = {
      input: { month: 0, year: 0 },
      top: { days: 14, key: 1 } // { days: N } or { month: M, year: Y }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(PostingsListing, [{
    key: 'setInput',
    value: function setInput(id, value) {
      this.setState(function (prevState) {
        return {
          input: Object.assign({}, prevState.input, _defineProperty({}, id, value))
        };
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var id = e.target.id.replace(/Input$/, '');
      this.setInput(id, e.target.value);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var m = this.state.input.month;
      var y = this.state.input.year;
      if (m && y) {
        this.setState({ top: {
            month: m,
            year: y,
            key: this.state.top.key + 1
          } });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(days) {
      this.setState({ top: {
          days: days,
          key: this.state.top.key + 1
        } });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { className: 'mb-3', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'div',
              { className: 'col-auto my-1' },
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement(
                  'select',
                  { className: 'custom-select',
                    id: 'monthInput',
                    value: this.state.input.month,
                    onChange: this.handleChange
                  },
                  _react2.default.createElement(
                    'option',
                    { value: '0', selected: true },
                    'Month'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '1' },
                    'January'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '2' },
                    'February'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '3' },
                    'March'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '4' },
                    'April'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '5' },
                    'May'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '6' },
                    'June'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '7' },
                    'July'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '8' },
                    'August'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '9' },
                    'September'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '10' },
                    'October'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '11' },
                    'November'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '12' },
                    'December'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { className: 'custom-select',
                    id: 'yearInput',
                    value: this.state.input.year,
                    onChange: this.handleChange
                  },
                  _react2.default.createElement(
                    'option',
                    { value: '0', selected: true },
                    'Year'
                  ),
                  _react2.default.createElement(
                    'option',
                    null,
                    '2018'
                  ),
                  _react2.default.createElement(
                    'option',
                    null,
                    '2019'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'input-group-append' },
                  _react2.default.createElement(
                    'button',
                    { type: 'submit',
                      className: 'btn btn-outline-primary',
                      disabled: !this.state.input.month || !this.state.input.year
                    },
                    'View'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-auto my-1' },
              _react2.default.createElement(
                'div',
                { className: 'btn-group' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-outline-primary',
                    onClick: this.handleClick.bind(this, 14)
                  },
                  '14 days'
                ),
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-outline-primary',
                    onClick: this.handleClick.bind(this, 30)
                  },
                  '30 days'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _FetchContainer2.default,
          { key: this.state.top.key, fetch: {
              accounts: (0, _FetchContainer.fetchJSON)("api/account"),
              currencies: (0, _FetchContainer.fetchJSON)("api/currency"),
              postings: this.state.top.days ? (0, _FetchContainer.fetchJSON)("api/posting/top?days=" + this.state.top.days) : (0, _FetchContainer.fetchJSON)("api/posting/month?year=" + this.state.top.year + "&month=" + this.state.top.month)
            } },
          _react2.default.createElement(PostingsListingResults, { top: this.state.top })
        )
      );
    }
  }]);

  return PostingsListing;
}(_react2.default.Component);

var PostingsListingResults = function (_React$Component2) {
  _inherits(PostingsListingResults, _React$Component2);

  function PostingsListingResults(props) {
    _classCallCheck(this, PostingsListingResults);

    return _possibleConstructorReturn(this, (PostingsListingResults.__proto__ || Object.getPrototypeOf(PostingsListingResults)).call(this, props));
  }

  _createClass(PostingsListingResults, [{
    key: 'renderPostingsGroup',
    value: function renderPostingsGroup(postingDate, postingsGroup) {
      var _this3 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'h6',
          { className: 'mt-4' },
          (0, _formatters.formatDateLong)(postingDate)
        ),
        _react2.default.createElement(
          'div',
          { className: 'list-group mb-2' },
          postingsGroup.map(function (posting) {
            return _react2.default.createElement(
              'div',
              { className: 'list-group-item' },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm-auto oasisledger-postings-listing__date' },
                  (0, _formatters.formatDateShort)(posting.postingDate)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-sm font-weight-bold mb-1' },
                  posting.description
                )
              ),
              posting.details.filter(function (pd) {
                return pd.amount > 0;
              }).map(function (pd) {
                return _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-auto oasisledger-postings-listing__amount' },
                    (0, _formatters.formatAmount)(pd.amount)
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm text-nowrap' },
                    _this3.props.accounts.find(function (a) {
                      return a.accountId === pd.accountId;
                    }).accountName
                  ),
                  _react2.default.createElement('div', { className: 'col-sm-auto text-nowrap' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md' },
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement('div', { className: 'col-sm-auto d-block d-md-none', style: { minWidth: "9em" } }),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm oasisledger-postings-listing__statement' },
                        pd.statement && pd.statement.description
                      )
                    )
                  )
                );
              }),
              posting.details.filter(function (pd) {
                return pd.amount < 0;
              }).map(function (pd) {
                return _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement('div', { className: 'col-sm-auto text-nowrap' }),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm-auto text-danger oasisledger-postings-listing__amount' },
                    (0, _formatters.formatAmount)(pd.amount)
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-sm text-nowrap' },
                    _this3.props.accounts.find(function (a) {
                      return a.accountId === pd.accountId;
                    }).accountName
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md' },
                    _react2.default.createElement(
                      'div',
                      { className: 'row' },
                      _react2.default.createElement('div', { className: 'col-sm-auto d-block d-md-none' }),
                      _react2.default.createElement('div', { className: 'col-sm-auto d-block d-md-none', style: { minWidth: "9em" } }),
                      _react2.default.createElement(
                        'div',
                        { className: 'col-sm oasisledger-postings-listing__statement' },
                        pd.statement && pd.statement.description
                      )
                    )
                  )
                );
              })
            );
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var postings = [].concat(_toConsumableArray(this.props.postings || [])).sort(function (a, b) {
        return b.postingDate - a.postingDate;
      });
      var postingsGroups = new Map();

      postings.forEach(function (posting) {
        if (!postingsGroups.has(posting.postingDate)) {
          postingsGroups.set(posting.postingDate, []);
        }
        postingsGroups.get(posting.postingDate).push(posting);
      });

      return _react2.default.createElement(
        'div',
        { className: 'oasisledger-postings-listing' },
        _react2.default.createElement(
          'p',
          null,
          'Found ',
          postings.length,
          ' posting',
          postings.length == 1 ? "" : "s",
          ' in ',
          this.props.top.days ? "the past " + this.props.top.days + " days" : "month " + this.props.top.month + " year " + this.props.top.year,
          '.'
        ),
        Array.from(postingsGroups.entries()).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              postingDate = _ref2[0],
              postingsGroup = _ref2[1];

          return _this4.renderPostingsGroup(postingDate, postingsGroup);
        })
      );
      /*
            .map(ts => (
              <div>
                <div>{postingDate}</div>
                <div className="list-group">
                  {postings.filter(posting => posting.postingDate == postingDate)
                    .map(posting => (
                      <div className="list-group-item">
                        <div>{posting.description}</div>
                        <div>{new Date(posting.auditTs).toString()}</div>
                      </div>
                    ))}
                </div>
              </div>
      */
    }
  }]);

  return PostingsListingResults;
}(_react2.default.Component);

exports.default = Postings;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AccountInput = __webpack_require__(28);

var _AccountInput2 = _interopRequireDefault(_AccountInput);

var _DatePicker = __webpack_require__(29);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _FetchContainer = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClear = _this.handleClear.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleDismiss = _this.handleDismiss.bind(_this);

    _this.defaultInput = {
      inputCurrency: "CAD"
    };
    _this.state = {
      resetCount: 0,
      input: _this.defaultInput,
      valid: null,
      running: false,
      message: null
    };
    return _this;
  }

  _createClass(Post, [{
    key: 'setInput',
    value: function setInput(id, value) {
      this.setState(function (prevState) {
        return {
          input: Object.assign({}, prevState.input, _defineProperty({}, id, value)),
          valid: null
        };
      });
    }
  }, {
    key: 'getInput',
    value: function getInput(id) {
      return this.state.input[id] || "";
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setInput(e.target.id, e.target.value);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      var _this2 = this;

      this.setState(function (prevState) {
        return {
          resetCount: prevState.resetCount + 1,
          input: _this2.defaultInput,
          valid: null,
          message: null
        };
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this3 = this;

      e.preventDefault();

      var input = this.state.input;
      var inputDate = moment(input.inputDate, "M/D/YYYY", true); // use strict parsing

      var valid = {
        inputDate: inputDate.isValid(),
        inputCurrency: !!input.inputCurrency,
        inputAmount: !!input.inputAmount && /^(\d+(,\d\d\d)*)?(\.\d+)?$/.test(input.inputAmount),
        inputAccountFrom: !!input.inputAccountFrom,
        inputAccountTo: !!input.inputAccountTo
      };
      if (!Object.keys(valid).every(function (key) {
        return valid[key];
      })) {
        this.setState({ valid: valid });
        return;
      }

      var inputAmount = input.inputAmount.replace(/,/g, "");

      var postingDTO = {
        postingDate: inputDate.format("YYYY-MM-DD"),
        description: input.inputDescription,
        details: [{
          accountId: input.inputAccountFrom,
          currency: input.inputCurrency,
          amount: "-" + inputAmount
        }, {
          accountId: input.inputAccountTo,
          currency: input.inputCurrency,
          amount: inputAmount
        }]
      };

      this.setState({ running: true });

      (0, _FetchContainer.fetchJSON)('api/posting', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(postingDTO)
      }).then(function (posting) {
        _this3.setState({
          running: false,
          message: "Posted successfully: #" + posting.postingHeaderId
        });
      }).catch(function (err) {
        _this3.setState({
          running: false,
          message: err
        });
      });
    }
  }, {
    key: 'handleDismiss',
    value: function handleDismiss() {
      this.setState({ message: null });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { className: 'oasisledger-post-form', onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          { className: 'form-row' },
          _react2.default.createElement(
            'div',
            { className: 'col-auto mb-2' },
            _react2.default.createElement(
              _DatePicker2.default,
              {
                key: this.state.resetCount,
                onChange: this.setInput.bind(this, "inputDate"),
                value: this.getInput("inputDate")
              },
              _react2.default.createElement('input', {
                id: 'inputDate',
                type: 'text',
                placeholder: 'MM/DD/YYYY',
                className: "form-control" + (this.state.valid ? this.state.valid.inputDate ? "" : " is-invalid" : ""),
                style: { maxWidth: "9.5em" }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col mb-2' },
            _react2.default.createElement(
              'div',
              { className: 'input-group flex-nowrap' },
              _react2.default.createElement(
                'select',
                {
                  className: 'custom-select flex-grow-0 w-auto',
                  id: 'inputCurrency',
                  onChange: this.handleChange,
                  value: this.getInput("inputCurrency"),
                  style: { minWidth: "5.3em" }
                },
                this.props.currencies && this.props.currencies.sort(function (a, b) {
                  return a.currencyCode.localeCompare(b.currencyCode);
                }).map(function (c) {
                  return _react2.default.createElement(
                    'option',
                    null,
                    c.currencyCode
                  );
                })
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: "form-control" + (this.state.valid ? this.state.valid.inputAmount ? "" : " is-invalid" : ""),
                id: 'inputAmount',
                placeholder: '0.00',
                onChange: this.handleChange,
                value: this.getInput("inputAmount"),
                style: { minWidth: "5.5em" }
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-row mb-2' },
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text' },
                  'From:'
                )
              ),
              _react2.default.createElement(
                _AccountInput2.default,
                {
                  accountTypes: this.props.accountTypes,
                  accounts: this.props.accounts,
                  key: this.state.resetCount,
                  onChange: this.setInput.bind(this, "inputAccountFrom")
                },
                _react2.default.createElement('input', {
                  className: "form-control" + (this.state.valid ? this.state.valid.inputAccountFrom ? "" : " is-invalid" : ""),
                  id: 'inputAccountFrom',
                  placeholder: 'Select account...',
                  type: 'text'
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-row mb-2' },
          _react2.default.createElement(
            'div',
            { className: 'col' },
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text' },
                  'To:'
                )
              ),
              _react2.default.createElement(
                _AccountInput2.default,
                {
                  accountTypes: this.props.accountTypes,
                  accounts: this.props.accounts,
                  key: this.state.resetCount,
                  onChange: this.setInput.bind(this, "inputAccountTo")
                },
                _react2.default.createElement('input', {
                  className: "form-control" + (this.state.valid ? this.state.valid.inputAccountTo ? "" : " is-invalid" : ""),
                  id: 'inputAccountTo',
                  placeholder: 'Select account...',
                  type: 'text'
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group mb-2' },
          _react2.default.createElement('input', {
            className: 'form-control',
            id: 'inputDescription',
            placeholder: 'Description',
            onChange: this.handleChange,
            value: this.getInput("inputDescription")
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-row mb-2 align-items-center' },
          _react2.default.createElement(
            'div',
            { className: 'col-auto' },
            _react2.default.createElement(
              'button',
              {
                type: 'submit',
                className: "btn btn-primary" + (this.state.running ? " disabled" : "")
              },
              'Post'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-auto' },
            _react2.default.createElement(
              'button',
              {
                type: 'reset',
                className: "btn btn-outline-secondary" + (this.state.running ? " disabled" : ""),
                onClick: this.handleClear
              },
              'Clear'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col ml-2' },
            this.state.running ? _react2.default.createElement(
              'div',
              { className: 'spinner-grow spinner-grow-sm text-primary', role: 'status' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Loading...'
              )
            ) : this.state.message && !(this.state.message instanceof Error) && _react2.default.createElement(
              'div',
              { className: 'text-success' },
              this.state.message
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mb-2' },
          !this.state.running && this.state.message instanceof Error && _react2.default.createElement(
            'div',
            { className: 'alert alert-danger alert-dismissible', role: 'alert' },
            this.state.message.message,
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close',
                onClick: this.handleDismiss
              },
              _react2.default.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '\xD7'
              )
            )
          )
        )
      );
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = Post;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _unicode = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountInput = function (_React$Component) {
  _inherits(AccountInput, _React$Component);

  function AccountInput(props) {
    _classCallCheck(this, AccountInput);

    var _this = _possibleConstructorReturn(this, (AccountInput.__proto__ || Object.getPrototypeOf(AccountInput)).call(this, props));

    _this.state = {
      text: "",
      show: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);

    _this.inputRef = _react2.default.createRef();
    _this.dropdownMenuRef = _react2.default.createRef();
    return _this;
  }

  _createClass(AccountInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.state.show && this.dropdownMenuIndex == -1) {
        if (!this.state.selectedAccountId) {
          $(this.dropdownMenuRef.current).scrollTop(0);
        } else {
          var menuItems = $(this.dropdownMenuRef.current).children(".dropdown-item");
          var i = this.props.accounts.findIndex(function (a) {
            return a.accountId === _this2.state.selectedAccountId;
          });
          menuItems[i].scrollIntoView();
        }
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var text = e.target.value;
      var account = this.props.accounts && this.props.accounts.find(function (a) {
        return text == a.accountCode + " - " + a.accountName;
      });
      this.setState({
        selectedAccountId: account && account.accountId,
        show: true,
        text: text
      });
      this.props.onChange && this.props.onChange(account && account.accountId);
    }
  }, {
    key: 'handleClick',
    value: function handleClick(accountId, e) {
      e.preventDefault();
      var account = this.props.accounts.find(function (a) {
        return a.accountId === accountId;
      });
      this.setState({
        selectedAccountId: account.accountId,
        show: false,
        text: account.accountCode + " - " + account.accountName
      });
      this.props.onChange && this.props.onChange(account.accountId);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      if (e.target === this.inputRef.current) {
        this.dropdownMenuIndex = -1;
      }
      clearTimeout(this.showTimeoutId);
      if (!this.state.show) {
        this.setState({ show: true });
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this3 = this;

      this.showTimeoutId = setTimeout(function () {
        if (_this3.state.show) {
          _this3.setState({ show: false });
        }
      }, 0);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.target !== this.inputRef.current) {
        // dropdown menu or item
        if (e.keyCode == 38) {
          // up
          e.preventDefault();
          var menuItems = $(this.dropdownMenuRef.current).children(".dropdown-item");
          if (this.dropdownMenuIndex == 0) {
            this.inputRef.current.focus();
          } else if (this.dropdownMenuIndex > 0) {
            menuItems[--this.dropdownMenuIndex].focus();
          }
        } else if (e.keyCode == 8) {
          // backspace
          e.preventDefault();
          this.inputRef.current.focus();
        }
      }

      if (e.keyCode == 27) {
        // escape
        e.preventDefault();
        if (this.state.show) {
          this.setState({ show: false });
        }
      }

      if (e.keyCode == 40) {
        // down
        e.preventDefault();
        var _menuItems = $(this.dropdownMenuRef.current).children(".dropdown-item");
        if (this.dropdownMenuIndex < _menuItems.length - 1) {
          _menuItems[++this.dropdownMenuIndex].focus();
        }
      }
    }
  }, {
    key: 'findAncestors',
    value: function findAncestors(accountId) {
      var accountIds = [];
      var account = this.props.accounts.find(function (a) {
        return a.accountId === accountId;
      });
      while (account.parentAccountId) {
        account = this.props.accounts.find(function (a) {
          return a.accountId === account.parentAccountId;
        });
        accountIds.unshift(account.accountId);
      }
      return accountIds;
    }
  }, {
    key: 'findDescendants',
    value: function findDescendants(accountId) {
      var accountIds = this.props.accounts.filter(function (account) {
        return account.parentAccountId === accountId;
      }).map(function (account) {
        return account.accountId;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = accountIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _accountId = _step.value;

          accountIds.push.apply(accountIds, _toConsumableArray(this.findDescendants(_accountId)));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return accountIds;
    }
  }, {
    key: 'renderDropdownMenu',
    value: function renderDropdownMenu() {
      return _react2.default.createElement(
        'div',
        { className: "dropdown-menu dropdown-menu-right oasisledger-account-input__dropdown-menu" + (this.state.show ? " show" : ""),
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
          ref: this.dropdownMenuRef,
          tabIndex: '-1'
        },
        this.renderDropdownMenuChildren()
      );
    }
  }, {
    key: 'renderDropdownMenuChildren',
    value: function renderDropdownMenuChildren() {
      var _this4 = this;

      if (!this.props.accounts || !this.props.accountTypes) {
        return _react2.default.createElement(
          'p',
          { className: 'dropdown-header' },
          'Loading...'
        );
      }
      var accounts = void 0,
          accountTypes = void 0;
      if (this.state.text && !this.state.selectedAccountId) {
        accounts = [].concat(_toConsumableArray(new Set(this.props.accounts.filter(function (account) {
          return (account.accountCode + " - " + account.accountName).toLowerCase().includes(_this4.state.text.toLowerCase());
        }).map(function (account) {
          return account.accountId;
        }).reduce(function (a, accountId) {
          return a.concat(_this4.findAncestors(accountId)).concat([accountId]).concat(_this4.findDescendants(accountId));
        }, [])))).map(function (accountId) {
          return _this4.props.accounts.find(function (account) {
            return account.accountId === accountId;
          });
        });
        accountTypes = this.props.accountTypes.filter(function (accountType) {
          return accounts.some(function (account) {
            return account.accountTypeId === accountType.accountTypeId;
          });
        });
      } else {
        accounts = this.props.accounts;
        accountTypes = this.props.accountTypes;
      }
      if (accounts.length == 0 || accountTypes.length == 0) {
        return _react2.default.createElement(
          'p',
          { className: 'dropdown-header' },
          'Account(s) not found'
        );
      }
      return accountTypes.map(function (accountType) {
        return _react2.default.createElement(
          _react2.default.Fragment,
          { key: accountType.accountTypeId },
          accountType !== accountTypes[0] && _react2.default.createElement('div', { className: 'dropdown-divider' }),
          _react2.default.createElement(
            'h6',
            { className: 'dropdown-header' },
            accountType.accountTypeCode + " - " + accountType.accountTypeName,
            accounts !== _this4.props.accounts && _react2.default.createElement(
              'small',
              { className: 'float-right' },
              'Showing ',
              accounts.filter(function (account) {
                return account.accountTypeId === accountType.accountTypeId;
              }).length,
              ' out of ',
              _this4.props.accounts.filter(function (account) {
                return account.accountTypeId === accountType.accountTypeId;
              }).length
            )
          ),
          accounts.filter(function (account) {
            return account.accountTypeId === accountType.accountTypeId;
          }).filter(function (account) {
            return !account.parentAccountId;
          }).map(function (account) {
            return _this4.renderDropdownItem(account, accounts);
          })
        );
      });
    }
  }, {
    key: 'renderDropdownItem',
    value: function renderDropdownItem(account, accounts) {
      var _this5 = this;

      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var label = account.accountCode + " - " + account.accountName;
      var active = this.state.text === label;
      return _react2.default.createElement(
        _react2.default.Fragment,
        { key: account.accountId },
        _react2.default.createElement(
          'a',
          { className: "dropdown-item" + (active ? " active" : ""),
            href: '#',
            onClick: this.handleClick.bind(this, account.accountId),
            tabIndex: '-1'
          },
          _unicode.emsp.repeat(depth),
          active ? label : this.renderLabel(label)
        ),
        accounts.filter(function (a2) {
          return a2.parentAccountId == account.accountId;
        }).map(function (a2) {
          return _this5.renderDropdownItem(a2, accounts, depth + 1);
        })
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel(label) {
      var i = label.toLowerCase().indexOf(this.state.text.toLowerCase());
      if (this.state.text && i >= 0) {
        return _react2.default.createElement(
          'span',
          null,
          label.substring(0, i),
          _react2.default.createElement(
            'span',
            { className: 'bg-warning' },
            label.substring(i, i + this.state.text.length)
          ),
          label.substring(i + this.state.text.length)
        );
      } else {
        return _react2.default.createElement(
          'span',
          null,
          label
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var inputElement = _react2.default.Children.only(this.props.children);
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        this.renderDropdownMenu(),
        _react2.default.cloneElement(inputElement, {
          value: this.state.text,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
          ref: this.inputRef
        })
      );
    }
  }]);

  return AccountInput;
}(_react2.default.Component);

AccountInput.propTypes = {
  accountTypes: _propTypes2.default.array,
  accounts: _propTypes2.default.array,
  children: _propTypes2.default.element.isRequired,
  onChange: _propTypes2.default.func
};

exports.default = AccountInput;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FIRST_DAY_OF_WEEK = 0; // 0=Sunday, 6=Saturday

var DatePicker = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.today = moment().startOf("day");
    _this.state = {
      show: false,
      firstDate: moment(_this.today).startOf("month"),
      hoverDate: null,
      selectedDate: null
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var value = e.target.value;
      this.props.onChange(value);
    }
  }, {
    key: 'setSelectedDate',
    value: function setSelectedDate(m, e) {
      e.preventDefault();
      this.setState({
        firstDate: moment(m).startOf("month"),
        selectedDate: m,
        show: false
      });
      this.props.onChange(m.format("M/D/YYYY"));
    }
  }, {
    key: 'setFirstDate',
    value: function setFirstDate(m, e) {
      e.preventDefault();
      this.setState({ firstDate: m });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(e) {
      clearTimeout(this.showTimeoutId);
      if (!this.state.show) {
        this.setState({ show: true });
      }
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this2 = this;

      this.showTimeoutId = setTimeout(function () {
        if (_this2.state.show) {
          _this2.setState({
            show: false,
            firstDate: moment(_this2.state.selectedDate || _this2.today).startOf("month")
          });
        }
      }, 0);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      if (e.keyCode == 38 || e.keyCode == 40) {
        // up or down
        var dd = e.keyCode == 38 ? 1 : -1;
        if (this.state.selectedDate) {
          this.setSelectedDate(moment(this.state.selectedDate).add(dd, "d"), e);
        } else {
          this.setSelectedDate(this.today, e);
        }
      }
      if (e.keyCode == 27) {
        // escape
        e.preventDefault();
        if (this.state.show) {
          this.setState({ show: false });
        }
      }
    }
  }, {
    key: 'handleHover',
    value: function handleHover(m) {
      this.setState({ hoverDate: m });
    }
  }, {
    key: 'renderPickButton',
    value: function renderPickButton(m) {
      var btnClass = void 0,
          textClass = void 0;
      if (m.isSame(this.state.hoverDate)) {
        btnClass = "btn-outline-warning";
      } else if (m.isSame(this.state.selectedDate) && m.isSame(this.today)) {
        btnClass = "btn-primary";
      } else if (m.isSame(this.state.selectedDate)) {
        btnClass = "btn-warning";
      } else if (m.isSame(this.today)) {
        btnClass = "btn-outline-primary";
        textClass = "text-primary ";
      } else if (m.month() != this.state.firstDate.month()) {
        textClass = "text-secondary";
      }
      return _react2.default.createElement(
        'a',
        {
          className: "btn" + (btnClass ? " " + btnClass : "") + " oasisledger-datepicker__pick-button",
          href: '#', role: 'button',
          onMouseEnter: this.handleHover.bind(this, m),
          onMouseLeave: this.handleHover.bind(this, null),
          onClick: this.setSelectedDate.bind(this, m),
          tabIndex: '-1'
        },
        _react2.default.createElement(
          'span',
          { className: textClass },
          m.date()
        )
      );
    }
  }, {
    key: 'renderDropdownMenu',
    value: function renderDropdownMenu() {
      var _this3 = this;

      var startDate = moment(this.state.firstDate);
      while (startDate.day() != FIRST_DAY_OF_WEEK) {
        startDate.subtract(1, "d");
      }
      return _react2.default.createElement(
        'div',
        { className: "dropdown-menu oasisledger-datepicker__dropdown-menu" + (this.state.show ? " show" : ""),
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          tabIndex: '-1'
        },
        _react2.default.createElement(
          'div',
          { className: 'px-2 py-0' },
          _react2.default.createElement(
            'div',
            { className: 'd-inline-block' },
            _react2.default.createElement(
              'div',
              { className: 'd-flex' },
              _react2.default.createElement(
                'a',
                { className: 'btn align-self-center',
                  href: '#', role: 'button',
                  onClick: this.setFirstDate.bind(this, moment(this.state.firstDate).subtract(1, "M")),
                  tabIndex: '-1'
                },
                _react2.default.createElement('i', { className: 'fa fa-chevron-left', 'aria-hidden': 'true' })
              ),
              _react2.default.createElement(
                'a',
                { className: 'btn align-self-center',
                  href: '#', role: 'button',
                  onClick: this.setSelectedDate.bind(this, this.today),
                  tabIndex: '-1'
                },
                _react2.default.createElement('i', { className: 'fa fa-circle-o', 'aria-hidden': 'true' })
              ),
              _react2.default.createElement(
                'a',
                { className: 'btn align-self-center',
                  href: '#', role: 'button',
                  onClick: this.setFirstDate.bind(this, moment(this.state.firstDate).add(1, "M")),
                  tabIndex: '-1'
                },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right', 'aria-hidden': 'true' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'align-self-center flex-grow-1 pr-2 text-muted text-right' },
                this.state.firstDate.format("MMMM YYYY")
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'd-flex' },
              d3.range(7).map(function (dd) {
                return moment(startDate).add(dd, "d");
              }).map(function (m) {
                return _react2.default.createElement(
                  'div',
                  { className: 'oasisledger-datepicker__weekday-label' },
                  _react2.default.createElement(
                    'small',
                    null,
                    m.format("dd")
                  )
                );
              })
            ),
            d3.range(6).map(function (dw) {
              return _react2.default.createElement(
                'div',
                { className: 'd-flex' },
                d3.range(7).map(function (dd) {
                  return moment(startDate).add(dw, "w").add(dd, "d");
                }).map(function (m) {
                  return _this3.renderPickButton(m);
                })
              );
            })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inputElement = _react2.default.Children.only(this.props.children);
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.cloneElement(inputElement, {
          value: this.props.value,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown
        }),
        this.renderDropdownMenu()
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(newProps, prevState) {
      var m = moment(newProps.value, "M/D/YYYY", true).startOf("day");
      if (m.isValid() && !m.isSame(prevState.selectedDate)) {
        return {
          firstDate: moment(m).startOf("month"),
          selectedDate: m
        };
      } else if (!m.isValid() && prevState.selectedDate !== null) {
        return {
          selectedDate: null
        };
      }
    }
  }]);

  return DatePicker;
}(_react2.default.Component);

DatePicker.propTypes = {
  children: _propTypes2.default.element.isRequired,
  id: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  value: _propTypes2.default.string
};

exports.default = DatePicker;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Upload;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Upload() {
  return _react2.default.createElement(
    "div",
    { className: "m-3" },
    _react2.default.createElement(
      "div",
      { className: "custom-file" },
      _react2.default.createElement("input", { type: "file", className: "custom-file-input", id: "customFile" }),
      _react2.default.createElement(
        "label",
        { className: "custom-file-label", htmlFor: "customFile" },
        "Choose file"
      )
    )
  );
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _Accounts = __webpack_require__(32);

var _Accounts2 = _interopRequireDefault(_Accounts);

var _Users = __webpack_require__(35);

var _Users2 = _interopRequireDefault(_Users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Settings = function Settings() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/settings', component: SettingsIndex }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/settings/accounts', component: _Accounts2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/settings/users', component: _Users2.default })
  );
};

var SettingsIndex = function SettingsIndex() {
  return _react2.default.createElement(
    'div',
    { className: 'm-3' },
    _react2.default.createElement(
      'ul',
      { className: 'nav flex-column' },
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/settings/accounts', className: 'nav-link' },
          'Accounts'
        )
      ),
      _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/settings/users', className: 'nav-link' },
          'Users'
        )
      )
    )
  );
};

exports.default = Settings;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _AccountSelect = __webpack_require__(33);

var _AccountSelect2 = _interopRequireDefault(_AccountSelect);

var _AccountTypeSelect = __webpack_require__(34);

var _AccountTypeSelect2 = _interopRequireDefault(_AccountTypeSelect);

var _DocumentTitle = __webpack_require__(11);

var _DocumentTitle2 = _interopRequireDefault(_DocumentTitle);

var _FetchContainer = __webpack_require__(6);

var _FetchContainer2 = _interopRequireDefault(_FetchContainer);

var _unicode = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accounts = function Accounts() {
  return _react2.default.createElement(
    'div',
    { className: 'm-3' },
    _react2.default.createElement(
      _FetchContainer2.default,
      { fetch: {
          accounts: (0, _FetchContainer.fetchJSON)("api/account"),
          accountTypes: (0, _FetchContainer.fetchJSON)("api/account-type")
        } },
      _react2.default.createElement(AccountsMain, null)
    )
  );
};

var AccountsMain = function (_React$Component) {
  _inherits(AccountsMain, _React$Component);

  function AccountsMain(props) {
    _classCallCheck(this, AccountsMain);

    var _this = _possibleConstructorReturn(this, (AccountsMain.__proto__ || Object.getPrototypeOf(AccountsMain)).call(this, props));

    _this.state = {
      accounts: props.accounts.slice(0) // shallow copy
    };
    _this.accountCreateModalRef = _react2.default.createRef();
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleAccountCreated = _this.handleAccountCreated.bind(_this);
    return _this;
  }

  _createClass(AccountsMain, [{
    key: 'handleClick',
    value: function handleClick() {
      this.accountCreateModalRef.current.showModal();
    }
  }, {
    key: 'handleAccountCreated',
    value: function handleAccountCreated(account) {
      this.setState(function (prevState) {
        return {
          accounts: prevState.accounts.concat([account]).sort(function (a1, a2) {
            return a1.accountCode.localeCompare(a2.accountCode);
          })
        };
      });
    }
  }, {
    key: 'renderListGroup',
    value: function renderListGroup(accountType) {
      var _this2 = this;

      var accounts = this.state.accounts.filter(function (account) {
        return account.accountTypeId === accountType.accountTypeId;
      });
      return _react2.default.createElement(
        'div',
        { className: 'card mb-4', key: accountType.accountTypeId },
        _react2.default.createElement(
          'div',
          { className: 'card-header' },
          _react2.default.createElement(
            'div',
            { className: 'd-flex w-100 justify-content-between' },
            _react2.default.createElement(
              'div',
              null,
              accountType.accountTypeCode + " - " + accountType.accountTypeName
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'small',
                null,
                accounts.length,
                ' account',
                accounts.length == 1 ? "" : "s"
              )
            )
          )
        ),
        _react2.default.createElement(
          'ul',
          { className: 'list-group list-group-flush' },
          accounts.filter(function (account) {
            return !account.parentAccountId;
          }).map(function (account) {
            return _this2.renderListGroupItem(account);
          })
        )
      );
    }
  }, {
    key: 'renderListGroupItem',
    value: function renderListGroupItem(account) {
      var _this3 = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      return _react2.default.createElement(
        _react2.default.Fragment,
        { key: account.accountId },
        _react2.default.createElement(
          'li',
          { className: 'list-group-item py-2', key: account.accountId },
          _react2.default.createElement(
            'span',
            { style: { paddingLeft: depth + "em" } },
            account.accountCode + " - " + account.accountName
          )
        ),
        this.state.accounts.filter(function (a2) {
          return a2.parentAccountId == account.accountId;
        }).map(function (a2) {
          return _this3.renderListGroupItem(a2, depth + 1);
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        _DocumentTitle2.default,
        { title: 'Accounts' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary', onClick: this.handleClick },
              _react2.default.createElement('i', { className: 'fa fa-plus' }),
              ' Create Account'
            ),
            _react2.default.createElement(AccountCreateModal, {
              accountTypes: this.props.accountTypes,
              accounts: this.state.accounts,
              handleAccountCreated: this.handleAccountCreated,
              ref: this.accountCreateModalRef
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-lg-6' },
              this.props.accountTypes.filter(function (accountType) {
                return accountType.accountTypeId <= 3;
              }) // Asset, Liability, Equity
              .map(function (accountType) {
                return _this4.renderListGroup(accountType);
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-lg-6' },
              this.props.accountTypes.filter(function (accountType) {
                return accountType.accountTypeId > 3;
              }) // Income, Expense
              .map(function (accountType) {
                return _this4.renderListGroup(accountType);
              })
            )
          )
        )
      );
    }
  }]);

  return AccountsMain;
}(_react2.default.Component);

var AccountCreateModal = function (_React$Component2) {
  _inherits(AccountCreateModal, _React$Component2);

  function AccountCreateModal(props) {
    _classCallCheck(this, AccountCreateModal);

    var _this5 = _possibleConstructorReturn(this, (AccountCreateModal.__proto__ || Object.getPrototypeOf(AccountCreateModal)).call(this, props));

    _this5.state = {
      disabled: false,
      err: null, message: null,
      input: {
        accountType: "",
        accountCode: "",
        accountName: "",
        parentAccount: ""
      },
      valid: {}
    };

    _this5.modalRef = _react2.default.createRef();

    _this5.showModal = _this5.showModal.bind(_this5);
    _this5.handleChange = _this5.handleChange.bind(_this5);
    _this5.handleClear = _this5.handleClear.bind(_this5);
    _this5.handleSubmit = _this5.handleSubmit.bind(_this5);
    return _this5;
  }

  _createClass(AccountCreateModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.modalRef.current).on('hidden.bs.modal', function (e) {});
    }
  }, {
    key: 'showModal',
    value: function showModal() {
      this.handleClear();
      $(this.modalRef.current).modal();
    }
  }, {
    key: 'setInput',
    value: function setInput(id, value) {
      this.setState(function (prevState) {
        var input = Object.assign({}, prevState.input);
        input[id] = value;
        if (id == "accountType" && prevState.input[id] != value) {
          input["parentAccount"] = "";
        }
        return {
          input: input,
          valid: {}
        };
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var id = e.target.id.replace(/Input$/, '');
      this.setInput(id, e.target.value);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      this.setState({
        err: null, message: null,
        input: Object.keys(this.state.input).reduce(function (input, key) {
          input[key] = "";
          return input;
        }, {}),
        valid: {}
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      var _this6 = this;

      e.preventDefault();

      var input = this.state.input;
      var valid = this.state.valid;
      valid.accountType = !!input.accountType;
      valid.accountCode = !!input.accountCode;
      valid.accountName = !!input.accountName;
      valid.parentAccount = true;
      if (!Object.keys(valid).every(function (id) {
        return valid[id];
      })) {
        this.setState({ valid: valid });
        return;
      }

      this.setState({ disabled: true, err: null, message: null });

      var accountDTO = {
        accountTypeId: input.accountType,
        accountCode: input.accountCode,
        accountName: input.accountName,
        parentAccountId: input.parentAccount
      };
      (0, _FetchContainer.fetchJSON)('api/account', {
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(accountDTO)
      }).then(function (account) {
        _this6.setState({
          disabled: false,
          message: account.accountCode + " " + _unicode.mdash + " account has been created."
        });
        _this6.props.handleAccountCreated(account);
      }).catch(function (err) {
        _this6.setState({
          disabled: false,
          err: err
        });
      });
    }
  }, {
    key: 'getFormControlProps',
    value: function getFormControlProps(id) {
      var className = 'form-control';
      if (this.state.valid.hasOwnProperty(id)) {
        if (this.state.valid[id]) {
          className += " is-valid";
        } else {
          className += " is-invalid";
        }
      }
      return {
        className: className,
        id: id + "Input",
        value: this.state.input[id],
        onChange: this.handleChange
      };
    }
  }, {
    key: 'renderAlert',
    value: function renderAlert() {
      var _this7 = this;

      var handleClear = function handleClear() {
        return _this7.setState({ err: null, message: null });
      };
      if (this.state.err || this.state.message) {
        return _react2.default.createElement(
          'div',
          { className: "alert alert-" + (this.state.err ? "danger" : "success") + " alert-dismissible mb-0" },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'close', 'aria-label': 'Close', onClick: handleClear },
            _react2.default.createElement(
              'span',
              { 'aria-hidden': 'true' },
              '\xD7'
            )
          ),
          this.state.err ? this.state.err.toString() : this.state.message
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      return _react2.default.createElement(
        'form',
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'div',
          { ref: this.modalRef,
            className: 'modal fade', tabindex: '-1', role: 'dialog', 'aria-hidden': 'true' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog modal-lg', role: 'document' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'h5',
                  { className: 'modal-title' },
                  'Create Account'
                ),
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                  _react2.default.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '\xD7'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-body' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-row' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group col-lg-4' },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'accountTypeInput' },
                      'Account Type'
                    ),
                    _react2.default.createElement(
                      _AccountTypeSelect2.default,
                      { accountTypes: this.props.accountTypes },
                      _react2.default.createElement('select', this.getFormControlProps('accountType'))
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group col-lg-8' },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'parentAccountInput' },
                      'Parent Account'
                    ),
                    _react2.default.createElement(
                      _AccountSelect2.default,
                      {
                        accountTypes: this.props.accountTypes,
                        accounts: this.props.accounts.filter(function (a) {
                          return a.accountTypeId == _this8.state.input.accountType;
                        }),
                        activeOnly: true
                      },
                      _react2.default.createElement(
                        'select',
                        _extends({ disabled: !this.state.input.accountType }, this.getFormControlProps('parentAccount')),
                        _react2.default.createElement(
                          'option',
                          { value: '' },
                          'None'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'accountCodeInput' },
                    'Short Code'
                  ),
                  _react2.default.createElement('input', _extends({
                    type: 'text',
                    placeholder: 'Short Code'
                  }, this.getFormControlProps('accountCode')))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'accountNameInput' },
                    'Long Name'
                  ),
                  _react2.default.createElement('input', _extends({
                    type: 'text',
                    placeholder: 'Long Name'
                  }, this.getFormControlProps('accountName')))
                ),
                this.renderAlert()
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-footer justify-content-start flex-wrap' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn my-1 btn-primary', disabled: this.state.disabled,
                    onClick: this.handleSubmit },
                  'Create Account'
                ),
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn my-1 btn-outline-secondary',
                    onClick: this.handleClear },
                  'Clear'
                ),
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn my-1 btn-outline-secondary', 'data-dismiss': 'modal' },
                  'Close'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return AccountCreateModal;
}(_react2.default.Component);

exports.default = Accounts;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _unicode = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountSelect = function (_React$Component) {
  _inherits(AccountSelect, _React$Component);

  function AccountSelect(props) {
    _classCallCheck(this, AccountSelect);

    return _possibleConstructorReturn(this, (AccountSelect.__proto__ || Object.getPrototypeOf(AccountSelect)).call(this, props));
  }

  _createClass(AccountSelect, [{
    key: 'renderOption',
    value: function renderOption(account) {
      var _this2 = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      return _react2.default.createElement(
        _react2.default.Fragment,
        { key: account.accountId },
        _react2.default.createElement(
          'option',
          { value: account.accountId },
          _unicode.emsp.repeat(depth),
          account.accountCode + " - " + account.accountName
        ),
        this.props.accounts.filter(function (a2) {
          return a2.parentAccountId == account.accountId;
        }).map(function (a2) {
          return _this2.renderOption(a2, depth + 1);
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var selectComponent = _react2.default.Children.only(this.props.children); // <select>
      var options = _react2.default.Children.toArray(selectComponent.props.children);
      if (this.props.accountTypes && this.props.accounts) {
        options.push(this.props.accountTypes.filter(function (accountType) {
          return _this3.props.accounts.some(function (account) {
            return account.accountTypeId === accountType.accountTypeId;
          });
        }).map(function (accountType) {
          return _react2.default.createElement(
            'optgroup',
            {
              key: accountType.accountTypeId,
              label: accountType.accountTypeCode + " - " + accountType.accountTypeName
            },
            _this3.props.accounts.filter(function (account) {
              return account.accountTypeId === accountType.accountTypeId;
            }).filter(function (account) {
              return !account.parentAccountId;
            }).filter(function (account) {
              return !_this3.props.activeOnly || account.activeFlag === "Y";
            }).map(function (account) {
              return _this3.renderOption(account);
            })
          );
        }));
      } else {
        options.push(_react2.default.createElement('optgroup', { disabled: true, label: 'Loading...', className: 'text-muted' }));
      }
      return _react2.default.cloneElement.apply(_react2.default, [selectComponent, selectComponent.props].concat(_toConsumableArray(options)));
    }
  }]);

  return AccountSelect;
}(_react2.default.Component);

AccountSelect.propTypes = {
  accountTypes: _propTypes2.default.array,
  accounts: _propTypes2.default.array,
  activeOnly: _propTypes2.default.bool
};

exports.default = AccountSelect;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountTypeSelect = function AccountTypeSelect(_ref) {
  var accountTypes = _ref.accountTypes,
      children = _ref.children;

  var options = [_react2.default.createElement(
    "option",
    { value: "", hidden: true },
    "Choose account type..."
  )];
  if (accountTypes) {
    options.push(accountTypes.map(function (accountType) {
      return _react2.default.createElement(
        "option",
        { value: accountType.accountTypeId },
        accountType.accountTypeCode,
        " - ",
        accountType.accountTypeName
      );
    }));
  } else {
    options.push(_react2.default.createElement(
      "option",
      { disabled: true, className: "text-muted" },
      "Loading..."
    ));
  }
  var selectComponent = _react2.default.Children.only(children); // <select>
  return _react2.default.cloneElement.apply(_react2.default, [selectComponent, selectComponent.props].concat(options));
};

exports.default = AccountTypeSelect;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _DocumentTitle = __webpack_require__(11);

var _DocumentTitle2 = _interopRequireDefault(_DocumentTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users() {
    _classCallCheck(this, Users);

    return _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).apply(this, arguments));
  }

  _createClass(Users, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _DocumentTitle2.default,
        { title: 'Users' },
        _react2.default.createElement(
          'div',
          null,
          'Users'
        )
      );
    }
  }]);

  return Users;
}(_react2.default.Component);

exports.default = Users;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar(props) {
    _classCallCheck(this, Sidebar);

    var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

    var tabIndex = 1;
    if (props.location.pathname.startsWith("/settings")) {
      tabIndex = 2;
    }

    _this.state = {
      tabIndex: tabIndex
    };
    return _this;
  }

  _createClass(Sidebar, [{
    key: 'onClickTab',
    value: function onClickTab(tabIndex, e) {
      e.preventDefault();
      this.setState({ tabIndex: tabIndex });
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem(tabIndex, tabName, iconName) {
      var active = tabIndex == this.state.tabIndex;
      return _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          'a',
          { className: "nav-link" + (active ? " active" : ""),
            href: '#',
            onClick: this.onClickTab.bind(this, tabIndex) },
          _react2.default.createElement('i', { className: "fa " + iconName })
        )
      );
    }
  }, {
    key: 'renderNavItem',
    value: function renderNavItem(url, text) {
      return _react2.default.createElement(
        'li',
        { className: 'nav-item' },
        _react2.default.createElement(
          _reactRouterDom.NavLink,
          { to: url, className: 'nav-link', onClick: this.props.onBlur },
          text
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var tabOffset = -200 * (this.state.tabIndex - 1);
      return _react2.default.createElement(
        'aside',
        { className: 'oasisledger-sidebar',
          tabIndex: '-1',
          onFocus: this.props.onFocus,
          onBlur: this.props.onBlur
        },
        _react2.default.createElement(
          'nav',
          { className: 'oasisledger-sidebar__menu' },
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-tabs' },
            this.renderMenuItem(1, "pages", "fa-book"),
            this.renderMenuItem(2, "settings", "fa-cog")
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'oasisledger-sidebar__content' },
          _react2.default.createElement(
            'div',
            { className: 'oasisledger-sidebar__tab', style: { marginLeft: tabOffset + "px" } },
            _react2.default.createElement(
              'div',
              { className: 'oasisledger-sidebar__heading' },
              'Pages'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'oasisledger-sidebar__nav' },
              _react2.default.createElement(
                'ul',
                { className: 'nav flex-column' },
                this.renderNavItem("/postings", "Postings"),
                this.renderNavItem("/balances", "Balances")
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'oasisledger-sidebar__tab' },
            _react2.default.createElement(
              'div',
              { className: 'oasisledger-sidebar__heading' },
              'Settings'
            ),
            _react2.default.createElement(
              'nav',
              { className: 'oasisledger-sidebar__nav' },
              _react2.default.createElement(
                'ul',
                { className: 'nav flex-column' },
                this.renderNavItem("/settings/accounts", "Accounts"),
                this.renderNavItem("/settings/users", "Users")
              )
            )
          )
        )
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;

/***/ })
/******/ ]);