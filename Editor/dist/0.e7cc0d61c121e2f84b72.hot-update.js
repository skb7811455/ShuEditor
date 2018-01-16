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

	handle: function (editor) {
		editor.cmd.do("bold");
	},
	init: function () {
		this.bindEvent();
	},
	bindEvent: function () {
		const editor = this.editor;
		editor.eve.addHandler(this.$elem, "click", this.handle);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})