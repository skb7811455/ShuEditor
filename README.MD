﻿1 系统概述
  本项目是一个基于js和css的在线富文本编辑器，支持设置字体大小、文本加粗、斜体、设置下划线、有序列表、增加文字背景等基础功能。支持左对齐、右对齐、居中对齐等对齐方式，满足基本的编辑需求。
  特别扩展了编辑代码、增加引言、添加图片等特殊功能。并可以实现预览文档、保存和打开编辑文档。
  项目可以作为网站编辑器插件使用，可以自定义样式和组件，如菜单和编辑区分离，改变编辑器排列方式，并能够设置一个页面多个编辑器，具有简洁、易用、轻量的特点。
 
2 系统设计
2.1 设计目标
完成基本的设置字体大小、文本加粗、斜体、下划线、设置背景等基本样式设置功能，具有新建，打开、保存一个文本文件的功能。
   扩展撤销、重做、设置文本对齐方式、添加编辑代码、增加引言、预览文档、插入图片等扩展功能。
   实时更新跟显示编辑状态，在菜单栏更新点亮菜单图标。
   实现插件化和组件化，可自定义样式和管理组件。
   优化界面设计与提高用户使用体验。
 
2.2 设计分析与算法流程
 
 
其主要功能如下：
打开已存在的文档：能够通过编辑器打开已经存在的文档，保留文档中的文本、样式和图片。能够通过word、wps等软件打开已编辑文档，保留文本和基本格式。
编辑新文档：可以在富文本编辑器编辑新的文档。
    实时更新编辑状态：菜单栏会实时更新编辑区域的状态。
   保存文档：编辑器能够将编辑后的文高档保存在用户硬盘，方便下次打开
设置字体大小：可以对文本设置五种不同大小的标题和正文。
设置粗体：可以对文本进行加粗和撤销加粗操作，实时更新点亮加粗图标，指示加粗状态。
   设置斜体：可以对文本设置斜体和撤销斜体操作，实时更新点亮斜体图标，指示斜体状态。
   设置下划线：可以对文本设置下划线和撤销下划线，实时更新点亮下划线图标，指示下划线状态。
   设置背景：可以对文本设置颜色背景和撤销背景，实时指示状态。
   设置对齐方式：对文本、图片设置左对齐、居中对齐、右对齐等对齐方式。实时指示状态。
插入图片：可以在文档中插入用户本地磁盘中存储的图片。
   撤销和重做：对用户的操作进行撤销和重做。
   添加引言：设置文本显示为引言格式。
   代码编辑：增加一个代码编辑区域，在代码编辑区中进行代码编辑，满足一般的技术博客的代码显示需求。
   文档预览：随时对编辑文档进行文档预览，已确认格式和文本。
   编辑器重排：改变编辑器布局方式，横排列和竖排。
   自定义组件和UI：可以扩展组件可卸载组件，配置自定义UI。
 
 
2.3 界面设计
界面风格趋于扁平化，设计风格简洁，美观，易于用户使用。共由三大部分组成——菜单组件、菜单项组件、编辑区组件。
 
3 系统实现（运行调试）
系统主要分为视图层、控制层、配置层三部分。
3.1 视图层
  主要包含了超文本文档html和样式文件css、font字体文件。
  html负责界面的内容显示和内容编辑，css负责定义html内容的样式。font字体文件主要包含菜单项的图标字体。
3.2 控制层
  控制层是本系统的主要层，控制层系统主要包含了编辑器模块、菜单模块、菜单构造器模块、编辑区模块、工具模块、选取模块、命令模块、配置模块。
编辑器模块
  系统的控制中心，接受选择器参数来增加编辑器的样式类名。负责菜单模块、编辑区模块、选取模块、命令模块等模块的初始化并挂载这些模块在编辑器模块上，负责编辑区视图和菜单视图的创建。
  通过将此模块注入至各个模块中，来实现模块间的通信和消息传递。
菜单模块
  菜单模块包含了菜单控制器组件和各种菜单项组件,各种菜单项组件可以自定义和卸载。
  菜单控制器组件负责初始化工作，创建并通知菜单构造器模块中引入的菜单项模块进行初始化，调用addToMenu函数添加菜单项内容至菜单内容中。并负责监听用户的操作和编辑区的编辑状态，调用changeAcitve函数通知各菜单项检查并更新显示状态。挂载在编辑器模块Editor上。
菜单项组件
  包括字体、加粗、斜体、下划线、背景色、序列、文件、对齐、引言、重做和撤销、排列方式、代码编辑、文件、预览、下载等组件。菜单项组件在收到菜单组件传来的激活消息后检查编辑区的自身状态，根据对应状态来添加激活类实现点亮对应图标的功能。并负责执行相应的命令。菜单项组件可以自定义，通过添加进菜单构造器模块和在配置模块中配置对应信息，进行集成和卸载。
菜单构造器模块
  负责导入各种菜单项组件，并将各组件模块函数挂载在菜单构造器对象上。
编辑区模块
  调用_bindeEvent函数进行事件绑定，主要负责监听用户的输入，在输入事件和点击事件发生时，对用户选取范围Range进行实时保存。方便之后恢复选取。挂载在编辑器模块Editor上。
选取模块
  封装了有关Selection的操作，包括保存选取，获取选取，获取选取开始内容dom、选取结束内容dom、判断选取为空的API函数。挂载在编辑器模块Editor上。
工具模块
  封装了常用的dom操作，如插入、查找、创建Dom元素，实现类似jquery的链式调用,暴露在全局环境中，可被各模块共同使用。
命令模块
  封装了对编辑区进行操作的命令函数，通过向命令层传输参数，执行相应的命令，还包含了系统自定义的命令。挂载在编辑区模块Editor上。
配置模块
  配置模块包含了系统模块的配置信息，包含了菜单项组件信息和用户自定义的UI配置信息。
 
3.3配置层
  配置层包含了项目的环境配置信息，如webpack打包配置、热更新配置、babel配置等配置文件。
 
