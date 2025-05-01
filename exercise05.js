//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.
const prompt = require('prompt-sync')()

let weightInfo = Number(prompt('Informe seu peso para que seja calculado o seu IMC:'))
let heightInfo = Number(prompt('Informe sua altura em centimetros. Ex: 177:'))

function getWeightCategory(weight, height) {
    let heightInMeter = height/100
    let calcIMC = (weight/(heightInMeter**2)).toFixed(1)

    if(calcIMC <= 18.5){
        console.log('Você está com o peso abaixo do normal')
    } else if(calcIMC >= 18.6 && calcIMC <= 24.9) {
        console.log('Você está com o peso normal');
    } else if(calcIMC >= 25.0 && calcIMC <= 29.9) {
        console.log('Você está com sobrepeso')
    } else {
        console.log('Você está com obesidade, procure ajuda!')
    }
}

getWeightCategory(weightInfo, heightInfo)