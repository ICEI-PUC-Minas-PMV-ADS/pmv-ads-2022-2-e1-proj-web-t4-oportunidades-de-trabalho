if (
    !localStorage.getItem('Links') || 
    !localStorage.getItem('Cargos') ||
    !localStorage.getItem('Senioridade') ||
    !localStorage.getItem('Habilidades') ||
    !localStorage.getItem('Contato') ||
    !localStorage.getItem('Empresas') ||
    !localStorage.getItem('Vagas')
    ) {
    localStorage.setItem('Links', JSON.stringify(
        [
            { 'id': 1, 'link': 'www.jetbrains.com' },
            { 'id': 2, 'link': 'www.udemy.com' },
            { 'id': 3, 'link': 'www.freecodecamp.org' },
            { 'id': 4, 'link': 'www.codecademy.com' },
            { 'id': 5, 'link': 'www.turing.com' },

        ]
    )
    )
    localStorage.setItem('Cargos', JSON.stringify(
        [
            { 'id': 1, 'hab_essencial_id': [1], 'nome': 'Desenvolvedor Front-end', 'descricao': 'Um desenvolvedor front-end é o profissional responsável por criar a interface de utilização de um site ou aplicação web. A camada visual das aplicações web, na qual os usuários interagem, é então de responsabilidade deste desenvolvedor.', },
            { 'id': 2, 'hab_essencial_id': [2, 3], 'nome': 'Analista de Dados', 'descricao': 'Interpretar dados, analisar resultados e utilizar técnicas estatísticas. Desenvolver e implementar análises de dados, sistemas de coleta de dados e outras estratégias que otimizem a eficiência e a qualidade estatística. Obter dados de fontes primárias ou secundárias e manter bancos de dados.', },
            { 'id': 3, 'hab_essencial_id': [1, 2, 3, 4], 'nome': 'Desenvolvedor Back-end Golang', 'descricao': 'Desenvolver e manter novas funcionalidades e APIs em Golang, Construir pipelines de deploy CI/CD, Transmitir e compartilhar conhecimentos de desenvolvimento de software, Desenvolvimento de elemento de autenticação de processos entre diferentes domínios.', },
            { 'id': 4, 'hab_essencial_id': [1, 5], 'nome': 'Desenvolvedor Back-end Javascript', 'descricao': 'O desenvolvedor é aquele que programa, desenvolve e implanta sistemas em JavaScript. Realiza correções em sistemas para atender às necessidades dos usuários. Desenvolve trabalhos de montagem, depuração e testes de programas já desenvolvidos.', },
            { 'id': 5, 'hab_essencial_id': [1, 2, 4], 'nome': 'Desenvolvedor Front-end React', 'descricao': 'O que é desenvolvimento React? O React, lançado em 2013, é uma biblioteca JavaScript de código aberto, fundamental para criação de aplicações front-end. Anteriormente denominado React. js ou ReactJS, foi desenvolvido pelo Facebook para criação de elementos de interface reutilizáveis de forma simples, intuitiva e com uma ótima performance.', },
        ]
    )
    )
    localStorage.setItem('Senioridade', JSON.stringify(
        [
            { 'id': 1, 'nome': 'Junior', },
            { 'id': 2, 'nome': 'Pleno', },
            { 'id': 3, 'nome': 'Senior', },
        ]
    )
    )
    localStorage.setItem('Habilidades', JSON.stringify(
        [
            { 'id': 1, 'nome': 'JavaScript', 'descricao': 'JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc.', 'links_id': [1, 2] },
            { 'id': 2, 'nome': 'Python', 'descricao': 'Python é uma linguagem de programação de alto nível — ou High Level Language —, dinâmica, interpretada, modular, multiplataforma e orientada a objetos — uma forma específica de organizar softwares onde, a grosso modo, os procedimentos estão submetidos às classes, o que possibilita maior controle e estabilidade de códigos para projetos de grandes proporções.', 'links_id': [3, 4] },
            { 'id': 3, 'nome': 'Golang', 'descricao': ' Golang é uma linguagem criada por um grupo de engenheiros do Google por estarem insatisfeitos com as características do C e de outras linguagens disponíveis que não ofereciam recursos necessários a alguns projetos da empresa.', 'links_id': [] },
            { 'id': 4, 'nome': 'HTML', 'descricao': 'A Linguagem de Marcação de Hipertexto (HTML) é uma linguagem de computador que compõe a maior parte das páginas da internet e dos aplicativos online. Um hipertexto é um texto usado para fazer referência a outros textos, enquanto uma linguagem de marcação é composta por uma série de marcações que dizem para os servidores da web qual é o estilo e a estrutura de um documento.', 'links_id': [5, 7] },
            { 'id': 5, 'nome': 'React', 'descricao': 'React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface). Criado em 2011 pelo time do Facebook, o React surgiu com o objetivo de otimizar a atualização e a sincronização de atividades simultâneas no feed de notícias da rede social, entre eles chat, status, listagem de contatos e outros.', 'links_id': [8] },
        ]
    )
    )
    localStorage.setItem('Contato', JSON.stringify(
        [
            { 'id': 1, 'email': 'super.tech@hotmail.com', 'linkedin': 'https://www.linkedin.com/company/SuperTech/', 'sede': 'RJ' },
            { 'id': 2, 'email': 'eletrosurf@gmail.com', 'linkedin': 'https://www.linkedin.com/company/Eletrosurf/', 'sede': 'SP' },
            { 'id': 3, 'email': 'Progressus@gmail.com', 'linkedin': 'https://www.linkedin.com/company/Progressus/', 'sede': 'MG' }
        ]
    )
    )
    localStorage.setItem('Empresas', JSON.stringify(
        [
            { 'id': 1, 'vagas_id': [1], 'nome': 'Super Tech', 'descricao': 'O Super Tech atua como o líder do time de tecnologia da empresa. Para isso, é preciso ter sólido background técnico e soft skills voltadas para o bom relacionamento com pessoas dos mais diversos perfis.', 'valores': ['Comprometimento', 'Dedicação', 'Flexibilidade'], 'data_cadastro': new Date(1995, 11, 17), 'cnpj': '26.875.055/0001-39', 'area': 'Tecnologia', 'logo_link': 'https://i.ibb.co/Pt3Sbrw/unknown.png', 'contato_id': 1, },
            { 'id': 2, 'vagas_id': [2, 3], 'nome': 'Eletrosurf', 'descricao': 'A Eletrosurf é uma Empresa focada em soluções e serviços completos e personalizados de alto desempenho em componentes tecnológicos de TI para soluções em automação comercial.', 'valores': ['Crescimento', 'Interação'], 'data_cadastro': new Date(2022, 09, 01), 'cnpj': '45.409.785/0001-99', 'area': 'Aprendizado', 'logo_link': 'https://i.imgur.com/UsVCZjU.png', 'contato_id': 2, },
            { 'id': 3, 'vagas_id': [4, 5], 'nome': 'Progressus', 'descricao': 'O Progressus Central fornece uma interface de usuário e API da Web amigável para gerenciar controladores de rede Progressus, bem como serviços relacionados que podem ser adicionados às redes.', 'valores': ['Responsabilidade', 'Respeito', 'justiça'], 'data_cadastro': new Date(2005, 01, 05), 'cnpj': '36.229.559/0001-35', 'area': 'Compartilhamento', 'logo_link': 'https://i.imgur.com/yUhqDSw.png', 'contato_id': 3, }
        ]
    )
    )
    localStorage.setItem('EmpresaUser', JSON.stringify(
        [
            { 'id': 1, 'empresa_id': 1, 'login': 'superTech@gmail.com', 'password': '123456' },
            { 'id': 2, 'empresa_id': 2, 'login': 'eletrosurf@gmail.com', 'password': -2006896600 },
            { 'id': 3, 'empresa_id': 3, 'login': 'naosei@hotmail.com', 'password': '999111222' },
        ]
    )
    )
    localStorage.setItem('Vagas', JSON.stringify(
        [
            {
                'id': 1, 'empresa_id': 1, 'hab_essencial_id': [1, 2], 'hab_dif_id': [3], 'vaga_nome': 'Contratamos Front-end dev',
                'descricao':
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel venenatis ante. Curabitur ullamcorper at dui nec blandit. Donec convallis fermentum sodales. Donec ultricies sapien a elit volutpat, eu hendrerit mi lacinia. Mauris tristique imperdiet justo, id mollis sem interdum et.`,
                'cargo_id': 1, 'salario': 4500.00, 'data_exp': new Date(2022, 12, 25), 'data_cadastro': new Date(2022, 10, 17), 'candidaturas': 10, 'cargo_senioridade_id': 1,
            },

            {
                'id': 2, 'empresa_id': 2, 'hab_essencial_id': [3, 4], 'hab_dif_id': [1], 'vaga_nome': 'A procura de analista de dados',
                'descricao': 'Cras dignissim interdum tellus, in pretium ipsum facilisis quis. Aenean vitae sapien dignissim, cursus nisi sit amet, ullamcorper sem. Donec sagittis vestibulum nisl, a tempor eros egestas ac. Sed mollis laoreet sapien id elementum. Nulla id dolor ac sapien convallis dictum sit amet sit amet nibh.',
                'cargo_id': 2, 'salario': 6200.00, 'data_exp': new Date(2023, 01, 15), 'data_cadastro': new Date(2022, 10, 20), 'candidaturas': 37, 'cargo_senioridade_id': 2,
            },

            {
                'id': 3, 'empresa_id': 2, 'hab_essencial_id': [1, 2, 3, 4], 'hab_dif_id': [5], 'vaga_nome': 'Procura-se full stack dev',
                'descricao': 'Mauris fermentum lectus justo, non sodales mi aliquam ac. Duis gravida quam dictum, aliquam ex id, gravida ante. Fusce rutrum, elit ut porta tempor, justo lorem iaculis neque, nec congue mi nulla quis urna. Morbi finibus quam mauris, in feugiat ante imperdiet sit amet. Fusce mattis elementum ipsum in finibus.',
                'cargo_id': 3, 'salario': 18000.00, 'data_exp': new Date(2023, 09, 01), 'data_cadastro': new Date(2022, 10, 25), 'candidaturas': 94, 'cargo_senioridade_id': 3,
            },

            {
                'id': 4, 'empresa_id': 3, 'hab_essencial_id': [5, 1], 'hab_dif_id': [2, 3], 'vaga_nome': '',
                'descricao': 'Donec id libero feugiat, rutrum sapien non, convallis velit. Sed dapibus rutrum neque, sed auctor odio lacinia porta. Aenean gravida, tortor quis tempor euismod, felis augue euismod augue, at varius orci dolor id orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ultricies tempor erat ',
                'cargo_id': 4, 'salario': 3200.00, 'data_exp': new Date(2022, 12, 17), 'data_cadastro': new Date(2022, 10, 03), 'candidaturas': 2, 'cargo_senioridade_id': 1,
            },

            {
                'id': 5, 'empresa_id': 3, 'hab_essencial_id': [2, 4], 'hab_dif_id': [1, 5], 'vaga_nome': '',
                'descricao': 'VestiVestibulum vitae mauris leo. Donec facilisis auctor lectus, at hendrerit neque ultricies quis. Donec venenatis mollis est sit amet pretium. Vestibulum tincidunt nec leo sed laoreet. Sed molestie magna nec leo sagittis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed purus sagittis,Vestibulum vitae mauris leo. Donec facilisis auctor lectus, at hendrerit neque ultricies quis. Donec venenatis mollis est sit amet pretium. Vestibulum tincidunt nec leo sed laoreet. Sed molestie magna nec leo sagittis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed purus sagittis,bulum vitae mauris leo. Donec facilisis auctor lectus, at hendrerit neque ultricies quis. Donec venenatis mollis est sit amet pretium. Vestibulum tincidunt nec leo sed laoreet. Sed molestie magna nec leo sagittis venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sed purus sagittis,',
                'cargo_id': 5, 'salario': 9000.00, 'data_exp': new Date(2021, 11, 17), 'data_cadastro': new Date(2021, 05, 20), 'candidaturas': 225, 'cargo_senioridade_id': 2,
            },
        ]
    )
    )
}