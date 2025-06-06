let date = new Date();

// console.log(date);
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(typeof date);

// let myNewDate = new Date(2025,6,7)
let myNewDate = new Date(2025,6,7,5 ,3)

// console.log(myNewDate.toLocaleString());

let timeStamp =  Date.now(); // gives time in milliseconds

console.log(timeStamp);
console.log(myNewDate.getTime());

// for converting time in seconds

console.log(Math.floor(Date.now() / 1000));
console.log(Math.floor(timeStamp / 1000));

let newDate = new Date();

console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());


console.log(newDate.toLocaleString('default' , {
    weekday : "long"
}));



