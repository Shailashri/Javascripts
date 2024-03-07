// JavaScript Program to Calculate the Area of a Triangle
/*
let baseValue=4;
heightValue=6;
resultarea=(baseValue * heightValue)/2;
console.log(resultarea); 
*/

//Area When All Sides are Known
let side1=3;
let side2=4;
let side3=5;

let s=(side1+side2+side3)/2; 
let areaValue=Math.sqrt(s*(s-side1) * (s-side2) * (s-side3));
console.log(areaValue);
