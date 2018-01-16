webpackHotUpdate(0,{

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bold_js__ = __webpack_require__(6);

function Menu(editor) {
	this.editor = editor;
	this.menus = {};
}

Menu.prototype = {

	init: function () {
		//console.log(editor)
		this.Bold = new __WEBPACK_IMPORTED_MODULE_0__Bold_js__["a" /* default */](this.editor);
		this.Bold.init();
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(1);

function Bold(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("bold").ele;
	this._book = 123;
}
Bold.prototype = {

	handle: function () {
		console.log(editor);
		editor.cmd.do("bold");
		editor.cmd.do('italic', null);
	},
	init: function () {
		this.bindEvent();
		Object.defineProperyty(this, "book", {
			get: function () {
				return this._book;
			},
			set: function () {
				console.log(123);
			}
		});
	},
	bindEvent: function () {
		const editor = this.editor;
		console.log(editor);
		editor.eve.addHandler(this.$elem, "click", function () {
			console.log(editor);
			editor.cmd.do("bold");
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})