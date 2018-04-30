'use strict';

let sharmSeats = 15;
let hurgadaSeats = 25;
let tabaSeats = 6;

const askedSeats = Number(prompt("Введите число необходимых мест"));

const isValidInput = askedSeats > 0 && Number.isInteger(askedSeats);

if (isValidInput) {
  let resort;
  let haveSeats = (askedSeats <= tabaSeats) || (askedSeats <= sharmSeats) || (askedSeats <= hurgadaSeats);

  if (haveSeats) {
    switch (haveSeats) {
      case tabaSeats >= askedSeats:
        resort = 'Taba';
        console.log('Есть места в группе: ', resort);
        break;

      case sharmSeats >= askedSeats:
        resort = 'Sharm';
        console.log('Есть места в группе: ', resort);
        break;

      case hurgadaSeats >= askedSeats:
        resort = 'Hurgada';
        console.log('Есть места в группе: ', resort);
        break;

      default:
        alert('Что-то пошло не так((');
    }
  } else {
    alert('Извините, мест нет.');
  }

  if (resort) {
    const confirmSeats = confirm(`В группе ${resort} есть места. Согласны ли вы быть в этой группе?`);
    console.log('Подтвердить места в группе: ', resort);
    
    if (confirmSeats && resort === 'Taba') {
      tabaSeats = tabaSeats - askedSeats;
      alert(`Приятного путешествия в группе ${resort}`);
      console.log(`Количество мест в группе ${resort}: ${tabaSeats}`);
    } 
    else if (confirmSeats && resort === 'Sharm') {
      sharmSeats = sharmSeats - askedSeats;
      alert(`Приятного путешествия в группе ${resort}`);
      console.log(`Количество мест в группе ${resort}: ${sharmSeats}`);
    } 
    else if (confirmSeats && resort === 'Hurgada') {
      hurgadaSeats = hurgadaSeats - askedSeats;
      alert(`Приятного путешествия в группе ${resort}`);
      console.log(`Количество мест в группе ${resort}: ${hurgadaSeats}`);
    } 
    else {
      alert("Нам очень жаль, приходите еще!");
      console.log(`Места в группе ${resort} не подтверждены!`);
    }
  }
} else {
  alert("Ошибка ввода!");
}