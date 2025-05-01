// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require('prompt-sync')()

let ageInfo = Number(prompt('Informe sua idade:'))

function checkAge(age){
    if(!isNaN(age) && age >= 0){
        if(age >= 0 && age < 12){
            console.log('Você é criança.')
        } else if (age >= 12 && age < 18) {
            console.log('Você é adolescente.')
        } else if (age >= 18 && age < 60) {
            console.log('Você é adulto')
        } else {
            console.log('Você é idoso')
        }
    } else {
        console.log('Informe uma idade valida!')
    }
}

checkAge(ageInfo)