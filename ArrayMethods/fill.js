// Fill method

// Fill is being used at the empty array + other arrays and dirct filing 

const arr = [1, 2 ,3 ,4 ,5 ,6 ,7];

console.log(new Array(7));

// EmptyArrays + Fill
const x = new Array(7);

// x.fill(1); // Fill whole array with value = 1
// x.fill(1, 3); // Starts filling from the 3rd value 
x.fill(1, 3 ,5); // fill the array from the 3rd index to the 5th index

console.log(x);

// Filled Arrays + fill
arr.fill(23, 4 ,6);

console.log(arr);

// What is want to recreate the array 

// .from() method
const Y = Array.from({length : 7}, () => 1);

console.log(Y);


const Yc = Array.from({length : 7}, (_, ind) => ind + 1);

console.log(Yc);

// _ throwaway variable not is use 

// So___ Document.query Selector method that is not a real array a nodelist so it doesnot have array methods..... so we first have to use the array.from() on it and then we will be moving on 

