


// javascript  Object
const emp = {empName: "DD", empID : 22};

console.log(emp.empName);

emp.empName = "QA";


// Sever side => sending data which is in the form of string 

const emp2 = '{"empName": "DD", "empID" : 22}';

const obj = JSON.parse(emp2)

console.log(typeof(emp2))

console.log(emp2)

console.log(typeof(obj))

console.log(obj)
console.log(obj.empID)

