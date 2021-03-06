webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function File(editor) {
    this.editor = editor;
    this.$elem = $("<div><input type='file'></input><button><i class='fa fa-file'></i></button></div>").addClass("s-e-file");
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
        const file = this.$elem.ele.firstChild.files[0];
        const reader = this.reader;
        reader.readAsText(file);
        reader.onload = function () {
            $(".s-e-container").ele.firstChild.firstChild.nodeValue = this.result;
        };
    },

    // 点击事件
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const that = this;
        $elem.on(this.type, function (event) {
            if (event.target.type === "submit") {
                if ($elem.ele.firstChild.files[0]) {
                    that.readFile();
                }
            }
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ })

})