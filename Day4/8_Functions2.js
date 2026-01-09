
// getUsername()



function getUsername(){
    let username = "Admin";

    return username;

}


let dataUser= getUsername();

console.log(dataUser);



///////////////////////////////////////////

// getRandomEmail Id 

function getRandomEmail(){

    const num = Math.floor(100000 + Math.random() * 900000);

    let email = "demo"+num + "@gmail.com";

    return email;
}


let emailData = getRandomEmail();

console.log(emailData);


// Write a function to calculate the square of given number 

let num = 10;

function getSquare(givenNumber){

    let result = givenNumber*givenNumber;

    console.log("The square of given number : " +  result );
}

getSquare(num);



////////////////////////////


// write a function to calculate the cube of given number 

// num = 3 => 27 => 3*3*3 => num**3


let num2 = 3;

function calculateCube(givenNum){

    let result = givenNum*givenNum*givenNum;

    return result;

}

let cube = calculateCube(num2)

console.log("The cube of given number is : " + cube);