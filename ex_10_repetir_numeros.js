/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

const prompt = require('prompt-sync')();

const userNumber = parseInt(prompt('Enter a number: '));

if(isNaN(userNumber)){
    console.log('Error: Enter only numbers!');
}else{
    // Loop para exibir o número 10 vezes
    for (let i = 0; i < 10; i++) {
        console.log(userNumber);
    }
}
