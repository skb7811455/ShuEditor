webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: C:\\Users\\舒琨博\\Desktop\\我的文档\\软件设计\\Editor\\DomUtil.js: Unexpected token (96:3)\n\n\u001b[0m \u001b[90m 94 | \u001b[39m\t\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mele\u001b[33m.\u001b[39mappendChild(val\u001b[33m.\u001b[39mele)\u001b[33m;\u001b[39m\n \u001b[90m 95 | \u001b[39m\t\t\t\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 96 | \u001b[39m\t\t}\u001b[33m*\u001b[39m\u001b[33m/\u001b[39m\n \u001b[90m    | \u001b[39m\t\t \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 97 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mele\u001b[33m.\u001b[39mappendChild(val\u001b[33m.\u001b[39mele)\u001b[33m;\u001b[39m\n \u001b[90m 98 | \u001b[39m\t\t\u001b[90m//return this;\u001b[39m\n \u001b[90m 99 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__);

function Bold(editor) {
	this.editor = editor;
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["default"])('<button><i class="fa fa-bold"></i></button>').attr("title", "标题"); //.addClass("s-e-menuList");
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
			editor.selectionAPI.restoreRange();
			editor.cmd.do("bold", null);
			//console.log(selection)			
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextArea_js__ = __webpack_require__(5);








function Editor(editorSelector, menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["default"])(editorSelector);
	this.$menuElem = null;
	this.$textElem = null;
}
Editor.prototype = {
	_initEventUtil: function () {

		this.eve = new __WEBPACK_IMPORTED_MODULE_3__Event_js__["a" /* default */](); //编辑器的事件对象
	},
	_initSelection: function () {
		this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_5__Selection_js__["a" /* default */](this);
	},
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_2__Command_js__["a" /* default */](this); //编辑器的命令对象
	},
	_initMenus: function (val) {
		this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["a" /* default */](this, val); //编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea: function (val) {
		this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this, val); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {

		const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["default"])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu");
		const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["default"])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true);

		this.$menuElem = $menuElem;
		this.$textElem = $textElem;

		this.$elem.ele.appendChild($menuElem.ele);
		this.$elem.ele.appendChild($textElem.ele);
	},
	init: function () {

		this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
		this._initEventUtil();
		this._initDom();
		this._initCommand();
		//console.log(this)
		this._initMenus(this.$menuElem);
		this._initTextArea(this.$textElem);
		this._initSelection(this);
	}
};

var Editor = new Editor("#editor");
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__);

function Head(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["default"])('<div></div>').addClass("s-e-head");
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
			this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["default"])("<button class='shu-" + i + "x'>H</button>").attr("sign", "h" + i).css("width", "30px"));
			this.$elem.append(this.$hs[i - 1]);
		}
		this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["default"])("<button><i class='fa fa-font'></i></button>").attr("sign", "p"));
		this.$elem.append(this.$hs[5]);
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		const reg = /^h/i;
		const cmdValue = editor.cmd.queryCommandValue('formatBlock');
		$elem.removeAllClass();
		if (reg.test(cmdValue)) {
			this._active = true;

			switch (cmdValue) {
				case "h1":
					console.log(cmdValue);
					$elem.addClass("s-e-head-h1-active");
					break;
				case "h2":
					$elem.addClass("s-e-head-h2-active");
					break;
				case "h3":
					$elem.addClass("s-e-head-h3-active");
					break;
				case "h4":
					$elem.addClass("s-e-head-h4-active");
					break;
				case "h5":
					$elem.addClass("s-e-head-h5-active");
					break;
			}
		} else {
			this._active = false;
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

			if (editor.cmd.queryCommandState('insertOrderedList')) {
				return;
			}

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

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__);

function Italic(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["default"])('<button><i class="fa fa-italic"></i></button>'); //.addClass("s-e-menuList");
	this._acitive = false;
	this.type = "click";
}
Italic.prototype = {

	init: function () {
		this.bindEvent();
	},
	tryActive: function () {
		const editor = this.editor;
		const $elem = this.$elem;
		if (editor.cmd.queryCommandState("italic")) {
			this._acitive = true;
			$elem.addClass("s-e-active");
		} else {
			this._acitive = false;
			$elem.removeClass("s-e-active");
		}
	},
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		const that = this;
		console.log("绑定事件");
		editor.eve.addHandler($elem, "click", function () {
			editor.selectionAPI.restoreRange();
			editor.cmd.do("italic", null);
			//that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Italic);

/***/ })
])