let a = 1
const b = 2
var c = 3

if (true){
    let a = 100
    const b = 200
    var c = 300
    console.log("INNER:" ,a);
    
}

// console.log(a);
// console.log(b);
// console.log(c); ----------> Here var change the value inside the scope that's the issue with var


console.log(a);

// the global scope in node is different in node and in browser when we check 
// in bowser Windows is the global scope


