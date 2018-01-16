webpackHotUpdate(0,{

/***/ 7:
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
    // 点击事件
    download: function () {
        const editor = this.editor;
        console.log(editor.$textElem.ele);
        document.body.appendChild(editor.$textElem.ele.cloneNode(true));
        this.downTest();
        var w = window.open('about:blank');
        w.document.write('<html><head><title>打印</title></head><body><div>' + editor.$textElem.ele.innerHTML + '</div></body></html>');
        w.document.close();
        w.print();
    },
    funDownload: function () {
        const editor = this.editor;
        var filename = "123.doc";
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
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        const color = editor.config.backColor;
        const that = this;

        $elem.on(this.type, function () {
            editor.selectionAPI.restoreRange();
            that.funDownload();

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

/***/ })

})