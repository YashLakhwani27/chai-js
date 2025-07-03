// In JS , everything is Object
// Array ----------> Object , String ---------> Object , function ---------> Object 
// Js is a prototypical inheritance i e js does n't ends up it try to find again and again until it found null 
// move everything to object (Arrays,Strings,functions) and this moving up to up  is called prototypical inheritance


function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2;

// Here , we can say that functions are also objects because we can access the .property with functions similar to Objects
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);



// adding our own functionality

function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`Score: ${this.score}`);
    
}

// new is used to make the new instance 
const chai = new createUser("chai" , 25)
const tea = new createUser("tea" , 250)
chai.increment()
console.log(chai.printMe());

/*
behind the scenes of new keyword

// A newly created object is created from constructor function
// A newly created object is linked wih constructor function i e it is linked with its prototype to
 access all iths properties and methods that is created or present

 // constructor function is called with specified arguments  
 if no explicit arguments is given js takes the return value in newly created object
 
 //  js does not return non-primitive datatypes(Arrays.Strings,etc) as return object
 // than it return the new created object

*/

