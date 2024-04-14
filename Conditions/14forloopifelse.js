/*Problem 14: For Loop + If-Else Statement
Print all numbers from 1 to n using a for loop and 
check if each number is even or odd using an if-else statement.
Example:
For n = 5, print 1 3 5.
*/

var i=1,n=5;
for(i=1; i<=n; i++){
    if(i%2!==0){
        console.log(i);
    }
}