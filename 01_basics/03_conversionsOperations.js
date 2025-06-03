let score = "33"
let score1 = "33abc"
// console.log(typeof score);


let numberInInt = Number(score)
let numberInInt2 = Number(score1)

// console.log(typeof numberInInt);
// console.log(numberInInt2); // ----------->Give NaN
// console.log(typeof numberInInt2); // --------> but type is converted in js

// console.log(typeof Boolean)

// 1 => true , 0 => false
// "" => false, "yash" => true

let ans = Boolean("yash")
// console.log(typeof ans)
// console.log(ans)

let num = 33

let res = String(num)

// console.log(res);
// console.log(typeof res);


// ************************* Operations **********************

let str1 = "hello"
let str2 = " yash"

console.log(str1  +  str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// this is due to ECMA in js opreations type perform in sequential way
console.log(1 + 2 + "2");
console.log(1 + "2" + "2"); 
console.log(1 + "2" + "2");
console.log(1 + "2" + 2);



