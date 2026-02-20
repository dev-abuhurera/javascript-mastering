// Strict mode

'strict mode'; // allow us to write code without doing the unseen errors
let hasDriversLicense = false;

const passTest = true;

if(passTest) hasDriverLicense = true;
if(!passTest) hasDriversLicense = false;

console.log(hasDriversLicense)

// So, here as we have created the error by our own js omitted it and didn't gave us the error 




const cutPieces = function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    const applePieces = cutPieces(apples); // Strict mode help
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));


