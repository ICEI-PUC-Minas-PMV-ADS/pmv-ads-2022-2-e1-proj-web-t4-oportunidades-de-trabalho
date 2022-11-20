export function toast(message) {
  for (let vl in message) {
    Toastify({
      text: Object.values(message[vl]),
      duration: 3000,
      style: {
        background: Object.keys(message[vl]) == 'Sucesso' ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to bottom right, #FF4950, #FFC9DC)",
      },
    }).showToast();
  }
}

export function verificarUsuario() {
  const user = pegarUsuario()
  const EmpresaUser = pegarEmpresaUsuario()
  if(user && EmpresaUser){
    for (let index = 0; index < EmpresaUser.length; index++) {
      if (user.email == EmpresaUser[index].login && user.senha == EmpresaUser[index].password) {
        return EmpresaUser[index].empresa_id
      }
    }
  }
  return false
}

// Gera rounded-pills de habilidades, (objeto de habilidades, numero maximo de pills, tamanho da coluna) 
export function gerarHabilidades(Habilidades, MaxPills=null, colSize=4) {
  let div = ''
  for (let vl in Habilidades) {
    if (vl < MaxPills || !MaxPills) {
      if (vl % 2 == 0) {
        div += `<p id="skill-${vl}" class="col-sm-${colSize} rounded-pill bg-warning"><a href='./habilidade.html?id=${Habilidades[vl].id}' class="text-dark">${Habilidades[vl].nome}</a></p>`
      } else {
        div += `<p id="skill-${vl}" class="col-sm-${colSize} rounded-pill bg-info"><a href='./habilidade.html?id=${Habilidades[vl].id}' class="text-dark">${Habilidades[vl].nome}</a></p>`
      }
    }
  }
  return div
}

//Reduz strings longas, nesse caso utilizamos para reduzir a descrição. (texto, tamanho max)
export const reduzirTexto = (text, length) => text.length <= length ? text : text.substr(0, length) + '\u2026';

