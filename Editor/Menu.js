import MenuConstructors from "./MenuConstructors.js";
function Menu(editor,val){
	this.editor = editor;	
	this.$elem=val;
	console.log(val)
	//this.$elem=$('#menu');
	this.menus={}
}

Menu.prototype={

	
	init:function(){
		
		const editor=this.editor;
		const config=editor.config||{};		
		const configMenus=config.menus||[];
        const that=this;
        configMenus.forEach(function(menuKey){
        	//console.log(MenuConstructors[menuKey])
        	var MenuConstructor=MenuConstructors[menuKey];
        	//if(MenuConstructors && typeof MenuConstructors === "function"){
        		that.menus[menuKey] = new MenuConstructor(editor);
        		that.menus[menuKey].init();
        	//}
        })
        this._addToMenu();
        this._bindEvent();
        this.changeActive();
	},
	_addToMenu:function(){
		for(var item in this.menus){
			var $item=this.menus[item].$elem;
			this.$elem.append($item);			
		}
	},
	changeActive:function(){
		const menus=this.menus;
		for(var menu in menus){			
			(function(){
				var that=menu;
				if(menus[that].tryActive){
				var fn=function(){
					menus[that].tryActive();
				}
				setTimeout(fn,100)
				}
			})()
		}
	},
	_bindEvent:function(){
		const menus=this.menus;
		const editor=this.editor;
		const that=this;
		this.$elem.on("click",function(){
            //editor.selectionAPI.restoreRange();
			that.changeActive();
		})

	}

}


export default Menu;