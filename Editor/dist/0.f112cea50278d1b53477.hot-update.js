webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {

		function Dom(selector) {
			/*this.ele=document.getElementById(id);
   console.log(this)*/
			selector.replace("/\n/mg", "").trim();
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
			this.ele.innerHTML = val;
			return this;
		};
		Dom.prototype.isDomList = function (selector) {
			if (!selector) {
				return fasle;
			}
			if (selector instanceof NodeList) {
				return true;
			}
			return false;
		};
		Dom.prototype.querySelector = function (selector) {
			const result = document.querySelector(selector);
			if (result) {
				return result;
			}
		};
		Dom.prototype.append = function (val) {
			console.log(Dom.prototype);
			/*if(val instanceof of Dom){
   	this.ele.appendChild(val.ele);
   	return this;
   }
   if(val instanceof of Node){
   	this.ele.appendChild(val);
   }*/
			return this;
		};
		Dom.prototype.attr = function (key, val) {
			this.ele.setAttribute(key, val);
			return this;
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DomUtil_js__ = __webpack_require__(0);

function Bold(editor) {
	this.editor = editor;
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button class="s-e-menu">Bold</button>');
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
			that.tryActive();
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








function Editor(menuSelector, textSelector) {
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('#editor');
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
	_initTextArea: function () {
		this.txt = new __WEBPACK_IMPORTED_MODULE_6__TextArea_js__["a" /* default */](this); //编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom: function () {

		//.$menu=$(this.menuSelector);

		//this.$elem.append(this.$menu.ele);
		//this.$menu=$(this.textSelector);
		//this.$textElem=$(this.textSelector);
	},
	init: function () {
		this.config = __WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* default */];
		this._initEventUtil();
		this._initDom();
		this._initCommand();
		this._initMenus();
		this._initTextArea();
		//this._initSelection();
	}
};

var Editor = new Editor("#s-e-menu");
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
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button class="s-e-menu">H</button>');
	this._acitive = false;
	//this._book=123;
	//this.year=2;
}
Head.prototype = {

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
		if (editor.cmd.queryCommandState("fontsize")) {
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
			editor.cmd.do("fontsize", 7);
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
	//this.$elem=$("#bold");
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__DomUtil_js__["a" /* default */])('<button class="s-e-menu">Italic</button>');
	this._acitive = false;
	//this._book=123;
	//this.year=2;
}
Italic.prototype = {

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

/***/ })
])