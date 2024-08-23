/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no 
console utilizando um loop for*/

for (let countdown = 10; countdown > 0; countdown--) {
    setTimeout(() => { //Função setTimeout é usada para atrasar a execução do código dentro dela por um certo número de milissegundos.
        console.log(countdown);
    }, (10 - countdown) * 1000);//Quando "countdown" é 10, o atraso é 0 milissegundos; quando "countdown" é 9, o atraso é 1000 milissegundos (1 segundo), e assim por diante.
}