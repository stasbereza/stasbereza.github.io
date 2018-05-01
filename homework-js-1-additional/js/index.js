'use strict';

let sharmSeats = 15;
let hurgadaSeats = 25;
let tabaSeats = 6;

const askedSeats = Number(prompt("Введите число необходимых мест"));

const isValidInput = askedSeats > 0 && Number.isInteger(askedSeats);

if (isValidInput) {
    if (tabaSeats >= askedSeats) {
        const haveTabaSeats = confirm("В группе taba есть места. Согласны ли вы быть в этой группе?");
        if (haveTabaSeats) {
            tabaSeats = tabaSeats - askedSeats;
            alert("Приятного путешествия в группе taba");
        } else if (sharmSeats >= askedSeats) {
            const haveSharmSeats = confirm("В группе sharm есть места. Согласны ли вы быть в этой группе?");
            if (haveSharmSeats) {
                sharmSeats = sharmSeats - askedSeats;
                alert("Приятного путешествия в группе sharm");
            } else if (hurgadaSeats >= askedSeats) {
                const haveHurgadaSeats = confirm("В группе hurgada есть места. Согласны ли вы быть в этой группе?");
                if (haveHurgadaSeats) {
                    hurgadaSeats = hurgadaSeats - askedSeats;
                    alert("Приятного путешествия в группе hurgada");
                } else {
                    alert("Нам очень жаль, приходите еще!")
                }
            }
        }
    } else if (sharmSeats >= askedSeats) {
        const haveSharmSeats = confirm("В группе sharm есть места. Согласны ли вы быть в этой группе?");
        if (haveSharmSeats) {
            sharmSeats = sharmSeats - askedSeats;
            alert("Приятного путешествия в группе sharm");
        } else if (hurgadaSeats >= askedSeats) {
            const haveHurgadaSeats = confirm("В группе hurgada есть места. Согласны ли вы быть в этой группе?");
            if (haveHurgadaSeats) {
                hurgadaSeats = hurgadaSeats - askedSeats;
                alert("Приятного путешествия в группе hurgada");
            } else {
                alert("Нам очень жаль, приходите еще!")
            }
        }
    } else if (hurgadaSeats >= askedSeats) {
        const haveHurgadaSeats = confirm("В группе hurgada есть места. Согласны ли вы быть в этой группе?");
        if (haveHurgadaSeats) {
            hurgadaSeats = hurgadaSeats - askedSeats;
            alert("Приятного путешествия в группе hurgada");
        } else {
            alert("Нам очень жаль, приходите еще!");
        }
    } else {
        alert("Извините, мест нет.");
    }
} else {
    alert("Ошибка ввода!");
}