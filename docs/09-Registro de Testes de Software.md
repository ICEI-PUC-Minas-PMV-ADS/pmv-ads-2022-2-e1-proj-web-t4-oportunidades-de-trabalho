# Registro de Testes de Software

Os resultados obtidos seguindo o <span style="color:red"><a href="08-Plano de Testes de Software.md"> Plano de Testes de Software </a></span> serão descritos a seguir

Consulte <span style="color:red"><a href="02-Especificação do Projeto.md"> Especificação do Projeto </a></span> para melhor entendimento dos requisitos que serão trabalhados a seguir.

Gravidade

- Sucesso: Nenhuma ação necessária
- Grave: Ação obrigatória antes da entrega final do projeto
- Media: Ação recomendada para melhora da qualidade do software
- Baixa: Ação não obrigatória mas que melhoraria a qualidade do software

# Testes de Ponta a ponta simplificado
|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-001|  | | | 
|CT-? <br> RF-002|  | | |
|CT-? <br> RF-003| Verificar se a página "lista de vagas" está acessível e interativa. | A página se mostrou em pleno funcionamento, apresentando a lista de vagas adequadamente | Sucesso |
|CT-? <br> RF-004| Deve ser possível chegar a página da vaga de interesse por meio da aplicação,realizando a requisição ao clicar, e acessando a página com possibilidade de candidatura | A página se mostrou operação parcial, sendo possível acessar a página da vaga, e ter acesso as informações referentes a mesma, mas não há meio para a candidatura da vaga implementado. | Grave |
|CT-? <br> RF-007| Verificar se a barra de pesquisa encontra vagas validas corretamente. | A barra de pesquisa funcionou perfeitamente retornando resultado esperados do teste | Sucesso | 
|CT-? <br> RF-007| Verificar se a barra de pesquisa não exibe resultados ao efetuar uma pesquisa de vaga inexistente. | A barra de pesquisa funcionou perfeitamente retornando uma lista vazia, resultado esperado do teste | Sucesso | 
|CT-? <br> RF-007| Verificar se o filtro por categoria está encontrando vagas validas corretamente. | O filtro por categoria funcionou perfeitamente retornando resultado esperados do teste | Sucesso | 
|CT-? <br> RF-005| Deve ser possível chegar a pagina de criação de vaga atráves da aplicação | A pagina foi exibida adequadamente e dinamicamente |  Sucesso |
|CT-? <br> RF-005| Deve ser possível criar uma nova vaga seguindo todo o processo com informações validas | A vaga foi criada corretamente e exibida de acordo |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar uma nova vaga seguindo todo o processo com todas as informações em branco | Um erro foi exibido conforme o esperado e informando os campos que devem ser preenchidos |  Sucesso |
|CT-? <br> RF-013| Deve ser possível acessar a pagina de login seguindo todo o processo pela aplicação | A pagina foi exibida adequadamente e dinamicamente |  Sucesso |
|CT-? <br> RF-013| Deve ser possível acessar a pagina de registro seguindo todo o processo pela aplicação | A pagina foi exibida adequadamente e dinamicamente |  Sucesso |
|CT-? <br> RF-013| Deve ser possível se registrar com sucesso seguindo os passos e inserindo informações validas | O cadastro foi efetuado com sucesso e pagina da empresa exibida |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível se registrar com todos os campos em branco | Um erro foi exibido como esperado e não foi possível efetuar o cadastro |  Sucesso |
|CT-? <br> RF-013| Deve ser possível efetuar login seguindo os passos e inserindo informações validas | O login foi efetuado com sucesso e pagina da empresa foi exibida de acordo |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível efetuar login com todos os campos em branco | Um erro foi exibido como o esperado e não foi possível efetuar login |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível efetuar login seguindo os passos e inserindo um email valido e uma senha invalida | Um erro foi exibido como o esperado e não foi possível efetuar login |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível efetuar login seguindo os passos e inserindo um email invalido e uma senha valida | Um erro foi exibido como o esperado e não foi possível efetuar login |  Sucesso |


