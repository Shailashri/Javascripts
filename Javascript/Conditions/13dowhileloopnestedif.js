/*Problem 13: Do While Loop + Nested If Statement
Print all numbers from 1 to n using a do while loop and check if 
each number is even or odd using a nested if statement.
Example:
For n = 5, print 1 3 5.
*/

/*var n=5,i=0;
do{
    if(i%2==0){
        //console.log("print even "+i);
    }
    else{
        console.log("print odd "+i);
     }
     i++;
}
while(i<=n)*/


var i=0,n=5;
do{
    if(i%2!==0){
        console.log("print odd "+i);
    }
    i++;
}
while(i<=n)


