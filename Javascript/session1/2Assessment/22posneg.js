function posneg(n){
    var i = 1
    do {
        if(i>0){
            console.log(i + " positive")
        }
     else if(i<0){
        console.log(i + " negative")
    }
    else {
        console.log(i + " zero")
    }
    i++
}while(i<=n)

}

posneg(-5)