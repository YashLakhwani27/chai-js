// Object Literal
const user1 = {
    username: "Yash Lakhwani",
    signIn: true,
    countLogin: 12,

    getUserDetails: function(){
        console.log(this);
        
        console.log(`Username: ${this.username}`);
        
    }
}
const user2 = {
    username: "Yash Lakhwani",
    signIn: true,
    countLogin: 12,

    getUserDetails: function(){
        console.log(this);
        
        console.log(`Username: ${this.username}`);
        
    }
}

console.log(this);

console.log(user1.username);
console.log(user1.getUserDetails());

// if we want to create any object we have to do this work again so , we use the constructor and make the new instances

function User(username ,loginCount , isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoisLoggedIn =isLoggedIn

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
        
    }
    return this;
}

const userOne = new User("Yash" , 11 , true)
const userTwo = new User("chaiAurCode" , 12 , true)

console.log(userOne);
console.log(userTwo);
console.log(userTwo.constructor);
console.log(userTwo.greeting());





