/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuári 
(de 1 a 10) utilizando um loop for.*/

const prompt = require('prompt-sync')();

const numberForMultiplication = Number(prompt('Enter a number for multiplication: '));

if(isNaN(numberForMultiplication)){
    console.log('Error: Enter only numbers!');
}else{
    for(let i = 0; i <= 10; i++){
        const result = numberForMultiplication * i;
        console.log(`${numberForMultiplication} * ${i} = ${result}`);
    }
}