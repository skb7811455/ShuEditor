webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Menu_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(3);






function Editor() {}
Editor.prototype = {
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_1__Command_js__["a" /* default */](this);
	},
	_initMenus: function () {
		this.menu = new __WEBPACK_IMPORTED_MODULE_2__Menu_js__["default"](this);
		this.menu.init();
	},
	_initText: function () {
		this.txt = new Text(this);
		this.txt.init();
	},
	_initDom: function () {},
	init: function () {
		this._initCommand();
		//this._initMenus();
		//this.initTetx();
	}
};

var Editor = new Editor();
//Editor.init();

//$("editor").html("p");

console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("editor").parent);

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Command(editor) {
    this.editor = editor;
}

Command.prototype = {
    do: function (name, value) {
        const editor = this.editor;
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
/* harmony default export */ __webpack_exports__["a"] = (Command);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {

		function Dom(id) {
			this.ele = document.getElementById(id);
			console.log(this);
			return this;
		}
		Dom.prototype.html = function (val) {
			this.ele.innerHTML = val;
			return this;
		};
		Dom.prototype.isDomList = function (selector) {
			if (!selector) {
				return fasle;
			}
			if (selector instanceof NodeList) {
				return true;
			}
			return false;
		};
		Dom.prototype.querySelectorAll = function (selector) {
			const result = document.querySelectorAll(selector);
			if (isDomList(result)) {
				return result;
			}
		};
		Dom.prototype.attr = function (key, val) {
			this.ele.setAttibute(key, val);
			return this;
		};
		Dom.prototype.css = function (key, val) {
			this.ele.style[key] = val;
			return this;
		};
		return new Dom(id);
	}
	window.$ = $;
})(window);

/* harmony default export */ __webpack_exports__["a"] = ($);

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\Menu.js: Unexpected token (4:14)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mMenu\u001b[39m(){\n \u001b[90m 3 | \u001b[39m\t\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\tinit\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\n \u001b[90m   | \u001b[39m\t             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\t\t\n \u001b[90m 6 | \u001b[39m\t}\n \u001b[90m 7 | \u001b[39m}\u001b[0m\n");

/***/ })
])