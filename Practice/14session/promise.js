var promiseObject=new Promise(function(resolve,reject){});
console.log(promiseObject);
 
//function promise
/*var promise = new promise (function(resolve,reject){
if(statuss){
resolve({
ok:true,
data:{
name:"Shaila padache",
city:"Bangalore",
},
});
}
else {
reject ({
ok:false,
data:"Error while accessing the data",
 });
}
});
return promise;

var promiseObj=createPromise(false);
promiseObj
.then(function(res){
console.log("resolved",res);
})
.catch(function(error){
console.log("Error",error)
});
*/

// Async await
function crPromise(){
    return new promise(function(resolve,reject){
    resolve({
    data:[{name:"N1"},{name:"N2"}],
        });
    });
}
async function handlePromise(){
var data=await crPromise();
console.log(data);
}
handlePromise();