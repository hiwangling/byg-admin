/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "static/js/" + ({}[chunkId]||chunkId) + "." + {"chunk-18b8578e":"99925f7f","chunk-225d93b2":"bdfe6c28","chunk-53b647de":"382cb7c1","chunk-9e927c78":"aeff1cdd","chunk-9fd7fc88":"533a3987"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"chunk-18b8578e":1,"chunk-225d93b2":1,"chunk-53b647de":1,"chunk-9e927c78":1,"chunk-9fd7fc88":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "static/css/" + ({}[chunkId]||chunkId) + "." + {"chunk-18b8578e":"240f4524","chunk-225d93b2":"dade5179","chunk-53b647de":"fab76d55","chunk-9e927c78":"0e540b6d","chunk-9fd7fc88":"48892557"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "0653":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68ef");
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "09fe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0fee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1128":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepAssign; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");

var hasOwnProperty = Object.prototype.hasOwnProperty;

function assignKey(to, from, key) {
  var val = from[key];

  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(val)) {
    return;
  }

  if (!hasOwnProperty.call(to, key) || !Object(___WEBPACK_IMPORTED_MODULE_0__[/* isObj */ "c"])(val) || typeof val === 'function') {
    to[key] = val;
  } else {
    // eslint-disable-next-line no-use-before-define
    to[key] = deepAssign(Object(to[key]), from[key]);
  }
}

function deepAssign(to, from) {
  Object.keys(from).forEach(function (key) {
    assignKey(to, from, key);
  });
  return to;
}

/***/ }),

/***/ "1146":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1325":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsPassive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return off; });
/* unused harmony export stopPropagation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return preventDefault; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");

// eslint-disable-next-line import/no-mutable-exports
var supportsPassive = false;

if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "d"]) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      // eslint-disable-next-line getter-return
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function on(target, event, handler, passive) {
  if (passive === void 0) {
    passive = false;
  }

  if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "d"]) {
    target.addEventListener(event, handler, supportsPassive ? {
      capture: false,
      passive: passive
    } : false);
  }
}
function off(target, event, handler) {
  if (!___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "d"]) {
    target.removeEventListener(event, handler);
  }
}
function stopPropagation(event) {
  event.stopPropagation();
}
function preventDefault(event, isStopPropagation) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

/***/ }),

/***/ "2381":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2638":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e)}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h)}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments)}};module.exports=mergeJsxProps;


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "34e9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2638");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d282");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ba31");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b1d2");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('cell-group'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function CellGroup(h, props, slots, ctx) {
  var _ref;

  var Group = h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": [bem(), (_ref = {}, _ref[_utils_constant__WEBPACK_IMPORTED_MODULE_3__[/* BORDER_TOP_BOTTOM */ "e"]] = props.border, _ref)]
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_2__[/* inherit */ "b"])(ctx, true)]), [slots.default && slots.default()]);

  if (props.title) {
    return h("div", [h("div", {
      "class": bem('title')
    }, [props.title]), Group]);
  }

  return Group;
}

CellGroup.props = {
  title: String,
  border: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(CellGroup));

/***/ }),

/***/ "3875":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchMixin; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
  data: function data() {
    return {
      direction: ''
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }
});

/***/ }),

