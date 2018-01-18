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
throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\Bold.js: Unexpected token, expected , (28:1)\n\n\u001b[0m \u001b[90m 26 | \u001b[39m\t\t\u001b[36mconst\u001b[39m $elem\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$elem\u001b[33m;\u001b[39m\n \u001b[90m 27 | \u001b[39m\t}\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 28 | \u001b[39m\tbindEvent\u001b[33m:\u001b[39m\u001b[36mfunction\u001b[39m(){\n \u001b[90m    | \u001b[39m\t\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 29 | \u001b[39m\t\t\u001b[36mconst\u001b[39m editor\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39meditor\u001b[33m;\u001b[39m\n \u001b[90m 30 | \u001b[39m\t\t\u001b[36mconst\u001b[39m $elem\u001b[33m=\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39m$elem\u001b[33m;\u001b[39m\n \u001b[90m 31 | \u001b[39m\t\teditor\u001b[33m.\u001b[39meve\u001b[33m.\u001b[39maddHandler($elem\u001b[33m,\u001b[39m\u001b[32m\"click\"\u001b[39m\u001b[33m,\u001b[39m\u001b[36mfunction\u001b[39m(){\u001b[0m\n");

/***/ })

})