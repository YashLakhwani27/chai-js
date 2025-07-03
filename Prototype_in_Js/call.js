// if there is another function in function then to call the inner function we use the call keyword 
// because only we execute the inner function than only refer is pass not called
// for this we use call with this keyword fr holding it's current execution context 
// because we know after execution of function it globla EC is deleted so, for holding it's EC we use  this with call keyword

function setUsername(username){
    this.username = username
    console.log("called");
}

function setDetails(username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const chai = new setDetails("chai" , "chai@google.com" , 123)
console.log(chai);
