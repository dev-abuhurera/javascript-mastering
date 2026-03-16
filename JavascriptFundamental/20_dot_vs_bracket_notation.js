// Dot vs bracket notation

const jonas = {

    firstName : 'Jones',
    lastName : 'Scherodinger', // Each of the key is called as the property
    age : 2045 - 1991,
    job : 'teacher',
    friends :  ['michel' , 'peter' , 'steven']

}

// order of the properties doesnot matter 

console.log(jonas);

console.log(jonas.lastName); // Dot Notation

// Dot is an operator that will get the object and reteive the data while reaching the value 

console.log(jonas['lastName']); // Bracket Notation for the same thing 

// In the bracket notation the expression can be putted into the brackets 

const nameKey = 'Name';

console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// So, it is the working only with the dot notation







