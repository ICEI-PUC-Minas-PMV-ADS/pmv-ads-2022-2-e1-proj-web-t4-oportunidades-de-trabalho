# Especificações do Projeto


A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação de usuários de plataformas de postagem de vagas e de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas


## Lucas Batista
+ **Idade**: 20 anos 
+ **Ocupação** : Programador Autônomo 

## Motivações: 

Sonha em poder trabalhar remotamente, em meio a natureza, onde gostaria de poder passar a maior parte do tempo. Busca por meio da programação angariar fundos para que possa ter uma estabilidade financeira, e poder passar menos tempo trabalhando, e mais tempo contemplando o verde. 

## Frustrações: 

Dificuldade de encontrar vagas e serviços por não ter um histórico que comprove suas habilidades com programação. 

## História: 

O jovem Lucas passou boa parte da sua infância e adolescência na frente de um computador, onde teve seu primeiro contato com programação, ao tentar reproduzir alguns dos jogos que passava por horas jogando com seus amigos. Com o passar do tempo se tornou um programador extremamente habilidoso, mas por ser muito jovem e não ter um histórico formal de experiência na área, ou educação formal, tem dificuldades em arranjar um trabalho e busca uma solução 



## Ringui Ferdinando 
+ **Idade**: 27 
+ **Ocupação** : Estudante prestes a se formar no ensino superior de TI 

## Motivações: 

Se tornar destaque na área de TI e juntar dinheiro para sua família, enquanto aproveita as vantagens dessa área que permite o trabalho a distância, podendo assim ficar com os filhos mais tempo. 

## Frustrações: 

Dificuldade de encontrar vagas que combine com suas especializações, além conseguir discernir se é uma vaga a distância e se o valor do pagamento será suficiente para o sustento de sua família

## História: 

Ringui era mecânico, porém, percebeu que o que amava mesmo era a família, e que perderia muito do crescimento dos filhos trabalhando como mecânico, portanto fez uma aposta alta e mudou para a área de TI que era uma paixão deixada de lado no passado, agora ele está completamente motivado a se tornar um profissional de sucesso nessa área que tanto cresce 

e aproveitar as vantagens dela também. 


## Talita Fonseca
+ **Idade**: 40 
+ **Ocupação** : Gerente de Recursos Humanos 

## Motivações: 

Garantir um trabalho de qualidade e promover um ambiente produtivo e harmonioso entre os colaboradores.


## Frustrações: 

Perde muito tempo lendo currículos longos e diversos que, muitas vezes, não são adequados para a empresa que trabalha. 

## História: 

Talita cresceu no interior e, admirada pelo mundo empresarial, cursou e se formou em administração aos 25 anos. Seu primeiro cargo foi como analisa de RH e, desde então, se apaixonou e aprofundou seus conhecimentos com especializações na área. Hoje é gerente do departamento e procura gerar um ambiente de crescimento e colaboração para todos. 

## Histórias de Usuários



Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Lucas Batista       | Encontrar vagas de trabalho, mesmo sem uma Carteira de Trabalho         | Para conseguir pagar as despesas mensais, e dar um passo em direção ao seu sonho.                |
|Lucas Batista       | Ser capaz de ver/filtrar se a vaga é a distância.                  | Poder passar mais tempo contemplando a natureza em seu trabalho remoto.  |
|Lucas Batista       | Identificar as vagas compatíveis com meu perfil profissional.                  | Melhora a minha qualidade de vida e da minha família.  |
|Ringui Ferdinando        | Poder filtrar pelas minhas habilidades.                  | Encontrar vagas que eu tenha maior chance de sucesso de ser aprovado  |
|Talita Fonseca        | Ser capaz de ver/filtrar o salário das vagas                | Se atualizar dos valores do mercado de trabalho |
|Talita Fonseca      | Filtrar o perfil dos profissionais que se candidataram à determinada vaga.               | Identificar, mais rapidamente, se são adequados ou não ao cargo proposto  |
|Talita Fonseca        | Ter salvo as candidaturas feitas em cada vaga.                 | Poder gerenciar adequadamente e sem papéis os currículos.  |
|Ringui Ferdinando        | Poder verificar a descrição da empresa/vaga                 | Comparar os interesses da empresa com o seu próprio  |
|Lucas Batista        | Ser capaz de salvar as vagas que se candidatou                  | Para verificar o andamento de cada vaga salva  |


## Requisitos

O escopo do projeto é definido por meio dos requisitos funcionais e não funcionais, ou seja, o que a ferramenta fará e como fará, respectivamente 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar na página principal deve mostrar uma apresentação da ferramenta | ALTA | 
|RF-002|O site deve apresentar na página principal as opções de acesso às outras páginas: (lista de vagas)    | ALTA |
|RF-003|O site deve possuir uma página com a listagem das vagas postadas (API)     | ALTA |
|RF-004|Ao clicar em uma vaga da lista o site deve permitir ao usuário (profissional) visualizar o texto completo da vaga com todos os detalhes da publicação e se candidatar às vagas postadas     | ALTA |
|RF-005|O site deve permitir ao usuário (empresas) postar vagas   | ALTA |
|RF-006|O site deve permitir adicionar, para cada vaga, uma imagem correspondente ao assunto apresentado     | Média  |
|RF-007|O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar uma vaga/oportunidade    | Média  |
|RF-008|O site deve permitir ao usuário (empresas) visualizar quem se candidatou às vagas     | Média  |
|RF-009|O site deve permitir ao usuário (empresas) visualizar quem se candidatou às vagas    | Média  |
|RF-010|O site deve apresentar na página principal as opções de acesso às outras páginas: (procurar usuários)    | Baixa  |
|RF-011|O site deve apresentar no topo as opções de login: profissional ou empresa     | Baixa  |
|RF-012|Se o profissional clicar para se candidatar à vaga e não estiver logado, o site deve transferi-lo para pagina de cadastro / login     | Baixa  |
|RF-013|O site deve possuir uma página de perfil para os usuários e empresas obtidas por meio de API     | Baixa  |
|RF-014|O site deve permitir cadastro de usuário (profissionais e empresas)     | Baixa  |
|RF-015|O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um profissional específico que será informado na caixa de pesquisa.     | Baixa  |
|RF-016|Na página de perfil do usuário o site deve permitir salvar as vagas candidatadas     | Baixa  |
|RF-017|O site deve apresentar na página principal opção de acesso: cliente    | Baixa  |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada  |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade |  Média | 
|RNF-004|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge)  |  ALTA | 



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022.  |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Front-end       |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.       |


