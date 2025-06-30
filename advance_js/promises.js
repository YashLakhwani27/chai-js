// Promise is an eventual completion or the failure of the async task

const promiseOne = new Promise(function(resolve , reject){
    // Do an Async task
    // Crypthography , DB Calls , Network

   setTimeout(function(){
    // let sum = 2 + 2;
    console.log("Async task is completed");
    resolve()
   },1000)
})

promiseOne.then(function(e){
    console.log("Promise One consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is completed");
        resolve()
    },1000)
}).then(function(){
    console.log("Promise Two is consumed");
})

const promiseThree = new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log("Async task 3 is completed");
            resolve({user: "Yash Lakhwani" , email: "yash@google.com"})
        },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        
        if(!error){
            resolve({username: "Yash Lakhwani" , email: "yash@google.com" , isLoggedIn: true})
        }
        else{
            reject('Error: Something went wrong!')
        }
    })
},1000)

promiseFour.then(function(user){
    console.log(user);   
    return user.username
})
.then(function(username){
    console.log(username);
    
})
.catch(function(error){
    console.log(error);  
})
.finally(function(){
    console.log("Promise either be resolved or reject");
    
})


// By async , await

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;

        if(!error){
            resolve({username: "javascript" , email: "js@chai.com" , password: 123})
        }
        else{
            reject('Error: Something went wrong!')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response =  await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log("e: " , error);
        
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
        
//         const data = response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("e: ",error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchaudhary')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data); 
})
.catch(function(error){
    console.log(error);
})