"use strict";

class Hamburger {
  constructor({
    size,
    stuffing
  }) {
    this.size = size;
    this.stuffing = stuffing;

    this.toppings = [];
  }
  // adding non-included topping
  addTopping(topping) {
    const addingTopping = !this.toppings.includes(topping) ?
      this.toppings.push(topping) :
      this.toppings;
    return this;
  }
  // removing included topping
  removeTopping(topping) {
    const removingTopping = this.toppings.includes(topping) ?
      this.toppings.filter(includedTopping => includedTopping !== topping) :
      this.toppings;
    this.toppings = removingTopping;
    return this;
  }
  // get the array of toppings
  getToppings() {
    return this.toppings;
  }
  // get size of hamburger
  getSize() {
    return this.size;
  }
  // get stuffing of hamburger
  getStuffing() {
    return this.stuffing;
  }
  // calculating price of hamburger
  calculatePrice() {
    const calculatingPrice = Hamburger.SIZES[this.size].price +
      Hamburger.STUFFINGS[this.stuffing].price +
      this.toppings.reduce((acc, key) => acc + Hamburger.TOPPINGS[key].price, 0);
    return calculatingPrice;
  }
  // get calories of hamburder
  calculateCalories() {
    const calculatingCalories = Hamburger.SIZES[this.size].calories +
      Hamburger.STUFFINGS[this.stuffing].calories +
      this.toppings.reduce((acc, key) => acc + Hamburger.TOPPINGS[key].calories, 0);
    return calculatingCalories;
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

const hamburger = new Hamburger({
  size: Hamburger.SIZE_SMALL,
  stuffing: Hamburger.STUFFING_CHEESE
});

// adding topping
hamburger.addTopping(Hamburger.TOPPING_SPICE);
// how much calories are there?
console.log('Calories: ', hamburger.calculateCalories());
// how much does it cost?
console.log('Price: ', hamburger.calculatePrice());
// adding sauce
console.log('Hamburger with added sauce: ', hamburger.addTopping(Hamburger.TOPPING_SAUCE));
// how much does it cost now?
console.log('Price with sauce: ', hamburger.calculatePrice());
// is this hamburger large?
console.log('Is hamburger large: ', hamburger.getSize() === Hamburger.SIZE_LARGE);
// removing topping
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
// how many toppings are there now?
console.log('Hamburger has toppings: ', hamburger.getToppings().length);