/*Problem 26: Nested If-Else + For Loop
Print all numbers from 1 to n. If a number is divisible by 3,
print "Fizz", if a number is divisible by 5, print "Buzz", if a number
 is divisible by both 3 and 5, print "FizzBuzz".
Example:
*/
var i=1,n=15;
for(let i=1; i<=n; i++){
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
