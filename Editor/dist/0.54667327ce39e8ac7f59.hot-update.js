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
			this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button><i class='fa fa-header fa-1x'>" + i + "</i></button>").attr("sign", "h" + i).css("width", "30px"));
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
			var selection = window.getSelection();
			console.log(selection.getRangeAt(0));
			var h = "<" + event.target.getAttribute("sign") + ">";
			editor.cmd.do("formatBlock", h);
			//that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Underline_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__File_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Justify_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Quote_js__ = __webpack_require__(15);
const MenuConstructors = {};


MenuConstructors.head = __WEBPACK_IMPORTED_MODULE_0__Head_js__["a" /* default */];


MenuConstructors.bold = __WEBPACK_IMPORTED_MODULE_1__Bold_js__["a" /* default */];


MenuConstructors.italic = __WEBPACK_IMPORTED_MODULE_2__Italic_js__["a" /* default */];


MenuConstructors.underline = __WEBPACK_IMPORTED_MODULE_3__Underline_js__["a" /* default */];


MenuConstructors.backcolor = __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__["a" /* default */];


MenuConstructors.file = __WEBPACK_IMPORTED_MODULE_5__File_js__["a" /* default */];


MenuConstructors.justify = __WEBPACK_IMPORTED_MODULE_6__Justify_js__["a" /* default */];


MenuConstructors.quote = __WEBPACK_IMPORTED_MODULE_7__Quote_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ })

})