// we can make objects by functions also , classes are just used for good code i e not mashup code 
// It's a syntacic sugar

class User{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@google.com",123)
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the scenes i e in previous time we do this

function createUser(username , email,password){
    this.username = username
    this.email = email
    this.password = password
}

createUser.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

createUser.prototype.changeUserName = function(){
        return `${this.username.toUpperCase()}`
}

const tea = new createUser("tea","tea@google.com",123)
console.log(tea.encryptPassword());
console.log(tea.changeUserName());
