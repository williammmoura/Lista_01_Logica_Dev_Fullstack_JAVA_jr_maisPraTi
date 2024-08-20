/*1. Escreva um programa que recebe um número inteiro e verifica se ele
é par ou ímpar utilizando uma estrutura de controle if.*/

const prompt = require('prompt-sync')();

let number = Number(prompt('Enter a number to find out if it is even or odd: '))

//Validação
if(isNaN(number)){
    console.log(`Error: Enter numbers only.`);
}else if(number % 2 === 0){
    console.log(`The number entered was ${number} and is even.`);
}else{
    console.log(`The number entered was ${number} and is odd.`);
}