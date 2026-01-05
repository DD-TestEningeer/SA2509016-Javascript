


// Data types in javascript 

// 1) Primitive data types 

// string, number , bigint boolean, null, undefined, symbol 


// 1) String data type 

const url = "www.google.com";

let username = 'Admin';

// Using typeof() => to check the datatype of variable 

console.log("Datatype of url : " + typeof(url))
console.log("Datatype of username  : " + typeof(username))


// 2) Number 

let count = 0;
count = 1000;

console.log("Datatype of count  : " + typeof(count))

let myDecimal = 26.77;

console.log("Datatype of myDecimal  : " + typeof(myDecimal))

// 3) BigInt 

let bigNumber = 9007199254740991n;
console.log("Datatype of bigNumber  : " + typeof(bigNumber))

// 4) Boolean 

let statusVar = true;
console.log("Datatype of statusVar  : " + typeof(statusVar))

// 5) undefined 
let myName ;
console.log("Datatype of myName  : " + typeof(myName))

// 6) null

let driver = null;
console.log("Datatype of driver  : " + typeof(driver)) // object
console.log("Value of driver  : " + driver)

// Symbol

let id = Symbol("id");

console.log("Datatype of id  : " + typeof(id)) 
console.log(id)