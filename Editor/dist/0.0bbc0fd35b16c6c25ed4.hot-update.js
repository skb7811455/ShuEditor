webpackHotUpdate(0,{

/***/ 13:
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
            if (file.type === "image/jpeg" || file.type === "image/png") {
                var blob = that.convertBase64UrlToBlob(this.result);
                var url = URL.createObjectURL(blob);
                img.src = url;
                if (editor.selectionAPI) {
                    editor.cmd.do('insertElem', img);
                }
            } else {
                alert("请选择png、jpeg、jpg图片类型的文件!");
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

/***/ 18:
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

/***/ })

})