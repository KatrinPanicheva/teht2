'use strict';

const number = []
const numbersOnly = [];

for(let i = 0; i < 5; i++) {
    const numerot = prompt(`Syötä numero  ${i + 1}:`);
    number.push(`Enter number ${i + 1} : ${numerot}`);
    numbersOnly.push(parseInt(numerot, 10));
}

document.getElementById("target").innerHTML =  number.join('<br>');


document.getElementById("target").innerHTML += `<p>Numbers: [ ${number.map(num => num.split(': ')[1]).toString()} ]</p>`;



const check = prompt('Enter a number to search:');

const kokoluku = parseInt(check, 10);

const found = numbersOnly.includes(kokoluku);

const resultElement = document.getElementById("target");
resultElement.innerHTML += `<p>Enter a Number to Search: ${kokoluku}</p>`

if (found) {
    resultElement.innerHTML += `Number ${kokoluku} is found in the array.`;
}   else {
    resultElement.innerHTML += `Number ${kokoluku} is not found in the array.`;
}


numbersOnly.pop();
document.getElementById("target1").innerHTML = `<p>Updated numbers: [ ${numbersOnly} ]</p>`;

numbersOnly.sort();
document.getElementById("target1").innerHTML = `<p>Numbers sorted: [ ${numbersOnly} ]</p>`;


