// Lexical Environment 


function a(){
    console.log(b);
}

let b = 10;

a();


/*

The function a has a local execution context where the b don;t exists but till at that point due to the global execution context the b is defined there the function is accessing it from the global execution context 

            ------>>>>> HOW ??????????????????????????????????????????????????????????

        Now --->> Lets make this a bit more complicated 

*/


function c(){

    e();
    
    function e(){
        
        console.log(d);
    }
}


d = 100;

c();


/*

        --->>>                               ''So what will happen inside this now''


                                    Now i want to make this complex that what if i have a function inside the function then what is gonna be printed 



                            And here it goes --->> Again the output is shown at the console screen......



                        Now let me show you the whole concepts here ----->>>>

*/




function t(){

    g = 100; // Now we have added the function defination inside the function itself so now what will gonna happen


    o();
    
    function o(){
        
        console.log(g);
    }
}



t();

// Even now as the variable declaration inside the local execution context so now it is the concept in which the variable is again accessable 


function w(){

    q = 100; // Now we have added the function defination inside the function itself so now what will gonna happen


    r();
    
    function r(){
        
        
    }
}

console.log(q); // Now what if we try to access the variable in the global scope while it is in the local scope

w();


// Now the variable q is not define ----------------------------------------------------------------------------------------------------------







