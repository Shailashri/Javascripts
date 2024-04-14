/*Problem 25: Do While Loop + Nested If-Else-If Statement
Print all numbers from 1 to n using a do while loop and 
check if each number is positive, negative, or zero using nested if-else-if statements.
Example:
For n = 5, print 1 2 3 4 5.
*/
var i=1,n=5;
do{
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
while(i<=n);
