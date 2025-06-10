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


// console.log(a);

// the global scope in node is different in node and in browser when we check 
// in bowser Windows is the global scope


// Scope Level

function one() {

   const username = "Yash"

    function two() {
        console.log(username);
        const website = "youtube"
        
    }
    // console.log(website)

    two()
}

one()

if(true){
    const username = "Yash"

    if(username === "Yash"){
        const website = " Youtube"
        console.log(username + website);
        
    }
    // console.log(website) // does not access due to Scope
}

// console.log(username); // does not access due to Scope



console.log(addOne(5)); // it can be call before defining the function i e upper of the function(a normal type function)
function addOne(num) {
    return num + 1
}

// console.log(addTwo(5)); // it cannot be call before defining the function i e upper of the function(a function that holds into a variable)
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5)); 


