//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require('prompt-sync')()

let num = Number(prompt('Informe um número para ver a tabuada: '))
let tabuada = 0

console.log(`Tabuada do ${num}:`)
for(let i = 1; i <= 10; i++) {
    tabuada = num * i
    console.log(`${num} x ${i} = ${tabuada}`)
}