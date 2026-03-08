
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};


// Now these movements ===> We are gonna do data transformation

// conversionRate

const eurToUsd = 1.1;

// const movementUsd = account1.movements.map(function(mov){
//   return mov * eurToUsd;
// });

// console.log(movementUsd);

// Arrow function simplification
const movementUsd = account1.movements.map(mov => mov * eurToUsd);
console.log(movementUsd);


// Map method return a whole new transformed array

const movementDescription = account1.movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(mov)}`

  // if(mov > 0){
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // }else{
  //   return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`
  // }

)

console.log(movementDescription);

// Map method just call a callback function over each value of an array and return the value in the new array

// For Each -----> we looped over the array and perform some actions over the array which is then called as the side effect

