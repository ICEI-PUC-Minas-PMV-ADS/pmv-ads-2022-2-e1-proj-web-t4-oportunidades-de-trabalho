import {pegarParametrosUrl, pegarEmpresas, verificarUsuario, pegarContato, toast } from "./utils.js"

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id')
const user = verificarUsuario()
if (user) {
    if (!id) {
        $('#footer').addClass('fixed-bottom')
        $('#main').html('<h1 class="text-center">404 Not Found</h1>')
    } else if (id != user) {
        $('#footer').addClass('fixed-bottom')
        $('#main').html('<h1 class="text-center">403 Forbbiden</h1>')
    }
} else {
    $('#footer').addClass('fixed-bottom')
    $('#main').html('<h1 class="text-center">403 Forbbiden</h1>')
}

let paramId = pegarParametrosUrl('id')
if (paramId) {
    const empresa = pegarEmpresas({ id: paramId })
    const contato = pegarContato({ id: empresa.contato_id })
    $('#empresaNome').html(empresa.nome)

    $('#imagem').val(empresa.logo_link)
    $('#valores').val(empresa.valores.join(';'))
    $('#descricao').val(empresa.descricao)
    $('#email').val(contato.email)
    $('#linkedin').val(contato.linkedin)
    $('#sede').val(contato.sede)

    function atualizarEmpresa(empresa_id) {
        const empresaUpdate = pegarEmpresas({ id: empresa_id })
        const contatoUpdate = pegarContato({ id: empresa.contato_id })
        empresaUpdate.logo_link = $('#imagem').val()
        empresaUpdate.valores = $('#valores').val().split(';').filter(n => n)
        empresaUpdate.descricao = $('#descricao').val()
        contatoUpdate.email = $('#email').val()
        contatoUpdate.linkedin = $('#linkedin').val()
        contatoUpdate.sede = $('#sede').val()
        
        let empresas = pegarEmpresas({})
        let contatos = pegarContato({})


        contatos[contatos.findIndex(obj => obj.id == empresa.contato_id)] = contatoUpdate
        empresas[empresas.findIndex(obj => obj.id == empresa_id )] = empresaUpdate

        localStorage.setItem("Empresas", JSON.stringify(empresas))
        localStorage.setItem("Contato", JSON.stringify(contatos))

        return [{ 'Sucesso': 'Vaga criada com sucesso' }]
    }
    
    //prevenção de envio do form

    $("#atualizarEmpresaForm").submit(function (e) {
        e.preventDefault();
        const userValid = verificarUsuario()
        if (userValid) {
            const msg = atualizarEmpresa(userValid)
            toast(msg)
            if (Object.keys(msg[0]) == 'Sucesso') {
                window.location.replace(`empresaUser.html?id=${userValid}`);
            }
        } else {
            $('#main').html('<h1 class="text-center">403 Forbbiden</h1>')
        }
    });
}

