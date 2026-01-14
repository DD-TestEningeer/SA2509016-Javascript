

// Arrays in Javascript 

let num1 = [11, 22, 33];
let num2 = [44, 55, 66];

let num3 = [num1, num2];

let len1 = num3[0].length; // 3
// let len1 = num1.length;

let len2 = num3[1].length; // 3
// let len2 = num2.length;


let len3 = num3.length; // 2 

// 11, 22, 33 
// 44, 55, 66

// How many rows ? 2
// How many columns ? 3

// console.log(num3[row][col])

// 1st for loop => 2 times 
// 2nd for loop => 3 times 0 1 2

                  //index1<=len3-1; len3 = 2

                    // 0<2 , 1<2 , 2<2
for(let index1 = 0; index1<len3; index1++){ // iterating over the rows => 2

                      // 0<3  1<3  2<3  3<3
  for(let index2 = 0; index2<len1 ; index2++){ // 3 times => 0 1 2 => columns

    console.log(num3[index1][index2]);

  }


}