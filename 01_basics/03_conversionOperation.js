let score = "33"; // String
//Type Conversions 

//-------------------------------------------------//

let valueInNumber = Number(score);   // It is a type conversion
console.log(typeof valueInNumber);

let newScore = "33abc";
let convertedNum = Number(newScore);

console.log(typeof convertedNum); // Now this is giving the type of a number 

console.log(convertedNum); // It is NaN (not a number)

//---------------------------------------------------------------------------

let scoreNew = null;

console.log(typeof Number(null));

console.log(Number(null)); // null is an object

//------------------------------------------------------------

//Type conversion for null value is 0

//---------------------------------------------------------------------------










