function printPositiveNegativeZero(n){
    var i = 1;
    do {
        if (i > 0){
        console.log(i + " positive")
    }
    else if (i < 0){
        console.log(i + " negative")
}
else {
    console.log(i + " zero")
}
i++;
}while(i <= n)
}
printPositiveNegativeZero(5)
/*
Problem 19: Do While Loop + If-Else-If Statement
Print all numbers from 1 to n using a do while loop and check if each number is positive, negative, or zero using an if-else-if statement.
Example:
For n = 5, print 1 2 3 4 5.

*/
