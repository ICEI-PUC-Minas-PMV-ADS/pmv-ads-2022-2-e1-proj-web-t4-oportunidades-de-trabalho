import { gerarCardsVagas, pegarVagas } from "./utils.js";
const vagas = pegarVagas({})
$('#hpg-ultimas-vagas').html(gerarCardsVagas(vagas, 4))