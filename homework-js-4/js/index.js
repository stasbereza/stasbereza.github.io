"use strict";

function Cashier({
  name = "cashier",
  products = {},
  totalPrice = 0,
  customerMoney = 0,
  changeAmount = 0
}) {
  this.name = name;
  this.products = products;
  this.totalPrice = totalPrice;
  this.customerMoney = customerMoney;
  this.changeAmount = changeAmount;

  this.countTotalPrice = function(order) {
    const orderKeys = Object.keys(order);
    
    for(let i = 0, max = orderKeys.length; i < max; i += 1) {
      if(this.products[orderKeys[i]] !== undefined) {
        this.totalPrice += this.products[orderKeys[i]] * order[orderKeys[i]];
      }
    }
    
    return this.totalPrice;
  };

  this.getCustomerMoney = function() {
    let isNumber;
    do {
      const userInput = prompt(
        `The amout of your order = ${
          this.totalPrice
        }. Please, pay for your order!`
      );

      if (userInput === null) {
        return null;
      }

      this.customerMoney = Number(userInput);
      isNumber = !Number.isNaN(this.customerMoney);

      if (this.customerMoney < this.totalPrice) {
        alert(
          "You have given less money than the amount of your order! Please, give me more money!"
        );
        this.customerMoney = 0;
      }

      if (!isNumber) {
        alert("You have entered not a number! Please, enter a number!");
        this.customerMoney = 0;
      }
    } while (!isNumber || this.customerMoney < this.totalPrice);

    return this.customerMoney;
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;

    return Math.round(this.changeAmount * 100) / 100;
  };

  this.reset = function() {
    return console.log(
      `totalPrice = ${(this.totalPrice = 0)}, customerMoney = ${(this.customerMoney = 0)}, changeAmount = ${(this.changeAmount = 0)}`
    );
  };

  this.serve = function(order) {
    console.log("totalPrice", cashier.countTotalPrice(order));
    console.log("customerMoney: ", cashier.getCustomerMoney());

    if (this.customerMoney === 0) {
      alert("Sorry, something went wrong. Please, come again!");
      return cashier.reset();
    }

    console.log("changeAmount: ", cashier.countChange());

    alert(
      `Thank you for purchasing, your change ${Math.round(
        this.changeAmount * 100
      ) / 100}`
    );
    return cashier.reset();
  };
}

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const cashier = new Cashier({ name: "Stanislav", products: products });
console.log(cashier);

cashier.serve(order);
