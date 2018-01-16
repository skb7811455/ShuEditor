import config from "./config.js";
import $ from './DomUtil.js'
import Command from "./Command.js"
import EventUtil from './Event.js'
import Menu from "./Menu.js"
import Selection from "./Selection.js"
import TextArea from "./TextArea.js"
(function(window){
var shuEditorId=1;
function Editor(editorSelector,menuSelector,textSelector){
	shuEditorId++;
	this.menuSelector=menuSelector;
	this.textSelector=textSelector;
	this.$elem=$(editorSelector);
	this.$menuElem=null;
    this.$textElem=null;

}
Editor.prototype={

	constructor:Editor,

	_initEventUtil:function(){

		this.eve=new EventUtil();//编辑器的事件对象
	},
	_initSelection:function(){
		this.selectionAPI=new Selection(this);
	},
	_initCommand:function(){
		this.cmd=new Command(this);//编辑器的命令对象
	},
	_initMenus:function(val){
		this.menu=new Menu(this,val);//编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea:function(val){
		this.txt=new TextArea(this,val);//编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom:function(){

		const menuSelector=this.menuSelector||"s-e-menu";
		const textSelector=this.textSelector||"s-e-container";

		const menuColor=this.config.menuColor;
		const $menuElem=$('<ul></ul>').css("width","100%")
									  .attr("id","s-e-menu"+shuEditorId)
									  .addClass("s-e-menu")
									  .addClass(menuSelector)
									  .css("background",menuColor);
        const $textElem=$('<div></div>').css('width',"100%")
        								.addClass("s-e-container")
        								.addClass(textSelector)
        								.attr("contenteditable",true)
        								.attr("id","s-e-container"+shuEditorId);
      	
        this.$menuElem=$menuElem;
        this.$textElem=$textElem;

		this.$elem.append($menuElem);
		this.$elem.append($textElem);
				
	},
	init:function(){
		

		this.config=config;
		this._initEventUtil();
		this._initDom();
		this._initCommand();
		//console.log(this)
		this._initMenus(this.$menuElem);
		this._initTextArea(this.$textElem);
		this._initSelection(this);
	}
}

function Editor1(editorSelector,menuSelector,textSelector){
	shuEditorId++;
	this.menuSelector=menuSelector;
	this.textSelector=textSelector;
	this.$elem=$(editorSelector);
	this.$menuElem=null;
    this.$textElem=null;
}
Editor1.prototype={
	_initEventUtil:function(){

		this.eve=new EventUtil();//编辑器的事件对象
	},
	_initSelection:function(){
		this.selectionAPI=new Selection(this);
	},
	_initCommand:function(){
		this.cmd=new Command(this);//编辑器的命令对象
	},
	_initMenus:function(val){
		this.menu=new Menu(this,val);//编辑器的菜单对象
		this.menu.init();
	},
	_initTextArea:function(val){
		this.txt=new TextArea(this,val);//编辑器的文本编辑对象
		this.txt.init();
	},
	_initDom:function(){
		const menuSelector=this.menuSelector||"s-e-menu";
		const textSelector=this.textSelector||"s-e-container";

		const menuColor=this.config.menuColor;
		const $menuElem=$('<ul></ul>').css("width","100%")
									  .attr("id","s-e-menu"+shuEditorId)
									  .addClass("s-e-menu")
									  .addClass(menuSelector)
									  .css("background",menuColor);
        const $textElem=$('<div></div>').css('width',"100%")
        								.addClass("s-e-container")
        								.addClass(textSelector)
        								.attr("contenteditable",true)
        								.attr("id","s-e-container"+shuEditorId);
      	
        this.$menuElem=$menuElem;
        this.$textElem=$textElem;

		this.$elem.append($menuElem);
		this.$elem.append($textElem);
				
	},
	init:function(){
		

		this.config=config;
		this._initEventUtil();
		this._initDom();
		this._initCommand();
		//console.log(this)
		this._initMenus(this.$menuElem);
		this._initTextArea(this.$textElem);
		this._initSelection(this);
	}
}

/*var Editor=new Editor("#editor");
var Editor1=new Editor1("#editor1");
Editor.init();
Editor1.init();*/

//$("editor").html("p");
   
	window.Editor=Editor;
	window.Editor1=Editor;
})(window)





export {Editor,Editor1};