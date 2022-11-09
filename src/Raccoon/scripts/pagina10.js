import { dataSimplificada, pegarParametrosUrl, pegarEmpresas, pegarVagas, gerarCardsVagas } from "./utils.js"
let paramId = pegarParametrosUrl("id")
let empresas = pegarEmpresas({ id: paramId })
let vagasEmp = pegarVagas({ arrayIds: empresas.vagas_id })
let virtudes = empresas.valores

$('#empresa-data').html(`No site desde: ${dataSimplificada(empresas.data_cadastro)}`)
$('#logoEmpresa').attr("src", empresas.logo_link)
$('#nome-empresa').html(`<h3> <strong>${empresas.nome}</strong> </h3>`)
$('#vagasRecentes').html(gerarCardsVagas(vagasEmp, 4))
$('#empresaDesc').html(`${empresas.descricao}`)
$('#valores').append(paraString(virtudes))

function paraString(virtudes) {

    let virtudesDin = []

    for (let index = 0; index < empresas.valores.length; index++) {

        if (index < empresas.valores.length) {
            virtudesDin[index] = (`${index + 1}. ${virtudes[index]}<br>`)
        }
    }
    return virtudesDin.join(" ")
}

document.getElementById('valores').innerHTML = paraString(virtudes)