# Testes de Campos simplificado
|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-005| Deve ser possível inserir um nome na vaga com quaisquer caracteres, números ou caracteres especiais. | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso com o nome: aaAA11!@#$%¨¨&*()_{}[] |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar um vaga sem nome | Um erro foi exibido como esperado e não foi possível criar a vaga |  Sucesso |
|CT-? <br> RF-005| Deve ser possível selecionar uma ou mais habilidades essenciais | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso com as habilidades essenciais: Javascript, HTML, REACT |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar uma vaga sem habilidades essenciais | Um erro foi exibido como esperado e não foi possível criar a vaga |  Sucesso |
|CT-? <br> RF-005| Deve ser possível selecionar uma ou mais habilidades diferenciais | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso com as habilidades diferenciais: Golang e Python |  Sucesso |
|CT-? <br> RF-005| Deve ser possível criar uma vaga sem habilidades diferenciais | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso sem habilidades difereiciais |  Sucesso |
|CT-? <br> RF-005| Deve ser possível selecionar uma senioridade | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar uma vaga sem senioridade | Um erro foi exibido como esperado e não foi possível criar a vaga |  Sucesso |
|CT-? <br> RF-005| Deve ser possível selecionar um cargo | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar uma vaga sem cargo | Um erro foi exibido como esperado e não foi possível criar a vaga |  Sucesso |
|CT-? <br> RF-005| Deve ser possível definir um salario para a vaga | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar uma vaga sem salario | Um erro foi exibido como esperado e não foi possível criar a vaga |  Sucesso |
|CT-? <br> RF-005| Deve ser possível definir um salario para a vaga | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso |  Sucesso |
|CT-? <br> RF-005| Deve ser impossível criar uma vaga com data para expiração da vaga anterior ao dia atual | A vaga foi criada indevidamente, porém não aparece em nenhuma lista ou pagina |  Baixa |
|CT-? <br> RF-005| Deve ser impossível criar uma vaga sem data de expiração | Um erro foi exibido como esperado e não foi possível criar a vaga |  Sucesso |
|CT-? <br> RF-005| Deve ser possível definir uma descrição para a vaga com quaisquer caracteres, numeros ou caracteres especiais | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso |  Sucesso |
|CT-? <br> RF-005| Deve ser possível criar uma vaga sem descrição | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso |  Sucesso |
|CT-? <br> RF-005| Ao criar uma vaga, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario | Todas as informações estavam de acordo com o criado |  Sucesso |
|CT-? <br> RF-005| Ao criar uma vaga, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario e devem ser verificadas através de javascript | fixme |  fixme |
|CT-? <br> RF-013| Deve ser possível inserir um nome para a empresa com quaisquer caracteres, números ou caracteres especiais. | O cadastro foi efetuado com sucesso |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível se cadastrar sem inserir o nome da empresa | Um erro aconteceu como o esperado |  Sucesso |
|CT-? <br> RF-013| Deve ser possível inserir um email valido para a empresa | O cadastro foi efetuado com sucesso |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível inserir um email invalido para a empresa | Um erro aconteceu como o esperado |  Sucesso |
|CT-? <br> RF-013| Deve ser possível inserir um CNPJ valido para a empresa | O cadastro foi efetuado com sucesso	 |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível inserir um CNPJ invalido para a empresa | Um erro aconteceu como o esperado |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível se cadastrar sem inserir um CNPJ | Um erro aconteceu como o esperado |  Sucesso |
|CT-? <br> RF-013| Deve ser possível se cadastrar inserindo uma senha de 6 ou mais caracteres e confirmando a senha | O cadastro foi efetuado com sucesso |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível se cadastrar inserindo uma senha com menos de 6 caracteres |Um erro aconteceu como o esperado |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível se cadastrar inserindo uma senha e um confime sua senha diferentes, mesmo que a senha seja valida | Um erro aconteceu como o esperado |  Sucesso |
|CT-? <br> RF-013| Deve ser impossível se cadastrar duas vezes com o mesmo Email | O cadastro foi criado indevidamente na segunda tentativa |  Grave |
|CT-? <br> RF-013| Deve ser impossível se cadastrar duas vezes com o mesmo Nome |O cadastro foi criado indevidamente na segunda tentativa |  Media |
|CT-? <br> RF-013| Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro | As informações estavam de acordo com as cadastradas |  Sucesso |
|CT-? <br> RF-013| Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro e devem ser verificadas através de javascript | fixme |  fixme |
//Testes e imagens aqui.





