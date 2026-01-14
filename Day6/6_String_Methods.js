
        //    0 1 2 3 4 5 6 7 8 9 ..........length-1
let str = "Welcome to QA Automation";


// charAt()	           Returns the character at the specified index.

console.log(str.charAt(0));


// concat()	           Joins two or more strings.

let str2 = str.concat("Hello");
console.log(str2);


// replace()	            Replace a string with another string.
str3 = str.replace("Welcome", "Hello");

console.log(str3);
// split()	            Converts the string to an array of strings.
let arr = str.split();

// toLowerCase()	Returns the passed string in lowercase.
str.toLocaleLowerCase();

// toUpperCase()	Returns the passed string in uppercase.
str.toUpperCase();
// trim()	            Removes whitespace from the strings.
str.trim();

// includes()	            Searches for a string and returns a boolean value.

console.log(str.includes("test"))

