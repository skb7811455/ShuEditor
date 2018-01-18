webpackHotUpdate(0,{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function File(editor) {
    this.editor = editor;
    this.$elem = $("<div><input type='file'></input><button>导入</button></div>").addClass("s-e-file");
    // this.$confirmElem = $("<button>导入</button>");
    //this.$elem.next(this.$confirmElem);
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
        console.log("绑定事件");
        $elem.on(this.type, function (event) {
            if (event.target.type === "submit") {
                that.readFile();
                AllAreaWord();
            }
        });
    }
};
function AllAreaWord() {
    var oWD = new ActiveXObject("Word.Application");
    var oDC = oWD.Documents.Add("", 0, 1);
    var oRange = oDC.Range(0, 1);
    var sel = document.body.createTextRange();
    sel.moveToElementText(PrintA);
    sel.select();
    sel.execCommand("Copy");
    oRange.Paste();
    console.log(oWD);
    oWD.Application.Visible = true;
    //window.close(); 
}
/* harmony default export */ __webpack_exports__["a"] = (File);

/***/ })

})