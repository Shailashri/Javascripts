/*Problem 21: While Loop + Nested If-Else Statement
Print all numbers from 1 to n using a while loop and 
check if each number is positive, negative, or zero using nested if-else statements.
Example:
For n = 5, print 1 2 3 4 5.
*/
var i=1,n=5;
while(i<=n){
    if(i>0){
        console.log(i+' Positive');
    }
    else if(i<0){
        console.log(i+' Negative');
    }
    else{
        console.log(i+' Zero');
    }
    i++;
}
