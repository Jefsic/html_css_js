// # para se referir a ID
// . para se referir a uma classe
const resultado = document.querySelector('.result');
const igual = document.querySelector('igual');

function insert(valor) {
    resultado.innerHTML += valor;
}

function clean() {
    resultado.innerHTML = "";
}

function backspace() {
    if (resultado.textContent) {
        // o IF testa se existe conteúdo em resultado, e executa linha abaixo caso tenha
        let result = document.getElementById("resultado").innerHTML;
        // sintaxe função substring: str.substring(posição inicial, quantidade caracteres)
        resultado.innerHTML = result.substring(0, result.length - 1);
    }
}

function confirma() {
    if (resultado.textContent != "Erro") {
        document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
    }
}