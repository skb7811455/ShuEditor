webpackHotUpdate(0,{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TextArea(editor) {
	this.editor = editor;
	this.$textElem = $(".s-e-container");
}
TextArea.prototype = {
	init: function () {
		this._bindEvent();
		this._clear();
	},
	_clear: function () {
		this.html("<p id='123'><br></p>");
	},
	html: function (val) {
		const editor = this.editor;
		const $textElem = this.$textElem;
		if (val == null) {
			return $textElem.html();
		} else {
			$textElem.html(val);
		}
	},

	_clearHandle: function () {
		const editor = this.editor;
		const $textElem = this.$textElem.ele;
		$textElem.on("keydown", function () {});
	}

};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ })

})