// Smallest program in javascript is the empty file 

/*

    ----->>        An empty file when there is nothing to execute then still the Javascript Engine will still perform its work  <<----

    --->       Javascript engine creates a window object -------------  created by the javascript engine in the global space

    and 

            Javascript engine also create the a 'THIS' Keyword also ---->>


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                            Whenever, any js program is executed ---->> a global object (window === this) is created ---->>> A global execution context is created 

                    At the global level -->> this is pointing to the global Object --->> (in this case (Window))       

                                                                                                                                                        | > Global Level --->> 'this' << ---
        Whenver the execution context created ----->> this is also created with it --------->>>> Even for the execution context ----|> whether it is ----               
                                                                                                                                                        | > Local Level  --->> 'this' << ---

                                                                                                                             
*/


// gLOBAL SPACE --->>>  anything outside a function --->>


var a = 10;


function b (){

    var x = 100;

}

console.log(a);
console.log(window.a);
console.log(this.a);

//                                      '' So this [[window]] -- [[this]] -- [[a]] --->> All are refering to the same one object in the program ''

