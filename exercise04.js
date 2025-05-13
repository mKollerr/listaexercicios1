//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()


let choise = Number(prompt('Para contar de 1 até 10 tecle [1]; Para contar de 10 até 1 tecle [2]; Para receber uma mensagem motivalcional tecle [3]:'))

function countUp() {
    for(let i = 1; i <= 10; i++){
        console.log(i)
    }
}

function countDown() {
    for(let i = 10; i >= 1; i--){
        console.log(i)
    }
}

function motivationalMessage() {
    const messages = [
        'Cada bug que você resolve é um passo mais perto de se tornar um dev lendário.',
        'Errar é parte do processo. Todo dev já começou do zero!',
        'Seu código não precisa estar perfeito, só precisa funcionar (por enquanto 😄).',
        'Confia no processo e continua codando!'
    ]
    const random = Math.floor(Math.random() * messages.length)
    console.log(`"${messages[random]}"\n— GPT, chat`)
}

switch(choise){
    case 1:
        countUp()
        break
    case 2:
        countDown()
        break
    case 3:
        motivationalMessage()
        break
    default:
        console.log('Você não informou um número válido')
        break
}