const accountId = 144311
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // gives undefined 

/*

use the let mostly to define 
because issue in the Scope(if-else, loops , { }) using the var

*/

// accountId = 1221 Not allowed
accountEmail = "ylyl@gmail.com"
accountPassword = "12231"
accountCity = "Delhi"

// console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])



/*
 Datatypes

 Number
 bigint
 string
 boolean
 null => standalone value ------------> consider as object type
 undefined
 symbol => unique

*/

// Object

console.log(typeof 4);
console.log(typeof null); // -------------> object type
console.log(typeof undefined); // ----------> undefined type
