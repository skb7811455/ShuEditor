webpackHotUpdate(0,{

/***/ 16:
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
            editor.cmd.do("insertOrderedList");
        });
    },
    init: function () {
        //this._initDom();
        this._bindEvent();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Underline_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__File_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Justify_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Quote_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__List_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Undo_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Redo_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Code_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Download_js__ = __webpack_require__(10);
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

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ })

})