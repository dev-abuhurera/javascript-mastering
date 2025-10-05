//Strings in js

const name = "hitesh" // It is the first value to be stored in the variable
const repoCounts = 50;

// console.log(name + repoCounts);

// hirtesh50 --> concatenated using +

//String intercolations

console.log(`Hello my name is ${name} and my repo count is ${repoCounts}`);


//String Declaration ------->>>>

const gameName = new String('abuhurera');

// using the constructor and object

console.log(gameName)

console.log(typeof gameName)

// String is an object

// it has the kep value pairs

console.log(gameName[0]); // It has the key -->> value achieve

console.log(gameName.__proto__);

//Accessing the prototype in the object of the string 

console.log(gameName.toUpperCase());

//It will not change the orignal string --->>> 

// Strings are immutable even the wrapper Object usage or the simple declaration

//------------------------------------------------------------------------------------------------

console.log(gameName.indexOf('e'));

const newString = "Hinata"
console.log(newString.substring(0, 4)); // It will give the value of the 0th to the ending index

// Use the concept of string methods

/*

 replace, split, substring

*/

