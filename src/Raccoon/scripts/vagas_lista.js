import { pegarVagas, pegarParametrosUrl, gerarCardsVagas, pegarHabilidades } from "./utils.js";

filterHab()

function filterHab(id) {
    localStorage.getItem('filterHab') ? localStorage.setItem('filterHab', [id, ...localStorage.getItem('filterHab').split(',')]) : localStorage.setItem('filterHab', [id])
    let vg = pegarVagas({})
    if (localStorage.getItem('filterHab')) {
        vg = JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.hab_essencial_id.some(item => localStorage.getItem('filterHab').split(',').includes(String(item))))
    }
    vg = vg.filter(obj => obj.vaga_nome.toUpperCase().includes($('#textInput').val().toUpperCase()))
    generateList(vg)

}
function filterText() {
    generateList(JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.vaga_nome.toUpperCase().includes($('#textInput').val().toUpperCase())))
}

function generateList(vagas) {
    let pageIndex = parseInt(pegarParametrosUrl('page'))
    let lastPage = Math.ceil(vagas.length / 6)
    let pages = ''
    if (vagas.length >= 6) {
        for (let i = 1; i <= lastPage; i++) {
            if (i > 9 || (pageIndex - 5) + i > lastPage) {
                break;
            }
            if (pageIndex - 10 > 1) {
                if((pageIndex - 5) + i == pageIndex){
                    pages += `<li class="page-itemborder border-primary bg-light"><a class="page-link border border-primary bg-light" href="./vagas_lista.html?page=${(pageIndex - 5) + i}">${(pageIndex - 5) + i}</a></li>`
                }else{
                    pages += `<li class="page-item bordered border"><a class="page-link" href="./vagas_lista.html?page=${(pageIndex - 5) + i}">${(pageIndex - 5) + i}</a></li>`
                }
            } else {
                if(i == pageIndex){
                    pages += `<li class="page-item border border-primary bg-light"><a class="page-link border border-primary bg-light" href="./vagas_lista.html?page=${i}">${i}</a></li>`
                }else{
                    pages += `<li class="page-item border"><a class="page-link" href="./vagas_lista.html?page=${i}">${i}</a></li>`
                }
            }
        }
        if (pageIndex - 10 > 1) {
            $('#paginationList').html(`
    <li class="page-item">
        <button onclick="(window.location.replace('./vagas_lista.html?page=${pageIndex == 1 ? pageIndex : pageIndex - 1}'))()" class="page-link">Previous</button>
    </li>
    <li class="page-item">
        <button onclick="(window.location.replace('./vagas_lista.html?page=1'))()" class="page-link"><...</button>
    </li>
    ${pages}
    <li class="page-item">
        <button onclick="(window.location.replace('./vagas_lista.html?page=${lastPage}'))()" class="page-link">...></button>
    </li>
    <li class="page-item">
        <button onclick="(window.location.replace('./vagas_lista.html?page=${pageIndex == lastPage ? pageIndex : pageIndex + 1}'))()" class="page-link">Next</button>
    </li>
    `)
        } else {
            $('#paginationList').html(`
    <li class="page-item">
        <button onclick="(window.location.replace('./vagas_lista.html?page=${pageIndex == 1 ? pageIndex : pageIndex - 1}'))()" class="page-link">Previous</button>
    </li>
    ${pages}
    <li class="page-item">
        <button onclick="(window.location.replace('./vagas_lista.html?page=${pageIndex == lastPage ? pageIndex : pageIndex + 1}'))()" class="page-link">Next</button>
    </li>
    `)
        }
    }
    $('#lista_vagas').html(gerarCardsVagas(vagas.slice(pageIndex * 6 - 6, (pageIndex * 6))))

    if (pageIndex > lastPage && vagas.length > 1) {
        $('#lista_vagas').html('Está pagina não possui vagas, por favor volte a pagina 1')
    }
    if (vagas.length == 0) {
        $('#paginationList').html(``)
        $('#lista_vagas').html('Não existem vagas no momento, tente alterar seus filtros.')
    }
}
const clearFilter = () => {
    localStorage.setItem('filterHab', [])
    window.location.reload()
}

let listaHabs = pegarHabilidades({})
for (let vl in listaHabs) {
    $('#filters').append(`
        <div class="form-check form-switch text-left">
            <input class="form-check-input" type="checkbox" onclick="filterHab(${listaHabs[vl].id})" id="hab-${listaHabs[vl].id}">
            <label class="form-check-label" for="flexSwitchCheckDefault">${listaHabs[vl].nome}</label>
        </div>
    `)
}

window.filterHab = filterHab;
window.clearFilter = clearFilter
//window.filterText = filterText