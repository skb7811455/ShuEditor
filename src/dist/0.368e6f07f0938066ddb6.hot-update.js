webpackHotUpdate(0,{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Head(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<div></div>').addClass("s-e-head");
	this._acitive = false;
	this.$hs = [];
	this.type = "click";
}
Head.prototype = {

	init: function () {
		this._initDom();
		this.bindEvent();
	},
	_initDom: function () {
		for (var i = 1; i <= 5; i++) {
			this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button class='shu-" + i + "x'>H</button>").attr("sign", "h" + i).css("width", "30px"));
			this.$elem.append(this.$hs[i - 1]);
		}
		this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button><i class='fa fa-font'></i></button>").attr("sign", "p"));
		this.$elem.append(this.$hs[5]);
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		const reg = /^h/i;
		const cmdValue = editor.cmd.queryCommandValue('formatBlock');
		if (reg.test(cmdValue)) {
			this._active = true;
			$elem.addClass('s-e-active');
		} else {
			this._active = false;
			$elem.removeClass('s-e-active');
		}
	},
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		var a = this.$elem;
		const that = this;

		editor.eve.addHandler($elem, "click", function (event) {

			editor.selectionAPI.restoreRange();
			/*var selection=window.getSelection();
   selection.removeAllRanges();
   selection.addRange(editor.currentRange);	
   //currentRange=selection.
   //selection.extend(a.querySelector(".s-e-container").firstChild,0);
   //selection.selectAllChildren(a.querySelector(".s-e-container").firstChild)
   console.log(selection.getRangeAt(0));*/
			var h = "<" + event.target.getAttribute("sign") + ">";
			editor.cmd.do("formatBlock", h);
			//that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ })

})