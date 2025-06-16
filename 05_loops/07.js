// reduce  => used for performin operation with accumulator and the current value
// we have to give the accumulator value as first default value


const nums = [1,2,3]

// myTotal = nums.reduce(function(acc,currVal)  {
//     console.log(`${acc} , ${currVal}`);
    
//         return acc + currVal
// },0)

myTotal = nums.reduce((acc,curr) => (acc + curr),0)
console.log(myTotal);

shoppingCart = [
    {
        courseName: "js course",
        price: 2999
    },
    {
        courseName: "data science course",
        price: 3999
    },
    {
        courseName: "mobile-dev course",
        price: 4999
    },

]

let myCart = shoppingCart.reduce((acc,item) => (acc + item.price),0)
console.log(myCart);



