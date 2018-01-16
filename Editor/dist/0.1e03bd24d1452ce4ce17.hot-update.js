webpackHotUpdate(0,{

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {

		function Dom(selector) {
			/*this.ele=document.getElementById(id);
   console.log(this)*/
			selector.replace("/\n/mg", "").trim();
			if (selector.indexOf('<') === 0) {
				this.ele = this.createElementByHTML(selector)[0];
			} else {
				this.ele = this.querySelector(selector);
			}
			return this;
		}
		Dom.prototype.createElementByHTML = function (html) {
			var div;
			div = document.createElement("div");
			div.innerHTML = html;
			return div.children;
		};
		Dom.prototype.addClass = function (className) {
			if (!className) {
				return this;
			}
			if (!this.ele.className) {
				this.ele.className = className;
			} else {
				var arr;
				arr = this.ele.className.split(/\s/);
				arr = arr.filter(function (item) {
					return item !== className;
				});
				arr.push(className);
				this.ele.className = arr.join(" ");
			}
		};
		Dom.prototype.removeClass = function (className) {
			if (!className) {
				return this;
			}
			if (this.ele.className) {
				var arr;
				arr = this.ele.className.split(/\s/);
				arr = arr.filter(function (item) {
					if (item == className) return false;else return true;
				});
				this.ele.className = arr.join(" ");
			}
		};
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
		Dom.prototype.querySelector = function (selector) {
			const result = document.querySelector(selector);
			if (result) {
				return result;
			}
		};
		Dom.prototype.attr = function (key, val) {
			this.ele.setAttribute(key, val);
			return this;
		};
		Dom.prototype.css = function (key, val) {
			this.ele.style[key] = val;
			return this;
		};
		Dom.prototype.on = function (type, handler) {
			const $ele = this.ele;
			if ($ele.addEventListener) {
				$ele.addEventListener(type, handler, false);
			} else if ($ele.attachEvent) {
				$ele.attachEvent("on" + type, handler);
			} else {
				$ele["on" + type] = handler;
			}
		};
		return new Dom(id);
	}
	window.$ = $;
})(window);

/* unused harmony default export */ var _unused_webpack_default_export = ($);

/***/ }),

/***/ 10:
false,

/***/ 11:
false,

/***/ 3:
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\Menu.js: Unterminated string constant (4:14)\n\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[36mfunction\u001b[39m \u001b[33mMenu\u001b[39m(editor){\n \u001b[90m 3 | \u001b[39m\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39meditor \u001b[33m=\u001b[39m editor\u001b[33m;\u001b[39m\t\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 4 | \u001b[39m\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$elem\u001b[33m=\u001b[39m$(\u001b[32m\"<div class='s-e-menu'>\u001b[39m\n \u001b[90m   | \u001b[39m\t             \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 5 | \u001b[39m\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33mul\u001b[39m \u001b[36mclass\u001b[39m\u001b[33m=\u001b[39m\u001b[32m's-e-menuList'\u001b[39m id\u001b[33m=\u001b[39m\u001b[32m's-e-menu'\u001b[39m\u001b[33m>\u001b[39m\t\t\t\t\t\n \u001b[90m 6 | \u001b[39m\t\t\t\t\t\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mul\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m 7 | \u001b[39m\t\t\t\t \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[32m\");\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 7:
false,

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Menu_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextArea_js__ = __webpack_require__(5);








function Editor(menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
}
Editor.prototype = {
	_initEventUtil: function () {

		this.eve = new __WEBPACK_IMPORTED_MODULE_3__Event_js__["a" /* default */](); //编辑器的事件对象
	},
	_initSelection: function () {
		this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_5__Selection_js__["a" /* default */]();
	},
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_2__Command_js__["a" /* default */](this); //编辑器的命令对象
	},
	_initMenus: function () {
		this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["default"](this); //编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea: function () {
		this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {
		//this.$menu=$(this.menuSelector);
		//this.$menu=$(this.textSelector);
		//this.$textElem=$(this.textSelector);
	},
	init: function () {
		this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
		this._initEventUtil();
		this._initCommand();
		this._initMenus();
		this._initTextArea();
		//this._initSelection();
	}
};

var Editor = new Editor();
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ 9:
false

})