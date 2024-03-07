var mydata= [
    {
        Type:"Flower",
        List:["rose","habbiscus","sunflower"],
    },
    {
        Type:"Fruit",
        List:["banana","apple","orange"],
    } 
];
var data=mydata [0].List[0];
console.log(data);

// Arrow function
var shaila= function()
{
    return Date();
}; 
var shaila=()=>Date();
console.log(Date())

var concat=(arr1,arr2,arr3)=>arr1.concat(arr2,arr3);
console.log(concat([1,2], [3,4,5], [6,7,8]));

//rest operator

const sum=(function()
{
    return function sum(...args){
        return args.reduce((a,b) => a+b,0)
    }
}) ();
console.log(sum(1,2,3));