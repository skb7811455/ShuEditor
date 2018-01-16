webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Event_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Selection_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TextArea_js__ = __webpack_require__(6);








function Editor(menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
}
Editor.prototype = {
	_initEventUtil: function () {
		this.eve = new __WEBPACK_IMPORTED_MODULE_2__Event_js__["a" /* default */](); //编辑器的事件对象
	},
	_initSelection: function () {
		this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_4__Selection_js__["a" /* default */]();
	},
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_1__Command_js__["a" /* default */](this); //编辑器的命令对象
	},
	_initMenus: function () {
		this.menu = new __WEBPACK_IMPORTED_MODULE_3__Menu_js__["a" /* default */](this); //编辑器的菜单对象
		this.menu.init();
	},
	_initText: function () {
		this.txt = new Text(this); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {
		this.$menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])(this.menuSelector);
		this.$menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])(textSelector);
	},
	init: function () {
		this._initCommand();
		this._initMenus();
		this.initTetx();
	}
};

var Editor = new Editor();
//Editor.init();

//$("editor").html("p");


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
function EventUtil() {}
EventUtil.prototype = {
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
/* harmony default export */ __webpack_exports__["a"] = (EventUtil);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

function Menu(editor) {
	this.editor = editor;
}

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Selection(editor) {
	this.editor = editor;
}

/* harmony default export */ __webpack_exports__["a"] = (Selection);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TextArea() {}

/* unused harmony default export */ var _unused_webpack_default_export = (TextArea);

/***/ })
])