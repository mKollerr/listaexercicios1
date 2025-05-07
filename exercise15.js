// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let num1 = 0
let num2 = 1
let proximo

for (let i = 0; i < 10; i++) {
    console.log(num1)
    proximo = num1 + num2
    num1 = num2
    num2 = proximo
}