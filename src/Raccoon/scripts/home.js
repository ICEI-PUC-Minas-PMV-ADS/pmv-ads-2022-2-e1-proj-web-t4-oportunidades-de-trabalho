import { gerarCardsVagas, pegarVagas } from "./utils.js";
const vagas = pegarVagas({})
$('#hpg-ultimas-vagas').html(gerarCardsVagas(vagas.slice(vagas.length-4,vagas.length)))