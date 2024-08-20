/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else*/

const prompt = require('prompt-sync')();

let ageUser = parseInt(prompt(`How old are you? `));

if(ageUser > 0 && ageUser <= 12){
    console.log(`You are a child.`);
}else if(ageUser > 12 && ageUser <= 17){ 
    console.log(`You are a teenager.`);
}else if(ageUser > 17 && ageUser <= 59){
    console.log(`You are a adult.`);
}else{
    console.log(`You are an elderly person.`);
}