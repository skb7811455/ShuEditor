webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\Menu.js: Unexpected token, expected , (27:1)\n\n\u001b[0m \u001b[90m 25 | \u001b[39m\u001b[90m\t\tthis.Bold.init();\t*/\u001b[39m\t\n \u001b[90m 26 | \u001b[39m\t}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 27 | \u001b[39m\t_addToMenu\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\n \u001b[90m    | \u001b[39m\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 28 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmenus\u001b[33m.\u001b[39mforEach(\u001b[36mfunction\u001b[39m(item){\n \u001b[90m 29 | \u001b[39m\t\t\t\u001b[36mconst\u001b[39m $item\u001b[33m=\u001b[39mitem\u001b[33m.\u001b[39mele\u001b[33m;\u001b[39m\n \u001b[90m 30 | \u001b[39m\t\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$elem\u001b[33m.\u001b[39mele\u001b[33m.\u001b[39mappendChild($item)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Menu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Menu_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TextArea_js__ = __webpack_require__(5);








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
		this.menu = new __WEBPACK_IMPORTED_MODULE_3__Menu_js__["default"](this); //编辑器的菜单对象
		this.menu.init();
	},
	_initText: function () {
		this.txt = new Text(this); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {
		this.$menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])(this.menuSelector);
		this.$menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])(this.textSelector);
	},
	init: function () {
		this._initEventUtil();
		this._initCommand();
		this._initMenus();
		//this._initTetx();
		//this._initSelection();
	}
};

var Editor = new Editor();
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ 8:
false

})