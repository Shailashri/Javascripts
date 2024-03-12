function posneg(n){
    for(var i=1; i<=n; i++){
        if(i>0){
            console.log(i + " positive")
        }
        else if(i<0){
            console.log(i + " negative")
        }
        else{
            console.log(i + " zero")
        }
    }
}
posneg(5)