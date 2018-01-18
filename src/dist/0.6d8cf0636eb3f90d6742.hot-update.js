webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__ = __webpack_require__(8);

function Menu(editor) {
	this.editor = editor;
	this.$elem = $('menuList');
	this.menus = {};
}

Menu.prototype = {

	init: function () {

		const editor = this.editor;
		const config = editor.config || {};
		const configMenus = config.menus || [];

		configMenus.forEach(function (menuKey) {
			MenuConstructor = __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */][menuKey];
			if (__WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */] && typeof __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */] === "function") {
				this.menus[menuKey] = new MenuConstructor(editor);
			}
		});
		this._addToMenu();
		/*this.Bold=new Bold(this.editor);
  this.Bold.init();	*/
	},
	_addToMenu: function () {
		for (var item in this.menus) {
			const $item = item.ele;
			this.$elem.ele.appendChild($item);
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextArea_js__ = __webpack_require__(5);








function Editor(menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
}
Editor.prototype = {
	_initEventUtil: function () {

		this.eve = new __WEBPACK_IMPORTED_MODULE_3__Event_js__["a" /* default */](); //编辑器的事件对象
	},
	_initSelection: function () {
		this.selectionAPI = new __WEBPACK_IMPORTED_MODULE_5__Selection_js__["a" /* default */]();
	},
	_initCommand: function () {
		this.cmd = new __WEBPACK_IMPORTED_MODULE_2__Command_js__["a" /* default */](this); //编辑器的命令对象
	},
	_initMenus: function () {
		this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["a" /* default */](this); //编辑器的菜单对象
		this.menu.init();
	},
	_initText: function () {
		this.txt = new Text(this); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {
		this.$menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(this.menuSelector);
		this.$menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(this.textSelector);
	},
	init: function () {
		this.config = __WEBPACK_IMPORTED_MODULE_0__config_js___default.a;
		this._initEventUtil();
		this._initCommand();
		this._initMenus();
		//this._initTetx();
		//this._initSelection();
	}
};

var Editor = new Editor();
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bold_js__ = __webpack_require__(9);
const MenuConstructors = {};


MenuConstructors.bold = __WEBPACK_IMPORTED_MODULE_0__bold_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Bold(editor) {
	this.editor = editor;
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button class="s-e-menu">Bold</button>');
	this._acitive = false;
	//this._book=123;
	//this.year=2;
}
Bold.prototype = {

	init: function () {
		this.bindEvent();
		/*Object.defineProperty(this,"book",{
  	get:function(){
  		return this._book;
  	},
  	set:function(newValue){
  				$("bold").ele.firstChild.nodeValue=newValue;
  		
  	}
  })*/
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
	bindEvent: function () {
		const editor = this.editor;
		const $elem = this.$elem.ele;
		const that = this;
		editor.eve.addHandler($elem, "click", function () {
			editor.cmd.do("bold", null);
			that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ })
])