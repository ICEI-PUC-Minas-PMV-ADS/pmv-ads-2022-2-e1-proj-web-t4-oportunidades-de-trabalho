import { pegarParametrosUrl, gerarHabilidades, dataSimplificada, pegarVagas, pegarEmpresas, pegarContato, pegarHabilidades, pegarCargo, pegarSenioridade, toast } from "./utils.js";

const idParam = pegarParametrosUrl('id')

if (!idParam) {
    $('#main').html('<h1 class="text-center">404 Not Found</h1>')
} else {

    let vaga = pegarVagas({ id: idParam })
    let empresa = pegarEmpresas({ id: vaga.empresa_id })
    let contato = pegarContato({ id: empresa.contato_id })
    let hab_ess = pegarHabilidades({ arrayIds: vaga.hab_essencial_id })
    let hab_dif = pegarHabilidades({ arrayIds: vaga.hab_dif_id })
    let cargo = pegarCargo({ id: vaga.cargo_id })

    document.getElementById("empresaTitulo").innerHTML = `${empresa.nome} Contrata:`
    document.getElementById("empresaTitulo2").innerHTML = empresa.nome
    document.getElementById("cargoTitulo").innerHTML = vaga.vaga_nome
    document.getElementById("cargo").innerHTML = `<strong>Cargo:</strong> <a class="text-dark" href="./cargo.html?id=${cargo.id}">${cargo.nome}</a>`
    document.getElementById("senioridade").innerHTML = `<strong>Senioridade:</strong> ${pegarSenioridade({ id: vaga.cargo_senioridade_id }).nome}`
    document.getElementById("salario").innerHTML = `<strong>Salario:</strong> R$ ${vaga.salario}`
    document.getElementById("dataCadastro").innerHTML = `<strong>Data de Cadastro da vaga:</strong> ${dataSimplificada(vaga.data_cadastro)}`
    document.getElementById("candidaturaPrazo").innerHTML = `<strong>Prazo de candidatura:</strong> ${dataSimplificada(vaga.data_exp)}`
    document.getElementById("candidaturaN").innerHTML = `<strong>N de Candidatos:</strong> ${vaga.candidaturas}`
    document.getElementById("vagaDescricao").innerHTML = vaga.descricao
    document.getElementById("e-mail").innerHTML = contato.email
    document.getElementById("linkedin").innerHTML = contato.linkedin
    document.getElementById("e-mail").src = contato.email
    document.getElementById("linkedin").src = contato.linkedin
    document.getElementById("logoEmpresa").src = empresa.logo_link
    document.getElementById("logoEmpresa2").src = empresa.logo_link
    document.getElementById("hab_ess").innerHTML = gerarHabilidades(hab_ess, 10, 2)
    document.getElementById("hab_dif").innerHTML = gerarHabilidades(hab_dif, 10, 2)

    document.querySelector('.custom-file-input').addEventListener('change', function (e) {
        var fileName = document.getElementById("inputGroupFile01").files[0].name;
        var nextSibling = e.target.nextElementSibling
        nextSibling.innerText = fileName
    })

    $("#candidatarForm").submit(function (e) {
        e.preventDefault();
        if ($('#mensagem').val()) {
            const obj = { vl: $('#mensagem').val() }; //Tentei fazer error handling mas sem sucesso, nem o try catch, nem o proprio catch do fetch funcionaram, então vai sem.
            fetch('https://raccoonjobs-88f94-default-rtdb.firebaseio.com/message.json',
                {
                    method: 'POST',
                    body: JSON.stringify(obj),
                    headers: {
                        'Content-Type': 'text/html',
                    }
                })
                vaga.candidaturas += 1
                let vagas = JSON.parse(localStorage.getItem('Vagas'))
                vagas[vagas.findIndex(obj => obj.id == vaga.id)] = vaga
                localStorage.setItem("Vagas", JSON.stringify(vagas))
            toast([{'Sucesso':'Seu curriculo foi enviado com sucesso'}])
            setTimeout(() => {
                window.location.reload()
            }, 3000)
        }else{
            toast([{'Error':'A mensagem é obrigatoria.'}])
        }
    });
}
