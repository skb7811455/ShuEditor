import $ from "./DomUtil.js"
function Bold(editor){
	this.editor = editor;
	//this.$elem=$("#bold");
	this.$elem=$('<button><i class="fa fa-bold"></i></button>')
									.attr("title","标题");//.addClass("s-e-menuList");
	this._acitive=false;
	this.type="click";
	//this._book=123;
	//this.year=2;
}
Bold.prototype={

	init:function(){
		this._bindEvent();
			
	},
	tryActive:function(){
		const editor=this.editor;
		const $elem=this.$elem;
		if(editor.cmd.queryCommandState("bold")){
			this._acitive=true;
			$elem.addClass("s-e-active");
		}else{
			this._acitive=false;
			$elem.removeClass("s-e-active");
		}
	},
	_bindEvent:function(){
		const editor=this.editor;
		const $elem=this.$elem;
		const that=this;
		console.log("绑定事件");
		$elem.on(this.type,function(){
            editor.selectionAPI.restoreRange();	
			editor.cmd.do("bold",null);
			//console.log(selection)			
		})
		
	}
}



export default Bold;