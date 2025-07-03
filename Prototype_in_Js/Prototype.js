// if we give any functionality to Object than it can be accessible to all Arrays, Strings , functions, etc
// because they are passing through with the Object i e all of them are object at the end

let myHeroes = ["thor" , "spiderman"]

const myObj = {
    thor: "hammer",
    spiderman: "sling",

    spiderPower: function(){
        console.log(`Spiderman Power: ${this.spiderman}`);
        
    }
}

myObj.spiderPower()

Object.prototype.sayYash = function(){
    console.log(`Hello Yash`);
}

myObj.sayYash()
myHeroes.sayYash()


// If we given any functionality to Array but it cannot be accessible by the Object
// Array.prototype.yashu = function(){
//     console.log(`Yashu is present`);
// }
// myHeroes.yashu()

// myObj.yashu()


// inheritance in Object

const User = {
    username: "chai",
    email: "chai@google.com"
}

const TeacherSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    // __proto__: TeacherSupport
}

// TASupport.__proto__ = TeacherSupport

Object.setPrototypeOf(TASupport , User)

console.log(TASupport.email);
console.log(TASupport.fullTime);


let myName = "Yash       "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is ${this.trim().length}`);
}

myName.trueLength()
"Yash Lakhwani      ".trueLength()
"chai      ".trueLength()