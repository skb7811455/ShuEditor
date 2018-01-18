webpackHotUpdate(0,{

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Bold(editor) {
	this.editor = editor;
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button>Bold</button>'); //.addClass("s-e-menuList");
	this._acitive = false;
	this.type = "click";
	//this._book=123;
	//this.year=2;
}
Bold.prototype = {

	init: function () {
		this._bindEvent();
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		if (editor.cmd.queryCommandState("bold")) {
			this._acitive = true;
			$elem.addClass("s-e-active");
		} else {
			this._acitive = false;
			$elem.removeClass("s-e-active");
		}
	},
	_bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		const that = this;
		console.log("绑定事件");
		$elem.on(this.type, function () {
			var selection = window.getSelection();
			var focusNode = selection.focusNode;
			var focusOffset = selection.focusOffset;

			editor.cmd.do("bold", null);
			selection.removeAllRanges();

			var range = document.createRange();
			range.setEnd(focusNode, focusOffset);
			selection.addRange(range);

			console.log(selection.focusNode);
			that.tryActive();
		});
		/*editor.eve.addHandler($elem,"click",function(){
  	editor.cmd.do("bold",null);
  	that.tryActive();
  });*/
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })

})