webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(3);






function Editor() {}
Editor.prototype = {
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_1__Command_js__["a" /* default */](this);
	},
	_initMenus: function () {
		this.menu = new __WEBPACK_IMPORTED_MODULE_2__Menu_js__["a" /* default */](this);
		this.menu.init();
	},
	_initText: function () {
		this.txt = new Text(this);
		this.txt.init();
	},
	_initDom: function () {},
	init: function () {
		this._initCommand();
		this._initMenus();
		//this.initTetx();
	}
};

var Editor = new Editor();
//Editor.init();

//$("editor").html("p");

console.log(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("editor"));

/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ })
])