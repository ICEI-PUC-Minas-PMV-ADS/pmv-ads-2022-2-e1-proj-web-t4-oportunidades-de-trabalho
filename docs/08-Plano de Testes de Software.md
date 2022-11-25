# Plano de Testes de Software

Os planejamentos dos testes a serem realizados serão descritos abaixo de acordo com suas respectivas categorias.

- Testes de ponta a ponta: Será realizado testes do ponto de vista do usuario final

- Testes de campos: Será realizado os testes dos campos de grande importancia para a aplicação de forma manual e também com ferramentas de testes em JS, seguindo normas padrão e regras de negocio.

- Testes de navegabilidade: Será realizado atráves ferramentas online e manualmente pelos desenvolvedores.

- Testes de responsividade: Será realizado atráves ferramentas online e manualmente pelos desenvolvedores.

Consulte <span style="color:red"><a href="02-Especificação do Projeto.md"> Especificação do Projeto </a></span> para melhor entendimento dos requisitos que serão trabalhados a seguir.

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
| Resultado esperado | <ul><li>A página deve apresentar uma lista de vagas postadas pelas empresas cadastradas no site, uma imagem de destaque da vaga e um breve resumo da descrição e habilidades da vaga. </li></ul>   |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas; RF-007  O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade |
|Descrição do teste | Verificar se a barra de pesquisa está funcionando corretamente. |
|Passos | <ol><li> Clicar no botão "Ver Vagas" na página principal ou na nav bar</li><li>Acessar a página "Lista de Vagas"</li><li>Pesquisar por "front" na barra de pesquisa.</li></ol> |
| Resultado esperado | <ul><li>Vaga de desenvolvedor Front End pela Super Tech</li></ul>  |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas; RF-007  O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade |
|Descrição do teste | Verificar se a barra de pesquisa está funcionando corretamente. |
|Passos | <ol><li> Clicar no botão "Ver Vagas" na página principal ou na nav bar</li><li>Acessar a página "Lista de Vagas"</li><li>Pesquisar por "psicologo" na barra de pesquisa.</li></ol> |
| Resultado esperado | <ul><li>Uma lista vazia com a seguinte mensagem: Não existem vagas no momento, tente alterar seus filtros.</li></ul>  |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas; RF-007  O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade |
|Descrição do teste | Verificar se o filtro por categoria está funcionando corretamente. |
|Passos | <ol><li> Clicar no botão "Ver Vagas" na página principal ou na nav bar</li><li>Acessar a página "Lista de Vagas"</li><li>Usar o filtro para buscar pela habilidade "React".</li></ol> |
| Resultado esperado | <ul><li>Vaga de desenvolvedor back-end pela Progressus</li></ul>  |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-004 O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas) |
|Descrição do teste | X |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | É possível criar uma nova vaga seguindo todo o processo necessário? |
|Passos | <ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li>Efetuar login</li><li>Clicar em Nova Vaga</li><li>Preencher formulario e enviar</li></ol> |
| Resultado esperado | <ul><li>Conseguir acessar todas as paginas pela propria aplicação</li><li>Criar uma vaga com sucesso ao preencher o formulario</li><li>A nova vaga aparecer na lista de vagas da empresa </li></ul> |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | É possível para uma empresa se cadastrar e efetuar login? |
|Passos | <ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li>Clicar em Cadaste-se</li><li>Efetuar cadastro com sucesso ao preencher informações</li><li>Efetuar login</li><li>Ser redirecionado para a pagina da sua empresa</li></ol> |
| Resultado esperado | <ul><li>Conseguir acessar todas as paginas pela propria aplicação</li> <li>Conseguir se cadastrar com sucesso ao preencher informações</li> <li>Ser redirecionado com sucesso para a pagina da empresa</li></ul> |

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
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> No campo "Habilidades diferenciais" selecionar: [Golang, Python] </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
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
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li>No campo "Data final da vaga" selecionar: 01/01/2023 </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li></ol> |
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
|Passos | <ol><li>Executar cadastro e login.</li> <li> Clicar em Nova Vaga </li> <li> Completar outros campos do formulario com informações validas</li> <li>Clicar em Criar Vaga</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
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
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li> Completar campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
| Resultado esperado | Todos os valores que são exibidos ao usuario devem estar de acordo |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados |RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro e devem ser verificadas através de javascript |
|Passos | <ol><li>Acessar Sou Empresa</li> <li> Clicar em Cadastre-se </li> <li> Completar campos do formulario com informações validas</li> <li>Clicar em Cadastrar</li> <li>Efetuar login</li> <li>Comparar valores inseridos com os exibidos</li></ol> |
| Resultado esperado | Todos os valores devem estar de acordo |


<hr>

# Testes de Navegabilidade

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-001 O site deve apresentar na página principal deve mostrar uma apresentação da ferramenta |
|Descrição do teste | É possivel navegar por todos os links da pagina? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

 ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-001 O site deve apresentar na página principal deve mostrar uma apresentação da ferramenta |
|Descrição do teste |Todos os links direcionam para o caminho correto? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-002 O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas) |
|Descrição do teste | É possivel navegar por todos os links da pagina? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

 ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-002 O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas) |
|Descrição do teste |Todos os links direcionam para o caminho correto? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas |
|Descrição do teste | É possivel navegar por todos os links da pagina? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

 ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas |
|Descrição do teste |Todos os links direcionam para o caminho correto? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-004 Ao clicar em uma vaga da lista o site deve permitir ao usuário (profissional) visualizar o texto completo da vaga com todos os detalhes da publicação e se candidatar às vagas postadas |
|Descrição do teste | É possivel navegar por todos os links da pagina? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

 ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-004 Ao clicar em uma vaga da lista o site deve permitir ao usuário (profissional) visualizar o texto completo da vaga com todos os detalhes da publicação e se candidatar às vagas postadas |
|Descrição do teste |Todos os links direcionam para o caminho correto? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | É possivel navegar por todos os links da pagina? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

 ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste |Todos os links direcionam para o caminho correto? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | É possivel navegar por todos os links da pagina? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

 ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste |Todos os links direcionam para o caminho correto? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

<hr>

# Testes de Responsividade

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-001 O site deve apresentar na página principal deve mostrar uma apresentação da ferramenta |
|Descrição do teste | A pagina é responsiva para desktop, tablet e smartphone? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-002 O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas) |
|Descrição do teste | A pagina é responsiva para desktop, tablet e smartphone? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-003 O site deve possuir uma página com a listagem das vagas postadas |
|Descrição do teste | A pagina é responsiva para desktop, tablet e smartphone? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-004 Ao clicar em uma vaga da lista o site deve permitir ao usuário (profissional) visualizar o texto completo da vaga com todos os detalhes da publicação e se candidatar às vagas postadas |
|Descrição do teste | A pagina é responsiva para desktop, tablet e smartphone? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-005 O site deve permitir ao usuário (empresas) postar vagas |
|Descrição do teste | A pagina é responsiva para desktop, tablet e smartphone? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

| ID | CT-? |
|------|---------------------|
| Requisitos Associados | RF-013 O site deve permitir cadastro de usuário (profissionais e empresas) |
|Descrição do teste | A pagina é responsiva para desktop, tablet e smartphone? |
|Passos | <ol><li>X</li></ol> |
| Resultado esperado | X |

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
