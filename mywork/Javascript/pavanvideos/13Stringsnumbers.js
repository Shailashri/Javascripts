let s="welcome";
//let s=new String;

// chatAt()character method
console.log(s.charAt(5));

//concat()
console.log(s.concat("to javascript program"));// concat two strings
console.log(s.concat(" to shaila").concat(" program"));// concat more then two strings
//replace()
s="welcome to javascript";
console.log(s.replace("javascript","java"));

//substring()
s="welcome";
//wel
console.log(s.substring(0,3));//wel
console.log(s.substring(3,7));//come

//toLowerCase() & toUpperCase()
s="WELcome";
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//split()
s="welcome to javascript";
let arr=s.split(' ');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//trim()
s="   welcome     ";
console.log(s);
console.log(s.trim());

//Numbers
//let x=100;
//let x = new Number(100);

let x=100; //integer
let y=43.2; //decimal
let z=10e2;//exponencial value
console.log(x,y,z);

//isInteger()
x=100;
y=12.4;
z="d";
console.log(Number.isInteger(x)); //true
console.log(Number.isInteger(y));//false
console.log(Number.isInteger(z));//false

//parseInt()  converts string into number
s="12345";
console.log(typeof(s));//string
console.log(typeof(Number.parseInt(s)));//number

//parseFloat()
s="123.567";
console.log(typeof(s)); //string
console.log(typeof(Number.parseFloat(s))); //number


//toString()
//let n=1234;
let n=12.34567;
console.log(typeof(n)); // number
console.log(typeof(Number.toString(n))); //string


