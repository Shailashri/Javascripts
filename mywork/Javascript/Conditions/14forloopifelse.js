/*Problem 14: For Loop + If-Else Statement
Print all numbers from 1 to n using a for loop and check if 
each number is even or odd using an if-else statement.
Example:
For n = 5, print 1 3 5.
*/

/*
var i=0,n=5;
for(i=0;i<=n; i++){
    if(i%2==0){
        //console.log("Print even "+i);
    }
    else{
        console.log("Print odd "+i);
    }
} 
*/
var i=0,n=5;
for(let i=0; i<=n; i++){
    if(i%2!==0)
    console.log("print odd "+i);
}