let x=10,y=20;
//Arithematic operators + - / * % ** ++ --
console.log(x+y); //30
console.log(y-x); //10
console.log(y/x); //2
console.log(x*y); //200
console.log(y%x); //0
console.log(5**2); //25

// Increment operator
//x=x+1; or
//x++; //post increment
++x; // pre-increment
console.log(x); //11

//y=y-1;
//y--; // post decrement
--y; //pre-decrement
console.log(y); //19


// Assignment Opertors
x=100; 
y=50;
console.log(x); //100

x+=y; //or x=x+y
console.log(x); //150

console.log(x-=y); //x=x-y
console.log(x*=y); //x=x%y
console.log(x/=y); //x=x*y
console.log(x%=y); //x=x/y


// Relational/ Comparision Oprators
// always return a boolean value true or false
// >greater  < less  >=  <=  !=
x=10;
y=20;
console.log(x>y);  //false
console.log(x<y);   //true

// <=  less then orequal too
console.log(x<=y); // true
console.log(x>=y);  // false
console.log(x!=y); // true

// Ternary Operator
console.log(x<y?x:y); //return x value 10
console.log(y>x?y:x);// return y value 20

// Logical Operators
//  && || !
let a=true;
b=false;
console.log(a&&b);   // false
console.log(a||b);  // true
console.log(!a);


