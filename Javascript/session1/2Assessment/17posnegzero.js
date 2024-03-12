function printvalue(n){
    var i = 1;
    while(i <= n){
        if(i > 0){
            console.log(i + " positive");
    } else if (i < 0){
        console.log(i + " negative");
    }
    else {
        console.log(i + " undefined");
    }
    i++;
}}
var n = 5
printvalue(n)


/*function printPositiveNegativeZero(n) {
    let i = 1;
    while (i <= n) {
        if (i > 0) {
            console.log(i + " is positive");
        } else if (i < 0) {
            console.log(i + " is negative");
        } else {
            console.log(i + " is zero");
        }
        i++;
    }
}

// Example usage:
let n = 5;
printPositiveNegativeZero(n);*/