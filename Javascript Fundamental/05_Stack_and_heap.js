//How the memory works in js

//Stack ---->>> 

// (Primitive data types)

// Stack memory --->> copy of variable 

//-----------------------------------------------------------

// Heap --->>>

// (Non Primitive)

// Heap --> referance --->> 


let myName = "AbuhureraRoohani"; 

let anotherName = myName; // assigning the nyName -> anotherName

anotherName = "ghafari"; // ghafari

// now changed the value of myName here 

console.log(anotherName);
console.log(myName);


// As the copy of the variable is changed the orignal remains the same


let user = {

    email: "example@gmail.com",
    easypaisa: 12355

} 

// Object --> heap --> return the referance not the copy

let newUser = user; // now both the user and the newuser have the referance of the same value no copyyy


newUser.email = "abuzarExample@gmail.com"

console.log(user.email);
console.log(newUser.email);

// So, it changed at both variables



