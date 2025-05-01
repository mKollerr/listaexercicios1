// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()

let number = Number(prompt("Informe um número, vou te dizer se ele é par ou impar:"))

function isEvenOrOdd(num){
    if(!isNaN(num)){
        if(num % 2 === 0){
            console.log(`${num} é um número par`);
        } else {
            console.log(`${num} é um número impar`)
        }
    } else {
        console.log('Dado informado não é um número!')
    }
}

isEvenOrOdd(number)