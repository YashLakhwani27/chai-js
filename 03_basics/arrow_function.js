const user = {
    username: "Yash",
    age: 20,
    price: 999,
    welcomeUser: function(){
        console.log(`${this.username} , Welcome to this course`); // this is used to refer the current context
        console.log(this);
        
        
    }
}

// console.log(user.welcomeUser());
// user.username = "Sam"
// console.log(user.welcomeUser());

console.log(this); // in node the global object is {} 
                   // in browser the global object is Window

// function chai() {
//     let username ="Yash"
//     // console.log(this.username); // this only works in object
//     // console.log(username); 
//     // console.log(this);
    
// }                   

// chai()

const chai = () => {
    const username = "Yash"
    // console.log(this.username); // same as normal function
    console.log(this);// same as node
    
    
}
chai()


// Types of defining arrow functions

// const add = (num1,num2) => {
//     return num1 + num2
// }

// const add = (num1,num2) => (num1+num2)
const add = (num1,num2) => num1+num2


const name = (num1,num2) => ({username : "Yash"}) // return an object


console.log(name());



// Immediatealy Invoked Function Expressions (IIFE)

(function chai(){
    console.log("DB CONNECTED");
    
})();

(() => {
    console.log("DB CONNECTED 2");
})();

(aurcode = (name) => {
    console.log(`DB CONNECTED ${name}`);
})("Yash")


