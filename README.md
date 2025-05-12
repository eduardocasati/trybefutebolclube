# ⚽ Trybe Futebol Clube

![TypeScript Badge](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Node.js Badge](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![Express Badge](https://img.shields.io/badge/express-black?style=for-the-badge&logo=express&logoColor=white) ![JSON Web Tokens Badge](https://img.shields.io/badge/json%20web%20tokens-black?style=for-the-badge&logo=json%20web%20tokens&logoColor=white) ![Sequelize Badge](https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) ![Chai Badge](https://img.shields.io/badge/chai-A40802?style=for-the-badge&logo=chai&logoColor=white) ![Mocha Badge](https://img.shields.io/badge/mocha-8d6748?style=for-the-badge&logo=mocha&logoColor=white) ![Docker Badge](https://img.shields.io/badge/docker-1D63ED?style=for-the-badge&logo=docker&logoColor=white)

> _Este projeto foi desenvolvido como parte da **[Formação em Desenvolvimento Web](https://www.betrybe.com/formacao-desenvolvimento-web)** pela **[Trybe](https://www.betrybe.com/)**, no **Módulo: Back-end**, **Seção 9: Programação Orientada a Objetos (POO) e SOLID**_

#### Autor: **Eduardo Casati**

[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eduardocasati/)

## Objetivos do Projeto

Este projeto teve como objetivo consolidar e avaliar conhecimentos dos seguintes tópicos:

- Programação Orientada a Objetos e SOLID
- Integração de back-end e front-end
- TypeScript
- Test Driven Development (TDD)
- Chai, Sinon e Mocha
- Contêineres (Docker)
- Arquitetura de Software MSC
- Node.js
- Express.js
- JSON Web Tokens
- ORM (Sequelize)

## O que foi Desenvolvido

O projeto consiste em uma API para o gerenciamento de um campeonato de futebol, com autenticação, partidas, times e placares. O projeto utiliza Node.js com TypeScript, Express, Sequelize (ORM), JWT para autenticação e criptografia de senhas, com testes implementados em Mocha/Chai e cobertura via TDD. O sistema se conecta a um banco relacional e segue arquitetura MVC.

## Rodando o Projeto

Siga os passos abaixo:

1. Acesse a pasta app `cd app`
2. Crie e inicie os contêineres: `npm run compose:up`

Com o projeto inicializado após as etapas acima, você pode **fazer requisições à API** na porta 3001: `http://localhost:3001/{rota}` e **acessar o front-end** pela URL `http://localhost:3000`.

## Executando os Testes

Acesse `cd app/backend` e utilize o comando `npm run test`.

Para executar os testes e mostrar a cobertura de testes utilize `npm run test:coverage`.

## Estrutura de Funcionalidades

Todas as rotas possuem validação da estrutura esperada nas requisições à API.

### Autenticação e Usuários

- Rota `/login` com validação de campos e autenticação via JWT.
- Senhas armazenadas com hash e comparação segura.
- Middleware para validação de token nas rotas privadas.
- Rota `/login/role` para verificação de permissões.
- Cobertura de cenários de erro como campos ausentes, formato inválido, token inválido ou inexistente.

### Times

- CRUD básico com endpoints para listar todos os times e buscar por ID (`GET` `/teams` ou `/teams/:id`).

### Partidas

- Rota para listagem de partidas (`GET` `/matches`).
- Suporte a partidas em progresso ou finalizadas (`GET` `/matches?inProgress=true` ou `false`).
- Suporte para finalizar uma partida em andamento (`PATCH` `/matches/:id/finish`).
- Cadastro de novas partidas (`POST` `/matches`)

### Placar e Classificação

- Rota para mostrar a classificação geral dos times (`GET` `/leaderboard`).
- Rota para retornar a classificação e as estatísticas dos times jogando em casa (`GET` `/leaderboard/home`).
- Rota para retornar a classificação e as estatísticas dos times jogando fora de casa (`GET` `/leaderboard/away`).
