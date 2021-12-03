# AppKanban

Este projeto é um quadro Kanban, que utiliza um JWT API json para persistência de dados, é importante esclarecer que se o servidor que está na pasta BACK for desligado, as informações são perdidas, isso significa que novas tarefas devem ser criadas a cada hora em que o servidor é reiniciado.

## Login

A primeira tela do aplicativo é uma tela de login, o aplicativo possui 2 telas e caminhos. É necessário que o usuário insira o nome de usuário (nome de usuário) e a senha (senha) para fazer o login.
Se o usuário cometer um erro e inserir algum dado incorreto, receberá uma mensagem de erro, se o fizer corretamente, irá para a tela do quadro kanban.

## Kanban

O APP possui quatro colunas, a primeira é para criar novas tarefas, você tem que dar um título e uma descrição da tarefa e depois clicar no botão "ADICIONAR". A nova tarefa aparecerá automaticamente na coluna "Pendente", que significa "A fazer".

As tarefas podem ser editadas clicando no botão Editar à direita do título e salvando as alterações clicando no botão Salvar abaixo da caixa de descrição.
Tem setas para a esquerda e para a direita para mover as tarefas na coluna, para fazer = "Doing" e "Done" = Feito concluído ou concluído. Você também pode fazer as tarefas voltarem para a coluna anterior.

Também possui um botão para deletar a tarefa.

## Erros

Vários erros são tratados, além de senha errada ou erro do usuário, também mostra um erro quando não há conexão com o servidor.

Outros erros tratados apenas quando o usuário grava um quebrado que não existe, que mostra uma mensagem e depois ou o usuário pode voltar atrás, o fazer click no botão de voltar ao inicio.

Também mostra um erro quando o token não é mais válido e redireciona para login.
rama de revisão
