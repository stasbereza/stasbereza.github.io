"use strict";

let userInput;
let attempts = 3;
const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];

while (attempts) {
  userInput = prompt("Введите свой пароль");
  console.log("Введенный пароль: ", userInput);

  if (userInput === null) {
    break;
  }

  if (passwords.includes(userInput)) {
    alert("Добро пожаловать!");
    break;
  } else {
    attempts -= 1;
    if (attempts === 0) {
      alert("У вас закончились попытки, аккаунт заблокирован!");
      break;
    }
    alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
  }
  console.log("Количество оставшихся попыток: ", attempts);
}
