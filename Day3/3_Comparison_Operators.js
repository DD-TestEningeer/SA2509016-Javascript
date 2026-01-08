// Comparison Operators
// Operator	Meaning	Example	Result
// ==	Equal to (value only)	5 == '5'	true

let flag1 = true;
let flag2 = false;
console.log(flag1==flag2)


let num1 = 10;
let num2 = 5;
console.log(num1==num2);

let username1 = "DD";  // javascript is case sensitive lang
let username2 = "dd";
console.log(username1==username2);



// ===	Strict equal (value+type)	5 === '5'	false

let stringValue = "123"; // string
let numberValue = 123; // number
console.log("===	Strict equal (value+type)");
console.log(stringValue===numberValue)


// !=	Not equal (value only)	5 != 3	true

let num3 = 10;
let num4 = 20;

console.log(num3!=num4); // true



// !==	Strict not equal	5 !== '5'	true
 stringValue = "123"; // string
 numberValue = 124; // number

 console.log(stringValue!==numberValue);


// >	Greater than	10 > 5	true

console.log(11>5) // true
// <	Less than	10 < 5	false

console.log(11<5) // false

// >=	Greater than or equal	10 >= 10	true
console.log(11>=5) // true


// <=	Less than or equal	5 <= 3	false

console.log(11<=5) // false