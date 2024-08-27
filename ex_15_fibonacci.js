/*15. Escreva um programa que gera e imprime os primeiros 10 números da 
sequência de Fibonacci utilizando um loop for.*/

let fibonacciTerms = [1, 1]; //Dois primeiros termos da sequencia de Fibonacci

for(let i = 2; i <= 10; i++){
    fibonacciTerms.push(fibonacciTerms[i - 1] + fibonacciTerms[i - 2]);
}

console.log(fibonacciTerms);