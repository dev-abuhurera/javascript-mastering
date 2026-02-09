// what is this keyword

// /*

//     This refers to the current context ------ (1)

//     context ---- objects, variables in a given scope

// */

// const user = { // this refer to the existing referance to the context 

//     username: "ahsan",
//     savings: "1000",

//     welcomecall: function(){

//         console.log(`${this.username}, welcome to Scatch`)

//         console.log(this); // this is referencing to the whole context that is existing here
//     }

//     // It gave us this.username ----> like it is refering to the current context 
//     // At, this point the current context is the ----> given variables ----> [username], [savings], and the function [welcomecall()]

// }

// // console.log(user.welcomecall());
// // user.username = "ali";
// // console.log(user.welcomecall());

//  // this is concerned with the present context ====> 

// console.log(this); // now it is returning an empty array

// // in the browser it return a window object ===> with a lot of methods ----> this is refering to the window object in the browser


// function show() { // now what is this 

//   console.log(this);

// }

// // show();

// const show2 = function goShow(){

//     let name = "hurera";
//     console.log(this.name); // it is still undefined 
    
// }

// // show2()


// const arr = () => {

//     console.log(this);

// }


// arr();

// // arrow functions don't have there own this there own referance so they inherit from the surrounding lexical scope 

// const obj = {

//     name : "anaya",
//     age : 43,
//     id : arr()


// }

// obj.id;

// =========================================================================================================================================================================

//  How this keyword actually works ???


/*
    -> This in the Global Scope

*/

    // console.log(this); // This is Environment specific ===> In console of the browser it returns (((Window)))
    // In node js it will return something else  // similarly in some other environment it will return something else.....

    /*
        - (this) is that much context specific that ====>> it behave different in a [function, arrow function it is different, in nested function] it is different 
//     */

    

// /*
//     -> This in global space is a Global Object...

//     -> This inside a function where it is in the browser gives the window object 

// */


//  function x(){
//     console.log(this)
//  }

// //  x();

//  // In nodejs this object in the function represent the global object 


 
// // -------------------------------------------------------------------This is strict and non strict mode---------------------------------------------------------------------------------

// /*

//  ---> "This in Strict mode ===> and in the function ====> undefined"

//  ---> non strict mode ===> same window object 

//  because of the non-strict mode ====> this substitution (Js replace the value of this with the window object in non-strict mode)

// */


// function x(){

//     "use strict";
//     console.log(this) // so it doesnot accidently change the global object 

// }

// // x();

// // window.x();


// const obj = {

//     a : 10,
//     b : function x() {

//     console.log(this.a)    // This represent the current object and the a is the value 10.

//     }
// }

// obj.b(); // now this is representing the current function over here 


// // ---------------------------------------------- |Call | Apply | Bind| ---------------------------------------------------


// const student = {

//     id : 1,
//     name: "Abuhurera",
//     printName: function pN(){
//         console.log(this.name);
//     }

// }

// const student2 = {

//     id: 2,
//     name: "Abuzar"

// }

// student.printName();
// student.printName.call(student2); // so here we changed the referance of this to the second object 


const person = {

    firstName : "Joe",
    lastName : "Marty",
    fullName : function (){
        return this.firstName + " " + this.lastName;
    }

}

const name = person.fullName(); // Now here we have extracted the method and stored in the name variable 
console.log(name); // Joe marty

const name2 = person.fullName.call(person); // Now here we have extracted the method and stored in the name variable 
console.log(name2); // undefined undefined

// context matters in the functions and objects and there we have the scope 

/*
    Arrow Function don't have its own 'This' =====>> it basically have the context of it's lexical scope
*/



// const obj1 = {

//     name : "Ali",
//     fun : () => {
//         console.log(this) // this retains the enclosing lexical environment
//     }

// }

// now here this is not pointing towards the object but window object


const outer = {

    name : "ahmad",
    
    func : () => {
        
        const y = () => {
            console.log(this)
        }

        y();
    }
    
}

console.log(outer.func()); 



//    =============================================================================================================================================================