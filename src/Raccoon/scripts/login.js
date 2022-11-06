
//redirecionar ao clicar no botao cadastrar
function cadastrar() {
    window.location.href = "../Raccoon/cadastro.html"

}

window.onload = function () {
    let btncad = document.getElementById("btncad")

    btncad.onclick = function () {
        cadastrar();

    };
}
//-----------------------------------------------------------------------


//FUNCIONALIDADE LOGIN

function entrar() {

    //VARIAVEIS

    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    let EmpresaUser = []
    let empresas = JSON.parse(localStorage.getItem("Empresas"))

    let userValid = {
        nome: "",
        email: "",
        cnpj: "",
        senha: ""
    }
    //-------------------------------------------------------------------------------------------------


    //Verifica os dados informados e assim realiza a inclusão dos dados na lista da variavel userValid

    EmpresaUser = JSON.parse(localStorage.getItem("EmpresaUser"))

    for (let index = 0; index < EmpresaUser.length; index++) {
        if (email.value == EmpresaUser[index].login && senha.value == EmpresaUser[index].password) {
            userValid = {
                nome: empresas[index].nome,
                email: EmpresaUser[index].login,
                cnpj: empresas[index].cnpj,
                senha: EmpresaUser[index].password,
            }
        }
    }

    // Validaçoes dos dados e comparação com local.storage
    if (email.value.length == [] && senha.value.length == []) {

        alert("Você não preencheu nenhum campo!!")
        return false
    }


    if (email.value == userValid.email && senha.value == userValid.senha) {

        alert("Bem vindo :)")
       window.location.href = "../Raccoon/home.html"
       console.log(userValid)

    } else {
        alert("Email ou senha incorretos")

    }


}
document.getElementById("btnlogin").onclick = entrar

//-------------------------------------------------------------------------------------------------------------------