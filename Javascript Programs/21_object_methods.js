// object methods

// ------------> Function is a value === object (key + value) ---- function can act as the value in the object


const jonas = {

    firstName : 'Jones',
    lastName : 'Scherodinger', // Each of the key is called as the property
    age : 2045 - 1991,
    birthYear : 1991,
    job : 'teacher',
    friends :  ['michel' , 'peter' , 'steven'],
    hasDriverData : true,

    // calAge: function(birthYear){ // Function expression
    //     return 2037 - birthYear;
    // } // function attached to any object is a method

    calAge : function(){ // Function expression
        console.log(this)
        return 2037 - this.birthYear;
    } // function attached to any object is a method
    

}


// const calAge = function(birthYear){ // Function expression
//         return 2037 - birthYear;
//     }

// console.log(jonas.calAge(1199));
// console.log(jonas['calAge'](1199));



console.log(jonas.calAge());