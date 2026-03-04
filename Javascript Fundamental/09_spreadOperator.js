// Spread operator ----> also the unpacking operator in js ----> it is used to unpack the elements from an iterable like Array or the string


// let arr = [1,2,3,4,5];

// let max = Math.max(...arr); // this will spread the numbers 

// console.log(...arr)

// console.log(max);

// let min = Math.min(...arr);

// console.log(min);

// let str = "dev-Abuhurera"

// console.log(...str);

const restaurant = {

  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(startIndex, endIndex){
    return [this.starterMenu[startIndex], this.starterMenu[endIndex]];
  },

  orderPasta : function(ing1 , ing2, ing3){
    console.log(`${ing1} + ${ing2} + ${ing3}`);
  }

};


const arr423 = [5, 6, 7];

const arr3 = [1 ,2 ,3, ...arr423];

console.log(arr3);

// adding new element in the existing array

const newMenu = [...restaurant.mainMenu + ' Pasta'];

console.log(newMenu);

const newMenu1 = [...restaurant.mainMenu , ' Pasta'];

console.log(newMenu1);

// =================================================================================================================================================================


// As the spread operator is some how like the destructuring Just having no kind of variables like the destructuring but but we have to use the comma seperation 

// Creating the shallow copies of Arrays && Merging Two arrays together 


const MainMenuCopy = [...restaurant.mainMenu];


console.log(`Creating the shallow copy: ${MainMenuCopy}`)



// Merging the 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);


// Spread Operator works on the iterables


// iterables : Arrays, maps, strings, sets excepts -----> objects


// Multiple values ---- seperated by commas 

restaurant.orderPasta(...restaurant.starterMenu);

// spread operator can work on the objects too


