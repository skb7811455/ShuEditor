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
		console.log(cmdValue);
		if (reg.test(cmdValue)) {
			this._active = true;
			switch (cmdValue) {
				case 1:
					"h1";
					$elem.addClass("s-e-head-h1-active");
					break;
				case 2:
					"h2";
					$elem.addClass("s-e-head-h2-active");
					break;
				case 3:
					"h2";
					$elem.addClass("s-e-head-h3-active");
					break;
				case 4:
					"h3";
					$elem.addClass("s-e-head-h4-active");
					break;
				case 5:
					"h5";
					$elem.addClass("s-e-head-h5-active");
					break;
				case 6:
					"p";
					$elem.addClass("s-e-head-p-active");
					break;
			}
		} else {
			this._active = false;
			$elem.removeAllClass();
		}
	},
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		var a = this.$elem;
		const that = this;

		editor.eve.addHandler($elem, "click", function (event) {
			editor.selectionAPI.getRange();
			editor.selectionAPI.restoreRange();

			if (event.target.getAttribute("sign")) {
				var h = "<" + event.target.getAttribute("sign") + ">";
				editor.cmd.do("formatBlock", h);
				editor.selectionAPI.saveRange();
			}
			//that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ })

})