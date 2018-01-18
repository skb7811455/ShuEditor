webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {

		function Dom(selector) {
			/*this.ele=document.getElementById(id);
   console.log(this)*/
			selector = selector.replace("/\n/mg", "").trim();
			//console.log(selector);
			if (selector.indexOf('<') === 0) {
				this.ele = this.createElementByHTML(selector)[0];
			} else {
				this.ele = this.querySelector(selector);
			}
			return this;
		}
		Dom.prototype = {
			constructor: Dom
		};
		Dom.prototype.setValue = function (val) {
			if (val) {
				this.ele.nodeValue = val;
			}
			return this;
		};
		Dom.prototype.createElementByHTML = function (html) {
			var div;
			div = document.createElement("div");
			div.innerHTML = html;
			return div.children;
		};
		Dom.prototype.addClass = function (className) {
			if (!className) {
				return this;
			}
			if (!this.ele.className) {
				this.ele.className = className;
			} else {
				var arr;
				arr = this.ele.className.split(/\s/);
				arr = arr.filter(function (item) {
					return item !== className;
				});
				arr.push(className);
				this.ele.className = arr.join(" ");
			}
			return this;
		};
		Dom.prototype.removeAllClass = function () {
			this.ele.className = "";
		};
		Dom.prototype.removeClass = function (className) {
			if (!className) {
				return this;
			}
			if (this.ele.className) {
				var arr;
				arr = this.ele.className.split(/\s/);
				arr = arr.filter(function (item) {
					if (item == className) return false;else return true;
				});
				this.ele.className = arr.join(" ");
			}
			return this;
		};
		Dom.prototype.html = function (val) {
			//console.log(val)
			this.ele.innerHTML = val;
			console.log(this.ele.innerHTML);
			return this;
		};
		Dom.prototype.isDomList = function (selector) {
			if (!selector) {
				return false;
			}
			if (selector instanceof NodeList) {
				return true;
			}
			return false;
		};
		Dom.prototype.querySelector = function (selector) {
			const result = document.querySelector(selector);
			//console.log(result)
			if (result) {
				return result;
			}
		};
		Dom.prototype.append = function (val) {
			//console.log(val.ele.nodeType)
			if (val.constructor === "Dom") {
				this.ele.appendChild(val.ele);
				return this;
			}
			this.ele.appendChild(val.ele);
			//return this;
			return this;
		};
		Dom.prototype.attr = function (key, val) {
			this.ele.setAttribute(key, val);
			return this;
		};
		Dom.prototype.garr = function (key, val) {
			return this.ele.getAttribute(key, val);
		};
		Dom.prototype.css = function (key, val) {
			this.ele.style[key] = val;
			return this;
		};
		Dom.prototype.on = function (type, handler) {
			const $ele = this.ele;
			if ($ele.addEventListener) {
				$ele.addEventListener(type, handler, false);
			} else if ($ele.attachEvent) {
				$ele.attachEvent("on" + type, handler);
			} else {
				$ele["on" + type] = handler;
			}
			return this;
		};
		return new Dom(id);
	}
	window.$ = $;
})(window);

/* harmony default export */ __webpack_exports__["a"] = ($);

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

function Bold(editor) {
	this.editor = editor;
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button><i class="fa fa-bold"></i></button>').attr("title", "标题"); //.addClass("s-e-menuList");
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

function Italic(editor) {
	this.editor = editor;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button><i class="fa fa-italic"></i></button>'); //.addClass("s-e-menuList");
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