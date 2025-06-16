// ["" , "" , ""]

// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World"

for (const greet of greetings) {
    // console.log(greet);
}


// Maps => same as object but have unique value 

const map = new Map();

map.set('In' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

for (const [key,value] of map) {
    // console.log(key , ":- ", value);
}


const obj = {
    game1: "PS5",
    game2: "Spiderman",
    game3: "Vice City"
}


// Here , object is not iterable 
// object is not iterate by for-of loop 
// for object we use for-in loop

for (const [key,value] of obj) {
    console.log(key , value);
    
}
