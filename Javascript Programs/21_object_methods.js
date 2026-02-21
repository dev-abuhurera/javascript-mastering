// object methods

// ------------> Function is a value === object (key + value) ---- function can act as the value in the object


const jonas = {

    firstName : 'Jones',
    lastName : 'Scherodinger', // Each of the key is called as the property
    // age : 2045 - 1991,
    birthYear : 1991,
    job : 'teacher',
    friends :  ['michel' , 'peter' , 'steven'],
    hasDriverData : true,

    // calAge: function(birthYear){ // Function expression
    //     return 2037 - birthYear;
    // } // function attached to any object is a method

    // calAge : function(){ // Function expression
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // } // function attached to any object is a method
    
    calAge : function(){ // Function expression
        this.age = 2037 - this.birthYear; // we are creating a new property to the object
        // return this.age;
    }, // function attached to any object is a method

    getSummary : function(){

    return `${this.firstName} is the firstName and ${this.lastName} is the lastName and the birthYear is ${this.birthYear}, with job of ${this.job} and the friends Name are: ${this.friends[0] + ' ' + this.friends[1] + ' ' + this.friends[2]} and has ${this.hasDriverData ? 'a' : 'no'}  driver License`;

    }

   
}


// const calAge = function(birthYear){ // Function expression
//         return 2037 - birthYear;
//     }

// console.log(jonas.calAge(1199));
// console.log(jonas['calAge'](1199));



console.log(jonas.calAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary())


// Important


// Arrays are also special type of objects




