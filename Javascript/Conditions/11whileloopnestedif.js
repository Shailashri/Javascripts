/*Problem 11: While Loop + Nested If Statement
Print all numbers from 1 to n using a while loop and check if 
each number is even or odd using a nested if statement.
Example:
For n = 5, print 1 3 5.
*/

var n=5, i=0;
while(i<=n){
    if(i%2==0){
        console.log("Print even "+i);
    }
    else{
        console.log("Print odd "+i);
    }
    i++;
}

