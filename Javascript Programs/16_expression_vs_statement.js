// Statement vs Expression

// Expression __________

/*

    - Expression is something that produce some value and is a bit shorted piece of code

*/



5 + 4;

true && false || true 


// Statement _________

/*

    - Statement is the bigger piece of code and don't produce the output directly

*/


if(5 > 4){
    const str = 'json is important';
    console.log("5 is greater than 4")
}


// ===================================================================================================================================================================================

console.log("This is my " + `${"birthday"}`) // ----> Js expect an expression instead of statement 

// console.log(`${if(5 > 4){
//     const str = 'json is important';
//     console.log("5 is greater than 4")
// }
// }`) It will be the error


console.log(`${5 > 3 ? "This is the greater" : "This is not greater"}`)

