webpackHotUpdate(0,{

/***/ 10:
false,

/***/ 11:
false,

/***/ 12:
false,

/***/ 13:
false,

/***/ 3:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\Menu.js: Unexpected token, expected , (40:13)\n\n\u001b[0m \u001b[90m 38 | \u001b[39m\t\t\u001b[36mfor\u001b[39m(\u001b[36mvar\u001b[39m menu \u001b[36min\u001b[39m menus){\n \u001b[90m 39 | \u001b[39m\t\t\t\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 40 | \u001b[39m\t\t\t(funcion(){\n \u001b[90m    | \u001b[39m\t\t\t          \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 41 | \u001b[39m\t\t\t\t\u001b[36mvar\u001b[39m that\u001b[33m=\u001b[39mmenu\u001b[33m;\u001b[39m\n \u001b[90m 42 | \u001b[39m\t\t\t\t\u001b[36mif\u001b[39m(menus[that]\u001b[33m.\u001b[39mtryActive){\n \u001b[90m 43 | \u001b[39m\t\t\t\t\u001b[36mvar\u001b[39m fn\u001b[33m=\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[0m\n");

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








function Editor(editorSelector, menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(editorSelector);
	this.$menuElem = null;
	this.$textElem = null;
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
	_initMenus: function (val) {
		this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["default"](this, val); //编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea: function (val) {
		this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this, val); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {

		const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu");
		const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true);

		this.$menuElem = $menuElem;
		this.$textElem = $textElem;

		this.$elem.ele.appendChild($menuElem.ele);
		this.$elem.ele.appendChild($textElem.ele);
	},
	init: function () {

		this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
		this._initEventUtil();
		this._initDom();
		this._initCommand();
		//console.log(this)
		this._initMenus(this.$menuElem);
		this._initTextArea(this.$textElem);
		//this._initSelection();
	}
};

var Editor = new Editor("#editor");
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),

/***/ 9:
false

})