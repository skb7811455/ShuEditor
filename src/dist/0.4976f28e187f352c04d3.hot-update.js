webpackHotUpdate(0,{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Selection(editor) {
	this.editor = editor;
	this._currentRange = null;
}

Selection.prototype = {

	getRange: function () {
		return this._currentRange;
	},
	saveRange: function (range) {
		if (range) {
			this._currentRange = range;
			return;
		}

		const selection = window.getSelection();
		if (selection.rangeCount === 0) {
			return;
		}
		const _range = selection.getRangeAt(0);
		//const editor=this.editor;
		//const $textElem=editor.$textElem;
		this._currentRange = _range;
	},
	restoreRange: function () {
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(this._currentRange);
		console.log(selection.createRange());
	},
	isSelectionEmpty: function () {
		const range = this._currentRange;
		if (range && range.startContainer) {
			if (range.startContainer === range.endConatiner) {
				if (range.startOffset === range.endOffset) {
					return true;
				}
			}
		} else {
			return false;
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Selection);

/***/ })

})