// definição da função
function saudacao(nome, curso) {
    console.clear
    console.log(`Olá!, ${nome}! Seja bem vindo ao curso de ${curso}!`)
}
//passando parametros para a função
saudacao('Wallison', 'java')

function soma(numero1, numero2) {
    //console.log('Soma =', numero1 + numero2)
    return numero1 + numero2
    //a execução do código da função acaba na linha onde tem RETURN
    //oque vier depois fica inapto
}

var resultado = soma(10, 20)

console.log(resultado / 2)

