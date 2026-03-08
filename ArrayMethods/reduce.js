// reduce method

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// accumulator -> snowball
const balamce = account1.movements.reduce((accumulator, currentVal, index, arr) => {
    console.log(`Iteration ${index}: ${accumulator}`)
    return accumulator + currentVal;
}, 0);

// initial value of the accumulator

console.log(balamce);

// Calculating the Maximum

const max = account1.movements.reduce((acc, mov) => {
    if(acc > mov){
        return acc;
    }else{
        return mov;
    }
}, account1.movements[0]);

console.log(max);

