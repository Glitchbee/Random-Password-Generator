const generateBox = document.getElementById('password');
const copyImg = document.querySelector('.copy-img');
const len = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '1234567890';
const symbol = '{}!@#$%^&*()_+:"?/<>.,'

const allChar = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (len > password.length) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    generateBox.value = password;
}


function copyPassword() {
    generateBox.select();
    document.execCommand('copy');
}

