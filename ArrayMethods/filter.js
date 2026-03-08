const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

// Use to filter the elements by specifying a condition

const deposits = account1.movements.filter((mov) => {
    return mov > 0;
});

console.log(deposits)

// difference
const depFor = [];
for(const mov of account1.movements) if (mov > 0) depFor.push(mov);
console.log(depFor);

const withdraw = account1.movements.filter(mov => mov < 0);
console.log(withdraw);