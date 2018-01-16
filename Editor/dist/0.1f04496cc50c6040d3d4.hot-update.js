webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bold_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bold_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Bold_js__);

function Menu(editor) {
	this.editor = editor;
	this.menus = {};
}

Menu.prototype = {

	init: function () {
		//console.log(editor)
		this.Bold = new __WEBPACK_IMPORTED_MODULE_0__Bold_js___default.a(this.editor);
		this.Bold.init();
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__) {

"use strict";


/***/ })

})