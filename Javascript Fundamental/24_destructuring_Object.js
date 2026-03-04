// Destructuring Objects

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

const {name, mainMenu, openingHours} = restaurant; // object attributes dont consider order 

console.log(name, mainMenu, openingHours);

// renaming the new variables 

const {name: NewName , starterIndex: index} = restaurant;

console.log(NewName);

// setting up the default value to the property that don't exist in it 

const {menu = [], starterMenu : myMenu = []} = restaurant;

console.log(menu + " " + myMenu);

// Mutating variables through destuction

let a = 101;

let b = 210;

const gp = {a : 21, b : 23, c : 22};

({a, b} = gp); 

console.log(a + " " + b);

// Nested objects destructing 

const { fri } = openingHours;

console.log(fri);

// now further object 

const { fri: {open, close}} = openingHours;

console.log(open, close);

