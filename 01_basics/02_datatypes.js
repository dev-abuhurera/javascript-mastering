
let name = "hurera" // string 
let age = 14 // number
let isLoggedIn = true // boolean
let state = null // Empty

// primitive 

/* 

number, string, boolean, undefined, null(datatype + standalone value)
undefined => when no value is defined 
null => representation of an empty value
symbol

*/

//Non primitives

/*

Array -- Object 

*/
console.log(typeof age);
console.log(typeof null); // is an object
console.log(typeof undefined);

// -------------------------------------------------

// Why there are different value with type object???

// ---->>> As the object is a datatype in js 

const obj = {name : "abuhurera"}; 
 
console.log(typeof obj) // It is an object 


// So, what is means is that as the non primitive data types are created in the heap and are instances so these have the memory address stored in the stack variables thus it is the object in this sense


const arr = [10,20,30,40]; // Creating an array object

console.log(typeof arr);

// Thus non - primitives are all objects 

//Even the functions in the js are Objects ----


const newName = function displayName(){
    return  "abuhurera"
}

console.log(newName());

console.log(typeof newName()); // calling the function that is returning a string 

console.log(typeof newName); // function 

// function object 


//-----------------------------------------------------



