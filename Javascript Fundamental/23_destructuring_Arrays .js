const restaurant = {

  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order : function(startIndex, endIndex){
    return [this.starterMenu[startIndex], this.starterMenu[endIndex]];
  }

};


const arr = [12, 23, 11];

const [a, b, c] = arr;

console.log(a + " " + b + " " + c);

// //destructuring
// const [first, second] = restaurant.categories;

// console.log(first + " " + second);


//leaving a hole

let [first , , second] = restaurant.categories;

console.log(first + " " + second);

// interchanging the values 

[first, second] = [second, first];

console.log(first+ ' ' + second);

// retrieving value from a function

const [firstVal, secondVal] = restaurant.order(2,0);

console.log(firstVal + " " + secondVal);

const arr2 = [2, 3, [2, 2]];

const [ , , i] = arr2

console.log(i[0]);


