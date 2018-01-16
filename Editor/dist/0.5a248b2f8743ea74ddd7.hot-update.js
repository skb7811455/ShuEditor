webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Head(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<div><button>H1</button><button>H2</button><button>H3</button><button>H4</button><button>H5</button><button>p</button></div>').addClass("s-e-head");
	this._acitive = false;
}
Head.prototype = {

	init: function () {
		this.bindEvent();
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
		const that = this;
		console.log("绑定事件");
		editor.eve.addHandler($elem, "click", function () {
			editor.cmd.do("formatBlock", "<h1>");
			that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ })

})