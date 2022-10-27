
//redirecionar ao clicar no botao cadastrar
function cadastrar() {
    window.location.href="tela2cadastro.html"
    
}

window.onload=function(){
    let btncad = document.getElementById("btncad")

    btncad.onclick = function() {
        cadastrar() ;
        
    };
}
//-----------------------------------------------------------------------


//FUNCIONALIDADE LOGIN

function entrar() {

    //VARIAVEIS

    let email = document.getElementById("email")
    let emailLabel = document.getElementById("emailLabel")

    let senha = document.getElementById("senha")
    let senhaLabel = document.getElementById("senhaLabel")

    let listaUser = []

    let userValid = {
        nome: "",
        email: "",
        cnpj: "",
        senha: ""
    }
    //-------------------------------------------------------------------------------------------------


    //Verifica os dados informados e assim realiza a inclusão dos dados na lista da variavel userValid

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser.forEach((item) => {
        if(email.value == item.emailCad && senha.value == item.senhaCad){


            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                cnpj: item.cnpjCad,
                senha: item.senhaCad
            }

        }
        
    })
//-------------------------------------------------------------------------------------------------------------------


// Validaçoes dos dados e comparação com local.storage
    if(email.value.length == [] && senha.value.length == []){

        alert("Você não preencheu nenhum campo!!")
        return false
    }


    if (email.value == userValid.email && senha.value == userValid.senha) {

        alert("Bem vindo :)")
        window.location.href="https://media.tenor.com/0G7uO0zsUCwAAAAC/raccoonlove-raccoon.gif"
        
    } else {
        alert("Email ou senha incorretos")
        
    }


}
document.getElementById("btnlogin").onclick = entrar

//-------------------------------------------------------------------------------------------------------------------