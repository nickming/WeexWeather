// { "framework": "Vue"} 

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(3)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(12)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(10),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/nickming/Desktop/weex/WeexWeather/src/components/daily.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] daily.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-363fe296", Component.options)
  } else {
    hotAPI.reload("data-v-363fe296", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(13)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(11),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/nickming/Desktop/weex/WeexWeather/src/components/hourly.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] hourly.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a46b6af6", Component.options)
  } else {
    hotAPI.reload("data-v-a46b6af6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        dailys: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            baseUrl: 'https://cdn.heweather.com/cond_icon/'
        };
    },
    methods: {
        convertCodeToUrl: function (code) {
            return this.baseUrl + code + '.png';
        },
        getWeekdayByDate: function (date) {
            let a = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
            let day = new Date(date).getDay();
            var today = this.getNowFormatDate();
            var tomorrow = this.getTomorrowFormatDate();
            if (today === date) return '今天';else if (date === tomorrow) return '明天';else return a[day];
        },
        getNowFormatDate: function () {
            var date = new Date();
            var seperator1 = "-";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        getTomorrowFormatDate: function () {
            var date = new Date();
            date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
            var seperator1 = "-";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },
        getMonthAndDayByDate: function (date) {
            return date.substring(8, date.length) + '日';
        },
        getHoursAndMinsByDate: function (date) {
            return date.substring(11, date.length);
        }
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        hours: {
            type: Object,
            required: true
        }
    },
    data: function () {
        return {
            baseUrl: ''
        };
    },
    methods: {
        convertCodeToUrl: function (code) {
            return 'https://cdn.heweather.com/cond_icon/' + code + '.png';
        }
    }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.wrapper {\n    height: 100px;\n    padding: 10px;\n    flex: 1;\n}\n.daily-list {\n    margin-left: 10px;\n    margin-right: 10px;\n    align-items: center;\n}\n.daily-cell {\n    padding: 10px;\n    flex: 1;\n}\n.daily-wrapper {\n    flex-direction: row;\n    flex: 1;\n}\n.text-container {\n    flex: 1;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n.text {\n    font-size: 24px;\n    color: #fff;\n    margin-left: 10px;\n}\n.icon {\n    width: 36px;\n    height: 36px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.wrapper {\n    height: 150px;\n    padding: 10px;\n}\n.hour-list {\n    margin-left: 10px;\n    margin-right: 10px;\n    flex-direction: row;\n    align-items: center;\n}\n.hour-cell {\n    width: 150px;\n    padding: 10px;\n}\n.hour-wrapper {\n    align-items: center;\n    justify-content: center;\n}\n.text {\n    font-size: 24px;\n    color: #fff;\n}\n.icon {\n    width: 24px;\n    height: 24px;\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('scroller', {
    staticClass: "daily-list",
    attrs: {
      "scroll-direction": "vertical"
    }
  }, _vm._l((_vm.dailys), function(item, index) {
    return _c('cell', {
      staticClass: "daily-cell"
    }, [_c('div', {
      staticClass: "daily-wrapper"
    }, [_c('div', {
      staticClass: "text-container"
    }, [_c('text', {
      staticClass: "text"
    }, [_vm._v(_vm._s(_vm.getMonthAndDayByDate(item.date)))]), _vm._v(" "), _c('text', {
      staticClass: "text"
    }, [_vm._v(_vm._s(_vm.getWeekdayByDate(item.date)))])]), _vm._v(" "), _c('div', {
      staticClass: "text-container"
    }, [_c('text', {
      staticClass: "common-text"
    }, [_vm._v(_vm._s(item.cond.txt_d))]), _vm._v(" "), _c('image', {
      staticClass: "icon",
      attrs: {
        "src": "https://cdn.heweather.com/cond_icon/306.png"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "text-container"
    }, [_c('text', {
      staticClass: "common-text"
    }, [_vm._v(_vm._s(item.tmp.max) + "~" + _vm._s(item.tmp.min) + "°C")])])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-363fe296", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('scroller', {
    staticClass: "hour-list",
    attrs: {
      "scroll-direction": "horizontal"
    }
  }, _vm._l((_vm.hours), function(item, index) {
    return _c('cell', {
      staticClass: "hour-cell"
    }, [_c('div', {
      staticClass: "hour-wrapper"
    }, [_c('text', {
      staticClass: "common-text"
    }, [_vm._v(_vm._s(item.cond.txt))]), _vm._v(" "), _c('image', {
      staticClass: "icon",
      attrs: {
        "src": _vm.convertCodeToUrl(item.cond.code)
      }
    }), _vm._v(" "), _c('text', {
      staticClass: "common-text"
    }, [_vm._v(_vm._s(item.tmp) + "°C")])])])
  }))], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a46b6af6", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("45f9275c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-363fe296!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./daily.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-363fe296!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./daily.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1f5e4472", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a46b6af6!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hourly.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-a46b6af6!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./hourly.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(20),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/nickming/Desktop/weex/WeexWeather/src/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ef34f66", Component.options)
  } else {
    hotAPI.reload("data-v-8ef34f66", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hourly_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hourly_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_hourly_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_daily_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_daily_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_daily_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream');


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    hourly: __WEBPACK_IMPORTED_MODULE_0__components_hourly_vue___default.a,
    daily: __WEBPACK_IMPORTED_MODULE_1__components_daily_vue___default.a
  },
  data: {
    menuUrl: 'https://github.com/nickming/WeexWeather/blob/master/icons/menu.png?raw=true',
    shareUrl: 'https://github.com/nickming/WeexWeather/blob/master/icons/SHARE.png?raw=true',
    bgUrl: 'https://bing.ioliu.cn/v1?w=720&h=1280',
    currentWeatherData: 'unknown',
    hours: [],
    dailys: [],
    loading: false
  },

  created: function () {
    this.getCurrentWeather('dongguan', response => {
      this.currentWeatherData = response.ok ? response.data.HeWeather5[0] : "network error!";
      this.hours = this.currentWeatherData.hourly_forecast;
      this.dailys = this.currentWeatherData.daily_forecast;
      this.loading = true;
    });
  },

  methods: {
    getCurrentWeather: function (city, callback) {
      return stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://free-api.heweather.com/v5/weather?key=19713447578c4afe8c12a351d46ea922&city=dongguan'
      }, callback);
    }
  }
});

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var App = __webpack_require__(14);
App.el = '#root';
new Vue(App);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.wrapper {\n}\n.bg-image {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 750px;\n  height: 1250px;\n  filter: blur(10px);\n  flex: 1;\n}\n.head-nav {\n  margin-top: 20px;\n  padding: 10px;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 100px;\n}\n.icon {\n  height: 36px;\n  width: 36px;\n}\n.head-text {\n  font-size: 36px;\n  color: #fff;\n}\n.head-detail {\n  height: 200px;\n  align-items: center;\n  justify-content: center;\n}\n.tmp {\n  margin-top: 20px;\n  font-size: 64px;\n  color: #fff;\n}\n.cond {\n  margin-top: 50px;\n  font-size: 24px;\n  color: #fff;\n}\n.head-bottom {\n  padding: 10px;\n  height: 50px;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.common-text {\n  font-size: 24px;\n  color: #fff;\n}\n.daily-wrapper {\n  margin-top: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper",
    on: {
      "click": _vm.update
    }
  }, [_c('scroller', {
    attrs: {
      "show-scrollbar": "false"
    }
  }, [_c('image', {
    staticClass: "bg-image",
    attrs: {
      "resize": "cover",
      "src": _vm.bgUrl
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "head-nav"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "src": _vm.menuUrl
    }
  }), _vm._v(" "), _c('text', {
    staticClass: "head-text"
  }, [_vm._v(_vm._s(_vm.currentWeatherData.basic.city))]), _vm._v(" "), _c('image', {
    staticClass: "icon",
    attrs: {
      "src": _vm.shareUrl
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "head-detail"
  }, [_c('text', {
    staticClass: "tmp"
  }, [_vm._v(_vm._s(_vm.currentWeatherData.now.tmp) + "°C")]), _vm._v(" "), _c('text', {
    staticClass: "cond"
  }, [_vm._v(_vm._s(_vm.currentWeatherData.now.cond.txt))])]), _vm._v(" "), _c('div', {
    staticClass: "head-bottom"
  }, [_c('text', {
    staticClass: "common-text"
  }, [_vm._v("空气质量:" + _vm._s(_vm.currentWeatherData.aqi.city.qlty))]), _vm._v(" "), _c('text', {
    staticClass: "common-text"
  }, [_vm._v(_vm._s(_vm.currentWeatherData.now.wind.dir) + " " + _vm._s(_vm.currentWeatherData.now.wind.spd) + "级")])]), _vm._v(" "), _c('div', {
    staticClass: "hourly-wrapper"
  }, [_c('hourly', {
    attrs: {
      "hours": _vm.hours
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "daily-wrapper"
  }, [_c('daily', {
    attrs: {
      "dailys": _vm.dailys
    }
  })], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ef34f66", module.exports)
  }
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("90321be0", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8ef34f66!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-8ef34f66!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })
/******/ ]);