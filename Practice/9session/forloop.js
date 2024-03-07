function printvalues(){
    var x=10;
    for(x=0;x<=10;x++){
    console.log(x);
}
}
printvalues()

//for in loops
var info=
{
    id :101,
    name:"shailashri",
    city:"India",
    gender:"female",
};
for(var props in info){
    console.log(props,":", info[props]);
}

//for of loops
var data=[100,200,300,120,130,150,656,788];
for(var element of data){
    var totalAmount = 2*element;
    console.log(totalAmount);
}

//print even odd
function evennum(){
    for(x=0;x<=20;x++)
    {
        if(x%2==0)
        {
            console.log(x);
        }
    }
}
evennum(1,20)

//odd num
/*function printvalues(){
    var x=20;
    for(x=0;x<20;x++){
        if(x%2!==0)
        console.log(x);
    }
}
printvalues(1,20) */

// reverse order

function reversevalue(s,e) 
{
    for(i=s; i>=e; i--){
    console.log(i);
}
}
printvalues(10,1);