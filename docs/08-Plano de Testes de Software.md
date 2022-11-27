# Plano de Testes de Software

Os planejamentos dos testes a serem realizados serão descritos abaixo de acordo com suas respectivas categorias.

- Testes de ponta a ponta: Será realizado testes do ponto de vista do usuario final

- Testes de campos: Será realizado os testes dos campos de grande importancia para a aplicação de forma manual e também com ferramentas de testes em JS, seguindo normas padrão e regras de negocio.

- Testes de navegabilidade: Será realizado atráves ferramentas online.

- Testes de responsividade: Será realizado atráves ferramentas online.

Consulte <span style="color:red"><a href="02-Especificação do Projeto.md"> Especificação do Projeto </a></span> para melhor entendimento dos requisitos que serão trabalhados a seguir.

É de extrema importancia limpar seu local storage associado a nossa pagina para a execução correta do software (obs: Limpar apenas o local storage de nossa pagina para evitar perder suas informações de outros sites)
<hr>

# Testes de Ponta a ponta
| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-001 O site deve apresentar na página principal deve mostrar uma apresentação da ferramenta |
|Descrição do teste | X |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-002 O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas) |
|Descrição do teste | X |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas |
|Descrição do teste | Verificar se a página "lista de vagas" está acessível e interativa. |
|Passos | <ol><li>Informar o endereço do site ao navegador.</li><li>Acessar a página inicial.</li><li>Clicar no botão "Ver Vagas" na página principal ou na nav bar.</li><li>Acessar a página "Lista de Vagas".</li></ol> |
| Resultado esperado | A página deve apresentar uma lista de vagas postadas pelas empresas cadastradas no site, uma imagem de destaque da vaga e um breve resumo da descrição e habilidades da vaga.    |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas; RF-007  O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade |
|Descrição do teste | Verificar se a barra de pesquisa encontra vagas validas corretamente. |
|Passos | <ol><li> Clicar no botão "Ver Vagas" na página principal ou na nav bar</li><li>Acessar a página "Lista de Vagas"</li><li>Pesquisar por "front" na barra de pesquisa.</li></ol> |
| Resultado esperado | Vaga de desenvolvedor Front End pela Super Tech  |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas; RF-007  O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade |
|Descrição do teste | Verificar se a barra de pesquisa não exibe resultados ao efetuar uma pesquisa de vaga inexistente. |
|Passos | <ol><li> Clicar no botão "Ver Vagas" na página principal ou na nav bar</li><li>Acessar a página "Lista de Vagas"</li><li>Pesquisar por "psicologo" na barra de pesquisa.</li></ol> |
| Resultado esperado | Uma lista vazia com a seguinte mensagem: Não existem vagas no momento, tente alterar seus filtros. |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas; RF-007  O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade |
|Descrição do teste | Verificar se o filtro por categoria está encontrando vagas validas corretamente. |
|Passos | <ol><li> Clicar no botão "Ver Vagas" na página principal ou na nav bar</li><li>Acessar a página "Lista de Vagas"</li><li>Usar o filtro para buscar pela habilidade "React".</li></ol> |
| Resultado esperado | Vaga de desenvolvedor back-end pela Progressus  |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-004 O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas) |
|Descrição do teste | X |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível chegar a pagina de criação de vaga atráves da aplicação |
|Passos | <ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li>Efetuar login</li><li>Clicar em Nova Vaga</li></ol> |
| Resultado esperado | Chegar a pagina de criação de vagas com sucesso |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível criar uma nova vaga seguindo todo o processo com informações validas |
|Passos | <ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li>Efetuar login</li><li>Clicar em Nova Vaga</li><li>Preencher formulario com: <ol><li>Nome da vaga: Dev Front-end</li> <li>Habilidades essenciais: JavaScript</li> <li>Habilidades diferenciais: HTML</li><li>Senioridade: Junior</li><li>Cargo: Desenvolvedor Front-end</li><li>Salario: 2000</li> <li>Data final da vaga: 01/01/2023</li><li>Descrição: Nova vaga Front-end</li></ol></li><li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | A nova vaga aparecer na lista de vagas da empresa com informações correspondentes ao preenchido |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma nova vaga seguindo todo o processo com todas as informações em branco |
|Passos | <ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li>Efetuar login</li><li>Clicar em Nova Vaga</li><li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível acessar a pagina de login seguindo todo o processo pela aplicação |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li></ol> |
| Resultado esperado | Chegar a pagina de login com sucesso |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível acessar a pagina de registro seguindo todo o processo pela aplicação |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li> <li>Clicar em Cadastre-se</li></ol> |
| Resultado esperado | Chegar a pagina de registro com sucesso |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível se registrar com sucesso seguindo os passos e inserindo informações validas |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li> <li>Clicar em Cadastre-se</li><li>Inserir:<ol><li>Nome da Empresa: EmpresaValida</li><li>Email: empresavalida@gmail.com</li><li>CNPJ: 12.945.701/0001-82</li><li>Senha: 123456</li> <li>Confirme sua senha: 123456</li></ol></li><li>Clicar em Cadastrar</li> <li>Efetuar login com informações registradas</li></ol> |
| Resultado esperado | Ser redirecionado para a pagina da empresa com sucesso e com informações correspondentes |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se registrar com todos os campos em branco |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li> <li>Clicar em Cadastre-se</li><li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao se cadastrar com informativos sobre o erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível efetuar login seguindo os passos e inserindo informações validas |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li><li>Inserir:<ol><li>Email: eletrosurf@gmail.com</li><li>Senha: !eletrosurf123</li></ol></li><li>Clicar em entrar</li> </ol> |
| Resultado esperado |  Ser redirecionado para a pagina da empresa com sucesso e com informações correspondentes |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível efetuar login com todos os campos em branco|
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li><li>Clicar em entrar</li></ol> |
| Resultado esperado |  Erro ao efetuar login com descritivos do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível efetuar login seguindo os passos e inserindo um email valido e uma senha invalida |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li><li>Inserir:<ol><li>Email: eletrosurf@gmail.com</li><li>Senha: 123456</li></ol></li><li>Clicar em entrar</li> </ol> |
| Resultado esperado |  Erro ao efetuar login com descritivos do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível efetuar login seguindo os passos e inserindo um email invalido e uma senha valida |
|Passos | <ol><li>Acessar a pagina inicial</li><li>Clicar em "Sou Empresa"</li><li>Inserir:<ol><li>Email: eletro@gmail.com</li><li>Senha: !eletrosurf123</li></ol></li><li>Clicar em entrar</li> </ol> |
| Resultado esperado |  Erro ao efetuar login com descritivos do erro |

