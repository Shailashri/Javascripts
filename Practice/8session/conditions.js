/*var d= new Date();
var time=d.getHours();
if(time<12);
{
    console.log("Good Morning")
}

function performance(x,y,action){
if(action=="+");{
console.log(x+y);
}
}
performance(10,5);*/


//If else statement
var d=new Date();
var time=d.getHours();
if(time<12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}

function performance (x,y,action){
    if(action==="+"){
        console.log(x+y);
    }else {
        console.log("Give proper action")
    }
}
performance(10,5,"+")

// elseIFstatement
function performanceoperation(x,y,action){
if(action==="+"){
    console.log(x + y);
}else if (action==="-"){
    console.log(x-y);
}else if(action==="*"){
    console.log(x*y);
}else if(action==="/"){
    console.log(x/y);
}else {
    console.log("pass valid action");
}
}

//
var d = new Date();
var time=d.getHours;
if(time<12){
    console.log("Good morning");
} else if(time>12 && time<14){
    console.log("Good morning");
}else{
    console.log("Good night")
}

//Switch case
var color = "block";
switch(color){
    case"red":
    console.log("This is a red color");
    break;
    case "blue":
        console.log("this is s blue");
        break;
        case "green":
            console.log("This is a green");
            break;
            case "orange":
                console.log("this is a orange");break;
                default:
                    console.log("case did not match");
}
//+ve or -ve
function num(x){
    if(x>0){
        console.log("positive");
    }else if(x<0){
        console.log("negative");
    }else{
        console.log("undefined");
    }
}
num(0)


// even or odd
function evenodd(x){
    if(x%2===0){
        console.log("even number");
    }else {
        console.log("odd number");
    }
}
evenodd(20)

// job destination
function designation(x){
    if((x>=18) && (x<=20)){
        console.log("junior developer");
} else if ((x>=21) && (x<=24)){
    console.log("senior");

}else if ((x>=25) && (x<=30)){
    console.log("Assistent");
}else if (x>=31){
    console.log("manager");
}else {
    console.log("undefined");
}
}
designation(25);

//
 function calculator(x,y,action){
    switch(action){
        case"+":
        console.log(x+y);
        break;
        case"-":
        console.log(x-y);
        break;
        case "/":
        console.log(x/y);
        break;
        case"*":
        console.log(x*y);
        break;
    }
 }
 calculator(2,3,"*");