# Testes de Navegabilidade simplificado
|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da home.html | Todos os links encontrados | Sucesso |
|CT-?| Teste de navegabilidade da vaga.html | Todos os links encontrados | Sucesso |
|CT-?| Teste de navegabilidade da vagas_lista.html | Todos os links encontrados | Sucesso |
|CT-?| Teste de navegabilidade da resumo.html | Todos os links encontrados | Sucesso |
|CT-?| Teste de navegabilidade da habilidade.html | Todos os links encontrados | Sucesso |
|CT-?| Teste de navegabilidade da empresa.html | Todos os links encontrados | Sucesso |
|CT-?| Teste de navegabilidade da cargo.html | Todos os links encontrados | Sucesso |

# Testes de Responsividade simplificado
|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de home.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de vagas_lista.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de vaga.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de resumo.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de login.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de habilidade.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de empresa.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de criar_vaga.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de cargo.html | Resultado positivo para dispositivos móveis | Sucesso |
|CT-?| Teste de responsividade de cadastro.html | Resultado positivo para dispositivos móveis | Sucesso |

# Testes de Ponta a ponta Completos

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-01|  | | | 

//Testes e imagens aqui.

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-02|  | | | 

//Testes e imagens aqui.

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-03| Deve ser possível chegar a página da vaga de interesse por meio da aplicação,realizando a requisição clicar, e acessando a página com o endpoint adequado a mesma. | Ser redirecionado para a vaga de interesse, e ter acesso a informações referentes a mesma, e meios de contatar a empresa para a aplicação da vaga.  | Grave |

![homepage](img/registro_de_testes/rf-003/home-ver-vagas.png)

Acessando a página "Lista de Vagas"

