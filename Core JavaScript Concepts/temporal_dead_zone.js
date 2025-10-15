// Some important Questions:-


/* 

--->>  What is temporal dead Zone ?
--->>  Are the let and const declarations hoisted in js ?
--->>  Difference between the syntax error, referance error and type error ?



    -------->>>>   Fundamental:-     

        1. Let and const declarations are hoisted in Javascript but its hoisting is completely different from the hoisting of the 'Var' declarations

        2. Let and const ---> are in the temporal dead zone for the time being

        But, 

        What is temporal dead zone???


*/

            console.log(b); // Gave 'undefined' due to hoisting 
            // console.log(a); // This will give us error
            let a = 10;
            console.log(a); // Now it is accessable 
            var b = 100;


/*

    This is the main thing that we have to understand like why is logging the variable declared with let are giving error 

    Are they hoisted or not ????

    let find out ---->>> in the dev console 

*/


/*

    ---> This is what happens here ---(1)

        - When a variable is declared with var ---> it is assigned memory (hoisted) before execution ---> but it exist in the Global memory space and is accessable in the global memory environment 
        
        - In case of the let and const ---> they are also assigned memroy (hoisted) before the execution ---> but it don't exist in the Global memory space while it exists in the ---Script--- session ---- that is during the temporal dead zone and is not accessable until and unless it is not initiziled by some value 

                                                                                                                          --- Temporal dead Zone ---

        --->> Temporal dead zone is the time from the (hoisting) - allocation of memory --> of the let and const variables to the time the values are assigned to it. This is the temporal dead zone.

                                                           Temporal dead zone ---> phase ---> hoisted ---> to ---> point where the values are put inside. 

*/


// Referance error in our program ------>>

// console.log(window.b);


// window === this === Global object --->> and let is not attached to the window object ----->>> meaninig not existing in the global space 


/* 


                we can't also be able to redeclarationg of let sames goes with the var and it is a 'Syntax error'
                

*/


//                                          So, you can't redeclare the same name in the same scope 



                    // let x = 10;

                    // var x = 20;

/*


                                                            In the case of var it is completely lineant


*/



    var r = 10;

                                                // So in the case of var the redeclaration of the variable with the same name is not an error - 

    var r = 100;



    console.log(r);


    // It means var is able to redeclare within same scope 


/*


    let me show you the concept of const now

*/


    let q; // let variables can be declared without initialization and then initialized later on

    q = 1000;

    console.log(q); // It will be giving us 1000

    // const w; // It is a syntax error ---->> Missing initialization for const declaration

    // w = 1000;

    // console.log(w);
    

    const w = 1000; 
    console.log(w);


    w = 2000; // This is called as the type error. 

    console.log(w);


    //referance error is when the js engine try to access something that is not present.
    //syntax error when the js engine encounter something that is not in the syntax rules.
    //type error when a specific typed variable (const not initialized at the time of decaleration).


//          what should we have to use ----<<<>>>----- USE CONST ---(1) and now ----<<<>>>---- USE LET ---(2)



// The best way to avoid the temporal dead zone is to put all the declarations and initizations on the top ---> of the scope so that the time between the declaration of the code and initialization of the variable is minimun and we get the variable access at that point 




    









