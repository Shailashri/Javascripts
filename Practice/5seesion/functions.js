function ourFunction(){
console.log("Hello World");
}
ourFunction();

//Add values
function addValues(){
    var x=10;
    var Y=20;
    var result=x+Y;
    console.log(result);
}
addValues();

// parameters and arguments

function myFunction(a,b){
    console.log(a-b);
}
myFunction(10,5);

//return values or statements
function returnValue(num){
return num-1;
}
console.log(returnValue(10));
//ex
function printName(name){
    var x=name + "Shaila";
    return x;
}
var data=printName(" Shailashri");
console.log(data);
var data=printName("Padache");
console.log(data);

//Ex
function f1(a,b){
    var x=100;
    var y;
    console.log(x);
    console.log(y);
    console.log(a,b);
}
f1("shaila","padache");

//Ex
function f2(a,b){
console.log(a,b);
}
f2(100,200);
f2(100,200,300);
f2(100);

//Ex
function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result="";
    result="my" + myAdjective + myNoun + myVerb + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "runs","fast"));