import {pegarHabilidades, pegarCargo } from "./utils.js"
const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro ", "Dezembro"
];
const today = new Date()

$('#resumoDate').html(`Resumo de ${monthNames[today.getMonth() -1]}`)

const habilidades = pegarHabilidades({})
const cargos = pegarCargo({})
const vagas = JSON.parse(localStorage.getItem('Vagas')).filter(obj => new Date(obj.data_cadastro).getTime() > new Date(today.getFullYear(),(today.getMonth() - 1),1).getTime() && new Date(obj.data_cadastro).getTime() < new Date(today.getFullYear(),(today.getMonth()),0).getTime())
let habOrder = {}
let cargoOrder = {}
for(let vl in cargos){
    cargoOrder[`${cargos[vl].nome}`] = Object.keys(vagas.filter(obj => obj.cargo_id === cargos[vl].id)).length
}
for(let vl in habilidades){
    habOrder[`${habilidades[vl].nome}`] = Object.keys(vagas.filter(obj => obj.hab_essencial_id.includes(habilidades[vl].id))).length
}
let sortedHabs = Object.entries(habOrder).sort(([,a],[,b]) => b-a)
let sortedCarg = Object.entries(cargoOrder).sort(([,a],[,b]) => b-a)

$('#cargo_list').html = ''
$('#habilidade_list').html = ''
for(let vl in sortedHabs){
    if(sortedHabs[vl][1] > 0){
        $('#habilidade_list').append(`
        <tr>
            <td>
            ${sortedHabs[vl][0]}
            </td>
            <td>
            ${sortedHabs[vl][1]}
            </td>
        </tr>`)
    }
}
for(let vl in sortedCarg){
    if(sortedCarg[vl][1] > 0){
        $('#cargo_list').append(`
        <tr>
            <td>
            ${sortedCarg[vl][0]}
            </td>
            <td>
            ${sortedCarg[vl][1]}
            </td>
        </tr>`)
    }
}

$('#listaHabilidades').html = ''
for(let vl in habilidades){
    $('#listaHabilidades').append(`<a href="./habilidade.html?id=${habilidades[vl].id}">${habilidades[vl].nome}</a> || `)
}
$('#listaCargos').html = ''
for(let vl in cargos){
    $('#listaCargos').append(`<a href="./cargo.html?id=${cargos[vl].id}">${cargos[vl].nome}</a> || `)
}