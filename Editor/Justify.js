function Justify(editor) {
    this.editor = editor
    this.$elem = $("<div></div>").addClass("s-e-justify");
    this.type = 'click'
    this.$poses=[];
    // 当前是否 active 状态
    this._active = false
}

// 原型

Justify.prototype = {
    constructor: Justify,

    init:function(){
        this._initDom();
        this._bindEvent();
    },  
    _initDom:function(){
        var pos=["left","center","right"]
        var font="fa fa-align-";
        for(var i=0;i<3;i++){
            this.$poses.push($("<button><i class='"+font+pos[i]+"'></i></button>").attr("pos",pos[i]));
            this.$elem.append(this.$poses[i]);
        }
    },
    // 点击事件
    _bindEvent:function(){
        const editor=this.editor;
        const $elem=this.$elem;
        const that=this;
        console.log("绑定事件");
        $elem.on(this.type,function(){
            editor.selectionAPI.restoreRange();    
            var pos="justify"+event.target.getAttribute("pos");
            editor.cmd.do(pos);
        })    
    },
    tryActive:function(){
        const editor=this.editor;
        const $elem=this.$elem;
        $elem.removeAllClass();
        if(editor.cmd.queryCommandState("justifyleft")){
            this._acitive=true;
            $elem.addClass("s-e-jstf-left-active");
        }else if(editor.cmd.queryCommandState("justifycenter")){
            this._acitive=true;
            $elem.addClass("s-e-jstf-center-active");
        }else if(editor.cmd.queryCommandState("justifyright")){
            this._acitive=true;
            $elem.addClass("s-e-jstf-right-active");
        }
    }, 
}

export default Justify