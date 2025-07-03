class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        return `Username: ${this.username}`
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        return `Teacher ${this.username} can add course`
    }
}

const chai = new User("chai")
const tea = new Teacher("chai","chai@google.com",123)

console.log(chai.logMe())
console.log(tea.logMe());

// console.log(chai.addCourse());

console.log(tea.addCourse());

console.log(tea instanceof User);


