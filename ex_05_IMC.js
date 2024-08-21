/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma
pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, 
obesidade) utilizando if-else*/

const prompt = require('prompt-sync')();

const weightUser = Number(prompt('Enter your weight (in kg): '));
const heightUser = Number(prompt('Enter your heigth (in meters): '));

let BMIcalculation = weightUser / (heightUser**2);

if(isNaN(BMIcalculation)){
    console.log('Error: Enter only numbers!');
}else if(BMIcalculation <= 17){
    console.log('Underweight');
}else if(BMIcalculation > 17 && BMIcalculation <= 24.9){
    console.log('Normal weight');
}else if(BMIcalculation >= 25 && BMIcalculation <= 29.9){
    console.log('Overweight');
}else{
    console.log('Obesity');
}