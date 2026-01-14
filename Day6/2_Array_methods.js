// Array Methods

let numArray = [11 , 22 , 33]; 

// length of array = > 3
// index => 0 , 1, 2   last index = array_length - 1

let lengthOfArray = numArray.length;
console.log("The length of given array : " + lengthOfArray);

// Adding element to the array

// Using the push() Method => element will be added to the end of array
numArray.push(44);
console.log(numArray)

// Using the unshift() Method => add element to the start of array

numArray.unshift(5);
console.log(numArray) // [ 5, 11, 22, 33, 44 ]

// 1. Remove the last element using pop().
numArray.pop()
console.log(numArray) // [ 5, 11, 22, 33 ]

// 2. Remove the first element using shift().
numArray.shift();
console.log(numArray)

// splice() - We can remove an element from any specified index of an array using the splice() method.


let arr2 = [11, 22, 33, 44];  // 4 elements 
         // 0 , 1 , 2 , 3

       // remove the value 33 
       // starting index , how many elements to remove
       arr2.splice(2, 1 )

       console.log(arr2);