![listadevagas](img/registro_de_testes/rf-003/page-ver-vagas.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-04| Deve ser possível chegar a página da vaga de interesse por meio da aplicação, realizando a requisição ao clicar, e acessando a página da vaga com as informações referentes a mesma, com meios de contatar a empresa para a aplicação da vaga. | A página se mostrou operação parcial, sendo possível acessar a página da vaga, e ter acesso as informações referentes a mesma, mas não há meio para a candidatura da vaga implementado.  | Grave |

1. Informar o endereço do site no navegador.

2. Acessar a "página inicial".

![image](https://user-images.githubusercontent.com/107289791/204161358-10c50d94-2808-4aff-923b-243345e40907.png)

3. Clicar no título em negrito de uma das "Últimas Vagas".

![img1](https://user-images.githubusercontent.com/107289791/204161386-ff45de60-c8a8-4ad7-b0e6-a6e0ea064d45.png)

4. Acessar a página da vaga em questão.

![img2](https://user-images.githubusercontent.com/107289791/204161402-902daa39-f436-4709-a6e5-c22e247aeb10.png)

5. Ter acesso a informações referentes a vaga de interesse.

6. Poder se candidatar a vaga

![img3](https://user-images.githubusercontent.com/107289791/204161422-377a99fe-5942-44f4-ab46-baed3fe8881c.png)


|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-07| Verificar se a barra de pesquisa encontra vagas validas corretamente.| A barra de pesquisa funcionou perfeitamente retornando resultado esperados do teste |Sucesso | 

Objetivo: Testar barra de busca; 

Pesquisar: front 

Saída esperada: Vaga de desenvolvedor Front End pela Super Tech

![barra de pesquisa](img/registro_de_testes/rf-007/barra-de-pesquisa.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-07|Verificar se a barra de pesquisa não exibe resultados ao efetuar uma pesquisa de vaga inexistente. | A barra de pesquisa funcionou perfeitamente retornando uma lista vazia, resultado esperado do teste |Sucesso | 

Objetivo: Testar barra de busca

Pesquisar : psicologo 

Saída esperada: Uma lista vazia com a seguinte mensagem: Não existem vagas no momento, tente alterar seus filtros.

![barra de pesquisa2](img/registro_de_testes/rf-007/teste-failed-psicologo.png)


|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-07| Verificar se o filtro por categoria está encontrando vagas validas corretamente. | O filtro por categoria funcionou perfeitamente retornando resultado esperados do teste |Sucesso | 

Objetivo: Testar filtro de categoria 

Filtrar por: React 

Saída esperada : Vaga de desenvolvedor back-end pela Progressus

![filtro](img/registro_de_testes/rf-007/filtro-de-habilidade.png)


|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-005| Deve ser possível chegar a pagina de criação de vaga atráves da aplicação | A pagina foi exibida adequadamente e dinamicamente |  Sucesso |

1. Acessar a pagina inicial e clicar em "Sou Empresa"

![Pagina inicial](img/registro_de_testes/rf-005/home_empresa.png)

2. Efetuar login

![Login](img/registro_de_testes/rf-005/login.png)

3. Clicar em Nova Vaga

![Nova Vaga ](img/registro_de_testes/rf-005/novaVaga.png)


|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-005| Deve ser possível criar uma nova vaga seguindo todo o processo com informações validas | A vaga foi criada corretamente e exibida de acordo |  Sucesso |

1. Acessar a pagina inicial e clicar em "Sou Empresa"

![Pagina inicial](img/registro_de_testes/rf-005/home_empresa.png)

2. Efetuar login

![Login](img/registro_de_testes/rf-005/login.png)

3. Clicar em Nova Vaga

![Nova Vaga ](img/registro_de_testes/rf-005/novaVaga.png)

4. Preencher formulario com as informações:
& 
5. Clicar em Criar Vaga

![Vaga valida ](img/registro_de_testes/rf-005/vagaValida.png)
![Vaga valida Criada ](img/registro_de_testes/rf-005/vagaValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-005| Deve ser impossível criar uma nova vaga seguindo todo o processo com todas as informações em branco | Um erro foi exibido conforme o esperado e informando os campos que devem ser preenchidos |  Sucesso |

1. Acessar a pagina inicial e clicar em "Sou Empresa"

![Pagina inicial](img/registro_de_testes/rf-005/home_empresa.png)

2. Efetuar login

![Login](img/registro_de_testes/rf-005/login.png)

3. Clicar em Nova Vaga

![Nova Vaga ](img/registro_de_testes/rf-005/novaVaga.png)

4. Clicar em Criar Vaga

![Vaga Invalida Criada ](img/registro_de_testes/rf-005/vagaInvalidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013|Deve ser possível acessar a pagina de login seguindo todo o processo pela aplicação | A pagina foi exibida adequadamente e dinamicamente |  Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)
![Login](img/registro_de_testes/rf-013/login.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser possível acessar a pagina de registro seguindo todo o processo pela aplicação | A pagina foi exibida adequadamente e dinamicamente |  Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)

3. Clicar em Cadastre-se

![Cadastre-se](img/registro_de_testes/rf-013/cadastrese.png)
![Registro](img/registro_de_testes/rf-013/registro.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser possível se registrar com sucesso seguindo os passos e inserindo informações validas | O cadastro foi efetuado com sucesso e pagina da empresa exibida |  Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)

3. Clicar em Cadastre-se

![Cadastre-se](img/registro_de_testes/rf-013/cadastrese.png)

4. Inserir as informações
&
5. Clicar em Cadastrar
![Registro Valido](img/registro_de_testes/rf-013/registroValido.png)

6. Efetuar login com informações registradas
![Login Valido](img/registro_de_testes/rf-013/loginValido.png)
![Login Valido Perfil](img/registro_de_testes/rf-013/loginValidoPerfil.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se registrar com todos os campos em branco | Um erro foi exibido como esperado e não foi possível efetuar o cadastro |  Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)

3. Clicar em Cadastre-se

![Cadastre-se](img/registro_de_testes/rf-013/cadastrese.png)

4. Clicar em Cadastrar
![Registro Invalido](img/registro_de_testes/rf-013/registroInvalido.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser possível efetuar login seguindo os passos e inserindo informações validas | O login foi efetuado com sucesso e pagina da empresa foi exibida de acordo |  Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)

3. Inserir as informações de acordo:
&
4. Clicar em Entrar
![Login](img/registro_de_testes/rf-013/login.png)
![Login Existente](img/registro_de_testes/rf-013/loginExistente.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível efetuar login com todos os campos em branco | Um erro foi exibido como o esperado e não foi possível efetuar login | Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)
3. Clicar em Entrar
![Login Invalido](img/registro_de_testes/rf-013/loginInvalido.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível efetuar login seguindo os passos e inserindo um email valido e uma senha invalida | Um erro foi exibido como o esperado e não foi possível efetuar login | Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)

3. Inserir as informações de acordo:
&
4. Clicar em Entrar
![Senha Incorreta](img/registro_de_testes/rf-013/senhaIncorreta.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível efetuar login seguindo os passos e inserindo um email invalido e uma senha valida | Um erro foi exibido como o esperado e não foi possível efetuar login | Sucesso |

1. Acessar a pagina inicial
&
2. Clicar em "Sou Empresa"
![Pagina inicial](img/registro_de_testes/rf-013/home_empresa.png)

3. Inserir as informações de acordo:
&
4. Clicar em Entrar
![Email Incorreto](img/registro_de_testes/rf-013/emailIncorreto.png)


# Testes de Campos completos

Os passos genéricos seram abordados nos testes de ponta a ponta, portanto essas etapas serão puladas para melhor compreensão dos testes.

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível inserir um nome na vaga com quaisquer caracteres, números ou caracteres especiais. | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso com o nome: aaAA11!@#$%¨¨&*()_{}[] | Sucesso | 

1. Escrever em "Nome da vaga": aaAA11!@#$%¨¨&*()_{}[]
2. Completar outros campos do formulario com informações validas
![Nome Valido](img/registro_de_testes/teste_de_campos/rf-005/nomeValido.png)

3. Clicar em Criar Vaga

![Nome Valido](img/registro_de_testes/teste_de_campos/rf-005/nomeValidoCriado.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar um vaga sem nome | Um erro foi exibido como esperado e não foi possível criar a vaga | Sucesso | 

1. Manter campo "Nome da vaga" em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Nome Invalido](img/registro_de_testes/teste_de_campos/rf-005/nomeInvalido.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível selecionar uma ou mais habilidades essenciais| O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso com as habilidades essenciais: Javascript, HTML, REACT | Sucesso | 

1. No campo "Habilidades essenciais" selecionar: [JavaScript, HTML, REACT]
2. Completar outros campos do formulario com informações validas
![Habilidade Essencial Valida](img/registro_de_testes/teste_de_campos/rf-005/habilidadeEssencialValida.png)

3. Clicar em Criar Vaga
![Habilidade Essencial Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/habilidadeEssencialValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar uma vaga sem habilidades essenciais| Um erro foi exibido como esperado e não foi possível criar a vaga | Sucesso | 

1. Manter campo "Habilidades essenciais" em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Habilidade Essencial Invalido](img/registro_de_testes/teste_de_campos/rf-005/habilidadeEssencialInvalido.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível selecionar uma ou mais habilidades diferenciais| O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso com as habilidades diferenciais: Golang e Python | Sucesso | 

1. No campo "Habilidades diferenciais" selecionar: [Golang, Python]
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Habilidade Diferencial Valida](img/registro_de_testes/teste_de_campos/rf-005/habilidadeDiferencialValida.png)
4. Clicar no nome da vaga
![Habilidade Diferencial Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/habilidadeDiferencialValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível criar uma vaga sem habilidades diferenciais| O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso sem habilidades difereiciais | Sucesso |

1. No campo "Habilidades diferenciais" manter em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Habilidade Diferencial Valida Branco](img/registro_de_testes/teste_de_campos/rf-005/habilidadeDiferencialValidaBranco.png)
4. Clicar no nome da vaga
![Habilidade Diferencial Valida Criada Branco](img/registro_de_testes/teste_de_campos/rf-005/habilidadeDiferencialValidaCriadaBranco.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível selecionar uma senioridade | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso | Sucesso | 

1. No campo "Senioridade" selecionar: "Pleno"
2. Completar outros campos do formulario com informações validas
![Senioridade Valida](img/registro_de_testes/teste_de_campos/rf-005/senioridadeValida.png)

3. Clicar em Criar Vaga
![Senioridade Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/senioridadeValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar uma vaga sem senioridade |  Um erro foi exibido como esperado e não foi possível criar a vaga | Sucesso | 

1. No campo "Senioridade" deixar em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Senioridade Invalida](img/registro_de_testes/teste_de_campos/rf-005/senioridadeInvalido.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível selecionar um cargo | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso | Sucesso |

1. No campo "Cargo" selecionar: "Desenvolvedor Front-end"
2. Completar outros campos do formulario com informações validas
![Cargo Valida](img/registro_de_testes/teste_de_campos/rf-005/cargoValida.png)
3. Clicar em Criar Vaga
![Cargo Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/cargoValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar uma vaga sem cargo | Um erro foi exibido como esperado e não foi possível criar a vaga | Sucesso | 

1. No campo "Cargo" deixar em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Cargo Invalida](img/registro_de_testes/teste_de_campos/rf-005/cargoInvalida.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível definir um salario para a vaga | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso | Sucesso |

1. No campo "Salario" digitar: 9500
2. Completar outros campos do formulario com informações validas
![Salario Valida](img/registro_de_testes/teste_de_campos/rf-005/salarioValida.png)
3. Clicar em Criar Vaga
![Salario Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/salarioValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar uma vaga sem salario | Um erro foi exibido como esperado e não foi possível criar a vaga | Sucesso | 

1. No campo "Salario" deixar em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Salario Invalida](img/registro_de_testes/teste_de_campos/rf-005/salarioInvalid.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível definir um salario para a vaga | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso | Sucesso |

1. No campo "Data final da vaga" selecionar: 10/10/2023
2. Completar outros campos do formulario com informações validas
![Expire Valida](img/registro_de_testes/teste_de_campos/rf-005/expireValida.png)
3. Clicar em Criar Vaga
![Expire Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/expireValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar uma vaga com data para expiração da vaga anterior ao dia atual | A vaga foi criada indevidamente, porém não aparece em nenhuma lista ou pagina | Baixa | 

1. No campo "Data final da vaga" selecionar: 01/01/2022
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Expire Invalida Old](img/registro_de_testes/teste_de_campos/rf-005/expireInvalidaOld.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser impossível criar uma vaga sem data de expiração | Um erro foi exibido como esperado e não foi possível criar a vaga | Sucesso | 

1. No campo "Data final da vaga" manter em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Criar Vaga
![Expire Invalida](img/registro_de_testes/teste_de_campos/rf-005/expireInvalido.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível definir uma descrição para a vaga com quaisquer caracteres, numeros ou caracteres especiais | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso | Sucesso |

1. Escrever em "Descrição da vaga": aaAA11!@#$%¨¨&*()_{}[]
2. Completar outros campos do formulario com informações validas
![Descrição Valida](img/registro_de_testes/teste_de_campos/rf-005/descricaoValida.png)
3. Clicar em Criar Vaga
![Descrição Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/descricaoValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Deve ser possível criar uma vaga sem descrição | O redirecionamento para o perfil aconteceu e a vaga foi criada com sucesso | Sucesso |

1. Em "Descrição da vaga" manter em branco
2. Completar outros campos do formulario com informações validas
![Descrição Valida Branco](img/registro_de_testes/teste_de_campos/rf-005/descricaoValidaBranco.png)
3. Clicar em Criar Vaga
![Descrição Valida Branco](img/registro_de_testes/teste_de_campos/rf-005/descricaoValidaCriadaBranco.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05| Ao criar uma vaga, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario | Todas as informações estavam de acordo com o criado | Sucesso |

1. Completar campos com:
<ol><li>Nome da vaga> TESTE1</li> <li>Habiilidades essenciais: HTML</li><li>Habilidades diferenciais: HTML</li><li>Senioridade: Senior</li><li>Cargo:Analista de Dados</li> <li>Salario: 11500</li><li>Data final da vaga: 05/05/2025</li> <li>Descrição da vaga: Testando campos</li></ol>

2. Clicar em Criar Vaga

![Vaga Valida](img/registro_de_testes/teste_de_campos/rf-005/vagaValida.png)

3. Clicar no nome da vaga

![Vaga Valida Criada](img/registro_de_testes/teste_de_campos/rf-005/vagaValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-05|Ao criar uma vaga, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario e devem ser verificadas através de javascript | fixme | fixme |

//Testes e imagens aqui.

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser possível inserir um nome para a empresa com quaisquer caracteres, números ou caracteres especiais. | O cadastro foi efetuado com sucesso | Sucesso |

1. Escrever em "Nome da Empresa": EmpresaTest123!@#$%¨¨&*()_{}[]

2. Completar outros campos do formulario com informações validas

![Nome Valida](img/registro_de_testes/teste_de_campos/rf-013/nomeValida.png)

3. Efetuar login com informações cadastradas

![Nome Valida Criada](img/registro_de_testes/teste_de_campos/rf-013/nomeValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar sem inserir o nome da empresa | Um erro aconteceu como o esperado  | Sucesso |

1. Em "Nome da Empresa" manter em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Nome Invalida](img/registro_de_testes/teste_de_campos/rf-013/nomeInvalida.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| 	Deve ser possível inserir um email valido para a empresa | O cadastro foi efetuado com sucesso | Sucesso |

1. Escrever em "Email": empresatest@gmail.com

2. Completar outros campos do formulario com informações validas

![Email Valida](img/registro_de_testes/teste_de_campos/rf-013/emailValida.png)

3. Efetuar login com informações cadastradas

![Email Valida Criada](img/registro_de_testes/teste_de_campos/rf-013/emailValidaCriado.png)
![Email Valida Criada 2](img/registro_de_testes/teste_de_campos/rf-013/emailValidaCriado2.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível inserir um email invalido para a empresa | Um erro aconteceu como o esperado  | Sucesso |

1. Escrever em "Email": empresatest!!
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Email Invalida](img/registro_de_testes/teste_de_campos/rf-013/emailInvalida.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser possível inserir um CNPJ valido para a empresa | O cadastro foi efetuado com sucesso | Sucesso |

1. Escrever em "CNPJ": 12.945.701/0001-82

2. Completar outros campos do formulario com informações validas

![Cnpj Valida](img/registro_de_testes/teste_de_campos/rf-013/cnpjValida.png)
                                                             cpnjValida.png

3. Efetuar login com informações cadastradas

![Cnpj Valida Criada](img/registro_de_testes/teste_de_campos/rf-013/cnpjValidaCriada.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível inserir um CNPJ invalido para a empresa | Um erro aconteceu como o esperado  | Sucesso |

1. Escrever em "CNPJ": 12.945.701
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Cnpj Invalida](img/registro_de_testes/teste_de_campos/rf-013/cnpjInvalida.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar sem inserir um CNPJ | Um erro aconteceu como o esperado  | Sucesso |

1. Em "CNPJ" manter em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Cnpj Invalida Branco](img/registro_de_testes/teste_de_campos/rf-013/cnpjInvalidaBranco.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser possível se cadastrar inserindo uma senha de 6 ou mais caracteres e confirmando a senha | O cadastro foi efetuado com sucesso | Sucesso |

1. Escrever em "Senha" e "Confime sua senha": aA123!

2. Completar outros campos do formulario com informações validas

![Senha Valida](img/registro_de_testes/teste_de_campos/rf-013/senhaValida.png)

3. Efetuar login com informações cadastradas

![Senha Valida Criada](img/registro_de_testes/teste_de_campos/rf-013/senhaValidaCriada.png)
![Senha Valida Criada 2](img/registro_de_testes/teste_de_campos/rf-013/senhaValidaCriada2.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar inserindo uma senha com menos de 6 caracteres | Um erro aconteceu como o esperado  | Sucesso |

1. Escrever em "Senha" e "Confime sua senha": 12345
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Senha Invalida](img/registro_de_testes/teste_de_campos/rf-013/senhaInvalida.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar inserindo uma senha e um confime sua senha diferentes, mesmo que a senha seja valida | Um erro aconteceu como o esperado  | Sucesso |

1. Escrever em "Senha": 123456 e em "Confime sua senha": 1234567
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Senha Invalida Diff](img/registro_de_testes/teste_de_campos/rf-013/senhaInvalidaDiff.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar sem inserir uma senha | Um erro aconteceu como o esperado  | Sucesso |

1. Em "Senha" e em "Confime sua senha": deixar em branco
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Senha Invalida Branca](img/registro_de_testes/teste_de_campos/rf-013/senhaInvalidaBranca.png)
![Senha Invalida Branca 1](img/registro_de_testes/teste_de_campos/rf-013/senhaInvalidaBranca1.png)
![Senha Invalida Branca 2](img/registro_de_testes/teste_de_campos/rf-013/senhaInvalidaBranca2.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar duas vezes com o mesmo Email | O cadastro foi criado indevidamente na segunda tentativa | Grave |

1. Cadastar com o email: empresarepetida@gmail.com
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar
1. Cadastar novamente com o email: empresarepetida@gmail.com
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Cadastro Repetido](img/registro_de_testes/teste_de_campos/rf-013/cadastroRepetido.png)
![Cadastro Repetido 2](img/registro_de_testes/teste_de_campos/rf-013/cadastroRepetido2.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Deve ser impossível se cadastrar duas vezes com o mesmo Nome | O cadastro foi criado indevidamente na segunda tentativa | Media |

1. Cadastar com o Nome: EmpresaRepetida
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar
1. Cadastar com o Nome: EmpresaRepetida
2. Completar outros campos do formulario com informações validas
3. Clicar em Cadastrar

![Cadastro Repetido Nome](img/registro_de_testes/teste_de_campos/rf-013/cadastroRepetidoNome.png)
![Cadastro Repetido Nome2](img/registro_de_testes/teste_de_campos/rf-013/cadastroRepetidoNome2.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro | As informações estavam de acordo com as cadastradas | Sucesso |

1. Completar campos com: <ol><li>Nome da Empresa: Empresa de testes</li><li>Email: emailtest@gmail.com</li><li>CNPJ: 54.564.864/894</li><li>Senha:!empresaTest123</li><li>Confirme sua senha:!empresaTest123</li></ol>
2. Clicar em Cadastrar
![Campos Valida](img/registro_de_testes/teste_de_campos/rf-013/camposValida.png)
3. Efetuar login
![Campos Valida Criada](img/registro_de_testes/teste_de_campos/rf-013/camposValidaCriada.png)
![Campos Valida Criada](img/registro_de_testes/teste_de_campos/rf-013/camposValidaCriada2.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-? <br> RF-013| Ao se cadastar, todas as informações digitadas devem estar de acordo com os valores inseridos no formulario de cadastro e devem ser verificadas através de javascript | fixme | fixme |

//Testes e imagens aqui.

# Testes de Navegabilidade completo

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da home.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da home.html </li></ol> |

![Navegabilidade Home](img/registro_de_testes/teste_navegabilidade/home.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da vaga.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da vaga.html com id </li></ol>

![Navegabilidade Vaga](img/registro_de_testes/teste_navegabilidade/vaga.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da vagas_lista.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da vagas_lista.html </li></ol>

![Navegabilidade Vagas_lista](img/registro_de_testes/teste_navegabilidade/vagas_lista.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da resumo.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link do resumo.html </li></ol>

![Navegabilidade Resumo](img/registro_de_testes/teste_navegabilidade/resumo.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da habilidade.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da habilidade.html com id </li></ol>

![Navegabilidade Habilidade](img/registro_de_testes/teste_navegabilidade/habilidade.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da empresa.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link da empresa.html com id </li></ol>

![Navegabilidade Empresa](img/registro_de_testes/teste_navegabilidade/empresa.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de navegabilidade da cargo.html | Todos os links encontrados | Sucesso |

<ol><li>Abrir: https://datayze.com/site-navigability-analyzer</li> <li>Inserir link do cargo.html com id </li></ol>

![Navegabilidade Cargo](img/registro_de_testes/teste_navegabilidade/cargo.png)

# Testes de Responsividade completos
|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de home.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de home.html</li></ol>

![Responsividade Home](img/registro_de_testes/teste_responsividade/home.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de vagas_lista.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de vagas_lista.html</li></ol>

![Responsividade vagas_lista](img/registro_de_testes/teste_responsividade/vagas_lista.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de vaga.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de vaga.html com um id valido</li></ol>

![Responsividade vaga](img/registro_de_testes/teste_responsividade/vaga.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de resumo.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de resumo.html</li></ol>

![Responsividade resumo](img/registro_de_testes/teste_responsividade/resumo.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de login.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de login.html</li></ol>

![Responsividade login](img/registro_de_testes/teste_responsividade/login.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de habilidade.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de habilidade.html com um id valido</li></ol>

![Responsividade habilidade](img/registro_de_testes/teste_responsividade/habilidade.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de empresa.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de empresa.html com um id valido</li></ol>

![Responsividade empresa](img/registro_de_testes/teste_responsividade/empresa.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de criar_vaga.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de criar_vaga.html</li></ol>

![Responsividade Criar_Vaga](img/registro_de_testes/teste_responsividade/criar_vaga.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de cargo.html | Resultado positivo para dispositivos móveis | Sucesso |

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de cargo.html com um id valido</li></ol>

![Responsividade Cargo](img/registro_de_testes/teste_responsividade/cargo.png)

|ID    | Descrição do teste  |  Descrição do resultado | Gravidade|
|------|---------------------|-------------------------|----------|
|CT-?| Teste de responsividade de cadastro.html | Resultado positivo para dispositivos móveis | Sucesso 

<ol><li>Abrir https://search.google.com/test/mobile-friendly</li> <li>Inserir o link de cadastro.html</li></ol>|

![Responsividade Cadastro](img/registro_de_testes/teste_responsividade/cadastro.png)

# Referencias

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
