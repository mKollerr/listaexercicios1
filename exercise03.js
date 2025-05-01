// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação" ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')()

let studentGrade = Number(prompt('Informe a nota do aluno:'))

function checkApproval(grade) {
    if(!isNaN(grade) && grade >=0 && grade <= 10){
        if(grade >= 0 && grade < 4) {
            console.log('Aluno reprovado sem chance de recuperação.')
        } else if (grade >= 4 && grade < 7) {
            console.log('Aluno respirando por aparelhos, necessário recuperação.')
        } else {
            console.log('Aluno aprovado!!!')
        }
    } else {
        console.log('Informe uma nota válida!')
    }
}

checkApproval(studentGrade)