// for-each loop 
// gives a callback function for accessing elements

const coding = ["js", "py","java","ruby","swift"]


// Here in for-each loop we give the function and parameters for accessing elements 
// we doesn't give the name of the functions


coding.forEach(function (key) {
    // console.log(key);
})

coding.forEach( (key) => {
        // console.log(key);
        
} )


function printMe(item) {
    console.log(item);
    
}

// coding.forEach(printMe)


coding.forEach( (key,index,arr) => {
    // console.log(key , index , arr);
    
})


// [{},{},{} ] => for this type for-each loop is mostly used 

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "Python",
        languageFile: "py"
    },
    {
        languageName: "Ruby",
        languageFile: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(`Language name is ${item.languageName} and file name is ${item.languageFile}`);
    
})
