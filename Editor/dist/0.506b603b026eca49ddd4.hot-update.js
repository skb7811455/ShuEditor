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
		this.Bold = new __WEBPACK_IMPORTED_MODULE_0__Bold_js__["a" /* default */](this.editor);
		this.Bold.init();
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ })

})