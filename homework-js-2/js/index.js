'use strict';

let userInput;
const numbers = [];
let total = 0;

while (userInput !== null) {
  userInput = prompt('Введите число');

  let number = Number(userInput);
  let isNumber = !Number.isNaN(number);

  if (isNumber) {
    numbers.push(number);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
  console.log('Введеное число: ', number);
  console.log('Массив: ', numbers);
}

for (const number of numbers) {
  total += number;
}
alert(`Общая сумма чисел равна ${total}`);