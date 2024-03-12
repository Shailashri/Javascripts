function divisible(n){
    for(i=1; i<=n; i++){
        if(i%3 ===0 && i%5 ===0){
            console.log("fizzBizz")
        }
        else if(i%3 ===0){
            console.log("fizz")
        }
        else if(i%5 ===0){
            console.log("Bizz")
        }else {
            console.log(i)
        }
    
    }
}
divisible(15)