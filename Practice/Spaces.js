// find the spaces between given string

var myString = "My name is Shailashri Padache";
var counter=0;
console.log(myString[2]);
for(let i=0;i<myString.length;i++){
    if(myString[i]==" "){
        console.log("counter increases: spaces found");
        counter++
       
    }
    
}
console.log("Number of spaces "+counter);
