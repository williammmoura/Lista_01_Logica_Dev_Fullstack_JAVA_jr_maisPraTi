/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 
se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const prompt = require('prompt-sync')();

const quantityOfApples = parseInt(prompt('Enter the amount of apples you need: '));
let priceOfApples;

if(isNaN(quantityOfApples) || quantityOfApples < 0){
    console.log('Error: Enter only positive numbers!');
}else if(quantityOfApples < 12){
    priceOfApples = quantityOfApples * 0.3;
    console.log(`The quantity of apples is ${quantityOfApples} and their price is ${priceOfApples.toFixed(2)}`);
}else{
    priceOfApples = quantityOfApples * 0.25;
    console.log(`The quantity of apples is ${quantityOfApples} and their price is ${priceOfApples.toFixed(2)}`);
}