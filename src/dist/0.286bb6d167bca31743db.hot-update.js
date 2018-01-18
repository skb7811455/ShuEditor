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
		this._clearHandle();
		this._clear();
	},
	_clear: function () {
		this.html("<p><br></p>");
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
		const $textElem = this.$textElem;
		const that = this;
		$textElem.on("keydown", function () {
			if (!$textElem.ele.firstChild) {
				that._clear();
			}
		});
	}

};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ })

})