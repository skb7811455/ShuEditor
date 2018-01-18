webpackHotUpdate(0,{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function File(editor) {
    this.editor = editor;
    this.$elem = $("<input type='file'>文件</input>");
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
        // var blob = new Blob(["123"], {type: "text/plain;charset=utf-8"});
        //    window.SaveAs(blob, "file.txt");//saveAs(blob,filename)
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
        $elem.on(this.type, function () {
            that.readFile();
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ })

})