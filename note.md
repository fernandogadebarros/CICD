### Modulo 01

### Para saber mais

Podemos configurar a execução de fluxos de trabalho quando uma atividade específica acontece no Github em um período agendado ou quando acontece fora dele como um evento externo. Os acionadores de fluxo de trabalho são eventos que fazem com que um fluxo de trabalho seja executado.

Alguns eventos têm vários tipos de atividades. Para esses eventos, você pode especificar quais tipos de atividade executam um fluxo de trabalho. Alguns deles são:

issue_comment
Executa o fluxo de trabalho quando um problema ou comentário de pull request é criado, editado ou excluído.

on:
issue_comment:
types: [created, deleted]COPIAR CÓDIGO
page_build
Executa o fluxo de trabalho quando alguém faz push em um branch que é a fonte de publicação para GitHub Pages, se o GitHub Pages estiver habilitado no repositório.

on:
page_buildCOPIAR CÓDIGO
push
Executa o fluxo de trabalho quando você faz push de um commit ou tag.

Por exemplo, você pode executar um fluxo de trabalho quando o evento push ocorrer.

on:
pushCOPIAR CÓDIGO
Ou então, podemos usar o filtro branches para quando alguém fizer um push para a main ou em alguma branch que começa com releases/

on:
push:
branches:  
 - 'main' - 'releases/\*\*'COPIAR CÓDIGO
Existem diversos eventos que acionam um fluxo de trabalho e se você quiser saber mais sobre eles vou deixar o link da documentação do Github Actions.

(https://docs.github.com/pt/actions/using-workflows/events-that-trigger-workflows)
