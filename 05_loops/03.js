// for-in loop (Used for giving key through which accessing elements)
// Object mostly used it

const obj = {
    js: "javascript",
    py: "Python",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in obj) {
    console.log(`${key} is shortcut for ${obj[key]}`);
}

programming = ["js", "py","rb","java"]



// Here , for-in loop gives the represents the index of the array elements as the key 
for (const key in programming ){
    // console.log(key);
    console.log(`${key} :- ${programming[key]}`);
    
}

const map = new Map();

map.set('In' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")


// Here it gives nothing because for-in loop map are not iterable
for (const key in map) {
    console.log(key);

}

