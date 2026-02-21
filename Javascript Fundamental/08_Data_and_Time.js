// data and time in javascript 

let myDate = new Date(); 

// constructor call work in the heap ---->>> 

console.log(myDate);

// Now ---------------------------->>

console.log(myDate.toString()); //Wed Oct 08 2025 00:19:12 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Wed Oct 08 2025 (only date)

console.log(myDate.toISOString()); //2025-10-08T00:20:56.377Z

console.log(myDate.toJSON()); //work in such a way that --->> convert the object to json 

// Also {{{json.stringify() -> toJSON() -> convert it automatically to the string}}}

console.log(myDate.toLocaleString()); // our local time --->> specification

//10/8/2025, 12:33:18 AM 

// <<<----------------------------------------------------------------------------------------------------->>> //

console.log(typeof myDate); // Date is an object

// It is created inside the memory as an object


// declaring the date through the constructor call

let createdDate = new Date(2025, 10, 25); // 2025-11-25T00:00:00.000Z
console.log(createdDate.toDateString()); // Tue Nov 25 2025


// month ---> are indexed from 0 -> 11 ----> month start from the 0 --> So when I Write the 10 ---> It was the index (that means it is the orignally the index of the month)

// (((((11 ---> nov)))))


let newDate = new Date(2025, 3, 24, 4, 5, 6);

console.log(newDate); //2025-04-24T04:05:06.000Z
console.log(newDate.toLocaleString()); //4/24/2025, 4:05:06 AM

// ---------------------------------------------------------

let dateNew = new Date("01-14-2025") // date // month // year
console.log(dateNew.toLocaleString()); // 1/14/2025, 12:00:00 AM

// -------------------------------------------------------------

// 'Time Stamp' ------------->>>>>>

let myTimeStamp = Date.now(); 

console.log(myTimeStamp); //1759885934667 ---> It is the  milisecond


console.log(dateNew.getTime());









