function printvalue(n) {
    var i = 1

    do {
        for(i = 1; i <= n; i++){
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("FizzBizz")
            } else if (i % 3 === 0) {
                console.log("Fizz") 
            } else if(i % 5 === 0) {
            console.log("Bizz")
        } else { 
            console.log(i);
        }
    }
        i++ 
    } while (i <= n)
    }

printvalue(5)