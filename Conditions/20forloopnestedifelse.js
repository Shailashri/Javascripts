/*Problem 20: For Loop + Nested If-Else Statement
Print all numbers from -n to n using a for loop and
 check if each number is positive, negative, or zero using nested if-else statements.
Example:
For n = 5, print 1 2 3 4 5.
*/
var i=-n,n=5;
for(i=-n; i<=n; i++){
    if(i>0){
        console.log(i);
    }
    else if(i<0){
        console.log(i);
    }
    else{
        console.log(i);
        i++;
    }
}