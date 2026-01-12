

// Assignment 1: Factorial Calculator

// Task: Write a function to calculate the factorial of a given number.

// factorial of 4 => 4*3*2*1 => 24


function calculateFactorial(givenNumber){ // 4

    let result = 1 ;  // result = 1

    // O factorial we need to handle it as edge case
    // negative numbers 

    if(givenNumber<0){

        return "The provided number is negative please check once";

    }

    // for loop  

                    // 4  // 4>=1
                    // 3  // 3>=1
                    // 2  // 2>=1
                    // 1  // 1>=1
                    // 0  // 0>=1 => false

    for(let index = givenNumber; index>=1; index-- ){

        result = result * index; // 1*4 => 4 
                                 // 4*3 =>12 
                                 // 12*2 => 24
                                 // 24*1 => 24
    }

        return result;

}

 let factNum = calculateFactorial(-11);

 console.log("The factorial of given number is : " + factNum);