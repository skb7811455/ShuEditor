webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function File(editor) {
    this.editor = editor;
    this.$elem = $("<input type='file'></input>").addClass("s-e-file");
    this.$elem.append(this.$confirmElem);
    this.$confirmElem = $("<button>导入</button>");
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
        const file = this.$elem.ele.files[0];
        const reader = this.reader;
        reader.readAsText(file);
        reader.onload = function (result) {
            $(".s-e-container").ele.firstChild.firstChild.nodeValue = this.result;
            console.log(this.result);
        };
    },
    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        console.log("绑定事件");
        $confirmElem.on(this.type, function () {
            that.readFile();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ })

})