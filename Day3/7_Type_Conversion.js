

// Type conversion in Javascript 

// 1) Implicit Conversion => Automatically

// WebDriver driver = new ChromeDriver()
// ChromeDriver driver = new ChromeDriver()
// String => Int 
// Int => String

let number = 10; // Number
let str = "Demo"; // String

let resultVar = number + str; // 10Demo
console.log(resultVar)
console.log(typeof(resultVar))

// 2) Explicit Conversion => Manually

let numberString = "123"; // string
console.log(typeof(numberString));

let numberVar = Number(numberString)
console.log(typeof(numberVar)); // Number



// ==================================================


// web-element on webpage title as ==> "Hello User"

// let title = element.getText(); // string 

// web-element2 on webpage contact No. as ==> "900000000"

// let contNo = element.getText();  string 

// let numCont = Numeric(contNo) // Number 


let stringData = "false"; // string 

let flag = Boolean(stringData)  // boolean

console.log(typeof(flag))


