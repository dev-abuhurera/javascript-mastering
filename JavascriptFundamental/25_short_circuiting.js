// Short Circuting

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

console.log('--OR--')

// Can use any datatype || can return any datatype || can do short-circuiting

console.log(3 || 'jonas'); // Result of the OR operators is not always boolean

// First Value ---> truthy value | it will return it 

console.log(0 || '' || 'jonas' ||  undefined || false);

console.log(undefined || null);


const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);

const guest2 = restaurant.numGuests || 10;

console.log(guest2);

console.log('--AND--');


// It short circuts when the false is present 

console.log(0 && 'Jonas'); 

console.log('Hello' && 23 && null);

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'sponch')
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spoonch');

