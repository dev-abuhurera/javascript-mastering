// Array methods

const friends = ['michel', 'steven', 'Jay'];
const lenArr = friends.push('jettan'); // push method add the value in the end of the array  

// mutated the orignal array now and as the push is a function it will return something 

// And the value the push returns is the length of the new array 

console.log(friends);
console.log(lenArr);

// method to add the element in the begining of the array 

const shiftLen = friends.unshift('zariii');

console.log(friends);

console.log(shiftLen);

// _____________________________________________________________________________


// remove the element 


friends.pop(); // remove the last element 

console.log(friends);

friends.shift();

console.log(friends);

//________________________________________________________________________________________


console.log(friends.includes('zariii'));