/***/ "3a34":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vconsole v2.5.2 (https://github.com/WechatFE/vConsole)
 * Copyright 2016, WechatFE Team
 * MIT license
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var l=o[n]={exports:{},id:n,loaded:!1};return e[n].call(l.exports,l,l.exports,t),l.loaded=!0,l.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(1),i=n(l),r=o(15),a=n(r),c=o(16),s=n(c),d=o(23),u=n(d),v=o(25),f=n(v),p=new i["default"],b=new s["default"]("default","Log");p.addPlugin(b);var g=new u["default"]("system","System");p.addPlugin(g);var h=new f["default"]("network","Network");p.addPlugin(h),p.VConsolePlugin=a["default"],t["default"]=p,e.exports=t["default"]},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function l(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=o(2),c=l(a),s=o(3),d=n(s),u=o(4),v=l(u);o(6);var f=o(10),p=l(f),b=o(11),g=l(b),h=o(12),m=l(h),y=o(13),_=l(y),w=o(14),x=l(w),k=function(){function e(){i(this,e);var t=this;this.version=c["default"].version,this.html=p["default"],this.$dom=null,this.activedTab="",this.tabList=[],this.pluginList={},this.isReady=!1,this.switchPos={x:10,y:10,startX:0,startY:0,endX:0,endY:0},this.tool=d,this.$=v["default"];var o=function(){t._render(),t._mockTap(),t._bindEvent(),t._autoRun()};void 0!==document?"complete"==document.readyState?o():v["default"].bind(window,"load",o):!function(){var e=void 0,t=function n(){document&&"complete"==document.readyState?(e&&clearTimeout(e),o()):e=setTimeout(n,1)};e=setTimeout(t,1)}()}return r(e,[{key:"_render",value:function(){var e="#__vconsole";if(!v["default"].one(e)){var t=document.createElement("div");t.innerHTML=this.html,document.documentElement.insertAdjacentElement("beforeend",t.children[0])}this.$dom=v["default"].one(e);var o=v["default"].one(".vc-switch",this.$dom),n=1*d.getStorage("switch_x"),l=1*d.getStorage("switch_y");(n||l)&&(n+o.offsetWidth>document.documentElement.offsetWidth&&(n=document.documentElement.offsetWidth-o.offsetWidth),l+o.offsetHeight>document.documentElement.offsetHeight&&(l=document.documentElement.offsetHeight-o.offsetHeight),0>n&&(n=0),0>l&&(l=0),this.switchPos.x=n,this.switchPos.y=l,v["default"].one(".vc-switch").style.right=n+"px",v["default"].one(".vc-switch").style.bottom=l+"px"),v["default"].one(".vc-mask",this.$dom).style.display="none"}},{key:"_mockTap",value:function(){var e=700,t=10,o=void 0,n=void 0,l=void 0,i=!1,r=null;this.$dom.addEventListener("touchstart",function(e){if(void 0===o){var t=e.targetTouches[0];n=t.pageX,l=t.pageY,o=e.timeStamp,r=e.target.nodeType===Node.TEXT_NODE?e.target.parentNode:e.target}},!1),this.$dom.addEventListener("touchmove",function(e){var o=e.changedTouches[0];(Math.abs(o.pageX-n)>t||Math.abs(o.pageY-l)>t)&&(i=!0)}),this.$dom.addEventListener("touchend",function(t){if(i===!1&&t.timeStamp-o<e&&null!=r){var n=r.tagName.toLowerCase(),l=!1;switch(n){case"textarea":l=!0;break;case"input":switch(r.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":l=!1;break;default:l=!r.disabled&&!r.readOnly}}l?r.focus():t.preventDefault();var a=t.changedTouches[0],c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,c.initEvent("click",!0,!0),r.dispatchEvent(c)}o=void 0,i=!1,r=null},!1)}},{key:"_bindEvent",value:function(){var e=this,t=v["default"].one(".vc-switch",e.$dom);v["default"].bind(t,"touchstart",function(t){e.switchPos.startX=t.touches[0].pageX,e.switchPos.startY=t.touches[0].pageY}),v["default"].bind(t,"touchend",function(t){e.switchPos.x=e.switchPos.endX,e.switchPos.y=e.switchPos.endY,e.switchPos.startX=0,e.switchPos.startY=0,e.switchPos.endX=0,e.switchPos.endY=0,d.setStorage("switch_x",e.switchPos.x),d.setStorage("switch_y",e.switchPos.y)}),v["default"].bind(t,"touchmove",function(o){if(o.touches.length>0){var n=o.touches[0].pageX-e.switchPos.startX,l=o.touches[0].pageY-e.switchPos.startY,i=e.switchPos.x-n,r=e.switchPos.y-l;i+t.offsetWidth>document.documentElement.offsetWidth&&(i=document.documentElement.offsetWidth-t.offsetWidth),r+t.offsetHeight>document.documentElement.offsetHeight&&(r=document.documentElement.offsetHeight-t.offsetHeight),0>i&&(i=0),0>r&&(r=0),t.style.right=i+"px",t.style.bottom=r+"px",e.switchPos.endX=i,e.switchPos.endY=r,o.preventDefault()}}),v["default"].bind(v["default"].one(".vc-switch",e.$dom),"click",function(){e.show()}),v["default"].bind(v["default"].one(".vc-hide",e.$dom),"click",function(){e.hide()}),v["default"].bind(v["default"].one(".vc-mask",e.$dom),"click",function(t){return t.target!=v["default"].one(".vc-mask")?!1:void e.hide()}),v["default"].delegate(v["default"].one(".vc-tabbar",e.$dom),"click",".vc-tab",function(t){var o=this.dataset.tab;o!=e.activedTab&&e.showTab(o)}),v["default"].bind(v["default"].one(".vc-panel",e.$dom),"transitionend webkitTransitionEnd oTransitionEnd otransitionend",function(t){return t.target!=v["default"].one(".vc-panel")?!1:void(v["default"].hasClass(e.$dom,"vc-toggle")||(t.target.style.display="none"))});var o=v["default"].one(".vc-content",e.$dom),n=!1;v["default"].bind(o,"touchstart",function(e){var t=o.scrollTop,l=o.scrollHeight,i=t+o.offsetHeight;0===t?(o.scrollTop=1,0===o.scrollTop&&(v["default"].hasClass(e.target,"vc-cmd-input")||(n=!0))):i===l&&(o.scrollTop=t-1,o.scrollTop===t&&(v["default"].hasClass(e.target,"vc-cmd-input")||(n=!0)))}),v["default"].bind(o,"touchmove",function(e){n&&e.preventDefault()}),v["default"].bind(o,"touchend",function(e){n=!1})}},{key:"_autoRun",value:function(){this.isReady=!0;for(var e in this.pluginList)this._initPlugin(this.pluginList[e]);this.tabList.length>0&&this.showTab(this.tabList[0])}},{key:"_initPlugin",value:function(e){var t=this;e.trigger("init"),e.trigger("renderTab",function(o){t.tabList.push(e.id);var n=v["default"].render(g["default"],{id:e.id,name:e.name});v["default"].one(".vc-tabbar",t.$dom).insertAdjacentElement("beforeend",n);var l=v["default"].render(m["default"],{id:e.id});o&&(d.isString(o)?l.innerHTML+=o:d.isFunction(o.appendTo)?o.appendTo(l):d.isElement(o)&&l.insertAdjacentElement("beforeend",o)),v["default"].one(".vc-content",t.$dom).insertAdjacentElement("beforeend",l)}),e.trigger("addTopBar",function(o){if(o)for(var n=v["default"].one(".vc-topbar",t.$dom),l=function(t){var l=o[t],i=v["default"].render(_["default"],{name:l.name||"Undefined",className:l.className||"",pluginID:e.id});if(l.data)for(var r in l.data)i.dataset[r]=l.data[r];d.isFunction(l.onClick)&&v["default"].bind(i,"click",function(t){var o=l.onClick.call(i);o===!1||(v["default"].removeClass(v["default"].all(".vc-topbar-"+e.id),"vc-actived"),v["default"].addClass(i,"vc-actived"))}),n.insertAdjacentElement("beforeend",i)},i=0;i<o.length;i++)l(i)}),e.trigger("addTool",function(t){if(t)for(var o=v["default"].one(".vc-tool-last"),n=function(n){var l=t[n],i=v["default"].render(x["default"],{name:l.name||"Undefined",pluginID:e.id});1==l.global&&v["default"].addClass(i,"vc-global-tool"),d.isFunction(l.onClick)&&v["default"].bind(i,"click",function(e){l.onClick.call(i)}),o.parentNode.insertBefore(i,o)},l=0;l<t.length;l++)n(l)}),e.trigger("ready")}},{key:"_triggerPluginsEvent",value:function(e){for(var t in this.pluginList)this.pluginList[t].trigger(e)}},{key:"_triggerPluginEvent",value:function(e,t){var o=this.pluginList[e];o&&o.trigger(t)}},{key:"addPlugin",value:function(e){return void 0!==this.pluginList[e.id]?(console.warn("Plugin "+e.id+" has already been added."),!1):(this.pluginList[e.id]=e,this.isReady&&(this._initPlugin(e),1==this.tabList.length&&this.showTab(this.tabList[0])),!0)}},{key:"removePlugin",value:function(e){e=(e+"").toLowerCase();var t=this.pluginList[e];if(void 0===t)return console.warn("Plugin "+e+" does not exist."),!1;if(t.trigger("remove"),this.isReady){var o=v["default"].one("#__vc_tab_"+e);o&&o.parentNode.removeChild(o);for(var n=v["default"].all(".vc-topbar-"+e,this.$dom),l=0;l<n.length;l++)n[l].parentNode.removeChild(n[l]);var i=v["default"].one("#__vc_log_"+e);i&&i.parentNode.removeChild(i);for(var r=v["default"].all(".vc-tool-"+e,this.$dom),a=0;a<r.length;a++)r[a].parentNode.removeChild(r[a])}var c=this.tabList.indexOf(e);c>-1&&this.tabList.splice(c,1);try{delete this.pluginList[e]}catch(s){this.pluginList[e]=void 0}return this.activedTab==e&&this.tabList.length>0&&this.showTab(this.tabList[0]),!0}},{key:"show",value:function(){var e=this,t=v["default"].one(".vc-panel",this.$dom);t.style.display="block",setTimeout(function(){v["default"].addClass(e.$dom,"vc-toggle"),e._triggerPluginsEvent("showConsole");var t=v["default"].one(".vc-mask",e.$dom);t.style.display="block"},10)}},{key:"hide",value:function(){v["default"].removeClass(this.$dom,"vc-toggle"),this._triggerPluginsEvent("hideConsole");var e=v["default"].one(".vc-mask",this.$dom),t=v["default"].one(".vc-panel",this.$dom);v["default"].bind(e,"transitionend",function(o){e.style.display="none",t.style.display="none"})}},{key:"showTab",value:function(e){var t=v["default"].one("#__vc_log_"+e);v["default"].removeClass(v["default"].all(".vc-tab",this.$dom),"vc-actived"),v["default"].addClass(v["default"].one("#__vc_tab_"+e),"vc-actived"),v["default"].removeClass(v["default"].all(".vc-logbox",this.$dom),"vc-actived"),v["default"].addClass(t,"vc-actived");var o=v["default"].all(".vc-topbar-"+e,this.$dom);v["default"].removeClass(v["default"].all(".vc-toptab",this.$dom),"vc-toggle"),v["default"].addClass(o,"vc-toggle"),o.length>0?v["default"].addClass(v["default"].one(".vc-content",this.$dom),"vc-has-topbar"):v["default"].removeClass(v["default"].one(".vc-content",this.$dom),"vc-has-topbar"),v["default"].removeClass(v["default"].all(".vc-tool",this.$dom),"vc-toggle"),v["default"].addClass(v["default"].all(".vc-tool-"+e,this.$dom),"vc-toggle"),this._triggerPluginEvent(this.activedTab,"hide"),this.activedTab=e,this._triggerPluginEvent(this.activedTab,"show")}}]),e}();t["default"]=k,e.exports=t["default"]},function(e,t){e.exports={name:"vconsole",version:"2.5.2",description:"A lightweight, extendable front-end developer tool for mobile web page.",homepage:"https://github.com/WechatFE/vConsole",main:"dist/vconsole.min.js",scripts:{test:"mocha",dist:"webpack && npm test"},keywords:["console","debug","mobile"],repository:{type:"git",url:"git+https://github.com/WechatFE/vConsole.git"},dependencies:{},devDependencies:{"babel-core":"^6.7.7","babel-loader":"^6.2.4","babel-plugin-add-module-exports":"^0.1.4","babel-preset-es2015":"^6.6.0","babel-preset-stage-3":"^6.5.0",chai:"^3.5.0","css-loader":"^0.23.1","extract-text-webpack-plugin":"^1.0.1","html-loader":"^0.4.3",jsdom:"^9.2.1","json-loader":"^0.5.4",less:"^2.5.3","less-loader":"^2.2.3",mocha:"^2.5.3","style-loader":"^0.13.1",webpack:"~1.12.11"},author:"WechatFE Team",license:"MIT"}},function(e,t){"use strict";function o(e){var t=e>0?new Date(e):new Date,o=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1,l=t.getFullYear(),i=t.getHours()<10?"0"+t.getHours():t.getHours(),r=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),a=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),c=t.getMilliseconds()<10?"0"+t.getMilliseconds():t.getMilliseconds();return 100>c&&(c="0"+c),{time:+t,year:l,month:n,day:o,hour:i,minute:r,second:a,millisecond:c}}function n(e){return"[object Number]"==Object.prototype.toString.call(e)}function l(e){return"[object String]"==Object.prototype.toString.call(e)}function i(e){return"[object Array]"==Object.prototype.toString.call(e)}function r(e){return"[object Boolean]"==Object.prototype.toString.call(e)}function a(e){return"[object Undefined]"==Object.prototype.toString.call(e)}function c(e){return"[object Null]"==Object.prototype.toString.call(e)}function s(e){return"[object Symbol]"==Object.prototype.toString.call(e)}function d(e){return!("[object Object]"!=Object.prototype.toString.call(e)&&(n(e)||l(e)||r(e)||i(e)||c(e)||u(e)||a(e)||s(e)))}function u(e){return"[object Function]"==Object.prototype.toString.call(e)}function v(e){return"object"===("undefined"==typeof HTMLElement?"undefined":y(HTMLElement))?e instanceof HTMLElement:e&&"object"===("undefined"==typeof e?"undefined":y(e))&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function f(e){return document.createElement("a").appendChild(document.createTextNode(e)).parentNode.innerHTML}function p(e){function t(e){for(var t=p.length-1;t>=0;t--)if(p[t].child==e)return!0;return!1}function o(e){if(d(e)){if(t(e))return void(v+="CircularObject");p.push({parent:parent,child:e});var b=Object.keys(e);v+="{",f++;for(var g=0;g<b.length;g++){var h=b[g];e.hasOwnProperty&&!e.hasOwnProperty(h)||(v+=h+": ",o(e[h],e),g<b.length-1&&(v+=", "))}f--,v+="}",p.pop()}else if(i(e)){if(t(e))return void(v+="CircularArray");p.push({parent:parent,child:e}),v+="[",f++;for(var m=0;m<e.length;m++)o(e[m],e),m<e.length-1&&(v+=", ");f--,v+="]",p.pop()}else v+=l(e)?'"'+e+'"':n(e)?e:r(e)?e:c(e)?"null":a(e)?"undefined":u(e)?"function()":s(e)?"symbol":"unknown"}var v="",f=0,p=[];return o(e,null),v}function b(e){if(!d(e)&&!i(e))return[];var t=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],o=[];for(var n in e)t.indexOf(n)<0&&o.push(n);return o=o.sort()}function g(e){return Object.prototype.toString.call(e).replace("[object ","").replace("]","")}function h(e,t){window.localStorage&&(e="vConsole_"+e,localStorage.setItem(e,t))}function m(e){return window.localStorage?(e="vConsole_"+e,localStorage.getItem(e)):void 0}Object.defineProperty(t,"__esModule",{value:!0});var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.getDate=o,t.isNumber=n,t.isString=l,t.isArray=i,t.isBoolean=r,t.isUndefined=a,t.isNull=c,t.isSymbol=s,t.isObject=d,t.isFunction=u,t.isElement=v,t.htmlEncode=f,t.JSONStringify=p,t.getObjAllKeys=b,t.getObjName=g,t.setStorage=h,t.getStorage=m},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(3),i=o(5),r=n(i),a={};a.one=function(e,t){return t?t.querySelector(e):document.querySelector(e)},a.all=function(e,t){var o=void 0,n=[];return o=t?t.querySelectorAll(e):document.querySelectorAll(e),o&&o.length>0&&(n=Array.prototype.slice.call(o)),n},a.addClass=function(e,t){if(e){(0,l.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){var n=e[o].className||"",i=n.split(" ");i.indexOf(t)>-1||(i.push(t),e[o].className=i.join(" "))}}},a.removeClass=function(e,t){if(e){(0,l.isArray)(e)||(e=[e]);for(var o=0;o<e.length;o++){for(var n=e[o].className.split(" "),i=0;i<n.length;i++)n[i]==t&&(n[i]="");e[o].className=n.join(" ").trim()}}},a.hasClass=function(e,t){if(!e)return!1;for(var o=e.className.split(" "),n=0;n<o.length;n++)if(o[n]==t)return!0;return!1},a.bind=function(e,t,o,n){if(e){void 0===n&&(n=!1),(0,l.isArray)(e)||(e=[e]);for(var i=0;i<e.length;i++)e[i].addEventListener(t,o,n)}},a.delegate=function(e,t,o,n){e&&e.addEventListener(t,function(t){var l=a.all(o,e);if(l)e:for(var i=0;i<l.length;i++)for(var r=t.target;r;){if(r==l[i]){n.call(r,t);break e}if(r=r.parentNode,r==e)break}},!1)},a.render=r["default"],t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function o(e,t,o){var n=/\{\{([^\}]+)\}\}/g,l="var arr = [];\n",i=0,r=[],a=function(e,t){""!==e&&(l+=t?e.match(/^ ?else/g)?"} "+e+" {\n":e.match(/\/(if|for|switch)/g)?"}\n":e.match(/^ ?if|for|switch/g)?e+" {\n":e.match(/^ ?(break|continue) ?$/g)?e+";\n":e.match(/^ ?(case|default)/g)?e+":\n":"arr.push("+e+");\n":'arr.push("'+e.replace(/"/g,'\\"')+'");\n')};for(e=e.replace(/(\{\{ ?switch(.+?)\}\})[\r\n\t ]+\{\{/g,"$1{{"),e=e.replace(/^\n/,"").replace(/\n/g,"\\\n");r=n.exec(e);)a(e.slice(i,r.index),!1),a(r[1],!0),i=r.index+r[0].length;a(e.substr(i,e.length-i),!1),l+='return arr.join("");',l="with (this) {\n"+l+"\n}";var c=new Function(l).apply(t);if(!o){var s=document.createElement("div");s.innerHTML=c,c=s.children[0]}return c}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o,e.exports=t["default"]},function(e,t,o){var n=o(7);"string"==typeof n&&(n=[[e.id,n,""]]);o(9)(n,{});n.locals&&(e.exports=n.locals)},function(e,t,o){t=e.exports=o(8)(),t.push([e.id,'#__vconsole{color:#000;font-size:13px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#__vconsole .vc-max-height{max-height:250px}#__vconsole .vc-max-height-line{max-height:44px}#__vconsole .vc-min-height{min-height:40px}#__vconsole .vc-switch{display:block;position:fixed;right:10px;bottom:10px;color:#fff;background-color:#04be02;line-height:1;font-size:14px;padding:8px 16px;z-index:10000;border-radius:4px;box-shadow:0 0 8px rgba(0,0,0,.4)}#__vconsole .vc-mask{top:0;background:transparent;z-index:10001;transition:background .3s;-webkit-tap-highlight-color:transparent;overflow-y:scroll}#__vconsole .vc-mask,#__vconsole .vc-panel{display:none;position:fixed;left:0;right:0;bottom:0}#__vconsole .vc-panel{min-height:85%;z-index:10002;background-color:#efeff4;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}#__vconsole .vc-tabbar{border-bottom:1px solid #d9d9d9;overflow-x:auto;height:39px;width:auto;white-space:nowrap}#__vconsole .vc-tabbar .vc-tab{display:inline-block;line-height:39px;padding:0 15px;border-right:1px solid #d9d9d9;text-decoration:none;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-tabbar .vc-tab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-tabbar .vc-tab.vc-actived{background-color:#fff}#__vconsole .vc-content{background-color:#fff;overflow-x:hidden;overflow-y:auto;position:absolute;top:40px;left:0;right:0;bottom:40px;-webkit-overflow-scrolling:touch}#__vconsole .vc-content.vc-has-topbar{top:71px}#__vconsole .vc-topbar{background-color:#fbf9fe;display:flex;display:-webkit-box;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;width:100%}#__vconsole .vc-topbar .vc-toptab{display:none;flex:1;-webkit-box-flex:1;line-height:30px;padding:0 15px;border-bottom:1px solid #d9d9d9;text-decoration:none;text-align:center;color:#000;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}#__vconsole .vc-topbar .vc-toptab.vc-toggle{display:block}#__vconsole .vc-topbar .vc-toptab:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-topbar .vc-toptab.vc-actived{border-bottom:1px solid #3e82f7}#__vconsole .vc-logbox{display:none;position:relative;min-height:100%}#__vconsole .vc-logbox i{font-style:normal}#__vconsole .vc-logbox .vc-log{-webkit-tap-highlight-color:transparent}#__vconsole .vc-logbox .vc-log:empty:before{content:"Empty";color:#999;position:absolute;top:45%;left:0;right:0;bottom:0;font-size:15px;text-align:center}#__vconsole .vc-logbox .vc-item{margin:0;padding:6px 8px;overflow:hidden;line-height:1.3;border-bottom:1px solid #eee;word-break:break-word}#__vconsole .vc-logbox .vc-item-info{color:#6a5acd}#__vconsole .vc-logbox .vc-item-debug{color:#daa520}#__vconsole .vc-logbox .vc-item-warn{color:orange;border-color:#ffb930;background-color:#fffacd}#__vconsole .vc-logbox .vc-item-error{color:#dc143c;border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-log.vc-log-partly .vc-item{display:none}#__vconsole .vc-logbox .vc-log.vc-log-partly-error .vc-item-error,#__vconsole .vc-logbox .vc-log.vc-log-partly-info .vc-item-info,#__vconsole .vc-logbox .vc-log.vc-log-partly-log .vc-item-log,#__vconsole .vc-logbox .vc-log.vc-log-partly-warn .vc-item-warn{display:block}#__vconsole .vc-logbox .vc-item .vc-item-content{margin-right:60px;display:block}#__vconsole .vc-logbox .vc-item .vc-item-meta{color:#888;float:right;width:60px;text-align:right}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-content{margin-right:0}#__vconsole .vc-logbox .vc-item.vc-item-nometa .vc-item-meta{display:none}#__vconsole .vc-logbox .vc-item .vc-item-code{display:block;white-space:pre-wrap;overflow:auto;position:relative}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output{padding-left:12px}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-input:before,#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\203A";position:absolute;top:-3px;left:0;font-size:16px;color:#6a5acd}#__vconsole .vc-logbox .vc-item .vc-item-code.vc-item-code-output:before{content:"\\2039"}#__vconsole .vc-logbox .vc-item .vc-fold{display:block;overflow:auto;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer{display:block;font-style:italic;padding-left:10px;position:relative}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer:before{content:"";position:absolute;top:4px;left:2px;width:0;height:0;border:4px solid transparent;border-left-color:#000}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer.vc-toggle:before{top:6px;left:0;border-top-color:#000;border-left-color:transparent}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner{display:none;margin-left:10px}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner.vc-toggle{display:block}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-inner .vc-code-key{margin-left:10px}#__vconsole .vc-logbox .vc-item .vc-fold .vc-fold-outer .vc-code-key{margin-left:0}#__vconsole .vc-logbox .vc-code-key{color:#905}#__vconsole .vc-logbox .vc-code-private-key{color:#d391b5}#__vconsole .vc-logbox .vc-code-function{color:#905;font-style:italic}#__vconsole .vc-logbox .vc-code-boolean,#__vconsole .vc-logbox .vc-code-number{color:#0086b3}#__vconsole .vc-logbox .vc-code-string{color:#183691}#__vconsole .vc-logbox .vc-code-null,#__vconsole .vc-logbox .vc-code-undefined{color:#666}#__vconsole .vc-logbox .vc-cmd{position:absolute;height:40px;left:0;right:0;bottom:0;border-top:1px solid #d9d9d9;display:block!important}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input-wrap{display:block;height:28px;margin-right:40px;padding:6px 8px}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input{width:100%;border:none;resize:none;outline:none;padding:0;font-size:12px}#__vconsole .vc-logbox .vc-cmd .vc-cmd-input::-webkit-input-placeholder{line-height:28px}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn{position:absolute;top:0;right:0;bottom:0;width:40px;border:none;background-color:#efeff4;outline:none;-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-cmd .vc-cmd-btn:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-logbox .vc-group .vc-group-preview{-webkit-touch-callout:none}#__vconsole .vc-logbox .vc-group .vc-group-preview:active{background-color:#e6e6e6}#__vconsole .vc-logbox .vc-group .vc-group-detail{display:none;padding:0 0 10px 20px;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-group.vc-actived .vc-group-detail{display:block}#__vconsole .vc-logbox .vc-table .vc-table-row{display:flex;display:-webkit-flex;flex-direction:row;flex-wrap:wrap;-webkit-box-direction:row;-webkit-flex-wrap:wrap;overflow:hidden;border-bottom:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-row.vc-left-border{border-left:1px solid #eee}#__vconsole .vc-logbox .vc-table .vc-table-col{flex:1;-webkit-box-flex:1;padding:3px 4px;border-left:1px solid #eee;overflow:auto;white-space:pre-wrap;word-break:break-word;-webkit-overflow-scrolling:touch}#__vconsole .vc-logbox .vc-table .vc-table-col:first-child{border:none}#__vconsole .vc-logbox .vc-table .vc-small .vc-table-col{padding:0 4px;font-size:12px}#__vconsole .vc-logbox .vc-table .vc-table-col-2{flex:2;-webkit-box-flex:2}#__vconsole .vc-logbox .vc-table .vc-table-col-3{flex:3;-webkit-box-flex:3}#__vconsole .vc-logbox .vc-table .vc-table-col-4{flex:4;-webkit-box-flex:4}#__vconsole .vc-logbox .vc-table .vc-table-col-5{flex:5;-webkit-box-flex:5}#__vconsole .vc-logbox .vc-table .vc-table-col-6{flex:6;-webkit-box-flex:6}#__vconsole .vc-logbox .vc-table .vc-table-row-error{border-color:#f4a0ab;background-color:#ffe4e1}#__vconsole .vc-logbox .vc-table .vc-table-row-error .vc-table-col{color:#dc143c;border-color:#f4a0ab}#__vconsole .vc-logbox .vc-table .vc-table-col-title{font-weight:700}#__vconsole .vc-logbox.vc-actived{display:block}#__vconsole .vc-toolbar{border-top:1px solid #d9d9d9;line-height:39px;position:absolute;left:0;right:0;bottom:0;display:flex;display:-webkit-box;flex-direction:row;-webkit-box-direction:row}#__vconsole .vc-toolbar .vc-tool{display:none;text-decoration:none;color:#000;width:50%;flex:1;-webkit-box-flex:1;text-align:center;position:relative;-webkit-touch-callout:none}#__vconsole .vc-toolbar .vc-tool.vc-global-tool,#__vconsole .vc-toolbar .vc-tool.vc-toggle{display:block}#__vconsole .vc-toolbar .vc-tool:active{background-color:rgba(0,0,0,.15)}#__vconsole .vc-toolbar .vc-tool:after{content:" ";position:absolute;top:7px;bottom:7px;right:0;border-left:1px solid #d9d9d9}#__vconsole .vc-toolbar .vc-tool-last:after{border:none}#__vconsole.vc-toggle .vc-switch{display:none}#__vconsole.vc-toggle .vc-mask{background:rgba(0,0,0,.6);display:block}#__vconsole.vc-toggle .vc-panel{-webkit-transform:translate(0);transform:translate(0)}',""])},function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},l=0;l<this.length;l++){var i=this[l][0];"number"==typeof i&&(n[i]=!0)}for(l=0;l<t.length;l++){var r=t[l];"number"==typeof r[0]&&n[r[0]]||(o&&!r[2]?r[2]=o:o&&(r[2]="("+r[2]+") and ("+o+")"),e.push(r))}},e}},function(e,t,o){function n(e,t){for(var o=0;o<e.length;o++){var n=e[o],l=f[n.id];if(l){l.refs++;for(var i=0;i<l.parts.length;i++)l.parts[i](n.parts[i]);for(;i<n.parts.length;i++)l.parts.push(s(n.parts[i],t))}else{for(var r=[],i=0;i<n.parts.length;i++)r.push(s(n.parts[i],t));f[n.id]={id:n.id,refs:1,parts:r}}}}function l(e){for(var t=[],o={},n=0;n<e.length;n++){var l=e[n],i=l[0],r=l[1],a=l[2],c=l[3],s={css:r,media:a,sourceMap:c};o[i]?o[i].parts.push(s):t.push(o[i]={id:i,parts:[s]})}return t}function i(e,t){var o=g(),n=y[y.length-1];if("top"===e.insertAt)n?n.nextSibling?o.insertBefore(t,n.nextSibling):o.appendChild(t):o.insertBefore(t,o.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");o.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function s(e,t){var o,n,l;if(t.singleton){var i=m++;o=h||(h=a(t)),n=d.bind(null,o,i,!1),l=d.bind(null,o,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(o=c(t),n=v.bind(null,o),l=function(){r(o),o.href&&URL.revokeObjectURL(o.href)}):(o=a(t),n=u.bind(null,o),l=function(){r(o)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else l()}}function d(e,t,o,n){var l=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,l);else{var i=document.createTextNode(l),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function u(e,t){var o=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}function v(e,t){var o=t.css,n=t.sourceMap;n&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var l=new Blob([o],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(l),i&&URL.revokeObjectURL(i)}var f={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=p(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var o=l(e);return n(o,t),function(e){for(var i=[],r=0;r<o.length;r++){var a=o[r],c=f[a.id];c.refs--,i.push(c)}if(e){var s=l(e);n(s,t)}for(var r=0;r<i.length;r++){var c=i[r];if(0===c.refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete f[c.id]}}}};var _=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports='<div id=__vconsole class=""> <div class=vc-switch>vConsole</div> <div class=vc-mask> </div> <div class=vc-panel> <div class=vc-tabbar> </div> <div class=vc-topbar> </div> <div class=vc-content> </div> <div class=vc-toolbar> <a class="vc-tool vc-global-tool vc-tool-last vc-hide">Hide</a> </div> </div> </div>'},function(e,t){e.exports="<a class=vc-tab data-tab={{id}} id=__vc_tab_{{id}}>{{name}}</a>"},function(e,t){e.exports="<div class=vc-logbox id=__vc_log_{{id}}> </div>"},function(e,t){e.exports='<a href=javascript:; class="vc-toptab vc-topbar-{{pluginID}}{{if (className)}} {{className}}{{/if}}">{{name}}</a>'},function(e,t){e.exports='<a class="vc-tool vc-tool-{{pluginID}}">{{name}}</a>'},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=function(){function e(t){var n=arguments.length<=1||void 0===arguments[1]?"newPlugin":arguments[1];o(this,e),this.id=t,this.name=n,this.eventList={}}return n(e,[{key:"on",value:function(e,t){return this.eventList[e]=t,this}},{key:"trigger",value:function(e,t){if("function"==typeof this.eventList[e])this.eventList[e].call(this,t);else{var o="on"+e.charAt(0).toUpperCase()+e.slice(1);"function"==typeof this[o]&&this[o].call(this,t)}return this}},{key:"id",get:function(){return this._id},set:function(e){if(!e)throw"Plugin ID cannot be empty";this._id=e.toLowerCase()}},{key:"name",get:function(){return this._name},set:function(e){if(!e)throw"Plugin name cannot be empty";this._name=e}}]),e}();t["default"]=l,e.exports=t["default"]},function(module,exports,__webpack_require__){"use strict";function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_get=function e(t,o,n){null===t&&(t=Function.prototype);var l=Object.getOwnPropertyDescriptor(t,o);if(void 0===l){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in l)return l.value;var r=l.get;if(void 0!==r)return r.call(n)},_query=__webpack_require__(4),_query2=_interopRequireDefault(_query),_tool=__webpack_require__(3),tool=_interopRequireWildcard(_tool),_log=__webpack_require__(17),_log2=_interopRequireDefault(_log),_tabbox_default=__webpack_require__(21),_tabbox_default2=_interopRequireDefault(_tabbox_default),_item_code=__webpack_require__(22),_item_code2=_interopRequireDefault(_item_code),VConsoleDefaultTab=function(_VConsoleLogTab){function VConsoleDefaultTab(){var e;_classCallCheck(this,VConsoleDefaultTab);for(var t=arguments.length,o=Array(t),n=0;t>n;n++)o[n]=arguments[n];var l=_possibleConstructorReturn(this,(e=Object.getPrototypeOf(VConsoleDefaultTab)).call.apply(e,[this].concat(o)));return l.tplTabbox=_tabbox_default2["default"],l.windowOnError=null,l}return _inherits(VConsoleDefaultTab,_VConsoleLogTab),_createClass(VConsoleDefaultTab,[{key:"onReady",value:function(){var e=this;_get(Object.getPrototypeOf(VConsoleDefaultTab.prototype),"onReady",this).call(this),_query2["default"].bind(_query2["default"].one(".vc-cmd",this.$tabbox),"submit",function(t){t.preventDefault();var o=_query2["default"].one(".vc-cmd-input",t.target),n=o.value;o.value="",""!==n&&e.evalCommand(n)})}},{key:"mockConsole",value:function(){_get(Object.getPrototypeOf(VConsoleDefaultTab.prototype),"mockConsole",this).call(this);var e=this;tool.isFunction(window.onerror)&&(this.windowOnError=window.onerror),window.onerror=function(t,o,n,l,i){var r=t;o&&(r+="\n"+o.replace(location.origin,"")),(n||l)&&(r+=":"+n+":"+l),e.printLog({logType:"error",logs:[r],noOrigin:!0}),tool.isFunction(e.windowOnError)&&e.windowOnError.call(window,t,o,n,l,i)}}},{key:"evalCommand",value:function evalCommand(cmd){this.printLog({logType:"log",content:_query2["default"].render(_item_code2["default"],{content:cmd,type:"input"}),noMeta:!0,style:""});try{var result=eval(cmd),$content=void 0;tool.isArray(result)||tool.isObject(result)?$content=this.getFoldedLine(result):(tool.isNull(result)?result="null":tool.isUndefined(result)?result="undefined":tool.isFunction(result)?result="function()":tool.isString(result)&&(result='"'+result+'"'),$content=_query2["default"].render(_item_code2["default"],{content:result,type:"output"})),this.printLog({logType:"log",content:$content,noMeta:!0,style:""})}catch(e){this.printLog({logType:"error",logs:[e.message],noMeta:!0,style:""})}}}]),VConsoleDefaultTab}(_log2["default"]);exports["default"]=VConsoleDefaultTab,module.exports=exports["default"]},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=o(3),u=l(d),v=o(4),f=n(v),p=o(15),b=n(p),g=o(18),h=n(g),m=o(19),y=n(m),_=o(20),w=n(_),x=function(e){function t(){var e;i(this,t);for(var o=arguments.length,n=Array(o),l=0;o>l;l++)n[l]=arguments[l];var a=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.tplTabbox="",a.allowUnformattedLog=!0,a.isReady=!1,a.isShow=!1,a.$tabbox=null,a.console={},a.logList=[],a.isInBottom=!0,a.mockConsole(),a}return a(t,e),s(t,[{key:"onInit",value:function(){this.$tabbox=f["default"].render(this.tplTabbox,{})}},{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTopBar",value:function(e){for(var t=this,o=["All","Log","Info","Warn","Error"],n=[],l=0;l<o.length;l++)n.push({name:o[l],data:{type:o[l].toLowerCase()},className:"",onClick:function(){return f["default"].hasClass(this,"vc-actived")?!1:void t.showLogType(this.dataset.type||"all")}});n[0].className="vc-actived",e(n)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0;var t=f["default"].all(".vc-subtab",e.$tabbox);f["default"].bind(t,"click",function(o){if(o.preventDefault(),f["default"].hasClass(this,"vc-actived"))return!1;f["default"].removeClass(t,"vc-actived"),f["default"].addClass(this,"vc-actived");var n=this.dataset.type,l=f["default"].one(".vc-log",e.$tabbox);f["default"].removeClass(l,"vc-log-partly-log"),f["default"].removeClass(l,"vc-log-partly-info"),f["default"].removeClass(l,"vc-log-partly-warn"),f["default"].removeClass(l,"vc-log-partly-error"),"all"==n?f["default"].removeClass(l,"vc-log-partly"):(f["default"].addClass(l,"vc-log-partly"),f["default"].addClass(l,"vc-log-partly-"+n))});var o=f["default"].one(".vc-content");f["default"].bind(o,"scroll",function(t){e.isShow&&(o.scrollTop+o.offsetHeight>=o.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var n=0;n<e.logList.length;n++)e.printLog(e.logList[n]);e.logList=[]}},{key:"onRemove",value:function(){window.console.log=this.console.log,window.console.info=this.console.info,window.console.warn=this.console.warn,window.console.debug=this.console.debug,window.console.error=this.console.error,this.console={}}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.scrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.scrollToBottom()}},{key:"showLogType",value:function(e){var t=f["default"].one(".vc-log",this.$tabbox);f["default"].removeClass(t,"vc-log-partly-log"),f["default"].removeClass(t,"vc-log-partly-info"),f["default"].removeClass(t,"vc-log-partly-warn"),f["default"].removeClass(t,"vc-log-partly-error"),"all"==e?f["default"].removeClass(t,"vc-log-partly"):(f["default"].addClass(t,"vc-log-partly"),f["default"].addClass(t,"vc-log-partly-"+e))}},{key:"scrollToBottom",value:function(){var e=f["default"].one(".vc-content");e.scrollTop=e.scrollHeight-e.offsetHeight}},{key:"mockConsole",value:function(){var e=this;window.console?(this.console.log=window.console.log,this.console.info=window.console.info,this.console.warn=window.console.warn,this.console.debug=window.console.debug,this.console.error=window.console.error):window.console={},window.console.log=function(){e.printLog({logType:"log",logs:arguments})},window.console.info=function(){e.printLog({logType:"info",logs:arguments})},window.console.warn=function(){e.printLog({logType:"warn",logs:arguments})},window.console.debug=function(){e.printLog({logType:"debug",logs:arguments})},window.console.error=function(){e.printLog({logType:"error",logs:arguments})}}},{key:"clearLog",value:function(){f["default"].one(".vc-log",this.$tabbox).innerHTML=""}},{key:"printOriginLog",value:function(e){"function"==typeof this.console[e.logType]&&this.console[e.logType].apply(window.console,e.logs)}},{key:"printLog",value:function(e){var t=e.logs||[];if(t.length||e.content){t=[].slice.call(t||[]);var o=!0,n=/^\[(\w+)\] ?/i,l="";if(u.isString(t[0])){var i=t[0].match(n);null!==i&&i.length>0&&(l=i[1].toLowerCase())}if(l?o=l==this.id:0==this.allowUnformattedLog&&(o=!1),!o)return void(e.noOrigin||this.printOriginLog(e));if(e.date||(e.date=+new Date),!this.isReady)return void this.logList.push(e);if(u.isString(t[0])&&(t[0]=t[0].replace(n,""),""===t[0]&&t.shift()),!e.meta){var r=u.getDate(e.date);e.meta=r.hour+":"+r.minute+":"+r.second}for(var a=f["default"].render(h["default"],{logType:e.logType,noMeta:!!e.noMeta,meta:e.meta,style:e.style||""}),s=f["default"].one(".vc-item-content",a),d=0;d<t.length;d++){var v=void 0;try{if(""===t[d])continue;v=u.isFunction(t[d])?"<span> "+t[d].toString()+"</span>":u.isObject(t[d])||u.isArray(t[d])?this.getFoldedLine(t[d]):"<span> "+u.htmlEncode(t[d]).replace(/\n/g,"<br/>")+"</span>"}catch(p){v="<span> ["+c(t[d])+"]</span>"}v&&("string"==typeof v?s.insertAdjacentHTML("beforeend",v):s.insertAdjacentElement("beforeend",v))}u.isObject(e.content)&&s.insertAdjacentElement("beforeend",e.content),f["default"].one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",a),this.isInBottom&&this.scrollToBottom(),e.noOrigin||this.printOriginLog(e)}}},{key:"getFoldedLine",value:function(e,t){var o=this;if(!t){var n=u.JSONStringify(e),l=n.substr(0,26);t=u.getObjName(e),n.length>26&&(l+="..."),t+=" "+l}var i=f["default"].render(y["default"],{outer:t,lineType:"obj"});return f["default"].bind(f["default"].one(".vc-fold-outer",i),"click",function(t){t.preventDefault(),t.stopPropagation(),f["default"].hasClass(i,"vc-toggle")?(f["default"].removeClass(i,"vc-toggle"),f["default"].removeClass(f["default"].one(".vc-fold-inner",i),"vc-toggle"),f["default"].removeClass(f["default"].one(".vc-fold-outer",i),"vc-toggle")):(f["default"].addClass(i,"vc-toggle"),f["default"].addClass(f["default"].one(".vc-fold-inner",i),"vc-toggle"),f["default"].addClass(f["default"].one(".vc-fold-outer",i),"vc-toggle"));var n=f["default"].one(".vc-fold-inner",i);if(0==n.children.length&&e){for(var l=u.getObjAllKeys(e),r=0;r<l.length;r++){var a=e[l[r]],c="undefined",s="";u.isString(a)?(c="string",a='"'+a+'"'):u.isNumber(a)?c="number":u.isBoolean(a)?c="boolean":u.isNull(a)?(c="null",a="null"):u.isUndefined(a)?(c="undefined",a="undefined"):u.isFunction(a)?(c="function",a="function()"):u.isSymbol(a)&&(c="symbol");var d=void 0;if(u.isArray(a)){var v=u.getObjName(a)+"["+a.length+"]";d=o.getFoldedLine(a,f["default"].render(w["default"],{key:l[r],keyType:s,value:v,valueType:"array"},!0))}else if(u.isObject(a)){var p=u.getObjName(a);d=o.getFoldedLine(a,f["default"].render(w["default"],{key:u.htmlEncode(l[r]),keyType:s,value:p,valueType:"object"},!0))}else{e.hasOwnProperty&&!e.hasOwnProperty(l[r])&&(s="private");var b={lineType:"kv",key:u.htmlEncode(l[r]),keyType:s,value:u.htmlEncode(a),valueType:c};d=f["default"].render(y["default"],b)}n.insertAdjacentElement("beforeend",d)}if(u.isObject(e)){var g=e.__proto__,h=void 0;h=u.isObject(g)?o.getFoldedLine(g,f["default"].render(w["default"],{key:"__proto__",keyType:"private",value:u.getObjName(g),valueType:"object"},!0)):f["default"].render(w["default"],{key:"__proto__",keyType:"private",value:"null",valueType:"null"}),n.insertAdjacentElement("beforeend",h)}}return!1}),i}}]),t}(b["default"]);t["default"]=x,e.exports=t["default"]},function(e,t){e.exports='<div class="vc-item vc-item-{{logType}} {{if (!noMeta)}}vc-item-nometa{{/if}} {{style}}"> <span class=vc-item-meta>{{if (!noMeta)}}{{meta}}{{/if}}</span> <div class=vc-item-content></div> </div>'},function(e,t){e.exports="<div class=vc-fold> {{if (lineType == 'obj')}} <i class=vc-fold-outer>{{outer}}</i> <div class=vc-fold-inner></div> {{else if (lineType == 'value')}} <i class=vc-code-{{valueType}}>{{value}}</i> {{else if (lineType == 'kv')}} <i class=\"vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}\">{{key}}</i>: <i class=vc-code-{{valueType}}>{{value}}</i> {{/if}} </div>"},function(e,t){e.exports='<span> <i class="vc-code-key{{if (keyType)}} vc-code-{{keyType}}-key{{/if}}">{{key}}</i>: <i class=vc-code-{{valueType}}>{{value}}</i> </span>'},function(e,t){e.exports="<div> <div class=vc-log style=padding-bottom:40px></div> <form class=vc-cmd> <button class=vc-cmd-btn type=submit>OK</button> <div class=vc-cmd-input-wrap> <textarea class=vc-cmd-input placeholder=command...></textarea> </div> </form> </div>"},function(e,t){e.exports='<pre class="vc-item-code vc-item-code-{{type}}">{{content}}</pre>'},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=function g(e,t,o){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var l=Object.getPrototypeOf(e);return null===l?void 0:g(l,t,o)}if("value"in n)return n.value;var i=n.get;if(void 0!==i)return i.call(o)},d=o(3),u=(l(d),o(17)),v=n(u),f=o(24),p=n(f),b=function(e){function t(){var e;i(this,t);for(var o=arguments.length,n=Array(o),l=0;o>l;l++)n[l]=arguments[l];var a=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.tplTabbox=p["default"],a.allowUnformattedLog=!1,a}return a(t,e),c(t,[{key:"onInit",value:function(){s(Object.getPrototypeOf(t.prototype),"onInit",this).call(this),this.printSystemInfo()}},{key:"printSystemInfo",value:function(){var e=navigator.userAgent,t="",o=e.match(/(ipod).*\s([\d_]+)/i),n=e.match(/(ipad).*\s([\d_]+)/i),l=e.match(/(iphone)\sos\s([\d_]+)/i),i=e.match(/(android)\s([\d\.]+)/i);t="Unknown",i?t="Android "+i[2]:l?t="iPhone, iOS "+l[2].replace(/_/g,"."):n?t="iPad, iOS "+n[2].replace(/_/g,"."):o&&(t="iPod, iOS "+o[2].replace(/_/g,"."));var r=t,a=e.match(/MicroMessenger\/([\d\.]+)/i);t="Unknown",a&&a[1]?(t=a[1],r+=", WeChat "+t,console.info("[system]","System:",r)):console.info("[system]","System:",r),t="Unknown",t="https:"==location.protocol?"HTTPS":"http:"==location.protocol?"HTTP":location.protocol.replace(":",""),r=t;var c=e.toLowerCase().match(/ nettype\/([^ ]+)/g);t="Unknown",c&&c[0]?(c=c[0].split("/"),t=c[1],r+=", "+t,console.info("[system]","Network:",r)):console.info("[system]","Protocol:",r),console.info("[system]","UA:",e),setTimeout(function(){var e=window.performance||window.msPerformance||window.webkitPerformance;if(e&&e.timing){var t=e.timing;t.navigationStart&&console.info("[system]","navigationStart:",t.navigationStart),t.navigationStart&&t.domainLookupStart&&console.info("[system]","navigation:",t.domainLookupStart-t.navigationStart+"ms"),t.domainLookupEnd&&t.domainLookupStart&&console.info("[system]","dns:",t.domainLookupEnd-t.domainLookupStart+"ms"),t.connectEnd&&t.connectStart&&(t.connectEnd&&t.secureConnectionStart?console.info("[system]","tcp (ssl):",t.connectEnd-t.connectStart+"ms ("+(t.connectEnd-t.secureConnectionStart)+"ms)"):console.info("[system]","tcp:",t.connectEnd-t.connectStart+"ms")),t.responseStart&&t.requestStart&&console.info("[system]","request:",t.responseStart-t.requestStart+"ms"),t.responseEnd&&t.responseStart&&console.info("[system]","response:",t.responseEnd-t.responseStart+"ms"),t.domComplete&&t.domLoading&&(t.domContentLoadedEventStart&&t.domLoading?console.info("[system]","domComplete (domLoaded):",t.domComplete-t.domLoading+"ms ("+(t.domContentLoadedEventStart-t.domLoading)+"ms)"):console.info("[system]","domComplete:",t.domComplete-t.domLoading+"ms")),t.loadEventEnd&&t.loadEventStart&&console.info("[system]","loadEvent:",t.loadEventEnd-t.loadEventStart+"ms"),t.navigationStart&&t.loadEventEnd&&console.info("[system]","total (DOM):",t.loadEventEnd-t.navigationStart+"ms ("+(t.domComplete-t.navigationStart)+"ms)")}},0)}}]),t}(v["default"]);t["default"]=b,e.exports=t["default"]},function(e,t){e.exports="<div> <div class=vc-log></div> </div>"},function(e,t,o){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t["default"]=e,t}function l(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(4),d=l(s),u=o(3),v=n(u),f=o(15),p=l(f),b=o(26),g=l(b),h=o(27),m=l(h),y=o(28),_=l(y),w=function(e){function t(){var e;i(this,t);for(var o=arguments.length,n=Array(o),l=0;o>l;l++)n[l]=arguments[l];var a=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return a.$tabbox=d["default"].render(g["default"],{}),a.$header=null,a.reqList={},a.domList={},a.isReady=!1,a.isShow=!1,a.isInBottom=!0,a._open=void 0,a._send=void 0,a.mockAjax(),a}return a(t,e),c(t,[{key:"onRenderTab",value:function(e){e(this.$tabbox)}},{key:"onAddTool",value:function(e){var t=this,o=[{name:"Clear",global:!1,onClick:function(e){t.clearLog()}}];e(o)}},{key:"onReady",value:function(){var e=this;e.isReady=!0,this.renderHeader(),d["default"].delegate(d["default"].one(".vc-log",this.$tabbox),"click",".vc-group-preview",function(e){var t=this.parentNode;d["default"].hasClass(t,"vc-actived")?d["default"].removeClass(t,"vc-actived"):d["default"].addClass(t,"vc-actived"),e.preventDefault()});var t=d["default"].one(".vc-content");d["default"].bind(t,"scroll",function(o){e.isShow&&(t.scrollTop+t.offsetHeight>=t.scrollHeight?e.isInBottom=!0:e.isInBottom=!1)});for(var o in e.reqList)e.updateRequest(o,{})}},{key:"onRemove",value:function(){window.XMLHttpRequest&&(window.XMLHttpRequest.prototype.open=this._open,window.XMLHttpRequest.prototype.send=this._send,this._open=void 0,this._send=void 0)}},{key:"onShow",value:function(){this.isShow=!0,1==this.isInBottom&&this.scrollToBottom()}},{key:"onHide",value:function(){this.isShow=!1}},{key:"onShowConsole",value:function(){1==this.isInBottom&&this.scrollToBottom()}},{key:"scrollToBottom",value:function(){var e=d["default"].one(".vc-content");e.scrollTop=e.scrollHeight-e.offsetHeight}},{key:"clearLog",value:function(){this.reqList={};for(var e in this.domList)this.domList[e].remove(),this.domList[e]=void 0;this.domList={},this.renderHeader()}},{key:"renderHeader",value:function(){var e=Object.keys(this.reqList).length,t=d["default"].render(m["default"],{count:e}),o=d["default"].one(".vc-log",this.$tabbox);this.$header?this.$header.parentNode.replaceChild(t,this.$header):o.parentNode.insertBefore(t,o),this.$header=t}},{key:"updateRequest",value:function(e,t){var o=Object.keys(this.reqList).length,n=this.reqList[e]||{};for(var l in t)n[l]=t[l];if(this.reqList[e]=n,this.isReady){var i={url:n.url,status:n.status||"-",type:"-",costTime:n.costTime>0?n.costTime+"ms":"-",header:n.header,response:v.htmlEncode(n.response)};n.readyState<=1?i.status="Pending":n.readyState<4&&(i.status="Loading");var r=d["default"].render(_["default"],i),a=this.domList[e];n.status>=400&&d["default"].addClass(d["default"].one(".vc-group-preview",r),"vc-table-row-error"),a?a.parentNode.replaceChild(r,a):d["default"].one(".vc-log",this.$tabbox).insertAdjacentElement("beforeend",r),this.domList[e]=r;var c=Object.keys(this.reqList).length;c!=o&&this.renderHeader(),this.isInBottom&&this.scrollToBottom()}}},{key:"mockAjax",value:function(){var e=window.XMLHttpRequest;if(e){var t=this,o=window.XMLHttpRequest.prototype.open,n=window.XMLHttpRequest.prototype.send;t._open=o,t._send=n,window.XMLHttpRequest.prototype.open=function(){var e=this,n=[].slice.call(arguments),l=n[1],i=t.getUniqueID();e._requestID=i;var r=e.onreadystatechange||function(){};return e.onreadystatechange=function(){var o=t.reqList[i]||{};if(o.url=l,o.readyState=e.readyState,0==e.readyState)o.startTime=+new Date;else if(1==e.readyState)o.startTime=+new Date;else if(2==e.readyState){o.header={};for(var n=e.getAllResponseHeaders()||"",a=n.split("\n"),c=0;c<a.length;c++){var s=a[c];if(s){var d=s.split(": "),u=d[0],v=d.slice(1).join(": ");o.header[u]=v}}}else 3==e.readyState||4==e.readyState&&(o.status=e.status,o.endTime=+new Date,o.costTime=o.endTime-(o.startTime||o.endTime),o.response=e.response);return e._noVConsole||t.updateRequest(i,o),r.apply(e,arguments)},o.apply(e,n)}}}},{key:"getUniqueID",value:function(){var e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,o="x"==e?t:3&t|8;return o.toString(16)});return e}}]),t}(p["default"]);t["default"]=w,e.exports=t["default"]},function(e,t){e.exports="<div class=vc-table> <div class=vc-log></div> </div>"},function(e,t){e.exports='<dl class=vc-table-row> <dd class="vc-table-col vc-table-col-4">Name {{if (count > 0)}}({{count}}){{/if}}</dd> <dd class=vc-table-col>Status</dd> <dd class=vc-table-col>Time</dd> </dl>'},function(e,t){e.exports='<div class=vc-group> <dl class="vc-table-row vc-group-preview"> <dd class="vc-table-col vc-table-col-4">{{url}}</dd> <dd class=vc-table-col>{{status}}</dd> <dd class=vc-table-col>{{costTime}}</dd> </dl> <div class=vc-group-detail> <div> <dl class="vc-table-row vc-left-border"> <dt class="vc-table-col vc-table-col-title">Headers</dt> </dl> {{for (var key in header)}} <div class="vc-table-row vc-left-border vc-small"> <div class="vc-table-col vc-table-col-2">{{key}}</div> <div class="vc-table-col vc-table-col-4 vc-max-height-line">{{header[key]}}</div> </div> {{/for}} </div> <div> <dl class="vc-table-row vc-left-border"> <dt class="vc-table-col vc-table-col-title">Response</dt> </dl> <div class="vc-table-row vc-left-border vc-small"> <pre class="vc-table-col vc-max-height vc-min-height">{{response}}</pre> </div> </div> </div> </div>'}])});

/***/ }),

/***/ "3b42":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4127":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("d233");
var formats = __webpack_require__("b313");

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "4328":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__("4127");
var parse = __webpack_require__("9e6a");
var formats = __webpack_require__("b313");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "4360":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: external "Vuex"
var external_Vuex_ = __webpack_require__("5880");
var external_Vuex_default = /*#__PURE__*/__webpack_require__.n(external_Vuex_);

// CONCATENATED MODULE: ./src/store/getters.js
var getters = {
  // user
  token: function token(state) {
    return state.user.token;
  },
  userInfo: function userInfo(state) {
    return state.user.userInfo;
  },
  user: function user(state) {
    return state.user.user;
  },
  loginStatus: function loginStatus(state) {
    return state.user.loginStatus;
  },
  status: function status(state) {
    return state.user.status;
  }
};
/* harmony default export */ var store_getters = (getters);
// CONCATENATED MODULE: ./src/store/modules/app.js
var state = {};
var mutations = {};
var actions = {};
/* harmony default export */ var app = ({
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
});
// EXTERNAL MODULE: ./src/api/user.js
var api_user = __webpack_require__("c24f");

// EXTERNAL MODULE: ./node_modules/js-cookie/src/js.cookie.js
var js_cookie = __webpack_require__("a78e");
var js_cookie_default = /*#__PURE__*/__webpack_require__.n(js_cookie);

// CONCATENATED MODULE: ./node_modules/good-storage/dist/storage.esm.js
/**
 * good-storage v1.1.0
 * (c) 2018 ustbhuangyi
 */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 本地存储实现,封装localStorage和sessionStorage
 */
var store = {
  /* eslint-disable no-undef */
  version: '1.1.0',
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage
  }
};

var api = {
  set: function set(key, val) {
    if (this.disabled) {
      return;
    }
    if (val === undefined) {
      return this.remove(key);
    }
    this.storage.setItem(key, serialize(val));
    return val;
  },
  get: function get(key, def) {
    if (this.disabled) {
      return def;
    }
    var val = deserialize(this.storage.getItem(key));
    return val === undefined ? def : val;
  },
  has: function has(key) {
    return this.get(key) !== undefined;
  },
  remove: function remove(key) {
    if (this.disabled) {
      return;
    }
    this.storage.removeItem(key);
  },
  clear: function clear() {
    if (this.disabled) {
      return;
    }
    this.storage.clear();
  },
  getAll: function getAll() {
    if (this.disabled) {
      return null;
    }
    var ret = {};
    this.forEach(function (key, val) {
      ret[key] = val;
    });
    return ret;
  },
  forEach: function forEach(callback) {
    if (this.disabled) {
      return;
    }
    for (var i = 0; i < this.storage.length; i++) {
      var key = this.storage.key(i);
      callback(key, this.get(key));
    }
  }
};

_extends(store, api);

_extends(store.session, api);

function serialize(val) {
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}

try {
  var testKey = '__storejs__';
  store.set(testKey, testKey);
  if (store.get(testKey) !== testKey) {
    store.disabled = true;
  }
  store.remove(testKey);
} catch (e) {
  store.disabled = true;
}

/* harmony default export */ var storage_esm = (store);

// CONCATENATED MODULE: ./src/utils/cache.js


var LoginStatusKey = 'Login-Status'; // 登录态 0未授权未登录 1授权未登录 2 登陆成功

var TokenKey = 'Access-Token'; // token

var UserInfoKey = 'User-Info'; // 用户信息 {} {...}

var UserKey = 'User'; // 获取登录状态

function loadLoginStatus() {
  return js_cookie_default.a.get(LoginStatusKey) || 0;
} // 保持登录状态

function saveLoginStatus(status) {
  js_cookie_default.a.set(LoginStatusKey, status, {
    expires: 7
  });
  return status;
} // 删除登录状态

function removeLoginStatus() {
  js_cookie_default.a.remove(LoginStatusKey);
  return '';
} // 获取token

function loadToken() {
  return storage_esm.get(TokenKey, '');
} // 保存token

function saveToken(token) {
  storage_esm.set(TokenKey, token);
  return token;
} // 删除token

function removeToken() {
  storage_esm.remove(TokenKey);
  return '';
} // 获取用户信息

function loadUserInfo() {
  return storage_esm.get(UserInfoKey, {});
} // 保存用户信息

function saveUserInfo(userInfo) {
  storage_esm.set(UserInfoKey, userInfo);
  return userInfo;
} // 获取其他信息

function loadUser() {
  return storage_esm.get(UserKey, {});
} // 保存其他信息

function saveUser(user) {
  storage_esm.set(UserKey, user);
  return user;
} // 删除用户信息

function removeUserInfo() {
  storage_esm.remove(UserInfoKey);
  return {};
}
function removeUser() {
  storage_esm.remove(UserKey);
  return {};
}
// CONCATENATED MODULE: ./src/store/modules/user.js


var user_state = {
  loginStatus: loadLoginStatus(),
  // 登录状态
  token: loadToken(),
  // token
  user: loadUser(),
  status: null,
  userInfo: loadUserInfo() // 用户登录信息

};
var user_mutations = {
  SET_USERINFO: function SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  SET_USER: function SET_USER(state, user) {
    state.user = user;
  },
  SET_LOGIN_STATUS: function SET_LOGIN_STATUS(state, loginStatus) {
    state.loginStatus = loginStatus;
  },
  SET_STATUS: function SET_STATUS(state, status) {
    state.state = status;
  },
  SET_TOKEN: function SET_TOKEN(state, token) {
    state.token = token;
  }
};
var user_actions = {
  // 登录相关，通过code获取token和用户信息
  loginWechatAuth: function loginWechatAuth(_ref, code) {
    var commit = _ref.commit;
    var data = {
      code: code
    };
    console.log(data);
    return new Promise(function (resolve, reject) {
      Object(api_user["b" /* loginByCode */])(data).then(function (res) {
        // 存用户信息，token
        var vo = JSON.parse(res);
        console.log(vo); // console.log('2',res.token)

        commit('SET_USERINFO', saveUserInfo(vo.user));
        commit('SET_STATUS', vo.state);
        commit('SET_TOKEN', saveToken(vo.token.access_token));
        resolve(vo);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  setUserInfo: function setUserInfo(_ref2, res) {
    var commit = _ref2.commit;
    commit('SET_USER', saveUser(res.data));
  },
  // 设置状态
  setLoginStatus: function setLoginStatus(_ref3, query) {
    var commit = _ref3.commit;

    if (query === 0 || query === 1) {
      // 上线打开注释，本地调试注释掉，保持信息最新
      removeToken();
      removeUserInfo();
      removeUser();
    } // 设置不同的登录状态


    commit('SET_LOGIN_STATUS', saveLoginStatus(query));
  },
  // 登出
  fedLogOut: function fedLogOut() {
    // 删除token，用户信息，登陆状态
    removeToken();
    removeUserInfo();
    removeUser();
    removeLoginStatus();
  }
};
/* harmony default export */ var modules_user = ({
  namespaced: true,
  state: user_state,
  mutations: user_mutations,
  actions: user_actions
});
// CONCATENATED MODULE: ./src/store/index.js





external_Vue_default.a.use(external_Vuex_default.a);
var store_store = new external_Vuex_default.a.Store({
  modules: {
    app: app,
    user: modules_user
  },
  getters: store_getters
});
/* harmony default export */ var src_store = __webpack_exports__["a"] = (store_store);

/***/ }),

/***/ "44bf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2638");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d282");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a142");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ea8e");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ad06");





var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('image'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ __webpack_exports__["a"] = (createComponent({
  props: {
    src: String,
    fit: String,
    alt: String,
    round: Boolean,
    width: [Number, String],
    height: [Number, String],
    lazyLoad: Boolean,
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: function src() {
      this.loading = true;
      this.error = false;
    }
  },
  computed: {
    style: function style() {
      var style = {};

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isDef */ "b"])(this.width)) {
        style.width = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* addUnit */ "a"])(this.width);
      }

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* isDef */ "b"])(this.height)) {
        style.height = Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* addUnit */ "a"])(this.height);
      }

      return style;
    }
  },
  created: function created() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$on('loaded', this.onLazyLoaded);
      $Lazyload.$on('error', this.onLazyLoadError);
    }
  },
  beforeDestroy: function beforeDestroy() {
    var $Lazyload = this.$Lazyload;

    if ($Lazyload) {
      $Lazyload.$off('loaded', this.onLazyLoaded);
      $Lazyload.$off('error', this.onLazyLoadError);
    }
  },
  methods: {
    onLoad: function onLoad(event) {
      this.loading = false;
      this.$emit('load', event);
    },
    onLazyLoaded: function onLazyLoaded(_ref) {
      var el = _ref.el;

      if (el === this.$refs.image && this.loading) {
        this.onLoad();
      }
    },
    onLazyLoadError: function onLazyLoadError(_ref2) {
      var el = _ref2.el;

      if (el === this.$refs.image && !this.error) {
        this.onError();
      }
    },
    onError: function onError(event) {
      this.error = true;
      this.loading = false;
      this.$emit('error', event);
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    renderPlaceholder: function renderPlaceholder() {
      var h = this.$createElement;

      if (this.loading && this.showLoading) {
        return h("div", {
          "class": bem('loading')
        }, [this.slots('loading') || h(_icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          "attrs": {
            "name": "photo-o",
            "size": "22"
          }
        })]);
      }

      if (this.error && this.showError) {
        return h("div", {
          "class": bem('error')
        }, [this.slots('error') || h(_icon__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
          "attrs": {
            "name": "warning-o",
            "size": "22"
          }
        })]);
      }
    },
    renderImage: function renderImage() {
      var h = this.$createElement;
      var imgData = {
        class: bem('img'),
        attrs: {
          alt: this.alt
        },
        style: {
          objectFit: this.fit
        }
      };

      if (this.error) {
        return;
      }

      if (this.lazyLoad) {
        return h("img", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
          "ref": "image",
          "directives": [{
            name: "lazy",
            value: this.src
          }]
        }, imgData]));
      }

      return h("img", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        "attrs": {
          "src": this.src
        },
        "on": {
          "load": this.onLoad,
          "error": this.onError
        }
      }, imgData]));
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": bem({
        round: this.round
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [this.renderImage(), this.renderPlaceholder()]);
  }
}));

