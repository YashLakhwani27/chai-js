// Array Non- Primitive Datatypes typeof => object


const myArr = [1,2,3,4,true,"yash"]
const heros = ["shaktiman" , "naagraj"]

// console.log(myArr[0]);

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2);
// console.log(typeof myArr2);
// console.log(typeof myArr);


// Array methods

// console.log(myArr2.push(9));
// console.log(myArr2.push(10));
// console.log(myArr2);
// myArr2.pop()
// myArr2.pop()
// console.log(myArr2);

// myArr2.unshift(9) // insert element at start of the array
// myArr2.unshift(10)
// console.log(myArr2);


// myArr2.shift() // removes element at start from the array
// myArr2.shift()
// console.log(myArr2);

// console.log(myArr2.includes(2));
// console.log(myArr2.includes(9));


// console.log(myArr2.indexOf(2));

const newArr = myArr2.join()

// console.log(newArr);
// console.log(typeof newArr);

console.log( "A " , myArr2);

const myN1 = myArr2.slice(1,3)
console.log(myN1);
console.log( "B " , myArr2);

const myN2 = myArr2.splice(1,3)
console.log(myN2);
console.log( "C " , myArr2);


