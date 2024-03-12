/*Problem 15: For Loop + If-Else-If Statement
Print all numbers from 1 to n using a for loop and check if
 each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.
*/
var n=-5,i=5;
for(i=0; i<=n;i++){
    if(i>0){
        console.log("Positive "+i);
    }
    else if(i<0){
        console.log("Negative "+i);
    }
    else{
        console.log("Zero");
    }
}