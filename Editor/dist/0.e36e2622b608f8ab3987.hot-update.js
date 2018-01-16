webpackHotUpdate(0,{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bold_js__ = __webpack_require__(7);

function Menu(editor) {
	this.editor = editor;
	this.menus = {};
}

Menu.prototype = {

	init: function () {
		this.Bold = new __WEBPACK_IMPORTED_MODULE_0__Bold_js__["a" /* default */]();
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(2);

function Bold(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("bold");
}
Bold.prototype = {

	onClick: function (e) {
		editor.cmd.do("bold");
	},
	init: function () {
		bindEvent();
	},
	bindEvent: function () {
		editor.eve.addHandler("click", this.$elem, onClick);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})