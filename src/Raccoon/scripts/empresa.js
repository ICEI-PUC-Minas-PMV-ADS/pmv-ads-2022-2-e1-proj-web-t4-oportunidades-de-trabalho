import { dataSimplificada, pegarParametrosUrl, pegarEmpresas, pegarVagas, gerarCardsVagas } from "./utils.js"

let paramId = pegarParametrosUrl('id')
if (paramId) {
    const empresa = pegarEmpresas({id:paramId})
    const vagasDaEmpresa = pegarVagas({arrayIds:empresa.vagas_id})
    $('#empresaNome').html(empresa.nome)
    $('#empresaDataCadastro').html(`No site desde: ${dataSimplificada(empresa.data_cadastro)}`)
    $('#empresaLogo').attr("src", empresa.logo_link)
    $('#ultimasVagas').html(gerarCardsVagas(vagasDaEmpresa))
}