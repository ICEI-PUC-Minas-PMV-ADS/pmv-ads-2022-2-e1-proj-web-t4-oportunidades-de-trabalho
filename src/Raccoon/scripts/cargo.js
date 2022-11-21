import {gerarCardsVagas, gerarHabilidades, pegarCargo, pegarEmpresas, pegarHabilidades, pegarParametrosUrl, pegarSenioridade} from './utils.js'

const paramId = pegarParametrosUrl('id')
const cargo = pegarCargo({id:paramId})
const senioridade = pegarSenioridade({})

if(!paramId || !cargo){
    $('#main').html('<h1 class="text-center">404 Not Found</h1>')
}else{
    let now = new Date().getTime()
    const todasVagas = JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.cargo_id === cargo.id)
    $('#cargoTitulo').html(cargo.nome)
    $('#cargoDesc').html(cargo.descricao)

    if(todasVagas.length > 0){
        for(let vl in senioridade){
            let salario = 0;
            let vagas = todasVagas.filter(obj => obj.cargo_senioridade_id === senioridade[vl].id)
            for(let sl in vagas){
                salario += vagas[sl].salario
            }
            if(salario / vagas.length){
                $('#mediaSalarial').append(`
                    <h5 class="col-sm-12"><strong>${senioridade[vl].nome}:</strong> R$ ${salario / vagas.length}</h5>
                `)
            }
        }
    }else{
        $('#mediaSalarial').html('Nenhuma média salárial no momento')
    }

    const vagasAbertas = JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.cargo_id === cargo.id && new Date(obj.data_exp).getTime() > now)
    vagasAbertas.length > 0 ? $('#vagasAbertas').html(gerarCardsVagas(vagasAbertas, 2)) : $('#vagasAbertas').html('Nenhuma vaga com este cargo no momento')
    console.log(vagasAbertas)
    let vagasFechadas = JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.cargo_id === cargo.id &&  new Date(obj.data_exp).getTime() < now)
    if(vagasFechadas.length > 0){ 
        let empresasCriadas = {}
        for(let vl in vagasFechadas){
            let empresa = pegarEmpresas({id:vagasFechadas[vl].empresa_id})
            if(!empresasCriadas[empresa.id]){
                $('#vagasFechadas').append(`<p class="col-sm-12"><strong><a href="./empresa.html?id=${empresa.id}">${empresa.nome}</a></strong></p>`)
            }
            empresasCriadas[empresa.id] = empresa.nome
        }
    }else{
        $('#vagasFechadas').append('Nenhuma contratação ainda')
    }


    let habsEss = {}
    for(let vl in todasVagas){
        for(let skill of todasVagas[vl].hab_essencial_id){
            let hab = pegarHabilidades({id:skill})
            habsEss[hab.id] = hab.nome
        }
    }

    Object.keys(habsEss).length > 0 ? $('#habEss').append(gerarHabilidades(pegarHabilidades({arrayIds:Object.keys(habsEss).map(Number)}), 99, 2)) : $('#habEss').html("Nenhuma habilidade registrada")
}