webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function File(editor) {
    this.editor = editor;
    this.$elem = $("<div><input type='file'><button type='button'><i class='fa fa-file'></i></button><button><i class='fa fa-code'></i></button></div>").addClass("s-e-file");
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
            if (file.type === "" || file.type === "text/plain") {
                editor.$textElem.ele.innerHTML = this.result;
            } else {
                alert("请选择doc或txt格式的文件!");
            }
            //editor.$textElem.ele.innerHTML=this.result;
        };
    },
    readImg: function () {
        const editor = this.editor;
        const file = this.$elem.ele.firstChild.files[0];
        const reader = this.reader;
        var img = document.getElementById("abc");
        reader.readAsDataURL(file);
        //reader.readAsText(file);
        reader.onload = function () {
            if (file.type === "image/jpeg") {
                img.src = this.result;
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
            that.$elem.ele.firstChild.click();
            if (event.target.type === "submit") {
                if ($elem.ele.firstChild.files[0]) {
                    that.readFile(that);
                }
            }
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ })

})