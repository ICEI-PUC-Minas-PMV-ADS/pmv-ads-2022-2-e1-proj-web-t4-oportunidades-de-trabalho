import { pegarHabilidades, pegarSenioridade, pegarCargo, pegarVagas, pegarEmpresas, verificarUsuario, toast } from "./utils.js"

//Definindo opções do template
pegarHabilidades({}).map((item) => {
    $('#habEss').append($('<option>', {
        value: item.id,
        text: item.nome
    }));
    $('#habDif').append($('<option>', {
        value: item.id,
        text: item.nome
    }));
})
pegarSenioridade({}).map((item) => {
    $('#senioridade').append($('<option>', {
        value: item.id,
        text: item.nome
    }));
})
pegarCargo({}).map((item) => {
    $('#cargo').append($('<option>', {
        value: item.id,
        text: item.nome
    }));
})
// 

//criação de vaga
function criarVaga(empresa_id) {
    let ErrorMsg = []
    const importantFields = ['#nome', '#cargo', '#habEss', '#salario', '#expireDate', '#senioridade']
    for (let vl in importantFields) {
        if (!$(importantFields[vl]).val() || $(importantFields[vl]).val().length == 0) {
            ErrorMsg.push({ 'Erro': `${importantFields[vl]} não inserido` })
        }
    }
    if (ErrorMsg.length == 0) {
        let vagas = pegarVagas({})
        let empresas = pegarEmpresas({})
        const vaga = {
            'id': vagas.length + 1,
            'empresa_id': empresa_id,
            'hab_essencial_id': $('#habEss').val().map(i => Number(i)),
            'hab_dif_id': $('#habDif').val().map(i => Number(i)),
            'vaga_nome': $('#nome').val(),
            'descricao': $('#descricao').val(),
            'cargo_id': parseInt($('#cargo').val()),
            'salario': $('#salario').val(),
            'data_exp': $('#expireDate').val(),
            'data_cadastro': new Date(),
            'candidaturas': 0,
            'cargo_senioridade_id': parseInt($('#senioridade').val()),
        }
        vagas.push(vaga)

        for (let vl in empresas) {
            if (empresas[vl].id == empresa_id) {
                empresas[vl].vagas_id.push(vaga.id)
            }
        }
        localStorage.setItem("Vagas", JSON.stringify(vagas))
        localStorage.setItem("Empresas", JSON.stringify(empresas))

        return [{'Sucesso':'Vaga criada com sucesso'}]
    }
    return ErrorMsg
}

//prevenção de envio do form
$("#criarVagaForm").submit(function (e) {
    e.preventDefault();
    const userValid = verificarUsuario()
    if (userValid) {
        const msg = criarVaga(userValid)
        toast(msg)
        if(Object.keys(msg[0]) == 'Sucesso'){
            window.location.replace(`empresaUser.html?id=${userValid}`);
        }
    } else {
        $('#main').html('<h1 class="text-center">403 Forbbiden</h1>')
    }
});