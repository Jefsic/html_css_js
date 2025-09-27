function testeprompt() {
    let person = prompt("Por favor, digite seu nome", "Flávio José");
    let text;
    if (person == null || person == "") {
        text = "Você cancelou o prompt";
    } else {
        text = "Ok " + person + "!\nPrazer em te conhecer!";
    }
    window.alert(text)
}

function changeColor(var_cor) {
    const name = document.querySelector(".name");
    name.style.color = var_cor;
}

