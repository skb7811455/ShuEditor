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
		this.Bold = new __WEBPACK_IMPORTED_MODULE_0__Bold_js__["default"](this.editor);
		this.Bold.init();
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\Bold.js: Unterminated string constant (6:2)\n\n\u001b[0m \u001b[90m 4 | \u001b[39m\t\u001b[90m//this.$elem=$(\"bold\");\u001b[39m\n \u001b[90m 5 | \u001b[39m\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$elem\u001b[33m=\u001b[39m$(\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 6 | \u001b[39m\t\t\u001b[32m\"<div class='w-e-menu'>\u001b[39m\n \u001b[90m   | \u001b[39m\t\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 7 | \u001b[39m\t\t\t\u001b[33mBold\u001b[39m\n \u001b[90m 8 | \u001b[39m\t\t\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mdiv\u001b[39m\u001b[33m>\u001b[39m\u001b[32m\"\u001b[39m\n \u001b[90m 9 | \u001b[39m\t)\u001b[0m\n");

/***/ })

})