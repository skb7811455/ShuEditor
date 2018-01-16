webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
(function (window) {

	function $(id) {

		Dom.prototype = {
			constructor: Dom
		};
		Dom.prototype.setValue = function (val) {
			if (Object.getPrototypeOf(val).constructor.name === "Dom") {
				this.ele.nodeValue = val.ele.nodeValue;
			} else if (val.nodeType === "1") {
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
		Dom.prototype.getHTML = function () {
			return this.ele.innerHTML;
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
			if (Object.getPrototypeOf(val).constructor.name === "Dom") {
				this.ele.appendChild(val.ele);
			} else if (val.nodeType === "1") {
				this.ele.appendChild(val);
			}
			//this.ele.appendChild(val.ele);
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
		return new Dom(id);
	}
	window.$ = $;
})(window);

/* harmony default export */ __webpack_exports__["a"] = ($);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Command(editor) {
    this.editor = editor;
}

Command.prototype = {
    do: function (name, value) {
        const userCommand = "_" + name;
        if (this[userCommand]) {
            this[userCommand](value);
        } else {
            this._execCommand(name, value);
        }
    },
    _execCommand: function (name, value) {
        console.log(document.execCommand(name, false, value));
    },
    _removeCode: function ($elem) {
        var $codeParent = $elem.parentNode;
        $codeParent.innerHTML = "<p><br></p>";
        //$codeParent.appendChild($("<br>").ele);
    },
    _insertElem: function ($elem) {
        const editor = this.editor;
        const range = editor.selectionAPI.getRange();
        const isEmpty = editor.selectionAPI.isSelectionEmpty();
        if (isEmpty && range.insertNode) {
            range.deleteContents();
            range.insertNode($elem);
        }
    },
    _insertContainerBrother: function ($elem) {
        const editor = this.editor;
        const range = editor.selectionAPI.getRange();
        const parentElem = editor.selectionAPI.getSelectionStartElem().parentNode;
        if (parentElem) {
            parentElem.appendChild($elem);
            // range.deleteContents();
            // range.insertNode($elem);
        }
    },
    // 封装 document.queryCommandValue
    queryCommandValue: function (name) {
        return document.queryCommandValue(name);
    },

    // 封装 document.queryCommandState
    queryCommandState: function (name) {
        return document.queryCommandState(name);
    },

    // 封装 document.queryCommandSupported
    queryCommandSupported: function (name) {
        return document.queryCommandSupported(name);
    }

};
/* harmony default export */ __webpack_exports__["a"] = (Command);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function EventUtil() {}
EventUtil.prototype = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  removeHandler: function (element, type, handler) {
    if (event.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  getEvent: function (event) {
    return event ? event : window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
};
/* harmony default export */ __webpack_exports__["a"] = (EventUtil);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MenuConstructors_js__ = __webpack_require__(18);

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
		this._bindEvent();
		this.changeActive();
	},
	_addToMenu: function () {
		for (var item in this.menus) {
			var $item = this.menus[item].$elem;
			this.$elem.append($item);
		}
	},
	changeActive: function () {
		const menus = this.menus;
		for (var menu in menus) {
			(function () {
				var that = menu;
				if (menus[that].tryActive) {
					var fn = function () {
						menus[that].tryActive();
					};
					setTimeout(fn, 100);
				}
			})();
		}
	},
	_bindEvent: function () {
		const menus = this.menus;
		const editor = this.editor;
		const that = this;
		this.$elem.on("click", function () {
			//editor.selectionAPI.restoreRange();
			that.changeActive();
		});
	}

};

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Selection(editor) {
	this.editor = editor;
	this._currentRange = null;
}

Selection.prototype = {

	getRange: function () {
		return this._currentRange;
	},
	saveRange: function (range) {
		if (range) {
			this._currentRange = range;
			return;
		}

		const selection = window.getSelection();
		if (selection.rangeCount === 0) {
			return;
		}
		const _range = selection.getRangeAt(0);
		this._currentRange = _range;
	},
	restoreRange: function () {
		const selection = window.getSelection();
		//console.log(selection.getRangeAt(0));
		selection.removeAllRanges();
		selection.addRange(this._currentRange);
	},
	getSlectionContainer: function () {},
	getSelectionStartElem: function (range) {
		range = range || this._currentRange;
		var elem;
		if (range) {
			elem = range.startContainer;
			return elem.nodeType === 1 ? elem : elem.parentNode;
		}
	},
	getSelectionEndElem: function (range) {
		range = range || this._currentRange;
		var elem;
		if (range) {
			elem = range.endContainer;
			return elem.nodeType === 1 ? elem : elem.parentNode;
		}
	},
	getSelectionText: function (range) {
		if (range) {
			return range.toString();
		} else if (this._currentRange) {
			return this._currentRange.toString();
		} else {
			return "";
		}
	},
	createElemByRange: function () {},
	isSelectionEmpty: function () {
		const range = this._currentRange;
		if (range && range.startContainer) {
			//if(range.startContainer===range.endConatiner){
			if (range.startOffset === range.endOffset) {
				return true;
			}
			//}
		} else {
			return false;
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (Selection);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function TextArea(editor, val) {
	this.editor = editor;
	this.$textElem = val;
	console.log(editor);
}
TextArea.prototype = {
	init: function () {
		this._bindEvent();
		this._clear();
	},
	_clear: function () {
		this.html("<p> <br></p>");
	},
	html: function (val) {
		const editor = this.editor;
		const $textElem = this.$textElem;
		if (val == null) {
			return $textElem.html();
		} else {
			$textElem.html(val);
		}
	},

	_bindEvent: function () {
		const editor = this.editor;
		const $textElem = this.$textElem;
		const that = this;
		$textElem.on("click", function () {
			editor.selectionAPI.saveRange();
			/*var selection=window.getSelection();
   editor.currentRange=selection.getRangeAt(0);
   console.log(editor.currentRange);*/
		});
		$textElem.on("keyup", function (eve) {
			editor.selectionAPI.saveRange();
			if (!$textElem.ele.firstChild) {
				that._clear();
			}
		});
	}

};

/* harmony default export */ __webpack_exports__["a"] = (TextArea);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const config = {

    // 默认菜单配置
    menus: ['head', 'bold', "italic", "underline", "backcolor", "file", "justify", "quote", "list", "undo", "redo", "mycode", "download", "changestyle"],
    backColor: "rgb(255, 0, 255)" //"rgb(241, 241, 241)"
};
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Backcolor(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-paint-brush'></i></button>");
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
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const color = editor.config.backColor;
        const that = this;

        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            if (editor.cmd.queryCommandValue("backColor") === color) {
                //$elem.removeClass("s-e-active");

                editor.cmd.do("backColor", "#fff");
            } else {
                //$elem.addClass("s-e-active");
                editor.cmd.do("backColor", color);
            }
        });
    },
    tryActive: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const color = editor.config.backColor;
        if (editor.cmd.queryCommandValue("backColor") === color) {
            $elem.addClass("s-e-active");
        } else {
            $elem.removeClass("s-e-active");
        }
    }

};

/* harmony default export */ __webpack_exports__["a"] = (Backcolor);

/***/ }),
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function ChangeStyle(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-cog'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
ChangeStyle.prototype = {
    constructor: ChangeStyle,

    // 点击事件
    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        $elem.on(this.type, function () {
            const wraps = document.getElementsByClassName("wrapper");
            if (wraps[0].style.display == "block") {
                for (var i = 0; i < wraps.length; i++) {
                    wraps[i].style.display = "inline-block";
                }
            } else {
                for (var i = 0; i < wraps.length; i++) {
                    wraps[i].style.display = "block";
                }
            }

            //that.tryActive();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (ChangeStyle);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Code(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-code'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Code.prototype = {
    constructor: Code,

    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        var that = this;
        var $code;
        $elem.on(this.type, function () {
            editor.selectionAPI.saveRange();
            var $startElem = editor.selectionAPI.getSelectionStartElem();
            var $endElem = editor.selectionAPI.getSelectionEndElem();
            var isSeleEmpty = editor.selectionAPI.isSelectionEmpty();
            var selectionText = editor.selectionAPI.getSelectionText();

            if (!($startElem === $endElem)) {
                // 跨元素选择，不做处理
                editor.selectionAPI.restoreRange();
                return;
            }

            /*if(that._active){
                    //console.log(that._active)
                    editor.cmd.do("removeCode",that.$code.ele);
                    that._active=false;
                    editor._code=false;
            }*/

            if (!isSeleEmpty && !editor._code) {

                that._insertCode(selectionText);
                /*var $p = $("<p><br></p>");
                editor.cmd.do('insertContainerBrother', $p.ele);
                $code = $("<pre><code>"+selectionText+"</code></pre>");
                editor.cmd.do('insertElem', $code.ele);*/
                that._active = true;
                //that.$code=$code;
                editor._code = true;
                //editor.selectionAPI.createRangeByElem($code, false);
                editor.selectionAPI.restoreRange();
                return;
            }
        });
    },
    tryActive: function () {
        const $elem = this.$elem;
        const editor = this.editor;
        if (!editor.selectionAPI) {
            return;
        }
        const selectionElem = editor.selectionAPI.getSelectionStartElem();
        if (selectionElem) {
            if (selectionElem.parentNode.nodeName == "PRE" || selectionElem.parentNode.nodeName == "CODE") {
                $elem.addClass("s-e-active");
                editor._code = true;
            } else {
                $elem.removeClass("s-e-active");
                editor._code = false;
            }
        }
    },
    // 插入代码
    _insertCode: function (value) {
        const editor = this.editor;
        var str = "<pre><code><p>" + value + "</p></code></pre><p><br></p>";
        editor.cmd.do('insertHTML', str);
    },

    // 更新代码
    _updateCode: function (value) {
        const editor = this.editor;
        const $selectionELem = editor.selection.getSelectionContainerElem();
        if (!$selectionELem) {
            return;
        }
        $selectionELem.html(value);
        editor.selection.restoreSelection();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Code);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function Download(editor) {
    this.editor = editor;
    this.$elem = $("<div><button type='button'><i class='fa fa-eye'></i></button><button><i class='fa fa-download'><i/></button></div>");
    this.$elem.addClass("s-e-download");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Download.prototype = {
    constructor: Download,

    // 点击事件
    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        $elem.on(this.type, function (eve) {
            if (event.target.type === "button") {
                that.print(that);
            } else if (event.target.type === "submit") {
                that.funDownload(that);
            };
        });
    },
    funDownload: function (that) {
        if (!that) {
            return;
        }
        const editor = that.editor;
        var filename = "editor.doc";
        var content = editor.$textElem.getHTML(); //editor.$textElem.ele.innerHTML;
        var eleLink = document.createElement('a');
        eleLink.download = filename;
        eleLink.style.display = 'none';
        // 字符内容转变成blob地址
        var blob = new Blob([content]);
        eleLink.href = URL.createObjectURL(blob);
        // 触发点击
        document.body.appendChild(eleLink);
        eleLink.click();
        // 然后移除
        document.body.removeChild(eleLink);
    },
    print: function (that) {
        if (!that) {
            return;
        }
        const editor = that.editor;
        const content = editor.$textElem.getHTML();
        var w = window.open('about:blank');
        w.document.write('<html><head><title>预览</title></head><body><div>' + content + '</div></body></html>');
        w.document.close();
        // w.print();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Download);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor1", function() { return Editor1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DomUtil_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Command_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Event_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Menu_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Selection_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TextArea_js__ = __webpack_require__(5);








var shuEditorId = 1;
function Editor(editorSelector, menuSelector, textSelector) {
	shuEditorId++;
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(editorSelector);
	this.$menuElem = null;
	this.$textElem = null;
}
Editor.prototype = {

	constructor: Editor,

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

		const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu" + shuEditorId).addClass("s-e-menu");
		const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true).attr("id", "s-e-container" + shuEditorId);

		this.$menuElem = $menuElem;
		this.$textElem = $textElem;

		this.$elem.append($menuElem);
		this.$elem.append($textElem);
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

function Editor1(editorSelector, menuSelector, textSelector) {
	shuEditorId++;
	this.menuSelector = menuSelector;
	this.textSelector = textSelector;
	this.$elem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])(editorSelector);
	this.$menuElem = null;
	this.$textElem = null;
}
Editor1.prototype = {
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

		const $menuElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<ul></ul>').css("width", "100%").attr("id", "s-e-menu" + shuEditorId).addClass("s-e-menu");
		const $textElem = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__DomUtil_js__["a" /* default */])('<div></div>').css('width', "100%").addClass("s-e-container").attr("contenteditable", true).attr("id", "s-e-container" + shuEditorId);

		this.$menuElem = $menuElem;
		this.$textElem = $textElem;

		this.$elem.append($menuElem);
		this.$elem.append($textElem);
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

	/*var Editor=new Editor("#editor");
 var Editor1=new Editor1("#editor1");
 Editor.init();
 Editor1.init();*/

	//$("editor").html("p");
}(function (window) {
	window.Editor = Editor;
})(window);



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function File(editor) {
    this.editor = editor;
    this.$elem = $("<div><input type='file'><button type='button'><i class='fa fa-file'></i></button><button><i class='fa fa-camera'></i></button></div>").addClass("s-e-file");
    this.type = 'click';
    this.reader = new FileReader();
    // 当前是否 active 状态
    this._active = false;
}

// 原型

File.prototype = {
    constructor: File,

    init: function () {
        this._bindEvent();
    },
    readFile: function () {
        const editor = this.editor;
        const file = this.$elem.ele.firstChild.files[0];
        const reader = this.reader;

        reader.readAsText(file);
        reader.onload = function () {
            console.log(file.type);
            if (file.type === "" || file.type === "text/plain") {
                editor.$textElem.ele.innerHTML = this.result;
            } else {
                alert("请选择doc或txt格式的文件!");
            }
            //editor.$textElem.ele.innerHTML=this.result;
        };
    },
    convertBase64UrlToBlob: function (urlData) {

        var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte  

        //处理异常,将ascii码小于0的转换为大于0  
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }

        return new Blob([ab], { type: 'image/jpeg' });
    },
    readImg: function () {
        const editor = this.editor;
        const file = this.$elem.ele.firstChild.files[0];
        const reader = this.reader;
        const img = $("<img></img>").ele;
        const that = this;
        reader.readAsDataURL(file);
        //reader.readAsText(file);
        reader.onload = function () {
            if (file.type === "image/jpeg") {
                var blob = that.convertBase64UrlToBlob(this.result);
                var url = URL.createObjectURL(blob);
                img.src = url;
                if (editor.selectionAPI) {
                    editor.cmd.do('insertElem', img);
                }
            } else {
                alert("请选择图片类型的文件!");
            }
        };
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        $elem.on(this.type, function (event) {
            if (event.target.type === "button") {
                if ($elem.ele.firstChild.files[0]) {
                    that.readFile(that);
                }
            } else if (event.target.type === "submit") {
                if ($elem.ele.firstChild.files[0]) {
                    that.readImg(that);
                }
            }
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ }),
/* 14 */
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
/* 15 */
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

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Justify(editor) {
    this.editor = editor;
    this.$elem = $("<div></div>").addClass("s-e-justify");
    this.type = 'click';
    this.$poses = [];
    // 当前是否 active 状态
    this._active = false;
}

// 原型

Justify.prototype = {
    constructor: Justify,

    init: function () {
        this._initDom();
        this._bindEvent();
    },
    _initDom: function () {
        var pos = ["left", "center", "right"];
        var font = "fa fa-align-";
        for (var i = 0; i < 3; i++) {
            this.$poses.push($("<button><i class='" + font + pos[i] + "'></i></button>").attr("pos", pos[i]));
            this.$elem.append(this.$poses[i]);
        }
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            var pos = "justify" + event.target.getAttribute("pos");
            editor.cmd.do(pos);
        });
    },
    tryActive: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        $elem.removeAllClass();
        if (editor.cmd.queryCommandState("justifyleft")) {
            this._acitive = true;
            $elem.addClass("s-e-jstf-left-active");
        } else if (editor.cmd.queryCommandState("justifycenter")) {
            this._acitive = true;
            $elem.addClass("s-e-jstf-center-active");
        } else if (editor.cmd.queryCommandState("justifyright")) {
            this._acitive = true;
            $elem.addClass("s-e-jstf-right-active");
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Justify);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function List(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-list'></i></button>").addClass("s-e-list");
    // 当前是否 active 状态
    this._active = false;
    this.type = "click";
    this.editor.listActive = false;
}

// 原型
List.prototype = {

    // 执行命令
    _command: function (value) {
        const editor = this.editor;
        const $textElem = editor.$textElem;
        editor.selectionAPI.restoreRange();
        if (editor.cmd.queryCommandState(value)) {
            return;
        }
        editor.cmd.do(value);
    },
    /*_initDom:function(){
        for(var i=1;i<=2;i++){
            this.$elem.append($("<button><i class='fa fa-list'></i></button>")
                                                        .attr("sign","list"+i)
                                                        .addClass("s-e-list"));
        }
    },*/
    // 试图改变 active 状态
    tryActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        if (editor.cmd.queryCommandState('insertOrderedList')) {
            this._active = true;
            $elem.addClass('s-e-active');
        } else {
            this._active = false;
            $elem.removeClass('s-e-active');
        }
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $elem.on(this.type, function (eve) {
            editor.selectionAPI.restoreRange();
            //editor.cmd.do("remove")        
            editor.cmd.do("insertUnOrderedList");
        });
    },
    init: function () {
        //this._initDom();
        this._bindEvent();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Underline_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__File_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Justify_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Quote_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__List_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Undo_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Redo_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Code_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Download_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ChangeStyle_js__ = __webpack_require__(9);
const MenuConstructors = {};


MenuConstructors.head = __WEBPACK_IMPORTED_MODULE_0__Head_js__["a" /* default */];


MenuConstructors.bold = __WEBPACK_IMPORTED_MODULE_1__Bold_js__["a" /* default */];


MenuConstructors.italic = __WEBPACK_IMPORTED_MODULE_2__Italic_js__["a" /* default */];


MenuConstructors.underline = __WEBPACK_IMPORTED_MODULE_3__Underline_js__["a" /* default */];


MenuConstructors.backcolor = __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__["a" /* default */];


MenuConstructors.file = __WEBPACK_IMPORTED_MODULE_5__File_js__["a" /* default */];


MenuConstructors.justify = __WEBPACK_IMPORTED_MODULE_6__Justify_js__["a" /* default */];


MenuConstructors.quote = __WEBPACK_IMPORTED_MODULE_7__Quote_js__["a" /* default */];


MenuConstructors.list = __WEBPACK_IMPORTED_MODULE_8__List_js__["a" /* default */];


MenuConstructors.undo = __WEBPACK_IMPORTED_MODULE_9__Undo_js__["a" /* default */];


MenuConstructors.redo = __WEBPACK_IMPORTED_MODULE_10__Redo_js__["a" /* default */];


MenuConstructors.mycode = __WEBPACK_IMPORTED_MODULE_11__Code_js__["a" /* default */];


MenuConstructors.download = __WEBPACK_IMPORTED_MODULE_12__Download_js__["a" /* default */];


MenuConstructors.changestyle = __WEBPACK_IMPORTED_MODULE_13__ChangeStyle_js__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Quote(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-quote-left'></i></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Quote.prototype = {
    constructor: Quote,

    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        const reg = /^BLOCKQUOTE$/i;
        $elem.on(this.type, function () {

            const cmdValue = editor.cmd.queryCommandValue('formatBlock');
            if (reg.test(cmdValue)) {
                //editor.cmd.do('removeformat');
                editor.cmd.do('formatBlock', "p");
            } else {
                editor.cmd.do('formatBlock', "<BLOCKQUOTE>");
            }
        });
    },

    tryActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        const reg = /^BLOCKQUOTE$/i;
        const cmdValue = editor.cmd.queryCommandValue('formatBlock');
        if (reg.test(cmdValue)) {
            this._active = true;
            $elem.addClass('s-e-active');
        } else {
            this._active = false;
            $elem.removeClass('s-e-active');
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Quote);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function Redo(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-rotate-right'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Redo.prototype = {
    constructor: Redo,

    // 点击事件
    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            editor.cmd.do("redo");
            //that.tryActive();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Redo);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Underline(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-underline'></i></button>");
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
            editor.selectionAPI.restoreRange();

            editor.cmd.do("underline");
            //that.tryActive();
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function Undo(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-rotate-left'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Undo.prototype = {
    constructor: Undo,

    // 点击事件
    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            editor.cmd.do("undo");
            //that.tryActive();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Undo);

/***/ })
])