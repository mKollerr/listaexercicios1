// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require('prompt-sync') ()

let number = prompt('Informe um número para ser exibido na tela:')

function repeater(num) {
    for(let i = 0; i < 10; i++) {
        console.log(num);
    }
}

repeater(number)