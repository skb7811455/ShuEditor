import $ from "./DomUtil.js"
function Italic(editor){
	this.editor = editor;
	this.$elem=$('<button><i class="fa fa-italic"></i></button>')//.addClass("s-e-menuList");
	this._acitive=false;
	this.type="click";
}
Italic.prototype={

	init:function(){
		this.bindEvent();
			
	},
	tryActive:function(){
		const editor=this.editor;
		const $elem=this.$elem;
		if(editor.cmd.queryCommandState("italic")){
			this._acitive=true;
			$elem.addClass("s-e-active");
		}else{
			this._acitive=false;
			$elem.removeClass("s-e-active");
		}
	},
	bindEvent:function(){
		const editor=this.editor;
		const $elem=this.$elem.ele;
		const that=this;
		console.log("绑定事件")
		editor.eve.addHandler($elem,"click",function(){
            editor.selectionAPI.restoreRange();
			editor.cmd.do("italic",null);
			//that.tryActive();
		});
	}
}



export default Italic;