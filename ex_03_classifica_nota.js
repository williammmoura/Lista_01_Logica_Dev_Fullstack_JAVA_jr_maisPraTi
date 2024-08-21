/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como 
"Aprovado","Recuperação", ou "Reprovado" utilizando if-else if.*/

const prompt = require('prompt-sync')();

let userGrade = Number(prompt('Enter your grade: '));

if(isNaN(userGrade)){
    console.log('Error! Enter only numbers!');
}else if(userGrade <= 4){
    console.log(`Your grade is ${userGrade} and you are REPROVED!`);
}else if(userGrade > 4 && userGrade <= 6){
    console.log(`Your grade is ${userGrade} and you are in RECOVERY!`);
}else{
    console.log(`Your grade is ${userGrade} and you are APROVED!`);
}