/***/ }),

/***/ "4598":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return doubleRaf; });
/* unused harmony export cancelRaf */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");
/**
 * requestAnimationFrame polyfill
 */

var prev = Date.now();
/* istanbul ignore next */

function fallback(fn) {
  var curr = Date.now();
  var ms = Math.max(0, 16 - (curr - prev));
  var id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}
/* istanbul ignore next */


var root = ___WEBPACK_IMPORTED_MODULE_0__[/* isServer */ "d"] ? global : window;
/* istanbul ignore next */

var iRaf = root.requestAnimationFrame || fallback;
/* istanbul ignore next */

var iCancel = root.cancelAnimationFrame || root.clearTimeout;
function raf(fn) {
  return iRaf.call(root, fn);
} // double raf for animation

function doubleRaf(fn) {
  raf(function () {
    raf(fn);
  });
}
function cancelRaf(id) {
  iCancel.call(root, id);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "48f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return functionalRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routeProps; });
/**
 * Vue Router support
 */
function route(router, config) {
  var to = config.to,
      url = config.url,
      replace = config.replace;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}
function functionalRoute(context) {
  route(context.parent && context.parent.$router, context.props);
}
var routeProps = {
  url: String,
  replace: Boolean,
  to: [String, Object]
};

/***/ }),

/***/ "499a":
/***/ (function(module, exports) {


;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));


/***/ }),

/***/ "4d75":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "504b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "543e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2638");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d282");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ea8e");
/* harmony import */ var _utils_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b1d2");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ba31");



 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* createNamespace */ "a"])('loading'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function LoadingIcon(h, props) {
  if (props.type === 'spinner') {
    var Spin = [];

    for (var i = 0; i < 12; i++) {
      Spin.push(h("i"));
    }

    return Spin;
  }

  return h("svg", {
    "class": bem('circular'),
    "attrs": {
      "viewBox": "25 25 50 50"
    }
  }, [h("circle", {
    "attrs": {
      "cx": "50",
      "cy": "50",
      "r": "20",
      "fill": "none"
    }
  })]);
}

function LoadingText(h, props, slots) {
  if (slots.default) {
    var style = props.textSize && {
      fontSize: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* addUnit */ "a"])(props.textSize)
    };
    return h("span", {
      "class": bem('text'),
      "style": style
    }, [slots.default()]);
  }
}

function Loading(h, props, slots, ctx) {
  var color = props.color,
      size = props.size,
      type = props.type;
  var style = {
    color: color
  };

  if (size) {
    var iconSize = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* addUnit */ "a"])(size);
    style.width = iconSize;
    style.height = iconSize;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
    "class": bem([type, {
      vertical: props.vertical
    }])
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_4__[/* inherit */ "b"])(ctx, true)]), [h("span", {
    "class": bem('spinner', type),
    "style": style
  }, [LoadingIcon(h, props)]), LoadingText(h, props, slots)]);
}

Loading.props = {
  size: [Number, String],
  vertical: Boolean,
  textSize: [Number, String],
  type: {
    type: String,
    default: 'circular'
  },
  color: {
    type: String,
    default: _utils_constant__WEBPACK_IMPORTED_MODULE_3__[/* GRAY */ "f"]
  }
};
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Loading));

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var filter_namespaceObject = {};
__webpack_require__.r(filter_namespaceObject);
__webpack_require__.d(filter_namespaceObject, "formatDate", function() { return formatDate; });
__webpack_require__.d(filter_namespaceObject, "encodeUnicode", function() { return encodeUnicode; });

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/normalize.css/normalize.css
var normalize = __webpack_require__("f5df");

// EXTERNAL MODULE: ./src/assets/css/index.scss
var css = __webpack_require__("9536");

// EXTERNAL MODULE: ./node_modules/lib-flexible/flexible.js
var flexible = __webpack_require__("499a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4e4eae40-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=f88628ce&
var Appvue_type_template_id_f88628ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('keep-alive',[(_vm.$route.meta.keepAlive)?_c('router-view'):_vm._e()],1),_vm._v(" "),(!_vm.$route.meta.keepAlive)?_c('router-view'):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=f88628ce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_f88628ce_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./src/store/index.js + 5 modules
var store = __webpack_require__("4360");

// EXTERNAL MODULE: external "VueRouter"
var external_VueRouter_ = __webpack_require__("6389");
var external_VueRouter_default = /*#__PURE__*/__webpack_require__.n(external_VueRouter_);

// CONCATENATED MODULE: ./src/router/index.js


external_Vue_default.a.use(external_VueRouter_default.a);
var constantRoutes = [{
  path: '/',
  redirect: '/redirect'
}, {
  path: '/bind',
  name: 'bind',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-53b647de").then(__webpack_require__.bind(null, "6b6b"));
  }
}, {
  path: '/service',
  name: 'service',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-9fd7fc88").then(__webpack_require__.bind(null, "efaa"));
  }
}, {
  path: '/carsend',
  name: 'carsend',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-9e927c78").then(__webpack_require__.bind(null, "dbad"));
  }
}, {
  path: '/redirect',
  name: 'redirect',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-225d93b2").then(__webpack_require__.bind(null, "ef3c"));
  }
}, {
  path: '/edit',
  name: 'edit',
  component: function component() {
    return __webpack_require__.e(/* import() */ "chunk-18b8578e").then(__webpack_require__.bind(null, "d485"));
  }
}];

var router_createRouter = function createRouter() {
  return new external_VueRouter_default.a({
    mode: 'history',
    // require service support
    base: '/wx',
    scrollBehavior: function scrollBehavior() {
      return {
        y: 0
      };
    },
    routes: constantRoutes
  });
};

/* harmony default export */ var router = (router_createRouter());
// EXTERNAL MODULE: ./node_modules/fastclick/lib/fastclick.js
var fastclick = __webpack_require__("fe3c");
var fastclick_default = /*#__PURE__*/__webpack_require__.n(fastclick);

// CONCATENATED MODULE: ./src/filters/filter.js
/**
 *格式化时间
 *yyyy-MM-dd hh:mm:ss
 */
