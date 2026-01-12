

// JavaScript Constructor Function
function Student1(){
    this.name = "Demo",
    this.rollNo = 22
}

const stdObj1 = new Student1();

console.log(stdObj1);
console.log(stdObj1.name);
console.log(stdObj1.rollNo);

function Student2(stdName){
    this.name = stdName,
    this.rollNo = 22
}

const stdObj = new Student2("DD");

console.log(stdObj);
console.log(stdObj.name);
console.log(stdObj.rollNo);