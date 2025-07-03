// static is used to make function not accessible to the User

class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `Username: ${this.username}`
    }

   static createId(){
        return `${this.username}123`
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `Teacher ${this.username} can add Course`
    }
}

const chai = new User("chai")

console.log(chai.logMe());
// console.log(chai.createId());

const Tea = new Teacher("tea","tea@google.com" ,123)

console.log(Tea.logMe())
console.log(Tea.addCourse())
// console.log(Tea.createId());

