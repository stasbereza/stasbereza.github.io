'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const login = 'Stanislav';
const min = 4;
const max = 16;
let message = '';

const addLogin = (logins, login) => {
    const isValidLogin = checkLoginValidity(login);
    console.log(`Does login include ${min} to ${max} symbols? ${isValidLogin}`);

    if (!isValidLogin) {
        return message = `Error! Login must include ${min} to ${max} symbols.`;
    }

    const isExistingiLogin = checkIfLoginExists(logins, login);
    console.log(`Is ${login} in the array [logins]? ${isExistingiLogin}`);

    if (isExistingiLogin) {
        return message = `Login ${login} is already in use!`;
    }

    logins.push(login);
    return message = `Login ${login} was successfully added!`;
};

const checkLoginValidity = login => {
    const inRange = login.length >= min && login.length <= max;

    const validityLogin = inRange ?
        inRange :
        false;

    return validityLogin;
};

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

addLogin(logins, login);
console.log(message);
console.log(logins);