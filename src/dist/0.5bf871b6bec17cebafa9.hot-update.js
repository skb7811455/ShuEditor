webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Command(editor) {
    this.editor = editor;
}

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
    _removeCode: function ($elem) {
        var $codeParent = $elem.parentNode.parentNode;
        //console.log($codeParent.firstChild);
        var p = document.createElement("p");
        $codeParent.replaceChild(p, $elem.parentNode);
    },
    _insertElem: function ($elem) {
        const editor = this.editor;
        const range = editor.selectionAPI.getRange();
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