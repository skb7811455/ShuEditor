webpackHotUpdate(0,{

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// 构造函数
function Download(editor) {
    this.editor = editor;
    this.$elem = $("<div><span><i class='fa fa-download'></i></span><button><i class='fa fa-download'><i/></button></div>");
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
        $elem.on(this.type, function () {
            const editor = that.editor;
            var filename = "editor.doc";
            var content = editor.$textElem.ele.innerHTML;
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
        });
    },
    funDownload: function () {
        const editor = this.editor;
        var filename = "editor.doc";
        var content = editor.$textElem.ele.innerHTML;
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
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Download);

/***/ })

})