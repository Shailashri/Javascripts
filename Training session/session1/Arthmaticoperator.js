var x = 10;
x++;
console.log(x);

var x = 10;
++x;
console.log(x);

var x = 10; 
z = x + ++x;
console.log(z);
var x = 10;    //11,21
z = x + x++;
console.log(z);  //11,20
var a = 10;
b = a + 5 + ++a;
console.log(a,b);    //11,26

var a=10;
b = a++ + a + ++a;
console.log(a,b);    //12,33

var x=4;
y = x + x++ + x;
console.log(x,y);    //5,13

var a = 10;
b = ++a + ++a +a + a++;
console.log(a,b);     //13,47


var a = 10;
b = a++ + ++a + a + ++a + a++;
console.log(a,b);  

var a = 10;
b = a++ + ++a + a + ++a + a++;
console.log(a,b);    //14,60





