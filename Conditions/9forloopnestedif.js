/*Problem 9: For Loop + Nested If Statement
Print all numbers from 1 to n using a for loop and 
check if each number is even or odd using a nested if statement.
Example:
For n = 5, print 1 3 5.
*/

var n=5;
for(i=1; i<=n; i++){
    if(i%2==0){
        console.log(i +' even');
    }
    else{
        console.log(i +' odd');
    }
}