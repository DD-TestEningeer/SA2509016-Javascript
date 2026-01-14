
// JavaScript Multidimensional Array

let arr1 = [11, 22, 33];
let arr2 = [44, 55, 66];

let arr3 = [arr1, arr2]; // Multidimensional Array

console.log(arr3);

// Accessing array elements using index 

let arr4 = [11, 22, 33];
       //   0   1    2
console.log(arr4);

// 0 index value 

console.log(arr4[0]);
console.log(arr4[1]);
console.log(arr4[2]);
console.log(arr4[3]); // undefined


// loops 

let len = arr4.length;

for(index=0; index<= len - 1; index++){

    console.log(arr4[index]);


}


// 1 D array 

let arr5 = [11, 22, 33]; // 0  1  2

arr5[0] = 55;

console.log(arr5);




// Multi-D Array

let num1 = [1 ,2 , 3]; // 0 1 2 // columns 
let num2 = [4, 5, 6];  

let num3 = [num1, num2]; // 0 1



console.log(num3);
console.log(num3[0])
console.log(num3[1])

// 0,0 0,1 0,2
// 1,0 1,1 1,2
// access each value separately 
console.log(num3[0][0]) // 0 0 index
console.log(num3[0][1]) 
console.log(num3[0][2]) 

console.log(num3[1][0]) // 0 0 index
console.log(num3[1][1]) 
console.log(num3[1][2]) 


// loops

let len1 = num1.length; // rows
let len2 = num2.length; // rows
let len3 = num3.length; // columns // 2

console.log("Iterating over the 2d array");

for(let i = 0; i<=len1-1; i++){ // i=0  0<=3-1

    for(let j = 0; j<=len3; j++){ // j=0  0<= 2  // j=1 1<=2 // j=2 2<=2

        console.log(num3[i][j]);
    }

}




// 

let num4 = [ [11, 22], [33, 44] ];

let len4 = num4[0].length;
let len5 = num4[1].length;