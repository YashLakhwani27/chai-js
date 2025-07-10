// class based getter setter

// class User{
//     constructor(email,password){
//         this.email = email;
//         this.password = password
//     }

//     get password(){
//         return `${this._password}yash`
//     }
//     // if we use this then there is race between setter and constructor for setting the value for this we define new variable for overwriting this 
//     // and Maximum Call Stack size is exceed 
//     // set password(value){
//     //     this.password = value
//     // }
//     set password(value){
//         this._password = value
//     }

//     // for email

//     set email(value){
//         this._email = value
//     }
//     get email(){
//         return `${this._email}`.toUpperCase()
//     }
// }

// const chai = new User("chai@google.com" , "abc")
// console.log(chai.password);
// console.log(chai.email);




// function based getter and setter

// function User(email,password){
    
//     Object.defineProperty(this, "email",{
//         get: function(){
//             return `${this._email}`.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, "password",{
//         get: function(){
//             return `${this._password}`.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
//     this.email = email;
//     this.password = password;
// }

// const yash = new User("yash@google.com" , "abc")
// console.log(yash.email);
// console.log(yash.password);


// Object based getter or setter

const User = {
    _email: "y@yc.com",
    _password: "abc",

    get email(){
        return `${this._email}`.toUpperCase()
    },
    set email(value){
        this._email = value;
    },
    get password(){
        return `${this._password}yash`
    },
    set password(value){
        this._password = value;
    }

}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea.password);
