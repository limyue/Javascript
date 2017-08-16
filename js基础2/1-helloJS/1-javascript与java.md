### 什么是javascript

	JavaScript 是一门跨平台、面向对象的轻量级脚本语言。 在宿主环境（例如 web 浏览器）中， JavaScript 能够通过其所连接的环境提供的编程接口进行控制

### JavaScript 和 Java 的对比

			JavaScript	                   				  Java
面向对象。不区分对象类型。通过原型机制继承， 	基于类系统。分为类和实例，通过类层级的定义实现继承。
任何对象的属性和方法均可以被动态添加。			不能动态增加对象或类的属性或方法。

变量类型不需要提前声明(动态类型)。				变量类型必须提前声明(静态类型)。

不能直接自动写入硬盘。							可以直接自动写入硬盘

### ECMAScript 规范
	JavaScript 的标准化组织是 ECMA
	标准化版本的 JavaScript 被称作 ECMAScript

### 基础

	JavaScript是区分大小写的，并使用 Unicode字符集

	注释：
		// 单行注释

		/* 这是一个更长的,
		多行注释		
		*/

	声明：
		JavaScript有三种声明。
		var
		声明一个变量，可选择将其初始化为一个值。
		let
		声明一个块作用域的局部变量(block scope local variable)可选择将其初始化为一个值。
		const
		声明一个只读的常量。

	变量：
		一个 JavaScript 标识符必须以字母、下划线（_）或者美元符号（$）开头；后续的字符也可以是数字（0-9）。因为 JavaScript 语言是区分大小写的，这里所指的字母可以是“A”到“Z”（大写的）和“a”到“z”（小写的）
