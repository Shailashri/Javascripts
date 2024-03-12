let fruits=["mango", "apple", "banana", "cherry"]
// to convert array to string we have two methods called toString() and join()
console.log(fruits.toString());
console.log(fruits.join("*"));

// pop() removes the last element

fruits=["mango", "apple", "banana", "cherry"]
console.log(fruits.pop());
console.log(fruits);


//push() adds new element at the end of the array
fruits=["mango", "apple", "banana", "cherry"];
console.log(fruits.push("pinaapple")); //5
console.log(fruits);

//shift() removes first array elment and shift all other elements to the lower index
fruits=["mango", "apple", "banana", "cherry"];
console.log(fruits.shift());
console.log(fruits);

// unshift() adds new element to the first of the array
fruits=["apple", "banana", "cherry"];
console.log(fruits.unshift("lemon"));
console.log(fruits);

// delete keyword is used to delete the elements
fruits=["mango", "apple", "banana", "cherry"];
delete fruits[1];
console.log(fruits);

//concat() joining or merging two or more arrays
let arr1= [1,2,3];
let arr2= ["a", "b", "c"];
console.log(arr1.concat(arr2));
let arr3= ["x", "y", "z"];
let arr4= [4,5,6];
console.log(arr1.concat(arr2,arr3,arr4));

// slice() get some portion of the array
fruits=["mango", "apple", "banana", "cherry"];
console.log(fruits.slice(1));
console.log(fruits.slice(2));

// sort() sort in ascending order or alphabetic order
fruits=["mango", "apple", "banana", "cherry", "lemon"];
console.log(fruits.sort());

let num=[100,400,700,20,500,200,900];
console.log(num.sort());

// reverse() it will reverse the array
fruits=["mango", "apple", "banana", "cherry", "lemon"];
console.log(fruits.reverse());

