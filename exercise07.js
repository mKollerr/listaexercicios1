// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.
const prompt = require('prompt-sync')()

let appleQuantity = Number(prompt('Informe a quantidade total de maçãs: '))
let moreTwelve = 0.25
let lessTwelve = 0.30

function priceCalculator(quantity) {

    if(!isNaN(quantity) && quantity > 0) {
        if(quantity < 12) {
            let higherPrice = quantity * lessTwelve
            console.log(`O valor de ${quantity} maçãs é de R$${higherPrice.toFixed(2)}`)
        } else {
            let lowerPrice = quantity * moreTwelve
            console.log(`O valor de ${quantity} maçãs é de R$${lowerPrice.toFixed(2)}`)
        }
    } else {
        console.log('Informe uma quantidade valida.')
    }
}

priceCalculator(appleQuantity)