/*Problem 18: Do While Loop + If-Else Statement
Print all numbers from 1 to n using a do while loop and 
check if each number is even or odd using an if-else statement.
Example:
For n = 5, print 1 3 5.
*/
var i=1,n=5;
do{
    if(i%2!==0){
        console.log(i);
        }
        i++;
   }
   while(i<=n)