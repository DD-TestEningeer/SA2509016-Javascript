

// Non-primitive data types 

const { type } = require("node:os")

// 1)  Objects 

// create object for the Employee class in java 
// Employee emp = new Employee();

let emp = {} // empty 

emp = {id : 12, role : "QA", name : "DD"}
console.log(typeof(emp)) // object

console.log(emp)

let testUser = {name : "Admin", password : "admin123", url : "www.google.com"}
console.log(typeof(testUser))
console.log(testUser)


// 2) Array 

let myArray = [11, 22, 33]
console.log(typeof(myArray)) // object 
console.log(myArray)


// 3) Function 

let myFunction = function printData(){

    let testData = "Test123";
    console.log("The data is : " +testData )
}

console.log(typeof(myFunction)) // function
myFunction()



let fun2 = function greet(){

    // function body 
    // coding/logic 
}
console.log(typeof(fun2)) // function

fun2() // we can the function 
greet() // we can directly call by function name2