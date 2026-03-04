// Maps

// Used to maps the value to the Keys, Just like the Objects

// objects -----> Keys are string 

// Maps ----> Any type of key


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

const rest = new Map();
rest.set('name', 'Classico Italian');
console.log(rest);


// populating the map without set

const question = new Map([
    ['question', 'What is the best prog lang?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try again']

]);

console.log(question);

// Convert object to map

console.log(Object.entries(restaurant.openingHours));


// Iteration of Maps

for(const [key, value] of question){
    if(typeof key === 'number'){
        console.log(key + " of " + value);
    }
}