<hr>

# Testes de Campos

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas. |
|Descrição do teste | Deve ser possível inserir um nome na vaga com quaisquer caracteres, números ou caracteres especiais. |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>Escrever em "Nome da vaga": aaAA11!@#$%¨¨&*()_{}[] </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar um vaga sem nome |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> Manter campo "Nome da vaga" em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível selecionar uma ou mais habilidades essenciais |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> No campo "Habilidades essenciais" selecionar: [JavaScript, HTML, REACT] </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma vaga sem habilidades essenciais |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> No campo "Habilidades essenciais" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível selecionar uma ou mais habilidades diferenciais |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> No campo "Habilidades diferenciais" selecionar: [Golang, Python] </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li><li>Clicar no nome da vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível criar uma vaga sem habilidades diferenciais |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> No campo "Habilidades diferenciais" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível selecionar uma senioridade |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>Em "Senioridade" selecionar: "Pleno" </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma vaga sem senioridade |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>Em "Senioridade" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível selecionar um cargo |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Cargo" selecionar: "Desenvolvedor Front-end" </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma vaga sem cargo |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Cargo" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível definir um salario para a vaga |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Salario" digitar: 9500 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma vaga sem salario |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Salario" deixar em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível definir um data para expiração da a vaga |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Data final da vaga" selecionar: 10/10/2023 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma vaga com data para expiração da vaga anterior ao dia atual |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Data final da vaga" selecionar: 01/01/2022 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser impossível criar uma vaga sem data de expiração |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Data final da vaga" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Erro ao criar vaga com descritivo de qual campo está incorreto |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível definir uma descrição para a vaga com quaisquer caracteres, numeros ou caracteres especiais |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>Escrever em "Descrição da vaga": aaAA11!@#$%¨¨&*()_{}[] </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Deve ser possível criar uma vaga sem descrição |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>Em "Descrição da vaga" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
| Resultado esperado | Redirecionamento para pagina de perfil da empresa e apresentação da nova vaga no perfil |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Ao criar uma vaga, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>Completar campos com: <ol><li>Nome da vaga: TESTE1</li> <li>Habiilidades essenciais: HTML</li><li>Habilidades diferenciais: HTML</li><li>Senioridade: Senior</li><li>Cargo: Analista de Dados</li> <li>Salario: 11500</li><li>Data final da vaga: 05/05/2025</li> <li>Descrição da vaga: Testando campos</li></ol></li> <li>Clicar em Criar Vaga</li> <li>Clicar no nome da vaga</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
| Resultado esperado | Todos os valores devem estar de acordo |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | Ao criar uma vaga, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario e devem ser verificadas através de javascript |
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
| Resultado esperado | Todos os valores devem estar de acordo |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível inserir um nome para a empresa com quaisquer caracteres, números ou caracteres especiais. |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "Nome da Empresa": EmpresaTest123!@#$%¨¨&*()_{}[] </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login com informações cadastradas</li></ol> |
| Resultado esperado | Redirecionamento para a pagina de perfil da empresa |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar sem inserir o nome da empresa |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Em "Nome da Empresa" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível inserir um email valido para a empresa |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "Email": empresatest@gmail.com </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login com informações cadastradas</li> </ol> |
| Resultado esperado | Redirecionamento para a pagina de perfil da empresa |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível inserir um email invalido para a empresa |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "Email": empresatest!! </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível inserir um CNPJ valido para a empresa|
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "CNPJ": 12.945.701/0001-82 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login com informações cadastradas</li> </ol> |
| Resultado esperado | Redirecionamento para a pagina de perfil da empresa |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível inserir um CNPJ invalido para a empresa|
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "CNPJ": 12.945.701 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar sem inserir um CNPJ|
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Em "CNPJ" manter em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser possível se cadastrar inserindo uma senha de 6 ou mais caracteres e confirmando a senha|
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "Senha" e "Confime sua senha": aA123! </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login com informações cadastradas</li> </ol> |
| Resultado esperado | Redirecionamento para a pagina de perfil da empresa |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar inserindo uma senha com menos de 6 caracteres |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "Senha" e "Confime sua senha": 12345 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar inserindo uma senha e um confime sua senha diferentes, mesmo que a senha seja valida |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Escrever em "Senha": 123456 e em "Confime sua senha": 1234567 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar sem inserir uma senha |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li>Em "Senha" e em "Confime sua senha": deixar em branco </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar duas vezes com o mesmo Email |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li> Cadastar com o email: empresarepetida@gmail.com </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li> Clicar em Cadastre-se </li> <li> Cadastar com o email: empresarepetida@gmail.com </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Deve ser impossível se cadastrar duas vezes com o mesmo Nome |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li> Cadastar com o Nome: EmpresaRepetida </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li> Clicar em Cadastre-se </li> <li> Cadastar com o Nome: EmpresaRepetida </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> </ol> |
| Resultado esperado | Erro ao cadastrar com informações do erro |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li> Completar campos com: <ol><li>Nome da Empresa: Empresa de testes</li><li>Email: emailtest@gmail.com</li><li>CNPJ: 54.564.864/894</li><li>Senha:!empresaTest123</li><li>Confirme sua senha:!empresaTest123</li></ol></li> <li>Clicar em Cadastrar</li> <li>Efetuar login</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
| Resultado esperado | Todos os valores que são exibidos ao usuario devem estar de acordo |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro e devem ser verificadas através de javascript |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li> Completar campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
| Resultado esperado | Todos os valores devem estar de acordo |

