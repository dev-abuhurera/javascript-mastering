//                                                                                                              Hoisting -------->>> in javascript


// let x = 5;

// function getName(){
//     console.log("Javascript");
// }

// console.log(x);

// getName();


// The code is executed as we have expected 


getName(); // We are trying to envoke the function before it is even created 

// console.log(x);


// So the getName function is envoked somehow and printed the value before its even creation 


let x = 5;

function getName(){
    console.log("Javascript")
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*

    Now, the memory is allocated before the execution is done right ----->> 

    --->>> 

        let x = 5;

        function getName(){
            console.log("Javascript")
        }

        getName();
        console.log(x);
        console.log(getName);


        //This execution will be in this case will alocate the memory before the execution right


        x = undefined

        getName() --->> contain the whole function in it 

*/




//what is the scene now 


/*

  --->> That before the execution of the code the memory allocation occurs where the variable and functions are assigned the memory and the dummy values 
  like --->> 

  a = undefined -->> to all the variables --->>> It means that the memory is allocated but the value are not assigned 


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                                                            -------    undefined  vs not defined   ------


                    --------->>>>  

*/
    // get name is not a funciton when we execute the arrow function it behave just like some other variable

    console.log(getname()); // Not a function

    // console.log(y); // it prints out undefined

    var y = 7; 

    // Now it says that it is not defined

    // function getname(){
    //     console.log("Hello");
    // }


    var getname = () => {
        console.log("Hello");
    }

    // so if we console.log the getName before its initialization it will give us the undefined ==== Just like it do in the variables


    //////////////////////////////////////////////////////////////////////////////


    /*

    Another way of writing the a funtion

    */


    var getName2 = function (){


    }

    // The same case for this ------->>> It is also acting as a variable in which we store the function 
    
    // ------->>>> ' getName2 == variable === undefined '



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







                                                                        









