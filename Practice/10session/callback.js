function f1()
{
    console.log("f1 is called");
}
function f2(f)
{
    console.log(f);
    f();
}
f2(f1);


function fn(x)
{
    x();
    x();
    x();
}
fn(function(){
    console.log("i am callback function");
});

//localscope
function localscope()
{
    var myVariable = 5;
    console.log(myVariable);
}
localscope();
//console.log(myVariable);

function local(){
    var variable=7;
    console.log(variable);
}
local();

//GlobalScope
var myglobal=10;
function fun1()
{
    shailaglobal=5;
}
function fun2()
{
    var output="";
    if(typeof myglobal != "undefined"){
        output="myglobal: "+myglobal+ ";";
    }
    if(typeof shailaglobal != "undefined")
    {
        output+="shailaglobal:" + shailaglobal;
        console.log(output);
    }
}
fun1();
fun2();
 
//GlobalVSlocal
var outWear = "T-shirt";
function myoutfit(){
    var outWear="Sweater";
    console.log(outWear);
}
myoutfit();
console.log(outWear);


var shaila="beautiful";
function Magadum(){
    var shaila="looking gorgeous";
    console.log(shaila);
}
Magadum();
console.log(shaila);

//Break
//var i=0;
for(i=0; i<=10; i++)
{
    if(i==3){
        break;    
    }
    console.log( i);
}

// continue
for(i=0; i<=10; i++)
{
    if(i==5)
    {
        continue;
    }
    console.log(i);
}