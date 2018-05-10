'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const login = 'Stanislav';
const min = 4;
const max = 16;
let message = '';

const addLogin = (logins, login) => {
    if (validLogin) {
        if (checkLogin) {
            return message = `Логин ${login} уже используется!`;
        } else {
            logins.push(login);
            return message = `Логин ${login} успешно добавлен!`;
        }
    }
    return message = `Ошибка! Логин должен быть от ${min} до ${max} символов`;
}

const checkLoginValidity = login => {
    const inRange = login.length >= min && login.length <= max;

    const validityLogin = inRange ?
        inRange :
        false;

    return validityLogin;
}

const checkIfLoginExists = (logins, login) => {
    let inLogins;
    let hasLogin = false;
    hasLogin = logins.includes(login);

    for (const login of logins) {
        inLogins = hasLogin ?
            hasLogin :
            false;
    }
    return inLogins;
}

const validLogin = checkLoginValidity(login);
console.log(`Логин состоит от ${min} до ${max} символов? ${validLogin}`);

const checkLogin = checkIfLoginExists(logins, login);
console.log(`${login} есть в массиве logins? ${checkLogin}`);

addLogin(logins, login);
console.log(message);
console.log(logins);