var a;
a = 100;
console.log(a)

var b = 200;
console.log(b)

b = 300;
console.log(b)

//字符串、数字、布尔、数组、对象、Null、Undefined

var a1 = "hello";
var a2 = 'hello';

var b1 = 12;
var b2 = 12.0;
var b3 = 12e2;

var c1 = true;
var c2 = false;

var arr = [1,2,3]

var obj = {
	name : 'limyue',
	age : 22
}

var d = null;

var e;

console.log(a1);
console.log(a2);
console.log(b1);
console.log(b2);
console.log(b3);
console.log(c1);
console.log(c2);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(obj.name);
console.log(obj.age);
console.log(d);
console.log(e);

/*		+/连接
		减，乘，除，求余
		赋值运算符
		比较运算符
		逻辑运算符
*/

var a = 'hello';
var b = 'world';
console.log('a+b='+a+' '+b);


var a = 10;
var b = 20;
console.log('a='+a+'; b='+b)
console.log('a+b='+a+b+'  \'+\'表示连接');
console.log('a-b='+a-b);
console.log('a*b='+a*b);
console.log('a/b='+a/b);
console.log('a%b='+a%b);
console.log('a++'+a++);
console.log('a--='+a--);

//赋值运算符
var a = 100;
var b;
b = a;console.log(b);
b += a;console.log(b);
b -= a;console.log(b);
b *= a;console.log(b);
b /= a;console.log(b);
b %= a;console.log(b);

//比较运算符
var a = 20;
var b = 40;
var c ;
c= a>b;console.log(c);
c= a>=b;console.log(c);
c= a<b;console.log(c);
c= a<=b;console.log(c);
c= a==b;console.log(c);
c= a===b;console.log(c);
c= a!=b;console.log(c);

//逻辑运算符&& || !
var a = 10;
var b;
b = (a>5 && a<20);
c = (a<5 || a<20);
d = !(a<5 || a<20);
console.log(b)
console.log(c)
console.log(d)