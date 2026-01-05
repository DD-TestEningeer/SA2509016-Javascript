// How to define variable => cost , var , let


// 1) const keyword => constant variable 
// final String url = "www.google.com";  // java code
const url = "https://opensource-demo.orangehrmlive.com/";

// url = "www.google.com"; // value change not possible

// How to print url value to console 
// System.out.println(url); => java code 
console.log(url);


// 2) var keyword =>> Variable values will change

// Valid Test Scenario 
var username = "Admin";
var password = "admin123";

console.log("Before value change ");

console.log(username);
console.log(password);

// InValid Test Scenario 
 username = "test";
 password = "test";

 console.log("After value change ");
console.log(username);
console.log(password);




// 3) let => If value is going to change then we will be using let keyword

    // const baseUrl = "https://opensource-demo.orangehrmlive.com/";

    // assume developer not going to change the reset url
    const resetUrl = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode";

    console.log(resetUrl);

    let userName = "Admin";

    // before change 
       console.log(userName);

       userName = "TestUser";

       // after change

          console.log(userName);


       


 // var vs let 
  
//  console.log(username)    // accessing the value
//  var username = "Admin" ; // declaration 



 console.log(password)    // accessing the value
 let password = "admin123" ; // declaration 

