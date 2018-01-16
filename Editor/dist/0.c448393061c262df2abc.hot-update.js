webpackHotUpdate(0,{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Bold(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("bold").ele;
	this._book = 123;
	this.year = 2;
}
Bold.prototype = {

	handle: function () {
		console.log(editor);
		editor.cmd.do("bold");
		editor.cmd.do('italic', null);
	},

	init: function () {
		this.bindEvent();
		Object.defineProperty(this, "book", {
			get: function () {
				return this._book;
			},
			set: function (newValue) {

				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("bold").ele.firstChild.nodeValue = newValue;
			}
		});
		this.book = 111;
		this.book = 123;
	},
	bindEvent: function () {
		const editor = this.editor;
		console.log(editor);
		editor.eve.addHandler(this.$elem, "click", function () {
			console.log(editor);

			document.execCommand("italic", false, null);
			editor.cmd.do("bold", null);
			editor.cmd.do("bold");
			editor.cmd.do('Italic', null);
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})