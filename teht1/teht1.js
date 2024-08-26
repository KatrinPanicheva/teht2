'use strict';

const fruits = ["apple", "banana", "orange", " grape", "kiwi"];

console.log('Fruits:' + fruits);


let Length = fruits.length
console.log('Length of Fruits:' + fruits.length)

console.log('Element at index 2:' + fruits[2])

console.log('Last Element of Fruits:' + fruits[4])



const vegetables = []

for (let i = 0; i < 3; i++) {
    const vegetable = prompt(`Vegetable numer  ${i + 1}:`);
    vegetables.push(vegetable);
}

console.log('Vegetables:'+ vegetables)

let kpl = vegetables.length
console.log('Length of Vegetables:' + vegetables.length)