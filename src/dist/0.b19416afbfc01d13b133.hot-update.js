webpackHotUpdate(0,{

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
		this.bindEvent();
	},
	bindEvent: function () {
		console.log(this.editor);
		this.editor.eve.addHandler("click", this.$elem, onClick);
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})