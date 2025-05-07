// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
const prompt = require('prompt-sync')()

let num
let divisor = 0
let soma = 0
let media = 0

while (num != 0) {
    num = Number(prompt('Informe um número decimal, para finalizar digite 0:'))
    soma += num
    media = soma/divisor
    divisor++
}

console.log(`A média dos números informados é ${media}.`)