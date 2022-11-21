# Plano de Testes de Software

Os planejamentos dos testes a serem realizados serão descritos abaixo de acordo com suas respectivas categorias.

- Testes de ponta a ponta: Será realizado testes do ponto de vista do usuario final

- Testes de campos: Será realizado os testes dos campos de grande importancia para a aplicação de forma manual e também com ferramentas de testes em JS, seguindo normas padrão e regras de negocio.

- Testes de navegabilidade: Será realizado atráves ferramentas online e manualmente pelos desenvolvedores.

- Testes de responsividade: Será realizado atráves ferramentas online e manualmente pelos desenvolvedores.

Consulte <span style="color:red"><a href="02-Especificação do Projeto.md"> Especificação do Projeto </a></span> para melhor entendimento dos requisitos que serão trabalhados a seguir.

# Testes de Ponta a ponta
|ID    | Descrição do teste  | Passos | Critérios de Êxito 
|------|---------------------|--------|--------------------|
|CT-01 <br >RF-01|                   |<ul><li>1</li></ul> | <ul><li>1</li></ul>  | 
|CT-02 <br> RF-02| |<ul><li>1</li></ul> | <ul><li>1</li></ul>  | 
|CT-03 <br> RF-03| Verificar se a página "lista de vagas" está acessível e interativa. |<ul><li>1</li></ul> | <ul><li>1</li></ul>  | 
|CT-04 <br> RF-04| |<ul><li>1</li></ul> | <ul><li>1</li></ul>  | Teste de ponta a ponta | 
|CT-05 <br> RF-05|É possível criar uma nova vaga seguindo todo o processo necessário? |<ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li> Efetuar login</li><li>Clicar em Nova Vaga</li><li>Preencher formulario e enviar</li></ol> | <ul><li>Conseguir acessar todas as paginas pela propria aplicação</li><li>Criar uma vaga com sucesso ao preencher o formulario</li><li>A nova vaga aparecer na lista de vagas da empresa </li></ul>  | 
|CT-06 <br> RF-13|É possível para uma empresa se cadastrar e efetuar login? |<ol><li>Acessar a pagina inicial e clicar em "Sou Empresa"</li><li>Clicar em Cadaste-se</li><li>Efetuar cadastro com sucesso ao preencher formulario</li><li>Efetuar login</li><li>Ser redirecionado para a pagina da sua empresa</li></ol> | <ul><li>Conseguir acessar todas as paginas pela propria aplicação</li> <li>Conseguir se cadastrar com sucesso ao preencher informações</li> <li>Ser redirecionado com sucesso para a pagina da empresa</li></ul>  | 

# Testes de Campos
ID    | Descrição do teste | Passos | Critérios de Êxito  | Categoria |
|-----|--------------------|--------|---------------------|-----------|
|CT-05 <br> RF-05| | | | Teste de campos | 
|CT-06 <br> RF-13| | | | Teste de campos | 

# Testes de Navegabilidade
|ID    | Descrição do teste | Passos | Critérios de Êxito  | Categoria |
|------|--------------------|---------|--------------------|-----------|
|CT-01 <br> RF-01| É possivel navegar por todos os links da pagina? | | | Teste de navegabilidade | 
|| Todos os links direcionam para o caminho correto? | | | | 
|CT-02 <br> RF-02| É possivel navegar por todos os links da pagina? ||| Teste de navegabilidade | 
|| Todos os links direcionam para o caminho correto?  |||  | 
|CT-03 <br> RF-03| É possivel navegar por todos os links da pagina? ||| Teste de navegabilidade | 
|| Todos os links direcionam para o caminho correto? || |  | 
|CT-04 <br> RF-04| É possivel navegar por todos os links da pagina? ||| Teste de navegabilidade | 
|| Todos os links direcionam para o caminho correto?  ||| | 
|CT-05 <br> RF-05| É possivel navegar por todos os links da pagina? ||| Teste de navegabilidade | 
|| Todos os links direcionam para o caminho correto?  |||  | 
|CT-06 <br> RF-13| É possivel navegar por todos os links da pagina? ||| Teste de navegabilidade | 
|| Todos os links direcionam para o caminho correto?  |||| 


# Testes de Responsividade
|ID    | Descrição do teste | Passos | Critérios de Êxito  | Categoria |
|------|---------------------|-------|-------------|----|
|CT-01 <br> RF-01| A pagina é responsiva para desktop, tablet e smartphone? ||| Teste de responsividade | 
|CT-02 <br> RF-02| A pagina é responsiva para desktop, tablet e smartphone? ||| Teste de responsividade | 
|CT-03 <br> RF-03| A pagina é responsiva para desktop, tablet e smartphone? ||| Teste de responsividade | 
|CT-04 <br> RF-04| A pagina é responsiva para desktop, tablet e smartphone? ||| Teste de responsividade | 
|CT-05 <br> RF-05| A pagina é responsiva para desktop, tablet e smartphone? ||| Teste de responsividade | 
|CT-06 <br> RF-13| A pagina é responsiva para desktop, tablet e smartphone? ||| Teste de responsividade | 


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
