//Array Slicing ===> Array remains the same 

let arr = ['a', 'b', 'c', 'd'];

console.log(arr.slice(2));

console.log(arr.slice(2, 3));

console.log(arr.slice(-1));

console.log(arr.slice(1, -1));

// Splice ===> Mutate the orignal Array

console.log(arr.splice(2));
console.log(arr)