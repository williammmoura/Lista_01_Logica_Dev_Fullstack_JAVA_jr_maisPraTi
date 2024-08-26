/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

const prompt = require('prompt-sync')();

console.log('This program will ask the user for 5 numbers and then add them together.');

let sum = 0;
let isError = false;

// Loop para solicitar 5 números
for (let i = 1; i <= 5; i++) {
    const userInput = prompt(`Enter number ${i}: `);
    const userNumber = Number(userInput);

    if (isNaN(userNumber)) {
        console.log('Error: Enter only numbers!');
        isError = true;
        break;  // Sai do loop se houver um erro
    }

    sum += userNumber;  // Adiciona o número à soma total
}

// Verifica se não houve erro antes de exibir a soma
if (!isError) {
    console.log(`The total sum is: ${sum}`);
}