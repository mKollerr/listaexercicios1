// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require('prompt-sync')()

let num = Number(prompt('Informe um número para fatorar:'))
let fatorial = 1

if(num < 0) {
    console.log('Não é possivel fatorar um número negativo.')
} else {
    for(let i = 1; i <= num; i++){
        fatorial *= i
    }
}

console.log(`O fatorial de ${num} é ${fatorial}`);