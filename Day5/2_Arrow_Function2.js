


// 1) arrow function without return type without parameters


let fun1 = ()=>{

    console.log("Arrow function without return type without parameters");
}

fun1 ();


// 2) arrow function without return type with parameters


let fun2 = (username)=>{ // parameters

    console.log("Arrow function without return type with parameters : " + username);
}

fun2("TestUser"); // arguments


// 3) arrow function with return type without parameters


let fun3 = ()=>{ // no parameters

    console.log("Arrow function with return type without parameters : ");

    return "Success";
}

let result = fun3(); 

console.log(result)

// 4) arrow function with return type with parameters

let fun4 = (url)=> {

        let newURl = url + "endpoint";

        return newURl;
}

fun4("www.google.com");