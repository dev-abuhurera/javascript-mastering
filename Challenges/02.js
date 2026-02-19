/*
CHALLENGE #2

 Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

 - Note: Don't round the BMI values. Leave them as they are.

*/


let massMark, massJohn , heightMark, heightJohn, BMI;

function bmiCal(height, mass){
    
    return mass / (height * height);

}

massMark = 78 ; heightMark = 1.69; heightJohn = 1.95; massJohn = 92;


bmiMark = bmiCal(heightMark, massMark);
bmiJohn = bmiCal(heightJohn, massJohn);


console.log("Mark's bmi" + " = " + `${bmiMark}` + " " + "and Jons's bmi = "  + bmiJohn);



console.log("John's Bmi = " + `${bmiJohn}` + " is lesser than Marks's " + `${bmiMark}`);

markHigherBMI = bmiJohn < bmiMark;
console.log(markHigherBMI);



// second test data


massMark = 92 ; heightMark = 1.88; heightJohn = 1.76; massJohn = 85;

bmiMark = bmiCal(heightMark, massMark);
bmiJohn = bmiCal(heightJohn, massJohn);

console.log(bmiMark + " " + bmiJohn);



markHigherBMI = bmiJohn > bmiMark;
console.log(markHigherBMI);
markHigherBMI = bmiJohn < bmiMark;
console.log(markHigherBMI);

