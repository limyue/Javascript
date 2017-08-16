
### DOM
	document object model 文档对象模型  

### DOM操作HTML元素
	(1)id
		document.getElementById(elementId);
	(2)标签名
		document.getElementsByTagName(tagName);
	(3)类名--ie 5,6,7,8无效
		getElementsByClassName(elementClassName)
	(4)name属性
		document.getElementsByName(elementName)
	(5)选择器查找
		document.querySelector('h1');
		document.querySelectorAll('h2');

### DOM HTML
	(1)document.write
	直接向 HTML 输出流写内容
	(2)innerHTML
	修改 HTML 内容
	(3)document.getElementById(id).attr=new_value
	改变 HTML 元素的属性
	document.getElementById("image").src="landscape.jpg";

### DOM CSS
	(1)document.getElementById(id).style.prop=new style
	改变 HTML 元素的样式
	document.getElementById("p2").style.color="blue";

### DOM 事件
	(1)onclick分步=onmousedown、onmouseup
	点击事件
	(2)onload 和 onunload 
	用户进入/离开页面触发
	(3)onchange 
	onchange 事件常结合对输入字段的验证来使用(改变内容时)
	(4)onmouseover 和 onmouseout 事件
	鼠标移至 HTML 元素上方或移出元素时触发函数

### DOM 节点
	(1)创建新的 HTML 元素
	.createElement()
	.createTextNode()
	.appendChild()
	(2)删除已有的 HTML 元素
	.removeChild()










