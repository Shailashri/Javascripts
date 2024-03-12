function posnega(n){
    var i = 1
    do{
        if (i>0){
                console.log(i + " pos")
            }
            else if(i<0){
                console.log(i + " neg")
            }else{
                console.log(i + " zero")
            }
            i++;
        }while(i<=n)
              }
        
posnega(-5)