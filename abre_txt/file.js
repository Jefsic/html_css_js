const input = document.querySelector('#arquivo');
const preview = document.querySelector('#preview');
const btndownload = document.querySelector('#btndownload');

input.addEventListener('change', function () {
    const arquivo = this.files[0]
    const leitor = new FileReader()

    leitor.addEventListener('load', function () {
        console.log(leitor.result)
        preview.value = leitor.result
    })

    if (arquivo) {
        leitor.readAsText(arquivo)
    }
})


function function_msg() {
    window.alert("Em desenvolvimento!")
    //não fazia sentido completar a enorme funçao de download
}


