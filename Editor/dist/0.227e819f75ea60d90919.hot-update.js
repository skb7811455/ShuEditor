webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Command(editor) {
    this.editor = editor;
}

Command.prototype = {
    do: function (name, value) {
        const editor = thi.editor;
        this._execCommand(name, value);
    },
    _execCommand: function (name, value) {
        document.execCommand(name, false, value);
    },

    // 封装 document.queryCommandValue
    queryCommandValue: function (name) {
        return document.queryCommandValue(name);
    },

    // 封装 document.queryCommandState
    queryCommandState: function (name) {
        return document.queryCommandState(name);
    },

    // 封装 document.queryCommandSupported
    queryCommandSupported: function (name) {
        return document.queryCommandSupported(name);
    }

};
/* unused harmony default export */ var _unused_webpack_default_export = (Command);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {
		function Dom(id) {
			this.ele = document.getElementById(id);
			console.log(this);
			return this;
		}
		$.prototype.html = function (val) {
			this.ele.innerHTML = val;
			return this;
		};
		$.prototype.isDomList = function (selector) {
			if (!selector) {
				return fasle;
			}
			if (selector instanceof NodeList) {
				return true;
			}
			return false;
		};
		$.prototype.querySelectorAll = function (selector) {
			const result = document.querySelectorAll(selector);
			if (isDomList(result)) {
				return result;
			}
		};
		$.prototype.attr = function (key, val) {
			this.ele.setAttibute(key, val);
			return this;
		};
		$.prototype.css = function (key, val) {
			this.ele.style[key] = val;
			return this;
		};
		return new Dom(id);
	}
	window.$ = $;
})(window);

/* harmony default export */ __webpack_exports__["a"] = ($);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (event.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};
/* unused harmony default export */ var _unused_webpack_default_export = (EventUtil);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Command_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Event_js__ = __webpack_require__(2);




window.$ = __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */];

function Editor() {
	console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("editor"));
}

var Editor = Editor();

//$("editor").html("p");
console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("editor").css("background", "red"));

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ })
])