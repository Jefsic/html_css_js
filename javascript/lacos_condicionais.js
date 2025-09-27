//laços condicionais
const numero_sorteado = 5
//Importação da biblioteca para input do usuário
console.clear
const input = require('readline-sync')
let numero = Number(input.question('Qual numero voce escolhe?'))

while (numero !== numero_sorteado) {
    console.log('Você errou o número. Tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe?'))
}
console.clear
console.log('Voce acertou!')