<hr>

# Testes de Navegabilidade <li></li>

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da home.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da home.html </li></ol> |
| Resultado esperado | Todos os links encontrados |

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da vaga.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da vaga.html com id </li></ol> |
| Resultado esperado | Todos os links encontrados |

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da vagas_lista.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da vagas_lista.html </li></ol> |
| Resultado esperado | Todos os links encontrados |

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da resumo.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link do resumo.html </li></ol> |
| Resultado esperado | Todos os links encontrados |

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da habilidade.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da habilidade.html com id </li></ol> |
| Resultado esperado | Todos os links encontrados |

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da empresa.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da empresa.html com id </li></ol> |
| Resultado esperado | Todos os links encontrados |

| ID | CT-? | 
|------|---------------------|
|Descrição do teste | Teste de navegabilidade da cargo.html |
|Passos | <ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link do cargo.html com id </li></ol> |
| Resultado esperado | Todos os links encontrados |

<hr>

# Testes de Responsividade

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de home.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de home.html</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de vagas_lista.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de vagas_lista.html</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de vaga.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de vaga.html com um id valido</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de resumo.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de resumo.html</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de login.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de login.html</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de habilidade.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de habilidade.html com um id valido</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de empresa.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de empresa.html com um id valido</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de criar_vaga.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de criar_vaga.html</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de cargo.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de cargo.html com um id valido</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

| ID | CT-? |
|------|---------------------|
|Descrição do teste | Teste de responsividade de cadastro.html |
|Passos | <ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de cadastro.html</li></ol> |
| Resultado esperado | A pagina deve receber resultado positivo para ser utilizado em dispositivos móveis |

<hr>

# Referencias

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> - [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
