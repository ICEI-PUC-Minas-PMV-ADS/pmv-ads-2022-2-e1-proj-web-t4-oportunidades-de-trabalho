import { dataSimplificada, pegarParametrosUrl, pegarEmpresas, pegarVagas, gerarCardsVagas } from "./utils.js"
let paramId = pegarParametrosUrl("id")
let empresas = pegarEmpresas({ id: paramId })
if(!paramId || !empresas){
    $('#main').html('<h1 class="text-center">404 Not Found</h1>')
}else{
    let now = new Date().getTime()
    let vagasEmpExp = JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.empresa_id === empresas.id && new Date(obj.data_exp).getTime() < now)
    console.log(vagasEmpExp)
    let virtudes = empresas.valores
    $('#empresa-data').html(`No site desde: ${dataSimplificada(empresas.data_cadastro)}`)
    $('#logoEmpresa').attr("src", empresas.logo_link)
    $('#nome-empresa').html(`<h3> <strong>${empresas.nome}</strong> </h3>`)
    $('#vagasExpiradas').html(gerarCardsVagas(vagasEmpExp, 4))
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
}