
/*function printvalue(n){
    for(var i = 1; i <= n; i++){
        if(i > 0){
            console.log(i + " positive")
        }else if(i < 0){
            console.log(i + " negative")
        }else{
            console.log(i + " zero")
        }
    }
}

printvalue(-5)


/*function printvalue(x){

for(var i = 1; i <= x; i++){
if(x>0){
    console.log("print positive")}
    else if(x<0){
        console.log("print negative")}
        else
        {
            console.log("undefined")
        }
}}
printvalue(-5)*/
function printPositiveNegativeZero(n) {
    for (let i = 1; i <= n; i++) {
        if (i > 0) {
            console.log(i + " is positive");
        } else if (i < 0) {
            console.log(i + " is negative");
        } else {
            console.log(i + " is zero");
        }
    }
}

// Example usage:
let n = -5;
printPositiveNegativeZero(n);