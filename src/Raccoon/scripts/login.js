
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
        if (email.value == EmpresaUser[index].login && senha.value.hashCode() == EmpresaUser[index].password) {
            userValid = {
                email: EmpresaUser[index].login,
                senha: EmpresaUser[index].password,
                empresa_id: EmpresaUser[index].empresa_id
            }
        }
    }

    // Validaçoes dos dados e comparação com local.storage
    if (email.value.length == [] && senha.value.length == []) {

        alert("Você não preencheu nenhum campo!!")
        return false
    }

    if (email.value == userValid.email && senha.value.hashCode() == userValid.senha) {
        localStorage.setItem('userValid', JSON.stringify(userValid))
        alert("Bem vindo :)")
        window.location.href = `../Raccoon/empresaUser.html?id=${userValid.empresa_id}`

    } else {
        alert("Email ou senha incorretos")

    }


}
document.getElementById("btnlogin").onclick = entrar

//-------------------------------------------------------------------------------------------------------------------

//Hash (isso não deveria ficar na visão do usuario assim, mas como esse website não possui backend, paciencia.)
String.prototype.hashCode = function() {
    var hash = 0,
      i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}