/* 
Instructions

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:-

 - Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

 - Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

 - Log the value of BMIMark and BMIJohn to the console.

 - BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



*/

let massMark, massJohn , heightMark, heightJohn, BMI;

function bmiCal(height, mass){
    
    return mass / (height * height);

}

massMark = 78 ; heightMark = 1.69; heightJohn = 1.95; massJohn = 92;


bmiMark = bmiCal(heightMark, massMark);
bmiJohn = bmiCal(heightJohn, massJohn);


console.log(bmiMark + " " + bmiJohn);


let markHigherBMI;

markHigherBMI = bmiJohn > bmiMark;
console.log(markHigherBMI);
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



// =====================================================================================================================================================


