function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        //verifica se o seletor recebido em elemento é um objeto de audio
        //se é um objeto de audio, toca ele
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou Seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/* código anterior a utilização do FOR
let Contador = 0;
while (Contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[Contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    //usar CRASE ao invés de aspas duplas ou simples no caso abaixo
    //esse uso se chama TEMPLATE STRING

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    Contador = Contador + 1;
} */


for (let Contador = 0; Contador < listaDeTeclas.length; Contador++) {

    const tecla = listaDeTeclas[Contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //esse uso se chama TEMPLATE STRING
    //usar CRASE ao invés de aspas duplas ou simples no caso abaixo

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    //onkeydown é quando uma tecla é acionada
    //adicionando a classe "ativa" aos botões via js
    //não existe operador OR no java script, temos que usar || (pipe pipe)
    //acionando a classe 'ativa' para ESPAÇO e ENTER
    //para fazer funcionar um estilo que está no CSS, que é a tecla ficar vermelha 
    tecla.onkeydown = function (evento) {
        if (evento.code === 'space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        //onkeyup é quando uma tecla é solta
        //removendo a classe ativa
        tecla.classList.remove('ativa');

    }
}


















