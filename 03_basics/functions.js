function printUserName(username){
    if(!username){
        return
    }
    return `${username}, Welcome to js course`
}
// console.log(printUserName("Yash"))
// console.log(printUserName())


function printName( username = "Yash Lakhwani"){
    return `${username} , Welcome to js course`
}

// console.log(printName("Yash"));
// console.log(printName());

function numbers(...num1){ // Here num1 act as a rest/spread operator which holds all elements in array form
    return num1
}

// console.log(numbers(200,300,400,500));

const myObj = {
    user: "Yash",
    age: 20,
    price: 999
}

function objectDetail(myObj) {
    return `Username is ${myObj.user} and price is ${myObj.price}`
}

// console.log(objectDetail(myObj));
//  console.log(objectDetail({
//     user: "Yash Lakhwani",
//     price: 999
//  }));

const myArr = [200,300,400,500]

function arrayDetails(myArr) {
    return myArr[1]
}
console.log(arrayDetails(myArr));
console.log(arrayDetails(["Yash","Yash Lakhwani", 1,2,3,4,5]));






