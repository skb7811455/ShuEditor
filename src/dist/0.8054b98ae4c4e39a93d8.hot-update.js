webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Command(editor) {}

Command.prototype = {
    do: function (name, value) {
        const userCommand = "_" + name;
        if (this[userCommand]) {
            this[userCommand](value);
        } else {
            this._execCommand(name, value);
        }
    },
    _execCommand: function (name, value) {
        console.log(document.execCommand(name, false, value));
    },
    _insertElem: function ($elem) {
        console.log(234324);
        const editor = this.editor;
        const range = editor.selection.getRange();
        if (range.insertNode) {
            range.deleteContents();
            range.insertNode($elem);
        }
    },
    // 封装 document.queryCommandValue
    queryCommandValue: function (name) {
        return document.queryCommandValue(name);
    },

    // 封装 document.queryCommandState
    queryCommandState: function (name) {
        return document.queryCommandState(name);
    },

    // 封装 document.queryCommandSupported
    queryCommandSupported: function (name) {
        return document.queryCommandSupported(name);
    }

};
/* harmony default export */ __webpack_exports__["a"] = (Command);

/***/ })
])