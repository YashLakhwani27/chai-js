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

// console.log(JSUser.greeting);
// console.log(JSUser.greeting());
// console.log(JSUser.greetingTwo());

const tinderUser = new Object()
console.log(tinderUser); // give empty object 

const regularUser = {
    name: "Sammy",
    id: "sammy@google.com",
    isLoggedIn: false
}

const User = {
    email : "yash@google.com",
    full_name:{
        userFullName:{
            firstName : "Yash",
            lastName : "Lakhwani"
        }
    },
    age : 20
}

// console.log(User.full_name.userFullName.firstName);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}

// const obj3 = Object.assign({} , obj1 , obj2) // returns a change in  first value so we give new object as target otherwise chamges occur in obj1
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

// console.log(Object.hasOwnProperty('isLoggedIn'));

// objects de-structure

const course = {
    coureseName : "js in hindi",
    price : 999,
    courseStudent : "Yash Lakhwani"
}

console.log(course.courseStudent);

const {courseStudent : student} = course
console.log(student);

// const navbar = ({company}) => {

// }
// navbar(company = "yash") // Syntax in React




