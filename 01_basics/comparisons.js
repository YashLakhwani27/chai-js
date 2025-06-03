// console.log("2" > 1);
// console.log("02" > 1);
// console.log("000002" > 1); // treat as a number

// both equality checker and comparisons work differently 
// comparison operators(> ,< treat null as a number it is 0)
// console.log(null > 0);
// console.log(null == 0); // does not treat null as a number
// console.log(null >= 0); // gives true

// // undefined always gives false
// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// === operator always check the datatype also

console.log("2" == 2); // treat it as a number
console.log("2" === 2);





// Datatypes ----------> 2 types

// Primitive which stores and access by call by value
// Number, String, BingInt, Boolean, Symbol, null,undefined

// Non - Primitive which calls y reference 
// Arrays, Objects(written in curly brackets{}) , Functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const heros = ["yash", "lakhwani" , "yashu"]

let myObject = {
    name : "yash",
    age : "20",

} // stores is key-value pairs

let myFunction = function(){
    console.log("Hello world");
    
}
myFunction()

