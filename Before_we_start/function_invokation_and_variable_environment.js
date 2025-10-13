// Javascript

var x = 1;


a();
b();


console.log(x);


function a(){

    var x = 10;
    console.log(x);

}


function b(){

    var x = 100;
    console.log(x);

}



/*

---->>>> So now the global execution context is created 



                                        (First Phase)                              (Second Phase)

                                 Memory (variable environment)      ||||||||            Code


                                    x :- undefined                    ||||         x = 1

                                    a :- {}                           ||||         now -->> The second phase a new execution context will be gonna created

                                    b :- {}                           ||||



                                                    we have the call stack that will be used in this tho


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


*/