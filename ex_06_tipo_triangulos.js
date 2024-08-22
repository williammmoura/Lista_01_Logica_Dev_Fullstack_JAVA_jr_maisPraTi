/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os 
lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o 
tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

const prompt = require('prompt-sync')();

const side1 = Number(prompt('Enter a value for the first side: '));
const side2 = Number(prompt('Enter a value for the second side: '));
const side3 = Number(prompt('Enter a value for the third side: '));

if(isNaN(side1) || isNaN(side2) || isNaN(side3)){
    console.log('Error: Enter only numbers!');
}else if(side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2){
    if (side1 === side2 && side2 === side3) {
        console.log(`The values ${side1}, ${side2}, ${side3} form an equilateral triangle.`);
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log(`The values ${side1}, ${side2}, ${side3} form an isosceles triangle.`);
    } else {
        console.log(`The values ${side1}, ${side2}, ${side3} form a scalene triangle.`);
    }
}else{
    console.log("These values do not form a triangle.");
}