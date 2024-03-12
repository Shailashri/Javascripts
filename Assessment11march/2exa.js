var ourArray=[10,20,30,40,50];
var myarray=ourArray[0];
for(var i=1; i<=ourArray.length; i++){
    if(ourArray[i]<myarray){
     myarray=ourArray[i]  
    }
}
console.log(myarray);