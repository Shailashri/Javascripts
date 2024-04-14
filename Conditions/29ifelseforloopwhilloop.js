/*Problem 29: Nested If-Else + For Loop + While Loop
Print all numbers from 1 to n. If a number is divisible by 3,
print "Fizz", if a number is divisible by 5, print "Buzz", 
if a number is divisible by both 3 and 5, print "FizzBuzz".
Example:
For n = 5, print 1 2 Fizz 4 Buzz.
*/

/* Using for loop
var i=1,n=5;
for(i=1; i<=n; i++){
    if(i%3==0 && i%5==0){
        console.log('FizzBuzz');
    }
    else if(i%3==0){
        console.log('Fizz');
    }
    else if(i%5==0){
        console.log('Buzz');
    }
    else{
        console.log(i); 
       }
}
 */

// Using While loop
var i=1,n=5;
while(i<=n){
for(i=1; i<=n; i++){
    if(i%3==0 && i%5==0){
        console.log('FizzBuzz');
    }
    else if(i%3==0){
        console.log('Fizz');
    }
    else if(i%5==0){
        console.log('Buzz');
    }
    else{
        console.log(i); 
       }
}
}
