webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(2);

function Bold(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("bold").ele;
}
Bold.prototype = {

	handle: function () {
		console.log(editor);
		editor.cmd.do("bold");
		editor.cmd.do('italic', null);
	},
	init: function () {
		this.bindEvent();
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