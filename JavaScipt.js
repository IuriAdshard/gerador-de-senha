let slide = document.querySelector('#my-slide')
let btn = document.querySelector('#my-btn')
let Tamanhodasenha = document.querySelector('#my-valor')
let senha = document.querySelector('.my-password')

let containerSenha = document.querySelector('#my-container__password')

let mycharset = "abcdefghijk1mnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWVXYZ0123456789!@"
let mynovasenha = ""


// mostra o tamanho da senha q tá guardada dentro do input(slide). 
Tamanhodasenha.innerHTML = slide.value


// inicia um evento e dps cria uma função que mostra o valor do input.
slide.oninput = function() {
    Tamanhodasenha.innerHTML = this.value
}

// aqui a gente cria uma variavel 
function gerarsenha() {

    let pass = ""

    for(let i = 0, n = mycharset.length; i < slide.value; ++i) {
        pass += mycharset.charAt(Math.floor(Math.random() * n))
    }

    containerSenha.classList.remove("hide")
    senha.innerHTML = pass
    mynovasenha = pass

}

function copiarsenha() {

    navigator.clipboard.writeText(mynovasenha)
}
