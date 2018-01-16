function List(editor) {
    this.editor = editor;
    this.$elem = $("<button><i class='fa fa-list'></i></button>")
                                            .addClass("s-e-list");
    // 当前是否 active 状态
    this._active = false;
    this.type="click";
    this.editor.listActive=false;
}

// 原型
List.prototype = {
  

    // 执行命令
    _command: function (value) {
        const editor = this.editor
        const $textElem = editor.$textElem
        editor.selectionAPI.restoreRange()
        if (editor.cmd.queryCommandState(value)) {
            return
        }
        editor.cmd.do(value);
    },
    /*_initDom:function(){
        for(var i=1;i<=2;i++){
            this.$elem.append($("<button><i class='fa fa-list'></i></button>")
                                                        .attr("sign","list"+i)
                                                        .addClass("s-e-list"));
        }
    },*/
    // 试图改变 active 状态
    tryActive: function (e) {
        const editor = this.editor
        const $elem = this.$elem
        if (editor.cmd.queryCommandState('insertOrderedList')) {
            this._active = true
            $elem.addClass('s-e-active')
        } else {
            this._active = false
            $elem.removeClass('s-e-active')
        }
    },
    _bindEvent:function(){
        const editor=this.editor;
        const $elem=this.$elem;
        const that=this;
        console.log("绑定事件");
        $elem.on(this.type,function(eve){
            editor.selectionAPI.restoreRange();
            //editor.cmd.do("remove")        
            editor.cmd.do("insertUnOrderedList");    
        })
    },
    init:function(){
        //this._initDom();
        this._bindEvent();
    }
}

export default List;