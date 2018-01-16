webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Code(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-font'><i/></button>");
    this.type = 'click';

    // 当前是否 active 状态
    this._active = false;
}

// 原型
Code.prototype = {
    constructor: Code,

    init: function () {
        this._bindEvent();
    },
    _bindEvent: function () {
        const editor = this.editor;
        const $elem = this.$elem;
        var that = this;
        var $code;
        $elem.on(this.type, function () {
            editor.selectionAPI.saveRange();
            var $startElem = editor.selectionAPI.getSelectionStartElem();
            var $endElem = editor.selectionAPI.getSelectionEndElem();
            var isSeleEmpty = editor.selectionAPI.isSelectionEmpty();
            var selectionText = editor.selectionAPI.getSelectionText();

            if (!($startElem === $endElem)) {
                // 跨元素选择，不做处理
                editor.selectionAPI.restoreRange();
                return;
            }

            /*if(that._active){
                    //console.log(that._active)
                    editor.cmd.do("removeCode",that.$code.ele);
                    that._active=false;
                    editor._code=false;
            }*/

            if (!isSeleEmpty) {

                that._insertCode(selectionText);
                /*var $p = $("<p><br></p>");
                editor.cmd.do('insertContainerBrother', $p.ele);
                $code = $("<pre><code>"+selectionText+"</code></pre>");
                editor.cmd.do('insertElem', $code.ele);*/
                that._active = true;
                //that.$code=$code;
                editor._code = true;
                //editor.selectionAPI.createRangeByElem($code, false);
                editor.selectionAPI.restoreRange();
                return;
            }
        });
    },
    tryActive: function () {
        const $elem = this.$elem;
        const editor = this.editor;
        if (!editor.selectionAPI) {
            return;
        }
        const selectionElem = editor.selectionAPI.getSelectionStartElem();
        if (selectionElem) {
            if (selectionElem.parentNode.nodeName == "PRE" || selectionElem.parentNode.nodeName == "CODE") {
                $elem.addClass("s-e-active");
                editor._code = true;
            } else {
                $elem.removeClass("s-e-active");
                editor._code = false;
            }
        }
    },
    // 插入代码
    _insertCode: function (value) {
        const editor = this.editor;
        var str = "<pre><code>" + value + "</code></pre><p><br></p>";
        editor.cmd.do('insertHTML', str);
    },

    // 更新代码
    _updateCode: function (value) {
        const editor = this.editor;
        const $selectionELem = editor.selection.getSelectionContainerElem();
        if (!$selectionELem) {
            return;
        }
        $selectionELem.html(value);
        editor.selection.restoreSelection();
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Code);

/***/ })

})