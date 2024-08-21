/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')();

console.log("Jokenpô is a simple hands-on game for two or more people.");

console.log("Check out the options below:");
    console.log("[ 1 ] -> ROCK; \n[ 2 ] -> PAPER; \n[ 3 ] -> SCISSORS.");

const userChoice = parseInt(prompt('Enter the corresponding option number: '));

switch(userChoice){
    case 1:
        console.log('ROCK');
        break;
    case 2:
        console.log('PAPER');
        break;
    case 3:
        console.log('SCISSOR');
        break;
    default:
        if(isNaN(userChoice) || userChoice < 0 || userChoice > 3){
            console.log("Invalid choice. Please enter a number between 1 and 3.");
        }        
}