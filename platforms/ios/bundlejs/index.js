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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "height": 150,
    "padding": 10
  },
  "hour-list": {
    "marginLeft": 10,
    "marginRight": 10,
    "flexDirection": "row",
    "alignItems": "center"
  },
  "hour-cell": {
    "width": 150,
    "padding": 10
  },
  "hour-wrapper": {
    "alignItems": "center",
    "justifyContent": "center"
  },
  "text": {
    "fontSize": 24,
    "color": "#ffffff"
  },
  "icon": {
    "width": 24,
    "height": 24
  }
}

/***/ }),
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
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('scroller', {
    staticClass: ["hour-list"],
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, _vm._l((_vm.hours), function(item, index) {
    return _c('cell', {
      staticClass: ["hour-cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["hour-wrapper"]
    }, [_c('text', {
      staticClass: ["common-text"]
    }, [_vm._v(_vm._s(item.cond.txt))]), _c('image', {
      staticClass: ["icon"],
      attrs: {
        "src": _vm.convertCodeToUrl(item.cond.code)
      }
    }), _c('text', {
      staticClass: ["common-text"]
    }, [_vm._v(_vm._s(item.tmp) + "°C")])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hourly_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_hourly_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_hourly_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_daily_vue__ = __webpack_require__(9);
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
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "bg-image": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "width": 750,
    "height": 1250,
    "filter": "blur(10px)",
    "flex": 1
  },
  "head-nav": {
    "marginTop": 20,
    "padding": 10,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": 100
  },
  "icon": {
    "height": 36,
    "width": 36
  },
  "head-text": {
    "fontSize": 36,
    "color": "#ffffff"
  },
  "head-detail": {
    "height": 200,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "tmp": {
    "marginTop": 20,
    "fontSize": 64,
    "color": "#ffffff"
  },
  "cond": {
    "marginTop": 50,
    "fontSize": 24,
    "color": "#ffffff"
  },
  "head-bottom": {
    "padding": 10,
    "height": 50,
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "common-text": {
    "fontSize": 24,
    "color": "#ffffff"
  },
  "daily-wrapper": {
    "marginTop": 20
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"],
    on: {
      "click": _vm.update
    }
  }, [_c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('image', {
    staticClass: ["bg-image"],
    attrs: {
      "resize": "cover",
      "src": _vm.bgUrl
    }
  }), _c('div', {
    staticClass: ["head-nav"]
  }, [_c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.menuUrl
    }
  }), _c('text', {
    staticClass: ["head-text"]
  }, [_vm._v(_vm._s(_vm.currentWeatherData.basic.city))]), _c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.shareUrl
    }
  })]), _c('div', {
    staticClass: ["head-detail"]
  }, [_c('text', {
    staticClass: ["tmp"]
  }, [_vm._v(_vm._s(_vm.currentWeatherData.now.tmp) + "°C")]), _c('text', {
    staticClass: ["cond"]
  }, [_vm._v(_vm._s(_vm.currentWeatherData.now.cond.txt))])]), _c('div', {
    staticClass: ["head-bottom"]
  }, [_c('text', {
    staticClass: ["common-text"]
  }, [_vm._v("空气质量:" + _vm._s(_vm.currentWeatherData.aqi.city.qlty))]), _c('text', {
    staticClass: ["common-text"]
  }, [_vm._v(_vm._s(_vm.currentWeatherData.now.wind.dir) + " " + _vm._s(_vm.currentWeatherData.now.wind.spd) + "级")])]), _c('div', {
    staticClass: ["hourly-wrapper"]
  }, [_c('hourly', {
    attrs: {
      "hours": _vm.hours
    }
  })], 1), _c('div', {
    staticClass: ["daily-wrapper"]
  }, [_c('daily', {
    attrs: {
      "dailys": _vm.dailys
    }
  })], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
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


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(2)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(4)
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
__vue_options__.__file = "/Users/nickming/Desktop/weex/WeexWeather/src/components/hourly.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4396ca52"
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


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "/Users/nickming/Desktop/weex/WeexWeather/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6f8dd8c2"
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