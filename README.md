# Projeto Lumia - Teste para Desenvolvedor Pleno Fullstack

Bem-vindo ao teste para a posição de Desenvolvedor Pleno Fullstack na Lumia! Este projeto consiste em criar um sistema web com duas telas principais: o Dashboard e a Tela de Faturas. Abaixo, você encontrará uma descrição detalhada das funcionalidades e instruções para iniciar o projeto.

## Funcionalidades

### Dashboard

No Dashboard, você terá acesso a dois gráficos essenciais:

- **Gráfico de Custos:** Exibe visualmente os custos relacionados à energia.
- **Gráfico de Energia Gasta:** Mostra o consumo de energia ao longo do tempo.

Para personalizar a visualização dos gráficos, insira o número do cliente da fatura e clique no ícone 'Enviar'. Facilite a adição de novas faturas ao servidor usando o botão de adição, seguido pelo envio dos dados através do botão correspondente. Caso deseje limpar o campo de entrada do número do cliente, basta utilizar o botão de Resetar.

Além disso, à direita, encontra-se um botão com o símbolo de uma lixeira. Este botão permite deletar todas as faturas do sistema, proporcionando uma maneira eficaz de limpar os dados e facilitar os testes online.

### Tela de Faturas

Na Tela de Faturas, você pode realizar as seguintes ações:

- **Consulta de Fatura:** Insira o número do cliente, pressione "Enviar" e selecione o mês desejado para visualizar e baixar a fatura correspondente.

## Configuração Inicial

Antes de iniciar o desenvolvimento, siga esses passos:

1. Abra o arquivo `.env` e defina a variável `NEXT_PUBLIC_API_BASE_URL` com a URL da API que será utilizada. O endpoint da API pode ser encontrado no repositório [https://github.com/ismaelrodino2/Practical-test-Lumi-backend].

## Iniciando o Projeto

Para iniciar o projeto no frontend, siga as instruções abaixo:

1. Instale as dependências:
  ```#!/bin/sh
  pnpm i
  ```
2. Inicie o projeto:
  ```#!/bin/sh
  pnpm dev
  ```
### Informações adicionais

Caso queira executar os testes:
   ```bash
  pnpm test
  ```
Caso queira adicionar arquivos, adicione os arquivos de teste em /faturas
