webpackHotUpdate(0,{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TextArea(editor) {
	this.editor = editor;
	this.$textElem = $('#s-e-container');
}
TextArea.prototype = {
	init: function () {
		this._bindEvent();
	},
	clear: function () {
		this.html("</p><br></p>");
	},
	html: function (val) {
		const editor = this.editor;
	},
	_clearHandle: function () {
		const editor = this.editor;
		const $textElem = this.$textElem.ele;
		$textElem.on("keydown", function () {});
	},
	_bindEvent: function () {

		//this._enterKeyHandle();

	}

};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ })

})