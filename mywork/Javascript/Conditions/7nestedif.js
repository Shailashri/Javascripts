/*Problem 7: Nested If Statement
Check if a given number n is even or odd. If n is even, check if it is positive or negative. Print the corresponding message.
Example:
For n = 5, print "Positive Odd".
*/

let n=5;
if(n%2===0)
if(n>0)
{
    console.log("Positive even");
}
else{
console.log("Positive odd");
}
else if(n<0)
{
    console.log("negative even");
}
else
{
    console.log("negative odd");
}

