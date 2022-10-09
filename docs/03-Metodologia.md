# **Metodologia**

<span style="color:gold"><strong>Pré-requisitos: </strong><a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

A metodologia nada mais é que o conjunto de normas predefinidas que serão empregadas na elaboração do projeto. Além de também definir a princípio quais ferramentas serão usadas na elaboração do projeto do ínicio ao fim, e como a equipe se organizará e distribuirá as tarefas no decorrer do mesmo.

<br>

## **Controle de Versão**

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório.

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `documentation`: melhorias ou acréscimos à documentação
- `bug`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada.
O controle de versão adotado no projeto foi usando o [git](https://git-scm.com/), e como principal ferramenta facilitadora para o versionamento foi usado o GitHub.


![vcs](https://user-images.githubusercontent.com/107289791/194760999-fb4e8939-7c80-498d-902b-5b280e54dd91.png)
<p align="center">Figura 1 - Diagrama representativo de versionamento de código com branchs.</p>

<br>

## **Gerenciamento de Projeto**

<br>

### **Divisão de Papéis**

A equipe optou pelo Scrum como a principal metodologia ágil que será usada na gestão e construção do projeto.

A equipe está organizada da seguinte maneira:

<ul>
<li><strong>Scrum Master:</strong> Elpidio Lomeu Junior</li>
<li><strong>Product Owner:</strong> Pedro Gouvêa Sangi Rocha</li>
<li><strong>Equipe de Desenvolvimento e Design:</strong></li>
<ul>
  <li>Bruno Martins dos Santos</li>
  <li>Pietro Emmanuel Ferreira do Vale</li>
  <li>Vitor Hugo Silva Carvalho</li>
</ul>
<li><strong>Equipe de Design:</strong></li>
<ul>
   <li>Shinji Matsumoto Fernandes</li>
</ul></ul>

<br>


### **Processo**

Para botar o Scrum em prática no projeto foi feito uso do Trello, e o projeto foi estruturado usando as seguintes listas:

- **Recursos:** Uma lista que armazena os templates de cada estágio das tarefas, facilitando a criação de novas tarefas dentro de um padrão já preestabelecido. O objetivo é permitir a cópia destes templates para agilizar a criação de novos cartões.

- **Backlog:** recebe as tarefas a serem trabalhadas e representa o Product Backlog. Todas as atividades identificadas no decorrer do projeto também devem ser incorporadas a esta lista.

- **Sprint:** Esta lista representa o Sprint Backlog. Este é o Sprint atual que estamos trabalhando.

- **Doing:** Quando uma tarefa tiver sido iniciada, ela é movida para cá.

- **Testing:** Checagem de Qualidade. Quando as tarefas são concluídas, eles são movidas para o “CQ”. No final da semana, eu revejo essa lista para garantir que tudo saiu perfeito.

- **Done:** nesta lista são colocadas as tarefas que passaram pelos testes e controle de qualidade e estão prontos para ser entregues ao usuário. Não há mais edições ou revisões necessárias, ele está agendado e pronto para a ação.

<br>

Segue uma imagem ilustrativa de como o Trello foi usado com Scrum, e com um quadro baseado no Kanban.

![trello](https://user-images.githubusercontent.com/107289791/194732094-64030d68-4f32-4375-9961-f4fe3cb2bc49.png)

<p align="center">Figura 2 - Tela do Kanban utilizada pelo Grupo.</p>


<br>

A tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:

- Documentação
- Desenvolvimento 
- Infraestrutura
- Testes
- Gerência de Projetos.

### **Ferramentas**

As principais ferramentas empregadas no projeto são:

- [Trello](https://trello.com/) (Gerenciamento do Projeto)
- [Discord](https://discord.gg) (Ferramenta de comunicação)
- [Whatsapp](https://www.whatsapp.com/?lang=pt_br) (Ferramenta de comunicação)
- [Marvelapp](https://marvelapp.com/) (Ferramentas de desenho de tela)
- [Autocad](https://www.autodesk.com.br/education/home) (Ferramentas de desenho de tela)
- [Visual Studio Code](https://code.visualstudio.com/) (Edição de código)
- [GitHub](https://github.com/) (Hospedagem de código-fonte e VCS)
- [Git](https://git-scm.com/) (Versionamento de código)
- [GitHub Pages](https://pages.github.com/) (Hospedagem do Projeto em Nuvem)
- [Heroku](https://www.heroku.com/) (Hospedagem do Projeto em Nuvem)

  <br>

O [Visual Studio Code](https://code.visualstudio.com/), o editor de código, foi escolhido porque ele possui uma integração com o [GitHub](https://github.com/) para realizar o versionamento de código.

As ferramentas de comunicação utilizadas, [Whatsapp](https://www.whatsapp.com/?lang=pt_br) por ser uma ferramenta que o grupo já domina, usado para discussões mais breves, e o [Discord](https://discord.gg) para reuniões semanais com o grupo em canais de voz, além de compartilhamento de arquivos relacionados ao projeto, e discussões em geral que sejam mais longas.

Por fim, para criar os diagramas foi usado o Autocad para realizar um breve esboço, e posteriormente foi realizada a criação dos wireframes, com uma maior estilização no [Marvelapp](https://marvelapp.com/), por ser um software com versão gratuita, que permite a edição de um mesmo arquivo por um grupo de pessoas simultaneamente.
