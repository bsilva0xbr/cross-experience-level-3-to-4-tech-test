# Desafio técnico: Nível 03 a 04.

### Contexto
Atualmente, em nosso portal principal ([jusbrasil.com](https://jusbrasil.com/)) oferecemos algumas ferramentas para nossos usuários. Cada ferramenta oferece funcionalidades diversas, mas também são configuradas com limitações controladas através de planos de assinatura com recorrência mensal.

Quando um usuário começa sua jornada, ele está vinculado a um plano gratuito básico e ao atingir o limite, executamos algumas estratégias para oferta de migração de plano (upgrade), ou o usuário poderá acessar a nossa landing page para consultar os planos que mais se adequam as suas necessidades, através de um fluxo de checkout 100% on-line.

### Objetivo
Seu objetivo neste teste é que após sua conclusão seja possível oferecer alguns planos para o usuário, recomendando também opções de pacotes promocionais fictícios, você pode fazer isso separando pelo atributo "type" do JSON que está consumindo da sua API. Desta forma, o usuário deve conseguir passar pelo checkout validando seu cartão de crédito e recebendo um feedback em tela.

### O desafio, abordagens técnicas
Este projeto foi criado usando [Next JS](https://nextjs.org/learn), com uma simples implementação fictícia de uma landing page que oferece planos até  um fluxo de checkout também fictício.

**Disponibilizando opções de planos**

A nossa sugestão é que você crie um **web service** que disponibilize ao menos 03 ofertas de planos (individual) e 02 recomendações de pacotes promocionais (bundle). Para concluir este processo você pode adicionar um novo diretório neste projeto para servir e configurar o web service (backend) que deverá ser consumido através de API Rest por esta landing page (frontend). [Next JS: Custom Server](https://nextjs.org/docs/advanced-features/custom-server)

Ao apresentar os planos você poderá formatar como conseguir, não há problemas se você não dominar [Cascading Style Sheets (CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS), mas seria legal ver o que consegue fazer! Neste projeto estamos usando o [UIKit](https://getuikit.com/) que auxilia na diagramação dos componentes, o qual você opcionalmente poderá usar também. **Dica:** No diretório de [resources/images](https://github.com/bsilva0xbr/cross-experience-level-3-to-4-tech-test/tree/main/resources/images) temos um template (screenshot) de um modelo de apresentação dos planos. 

Ao selecionar um plano, o usuário deverá ser direcionando para o checkout fictício, a rota é `/checkout` neste projeto, onde você deverá passar o plano selecionado para cobrar do usuário nesta etapa. **Dica:** No diretório [resources/data](https://github.com/bsilva0xbr/cross-experience-level-3-to-4-tech-test/tree/main/resources/data) temos um documento JSON que servirá para "data" através de um "endpoint" da sua API Rest. Não é necessário persistir informações usando banco de dados.

**Checkout**

Para a etapa de checkout você **não precisará informar um cartão de crédito válido**, mas deve enviar informações para um "endpoint" da sua API (web service) para validar da seguinte forma:

1. Todos os campos são de preenchimento obrigatório.
2. Alguns cartões não possuem saldo ou contém formatação inválida.
3. Devemos sempre apresentar o feedback para usuário, em caso de erro ou sucesso.

**Dica:** No diretório [resources/cards](https://github.com/bsilva0xbr/cross-experience-level-3-to-4-tech-test/tree/main/resources/cards) temos opções de cartões de crédito fictícios que você poderá utilizar e também algumas informações importantes que vão te ajudar neste processo.

### O que será avaliado
- Facilidade de reprodução: O código precisa ser executável. Considere que se você mudou os diretórios ou instalou alguma dependência ela deve ser compatível de forma que nossa equipe interna não tenha problemas para rodar.
- Legibilidade: Seu código precisa ser **fácil de ler e entender**.
- Testes automatizados: Nossa recomendação é que seu código tenha cobertura de testes, validando o caminho ideal, inputs inesperados etc.
- Organização do projeto e documentação: Avaliaremos **como você organiza seu código**, estrutura do projeto e diretórios, dependências e ambiente. Também vamos avaliar a documentação do projeto.
- Workflow: Fluxo de commits e como você os descreve.
- Histórico: Você pode usar o arquivo `HISTORY.md` para descrever os motivadores de usar novas dependências, melhorias, opiniões.

**Pontos importantes**

Este projeto tem uma implementação básica para servir de base para seu desafio, você pode organizar os diretórios e arquivos seguindo os padrões que você acredita ser melhor. Não existem implementações de teste, nem todos os componentes foram estilizados da melhor forma, as suas melhorias e sugestões serão consideradas de forma positiva neste desafio.

Para este projeto, não usamos [branches](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell), mas a nossa recomendação é que você trabalhe em uma branch com seu username, se achar que é viável, pode sugerir ajustes via [pull requests](https://www.gitkraken.com/learn/git/tutorials/what-is-a-pull-request-in-git#:~:text=commonly%20get%20wrong.-,What%20is%20a%20pull%20request%20in%20Git%3F,to%20merge%20into%20a%20project.), mas não modifique o projeto!


**Como rodar este projeto**

Este projeto também está rodando com Docker, onde você poderá configurar outros serviços via [docker-compose](https://docs.docker.com/compose/), se achar necessário para sua abordagem.

Clone o projeto em sua máquina com Docker instalado, vá até o diretório o execute o comando `docker compose up`. Pronto!

**Links úteis:** 
[Node Express](https://expressjs.com/),  [Next JS](https://nextjs.org/), [API Rest](https://jsonapi.org/), [React](https://reactjs.org/), [React Jest](https://jestjs.io/), [React Hooks](https://reactjs.org/docs/hooks-intro.html), [Docker](https://www.docker.com/).

**Feedback**

É muito importante que vocês nos diga o que achou deste teste, de acordo com o tempo que levou para concluir.

&copy; Jusbrasil, 2022.