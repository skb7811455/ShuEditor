webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__ = __webpack_require__(11);

function Menu(editor, val) {
	this.editor = editor;
	this.$elem = val;
	console.log(val);
	//this.$elem=$('#menu');
	this.menus = {};
}

Menu.prototype = {

	init: function () {

		const editor = this.editor;
		const config = editor.config || {};
		const configMenus = config.menus || [];
		const that = this;
		configMenus.forEach(function (menuKey) {
			//console.log(MenuConstructors[menuKey])
			var MenuConstructor = __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__["a" /* default */][menuKey];
			//if(MenuConstructors && typeof MenuConstructors === "function"){
			that.menus[menuKey] = new MenuConstructor(editor);
			that.menus[menuKey].init();
			//}
		});
		this._addToMenu();
		this.changeActive();
	},
	_addToMenu: function () {
		for (var item in this.menus) {
			var $item = this.menus[item].$elem.ele;
			this.$elem.ele.appendChild($item);
		}
	},
	changeActive: function () {
		const menus = this.menus;
		for (var menu in menus) {

			(function () {
				var that = menu;
				if (menus[that].tryActive) {
					var fn = function () {
						console.log(that);
						menus[menu].tryActive();
					};
					setTimeout(fn, 100);
				}
			})();
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

			editor.cmd.do("bold", null);
			//console.log(selection)
			//selection.collapseToEnd();

			/*var range=document.createRange();
    range.setStart(focusNode,focusOffset);
    range.setEnd(focusNode,focusOffset)
    selection.addRange(range);
    
     console.log(selection.focusNode);*/
			//that.tryActive();
		});
		/*editor.eve.addHandler($elem,"click",function(){
  	editor.cmd.do("bold",null);
  	that.tryActive();
  });*/
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Bold);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextArea_js__ = __webpack_require__(5);








function Editor(editorSelector, menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(editorSelector);
	this.$menuElem = null;
	this.$textElem = null;
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
	_initMenus: function (val) {
		this.menu = new __WEBPACK_IMPORTED_MODULE_4__Menu_js__["a" /* default */](this, val); //编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea: function (val) {
		this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this, val); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {

		const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu");
		const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true);

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
		//this._initSelection();
	}
};

var Editor = new Editor("#editor");
Editor.init();

//$("editor").html("p");


/* harmony default export */ __webpack_exports__["default"] = (Editor);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Head(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<div></div>').addClass("s-e-head");
	this._acitive = false;
	this.$hs = [];
}
Head.prototype = {

	init: function () {
		this._initDom();
		this.bindEvent();
	},
	_initDom: function () {
		for (var i = 1; i <= 5; i++) {
			this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>H" + i + "</button>").attr("sign", "h" + i));
			this.$elem.append(this.$hs[i - 1]);
		}
		this.$hs.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])("<button>p</button>").attr("sign", "p"));
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
		const that = this;
		console.log("绑定事件");
		editor.eve.addHandler($elem, "click", function (event) {

			var h = "<" + event.target.getAttribute("sign") + ">";
			editor.cmd.do("formatBlock", h);
			that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Head);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Italic(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button>Italic</button>'); //.addClass("s-e-menuList");
	this._acitive = false;
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
			editor.cmd.do("italic", null);
			that.tryActive();
		});
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Italic);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Underline_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__ = __webpack_require__(13);
const MenuConstructors = {};


MenuConstructors.head = __WEBPACK_IMPORTED_MODULE_0__Head_js__["a" /* default */];


MenuConstructors.bold = __WEBPACK_IMPORTED_MODULE_1__Bold_js__["a" /* default */];


MenuConstructors.italic = __WEBPACK_IMPORTED_MODULE_2__Italic_js__["a" /* default */];


MenuConstructors.underline = __WEBPACK_IMPORTED_MODULE_3__Underline_js__["a" /* default */];


MenuConstructors.backcolor = __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Underline(editor) {
    this.editor = editor;
    this.$elem = $("<button>U</button>");
    this.type = 'click';
    // 当前是否 active 状态
    this._active = false;
}

// 原型
Underline.prototype = {
    constructor: Underline,

    init: function () {
        this._bindEvent();
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {

            editor.cmd.do("underline");
            that.tryActive();
        });
        /*editor.eve.addHandler($elem,"click",function(){
            editor.cmd.do("bold",null);
            that.tryActive();
        });*/
    },
    onClick: function (e) {
        // 点击菜单将触发这里

        const editor = this.editor;
        /* const isSeleEmpty = editor.selection.isSelectionEmpty()
           
         if (isSeleEmpty) {
             // 选区是空的，插入并选中一个“空白”
             editor.selection.createEmptyRange()
         }
         */
        // 执行 underline 命令

        editor.cmd.do('underline');

        /* if (isSeleEmpty) {
             // 需要将选取折叠起来
             editor.selection.collapseRange()
             editor.selection.restoreSelection()
         }*/
    },

    // 试图改变 active 状态
    tryActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        if (editor.cmd.queryCommandState('underline')) {
            this._active = true;
            $elem.addClass('s-e-active');
        } else {
            this._active = false;
            $elem.removeClass('s-e-active');
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Underline);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Backcolor(editor) {
    this.editor = editor;
    this.$elem = $("<button>背景</button>");
    this.type = 'click';
    // 当前是否 active 状态
    this._active = false;
}

// 原型
Backcolor.prototype = {
    constructor: Backcolor,

    init: function () {
        this._bindEvent();
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {
            var a = editor.cmd.queryCommandValue("backColor");
            console.log(a);
            if (editor.cmd.queryCommandValue("backColor") === "rgb(241, 241, 241)") {
                editor.cmd.do("backColor", "#fff");
            } else {
                editor.cmd.do("backColor", "#f1f1f1");
            }
        });
        /*editor.eve.addHandler($elem,"click",function(){
            editor.cmd.do("bold",null);
            that.tryActive();
        });*/
    }

};

/* harmony default export */ __webpack_exports__["a"] = (Backcolor);

/***/ })
])