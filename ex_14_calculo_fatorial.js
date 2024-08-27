/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const prompt = require('prompt-sync')();

const fatorialNumber = Number(prompt('Enter a number for the factorial calculation: '));

//Validação de entrada
if(fatorialNumber < 0 || isNaN(fatorialNumber)){
    console.log('Please enter a positive number.');
}else{
    let result = 1; //"result" é inicializada com 1, pois o fatorial de um número envolve multiplicações sequenciais.
    let number = fatorialNumber;

    while(number > 1){ //multiplicando o "result" pelo valor atual de "number" e depois decrementando "number".
        result *= number;
        number--;
    }
    console.log(`The factorial of ${fatorialNumber} is ${result}.`);
}