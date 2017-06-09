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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "height": 100,
    "padding": 10,
    "flex": 1
  },
  "daily-list": {
    "marginLeft": 10,
    "marginRight": 10,
    "alignItems": "center"
  },
  "daily-cell": {
    "padding": 10,
    "flex": 1
  },
  "daily-wrapper": {
    "flexDirection": "row",
    "flex": 1
  },
  "text-container": {
    "flex": 1,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "text": {
    "fontSize": 24,
    "color": "#ffffff",
    "marginLeft": 10
  },
  "icon": {
    "width": 36,
    "height": 36,
    "marginLeft": 10,
    "marginRight": 10
  }
}

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["daily-list"],
    attrs: {
      "scrollDirection": "vertical"
    }
  }, _vm._l((_vm.dailys), function(item, index) {
    return _c('cell', {
      staticClass: ["daily-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["daily-wrapper"]
    }, [_c('div', {
      staticClass: ["text-container"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(_vm.getMonthAndDayByDate(item.date)))]), _c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(_vm.getWeekdayByDate(item.date)))])]), _c('div', {
      staticClass: ["text-container"]
    }, [_c('text', {
      staticClass: ["common-text"]
    }, [_vm._v(_vm._s(item.cond.txt_d))]), _c('image', {
      staticClass: ["icon"],
      attrs: {
        "src": "https://cdn.heweather.com/cond_icon/306.png"
      }
    })]), _c('div', {
      staticClass: ["text-container"]
    }, [_c('text', {
      staticClass: ["common-text"]
    }, [_vm._v(_vm._s(item.tmp.max) + "~" + _vm._s(item.tmp.min) + "°C")])])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(0)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/nickming/Desktop/weex/WeexWeather/src/components/daily.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a6bd27ba"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ })
/******/ ]);