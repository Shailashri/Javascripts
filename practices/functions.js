function fnName(){
    console.log("hello World");
}
fnName()

function addValues(a ,b){
    return(a+b);
}
var x=addValues(6,9);
console.log(x);

function fnName(){
    var x=6;
    y=7;
    console.log(x+y);
}
fnName();

function fnName(a,b){
    console.log(a-b);

}
fnName(6,3);

var mydata=[20,30,40,50,60];
var myElement=mydata.includes(60);
console.log(myElement);



var myData=[20,30,40,50];
myData.forEach(function(element,index,array){
    console.log(index,array);
});

var myData=[20,30,40,50,20];
myElement=myData.lastIndexOf(20);
console.log(myElement);

var myData=[20,40,50,60,20];
var myElement=myData.indexOf(20);
console.log(myElement);

var myData
