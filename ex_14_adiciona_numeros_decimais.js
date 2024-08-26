/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 
0 e fazer a média aritmética desses números.*/

const prompt = require('prompt-sync')();

let userNumber;
let sum = 0;
let count = 0;

do {
    // Solicita a entrada do usuário
    userNumber = prompt('Enter a decimal number (or 0 to end): ');
    
    // Remove espaços em branco
    userNumber = userNumber.trim();
    
    // Verifica se a entrada é um número válido
    if (isNaN(userNumber) || userNumber === "") {
        console.log('Error: Enter only valid numbers!');
    } else {
        userNumber = Number(userNumber);
        
        // Verifica se o número é diferente de 0 antes de somar e contar
        if (userNumber !== 0) {
            sum += userNumber; // Soma os números válidos inseridos
            count++; // Conta quantos números válidos foram inseridos
        }
    }

} while (userNumber !== 0);

if (count > 0) {
    let average = sum / count; // Calcula a média aritmética
    console.log(`The arithmetic mean of the numbers entered is: ${average}`);
} else {
    console.log('No number entered.');
}
