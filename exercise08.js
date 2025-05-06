// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.
const prompt = require('prompt-sync')()

console.log('Informe dois números distintos.')
let num1 = Number(prompt('Primeiro número:'))
let num2 = Number(prompt('Segundo número:'))

function crescentOrder(num1, num2) {
    if(num1 > num2) {
        console.log(num1, num2)
    } else {
        console.log(num2, num1)
    }
}

crescentOrder(num1, num2)