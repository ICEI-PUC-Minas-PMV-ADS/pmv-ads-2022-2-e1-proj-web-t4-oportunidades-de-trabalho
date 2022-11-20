import { pegarParametrosUrl, gerarHabilidades, dataSimplificada, pegarVagas, pegarEmpresas, pegarContato, pegarHabilidades } from "./utils.js";

const idParam = pegarParametrosUrl('id')

if (!idParam) {
    $('#main').html('<h1 class="text-center">404 Not Found</h1>')
} else {

    let vaga = pegarVagas({id:idParam})
    let empresa = pegarEmpresas({id:vaga.empresa_id})
    let contato = pegarContato({id:empresa.contato_id})
    let hab_ess = pegarHabilidades({arrayIds:vaga.hab_essencial_id}) 
    let hab_dif = pegarHabilidades({arrayIds:vaga.hab_dif_id})  
    console.log(contato)
    document.getElementById("empresaTitulo").innerHTML = `${empresa.nome} Contrata:`
    document.getElementById("empresaTitulo2").innerHTML = empresa.nome
    document.getElementById("cargoTitulo").innerHTML = vaga.vaga_nome
    document.getElementById("dataCadastro").innerHTML = dataSimplificada(vaga.data_cadastro)
    document.getElementById("candidaturaPrazo").innerHTML = dataSimplificada(vaga.data_exp)
    document.getElementById("candidaturaN").innerHTML = vaga.candidaturas
    document.getElementById("vagaDescricao").innerHTML = vaga.descricao
    document.getElementById("e-mail").innerHTML = contato.email
    document.getElementById("linkedin").innerHTML = contato.linkedin
    document.getElementById("e-mail").src = contato.email
    document.getElementById("linkedin").src = contato.linkedin
    document.getElementById("logoEmpresa").src = empresa.logo_link
    document.getElementById("logoEmpresa2").src = empresa.logo_link
    document.getElementById("hab_ess").innerHTML = gerarHabilidades(hab_ess, 10, 2)
    document.getElementById("hab_dif").innerHTML = gerarHabilidades(hab_dif, 10, 2)
}