/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos 
valores iguais) e escreve-los em ordem crescente*/

const prompt = require('prompt-sync')();

const value1 = Number(prompt('Enter a number: '));
const value2 = Number(prompt('Enter a new number: '));

if(isNaN(value1) || isNaN(value2)){
    console.log('Error: Enter only numbers!');
}else if(value1 === value2){
    console.log('Error: Enter different numbers!');
}else if(value1 < value2){
    console.log(`The numbers in ascending order are: ${value1}, ${value2}`);
}else{
    console.log(`The numbers in ascending order are: ${value2}, ${value1}`);
}