function formatDate(time, fmt) {
  if (time === undefined || '') {
    return;
  }

  var date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var k in o) {
    if (new RegExp("(".concat(k, ")")).test(fmt)) {
      var str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
} // 转为unicode 编码


function encodeUnicode(str) {
  var res = [];

  for (var i = 0; i < str.length; i++) {
    res[i] = ('00' + str.charCodeAt(i).toString(16)).slice(-4);
  }

  return "\\u" + res.join("\\u");
}
// CONCATENATED MODULE: ./src/filters/index.js


Object.keys(filter_namespaceObject).forEach(function (k) {
  return external_Vue_default.a.filter(k, filter_namespaceObject[k]);
});
external_Vue_default.a.prototype.$formatDate = external_Vue_default.a.filter('formatDate');
// CONCATENATED MODULE: ./src/utils/directives.js

external_Vue_default.a.directive('focus', {
  inserted: function inserted(el) {
    // 获取焦点
    el.focus();
  }
});
external_Vue_default.a.directive('numberOnly', {
  inserted: function inserted(el) {
    // 获取焦点
    el.handler = function () {
      el.value = el.value.replace(/[^\d]/g, '');
    };

    el.addEventListener('input', el.handler);
  }
});
external_Vue_default.a.directive('resetPage', {
  inserted: function inserted(el) {
    // 监听键盘收起事件
    document.body.addEventListener('focusout', function () {
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        // 软键盘收起的事件处理
        setTimeout(function () {
          var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100);
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/vant/es/style/base.css
var base = __webpack_require__("68ef");

// EXTERNAL MODULE: ./node_modules/vant/es/tag/index.css
var es_tag = __webpack_require__("9b7e");

// EXTERNAL MODULE: ./node_modules/vant/es/image/index.css
var es_image = __webpack_require__("09fe");

// EXTERNAL MODULE: ./node_modules/vant/es/card/index.css
var card = __webpack_require__("ea82");

// CONCATENATED MODULE: ./node_modules/vant/es/card/style/index.js




// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("d282");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/functional.js
var functional = __webpack_require__("ba31");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/constant.js
var constant = __webpack_require__("b1d2");

// CONCATENATED MODULE: ./node_modules/vant/es/tag/index.js



 // Types

var _createNamespace = Object(create["a" /* createNamespace */])('tag'),
    createComponent = _createNamespace[0],
    tag_bem = _createNamespace[1];

function Tag(h, props, slots, ctx) {
  var _style, _ref;

  var type = props.type,
      mark = props.mark,
      plain = props.plain,
      color = props.color,
      round = props.round,
      size = props.size;
  var key = plain ? 'color' : 'backgroundColor';
  var style = (_style = {}, _style[key] = color, _style);

  if (props.textColor) {
    style.color = props.textColor;
  }

  var classes = {
    mark: mark,
    plain: plain,
    round: round
  };

  if (size) {
    classes[size] = size;
  }

  return h("span", helper_default()([{
    "style": style,
    "class": [tag_bem([classes, type]), (_ref = {}, _ref[constant["c" /* BORDER_SURROUND */]] = plain, _ref)]
  }, Object(functional["b" /* inherit */])(ctx, true)]), [slots.default && slots.default()]);
}

Tag.props = {
  size: String,
  mark: Boolean,
  color: String,
  plain: Boolean,
  round: Boolean,
  textColor: String,
  type: {
    type: String,
    default: 'default'
  }
};
/* harmony default export */ var vant_es_tag = (createComponent(Tag));
// EXTERNAL MODULE: ./node_modules/vant/es/image/index.js
var vant_es_image = __webpack_require__("44bf");

// CONCATENATED MODULE: ./node_modules/vant/es/card/index.js




 // Types

var card_createNamespace = Object(create["a" /* createNamespace */])('card'),
    card_createComponent = card_createNamespace[0],
    card_bem = card_createNamespace[1];

function Card(h, props, slots, ctx) {
  var thumb = props.thumb;
  var showNum = slots.num || Object(utils["b" /* isDef */])(props.num);
  var showPrice = slots.price || Object(utils["b" /* isDef */])(props.price);
  var showOriginPrice = slots['origin-price'] || Object(utils["b" /* isDef */])(props.originPrice);
  var showBottom = showNum || showPrice || showOriginPrice;

  function onThumbClick(event) {
    Object(functional["a" /* emit */])(ctx, 'click-thumb', event);
  }

  function ThumbTag() {
    if (slots.tag || props.tag) {
      return h("div", {
        "class": card_bem('tag')
      }, [slots.tag ? slots.tag() : h(vant_es_tag, {
        "attrs": {
          "mark": true,
          "type": "danger"
        }
      }, [props.tag])]);
    }
  }

  function Thumb() {
    if (slots.thumb || thumb) {
      return h("a", {
        "attrs": {
          "href": props.thumbLink
        },
        "class": card_bem('thumb'),
        "on": {
          "click": onThumbClick
        }
      }, [slots.thumb ? slots.thumb() : h(vant_es_image["a" /* default */], {
        "attrs": {
          "src": thumb,
          "width": "100%",
          "height": "100%",
          "fit": "contain",
          "lazy-load": props.lazyLoad
        }
      }), ThumbTag()]);
    }
  }

  function Title() {
    if (slots.title) {
      return slots.title();
    }

    if (props.title) {
      return h("div", {
        "class": card_bem('title')
      }, [props.title]);
    }
  }

  function Desc() {
    if (slots.desc) {
      return slots.desc();
    }

    if (props.desc) {
      return h("div", {
        "class": [card_bem('desc'), 'van-ellipsis']
      }, [props.desc]);
    }
  }

  function Price() {
    if (showPrice) {
      return h("div", {
        "class": card_bem('price')
      }, [slots.price ? slots.price() : props.currency + " " + props.price]);
    }
  }

  function OriginPrice() {
    if (showOriginPrice) {
      var slot = slots['origin-price'];
      return h("div", {
        "class": card_bem('origin-price')
      }, [slot ? slot() : props.currency + " " + props.originPrice]);
    }
  }

  function Num() {
    if (showNum) {
      return h("div", {
        "class": card_bem('num')
      }, [slots.num ? slots.num() : "x " + props.num]);
    }
  }

  function Footer() {
    if (slots.footer) {
      return h("div", {
        "class": card_bem('footer')
      }, [slots.footer()]);
    }
  }

  return h("div", helper_default()([{
    "class": card_bem()
  }, Object(functional["b" /* inherit */])(ctx, true)]), [h("div", {
    "class": card_bem('header')
  }, [Thumb(), h("div", {
    "class": card_bem('content', {
      centered: props.centered
    })
  }, [Title(), Desc(), slots.tags && slots.tags(), showBottom && h("div", {
    "class": "van-card__bottom"
  }, [Price(), OriginPrice(), Num(), slots.bottom && slots.bottom()])])]), Footer()]);
}

Card.props = {
  tag: String,
  desc: String,
  thumb: String,
  title: String,
  centered: Boolean,
  lazyLoad: Boolean,
  thumbLink: String,
  num: [Number, String],
  price: [Number, String],
  originPrice: [Number, String],
  currency: {
    type: String,
    default: '¥'
  }
};
/* harmony default export */ var es_card = (card_createComponent(Card));
// CONCATENATED MODULE: ./node_modules/vant/es/button/style/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("c31d");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/router.js
var utils_router = __webpack_require__("48f4");

// EXTERNAL MODULE: ./node_modules/vant/es/icon/index.js + 1 modules
var es_icon = __webpack_require__("ad06");

// EXTERNAL MODULE: ./node_modules/vant/es/loading/index.js
var es_loading = __webpack_require__("543e");

// CONCATENATED MODULE: ./node_modules/vant/es/button/index.js







 // Types

var button_createNamespace = Object(create["a" /* createNamespace */])('button'),
    button_createComponent = button_createNamespace[0],
    button_bem = button_createNamespace[1];

function Button(h, props, slots, ctx) {
  var _ref;

  var tag = props.tag,
      icon = props.icon,
      type = props.type,
      disabled = props.disabled,
      loading = props.loading,
      hairline = props.hairline,
      loadingText = props.loadingText;

  function onClick(event) {
    if (!loading && !disabled) {
      Object(functional["a" /* emit */])(ctx, 'click', event);
      Object(utils_router["a" /* functionalRoute */])(ctx);
    }
  }

  function onTouchstart(event) {
    Object(functional["a" /* emit */])(ctx, 'touchstart', event);
  }

  var classes = [button_bem([type, props.size, {
    disabled: disabled,
    hairline: hairline,
    block: props.block,
    plain: props.plain,
    round: props.round,
    square: props.square
  }]), (_ref = {}, _ref[constant["c" /* BORDER_SURROUND */]] = hairline, _ref)];

  function Content() {
    var content = [];

    if (loading) {
      content.push(h(es_loading["a" /* default */], {
        "class": button_bem('loading'),
        "attrs": {
          "size": props.loadingSize,
          "type": props.loadingType,
          "color": type === 'default' ? undefined : ''
        }
      }));
    } else if (icon) {
      content.push(h(es_icon["a" /* default */], {
        "attrs": {
          "name": icon
        },
        "class": button_bem('icon')
      }));
    }

    var text;

    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(h("span", {
        "class": button_bem('text')
      }, [text]));
    }

    return content;
  }

  return h(tag, helper_default()([{
    "class": classes,
    "attrs": {
      "type": props.nativeType,
      "disabled": disabled
    },
    "on": {
      "click": onClick,
      "touchstart": onTouchstart
    }
  }, Object(functional["b" /* inherit */])(ctx)]), [Content()]);
}

Button.props = Object(esm_extends["a" /* default */])({}, utils_router["b" /* routeProps */], {
  text: String,
  icon: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
});
/* harmony default export */ var es_button = (button_createComponent(Button));
// EXTERNAL MODULE: ./node_modules/vant/es/nav-bar/index.css
var nav_bar = __webpack_require__("8a0b");

// CONCATENATED MODULE: ./node_modules/vant/es/nav-bar/style/index.js



// CONCATENATED MODULE: ./node_modules/vant/es/nav-bar/index.js




 // Types

var nav_bar_createNamespace = Object(create["a" /* createNamespace */])('nav-bar'),
    nav_bar_createComponent = nav_bar_createNamespace[0],
    nav_bar_bem = nav_bar_createNamespace[1];

function NavBar(h, props, slots, ctx) {
  var _ref;

  return h("div", helper_default()([{
    "class": [nav_bar_bem({
      fixed: props.fixed
    }), (_ref = {}, _ref[constant["b" /* BORDER_BOTTOM */]] = props.border, _ref)],
    "style": {
      zIndex: props.zIndex
    }
  }, Object(functional["b" /* inherit */])(ctx)]), [h("div", {
    "class": nav_bar_bem('left'),
    "on": {
      "click": ctx.listeners['click-left'] || utils["e" /* noop */]
    }
  }, [slots.left ? slots.left() : [props.leftArrow && h(es_icon["a" /* default */], {
    "class": nav_bar_bem('arrow'),
    "attrs": {
      "name": "arrow-left"
    }
  }), props.leftText && h("span", {
    "class": nav_bar_bem('text')
  }, [props.leftText])]]), h("div", {
    "class": [nav_bar_bem('title'), 'van-ellipsis']
  }, [slots.title ? slots.title() : props.title]), h("div", {
    "class": nav_bar_bem('right'),
    "on": {
      "click": ctx.listeners['click-right'] || utils["e" /* noop */]
    }
  }, [slots.right ? slots.right() : props.rightText && h("span", {
    "class": nav_bar_bem('text')
  }, [props.rightText])])]);
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};
/* harmony default export */ var es_nav_bar = (nav_bar_createComponent(NavBar));
// EXTERNAL MODULE: ./node_modules/vant/es/toast/style/index.js
var toast_style = __webpack_require__("e7e5");

// EXTERNAL MODULE: ./node_modules/vant/es/toast/index.js + 1 modules
var toast = __webpack_require__("d399");

// EXTERNAL MODULE: ./node_modules/vant/es/field/index.css
var field = __webpack_require__("1146");

// CONCATENATED MODULE: ./node_modules/vant/es/field/style/index.js



// EXTERNAL MODULE: ./node_modules/vant/es/cell/index.js
var cell = __webpack_require__("7744");

// EXTERNAL MODULE: ./node_modules/vant/es/cell/shared.js
var shared = __webpack_require__("dfaf");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/dom/event.js
var dom_event = __webpack_require__("1325");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/system.js

function isAndroid() {
  /* istanbul ignore next */
  return utils["d" /* isServer */] ? false : /android/.test(navigator.userAgent.toLowerCase());
}
function isIOS() {
  /* istanbul ignore next */
  return utils["d" /* isServer */] ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/dom/scroll.js
var dom_scroll = __webpack_require__("a8c1");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/dom/reset-scroll.js
/**
 * Hack for iOS12 page scroll
 * https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
 */


var reset_scroll_isIOS = isIOS();
/* istanbul ignore next */

function resetScroll() {
  if (reset_scroll_isIOS) {
    Object(dom_scroll["e" /* setRootScrollTop */])(Object(dom_scroll["b" /* getRootScrollTop */])());
  }
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/unit.js
var unit = __webpack_require__("ea8e");

// CONCATENATED MODULE: ./node_modules/vant/es/field/index.js










var field_createNamespace = Object(create["a" /* createNamespace */])('field'),
    field_createComponent = field_createNamespace[0],
    field_bem = field_createNamespace[1];

/* harmony default export */ var es_field = (field_createComponent({
  inheritAttrs: false,
  props: Object(esm_extends["a" /* default */])({}, shared["a" /* cellProps */], {
    error: Boolean,
    readonly: Boolean,
    autosize: [Boolean, Object],
    leftIcon: String,
    rightIcon: String,
    clearable: Boolean,
    labelClass: null,
    labelWidth: [Number, String],
    labelAlign: String,
    inputAlign: String,
    errorMessage: String,
    errorMessageAlign: String,
    type: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      focused: false
    };
  },
  watch: {
    value: function value() {
      this.$nextTick(this.adjustSize);
    }
  },
  mounted: function mounted() {
    this.format();
    this.$nextTick(this.adjustSize);
  },
  computed: {
    showClear: function showClear() {
      return this.clearable && this.focused && this.value !== '' && Object(utils["b" /* isDef */])(this.value) && !this.readonly;
    },
    listeners: function listeners() {
      var listeners = Object(esm_extends["a" /* default */])({}, this.$listeners, {
        input: this.onInput,
        keypress: this.onKeypress,
        focus: this.onFocus,
        blur: this.onBlur
      });

      delete listeners.click;
      return listeners;
    },
    labelStyle: function labelStyle() {
      var labelWidth = this.labelWidth;

      if (labelWidth) {
        return {
          width: Object(unit["a" /* addUnit */])(labelWidth)
        };
      }
    }
  },
  methods: {
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    blur: function blur() {
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    // native maxlength not work when type = number
    format: function format(target) {
      if (target === void 0) {
        target = this.$refs.input;
      }

      if (!target) {
        return;
      }

      var _target = target,
          value = _target.value;
      var maxlength = this.$attrs.maxlength;

      if (this.type === 'number' && Object(utils["b" /* isDef */])(maxlength) && value.length > maxlength) {
        value = value.slice(0, maxlength);
        target.value = value;
      }

      return value;
    },
    onInput: function onInput(event) {
      // not update v-model when composing
      if (event.target.composing) {
        return;
      }

      this.$emit('input', this.format(event.target));
    },
    onFocus: function onFocus(event) {
      this.focused = true;
      this.$emit('focus', event); // hack for safari

      /* istanbul ignore if */

      if (this.readonly) {
        this.blur();
      }
    },
    onBlur: function onBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      resetScroll();
    },
    onClick: function onClick(event) {
      this.$emit('click', event);
    },
    onClickLeftIcon: function onClickLeftIcon(event) {
      this.$emit('click-left-icon', event);
    },
    onClickRightIcon: function onClickRightIcon(event) {
      this.$emit('click-right-icon', event);
    },
    onClear: function onClear(event) {
      Object(dom_event["c" /* preventDefault */])(event);
      this.$emit('input', '');
      this.$emit('clear', event);
    },
    onKeypress: function onKeypress(event) {
      if (this.type === 'number') {
        var keyCode = event.keyCode;
        var allowPoint = String(this.value).indexOf('.') === -1;
        var isValidKey = keyCode >= 48 && keyCode <= 57 || keyCode === 46 && allowPoint || keyCode === 45;

        if (!isValidKey) {
          Object(dom_event["c" /* preventDefault */])(event);
        }
      } // trigger blur after click keyboard search button

      /* istanbul ignore next */


      if (this.type === 'search' && event.keyCode === 13) {
        this.blur();
      }

      this.$emit('keypress', event);
    },
    adjustSize: function adjustSize() {
      var input = this.$refs.input;

      if (!(this.type === 'textarea' && this.autosize) || !input) {
        return;
      }

      input.style.height = 'auto';
      var height = input.scrollHeight;

      if (Object(utils["c" /* isObj */])(this.autosize)) {
        var _this$autosize = this.autosize,
            maxHeight = _this$autosize.maxHeight,
            minHeight = _this$autosize.minHeight;

        if (maxHeight) {
          height = Math.min(height, maxHeight);
        }

        if (minHeight) {
          height = Math.max(height, minHeight);
        }
      }

      if (height) {
        input.style.height = height + 'px';
      }
    },
    renderInput: function renderInput() {
      var h = this.$createElement;
      var inputSlot = this.slots('input');

      if (inputSlot) {
        return h("div", {
          "class": field_bem('control', this.inputAlign)
        }, [inputSlot]);
      }

      var inputProps = {
        ref: 'input',
        class: field_bem('control', this.inputAlign),
        domProps: {
          value: this.value
        },
        attrs: Object(esm_extends["a" /* default */])({}, this.$attrs, {
          readonly: this.readonly
        }),
        on: this.listeners,
        // add model directive to skip IME composition
        directives: [{
          name: 'model',
          value: this.value
        }]
      };

      if (this.type === 'textarea') {
        return h("textarea", helper_default()([{}, inputProps]));
      }

      return h("input", helper_default()([{
        "attrs": {
          "type": this.type
        }
      }, inputProps]));
    },
    renderLeftIcon: function renderLeftIcon() {
      var h = this.$createElement;
      var showLeftIcon = this.slots('left-icon') || this.leftIcon;

      if (showLeftIcon) {
        return h("div", {
          "class": field_bem('left-icon'),
          "on": {
            "click": this.onClickLeftIcon
          }
        }, [this.slots('left-icon') || h(es_icon["a" /* default */], {
          "attrs": {
            "name": this.leftIcon
          }
        })]);
      }
    },
    renderRightIcon: function renderRightIcon() {
      var h = this.$createElement;
      var slots = this.slots;
      var showRightIcon = slots('right-icon') || this.rightIcon;

      if (showRightIcon) {
        return h("div", {
          "class": field_bem('right-icon'),
          "on": {
            "click": this.onClickRightIcon
          }
        }, [slots('right-icon') || h(es_icon["a" /* default */], {
          "attrs": {
            "name": this.rightIcon
          }
        })]);
      }
    }
  },
  render: function render() {
    var _bem;

    var h = arguments[0];
    var slots = this.slots,
        labelAlign = this.labelAlign;
    var scopedSlots = {
      icon: this.renderLeftIcon
    };

    if (slots('label')) {
      scopedSlots.title = function () {
        return slots('label');
      };
    }

    return h(cell["a" /* default */], {
      "attrs": {
        "icon": this.leftIcon,
        "size": this.size,
        "title": this.label,
        "center": this.center,
        "border": this.border,
        "isLink": this.isLink,
        "required": this.required,
        "clickable": this.clickable,
        "titleStyle": this.labelStyle,
        "titleClass": [field_bem('label', labelAlign), this.labelClass],
        "arrowDirection": this.arrowDirection
      },
      "class": field_bem((_bem = {
        error: this.error,
        disabled: this.$attrs.disabled
      }, _bem["label-" + labelAlign] = labelAlign, _bem['min-height'] = this.type === 'textarea' && !this.autosize, _bem)),
      "scopedSlots": scopedSlots,
      "on": {
        "click": this.onClick
      }
    }, [h("div", {
      "class": field_bem('body')
    }, [this.renderInput(), this.showClear && h(es_icon["a" /* default */], {
      "attrs": {
        "name": "clear"
      },
      "class": field_bem('clear'),
      "on": {
        "touchstart": this.onClear
      }
    }), this.renderRightIcon(), slots('button') && h("div", {
      "class": field_bem('button')
    }, [slots('button')])]), this.errorMessage && h("div", {
      "class": field_bem('error-message', this.errorMessageAlign)
    }, [this.errorMessage])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/picker/index.css
var es_picker = __webpack_require__("a526");

// CONCATENATED MODULE: ./node_modules/vant/es/picker/style/index.js


// EXTERNAL MODULE: ./node_modules/vant/es/utils/deep-assign.js
var deep_assign = __webpack_require__("1128");

// CONCATENATED MODULE: ./node_modules/vant/es/utils/deep-clone.js

function deepClone(obj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item) {
      return deepClone(item);
    });
  }

  if (typeof obj === 'object') {
    return Object(deep_assign["a" /* deepAssign */])({}, obj);
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/vant/es/picker/shared.js
var pickerProps = {
  title: String,
  loading: Boolean,
  showToolbar: Boolean,
  cancelButtonText: String,
  confirmButtonText: String,
  visibleItemCount: {
    type: Number,
    default: 5
  },
  itemHeight: {
    type: Number,
    default: 44
  }
};
// CONCATENATED MODULE: ./node_modules/vant/es/utils/format/number.js
function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
// EXTERNAL MODULE: ./node_modules/vant/es/mixins/touch.js
var touch = __webpack_require__("3875");

// CONCATENATED MODULE: ./node_modules/vant/es/picker/PickerColumn.js





var DEFAULT_DURATION = 200; // 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动，持续 `MOMENTUM_DURATION`

var MOMENTUM_DURATION = 1000;
var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var PickerColumn_createNamespace = Object(create["a" /* createNamespace */])('picker-column'),
    PickerColumn_createComponent = PickerColumn_createNamespace[0],
    PickerColumn_bem = PickerColumn_createNamespace[1];

function getElementTranslateY(element) {
  var style = window.getComputedStyle(element);
  var transform = style.transform || style.webkitTransform;
  var translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}

function isOptionDisabled(option) {
  return Object(utils["c" /* isObj */])(option) && option.disabled;
}

/* harmony default export */ var PickerColumn = (PickerColumn_createComponent({
  mixins: [touch["a" /* TouchMixin */]],
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    defaultIndex: Number,
    visibleItemCount: Number,
    initialOptions: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      offset: 0,
      duration: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    };
  },
  created: function created() {
    if (this.$parent.children) {
      this.$parent.children.push(this);
    }

    this.setIndex(this.currentIndex);
  },
  destroyed: function destroyed() {
    var children = this.$parent.children;

    if (children) {
      children.splice(children.indexOf(this), 1);
    }
  },
  watch: {
    defaultIndex: function defaultIndex() {
      this.setIndex(this.defaultIndex);
    }
  },
  computed: {
    count: function count() {
      return this.options.length;
    }
  },
  methods: {
    onTouchStart: function onTouchStart(event) {
      this.touchStart(event);

      if (this.moving) {
        var translateY = getElementTranslateY(this.$refs.wrapper);
        this.startOffset = Math.min(0, translateY);
      } else {
        this.startOffset = this.offset;
      }

      this.duration = 0;
      this.moving = false;
      this.transitionEndTrigger = null;
      this.touchStartTime = Date.now();
      this.momentumOffset = this.startOffset;
    },
    onTouchMove: function onTouchMove(event) {
      this.moving = true;
      this.touchMove(event);

      if (this.direction === 'vertical') {
        Object(dom_event["c" /* preventDefault */])(event, true);
      }

      this.offset = range(this.startOffset + this.deltaY, -(this.count * this.itemHeight), this.itemHeight);
      var now = Date.now();

      if (now - this.touchStartTime > MOMENTUM_LIMIT_TIME) {
        this.touchStartTime = now;
        this.momentumOffset = this.offset;
      }
    },
    onTouchEnd: function onTouchEnd() {
      var distance = this.offset - this.momentumOffset;
      var duration = Date.now() - this.touchStartTime;
      var allowMomentum = duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        this.momentum(distance, duration);
        return;
      }

      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION;
        var index = this.getIndexByOffset(this.offset);
        this.setIndex(index, true);
      }
    },
    onTransitionEnd: function onTransitionEnd() {
      this.stopMomentum();
    },
    onClickItem: function onClickItem(index) {
      this.duration = DEFAULT_DURATION;
      this.setIndex(index, true);
    },
    adjustIndex: function adjustIndex(index) {
      index = range(index, 0, this.count);

      for (var i = index; i < this.count; i++) {
        if (!isOptionDisabled(this.options[i])) return i;
      }

      for (var _i = index - 1; _i >= 0; _i--) {
        if (!isOptionDisabled(this.options[_i])) return _i;
      }
    },
    getOptionText: function getOptionText(option) {
      return Object(utils["c" /* isObj */])(option) && this.valueKey in option ? option[this.valueKey] : option;
    },
    setIndex: function setIndex(index, userAction) {
      var _this = this;

      index = this.adjustIndex(index) || 0;
      this.offset = -index * this.itemHeight;

      var trigger = function trigger() {
        if (index !== _this.currentIndex) {
          _this.currentIndex = index;

          if (userAction) {
            _this.$emit('change', index);
          }
        }
      }; // 若有触发过 `touchmove` 事件，那应该
      // 在 `transitionend` 后再触发 `change` 事件


      if (this.moving) {
        this.transitionEndTrigger = trigger;
      } else {
        trigger();
      }
    },
    setValue: function setValue(value) {
      var options = this.options;

      for (var i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i);
        }
      }
    },
    getValue: function getValue() {
      return this.options[this.currentIndex];
    },
    getIndexByOffset: function getIndexByOffset(offset) {
      return range(Math.round(-offset / this.itemHeight), 0, this.count - 1);
    },
    momentum: function momentum(distance, duration) {
      var speed = Math.abs(distance / duration);
      distance = this.offset + speed / 0.002 * (distance < 0 ? -1 : 1);
      var index = this.getIndexByOffset(distance);
      this.duration = MOMENTUM_DURATION;
      this.setIndex(index, true);
    },
    stopMomentum: function stopMomentum() {
      this.moving = false;
      this.duration = 0;

      if (this.transitionEndTrigger) {
        this.transitionEndTrigger();
        this.transitionEndTrigger = null;
      }
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var itemHeight = this.itemHeight,
        visibleItemCount = this.visibleItemCount;
    var baseOffset = itemHeight * (visibleItemCount - 1) / 2;
    var wrapperStyle = {
      transform: "translate3d(0, " + (this.offset + baseOffset) + "px, 0)",
      transitionDuration: this.duration + "ms",
      transitionProperty: this.duration ? 'all' : 'none',
      lineHeight: itemHeight + "px"
    };
    var optionStyle = {
      height: itemHeight + "px"
    };
    return h("div", {
      "class": [PickerColumn_bem(), this.className],
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [h("ul", {
      "ref": "wrapper",
      "style": wrapperStyle,
      "class": PickerColumn_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [this.options.map(function (option, index) {
      return h("li", {
        "style": optionStyle,
        "class": ['van-ellipsis', PickerColumn_bem('item', {
          disabled: isOptionDisabled(option),
          selected: index === _this2.currentIndex
        })],
        "domProps": {
          "innerHTML": _this2.getOptionText(option)
        },
        "on": {
          "click": function click() {
            _this2.onClickItem(index);
          }
        }
      });
    })])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/picker/index.js









var picker_createNamespace = Object(create["a" /* createNamespace */])('picker'),
    picker_createComponent = picker_createNamespace[0],
    picker_bem = picker_createNamespace[1],
    t = picker_createNamespace[2];

/* harmony default export */ var vant_es_picker = (picker_createComponent({
  props: Object(esm_extends["a" /* default */])({}, pickerProps, {
    defaultIndex: {
      type: Number,
      default: 0
    },
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    toolbarPosition: {
      type: String,
      default: 'top'
    },
    valueKey: {
      type: String,
      default: 'text'
    }
  }),
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    simple: function simple() {
      return this.columns.length && !this.columns[0].values;
    }
  },
  watch: {
    columns: 'setColumns'
  },
  methods: {
    setColumns: function setColumns() {
      var _this = this;

      var columns = this.simple ? [{
        values: this.columns
      }] : this.columns;
      columns.forEach(function (column, index) {
        _this.setColumnValues(index, deepClone(column.values));
      });
    },
    emit: function emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit(event, this.getValues(), this.getIndexes());
      }
    },
    onChange: function onChange(columnIndex) {
      if (this.simple) {
        this.$emit('change', this, this.getColumnValue(0), this.getColumnIndex(0));
      } else {
        this.$emit('change', this, this.getValues(), columnIndex);
      }
    },
    // get column instance by index
    getColumn: function getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue: function getColumnValue(index) {
      var column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue: function setColumnValue(index, value) {
      var column = this.getColumn(index);
      column && column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex: function getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
      var column = this.getColumn(columnIndex);
      column && column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues: function getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues: function setColumnValues(index, options) {
      var column = this.children[index];

      if (column && JSON.stringify(column.options) !== JSON.stringify(options)) {
        column.options = options;
        column.setIndex(0);
      }
    },
    // get values of all columns
    getValues: function getValues() {
      return this.children.map(function (child) {
        return child.getValue();
      });
    },
    // set values of all columns
    setValues: function setValues(values) {
      var _this2 = this;

      values.forEach(function (value, index) {
        _this2.setColumnValue(index, value);
      });
    },
    // get indexes of all columns
    getIndexes: function getIndexes() {
      return this.children.map(function (child) {
        return child.currentIndex;
      });
    },
    // set indexes of all columns
    setIndexes: function setIndexes(indexes) {
      var _this3 = this;

      indexes.forEach(function (optionIndex, columnIndex) {
        _this3.setColumnIndex(columnIndex, optionIndex);
      });
    },
    onConfirm: function onConfirm() {
      this.children.map(function (child) {
        return child.stopMomentum();
      });
      this.emit('confirm');
    },
    onCancel: function onCancel() {
      this.emit('cancel');
    }
  },
  render: function render(h) {
    var _this4 = this;

    var itemHeight = this.itemHeight;
    var wrapHeight = itemHeight * this.visibleItemCount;
    var columns = this.simple ? [this.columns] : this.columns;
    var frameStyle = {
      height: itemHeight + "px"
    };
    var columnsStyle = {
      height: wrapHeight + "px"
    };
    var maskStyle = {
      backgroundSize: "100% " + (wrapHeight - itemHeight) / 2 + "px"
    };
    var Toolbar = this.showToolbar && h("div", {
      "class": [constant["e" /* BORDER_TOP_BOTTOM */], picker_bem('toolbar')]
    }, [this.slots() || [h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": picker_bem('cancel'),
      "on": {
        "click": this.onCancel
      }
    }, [this.cancelButtonText || t('cancel')]), this.slots('title') || this.title && h("div", {
      "class": ['van-ellipsis', picker_bem('title')]
    }, [this.title]), h("div", {
      "attrs": {
        "role": "button",
        "tabindex": "0"
      },
      "class": picker_bem('confirm'),
      "on": {
        "click": this.onConfirm
      }
    }, [this.confirmButtonText || t('confirm')])]]);
    return h("div", {
      "class": picker_bem()
    }, [this.toolbarPosition === 'top' ? Toolbar : h(), this.loading ? h(es_loading["a" /* default */], {
      "class": picker_bem('loading'),
      "attrs": {
        "color": constant["a" /* BLUE */]
      }
    }) : h(), h("div", {
      "class": picker_bem('columns'),
      "style": columnsStyle,
      "on": {
        "touchmove": dom_event["c" /* preventDefault */]
      }
    }, [columns.map(function (item, index) {
      return h(PickerColumn, {
        "attrs": {
          "valueKey": _this4.valueKey,
          "className": item.className,
          "itemHeight": _this4.itemHeight,
          "defaultIndex": item.defaultIndex || _this4.defaultIndex,
          "visibleItemCount": _this4.visibleItemCount,
          "initialOptions": _this4.simple ? item : item.values
        },
        "on": {
          "change": function change() {
            _this4.onChange(index);
          }
        }
      });
    }), h("div", {
      "class": picker_bem('mask'),
      "style": maskStyle
    }), h("div", {
      "class": [constant["e" /* BORDER_TOP_BOTTOM */], picker_bem('frame')],
      "style": frameStyle
    })]), this.toolbarPosition === 'bottom' ? Toolbar : h()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/cell/style/index.js
var cell_style = __webpack_require__("c194");

// CONCATENATED MODULE: ./node_modules/vant/es/checkbox-group/style/index.js

// CONCATENATED MODULE: ./node_modules/vant/es/mixins/relation.js


function flattenVNodes(vnodes) {
  var result = [];

  function traverse(vnodes) {
    vnodes.forEach(function (vnode) {
      result.push(vnode);

      if (vnode.children) {
        traverse(vnode.children);
      }
    });
  }

  traverse(vnodes);
  return result;
}

function ChildrenMixin(_parent, options) {
  var _inject, _computed;

  if (options === void 0) {
    options = {};
  }

  var indexKey = options.indexKey || 'index';
  return external_Vue_default.a.extend({
    inject: (_inject = {}, _inject[_parent] = {
      default: null
    }, _inject),
    computed: (_computed = {
      parent: function parent() {
        return this[_parent];
      }
    }, _computed[indexKey] = function () {
      this.bindRelation();
      return this.parent.children.indexOf(this);
    }, _computed),
    mounted: function mounted() {
      this.bindRelation();
    },
    beforeDestroy: function beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function (item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation: function bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        var vnodes = flattenVNodes(this.parent.slots());
        children.sort(function (a, b) {
          return vnodes.indexOf(a.$vnode) - vnodes.indexOf(b.$vnode);
        });
        this.parent.children = children;
      }
    }
  });
}
function ParentMixin(parent) {
  return {
    provide: function provide() {
      var _ref;

      return _ref = {}, _ref[parent] = this, _ref;
    },
    data: function data() {
      return {
        children: []
      };
    }
  };
}
// CONCATENATED MODULE: ./node_modules/vant/es/checkbox-group/index.js



var checkbox_group_createNamespace = Object(create["a" /* createNamespace */])('checkbox-group'),
    checkbox_group_createComponent = checkbox_group_createNamespace[0],
    checkbox_group_bem = checkbox_group_createNamespace[1];

/* harmony default export */ var checkbox_group = (checkbox_group_createComponent({
  mixins: [ParentMixin('vanCheckbox')],
  props: {
    max: Number,
    disabled: Boolean,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": checkbox_group_bem()
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/checkbox/index.css
var es_checkbox = __webpack_require__("2381");

// CONCATENATED MODULE: ./node_modules/vant/es/checkbox/style/index.js



// CONCATENATED MODULE: ./node_modules/vant/es/mixins/checkbox.js
/**
 * Common part of Checkbox & Radio
 */



var checkbox_CheckboxMixin = function CheckboxMixin(_ref) {
  var parent = _ref.parent,
      bem = _ref.bem,
      role = _ref.role;
  return {
    mixins: [ChildrenMixin(parent)],
    props: {
      name: null,
      value: null,
      disabled: Boolean,
      iconSize: [Number, String],
      checkedColor: String,
      labelPosition: String,
      labelDisabled: Boolean,
      shape: {
        type: String,
        default: 'round'
      }
    },
    computed: {
      isDisabled: function isDisabled() {
        return this.parent && this.parent.disabled || this.disabled;
      },
      iconStyle: function iconStyle() {
        var checkedColor = this.checkedColor;

        if (checkedColor && this.checked && !this.isDisabled) {
          return {
            borderColor: checkedColor,
            backgroundColor: checkedColor
          };
        }
      },
      tabindex: function tabindex() {
        if (this.isDisabled || role === 'radio' && !this.checked) {
          return -1;
        }

        return 0;
      }
    },
    methods: {
      onClick: function onClick(event) {
        var label = this.$refs.label;
        var target = event.target;
        var labelClicked = label && (label === target || label.contains(target));

        if (!this.disabled && !(labelClicked && this.labelDisabled)) {
          this.toggle();
        }

        this.$emit('click', event);
      }
    },
    render: function render() {
      var h = arguments[0];
      var slots = this.slots,
          checked = this.checked;
      var CheckIcon = slots('icon', {
        checked: checked
      }) || h(es_icon["a" /* default */], {
        "attrs": {
          "name": "success"
        },
        "style": this.iconStyle
      });
      var Label = slots() && h("span", {
        "ref": "label",
        "class": bem('label', [this.labelPosition, {
          disabled: this.isDisabled
        }])
      }, [slots()]);
      var Children = [h("div", {
        "class": bem('icon', [this.shape, {
          disabled: this.isDisabled,
          checked: checked
        }]),
        "style": {
          fontSize: Object(unit["a" /* addUnit */])(this.iconSize)
        }
      }, [CheckIcon])];

      if (this.labelPosition === 'left') {
        Children.unshift(Label);
      } else {
        Children.push(Label);
      }

      return h("div", {
        "attrs": {
          "role": role,
          "tabindex": this.tabindex,
          "aria-checked": String(this.checked)
        },
        "class": bem(),
        "on": {
          "click": this.onClick
        }
      }, [Children]);
    }
  };
};
// CONCATENATED MODULE: ./node_modules/vant/es/checkbox/index.js



var checkbox_createNamespace = Object(create["a" /* createNamespace */])('checkbox'),
    checkbox_createComponent = checkbox_createNamespace[0],
    checkbox_bem = checkbox_createNamespace[1];

/* harmony default export */ var vant_es_checkbox = (checkbox_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: checkbox_bem,
    role: 'checkbox',
    parent: 'vanCheckbox'
  })],
  computed: {
    checked: {
      get: function get() {
        return this.parent ? this.parent.value.indexOf(this.name) !== -1 : this.value;
      },
      set: function set(val) {
        if (this.parent) {
          this.setParentValue(val);
        } else {
          this.$emit('input', val);
        }
      }
    }
  },
  watch: {
    value: function value(val) {
      this.$emit('change', val);
    }
  },
  methods: {
    toggle: function toggle() {
      var _this = this;

      var checked = !this.checked; // When toggle method is called multiple times at the same time,
      // only the last call is valid.
      // This is a hack for usage inside Cell.

      clearTimeout(this.toggleTask);
      this.toggleTask = setTimeout(function () {
        _this.checked = checked;
      });
    },
    setParentValue: function setParentValue(val) {
      var parent = this.parent;
      var value = parent.value.slice();

      if (val) {
        if (parent.max && value.length >= parent.max) {
          return;
        }
        /* istanbul ignore else */


        if (value.indexOf(this.name) === -1) {
          value.push(this.name);
          parent.$emit('input', value);
        }
      } else {
        var index = value.indexOf(this.name);
        /* istanbul ignore else */

        if (index !== -1) {
          value.splice(index, 1);
          parent.$emit('input', value);
        }
      }
    }
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/popup/index.css
var popup = __webpack_require__("4d75");

// CONCATENATED MODULE: ./node_modules/vant/es/popup/style/index.js


// EXTERNAL MODULE: ./node_modules/vant/es/mixins/popup/index.js + 4 modules
var mixins_popup = __webpack_require__("6605");

// CONCATENATED MODULE: ./node_modules/vant/es/popup/index.js



var popup_createNamespace = Object(create["a" /* createNamespace */])('popup'),
    popup_createComponent = popup_createNamespace[0],
    popup_bem = popup_createNamespace[1];

/* harmony default export */ var es_popup = (popup_createComponent({
  mixins: [mixins_popup["a" /* PopupMixin */]],
  props: {
    round: Boolean,
    duration: Number,
    transition: String,
    position: {
      type: String,
      default: 'center'
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    var createEmitter = function createEmitter(eventName) {
      return function (event) {
        return _this.$emit(eventName, event);
      };
    };

    this.onClick = createEmitter('click');
    this.onOpened = createEmitter('opened');
    this.onClosed = createEmitter('closed');
  },
  render: function render() {
    var _bem;

    var h = arguments[0];

    if (!this.shouldRender) {
      return;
    }

    var round = this.round,
        position = this.position,
        duration = this.duration;
    var transitionName = this.transition || (position === 'center' ? 'van-fade' : "van-popup-slide-" + position);
    var style = {};

    if (Object(utils["b" /* isDef */])(duration)) {
      style.transitionDuration = duration + "s";
    }

    return h("transition", {
      "attrs": {
        "name": transitionName
      },
      "on": {
        "afterEnter": this.onOpened,
        "afterLeave": this.onClosed
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "style": style,
      "class": popup_bem((_bem = {
        round: round
      }, _bem[position] = position, _bem)),
      "on": {
        "click": this.onClick
      }
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/style/index.js


// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/string.js
var string = __webpack_require__("68ed");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/validate/number.js
var number = __webpack_require__("90c6");

// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/utils.js

function times(n, iteratee) {
  var index = -1;
  var result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }

  return result;
}
function getTrueValue(value) {
  if (!value) {
    return;
  }

  while (Object(number["a" /* isNaN */])(parseInt(value, 10))) {
    value = value.slice(1);
  }

  return parseInt(value, 10);
}
function getMonthEndDay(year, month) {
  return 32 - new Date(year, month - 1, 32).getDate();
}
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/shared.js





var sharedProps = Object(esm_extends["a" /* default */])({}, pickerProps, {
  value: null,
  filter: Function,
  showToolbar: {
    type: Boolean,
    default: true
  },
  formatter: {
    type: Function,
    default: function _default(type, value) {
      return value;
    }
  }
});
var TimePickerMixin = {
  data: function data() {
    return {
      innerValue: this.formatValue(this.value)
    };
  },
  computed: {
    originColumns: function originColumns() {
      var _this = this;

      return this.ranges.map(function (_ref) {
        var type = _ref.type,
            rangeArr = _ref.range;
        var values = times(rangeArr[1] - rangeArr[0] + 1, function (index) {
          var value = Object(string["b" /* padZero */])(rangeArr[0] + index);
          return value;
        });

        if (_this.filter) {
          values = _this.filter(type, values);
        }

        return {
          type: type,
          values: values
        };
      });
    },
    columns: function columns() {
      var _this2 = this;

      return this.originColumns.map(function (column) {
        return {
          values: column.values.map(function (value) {
            return _this2.formatter(column.type, value);
          })
        };
      });
    }
  },
  watch: {
    innerValue: function innerValue(val) {
      this.$emit('input', val);
    },
    columns: function columns() {
      this.updateColumnValue(this.innerValue);
    }
  },
  mounted: function mounted() {
    this.updateColumnValue(this.innerValue);
  },
  methods: {
    onConfirm: function onConfirm() {
      this.$emit('confirm', this.innerValue);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var props = {};
    Object.keys(pickerProps).forEach(function (key) {
      props[key] = _this3[key];
    });
    return h(vant_es_picker, {
      "ref": "picker",
      "attrs": {
        "columns": this.columns
      },
      "on": {
        "change": this.onChange,
        "confirm": this.onConfirm,
        "cancel": this.onCancel
      },
      "props": Object(esm_extends["a" /* default */])({}, props)
    });
  }
};
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/TimePicker.js






var TimePicker_createNamespace = Object(create["a" /* createNamespace */])('time-picker'),
    TimePicker_createComponent = TimePicker_createNamespace[0];

/* harmony default export */ var TimePicker = (TimePicker_createComponent({
  mixins: [TimePickerMixin],
  props: Object(esm_extends["a" /* default */])({}, sharedProps, {
    minHour: {
      type: Number,
      default: 0
    },
    maxHour: {
      type: Number,
      default: 23
    },
    minMinute: {
      type: Number,
      default: 0
    },
    maxMinute: {
      type: Number,
      default: 59
    }
  }),
  computed: {
    ranges: function ranges() {
      return [{
        type: 'hour',
        range: [this.minHour, this.maxHour]
      }, {
        type: 'minute',
        range: [this.minMinute, this.maxMinute]
      }];
    }
  },
  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val !== this.innerValue) {
        this.innerValue = val;
        this.updateColumnValue(val);
      }
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!value) {
        value = Object(string["b" /* padZero */])(this.minHour) + ":" + Object(string["b" /* padZero */])(this.minMinute);
      }

      var _value$split = value.split(':'),
          hour = _value$split[0],
          minute = _value$split[1];

      hour = Object(string["b" /* padZero */])(range(hour, this.minHour, this.maxHour));
      minute = Object(string["b" /* padZero */])(range(minute, this.minMinute, this.maxMinute));
      return hour + ":" + minute;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var indexes = picker.getIndexes();
      var hour = this.originColumns[0].values[indexes[0]];
      var minute = this.originColumns[1].values[indexes[1]];
      var value = hour + ":" + minute;
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var pair = value.split(':');
      var values = [formatter('hour', pair[0]), formatter('minute', pair[1])];
      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/utils/validate/date.js

function isDate(date) {
  return Object.prototype.toString.call(date) === '[object Date]' && !Object(number["a" /* isNaN */])(date.getTime());
}
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/DatePicker.js






var currentYear = new Date().getFullYear();

var DatePicker_createNamespace = Object(create["a" /* createNamespace */])('date-picker'),
    DatePicker_createComponent = DatePicker_createNamespace[0];

/* harmony default export */ var DatePicker = (DatePicker_createComponent({
  mixins: [TimePickerMixin],
  props: Object(esm_extends["a" /* default */])({}, sharedProps, {
    type: {
      type: String,
      default: 'datetime'
    },
    minDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear - 10, 0, 1);
      },
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return new Date(currentYear + 10, 11, 31);
      },
      validator: isDate
    }
  }),
  watch: {
    value: function value(val) {
      val = this.formatValue(val);

      if (val.valueOf() !== this.innerValue.valueOf()) {
        this.innerValue = val;
      }
    }
  },
  computed: {
    ranges: function ranges() {
      var _this$getBoundary = this.getBoundary('max', this.innerValue),
          maxYear = _this$getBoundary.maxYear,
          maxDate = _this$getBoundary.maxDate,
          maxMonth = _this$getBoundary.maxMonth,
          maxHour = _this$getBoundary.maxHour,
          maxMinute = _this$getBoundary.maxMinute;

      var _this$getBoundary2 = this.getBoundary('min', this.innerValue),
          minYear = _this$getBoundary2.minYear,
          minDate = _this$getBoundary2.minDate,
          minMonth = _this$getBoundary2.minMonth,
          minHour = _this$getBoundary2.minHour,
          minMinute = _this$getBoundary2.minMinute;

      var result = [{
        type: 'year',
        range: [minYear, maxYear]
      }, {
        type: 'month',
        range: [minMonth, maxMonth]
      }, {
        type: 'day',
        range: [minDate, maxDate]
      }, {
        type: 'hour',
        range: [minHour, maxHour]
      }, {
        type: 'minute',
        range: [minMinute, maxMinute]
      }];
      if (this.type === 'date') result.splice(3, 2);
      if (this.type === 'year-month') result.splice(2, 3);
      return result;
    }
  },
  methods: {
    formatValue: function formatValue(value) {
      if (!isDate(value)) {
        value = this.minDate;
      }

      value = Math.max(value, this.minDate.getTime());
      value = Math.min(value, this.maxDate.getTime());
      return new Date(value);
    },
    getBoundary: function getBoundary(type, value) {
      var _ref;

      var boundary = this[type + "Date"];
      var year = boundary.getFullYear();
      var month = 1;
      var date = 1;
      var hour = 0;
      var minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }

      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;

        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();

          if (value.getDate() === date) {
            hour = boundary.getHours();

            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }

      return _ref = {}, _ref[type + "Year"] = year, _ref[type + "Month"] = month, _ref[type + "Date"] = date, _ref[type + "Hour"] = hour, _ref[type + "Minute"] = minute, _ref;
    },
    onChange: function onChange(picker) {
      var _this = this;

      var values = picker.getValues();
      var year = getTrueValue(values[0]);
      var month = getTrueValue(values[1]);
      var maxDate = getMonthEndDay(year, month);
      var date = getTrueValue(values[2]);

      if (this.type === 'year-month') {
        date = 1;
      }

      date = date > maxDate ? maxDate : date;
      var hour = 0;
      var minute = 0;

      if (this.type === 'datetime') {
        hour = getTrueValue(values[3]);
        minute = getTrueValue(values[4]);
      }

      var value = new Date(year, month - 1, date, hour, minute);
      this.innerValue = this.formatValue(value);
      this.$nextTick(function () {
        _this.$nextTick(function () {
          _this.$emit('change', picker);
        });
      });
    },
    updateColumnValue: function updateColumnValue(value) {
      var _this2 = this;

      var formatter = this.formatter;
      var values = [formatter('year', "" + value.getFullYear()), formatter('month', Object(string["b" /* padZero */])(value.getMonth() + 1)), formatter('day', Object(string["b" /* padZero */])(value.getDate()))];

      if (this.type === 'datetime') {
        values.push(formatter('hour', Object(string["b" /* padZero */])(value.getHours())), formatter('minute', Object(string["b" /* padZero */])(value.getMinutes())));
      }

      if (this.type === 'year-month') {
        values = values.slice(0, 2);
      }

      this.$nextTick(function () {
        _this2.$refs.picker.setValues(values);
      });
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/datetime-picker/index.js





var datetime_picker_createNamespace = Object(create["a" /* createNamespace */])('datetime-picker'),
    datetime_picker_createComponent = datetime_picker_createNamespace[0],
    datetime_picker_bem = datetime_picker_createNamespace[1];

/* harmony default export */ var datetime_picker = (datetime_picker_createComponent({
  props: Object(esm_extends["a" /* default */])({}, TimePicker.props, {}, DatePicker.props),
  render: function render() {
    var h = arguments[0];
    var Component = this.type === 'time' ? TimePicker : DatePicker;
    return h(Component, {
      "class": datetime_picker_bem(),
      "props": Object(esm_extends["a" /* default */])({}, this.$props),
      "on": Object(esm_extends["a" /* default */])({}, this.$listeners)
    });
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/tab/index.css
var tab = __webpack_require__("f319");

// CONCATENATED MODULE: ./node_modules/vant/es/tab/style/index.js


// CONCATENATED MODULE: ./node_modules/vant/es/tab/index.js



var tab_createNamespace = Object(create["a" /* createNamespace */])('tab'),
    tab_createComponent = tab_createNamespace[0],
    tab_bem = tab_createNamespace[1];

/* harmony default export */ var es_tab = (tab_createComponent({
  mixins: [ChildrenMixin('vanTabs')],
  props: {
    name: [Number, String],
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      inited: false
    };
  },
  computed: {
    computedName: function computedName() {
      return this.name || this.index;
    },
    isActive: function isActive() {
      return this.computedName === this.parent.currentName;
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    'parent.currentIndex': function parentCurrentIndex() {
      this.inited = this.inited || this.isActive;
    },
    title: function title() {
      this.parent.setLine();
    }
  },
  mounted: function mounted() {
    if (this.slots('title')) {
      this.parent.renderTitle(this.$refs.title, this.index);
    }
  },
  render: function render(h) {
    var slots = this.slots,
        isActive = this.isActive;
    var shouldRender = this.inited || !this.parent.lazyRender;
    var Content = [shouldRender ? slots() : h()];

    if (slots('title')) {
      Content.push(h("div", {
        "ref": "title"
      }, [slots('title')]));
    }

    if (this.parent.animated) {
      return h("div", {
        "attrs": {
          "role": "tabpanel",
          "aria-hidden": !isActive
        },
        "class": tab_bem('pane-wrapper', {
          inactive: !isActive
        })
      }, [h("div", {
        "class": tab_bem('pane')
      }, [Content])]);
    }

    return h("div", {
      "directives": [{
        name: "show",
        value: isActive
      }],
      "attrs": {
        "role": "tabpanel"
      },
      "class": tab_bem('pane')
    }, [Content]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/sticky/index.css
var sticky = __webpack_require__("ae9e");

// EXTERNAL MODULE: ./node_modules/vant/es/tabs/index.css
var tabs = __webpack_require__("b807");

// CONCATENATED MODULE: ./node_modules/vant/es/tabs/style/index.js



// EXTERNAL MODULE: ./node_modules/vant/es/utils/dom/raf.js
var raf = __webpack_require__("4598");

// CONCATENATED MODULE: ./node_modules/vant/es/tabs/utils.js

function scrollLeftTo(el, to, duration) {
  var count = 0;
  var from = el.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    el.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      Object(raf["b" /* raf */])(animate);
    }
  }

  animate();
}
// CONCATENATED MODULE: ./node_modules/vant/es/utils/dom/style.js
function isHidden(element) {
  return window.getComputedStyle(element).display === 'none' || element.offsetParent === null;
}
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/bind-event.js
/**
 * Bind event when mounted or activated
 */

function BindEventMixin(handler) {
  function bind() {
    if (!this.binded) {
      handler.call(this, dom_event["b" /* on */], true);
      this.binded = true;
    }
  }

  function unbind() {
    if (this.binded) {
      handler.call(this, dom_event["a" /* off */], false);
      this.binded = false;
    }
  }

  return {
    mounted: bind,
    activated: bind,
    deactivated: unbind,
    beforeDestroy: unbind
  };
}
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/Title.js

var Title_bem = Object(create["a" /* createNamespace */])('tab')[1];
/* harmony default export */ var tabs_Title = ({
  props: {
    type: String,
    color: String,
    title: String,
    isActive: Boolean,
    ellipsis: Boolean,
    disabled: Boolean,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    swipeThreshold: Number
  },
  computed: {
    style: function style() {
      var style = {};
      var color = this.color,
          isActive = this.isActive;
      var isCard = this.type === 'card'; // card theme color

      if (color && isCard) {
        style.borderColor = color;

        if (!this.disabled) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }
      }

      var titleColor = isActive ? this.activeColor : this.inactiveColor;

      if (titleColor) {
        style.color = titleColor;
      }

      if (this.scrollable && this.ellipsis) {
        style.flexBasis = 88 / this.swipeThreshold + "%";
      }

      return style;
    }
  },
  methods: {
    onClick: function onClick() {
      this.$emit('click');
    },
    renderTitle: function renderTitle(el) {
      var title = this.$refs.title;
      title.innerHTML = '';
      title.appendChild(el);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "attrs": {
        "role": "tab",
        "aria-selected": this.isActive
      },
      "class": Title_bem({
        active: this.isActive,
        disabled: this.disabled,
        complete: !this.ellipsis
      }),
      "style": this.style,
      "on": {
        "click": this.onClick
      }
    }, [h("span", {
      "ref": "title",
      "class": {
        'van-ellipsis': this.ellipsis
      }
    }, [this.title])]);
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/Content.js




var Content_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    Content_createComponent = Content_createNamespace[0],
    Content_bem = Content_createNamespace[1];

var MIN_SWIPE_DISTANCE = 50;
/* harmony default export */ var tabs_Content = (Content_createComponent({
  mixins: [touch["a" /* TouchMixin */]],
  props: {
    count: Number,
    duration: Number,
    animated: Boolean,
    swipeable: Boolean,
    currentIndex: Number
  },
  computed: {
    style: function style() {
      if (this.animated) {
        return {
          transform: "translate3d(" + -1 * this.currentIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }
    },
    listeners: function listeners() {
      if (this.swipeable) {
        return {
          touchstart: this.touchStart,
          touchmove: this.touchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchEnd
        };
      }
    }
  },
  methods: {
    // watch swipe touch end
    onTouchEnd: function onTouchEnd() {
      var direction = this.direction,
          deltaX = this.deltaX,
          currentIndex = this.currentIndex;
      /* istanbul ignore else */

      if (direction === 'horizontal' && this.offsetX >= MIN_SWIPE_DISTANCE) {
        /* istanbul ignore else */
        if (deltaX > 0 && currentIndex !== 0) {
          this.$emit('change', currentIndex - 1);
        } else if (deltaX < 0 && currentIndex !== this.count - 1) {
          this.$emit('change', currentIndex + 1);
        }
      }
    },
    renderChildren: function renderChildren() {
      var h = this.$createElement;

      if (this.animated) {
        return h("div", {
          "class": Content_bem('track'),
          "style": this.style
        }, [this.slots()]);
      }

      return this.slots();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": Content_bem('content', {
        animated: this.animated
      }),
      "on": Object(esm_extends["a" /* default */])({}, this.listeners)
    }, [this.renderChildren()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/sticky/index.js




var sticky_createNamespace = Object(create["a" /* createNamespace */])('sticky'),
    sticky_createComponent = sticky_createNamespace[0],
    sticky_bem = sticky_createNamespace[1];

/* harmony default export */ var es_sticky = (sticky_createComponent({
  mixins: [BindEventMixin(function (bind) {
    if (!this.scroller) {
      this.scroller = Object(dom_scroll["c" /* getScrollEventTarget */])(this.$el);
    }

    bind(this.scroller, 'scroll', this.onScroll, true);
    this.onScroll();
  })],
  props: {
    zIndex: Number,
    container: null,
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      fixed: false,
      height: 0,
      transform: 0
    };
  },
  computed: {
    style: function style() {
      if (!this.fixed) {
        return;
      }

      var style = {};

      if (Object(utils["b" /* isDef */])(this.zIndex)) {
        style.zIndex = this.zIndex;
      }

      if (this.offsetTop && this.fixed) {
        style.top = this.offsetTop + "px";
      }

      if (this.transform) {
        style.transform = "translate3d(0, " + this.transform + "px, 0)";
      }

      return style;
    }
  },
  methods: {
    onScroll: function onScroll() {
      var _this = this;

      this.height = this.$el.offsetHeight;
      var container = this.container,
          offsetTop = this.offsetTop;
      var scrollTop = Object(dom_scroll["d" /* getScrollTop */])(window);
      var topToPageTop = Object(dom_scroll["a" /* getElementTop */])(this.$el);

      var emitScrollEvent = function emitScrollEvent() {
        _this.$emit('scroll', {
          scrollTop: scrollTop,
          isFixed: _this.fixed
        });
      }; // The sticky component should be kept inside the container element


      if (container) {
        var bottomToPageTop = topToPageTop + container.offsetHeight;

        if (scrollTop + offsetTop + this.height > bottomToPageTop) {
          var distanceToBottom = this.height + scrollTop - bottomToPageTop;

          if (distanceToBottom < this.height) {
            this.fixed = true;
            this.transform = -(distanceToBottom + offsetTop);
          } else {
            this.fixed = false;
          }

          emitScrollEvent();
          return;
        }
      }

      if (scrollTop + offsetTop > topToPageTop) {
        this.fixed = true;
        this.transform = 0;
      } else {
        this.fixed = false;
      }

      emitScrollEvent();
    }
  },
  render: function render() {
    var h = arguments[0];
    var fixed = this.fixed;
    var style = {
      height: fixed ? this.height + "px" : null
    };
    return h("div", {
      "style": style
    }, [h("div", {
      "class": sticky_bem({
        fixed: fixed
      }),
      "style": this.style
    }, [this.slots()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/tabs/index.js











var tabs_createNamespace = Object(create["a" /* createNamespace */])('tabs'),
    tabs_createComponent = tabs_createNamespace[0],
    tabs_bem = tabs_createNamespace[1];

/* harmony default export */ var es_tabs = (tabs_createComponent({
  mixins: [ParentMixin('vanTabs'), BindEventMixin(function (bind) {
    bind(window, 'resize', this.setLine, true);
  })],
  model: {
    prop: 'active'
  },
  props: {
    color: String,
    sticky: Boolean,
    animated: Boolean,
    swipeable: Boolean,
    background: String,
    lineWidth: [Number, String],
    lineHeight: [Number, String],
    titleActiveColor: String,
    titleInactiveColor: String,
    type: {
      type: String,
      default: 'line'
    },
    active: {
      type: [Number, String],
      default: 0
    },
    border: {
      type: Boolean,
      default: true
    },
    ellipsis: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 0.3
    },
    offsetTop: {
      type: Number,
      default: 0
    },
    lazyRender: {
      type: Boolean,
      default: true
    },
    swipeThreshold: {
      type: Number,
      default: 4
    }
  },
  data: function data() {
    return {
      position: '',
      currentIndex: null,
      lineStyle: {
        backgroundColor: this.color
      }
    };
  },
  computed: {
    // whether the nav is scrollable
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold || !this.ellipsis;
    },
    navStyle: function navStyle() {
      return {
        borderColor: this.color,
        background: this.background
      };
    },
    currentName: function currentName() {
      var activeTab = this.children[this.currentIndex];

      if (activeTab) {
        return activeTab.computedName;
      }
    }
  },
  watch: {
    color: 'setLine',
    active: function active(name) {
      if (name !== this.currentName) {
        this.setCurrentIndexByName(name);
      }
    },
    children: function children() {
      this.setCurrentIndexByName(this.currentName || this.active);
      this.scrollIntoView();
      this.setLine();
    },
    currentIndex: function currentIndex() {
      this.scrollIntoView();
      this.setLine(); // scroll to correct position

      if (this.stickyFixed) {
        Object(dom_scroll["e" /* setRootScrollTop */])(Math.ceil(Object(dom_scroll["a" /* getElementTop */])(this.$el) - this.offsetTop));
      }
    }
  },
  mounted: function mounted() {
    this.onShow();
  },
  activated: function activated() {
    this.onShow();
    this.setLine();
  },
  methods: {
    onShow: function onShow() {
      var _this = this;

      this.$nextTick(function () {
        _this.inited = true;

        _this.scrollIntoView(true);
      });
    },
    // update nav bar style
    setLine: function setLine() {
      var _this2 = this;

      var shouldAnimate = this.inited;
      this.$nextTick(function () {
        var titles = _this2.$refs.titles;

        if (!titles || !titles[_this2.currentIndex] || _this2.type !== 'line' || isHidden(_this2.$el)) {
          return;
        }

        var title = titles[_this2.currentIndex].$el;
        var lineWidth = _this2.lineWidth,
            lineHeight = _this2.lineHeight;
        var width = Object(utils["b" /* isDef */])(lineWidth) ? lineWidth : title.offsetWidth / 2;
        var left = title.offsetLeft + title.offsetWidth / 2;
        var lineStyle = {
          width: Object(unit["a" /* addUnit */])(width),
          backgroundColor: _this2.color,
          transform: "translateX(" + left + "px) translateX(-50%)"
        };

        if (shouldAnimate) {
          lineStyle.transitionDuration = _this2.duration + "s";
        }

        if (Object(utils["b" /* isDef */])(lineHeight)) {
          var height = Object(unit["a" /* addUnit */])(lineHeight);
          lineStyle.height = height;
          lineStyle.borderRadius = height;
        }

        _this2.lineStyle = lineStyle;
      });
    },
    // correct the index of active tab
    setCurrentIndexByName: function setCurrentIndexByName(name) {
      var matched = this.children.filter(function (tab) {
        return tab.computedName === name;
      });
      var defaultIndex = (this.children[0] || {}).index || 0;
      this.setCurrentIndex(matched.length ? matched[0].index : defaultIndex);
    },
    setCurrentIndex: function setCurrentIndex(currentIndex) {
      currentIndex = this.findAvailableTab(currentIndex);

      if (Object(utils["b" /* isDef */])(currentIndex) && currentIndex !== this.currentIndex) {
        var shouldEmitChange = this.currentIndex !== null;
        this.currentIndex = currentIndex;
        this.$emit('input', this.currentName);

        if (shouldEmitChange) {
          this.$emit('change', this.currentName, this.children[currentIndex].title);
        }
      }
    },
    findAvailableTab: function findAvailableTab(index) {
      var diff = index < this.currentIndex ? -1 : 1;

      while (index >= 0 && index < this.children.length) {
        if (!this.children[index].disabled) {
          return index;
        }

        index += diff;
      }
    },
    // emit event when clicked
    onClick: function onClick(index) {
      var _this$children$index = this.children[index],
          title = _this$children$index.title,
          disabled = _this$children$index.disabled,
          computedName = _this$children$index.computedName;

      if (disabled) {
        this.$emit('disabled', computedName, title);
      } else {
        this.setCurrentIndex(index);
        this.$emit('click', computedName, title);
      }
    },
    // scroll active tab into view
    scrollIntoView: function scrollIntoView(immediate) {
      var titles = this.$refs.titles;

      if (!this.scrollable || !titles || !titles[this.currentIndex]) {
        return;
      }

      var nav = this.$refs.nav;
      var title = titles[this.currentIndex].$el;
      var to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
      scrollLeftTo(nav, to, immediate ? 0 : this.duration);
    },
    // render title slot of child tab
    renderTitle: function renderTitle(el, index) {
      var _this3 = this;

      this.$nextTick(function () {
        _this3.$refs.titles[index].renderTitle(el);
      });
    },
    onScroll: function onScroll(params) {
      this.stickyFixed = params.isFixed;
      this.$emit('scroll', params);
    }
  },
  render: function render() {
    var _this4 = this,
        _ref;

    var h = arguments[0];
    var type = this.type,
        ellipsis = this.ellipsis,
        animated = this.animated,
        scrollable = this.scrollable;
    var Nav = this.children.map(function (item, index) {
      return h(tabs_Title, {
        "ref": "titles",
        "refInFor": true,
        "attrs": {
          "type": type,
          "title": item.title,
          "color": _this4.color,
          "isActive": index === _this4.currentIndex,
          "ellipsis": ellipsis,
          "disabled": item.disabled,
          "scrollable": scrollable,
          "activeColor": _this4.titleActiveColor,
          "inactiveColor": _this4.titleInactiveColor,
          "swipeThreshold": _this4.swipeThreshold
        },
        "on": {
          "click": function click() {
            _this4.onClick(index);
          }
        }
      });
    });
    var Wrap = h("div", {
      "ref": "wrap",
      "class": [tabs_bem('wrap', {
        scrollable: scrollable
      }), (_ref = {}, _ref[constant["e" /* BORDER_TOP_BOTTOM */]] = type === 'line' && this.border, _ref)]
    }, [h("div", {
      "ref": "nav",
      "attrs": {
        "role": "tablist"
      },
      "class": tabs_bem('nav', [type]),
      "style": this.navStyle
    }, [this.slots('nav-left'), Nav, type === 'line' && h("div", {
      "class": tabs_bem('line'),
      "style": this.lineStyle
    }), this.slots('nav-right')])]);
    return h("div", {
      "class": tabs_bem([type])
    }, [this.sticky ? h(es_sticky, {
      "attrs": {
        "container": this.$el,
        "offsetTop": this.offsetTop
      },
      "on": {
        "scroll": this.onScroll
      }
    }, [Wrap]) : Wrap, h(tabs_Content, {
      "attrs": {
        "count": this.children.length,
        "animated": animated,
        "duration": this.duration,
        "swipeable": this.swipeable,
        "currentIndex": this.currentIndex
      },
      "on": {
        "change": this.setCurrentIndex
      }
    }, [this.slots()])]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/radio/index.css
var es_radio = __webpack_require__("dde9");

// EXTERNAL MODULE: ./node_modules/vant/es/address-list/index.css
var address_list = __webpack_require__("e2c8");

// CONCATENATED MODULE: ./node_modules/vant/es/address-list/style/index.js




// CONCATENATED MODULE: ./node_modules/vant/es/radio-group/index.js



var radio_group_createNamespace = Object(create["a" /* createNamespace */])('radio-group'),
    radio_group_createComponent = radio_group_createNamespace[0],
    radio_group_bem = radio_group_createNamespace[1];

/* harmony default export */ var radio_group = (radio_group_createComponent({
  mixins: [ParentMixin('vanRadio')],
  props: {
    value: null,
    disabled: Boolean
  },
  watch: {
    value: function value(_value) {
      this.$emit('change', _value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": radio_group_bem(),
      "attrs": {
        "role": "radiogroup"
      }
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/radio/index.js



var radio_createNamespace = Object(create["a" /* createNamespace */])('radio'),
    radio_createComponent = radio_createNamespace[0],
    radio_bem = radio_createNamespace[1];

/* harmony default export */ var vant_es_radio = (radio_createComponent({
  mixins: [checkbox_CheckboxMixin({
    bem: radio_bem,
    role: 'radio',
    parent: 'vanRadio'
  })],
  computed: {
    currentValue: {
      get: function get() {
        return this.parent ? this.parent.value : this.value;
      },
      set: function set(val) {
        (this.parent || this).$emit('input', val);
      }
    },
    checked: function checked() {
      return this.currentValue === this.name;
    }
  },
  methods: {
    toggle: function toggle() {
      this.currentValue = this.name;
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/address-list/Item.js






 // Types

var Item_createNamespace = Object(create["a" /* createNamespace */])('address-item'),
    Item_createComponent = Item_createNamespace[0],
    Item_bem = Item_createNamespace[1];

function AddressItem(h, props, slots, ctx) {
  var disabled = props.disabled,
      switchable = props.switchable;

  function onClick() {
    if (switchable) {
      Object(functional["a" /* emit */])(ctx, 'select');
    }

    Object(functional["a" /* emit */])(ctx, 'click');
  }

  var renderRightIcon = function renderRightIcon() {
    return h(es_icon["a" /* default */], {
      "attrs": {
        "name": "edit"
      },
      "class": Item_bem('edit'),
      "on": {
        "click": function click(event) {
          event.stopPropagation();
          Object(functional["a" /* emit */])(ctx, 'edit');
          Object(functional["a" /* emit */])(ctx, 'click');
        }
      }
    });
  };

  var renderContent = function renderContent() {
    var data = props.data;
    var Info = [h("div", {
      "class": Item_bem('name')
    }, [data.name + "\uFF0C" + data.tel]), h("div", {
      "class": Item_bem('address')
    }, [data.address])];
    return switchable && !disabled ? h(vant_es_radio, {
      "attrs": {
        "name": data.id,
        "iconSize": 16,
        "checkedColor": constant["g" /* RED */]
      }
    }, [Info]) : Info;
  };

  return h(cell["a" /* default */], helper_default()([{
    "class": Item_bem({
      disabled: disabled
    }),
    "attrs": {
      "valueClass": Item_bem('value'),
      "clickable": switchable && !disabled
    },
    "scopedSlots": {
      default: renderContent,
      'right-icon': renderRightIcon
    },
    "on": {
      "click": onClick
    }
  }, Object(functional["b" /* inherit */])(ctx)]));
}

AddressItem.props = {
  data: Object,
  disabled: Boolean,
  switchable: Boolean
};
/* harmony default export */ var Item = (Item_createComponent(AddressItem));
// CONCATENATED MODULE: ./node_modules/vant/es/address-list/index.js





 // Types

var address_list_createNamespace = Object(create["a" /* createNamespace */])('address-list'),
    address_list_createComponent = address_list_createNamespace[0],
    address_list_bem = address_list_createNamespace[1],
    address_list_t = address_list_createNamespace[2];

function AddressList(h, props, slots, ctx) {
  function renderList(list, disabled) {
    if (!list) {
      return;
    }

    return list.map(function (item, index) {
      return h(Item, {
        "attrs": {
          "data": item,
          "disabled": disabled,
          "switchable": props.switchable
        },
        "key": item.id,
        "on": {
          "select": function select() {
            Object(functional["a" /* emit */])(ctx, disabled ? 'select-disabled' : 'select', item, index);

            if (!disabled) {
              Object(functional["a" /* emit */])(ctx, 'input', item.id);
            }
          },
          "edit": function edit() {
            Object(functional["a" /* emit */])(ctx, disabled ? 'edit-disabled' : 'edit', item, index);
          },
          "click": function click() {
            Object(functional["a" /* emit */])(ctx, 'click-item', item, index);
          }
        }
      });
    });
  }

  var List = renderList(props.list);
  var DisabledList = renderList(props.disabledList, true);
  return h("div", helper_default()([{
    "class": address_list_bem()
  }, Object(functional["b" /* inherit */])(ctx)]), [slots.top && slots.top(), h(radio_group, {
    "attrs": {
      "value": props.value
    },
    "on": {
      "input": function input(event) {
        Object(functional["a" /* emit */])(ctx, 'input', event);
      }
    }
  }, [List]), props.disabledText && h("div", {
    "class": address_list_bem('disabled-text')
  }, [props.disabledText]), DisabledList, slots.default && slots.default(), h(es_button, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": "danger",
      "text": props.addButtonText || address_list_t('add')
    },
    "class": address_list_bem('add'),
    "on": {
      "click": function click() {
        Object(functional["a" /* emit */])(ctx, 'add');
      }
    }
  })]);
}

AddressList.props = {
  list: Array,
  disabledList: Array,
  disabledText: String,
  addButtonText: String,
  value: [Number, String],
  switchable: {
    type: Boolean,
    default: true
  }
};
/* harmony default export */ var es_address_list = (address_list_createComponent(AddressList));
// EXTERNAL MODULE: ./node_modules/vant/es/cell-group/style/index.js
var cell_group_style = __webpack_require__("0653");

// EXTERNAL MODULE: ./node_modules/vant/es/cell-group/index.js
var cell_group = __webpack_require__("34e9");

// EXTERNAL MODULE: ./node_modules/vant/es/search/index.css
var search = __webpack_require__("f032");

// CONCATENATED MODULE: ./node_modules/vant/es/search/style/index.js




// CONCATENATED MODULE: ./node_modules/vant/es/search/index.js






 // Types

var search_createNamespace = Object(create["a" /* createNamespace */])('search'),
    search_createComponent = search_createNamespace[0],
    search_bem = search_createNamespace[1],
    search_t = search_createNamespace[2];

function Search(h, props, slots, ctx) {
  function Label() {
    if (slots.label || props.label) {
      return h("div", {
        "class": search_bem('label')
      }, [slots.label ? slots.label() : props.label]);
    }
  }

  function Action() {
    if (!props.showAction) {
      return;
    }

    function onCancel() {
      Object(functional["a" /* emit */])(ctx, 'input', '');
      Object(functional["a" /* emit */])(ctx, 'cancel');
    }

    return h("div", {
      "class": search_bem('action')
    }, [slots.action ? slots.action() : h("div", {
      "on": {
        "click": onCancel
      }
    }, [search_t('cancel')])]);
  }

  var fieldData = {
    attrs: ctx.data.attrs,
    on: Object(esm_extends["a" /* default */])({}, ctx.listeners, {
      input: function input(value) {
        Object(functional["a" /* emit */])(ctx, 'input', value);
      },
      keypress: function keypress(event) {
        // press enter
        if (event.keyCode === 13) {
          Object(dom_event["c" /* preventDefault */])(event);
          Object(functional["a" /* emit */])(ctx, 'search', props.value);
        }

        Object(functional["a" /* emit */])(ctx, 'keypress', event);
      }
    })
  };
  var inheritData = Object(functional["b" /* inherit */])(ctx);
  delete inheritData.attrs;
  return h("div", helper_default()([{
    "class": search_bem({
      'show-action': props.showAction
    }),
    "style": {
      background: props.background
    }
  }, inheritData]), [h("div", {
    "class": search_bem('content', props.shape)
  }, [Label(), h(es_field, helper_default()([{
    "attrs": {
      "type": "search",
      "border": false,
      "value": props.value,
      "leftIcon": props.leftIcon,
      "rightIcon": props.rightIcon,
      "clearable": props.clearable
    },
    "scopedSlots": {
      'left-icon': slots['left-icon'],
      'right-icon': slots['right-icon']
    }
  }, fieldData]))]), Action()]);
}

Search.props = {
  value: String,
  label: String,
  rightIcon: String,
  showAction: Boolean,
  shape: {
    type: String,
    default: 'square'
  },
  clearable: {
    type: Boolean,
    default: true
  },
  background: {
    type: String,
    default: '#fff'
  },
  leftIcon: {
    type: String,
    default: 'search'
  }
};
/* harmony default export */ var es_search = (search_createComponent(Search));
// EXTERNAL MODULE: ./node_modules/vant/es/submit-bar/index.css
var submit_bar = __webpack_require__("3b42");

// CONCATENATED MODULE: ./node_modules/vant/es/submit-bar/style/index.js



// CONCATENATED MODULE: ./node_modules/vant/es/submit-bar/index.js




 // Types

var submit_bar_createNamespace = Object(create["a" /* createNamespace */])('submit-bar'),
    submit_bar_createComponent = submit_bar_createNamespace[0],
    submit_bar_bem = submit_bar_createNamespace[1],
    submit_bar_t = submit_bar_createNamespace[2];

function SubmitBar(h, props, slots, ctx) {
  var tip = props.tip,
      price = props.price,
      tipIcon = props.tipIcon;

  function Text() {
    if (typeof price === 'number') {
      var priceText = props.currency + " " + (price / 100).toFixed(props.decimalLength);
      return h("div", {
        "class": submit_bar_bem('text')
      }, [h("span", [props.label || submit_bar_t('label')]), h("span", {
        "class": submit_bar_bem('price')
      }, [priceText]), props.suffixLabel && h("span", {
        "class": submit_bar_bem('suffix-label')
      }, [props.suffixLabel])]);
    }
  }

  function Tip() {
    if (slots.tip || tip) {
      return h("div", {
        "class": submit_bar_bem('tip')
      }, [tipIcon && h(es_icon["a" /* default */], {
        "class": submit_bar_bem('tip-icon'),
        "attrs": {
          "name": tipIcon
        }
      }), tip && h("span", {
        "class": submit_bar_bem('tip-text')
      }, [tip]), slots.tip && slots.tip()]);
    }
  }

  return h("div", helper_default()([{
    "class": submit_bar_bem({
      'safe-area-inset-bottom': props.safeAreaInsetBottom
    })
  }, Object(functional["b" /* inherit */])(ctx)]), [slots.top && slots.top(), Tip(), h("div", {
    "class": submit_bar_bem('bar')
  }, [slots.default && slots.default(), Text(), h(es_button, {
    "attrs": {
      "square": true,
      "size": "large",
      "type": props.buttonType,
      "loading": props.loading,
      "disabled": props.disabled,
      "text": props.loading ? '' : props.buttonText
    },
    "class": submit_bar_bem('button'),
    "on": {
      "click": function click() {
        Object(functional["a" /* emit */])(ctx, 'submit');
      }
    }
  })])]);
}

SubmitBar.props = {
  tip: String,
  label: String,
  price: Number,
  tipIcon: String,
  loading: Boolean,
  disabled: Boolean,
  buttonText: String,
  suffixLabel: String,
  safeAreaInsetBottom: Boolean,
  decimalLength: {
    type: Number,
    default: 2
  },
  currency: {
    type: String,
    default: '¥'
  },
  buttonType: {
    type: String,
    default: 'danger'
  }
};
/* harmony default export */ var es_submit_bar = (submit_bar_createComponent(SubmitBar));
// EXTERNAL MODULE: ./node_modules/vant/es/stepper/index.css
var stepper = __webpack_require__("fb6c");

// CONCATENATED MODULE: ./node_modules/vant/es/stepper/style/index.js


// CONCATENATED MODULE: ./node_modules/vant/es/stepper/index.js





var stepper_createNamespace = Object(create["a" /* createNamespace */])('stepper'),
    stepper_createComponent = stepper_createNamespace[0],
    stepper_bem = stepper_createNamespace[1];

var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;
/* harmony default export */ var es_stepper = (stepper_createComponent({
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    defaultValue: {
      type: [Number, String],
      default: 1
    },
    showPlus: {
      type: Boolean,
      default: true
    },
    showMinus: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    var value = this.range(Object(utils["b" /* isDef */])(this.value) ? this.value : this.defaultValue);

    if (value !== +this.value) {
      this.$emit('input', value);
    }

    return {
      currentValue: value
    };
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.disabled || this.currentValue <= this.min;
    },
    plusDisabled: function plusDisabled() {
      return this.disabled || this.currentValue >= this.max;
    },
    inputStyle: function inputStyle() {
      var style = {};

      if (this.inputWidth) {
        style.width = Object(unit["a" /* addUnit */])(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = Object(unit["a" /* addUnit */])(this.buttonSize);
      }

      return style;
    },
    buttonStyle: function buttonStyle() {
      var style = {};

      if (this.buttonSize) {
        var size = Object(unit["a" /* addUnit */])(this.buttonSize);
        style.width = size;
        style.height = size;
      }

      return style;
    }
  },
  watch: {
    value: function value(val) {
      if (val !== this.currentValue) {
        this.currentValue = this.format(val);
      }
    },
    currentValue: function currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val);
    }
  },
  methods: {
    // filter illegal characters
    format: function format(value) {
      value = String(value).replace(/[^0-9.-]/g, '');
      return value === '' ? 0 : this.integer ? Math.floor(value) : +value;
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.max, this.format(value)), this.min);
    },
    onInput: function onInput(event) {
      var value = event.target.value;
      var formatted = this.format(value);

      if (this.asyncChange) {
        event.target.value = this.currentValue;
        this.$emit('input', formatted);
        this.$emit('change', formatted);
      } else {
        if (+value !== formatted) {
          event.target.value = formatted;
        }

        this.currentValue = formatted;
      }
    },
    onChange: function onChange() {
      var type = this.type;

      if (this[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.step : +this.step;
      var value = Math.round((this.currentValue + diff) * 100) / 100;

      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.currentValue = this.range(value);
      }

      this.$emit(type);
    },
    onFocus: function onFocus(event) {
      this.$emit('focus', event);
    },
    onBlur: function onBlur(event) {
      this.currentValue = this.range(this.currentValue);
      this.$emit('blur', event); // fix edge case when input is empty and min is 0

      if (this.currentValue === 0) {
        event.target.value = this.currentValue;
      }

      resetScroll();
    },
    longPressStep: function longPressStep() {
      var _this = this;

      this.longPressTimer = setTimeout(function () {
        _this.onChange(_this.type);

        _this.longPressStep(_this.type);
      }, LONG_PRESS_INTERVAL);
    },
    onTouchStart: function onTouchStart() {
      var _this2 = this;

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;
      this.longPressTimer = setTimeout(function () {
        _this2.isLongPress = true;

        _this2.onChange();

        _this2.longPressStep();
      }, LONG_PRESS_START_TIME);
    },
    onTouchEnd: function onTouchEnd(event) {
      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        event.preventDefault();
      }
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];

    var createListeners = function createListeners(type) {
      return {
        on: {
          click: function click() {
            _this3.type = type;

            _this3.onChange();
          },
          touchstart: function touchstart() {
            _this3.type = type;

            _this3.onTouchStart(type);
          },
          touchend: _this3.onTouchEnd,
          touchcancel: _this3.onTouchEnd
        }
      };
    };

    return h("div", {
      "class": stepper_bem()
    }, [h("button", helper_default()([{
      "directives": [{
        name: "show",
        value: this.showMinus
      }],
      "style": this.buttonStyle,
      "class": stepper_bem('minus', {
        disabled: this.minusDisabled
      })
    }, createListeners('minus')])), h("input", {
      "attrs": {
        "type": "number",
        "role": "spinbutton",
        "aria-valuemax": this.max,
        "aria-valuemin": this.min,
        "aria-valuenow": this.currentValue,
        "disabled": this.disabled || this.disableInput
      },
      "class": stepper_bem('input'),
      "domProps": {
        "value": this.currentValue
      },
      "style": this.inputStyle,
      "on": {
        "input": this.onInput,
        "focus": this.onFocus,
        "blur": this.onBlur
      }
    }), h("button", helper_default()([{
      "directives": [{
        name: "show",
        value: this.showPlus
      }],
      "style": this.buttonStyle,
      "class": stepper_bem('plus', {
        disabled: this.plusDisabled
      })
    }, createListeners('plus')]))]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/panel/index.css
var panel = __webpack_require__("0fee");

// CONCATENATED MODULE: ./node_modules/vant/es/panel/style/index.js



// CONCATENATED MODULE: ./node_modules/vant/es/panel/index.js





 // Types

var panel_createNamespace = Object(create["a" /* createNamespace */])('panel'),
    panel_createComponent = panel_createNamespace[0],
    panel_bem = panel_createNamespace[1];

function Panel(h, props, slots, ctx) {
  var Content = function Content() {
    return [slots.header ? slots.header() : h(cell["a" /* default */], {
      "attrs": {
        "icon": props.icon,
        "label": props.desc,
        "title": props.title,
        "value": props.status,
        "valueClass": panel_bem('header-value')
      },
      "class": panel_bem('header')
    }), h("div", {
      "class": panel_bem('content')
    }, [slots.default && slots.default()]), slots.footer && h("div", {
      "class": [panel_bem('footer'), constant["d" /* BORDER_TOP */]]
    }, [slots.footer()])];
  };

  return h(cell_group["a" /* default */], helper_default()([{
    "class": panel_bem(),
    "scopedSlots": {
      default: Content
    }
  }, Object(functional["b" /* inherit */])(ctx, true)]));
}

Panel.props = {
  icon: String,
  desc: String,
  title: String,
  status: String
};
/* harmony default export */ var es_panel = (panel_createComponent(Panel));
// CONCATENATED MODULE: ./node_modules/vant/es/collapse/style/index.js

// CONCATENATED MODULE: ./node_modules/vant/es/collapse/index.js




var collapse_createNamespace = Object(create["a" /* createNamespace */])('collapse'),
    collapse_createComponent = collapse_createNamespace[0],
    collapse_bem = collapse_createNamespace[1];

/* harmony default export */ var collapse = (collapse_createComponent({
  mixins: [ParentMixin('vanCollapse')],
  props: {
    accordion: Boolean,
    value: [String, Number, Array],
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    switch: function _switch(name, expanded) {
      if (!this.accordion) {
        name = expanded ? this.value.concat(name) : this.value.filter(function (activeName) {
          return activeName !== name;
        });
      }

      this.$emit('change', name);
      this.$emit('input', name);
    }
  },
  render: function render() {
    var _ref;

    var h = arguments[0];
    return h("div", {
      "class": [collapse_bem(), (_ref = {}, _ref[constant["e" /* BORDER_TOP_BOTTOM */]] = this.border, _ref)]
    }, [this.slots()]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/collapse-item/index.css
var collapse_item = __webpack_require__("bff0");

// CONCATENATED MODULE: ./node_modules/vant/es/collapse-item/style/index.js



// CONCATENATED MODULE: ./node_modules/vant/es/collapse-item/index.js








var collapse_item_createNamespace = Object(create["a" /* createNamespace */])('collapse-item'),
    collapse_item_createComponent = collapse_item_createNamespace[0],
    collapse_item_bem = collapse_item_createNamespace[1];

var CELL_SLOTS = ['title', 'icon', 'right-icon'];
/* harmony default export */ var es_collapse_item = (collapse_item_createComponent({
  mixins: [ChildrenMixin('vanCollapse')],
  props: Object(esm_extends["a" /* default */])({}, shared["a" /* cellProps */], {
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  }),
  data: function data() {
    return {
      show: null,
      inited: null
    };
  },
  computed: {
    currentName: function currentName() {
      return Object(utils["b" /* isDef */])(this.name) ? this.name : this.index;
    },
    expanded: function expanded() {
      var _this = this;

      if (!this.parent) {
        return null;
      }

      var value = this.parent.value;
      return this.parent.accordion ? value === this.currentName : value.some(function (name) {
        return name === _this.currentName;
      });
    }
  },
  created: function created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },
  watch: {
    expanded: function expanded(_expanded, prev) {
      var _this2 = this;

      if (prev === null) {
        return;
      }

      if (_expanded) {
        this.show = true;
        this.inited = true;
      } // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`


      var nextTick = _expanded ? this.$nextTick : raf["b" /* raf */];
      nextTick(function () {
        var _this2$$refs = _this2.$refs,
            content = _this2$$refs.content,
            wrapper = _this2$$refs.wrapper;

        if (!content || !wrapper) {
          return;
        }

        var offsetHeight = content.offsetHeight;

        if (offsetHeight) {
          var contentHeight = offsetHeight + "px";
          wrapper.style.height = _expanded ? 0 : contentHeight; // use double raf to ensure animation can start in mobile safari

          Object(raf["a" /* doubleRaf */])(function () {
            wrapper.style.height = _expanded ? contentHeight : 0;
          });
        } else {
          _this2.onTransitionEnd();
        }
      });
    }
  },
  methods: {
    onClick: function onClick() {
      if (this.disabled) {
        return;
      }

      var parent = this.parent;
      var name = parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },
    onTransitionEnd: function onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  },
  render: function render() {
    var _this3 = this,
        _ref;

    var h = arguments[0];
    var disabled = this.disabled,
        expanded = this.expanded;
    var titleSlots = CELL_SLOTS.reduce(function (slots, name) {
      if (_this3.slots(name)) {
        slots[name] = function () {
          return _this3.slots(name);
        };
      }

      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = function () {
        return _this3.slots('value');
      };
    }

    var Title = h(cell["a" /* default */], {
      "attrs": {
        "role": "button",
        "tabindex": disabled ? -1 : 0,
        "aria-expanded": String(expanded)
      },
      "class": collapse_item_bem('title', {
        disabled: disabled,
        expanded: expanded
      }),
      "on": {
        "click": this.onClick
      },
      "scopedSlots": titleSlots,
      "props": Object(esm_extends["a" /* default */])({}, this.$props)
    });
    var Content = this.inited && h("div", {
      "directives": [{
        name: "show",
        value: this.show
      }],
      "ref": "wrapper",
      "class": collapse_item_bem('wrapper'),
      "on": {
        "transitionend": this.onTransitionEnd
      }
    }, [h("div", {
      "ref": "content",
      "class": collapse_item_bem('content')
    }, [this.slots()])]);
    return h("div", {
      "class": [collapse_item_bem(), (_ref = {}, _ref[constant["d" /* BORDER_TOP */]] = this.index, _ref)]
    }, [Title, Content]);
  }
}));
// EXTERNAL MODULE: ./node_modules/vant/es/swipe/index.css
var swipe = __webpack_require__("8270");

// EXTERNAL MODULE: ./node_modules/vant/es/swipe-item/index.css
var swipe_item = __webpack_require__("786d");

// EXTERNAL MODULE: ./node_modules/vant/es/image-preview/index.css
var image_preview = __webpack_require__("504b");

// EXTERNAL MODULE: ./node_modules/vant/es/uploader/index.css
var uploader = __webpack_require__("bcd3");

// CONCATENATED MODULE: ./node_modules/vant/es/uploader/style/index.js







// CONCATENATED MODULE: ./node_modules/vant/es/uploader/utils.js
function toArray(item) {
  if (Array.isArray(item)) {
    return item;
  }

  return [item];
}
function utils_readFile(file, resultType) {
  return new Promise(function (resolve) {
    var reader = new FileReader();

    reader.onload = function (event) {
      resolve(event.target.result);
    };

    if (resultType === 'dataUrl') {
      reader.readAsDataURL(file);
    } else if (resultType === 'text') {
      reader.readAsText(file);
    }
  });
}
function isOversize(files, maxSize) {
  return toArray(files).some(function (file) {
    return file.size > maxSize;
  });
}
var IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];
function isImageUrl(url) {
  return IMAGE_EXT.some(function (ext) {
    return url.indexOf("." + ext) !== -1;
  });
}
function isImageFile(item) {
  // some special urls cannot be recognized
  // user can add `isImage` flag to mark it as an image url
  if (item.isImage) {
    return true;
  }

  if (item.file && item.file.type) {
    return item.file.type.indexOf('image') === 0;
  }

  if (item.url) {
    return isImageUrl(item.url);
  }

  if (item.content) {
    return item.content.indexOf('data:image') === 0;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/close-on-popstate.js



var CloseOnPopstateMixin = external_Vue_default.a.extend({
  mixins: [BindEventMixin(function (bind, isBind) {
    this.handlePopstate(isBind && this.closeOnPopstate);
  })],
  props: {
    closeOnPopstate: Boolean
  },
  data: function data() {
    return {
      bindStatus: false
    };
  },
  watch: {
    closeOnPopstate: function closeOnPopstate(val) {
      this.handlePopstate(val);
    }
  },
  methods: {
    handlePopstate: function handlePopstate(bind) {
      /* istanbul ignore if */
      if (this.$isServer) {
        return;
      }

      if (this.bindStatus !== bind) {
        this.bindStatus = bind;
        var action = bind ? dom_event["b" /* on */] : dom_event["a" /* off */];
        action(window, 'popstate', this.close);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/swipe/index.js







var swipe_createNamespace = Object(create["a" /* createNamespace */])('swipe'),
    swipe_createComponent = swipe_createNamespace[0],
    swipe_bem = swipe_createNamespace[1];

/* harmony default export */ var es_swipe = (swipe_createComponent({
  mixins: [touch["a" /* TouchMixin */], BindEventMixin(function (bind, isBind) {
    bind(window, 'resize', this.onResize, true);

    if (isBind) {
      this.initialize();
    } else {
      this.clear();
    }
  })],
  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },
  watch: {
    swipes: function swipes() {
      this.initialize();
    },
    initialSwipe: function initialSwipe() {
      this.initialize();
    },
    autoplay: function autoplay(_autoplay) {
      if (!_autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },
  computed: {
    count: function count() {
      return this.swipes.length;
    },
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    size: function size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },
    trackSize: function trackSize() {
      return this.count * this.size;
    },
    activeIndicator: function activeIndicator() {
      return (this.active + this.count) % this.count;
    },
    isCorrectDirection: function isCorrectDirection() {
      var expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },
    trackStyle: function trackStyle() {
      var _ref;

      var mainAxis = this.vertical ? 'height' : 'width';
      var crossAxis = this.vertical ? 'width' : 'height';
      return _ref = {}, _ref[mainAxis] = this.trackSize + "px", _ref[crossAxis] = this[crossAxis] ? this[crossAxis] + "px" : '', _ref.transitionDuration = (this.swiping ? 0 : this.duration) + "ms", _ref.transform = "translate" + (this.vertical ? 'Y' : 'X') + "(" + this.offset + "px)", _ref;
    },
    indicatorStyle: function indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },
    minOffset: function minOffset() {
      var rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },
  methods: {
    // initialize swipe position
    initialize: function initialize(active) {
      if (active === void 0) {
        active = this.initialSwipe;
      }

      clearTimeout(this.timer);

      if (this.$el) {
        var rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(function (swipe) {
        swipe.offset = 0;
      });
      this.autoPlay();
    },
    onResize: function onResize() {
      this.initialize(this.activeIndicator);
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },
    onTouchMove: function onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;
      this.touchMove(event);

      if (this.isCorrectDirection) {
        Object(dom_event["c" /* preventDefault */])(event, true);
        this.move({
          offset: this.delta
        });
      }
    },
    onTouchEnd: function onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        var offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? this.delta > 0 ? -1 : 1 : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },
    getTargetActive: function getTargetActive(pace) {
      var active = this.active,
          count = this.count;

      if (pace) {
        if (this.loop) {
          return range(active + pace, -1, count);
        }

        return range(active + pace, 0, count - 1);
      }

      return active;
    },
    getTargetOffset: function getTargetOffset(targetActive, offset) {
      var currentPosition = targetActive * this.size;

      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      var targetOffset = Math.round(offset - currentPosition);

      if (!this.loop) {
        targetOffset = range(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },
    move: function move(_ref2) {
      var _ref2$pace = _ref2.pace,
          pace = _ref2$pace === void 0 ? 0 : _ref2$pace,
          _ref2$offset = _ref2.offset,
          offset = _ref2$offset === void 0 ? 0 : _ref2$offset,
          emitChange = _ref2.emitChange;
      var loop = this.loop,
          count = this.count,
          active = this.active,
          swipes = this.swipes,
          trackSize = this.trackSize,
          minOffset = this.minOffset;

      if (count <= 1) {
        return;
      }

      var targetActive = this.getTargetActive(pace);
      var targetOffset = this.getTargetOffset(targetActive, offset); // auto move first and last swipe in loop mode

      if (loop) {
        if (swipes[0]) {
          var outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          var outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },
    swipeTo: function swipeTo(index, options) {
      var _this = this;

      if (options === void 0) {
        options = {};
      }

      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();
      Object(raf["a" /* doubleRaf */])(function () {
        _this.move({
          pace: index % _this.count - _this.active,
          emitChange: true
        });

        if (options.immediate) {
          Object(raf["a" /* doubleRaf */])(function () {
            _this.swiping = false;
          });
        } else {
          _this.swiping = false;
        }
      });
    },
    correctPosition: function correctPosition() {
      if (this.active <= -1) {
        this.move({
          pace: this.count
        });
      }

      if (this.active >= this.count) {
        this.move({
          pace: -this.count
        });
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    autoPlay: function autoPlay() {
      var _this2 = this;

      var autoplay = this.autoplay;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(function () {
          _this2.swiping = true;

          _this2.resetTouchStatus();

          _this2.correctPosition();

          Object(raf["a" /* doubleRaf */])(function () {
            _this2.swiping = false;

            _this2.move({
              pace: 1,
              emitChange: true
            });

            _this2.autoPlay();
          });
        }, autoplay);
      }
    },
    renderIndicator: function renderIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      var count = this.count,
          activeIndicator = this.activeIndicator;
      var slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return h("div", {
          "class": swipe_bem('indicators', {
            vertical: this.vertical
          })
        }, [Array.apply(void 0, Array(count)).map(function (empty, index) {
          return h("i", {
            "class": swipe_bem('indicator', {
              active: index === activeIndicator
            }),
            "style": index === activeIndicator ? _this3.indicatorStyle : null
          });
        })]);
      }
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": swipe_bem()
    }, [h("div", {
      "ref": "track",
      "style": this.trackStyle,
      "class": swipe_bem('track'),
      "on": {
        "touchstart": this.onTouchStart,
        "touchmove": this.onTouchMove,
        "touchend": this.onTouchEnd,
        "touchcancel": this.onTouchEnd
      }
    }, [this.slots()]), this.renderIndicator()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/swipe-item/index.js



var swipe_item_createNamespace = Object(create["a" /* createNamespace */])('swipe-item'),
    swipe_item_createComponent = swipe_item_createNamespace[0],
    swipe_item_bem = swipe_item_createNamespace[1];

/* harmony default export */ var es_swipe_item = (swipe_item_createComponent({
  data: function data() {
    return {
      offset: 0
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.swipes.push(this);
  },
  destroyed: function destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1);
  },
  render: function render() {
    var h = arguments[0];
    var _this$$parent = this.$parent,
        vertical = _this$$parent.vertical,
        computedWidth = _this$$parent.computedWidth,
        computedHeight = _this$$parent.computedHeight;
    var style = {
      width: computedWidth + 'px',
      height: vertical ? computedHeight + 'px' : '100%',
      transform: "translate" + (vertical ? 'Y' : 'X') + "(" + this.offset + "px)"
    };
    return h("div", {
      "class": swipe_item_bem(),
      "style": style,
      "on": Object(esm_extends["a" /* default */])({}, this.$listeners)
    }, [this.slots()]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/image-preview/ImagePreview.js











var ImagePreview_createNamespace = Object(create["a" /* createNamespace */])('image-preview'),
    ImagePreview_createComponent = ImagePreview_createNamespace[0],
    ImagePreview_bem = ImagePreview_createNamespace[1];

function getDistance(touches) {
  return Math.sqrt(Math.abs((touches[0].clientX - touches[1].clientX) * (touches[0].clientY - touches[1].clientY)));
}

/* harmony default export */ var image_preview_ImagePreview = (ImagePreview_createComponent({
  mixins: [mixins_popup["a" /* PopupMixin */], touch["a" /* TouchMixin */], CloseOnPopstateMixin],
  props: {
    className: null,
    lazyLoad: Boolean,
    asyncClose: Boolean,
    showIndicators: Boolean,
    images: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    swipeDuration: {
      type: Number,
      default: 500
    },
    overlay: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: true
    },
    startPosition: {
      type: Number,
      default: 0
    },
    minZoom: {
      type: Number,
      default: 1 / 3
    },
    maxZoom: {
      type: Number,
      default: 3
    },
    overlayClass: {
      type: String,
      default: ImagePreview_bem('overlay')
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    this.bindStatus = false;
    return {
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: false,
      zooming: false,
      active: 0,
      doubleClickTimer: null
    };
  },
  computed: {
    imageStyle: function imageStyle() {
      var scale = this.scale;
      var style = {
        transition: this.zooming || this.moving ? '' : '.3s all'
      };

      if (scale !== 1) {
        style.transform = "scale3d(" + scale + ", " + scale + ", 1) translate(" + this.moveX / scale + "px, " + this.moveY / scale + "px)";
      }

      return style;
    }
  },
  watch: {
    value: function value() {
      this.active = this.startPosition;
    },
    startPosition: function startPosition(active) {
      this.active = active;
    }
  },
  methods: {
    onWrapperTouchStart: function onWrapperTouchStart() {
      this.touchStartTime = new Date();
    },
    onWrapperTouchEnd: function onWrapperTouchEnd(event) {
      var _this = this;

      Object(dom_event["c" /* preventDefault */])(event);
      var deltaTime = new Date() - this.touchStartTime;

      var _ref = this.$refs.swipe || {},
          _ref$offsetX = _ref.offsetX,
          offsetX = _ref$offsetX === void 0 ? 0 : _ref$offsetX,
          _ref$offsetY = _ref.offsetY,
          offsetY = _ref$offsetY === void 0 ? 0 : _ref$offsetY; // prevent long tap to close component


      if (deltaTime < 300 && offsetX < 10 && offsetY < 10) {
        if (!this.doubleClickTimer) {
          this.doubleClickTimer = setTimeout(function () {
            var index = _this.active;

            _this.resetScale();

            _this.$emit('close', {
              index: index,
              url: _this.images[index]
            });

            if (!_this.asyncClose) {
              _this.$emit('input', false);
            }

            _this.doubleClickTimer = null;
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
          this.toggleScale();
        }
      }
    },
    startMove: function startMove(event) {
      var image = event.currentTarget;
      var rect = image.getBoundingClientRect();
      var winWidth = window.innerWidth;
      var winHeight = window.innerHeight;
      this.touchStart(event);
      this.moving = true;
      this.startMoveX = this.moveX;
      this.startMoveY = this.moveY;
      this.maxMoveX = Math.max(0, (rect.width - winWidth) / 2);
      this.maxMoveY = Math.max(0, (rect.height - winHeight) / 2);
    },
    startZoom: function startZoom(event) {
      this.moving = false;
      this.zooming = true;
      this.startScale = this.scale;
      this.startDistance = getDistance(event.touches);
    },
    onImageTouchStart: function onImageTouchStart(event) {
      var touches = event.touches;

      var _ref2 = this.$refs.swipe || {},
          _ref2$offsetX = _ref2.offsetX,
          offsetX = _ref2$offsetX === void 0 ? 0 : _ref2$offsetX;

      if (touches.length === 1 && this.scale !== 1) {
        this.startMove(event);
      }
      /* istanbul ignore else */
      else if (touches.length === 2 && !offsetX) {
          this.startZoom(event);
        }
    },
    onImageTouchMove: function onImageTouchMove(event) {
      var touches = event.touches;

      if (this.moving || this.zooming) {
        Object(dom_event["c" /* preventDefault */])(event, true);
      }

      if (this.moving) {
        this.touchMove(event);
        var moveX = this.deltaX + this.startMoveX;
        var moveY = this.deltaY + this.startMoveY;
        this.moveX = range(moveX, -this.maxMoveX, this.maxMoveX);
        this.moveY = range(moveY, -this.maxMoveY, this.maxMoveY);
      }

      if (this.zooming && touches.length === 2) {
        var distance = getDistance(touches);
        var scale = this.startScale * distance / this.startDistance;
        this.scale = range(scale, this.minZoom, this.maxZoom);
      }
    },
    onImageTouchEnd: function onImageTouchEnd(event) {
      /* istanbul ignore else */
      if (this.moving || this.zooming) {
        var stopPropagation = true;

        if (this.moving && this.startMoveX === this.moveX && this.startMoveY === this.moveY) {
          stopPropagation = false;
        }

        if (!event.touches.length) {
          this.moving = false;
          this.zooming = false;
          this.startMoveX = 0;
          this.startMoveY = 0;
          this.startScale = 1;

          if (this.scale < 1) {
            this.resetScale();
          }
        }

        if (stopPropagation) {
          Object(dom_event["c" /* preventDefault */])(event, true);
        }
      }
    },
    onSwipeChange: function onSwipeChange(active) {
      this.resetScale();
      this.active = active;
      this.$emit('change', active);
    },
    resetScale: function resetScale() {
      this.scale = 1;
      this.moveX = 0;
      this.moveY = 0;
    },
    toggleScale: function toggleScale() {
      var scale = this.scale > 1 ? 1 : 2;
      this.scale = scale;
      this.moveX = 0;
      this.moveY = 0;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];

    if (!this.value) {
      return;
    }

    var active = this.active,
        images = this.images;
    var Index = this.showIndex && h("div", {
      "class": ImagePreview_bem('index')
    }, [this.slots('index') || active + 1 + "/" + images.length]);
    var Images = h(es_swipe, {
      "ref": "swipe",
      "attrs": {
        "loop": this.loop,
        "duration": this.swipeDuration,
        "indicatorColor": "white",
        "initialSwipe": this.startPosition,
        "showIndicators": this.showIndicators
      },
      "on": {
        "change": this.onSwipeChange
      }
    }, [images.map(function (image, index) {
      var props = {
        class: ImagePreview_bem('image'),
        style: index === active ? _this2.imageStyle : null,
        on: {
          touchstart: _this2.onImageTouchStart,
          touchmove: _this2.onImageTouchMove,
          touchend: _this2.onImageTouchEnd,
          touchcancel: _this2.onImageTouchEnd
        }
      };
      return h(es_swipe_item, [_this2.lazyLoad ? h("img", helper_default()([{
        "directives": [{
          name: "lazy",
          value: image
        }]
      }, props])) : h("img", helper_default()([{
        "attrs": {
          "src": image
        }
      }, props]))]);
    })]);
    return h("transition", {
      "attrs": {
        "name": "van-fade"
      }
    }, [h("div", {
      "class": [ImagePreview_bem(), this.className],
      "on": {
        "touchstart": this.onWrapperTouchStart,
        "touchMove": dom_event["c" /* preventDefault */],
        "touchend": this.onWrapperTouchEnd,
        "touchcancel": this.onWrapperTouchEnd
      }
    }, [Images, Index])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/image-preview/index.js




var instance;
var defaultConfig = {
  images: [],
  loop: true,
  swipeDuration: 500,
  value: true,
  minZoom: 1 / 3,
  maxZoom: 3,
  className: '',
  onClose: null,
  onChange: null,
  lazyLoad: false,
  showIndex: true,
  asyncClose: false,
  startPosition: 0,
  showIndicators: false,
  closeOnPopstate: false
};

var image_preview_initInstance = function initInstance() {
  instance = new (external_Vue_default.a.extend(image_preview_ImagePreview))({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  instance.$on('change', function (index) {
    if (instance.onChange) {
      instance.onChange(index);
    }
  });
};

var es_image_preview_ImagePreview = function ImagePreview(images, startPosition) {
  if (startPosition === void 0) {
    startPosition = 0;
  }

  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return;
  }

  if (!instance) {
    image_preview_initInstance();
  }

  var options = Array.isArray(images) ? {
    images: images,
    startPosition: startPosition
  } : images;

  Object(esm_extends["a" /* default */])(instance, defaultConfig, options);

  instance.$once('input', function (show) {
    instance.value = show;
  });

  if (options.onClose) {
    instance.$once('close', options.onClose);
  }

  return instance;
};

es_image_preview_ImagePreview.install = function () {
  external_Vue_default.a.use(image_preview_ImagePreview);
};

/* harmony default export */ var es_image_preview = (es_image_preview_ImagePreview);
// CONCATENATED MODULE: ./node_modules/vant/es/uploader/index.js







var uploader_createNamespace = Object(create["a" /* createNamespace */])('uploader'),
    uploader_createComponent = uploader_createNamespace[0],
    uploader_bem = uploader_createNamespace[1];

/* harmony default export */ var es_uploader = (uploader_createComponent({
  inheritAttrs: false,
  model: {
    prop: 'fileList'
  },
  props: {
    disabled: Boolean,
    uploadText: String,
    afterRead: Function,
    beforeRead: Function,
    previewSize: [Number, String],
    name: {
      type: [Number, String],
      default: ''
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxSize: {
      type: Number,
      default: Number.MAX_VALUE
    },
    maxCount: {
      type: Number,
      default: Number.MAX_VALUE
    },
    previewImage: {
      type: Boolean,
      default: true
    },
    resultType: {
      type: String,
      default: 'dataUrl'
    }
  },
  computed: {
    detail: function detail() {
      return {
        name: this.name
      };
    },
    previewSizeWithUnit: function previewSizeWithUnit() {
      return Object(unit["a" /* addUnit */])(this.previewSize);
    }
  },
  methods: {
    onChange: function onChange(event) {
      var _this = this;

      var files = event.target.files;

      if (this.disabled || !files.length) {
        return;
      }

      files = files.length === 1 ? files[0] : [].slice.call(files);

      if (this.beforeRead) {
        var response = this.beforeRead(files, this.detail);

        if (!response) {
          this.resetInput();
          return;
        }

        if (response.then) {
          response.then(function () {
            _this.readFile(files);
          }).catch(this.resetInput);
          return;
        }
      }

      this.readFile(files);
    },
    readFile: function readFile(files) {
      var _this2 = this;

      var oversize = isOversize(files, this.maxSize);

      if (Array.isArray(files)) {
        var maxCount = this.maxCount - this.fileList.length;

        if (files.length > maxCount) {
          files = files.slice(0, maxCount);
        }

        Promise.all(files.map(function (file) {
          return utils_readFile(file, _this2.resultType);
        })).then(function (contents) {
          var fileList = files.map(function (file, index) {
            return {
              file: file,
              content: contents[index]
            };
          });

          _this2.onAfterRead(fileList, oversize);
        });
      } else {
        utils_readFile(files, this.resultType).then(function (content) {
          _this2.onAfterRead({
            file: files,
            content: content
          }, oversize);
        });
      }
    },
    onAfterRead: function onAfterRead(files, oversize) {
      if (oversize) {
        this.$emit('oversize', files, this.detail);
        return;
      }

      this.resetInput();
      this.$emit('input', [].concat(this.fileList, toArray(files)));

      if (this.afterRead) {
        this.afterRead(files, this.detail);
      }
    },
    onDelete: function onDelete(file, index) {
      var fileList = this.fileList.slice(0);
      fileList.splice(index, 1);
      this.$emit('input', fileList);
      this.$emit('delete', file);
    },
    resetInput: function resetInput() {
      /* istanbul ignore else */
      if (this.$refs.input) {
        this.$refs.input.value = '';
      }
    },
    onPreviewImage: function onPreviewImage(item) {
      var imageFiles = this.fileList.filter(function (item) {
        return isImageFile(item);
      }).map(function (item) {
        return item.content || item.url;
      });
      es_image_preview({
        images: imageFiles,
        startPosition: imageFiles.indexOf(item.content || item.url)
      });
    },
    renderPreview: function renderPreview() {
      var _this3 = this;

      var h = this.$createElement;

      if (!this.previewImage) {
        return;
      }

      return this.fileList.map(function (item, index) {
        return h("div", {
          "class": uploader_bem('preview')
        }, [isImageFile(item) ? h(vant_es_image["a" /* default */], {
          "attrs": {
            "fit": "cover",
            "src": item.content || item.url,
            "width": _this3.previewSize,
            "height": _this3.previewSize
          },
          "class": uploader_bem('preview-image'),
          "on": {
            "click": function click() {
              _this3.onPreviewImage(item);
            }
          }
        }) : h("div", {
          "class": uploader_bem('file'),
          "style": {
            width: _this3.previewSizeWithUnit,
            height: _this3.previewSizeWithUnit
          }
        }, [h(es_icon["a" /* default */], {
          "class": uploader_bem('file-icon'),
          "attrs": {
            "name": "description"
          }
        }), h("div", {
          "class": [uploader_bem('file-name'), 'van-ellipsis']
        }, [item.file ? item.file.name : item.url])]), h(es_icon["a" /* default */], {
          "attrs": {
            "name": "delete"
          },
          "class": uploader_bem('preview-delete'),
          "on": {
            "click": function click() {
              _this3.onDelete(item, index);
            }
          }
        })]);
      });
    },
    renderUpload: function renderUpload() {
      var h = this.$createElement;

      if (this.fileList.length >= this.maxCount) {
        return;
      }

      var slot = this.slots();
      var Input = h("input", {
        "attrs": Object(esm_extends["a" /* default */])({}, this.$attrs, {
          "type": "file",
          "accept": this.accept,
          "disabled": this.disabled
        }),
        "ref": "input",
        "class": uploader_bem('input'),
        "on": {
          "change": this.onChange
        }
      });

      if (slot) {
        return h("div", {
          "class": uploader_bem('input-wrapper')
        }, [slot, Input]);
      }

      var style;

      if (this.previewSize) {
        var size = this.previewSizeWithUnit;
        style = {
          width: size,
          height: size
        };
      }

      return h("div", {
        "class": uploader_bem('upload'),
        "style": style
      }, [h(es_icon["a" /* default */], {
        "attrs": {
          "name": "plus"
        },
        "class": uploader_bem('upload-icon')
      }), this.uploadText && h("span", {
        "class": uploader_bem('upload-text')
      }, [this.uploadText]), Input]);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": uploader_bem()
    }, [h("div", {
      "class": uploader_bem('wrapper')
    }, [this.renderPreview(), this.renderUpload()])]);
  }
}));
// CONCATENATED MODULE: ./src/utils/vant.js













































external_Vue_default.a.use(es_card).use(es_button).use(es_nav_bar).use(toast["a" /* default */]).use(es_field).use(vant_es_picker).use(cell["a" /* default */]).use(checkbox_group).use(vant_es_checkbox).use(es_popup).use(datetime_picker).use(es_tab).use(es_tabs).use(es_address_list).use(cell_group["a" /* default */]).use(es_search).use(es_submit_bar).use(es_stepper).use(es_panel).use(collapse).use(es_collapse_item).use(es_uploader);
// CONCATENATED MODULE: ./src/utils/get-page-title.js
var get_page_title_title = '当阳殡葬管理所';
function getPageTitle(pageTitle) {
  if (pageTitle) {
    return "".concat(pageTitle, " - ").concat(get_page_title_title);
  }

  return "".concat(get_page_title_title);
}
// CONCATENATED MODULE: ./src/plugins/wechatAuth.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var qs = __webpack_require__("4328"); // 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）


var SCOPES = ['snsapi_base', 'snsapi_userinfo'];

var VueWechatAuthPlugin =
/*#__PURE__*/
function () {
  function VueWechatAuthPlugin() {
    _classCallCheck(this, VueWechatAuthPlugin);

    this.appid = null;
    this.redirect_uri = null;
    this.scope = SCOPES[1];
    this._code = null;
    this._redirect_uri = null;
  }

  _createClass(VueWechatAuthPlugin, [{
    key: "install",
    value: function install(Vue, options) {
      var wechatAuth = this;
      this.setAppId(options.appid);
      Vue.mixin({
        created: function created() {
          this.$wechatAuth = wechatAuth;
        }
      });
    }
  }, {
    key: "setAppId",
    value: function setAppId(appid) {
      this.appid = appid;
    }
  }, {
    key: "returnFromWechat",
    value: function returnFromWechat(redirect_uri) {
      var parsedUrl = qs.parse(redirect_uri.split('?')[1]);

      if (false) {} else {
        if (this.state === null) {
          throw new Error("You did't set state");
        }

        if (parsedUrl.state === this.state) {
          this.state = null;
          this._code = parsedUrl.code;
        } else {
          this.state = null;
          throw new Error("Wrong state: ".concat(parsedUrl.state));
        }
      }
    }
  }, {
    key: "redirect_uri",
    set: function set(redirect_uri) {
      this._redirect_uri = encodeURIComponent(redirect_uri);
    },
    get: function get() {
      return this._redirect_uri;
    }
  }, {
    key: "state",
    get: function get() {
      return localStorage.getItem('wechat_auth:state');
    },
    set: function set(state) {
      localStorage.setItem('wechat_auth:state', state);
    }
  }, {
    key: "authUrl",
    get: function get() {
      if (this.appid === null) {
        throw new Error('appid must not be null');
      }

      if (this.redirect_uri === null) {
        throw new Error('redirect uri must not be null');
      }

      this.state = VueWechatAuthPlugin.makeState();
      return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=".concat(this.appid, "&redirect_uri=").concat(this.redirect_uri, "&response_type=code&scope=").concat(this.scope, "&state=").concat(this.state, "#wechat_redirect");
    }
  }, {
    key: "code",
    get: function get() {
      if (this._code === null) {
        throw new Error('Not get the code from wechat server!');
      } // console.log(this)
      // console.log('this._code: ' + this._code)


      var code = this._code;
      this._code = null; // console.log('code: ' + code)

      return code;
    }
  }], [{
    key: "makeState",
    value: function makeState() {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }
  }]);

  return VueWechatAuthPlugin;
}();

var vueWechatAuthPlugin = new VueWechatAuthPlugin(); // if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(VueWechatAuthPlugin)
// }

/* harmony default export */ var wechatAuth = (vueWechatAuthPlugin);
// CONCATENATED MODULE: ./src/permission.js



 // 微信登录插件

var permission_qs = __webpack_require__("4328");

router.beforeEach(function (to, from, next) {
  var loginStatus = Number(store["a" /* default */].getters.loginStatus); // console.log('loginStatus=' + loginStatus)
  // console.log('userInfo=' + store.getters.userInfo)
  // 页面标题

  document.title = getPageTitle(to.meta.title);

  if (loginStatus === 0) {
    // 微信未授权登录跳转到授权登录页面
    var url = window.location.href; // 解决重复登录url添加重复的code与state问题

    var parseUrl = permission_qs.parse(url.split('?')[1]);
    var loginUrl;

    if (parseUrl.code && parseUrl.state) {
      delete parseUrl.code;
      delete parseUrl.state;
      loginUrl = "".concat(url.split('?')[0], "?").concat(permission_qs.stringify(parseUrl));
    } else {
      loginUrl = url;
    } // 设置微信授权回调地址


    wechatAuth.redirect_uri = loginUrl; // 无论拒绝还是授权都设置成1

    store["a" /* default */].dispatch('user/setLoginStatus', 1); // 跳转到微信授权页面

    window.location.href = wechatAuth.authUrl;
  } else if (loginStatus === 1) {
    // 用户已授权，获取code
    try {
      // 通过回调链接设置code status
      wechatAuth.returnFromWechat(to.fullPath);
    } catch (err) {
      // 失败，设置状态未登录，刷新页面
      store["a" /* default */].dispatch('user/setLoginStatus', 0); // location.reload()
    } // 同意授权 to.fullPath 携带code参数，拒绝授权没有code参数


    var code = wechatAuth.code;

    if (code) {
      console.log('1', code); // 拿到code 访问服务端的登录接口

      store["a" /* default */].dispatch('user/loginWechatAuth', code).then(function (res) {
        // 成功设置已登录状态
        store["a" /* default */].dispatch('user/setLoginStatus', 2);
        next('/');
      }).catch(function () {
        // 失败，设置状态未登录，刷新页面
        store["a" /* default */].dispatch('user/setLoginStatus', 0); //    location.reload()
      });
      next();
    } else {
      store["a" /* default */].dispatch('user/setLoginStatus', 0); //  location.reload()
    }
  } else {
    next();
  }
});
// EXTERNAL MODULE: ./node_modules/vconsole/dist/vconsole.min.js
var vconsole_min = __webpack_require__("3a34");
var vconsole_min_default = /*#__PURE__*/__webpack_require__.n(vconsole_min);

// CONCATENATED MODULE: ./src/main.js

 // A modern alternative to CSS resets

 // global css
// 移动端适配






 // filters

 // directives


 // permission control

 // 微信登录插件

fastclick_default.a.attach(document.body); // 设置appid

external_Vue_default.a.use(wechatAuth, {
  appid: "wx65cf5d321b9b357a"
}); // 手机端调试工具


external_Vue_default.a.use(vconsole_min_default.a);
external_Vue_default.a.config.productionTip = false;
new external_Vue_default.a({
  el: '#app',
  router: router,
  store: store["a" /* default */],
  render: function render(h) {
    return h(App);
  }
});

/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = Vuex;

/***/ }),

/***/ "6389":
/***/ (function(module, exports) {

module.exports = VueRouter;

/***/ }),

/***/ "6605":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vant/es/mixins/popup/context.js
var context = {
  zIndex: 2000,
  lockCount: 0,
  stack: [],

  get top() {
    return this.stack[this.stack.length - 1];
  }

};
// EXTERNAL MODULE: ./node_modules/vant/es/mixins/touch.js
var touch = __webpack_require__("3875");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/vant/es/mixins/portal.js


function getElement(selector) {
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  return selector();
}

function PortalMixin(_ref) {
  var afterPortal = _ref.afterPortal;
  return external_Vue_default.a.extend({
    props: {
      getContainer: [String, Function]
    },
    watch: {
      getContainer: 'portal'
    },
    mounted: function mounted() {
      if (this.getContainer) {
        this.portal();
      }
    },
    methods: {
      portal: function portal() {
        var getContainer = this.getContainer;
        var container;

        if (getContainer) {
          container = getElement(getContainer);
        } else if (this.$parent) {
          container = this.$parent.$el;
        }

        if (container && container !== this.$el.parentNode) {
          container.appendChild(this.$el);
        }

        if (afterPortal) {
          afterPortal.call(this);
        }
      }
    }
  });
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/dom/event.js
var dom_event = __webpack_require__("1325");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("c31d");

// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("d282");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/functional.js
var functional = __webpack_require__("ba31");

// CONCATENATED MODULE: ./node_modules/vant/es/overlay/index.js




 // Types

var _createNamespace = Object(create["a" /* createNamespace */])('overlay'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function preventTouchMove(event) {
  Object(dom_event["c" /* preventDefault */])(event, true);
}

function Overlay(h, props, slots, ctx) {
  var style = Object(esm_extends["a" /* default */])({
    zIndex: props.zIndex
  }, props.customStyle);

  if (Object(utils["b" /* isDef */])(props.duration)) {
    style.animationDuration = props.duration + "s";
  }

  return h("transition", {
    "attrs": {
      "name": "van-fade"
    }
  }, [h("div", helper_default()([{
    "directives": [{
      name: "show",
      value: props.show
    }],
    "style": style,
    "class": [bem(), props.className],
    "on": {
      "touchmove": preventTouchMove
    }
  }, Object(functional["b" /* inherit */])(ctx, true)]))]);
}

Overlay.props = {
  show: Boolean,
  duration: [Number, String],
  className: null,
  customStyle: null,
  zIndex: {
    type: [Number, String],
    default: 1
  }
};
/* harmony default export */ var overlay = (createComponent(Overlay));
// CONCATENATED MODULE: ./node_modules/vant/es/mixins/popup/overlay.js




var defaultConfig = {
  className: '',
  customStyle: {}
};
var overlay_overlay; // close popup when click overlay && closeOnClickOverlay is true

function onClickOverlay() {
  if (context.top) {
    var vm = context.top.vm;
    vm.$emit('click-overlay');

    if (vm.closeOnClickOverlay) {
      if (vm.onClickOverlay) {
        vm.onClickOverlay();
      } else {
        vm.close();
      }
    }
  }
}

function updateOverlay() {
  if (!overlay_overlay) {
    overlay_overlay = Object(functional["c" /* mount */])(overlay, {
      on: {
        click: onClickOverlay
      }
    });
  }

  if (context.top) {
    var _context$top = context.top,
        vm = _context$top.vm,
        config = _context$top.config;
    var el = vm.$el;

    if (el && el.parentNode) {
      el.parentNode.insertBefore(overlay_overlay.$el, el);
    } else {
      document.body.appendChild(overlay_overlay.$el);
    }

    Object(esm_extends["a" /* default */])(overlay_overlay, defaultConfig, config, {
      show: true
    });
  } else {
    overlay_overlay.show = false;
  }
}
function openOverlay(vm, config) {
  if (!context.stack.some(function (item) {
    return item.vm === vm;
  })) {
    context.stack.push({
      vm: vm,
      config: config
    });
    updateOverlay();
  }
}
function closeOverlay(vm) {
  var stack = context.stack;

  if (stack.length) {
    if (context.top.vm === vm) {
      stack.pop();
      updateOverlay();
    } else {
      context.stack = stack.filter(function (item) {
        return item.vm !== vm;
      });
    }
  }
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/dom/scroll.js
var dom_scroll = __webpack_require__("a8c1");

// CONCATENATED MODULE: ./node_modules/vant/es/mixins/popup/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupMixin; });






var PopupMixin = {
  mixins: [touch["a" /* TouchMixin */], PortalMixin({
    afterPortal: function afterPortal() {
      if (this.overlay) {
        updateOverlay();
      }
    }
  })],
  props: {
    // whether to show popup
    value: Boolean,
    // whether to show overlay
    overlay: Boolean,
    // overlay custom style
    overlayStyle: Object,
    // overlay custom class name
    overlayClass: String,
    // whether to close popup when click overlay
    closeOnClickOverlay: Boolean,
    // z-index
    zIndex: [Number, String],
    // prevent body scroll
    lockScroll: {
      type: Boolean,
      default: true
    },
    // whether to lazy render
    lazyRender: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      inited: this.value
    };
  },
  computed: {
    shouldRender: function shouldRender() {
      return this.inited || !this.lazyRender;
    }
  },
  watch: {
    value: function value(val) {
      var type = val ? 'open' : 'close';
      this.inited = this.inited || this.value;
      this[type]();
      this.$emit(type);
    },
    overlay: 'renderOverlay'
  },
  mounted: function mounted() {
    if (this.value) {
      this.open();
    }
  },

  /* istanbul ignore next */
  activated: function activated() {
    if (this.value) {
      this.open();
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.close();

    if (this.getContainer && this.$parent && this.$parent.$el) {
      this.$parent.$el.appendChild(this.$el);
    }
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    this.close();
  },
  methods: {
    open: function open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      } // cover default zIndex


      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        Object(dom_event["b" /* on */])(document, 'touchstart', this.touchStart);
        Object(dom_event["b" /* on */])(document, 'touchmove', this.onTouchMove);

        if (!context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }

        context.lockCount++;
      }
    },
    close: function close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        context.lockCount--;
        Object(dom_event["a" /* off */])(document, 'touchstart', this.touchStart);
        Object(dom_event["a" /* off */])(document, 'touchmove', this.onTouchMove);

        if (!context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      closeOverlay(this);
      this.$emit('input', false);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      var direction = this.deltaY > 0 ? '10' : '01';
      var el = Object(dom_scroll["c" /* getScrollEventTarget */])(event.target, this.$el);
      var scrollHeight = el.scrollHeight,
          offsetHeight = el.offsetHeight,
          scrollTop = el.scrollTop;
      var status = '11';
      /* istanbul ignore next */

      if (scrollTop === 0) {
        status = offsetHeight >= scrollHeight ? '00' : '01';
      } else if (scrollTop + offsetHeight >= scrollHeight) {
        status = '10';
      }
      /* istanbul ignore next */


      if (status !== '11' && this.direction === 'vertical' && !(parseInt(status, 2) & parseInt(direction, 2))) {
        Object(dom_event["c" /* preventDefault */])(event, true);
      }
    },
    renderOverlay: function renderOverlay() {
      var _this = this;

      if (this.$isServer || !this.value) {
        return;
      }

      this.$nextTick(function () {
        _this.updateZIndex(_this.overlay ? 1 : 0);

        if (_this.overlay) {
          openOverlay(_this, {
            zIndex: context.zIndex++,
            duration: _this.duration,
            className: _this.overlayClass,
            customStyle: _this.overlayStyle
          });
        } else {
          closeOverlay(_this);
        }
      });
    },
    updateZIndex: function updateZIndex(value) {
      if (value === void 0) {
        value = 0;
      }

      this.$el.style.zIndex = ++context.zIndex + value;
    }
  }
};

/***/ }),

/***/ "68ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return padZero; });
var camelizeRE = /-(\w)/g;
function camelize(str) {
  return str.replace(camelizeRE, function (_, c) {
    return c.toUpperCase();
  });
}
function padZero(num, targetLength) {
  if (targetLength === void 0) {
    targetLength = 2;
  }

  var str = num + '';

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}

/***/ }),

/***/ "68ef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7744":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c31d");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2638");
/* harmony import */ var _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("d282");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a142");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("dfaf");
/* harmony import */ var _utils_functional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ba31");
/* harmony import */ var _utils_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("48f4");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("ad06");






 // Types

var _createNamespace = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* createNamespace */ "a"])('cell'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Cell(h, props, slots, ctx) {
  var icon = props.icon,
      size = props.size,
      title = props.title,
      label = props.label,
      value = props.value,
      isLink = props.isLink,
      arrowDirection = props.arrowDirection;
  var showTitle = slots.title || Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "b"])(title);
  var showValue = slots.default || Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "b"])(value);
  var showLabel = slots.label || Object(_utils__WEBPACK_IMPORTED_MODULE_3__[/* isDef */ "b"])(label);
  var Label = showLabel && h("div", {
    "class": [bem('label'), props.labelClass]
  }, [slots.label ? slots.label() : label]);
  var Title = showTitle && h("div", {
    "class": [bem('title'), props.titleClass],
    "style": props.titleStyle
  }, [slots.title ? slots.title() : h("span", [title]), Label]);
  var Value = showValue && h("div", {
    "class": [bem('value', {
      alone: !slots.title && !title
    }), props.valueClass]
  }, [slots.default ? slots.default() : h("span", [value])]);
  var LeftIcon = slots.icon ? slots.icon() : icon && h(_icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    "class": bem('left-icon'),
    "attrs": {
      "name": icon
    }
  });
  var rightIconSlot = slots['right-icon'];
  var RightIcon = rightIconSlot ? rightIconSlot() : isLink && h(_icon__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    "class": bem('right-icon'),
    "attrs": {
      "name": arrowDirection ? "arrow-" + arrowDirection : 'arrow'
    }
  });

  function onClick(event) {
    Object(_utils_functional__WEBPACK_IMPORTED_MODULE_5__[/* emit */ "a"])(ctx, 'click', event);
    Object(_utils_router__WEBPACK_IMPORTED_MODULE_6__[/* functionalRoute */ "a"])(ctx);
  }

  var classes = {
    center: props.center,
    required: props.required,
    borderless: !props.border,
    clickable: isLink || props.clickable
  };

  if (size) {
    classes[size] = size;
  }

  return h("div", _vue_babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_1___default()([{
    "class": bem(classes),
    "on": {
      "click": onClick
    }
  }, Object(_utils_functional__WEBPACK_IMPORTED_MODULE_5__[/* inherit */ "b"])(ctx)]), [LeftIcon, Title, Value, RightIcon, slots.extra && slots.extra()]);
}

Cell.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, _shared__WEBPACK_IMPORTED_MODULE_4__[/* cellProps */ "a"], {}, _utils_router__WEBPACK_IMPORTED_MODULE_6__[/* routeProps */ "b"]);
/* harmony default export */ __webpack_exports__["a"] = (createComponent(Cell));

/***/ }),

/***/ "786d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8270":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8a0b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "90c6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNaN; });
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  } // eslint-disable-next-line no-self-compare


  return value !== value;
}

/***/ }),

/***/ "9536":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"menuText":"#bfcbd9","menuActiveText":"#409EFF","subMenuActiveText":"#f4f4f5","menuBg":"#304156","menuHover":"#263445","subMenuBg":"#1f2d3d","subMenuHover":"#001528","sideBarWidth":"5.6rem"};

/***/ }),

/***/ "9b7e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9e6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__("d233");

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "a142":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;
function noop() {}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}
function get(object, path) {
  var keys = path.split('.');
  var result = object;
  keys.forEach(function (key) {
    result = isDef(result[key]) ? result[key] : '';
  });
  return result;
}

/***/ }),

/***/ "a526":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a78e":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "a8c1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getScrollEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getScrollTop; });
/* unused harmony export setScrollTop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setRootScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getElementTop; });
/* unused harmony export getVisibleHeight */
// get nearest scroll element
// http://w3help.org/zh-cn/causes/SD9013
// http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
var overflowScrollReg = /scroll|auto/i;
function getScrollEventTarget(element, rootParent) {
  if (rootParent === void 0) {
    rootParent = window;
  }

  var node = element;

  while (node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== rootParent) {
    var _window$getComputedSt = window.getComputedStyle(node),
        overflowY = _window$getComputedSt.overflowY;

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      } // see: https://github.com/youzan/vant/issues/3823


      var _window$getComputedSt2 = window.getComputedStyle(node.parentNode),
          htmlOverflowY = _window$getComputedSt2.overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return rootParent;
}
function getScrollTop(element) {
  return 'scrollTop' in element ? element.scrollTop : element.pageYOffset;
}
function setScrollTop(element, value) {
  'scrollTop' in element ? element.scrollTop = value : element.scrollTo(element.scrollX, value);
}
function getRootScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
} // get distance from element top to page top

function getElementTop(element) {
  return (element === window ? 0 : element.getBoundingClientRect().top) + getRootScrollTop();
}
function getVisibleHeight(element) {
  return element === window ? element.innerHeight : element.getBoundingClientRect().height;
}

/***/ }),

/***/ "ad06":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@vue/babel-helper-vue-jsx-merge-props/dist/helper.js
var helper = __webpack_require__("2638");
var helper_default = /*#__PURE__*/__webpack_require__.n(helper);

// EXTERNAL MODULE: ./node_modules/vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("d282");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/unit.js
var unit = __webpack_require__("ea8e");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/functional.js
var functional = __webpack_require__("ba31");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// CONCATENATED MODULE: ./node_modules/vant/es/info/index.js


 // Types

var _createNamespace = Object(create["a" /* createNamespace */])('info'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

function Info(h, props, slots, ctx) {
  if (!Object(utils["b" /* isDef */])(props.info) || props.info === '') {
    return;
  }

  return h("div", helper_default()([{
    "class": bem()
  }, Object(functional["b" /* inherit */])(ctx, true)]), [props.info]);
}

Info.props = {
  info: [Number, String]
};
/* harmony default export */ var info = (createComponent(Info));
// EXTERNAL MODULE: ./node_modules/vant/es/image/index.js
var es_image = __webpack_require__("44bf");

// CONCATENATED MODULE: ./node_modules/vant/es/icon/index.js




 // Types

var icon_createNamespace = Object(create["a" /* createNamespace */])('icon'),
    icon_createComponent = icon_createNamespace[0],
    icon_bem = icon_createNamespace[1];

function isImage(name) {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(h, props, slots, ctx) {
  var imageIcon = isImage(props.name);
  return h(props.tag, helper_default()([{
    "class": [props.classPrefix, imageIcon ? '' : props.classPrefix + "-" + props.name],
    "style": {
      color: props.color,
      fontSize: Object(unit["a" /* addUnit */])(props.size)
    }
  }, Object(functional["b" /* inherit */])(ctx, true)]), [slots.default && slots.default(), imageIcon && h(es_image["a" /* default */], {
    "class": icon_bem('image'),
    "attrs": {
      "fit": "contain",
      "src": props.name,
      "showLoading": false
    }
  }), h(info, {
    "attrs": {
      "info": props.info
    }
  })]);
}

Icon.props = {
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: icon_bem()
  }
};
/* harmony default export */ var icon = __webpack_exports__["a"] = (icon_createComponent(Icon));

/***/ }),

/***/ "ae9e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b1d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLUE; });
/* unused harmony export GREEN */
/* unused harmony export WHITE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GRAY; });
/* unused harmony export GRAY_DARK */
/* unused harmony export BORDER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BORDER_TOP; });
/* unused harmony export BORDER_LEFT */
/* unused harmony export BORDER_RIGHT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BORDER_BOTTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BORDER_SURROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BORDER_TOP_BOTTOM; });
// color
var RED = '#f44';
var BLUE = '#1989fa';
var GREEN = '#07c160';
var WHITE = '#fff';
var GRAY = '#c9c9c9';
var GRAY_DARK = '#969799'; // border

var BORDER = 'van-hairline';
var BORDER_TOP = BORDER + "--top";
var BORDER_LEFT = BORDER + "--left";
var BORDER_RIGHT = BORDER + "--right";
var BORDER_BOTTOM = BORDER + "--bottom";
var BORDER_SURROUND = BORDER + "--surround";
var BORDER_TOP_BOTTOM = BORDER + "--top-bottom";

/***/ }),

/***/ "b258":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b313":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),

/***/ "b775":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vant_es_toast_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7e5");
/* harmony import */ var vant_es_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d399");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cebe");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4360");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("f121");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_4__);




 // create an axios instance

var service = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
  baseURL: _config__WEBPACK_IMPORTED_MODULE_4__["api"].base_api,
  // url = base url + request url
  withCredentials: true,
  // send cookies when cross-domain requests
  timeout: 5000 // request timeout

}); // request拦截器 request interceptor

service.interceptors.request.use(function (config) {
  // 不传递默认开启loading
  if (!config.hideloading) {
    // loading
    vant_es_toast__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].loading({
      forbidClick: true
    });
  }

  if (_store__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getters.token) {
    config.headers['token'] = _store__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getters.token;
  }

  return config;
}, function (error) {
  // do something with request error
  console.log(error); // for debug

  return Promise.reject(error);
}); // respone拦截器

service.interceptors.response.use(function (response) {
  vant_es_toast__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].clear();

  var res = response.data; // 这里注意修改成你访问的服务端接口规则

  if (res.status && res.status !== 200) {
    Object(vant_es_toast__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
      message: res.info
    }); // 登录超时,重新登录


    if (res.status === 401) {
      _store__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].dispatch('user/fedLogOut').then(function () {
        location.reload();
      });
    }

    return Promise.reject(res || 'error');
  } else {
    return Promise.resolve(res);
  }
}, function (error) {
  vant_es_toast__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].clear();

  console.log('err' + error); // for debug

  return Promise.reject(error);
});
/* harmony default export */ __webpack_exports__["a"] = (service);

/***/ }),

/***/ "b807":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ba31":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mount; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c31d");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8bbf");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


var inheritKey = ['ref', 'style', 'class', 'attrs', 'nativeOn', 'directives', 'staticClass', 'staticStyle'];
var mapInheritKey = {
  nativeOn: 'on'
}; // inherit partial context, map nativeOn to on

function inherit(context, inheritListeners) {
  var result = inheritKey.reduce(function (obj, key) {
    if (context.data[key]) {
      obj[mapInheritKey[key] || key] = context.data[key];
    }

    return obj;
  }, {});

  if (inheritListeners) {
    result.on = result.on || {};

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(result.on, context.data.on);
  }

  return result;
} // emit event

function emit(context, eventName) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var listeners = context.listeners[eventName];

  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach(function (listener) {
        listener.apply(void 0, args);
      });
    } else {
      listeners.apply(void 0, args);
    }
  }
} // mount functional component

function mount(Component, data) {
  var instance = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
    el: document.createElement('div'),
    props: Component.props,
    render: function render(h) {
      return h(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        props: this.$props
      }, data));
    }
  });
  document.body.appendChild(instance.$el);
  return instance;
}

/***/ }),

/***/ "bcd3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bff0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c194":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68ef");
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("09fe");
/* harmony import */ var _image_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_image_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "c24f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginByCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bind; });
/* unused harmony export SetUser */
/* unused harmony export getUserInfo */
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4328");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b775");


/**
 * 登录接口请求token与userinfo
 * @param params {code: code}
 */

function loginByCode(query) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/weixinaccesstoken/baseauth',
    method: 'get',
    params: query
  });
}
function Bind(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/bindinguser/bind',
    method: 'post',
    data: data
  });
}
function SetUser(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/bindinguser/getuser',
    method: 'post',
    data: data
  });
}
/**
 * 获取登录用户信息
 * @param params
 */

function getUserInfo(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    url: '/user/get_user',
    method: 'post',
    data: qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(params)
  });
}
/**
 * 默认请求url import { api } from '@/config' 的 base_api + /wechat/auth2
 * 请求common_api打头的参照如下示例：
 * import { api } from '@/config'
 * export function loginByCode(params) {
 *  return request({
 *     url:api.common_api+ '/wechat/auth2',
 *     method: 'post',
 *     data: qs.stringify(params)
 *  })
 * }
 */

/***/ }),

/***/ "c31d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "c8ba":
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

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "d233":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

var encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};


/***/ }),

/***/ "d282":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/bem.js
/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */
var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function bem_prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }

  if (Array.isArray(mods)) {
    return mods.map(function (item) {
      return bem_prefix(name, item);
    });
  }

  var ret = {};

  if (mods) {
    Object.keys(mods).forEach(function (key) {
      ret[name + MODS + key] = mods[key];
    });
  }

  return ret;
}

function createBEM(name) {
  return function (el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }

    el = join(name, el, ELEMENT);
    return mods ? [el, bem_prefix(el, mods)] : el;
  };
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/format/string.js
var string = __webpack_require__("68ed");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/vant/es/mixins/slots.js
/**
 * Use scopedSlots in Vue 2.6+
 * downgrade to slots in lower version
 */

var SlotsMixin = external_Vue_default.a.extend({
  methods: {
    slots: function slots(name, props) {
      if (name === void 0) {
        name = 'default';
      }

      var $slots = this.$slots,
          $scopedSlots = this.$scopedSlots;
      var scopedSlot = $scopedSlots[name];

      if (scopedSlot) {
        return scopedSlot(props);
      }

      return $slots[name];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/component.js
/**
 * Create a basic component with common options
 */





function install(Vue) {
  var name = this.name;
  Vue.component(name, this);
  Vue.component(Object(string["a" /* camelize */])("-" + name), this);
} // unify slots & scopedSlots


function unifySlots(context) {
  // use data.scopedSlots in lower Vue version
  var scopedSlots = context.scopedSlots || context.data.scopedSlots || {};
  var slots = context.slots();
  Object.keys(slots).forEach(function (key) {
    if (!scopedSlots[key]) {
      scopedSlots[key] = function () {
        return slots[key];
      };
    }
  });
  return scopedSlots;
} // should be removed after Vue 3

function transformFunctionComponent(pure) {
  return {
    functional: true,
    props: pure.props,
    model: pure.model,
    render: function render(h, context) {
      return pure(h, context.props, unifySlots(context), context);
    }
  };
}

function createComponent(name) {
  return function (sfc) {
    if (typeof sfc === 'function') {
      sfc = transformFunctionComponent(sfc);
    }

    if (!sfc.functional) {
      sfc.mixins = sfc.mixins || [];
      sfc.mixins.push(SlotsMixin);
    }

    sfc.name = name;
    sfc.install = install;
    return sfc;
  };
}
// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/deep-assign.js
var deep_assign = __webpack_require__("1128");

// CONCATENATED MODULE: ./node_modules/vant/es/locale/lang/zh-CN.js
/* harmony default export */ var zh_CN = ({
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  complete: '完成',
  loading: '加载中...',
  telEmpty: '请填写电话',
  nameEmpty: '请填写姓名',
  confirmDelete: '确定要删除么',
  telInvalid: '请填写正确的电话',
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    valid: '有效期',
    unlimited: '无使用门槛',
    discount: function discount(_discount) {
      return _discount + "\u6298";
    },
    condition: function condition(_condition) {
      return "\u6EE1" + _condition + "\u5143\u53EF\u7528";
    }
  },
  vanCouponCell: {
    title: '优惠券',
    tips: '使用优惠',
    count: function count(_count) {
      return _count + "\u5F20\u53EF\u7528";
    }
  },
  vanCouponList: {
    empty: '暂无优惠券',
    exchange: '兑换',
    close: '不使用优惠',
    enable: '可使用优惠券',
    disabled: '不可使用优惠券',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码格式不正确',
    defaultAddress: '设为默认收货地址',
    telPlaceholder: '收货人手机号',
    namePlaceholder: '收货人姓名',
    areaPlaceholder: '选择省 / 市 / 区'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌、楼层房间号等信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/locale/index.js



var proto = external_Vue_default.a.prototype;
var defineReactive = external_Vue_default.a.util.defineReactive;
defineReactive(proto, '$vantLang', 'zh-CN');
defineReactive(proto, '$vantMessages', {
  'zh-CN': zh_CN
});
/* harmony default export */ var locale = ({
  messages: function messages() {
    return proto.$vantMessages[proto.$vantLang];
  },
  use: function use(lang, messages) {
    var _this$add;

    proto.$vantLang = lang;
    this.add((_this$add = {}, _this$add[lang] = messages, _this$add));
  },
  add: function add(messages) {
    if (messages === void 0) {
      messages = {};
    }

    Object(deep_assign["a" /* deepAssign */])(proto.$vantMessages, messages);
  }
});
// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/i18n.js



function createI18N(name) {
  var prefix = Object(string["a" /* camelize */])(name) + '.';
  return function (path) {
    var message = Object(utils["a" /* get */])(locale.messages(), prefix + path) || Object(utils["a" /* get */])(locale.messages(), path);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return typeof message === 'function' ? message.apply(void 0, args) : message;
  };
}
// CONCATENATED MODULE: ./node_modules/vant/es/utils/create/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createNamespace; });



function createNamespace(name) {
  name = 'van-' + name;
  return [createComponent(name), createBEM(name), createI18N(name)];
}

/***/ }),

/***/ "d399":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("c31d");

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// EXTERNAL MODULE: ./node_modules/vant/es/utils/create/index.js + 6 modules
var create = __webpack_require__("d282");

// EXTERNAL MODULE: ./node_modules/vant/es/utils/index.js
var utils = __webpack_require__("a142");

// EXTERNAL MODULE: ./node_modules/vant/es/mixins/popup/index.js + 4 modules
var popup = __webpack_require__("6605");

// EXTERNAL MODULE: ./node_modules/vant/es/icon/index.js + 1 modules
var es_icon = __webpack_require__("ad06");

// EXTERNAL MODULE: ./node_modules/vant/es/loading/index.js
var loading = __webpack_require__("543e");

// CONCATENATED MODULE: ./node_modules/vant/es/toast/Toast.js





var _createNamespace = Object(create["a" /* createNamespace */])('toast'),
    createComponent = _createNamespace[0],
    bem = _createNamespace[1];

/* harmony default export */ var Toast = (createComponent({
  mixins: [popup["a" /* PopupMixin */]],
  props: {
    icon: String,
    className: null,
    iconPrefix: String,
    loadingType: String,
    forbidClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    lockScroll: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      clickable: false
    };
  },
  mounted: function mounted() {
    this.toggleClickable();
  },
  destroyed: function destroyed() {
    this.toggleClickable();
  },
  watch: {
    value: 'toggleClickable',
    forbidClick: 'toggleClickable'
  },
  methods: {
    toggleClickable: function toggleClickable() {
      var clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        var action = clickable ? 'add' : 'remove';
        document.body.classList[action]('van-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter: function onAfterEnter() {
      this.$emit('opened');

      if (this.onOpened) {
        this.onOpened();
      }
    },
    onAfterLeave: function onAfterLeave() {
      this.$emit('closed');
    }
  },
  render: function render() {
    var h = arguments[0];
    var type = this.type,
        icon = this.icon,
        message = this.message,
        iconPrefix = this.iconPrefix,
        loadingType = this.loadingType;
    var hasIcon = icon || type === 'success' || type === 'fail';

    function ToastIcon() {
      if (hasIcon) {
        return h(es_icon["a" /* default */], {
          "class": bem('icon'),
          "attrs": {
            "classPrefix": iconPrefix,
            "name": icon || type
          }
        });
      }

      if (type === 'loading') {
        return h(loading["a" /* default */], {
          "class": bem('loading'),
          "attrs": {
            "color": "white",
            "type": loadingType
          }
        });
      }
    }

    function Message() {
      if (!Object(utils["b" /* isDef */])(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return h("div", {
          "class": bem('text'),
          "domProps": {
            "innerHTML": message
          }
        });
      }

      return h("div", {
        "class": bem('text')
      }, [message]);
    }

    return h("transition", {
      "attrs": {
        "name": "van-fade"
      },
      "on": {
        "afterEnter": this.onAfterEnter,
        "afterLeave": this.onAfterLeave
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": [bem([this.position, {
        text: !hasIcon && type !== 'loading'
      }]), this.className]
    }, [ToastIcon(), Message()])]);
  }
}));
// CONCATENATED MODULE: ./node_modules/vant/es/toast/index.js




var defaultOptions = {
  icon: '',
  type: 'text',
  mask: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body',
  overlayStyle: null
};
var queue = [];
var multiple = false;

var currentOptions = Object(esm_extends["a" /* default */])({}, defaultOptions);

function parseOptions(message) {
  if (Object(utils["c" /* isObj */])(message)) {
    return message;
  }

  return {
    message: message
  };
}

function createInstance() {
  /* istanbul ignore if */
  if (utils["d" /* isServer */]) {
    return {};
  }

  if (!queue.length || multiple) {
    var toast = new (external_Vue_default.a.extend(Toast))({
      el: document.createElement('div')
    });
    queue.push(toast);
  }

  return queue[queue.length - 1];
} // transform toast options to popup props


function transformOptions(options) {
  options = Object(esm_extends["a" /* default */])({}, options);
  options.overlay = options.mask;
  delete options.mask;
  delete options.duration;
  return options;
}

function toast_Toast(options) {
  if (options === void 0) {
    options = {};
  }

  var toast = createInstance(); // should add z-index if previous toast has not disappeared

  if (toast.value) {
    toast.updateZIndex();
  }

  options = Object(esm_extends["a" /* default */])({}, currentOptions, {}, parseOptions(options), {
    clear: function clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !utils["d" /* isServer */]) {
        toast.$on('closed', function () {
          clearTimeout(toast.timer);
          queue = queue.filter(function (item) {
            return item !== toast;
          });
          var parent = toast.$el.parentNode;

          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    }
  });

  Object(esm_extends["a" /* default */])(toast, transformOptions(options));

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

var toast_createMethod = function createMethod(type) {
  return function (options) {
    return toast_Toast(Object(esm_extends["a" /* default */])({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  toast_Toast[method] = toast_createMethod(method);
});

toast_Toast.clear = function (all) {
  if (queue.length) {
    if (all) {
      queue.forEach(function (toast) {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

toast_Toast.setDefaultOptions = function (options) {
  Object(esm_extends["a" /* default */])(currentOptions, options);
};

toast_Toast.resetDefaultOptions = function () {
  currentOptions = Object(esm_extends["a" /* default */])({}, defaultOptions);
};

toast_Toast.allowMultiple = function (value) {
  if (value === void 0) {
    value = true;
  }

  multiple = value;
};

toast_Toast.install = function () {
  external_Vue_default.a.use(Toast);
};

external_Vue_default.a.prototype.$toast = toast_Toast;
/* harmony default export */ var es_toast = __webpack_exports__["a"] = (toast_Toast);

/***/ }),

/***/ "dde9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dfaf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cellProps; });
var cellProps = {
  icon: String,
  size: String,
  center: Boolean,
  isLink: Boolean,
  required: Boolean,
  clickable: Boolean,
  titleStyle: null,
  titleClass: null,
  valueClass: null,
  labelClass: null,
  title: [Number, String],
  value: [Number, String],
  label: [Number, String],
  arrowDirection: String,
  border: {
    type: Boolean,
    default: true
  }
};

/***/ }),

/***/ "e2c8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e7e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("68ef");
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_base_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4d75");
/* harmony import */ var _popup_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_popup_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _image_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("09fe");
/* harmony import */ var _image_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_image_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("b258");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "ea82":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ea8e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addUnit; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a142");
/* harmony import */ var _validate_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("90c6");


function addUnit(value) {
  if (!Object(___WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "b"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(_validate_number__WEBPACK_IMPORTED_MODULE_1__[/* isNumber */ "b"])(value) ? value + "px" : value;
}

/***/ }),

/***/ "f032":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f121":
/***/ (function(module, exports, __webpack_require__) {

// 根据环境引入不同配置 process.env.NODE_ENV
var config = __webpack_require__("f1e0");

module.exports = config;

/***/ }),

/***/ "f1e0":
/***/ (function(module, exports) {

// 正式
module.exports = {
  title: '当阳殡葬管理所',
  baseUrl: 'http://byg.dybzgls.com',
  api: {
    base_api: 'http://byg.dybzgls.com/wx/v1/',
    common_api: 'https://www.xxx.com/common'
  }
};

/***/ }),

/***/ "f319":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb6c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fe3c":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return FastClick;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ })

/******/ });