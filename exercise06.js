// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
const prompt = require('prompt-sync')()

console.log('Informe os 3 valores dos lados do triangulo:')
let sideA = Number(prompt('Lado A: '))
let sideB = Number(prompt('Lado B: '))
let sideC = Number(prompt('Lado C: '))

function whichTriangle(sideA, sideB, sideC) {
    if(sideA < (sideB + sideC) && sideB < (sideA + sideC) && sideC < (sideA + sideB)) {
        if(sideA == sideB && sideB == sideC){
            console.log('Os valores informados formam um triangulo eqüilátero1.')
        } else if(sideA != sideB && sideB != sideC) {
            console.log('Os valores informados formam um triangulo escaleno.')
        } else if(sideA == sideB || sideA == sideC || sideB == sideC) {
            console.log('Os valores informados formam um triangulo isósceles.')
        }
    } else {
        console.log('Com os valores informados não é possível formar um triangulo')
    }
}

whichTriangle(sideA, sideB, sideC)