
// truthy and falsy

// values that are not false ----- but will convert to false when we write them in the form of a boolean and respectively

// 0, " " , undefined , null , NaN


console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean('jones'));
console.log(Boolean({})); 


const money = 0;

if(money){
    console.log("You don't have money")
}
else{
    console.log("You have the money")
}

let height;

if(height){
    console.log("This is my height")
}else{
    console.log("This is not my height")
}


