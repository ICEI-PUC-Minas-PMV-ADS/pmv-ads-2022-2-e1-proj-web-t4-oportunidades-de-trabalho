import { dataSimplificada, pegarParametrosUrl, pegarEmpresas, pegarVagas, gerarCardsVagas, verificarUsuario } from "./utils.js"

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    const user = verificarUsuario()
    if(user){
        if(!id){
            $('#footer').addClass('fixed-bottom')
            $('#main').html('<h1 class="text-center">404 Not Found</h1>')
        }else if( id != user){
            $('#footer').addClass('fixed-bottom')
            $('#main').html('<h1 class="text-center">403 Forbbiden</h1>')
        }
    }else{
        $('#footer').addClass('fixed-bottom')
        $('#main').html('<h1 class="text-center">403 Forbbiden</h1>')
    }


let paramId = pegarParametrosUrl('id')
if (paramId) {
    const empresa = pegarEmpresas({id:paramId})
    const vagasDaEmpresa = pegarVagas({arrayIds:empresa.vagas_id})
    $('#empresaNome').html(empresa.nome)
    $('#empresaDataCadastro').html(`No site desde: ${dataSimplificada(empresa.data_cadastro)}`)
    $('#empresaLogo').attr("src", empresa.logo_link)
    $('#update').attr("href", `./empresaUserUpdate.html?id=${empresa.id}`)
    vagasDaEmpresa.length > 0 ? $('#ultimasVagas').html(gerarCardsVagas(vagasDaEmpresa)) : $('#ultimasVagas').html('<p>Nenhuma vaga postada ainda</p>')
}