let assert = chai.assert;

String.prototype.hashCode = function() {
  var hash = 0,
    i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
describe('Testes relacionados aos CT-? e CT-? e portanto só pode ser considerado após execução dos passos listados no plano de testes', function () {
  it('', function () {
    assert(1==1, '');
  });
 });

describe('Teste de registro', function () {
  const regexEmail = /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i
  const regexCNPJ = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{3})$/
  const user = JSON.parse(localStorage.getItem('EmpresaUser')).filter(obj => obj.login == 'emailtest@gmail.com')[0]
  const empresa = JSON.parse(localStorage.getItem('Empresas')).filter(obj => obj.id == user.empresa_id)[0]

  describe('Checando se o usuário  foi criado com sucesso', function () {
    it('O Usuario foi criado com sucesso', function () {
      assert(user, 'O usuario não existe');
    });
    it('A Empresa do usuario foi criada com sucesso', function () {
      assert(empresa, 'O usuario não existe');
    });
  });

  describe('Comparando informações de registro', function () {
    it('O Login está igual ao plano de testes', function () {
      assert(user.login == 'emailtest@gmail.com', 'O login está diferente do plano de testes');
    });
    it('A Senha está igual ao plano de testes', function () {
      assert(user.password == '!empresaTest123'.hashCode(), 'A Senha está diferente do plano de testes');
    });
    it('O Nome da empresa está igual ao plano de testes', function () {
      assert(empresa.nome == 'Empresa de testes', 'O nome da empresa está diferente do plano de testes');
    });
    it('O CNPJ da empresa está igual ao plano de testes', function () {
      assert(empresa.cnpj == '54.564.864/894', 'O CNPJ da empresa está diferente do plano de testes');
    });
  });
  describe('Verificando se regras de registro foram aplicadas corretamente', function () {
    it('O email está dentro do formato padrão de email', function () {
      assert(regexEmail.test(user.login), 'O email não está dentro do formato padrão de email xxx@xxx.com');
    });
    it('A CNPJ está dentro do formato padrão de CNPJ', function () {
      assert(regexCNPJ.test(empresa.cnpj), 'O CNPJ não está dentro do formato padrão de CNPJ');
    });
    it('A senha do usuário está codificada, portanto não temos acesso a original para verificações', function () {
    });
  });
});

describe("Teste de Vagas", function () {
  const user = JSON.parse(localStorage.getItem('EmpresaUser')).filter(obj => obj.login == 'emailtest@gmail.com')[0]
  const empresa = JSON.parse(localStorage.getItem('Empresas')).filter(obj => obj.id == user.empresa_id)[0]
  const vaga = JSON.parse(localStorage.getItem('Vagas')).filter(obj => obj.id == empresa.vagas_id[empresa.vagas_id.length-1])[0]
  const habilidadeEss = JSON.parse(localStorage.getItem('Habilidades')).filter(obj => obj.id == vaga.hab_essencial_id[0])[0]
  const habilidadeDif = JSON.parse(localStorage.getItem('Habilidades')).filter(obj => obj.id == vaga.hab_dif_id[0])[0]
  const senioridade = JSON.parse(localStorage.getItem('Senioridade')).filter(obj => obj.id == vaga.cargo_senioridade_id)[0]
  const cargo = JSON.parse(localStorage.getItem('Cargos')).filter(obj => obj.id == vaga.cargo_id)[0]

  describe("A Vaga foi criada com sucesso", function () {
    it("A vaga existe", function () {
      assert(vaga, 'O CNPJ não está dentro do formato padrão de CNPJ');
    });
    it("A vaga foi associada a empresa com sucesso", function () {
      assert(vaga.id == empresa.vagas_id[empresa.vagas_id.length-1], 'O CNPJ não está dentro do formato padrão de CNPJ');
    });
  });

  describe("Comparando informações de criação de vaga", function () {
    it("O Nome da vaga está de acordo com o plano de testes", function () {
      assert(vaga.vaga_nome == 'TESTE1', 'O Nome da vaga não está de acordo com o plano de testes');
    });
    it("A Habilidade essencial está de acordo com o plano de testes", function () {
      assert(habilidadeEss.nome == 'HTML', 'A Habilidade essencial não está de acordo com o plano de testes');
    });
    it("A Habilidade diferencial está de acordo com o plano de testes", function () {
      assert(habilidadeDif.nome == 'HTML', 'A Habilidade diferencial não está de acordo com o plano de testes');
    });
    it("A Senioridade está de acordo com o plano de testes", function () {
      assert(senioridade.nome == 'Senior', 'A Senioridade não está de acordo com o plano de testes');
    });
    it("O Cargo está de acordo com o plano de testes", function () {
      assert(cargo.nome == 'Analista de Dados', 'O Cargo não está de acordo com o plano de testes');
    });
    it("O Salario está de acordo com o plano de testes", function () {
      assert(parseInt(vaga.salario) == 11500, 'O Salario não está de acordo com o plano de testes');
    });
    it("A Data final está de acordo com o plano de testes", function () {
      assert(vaga.data_exp == '2025-05-05', 'A Data final não está de acordo com o plano de testes');
    });
    it("A Descrição está de acordo com o plano de testes", function () {
      assert(vaga.descricao == 'Testando campos', 'A Descrição não está de acordo com o plano de testes');
    });
  });

});