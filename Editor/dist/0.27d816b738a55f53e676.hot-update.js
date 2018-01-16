webpackHotUpdate(0,{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Head_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bold_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Italic_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Underline_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Backcolor_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__File_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Justify_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Quote_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__List_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Undo_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Redo_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Code_js__ = __webpack_require__(9);
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

/* harmony default export */ __webpack_exports__["a"] = (MenuConstructors);

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Code(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-font'><i/></button>");
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

            if (!isSeleEmpty) {

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
    tryAcitve: function () {
        console.log(editor.selectionAPI.getSelectionStartElem());
    },
    // 插入代码
    _insertCode: function (value) {
        const editor = this.editor;
        var str = "<pre><code>" + value + "</code></pre><p><br></p>";
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

/***/ })

})