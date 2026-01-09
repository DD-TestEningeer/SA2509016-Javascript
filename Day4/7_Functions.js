

// Functions in Javascript 

// function declaration/definition 
function printFullName(){

    console.log("Demo User");
}


// call the function 
 printFullName();



 //////////////////////////////////


 function getUsername(){
    console.log("The username is : DemoUser" );
 }

  getUsername();


// parameterized function  

function getPassword(password){

console.log("The password is : " + password);

}


getPassword("Test123");


//////////////////////////////////




let username = "DemoUser";
let password = "Test12345";

function getTestData(){

    console.log("The username is : " + username);
    console.log("The password is : " + password);
}

 getTestData();



 /////////////

 function getTestData2(user, pass){

    console.log("The username is : " + user);
    console.log("The password is : " + pass);
}

 getTestData2("TestUser", "Test12");


 /// return type 


 function getID(){
    console.log("This is getId function");
    let id = 100;

    return id;
 }


 let value = getID();

 console("The id value is : " + value)