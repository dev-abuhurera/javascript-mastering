// same syntax as the spread operator but it collects the elements in the array

const restaurant = {

  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

};

// Destructuring 

// Spread

const arr = [1 ,2 ,3 , ...[3, 4]];
console.log(arr);

// Rest

const [a, b, ...others] = [1, 2 ,3 ,4, 5];
console.log(a, b, others);

// Objects

const {sat, ...weekdays} = restaurant.openingHours;

console.log(weekdays);

// Functions 

const add = function(...numbers){
    let sum = 0;
    for (const n of numbers){
        sum += n;
    }
    console.log(sum);
}

add(2 ,3);
add(5, 4, 3, 6, 1);
add(4, 2, 5, 1, 6, 6, 7);

