// what is a block?

{
    // This is a block (a.k.a) -->> Compound Statement ---group multiple js statements
    var a = 10;
    console.log(a);
}

// block is actually used to write and run mulitple statements where the js engine expects only one statement ---->>

/*
    ---> It is very important to understand that block is one statement that group together multiple statements --> so it actually be used in the places where js actullay wants only one statement
*/

if(true){ // if statements ---> expect only one statements after that 

}

if(true) true; // This is the perfectly write syntax

if(true){
    var a = 10;
    console.log(a);
}

// Now here more than one statements are able to be executed in the place where js engine expect only one statement 


// this is the true use of a block 

/*
                                                                What is a block scope??

                    ------>>>   Block scoping is the block in which all the variables and functions are accessable in the block                                       

*/

// {
//     var d = 100;
//     let b = 1000;
//     const c = 10000;
//     console.log(d);
//     console.log(b);
//     console.log(c);
// }

// console.log(d); // Now the d is accessable in the global space 
// console.log(b);
// console.log(c);


//  So, when we check the dev console ---> and when we get to know the block and all its scoping we find out that this block has its own scope created in the memory ---> and the let and const ----> they are hoisted in that memory space 


/*


                                            That is where we say that ----- LET & CONST ----- are block scoped.

                    now the let and const ---> hoisted ---> in the block scope ===> while the var is hoisted in the global scope

            So, it means that ---> var in accessable out of the block scope and even inside the block scope because it exist inside the global scope while ---> 
        let and const are in the block scope and are not existed in the global scope so are not accessable in the global scope and is only be accessable inside the block.
        
        
                                                                                                                                                                
*/

// Shadowing in Javascript 


var d = 10;
console.log(d); // now we know that both the (var d) existed in the global memory space
{
    var d = 100;
    let b = 1000;
    const c = 10000;
    console.log(d);
    console.log(b);
    console.log(c);
}
console.log(d); // now here we can see that the variable --- (d) --- inside the block have also updated the value outside where the var d was 10

// So it is called --as the block variable ((SHADOWS)) the outer variable.

// Now the value of d is 100 --> either the variable d was declared in the global scope

/*

    ---> Shadowing is when we have the same declarations of the variables ----> in case of var pointing to the same memory locations and then have the different values to be printed 


                                    But, this is not the case in the point where we have the let, const


*/

let b = 100;

{
    var d = 100;
    let b = 1000;
    const c = 10000;
    console.log(d);
    console.log(b);
    console.log(c);
}

console.log(b);


// Illegal shadowing 


// let k = 10;

// {
//     var k = 10; // It is not allowed to shadow a let variable with the var 
// }

//                  ------> This is the illegal way to shadow 


var i = 10;

{
    let i = 10; // It is acceptable type of shadowing 
}


// Var is function scoped ---->>> 

let u = 100; // so it is write shadowing

function extra(){ // now var is in its scope 
    var u = 100;
    return u;
}

console.log("---------");
console.log(extra()); 
console.log(u); // so yes this is the legal shadowing 


//-----------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------------------Scoping is also the lexical-------------------------------------------------------------


const z = 20;

{
    // const z = 100;
    {
        // const z = 1000;
        console.log(z); // now it gives 1000
        // In the second case it gaves 100
        // Now, it gives 20
        
    }
}

// So blocks are actually lexical - So, it means they are also been looked into there parents memory if they are not in there own scope.


/*

    - First of all ---> js engine will see the (z) variable in its own engine

    - Then, if the z is not present in the memory space of its block then it will be seen in the memory space of its lexical parent --> then again and then the lexical space of the global object 

    - So, it also gives the scope chaining

*/