//Transforma o objeto de new Date padrão do JS em uma string com a data mais legivel (data)
export const dataSimplificada = (date) => { let dt = new Date(date); return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`; }

//Pega o parametro do url e retorna o valor (parametro desejado ex:'id')
export const pegarParametrosUrl = (parameter) => { return new URLSearchParams(window.location.search).get(parameter) }

//Eu poderia generalizar essas funções para ser uma unica, 
//Mas ai eu teria que pedir o parametro do local storage a ser usado ex: Empresas
//E isso retiraria a praticidade que eu quero gerar.
export const pegarEmpresaUsuario =() => {return JSON.parse(localStorage.getItem('EmpresaUser'))}
export const pegarUsuario =() => {return JSON.parse(localStorage.getItem('userValid'))}

export function pegarEmpresas({ id = null, arrayIds = null }) {
  if (id) {
    return JSON.parse(localStorage.getItem('Empresas')).find(obj => obj.id === parseInt(id))
  } else if(arrayIds) {
    return JSON.parse(localStorage.getItem('Empresas')).filter(obj => arrayIds.includes(obj.id))
  }
  else{
    return JSON.parse(localStorage.getItem('Empresas'))
  }
}
export function pegarVagas({ id = null, arrayIds = null }) {
  let now = new Date().getTime()
  if (id) {
    return JSON.parse(localStorage.getItem('Vagas')).find(obj => obj.id === parseInt(id) && new Date(obj.data_exp).getTime() > now)
  } else if(arrayIds) {
    return JSON.parse(localStorage.getItem('Vagas')).filter(obj => arrayIds.includes(obj.id) && new Date(obj.data_exp).getTime() > now)
  }
  else{
    return JSON.parse(localStorage.getItem('Vagas')).filter(obj => new Date(obj.data_exp).getTime() > now)
  }
}
export function pegarHabilidades({ id = null, arrayIds = null }) {
  if (id) {
    return JSON.parse(localStorage.getItem('Habilidades')).find(obj => obj.id === parseInt(id))
  } else if(arrayIds) {
    return JSON.parse(localStorage.getItem('Habilidades')).filter(obj => arrayIds.includes(obj.id))
  }
  else{
    return JSON.parse(localStorage.getItem('Habilidades'))
  }
}
export function pegarSenioridade({ id = null, arrayIds = null }) {
  if (id) {
    return JSON.parse(localStorage.getItem('Senioridade')).find(obj => obj.id === parseInt(id))
  } else if(arrayIds) {
    return JSON.parse(localStorage.getItem('Senioridade')).filter(obj => arrayIds.includes(obj.id))
  }
  else{
    return JSON.parse(localStorage.getItem('Senioridade'))
  }
}
export function pegarCargo({ id = null, arrayIds = null }) {
  if (id) {
    return JSON.parse(localStorage.getItem('Cargos')).find(obj => obj.id === parseInt(id))
  } else if(arrayIds) {
    return JSON.parse(localStorage.getItem('Cargos')).filter(obj => arrayIds.includes(obj.id))
  }
  else{
    return JSON.parse(localStorage.getItem('Cargos'))
  }
}
export function pegarContato({ id = null, arrayIds = null }) {
  if (id) {
    return JSON.parse(localStorage.getItem('Contato')).find(obj => obj.id === parseInt(id))
  } else if(arrayIds) {
    return JSON.parse(localStorage.getItem('Contato')).filter(obj => arrayIds.includes(obj.id))
  }
  else{
    return JSON.parse(localStorage.getItem('Contato'))
  }
}
//Gera o card das vagas para uma melhor padronização e redução de codigo.
export function gerarCardsVagas(vagas, maxVagas, colSize = { sm: 12, md: 12, lg: 6 }) {
  let div = ''
  for (let vl in vagas) {
    if (vl < maxVagas || !maxVagas) {
      let empresa = pegarEmpresas({ id: vagas[vl].empresa_id })
      let habilidades = JSON.parse(localStorage.getItem('Habilidades')).filter(obj => vagas[vl].hab_essencial_id.includes(obj.id))
      div += `
        <div class='row col-sm-${colSize['sm']} col-md-${colSize['md']} col-lg-${colSize['lg']} align-items-center bg-light mt-2'>
          <div class="ratio ratio-1x1 col-sm-4">
            <a href='./empresa.html?id=${vagas[vl].empresa_id}'>
              <img src="${empresa.logo_link}" class="img-fluid rounded align-items-center" alt="LogoDaEmpresa">
            </a>
          </div>
          <div class="col-sm-8">
            <div class="row ">
              <a href='./vaga.html?id=${vagas[vl].id}' class="text-dark">
                <p id="vaga-nome" class="col-sm-12 text-left text-black mt-2"><strong>${vagas[vl].vaga_nome ? vagas[vl].vaga_nome : JSON.parse(localStorage.getItem('Cargos')).find(obj => obj.id === vagas[vl].cargo_id).nome}</strong></p>
              </a>
              <p id="empresa-data" class="col-sm-12 text-left"><a href='./empresa.html?id=${vagas[vl].empresa_id}'>${empresa.nome}</a> - <small>De: ${dataSimplificada(vagas[vl].data_cadastro)} - Até: ${dataSimplificada(vagas[vl].data_exp)}</small></p>
              <a href='./vaga.html?id=${vagas[vl].id}' class="text-dark">
                <p id="descricao" class="col-sm-12 text-left">${reduzirTexto(vagas[vl].descricao, 100)}</p>
              </a>
              <div class="col-sm-12 row text-center">
                ${gerarHabilidades(habilidades, 3, 4)}
              </div>
            </div>
          </div>
        </div>
      `
    }
  }
  return div
}


//set SouEmpresa

(function () {
  const empresa = verificarUsuario()
  if(!empresa){
    $('#navBar').append('<a class="nav-link" href="./login.html">Sou empresa</a>')
  }else{
    $('#navBar').append(`
    <li class="nav-item">        
      <a class="nav-link" href="./criar_vaga.html">Criar vaga</a>
    </li>
    <li class="nav-item">        
      <a class="nav-link" href="./empresaUser.html?id=${empresa}">Perfil da empresa</a>
    </li>
    <li class="nav-item">        
      <button onclick="(function () {
        localStorage.setItem('userValid',JSON.stringify({}));
        window.location.reload()
      })();" class="nav-link btn btn-link">Desconectar</button>
    </li>
    `)
  }
})();

//