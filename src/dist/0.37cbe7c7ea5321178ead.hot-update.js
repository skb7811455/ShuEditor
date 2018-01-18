webpackHotUpdate(0,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__List_js__ = __webpack_require__(17);
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

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function List(editor) {
    this.editor = editor;
    this.$elem = $('<div></div>');
    // 当前是否 active 状态
    this._active = false;
    this.type = "click";
}

// 原型
List.prototype = {
    constructor: List,

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
    _initDom: function () {
        for (var i = 1; i <= 5; i++) {
            this.$elem.append($("<button><i class='fa fa-font'></i></button>").attr("sign", "list" + i).css("width", "30px"));
        }
    },
    // 试图改变 active 状态
    tryChangeActive: function (e) {
        const editor = this.editor;
        const $elem = this.$elem;
        if (editor.cmd.queryCommandState('insertUnOrderedList') || editor.cmd.queryCommandState('insertOrderedList')) {
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
        $elem.on(this.type, function () {
            editor.restoreRange();
            editor.cmd.do("insertUnOrderedList");
            //that.tryActive();
        });
    },
    init: function () {
        this._initDom();
        this._bindEvent();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ })

})