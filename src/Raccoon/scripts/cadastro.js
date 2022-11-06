var nome = document.getElementById("nome");
var labelNome = document.getElementById("labelNome");
var validNome

var email = document.getElementById("email");
var labelEmail = document.getElementById("labelEmail");
var validEmail

var cnpj = document.getElementById("cnpj");
var labelCnpj = document.getElementById("labelCnpj");
var validCnpj

var senha = document.getElementById("senha");
var labelSenha = document.getElementById("labelSenha");
var validSenha

var senhaConf = document.getElementById("senhaConf");
var labelSenhaConf = document.getElementById("labelSenhaConf");
var validSenhaConf
//-----------------------------------------------------------------------------------------------------------


//VALIDAÇÃO CAMPO NOME

nome.addEventListener('blur', () => {
  if (nome.value.length <= 3) {
    labelNome.setAttribute('style', 'color: red')
    nome.setAttribute('style', 'border-color: red')
    labelNome.innerHTML = '<strong>Nome</strong>'
    validNome = false
  }
  else {
    labelNome.setAttribute('style', 'color:green')
    nome.setAttribute('style', 'border-color: green')
    labelNome.innerHTML = 'Nome'
    validNome = true
  }
}
)
//-----------------------------------------------------------------------------------------------------------


//VALIDAÇÃO CAMPO CNPJ

function validar_cnpj() {
  if (cnpj.value.length <= 13) {
    labelCnpj.style.color = 'red'
    cnpj.setAttribute('style', 'border-color: red')
    labelCnpj.innerHTML = '<strong>Insira o CNPJ de sua empresa</strong>'
    validCnpj = false

  } else {
    labelCnpj.style.color = 'green'
    cnpj.setAttribute('style', 'border-color: green')
    labelCnpj.innerHTML = 'Insira o CNPJ de sua empresa'
    validCnpj = true
  }
}

document.getElementById("cnpj").onblur = validar_cnpj
//-----------------------------------------------------------------------------------------------------------






//VALIDAÇÃO CAMPO EMAIL

const regexEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i


function validar_email() {
  if (!regexEmail.test(this.value)) {
    this.style.color = 'red';
    labelEmail.style.color = 'red'
    email.setAttribute('style', 'border-color: red')
    labelEmail.innerHTML = '<strong>Email  *Insira um endereço de email válido</strong>'
    validEmail = false

  } else {
    this.style.color = 'black';
    labelEmail.style.color = 'green'
    email.setAttribute('style', 'border-color: green')
    labelEmail.innerHTML = 'Email'
    validEmail = true
  }
}

document.getElementById("email").onblur = validar_email;

//-----------------------------------------------------------------------------------------------------------

// VALIDAÇÃO CAMPO SENHA
function validar_senha() {
  if (senha.value.length <= 5) {

    labelSenha.style.color = 'red'
    senha.setAttribute('style', 'border-color: red')
    labelSenha.style.color = 'red'
    labelSenha.innerHTML = '<strong> Sua senha deve ter no mínimo 6 caracteres</strong>'
    validSenha = false

  } else {
    labelSenha.style.color = 'green'
    senha.setAttribute('style', 'border-color: green')
    labelSenha.style.color = 'green'
    labelSenha.innerHTML = 'Senha'
    validSenha = true
  }
}

document.getElementById("senha").onblur = validar_senha

//-----------------------------------------------------------------------------------------------------------



// VALIDAÇÃO CAMPO CONFIRME SUA SENHA
function validar_senhaConf() {
  if (senhaConf.value === senha.value) {

    labelSenhaConf.style.color = 'green'
    senhaConf.setAttribute('style', 'border-color: green')
    labelSenhaConf.style.color = 'green'
    labelSenhaConf.innerHTML = 'Confirme sua Senha'
    validSenhaConf = true

  } else {
    labelSenhaConf.style.color = 'red'
    senhaConf.setAttribute('style', 'border-color: red')
    labelSenhaConf.style.color = 'red'
    labelSenhaConf.innerHTML = '<strong>*Suas senhas não batem</strong>'
    validSenhaConf = false
  }
}

document.getElementById("senhaConf").onblur = validar_senhaConf

//-----------------------------------------------------------------------------------------------------------



//FUNCIONALIDADE CADASTRAR
function cadastrar() {

  if (validCnpj && validEmail && validNome && validSenha && validSenhaConf) {

    let listaUser = JSON.parse(localStorage.getItem("listaUser") || '[]')
    let EmpresaUser = JSON.parse(localStorage.getItem("EmpresaUser") || '[]')

    for (let index = 0; index < 1; index++) {
      EmpresaUser.push(
        {
          id: (EmpresaUser.length + 1),
          empresa_id: "",
          login: email.value,
          password: senha.value
        }
      )
    }
    console.log(EmpresaUser)
    console.log(listaUser)

    //------------------------------------------------------------
    listaUser.push(
      {
        nomeCad: nome.value,
        emailCad: email.value,
        cnpjCad: cnpj.value,
        senhaCad: senha.value
      }
    )
    window.location.href = "../Raccoon/login.html"

    localStorage.setItem("listaUser", JSON.stringify(listaUser))
    localStorage.setItem("EmpresaUser", JSON.stringify(EmpresaUser))

    alert("Cadastrado com sucesso")

  } else {
    alert("Preencha os campos corretamente")
  }
}

document.getElementById("btncadastrar").onclick = cadastrar
//-----------------------------------------------------------------------------------------------------------

// FORMATAR CAMPO CNPJ

cnpj.addEventListener("keyup", formatarCNPJ);

function formatarCNPJ(e) {

  var v = e.target.value.replace(/\D/g, "");

  v = v.replace(/^(\d{2})(\d)/, "$1.$2");

  v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

  v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");

  v = v.replace(/(\d{4})(\d)/, "$1-$2");

  e.target.value = v;
}
//-------------------------------------------------------------------------------------------------------------

