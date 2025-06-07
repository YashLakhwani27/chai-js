// singleton means it has only one instance

//  singleton is created when object is created through constructor 
// singleton is not created when object is creaated with object literals like using normal variable type (having multiple instances)

const mySym = Symbol("key1")

const JSUser = { // by default compiler take key as a string like name , age ,etc
    name : "Yash",
    [mySym] : "mykey1", // use it as [mySym] otherwise it treated as string 
    email : "yash@google.com",
    "full_name" : "Yash Lakhwani",
    age : 20,
    isLoggedIn : false,
    location : "Jaipur",
    lastLogin : ["Monday", "Saturday"]
}

// console.log(JSUser.email);
// // console.log(JSUser[email]); // gives an error
// console.log(JSUser["email"]);

// console.log(JSUser.full_name);
// console.log(JSUser["full_name"]);

// console.log(JSUser.mySym);
// console.log( typeof JSUser.mySym);// treat it has string

// console.log(JSUser[mySym]); 
// console.log( typeof JSUser[mySym]);// treat it has string

// console.log(JSUser);

// // Object.freeze(JSUser)
// JSUser.email = "yash@microsoft.com"

// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS USer");
}

JSUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(JSUser.greeting);
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());












