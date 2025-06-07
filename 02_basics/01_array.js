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

// console.log( "A " , myArr2);

const myN1 = myArr2.slice(1,3)
// console.log(myN1);
// console.log( "B " , myArr2);

const myN2 = myArr2.splice(1,3)
// console.log(myN2);
// console.log( "C " , myArr2);


const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["batman","flash","superman"]

// marvel_heros.push(dc_heros) // adds the array within the array and chamges occur in original array
// console.log(marvel_heros);

all_heros = marvel_heros.concat(dc_heros) // adds the elements in an array and returns the new array
// console.log(all_heros);

// spread 
all_new_heros = [...marvel_heros , ...dc_heros] // same as concat
// console.log(all_new_heros);

const new_arr = [1,2,3,[4,5],[6,7,8],9,[10,[11]],12, [13,14]]
// console.log(new_arr)
// console.log(new_arr.flat(Infinity))


console.log(new_arr.includes("Yash"));
console.log(Array.isArray("Yash"));
console.log(Array.from("YashLakhwani"));

console.log(Array.from({name : "Yash"})); // returns empty array if obeject is given in key-value pairs

console.log(Array.of(1,2,3,"Yash"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

