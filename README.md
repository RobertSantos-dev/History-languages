<h1 align="center">History-languages</h1>

Esse projeto tras uma pequena descrição de algumas linguagens de programação mais conhecidas da area de programação, onde uma API Rest fornecida pelo Express, gera os valores com os campos para consumi-las.

</br>

O objetivo é por em pratica os conhecimentos e revisão em **Prisma**, **MongoDB**, **Mocha**, **Sinon** e **Clean Architecture**. 

</br>

## Explicação

<!-- ### BackEnd -->
Com a parte do backEnd ja criada, o servidor fornece uma API que contem as propriedade `id`, `name`, `description` e `year`. Os valores **DEVEM** ser inseridos de forma automatica, usando os comando de instalação que estão a [abaixo](#tecnologias-ferramentas-e-metodos). A estrutura individual ficara assim:
```json
{
  "id": "647a6844f8aad2735618dacc",
  "name": "JavaScript",
  "description": "Linguagem para WEB, criado por Brendan Eich, a pedido da empresa Netscape",
  "year": 1995
}
```

</br>

A api não contem metodos de inserir, atualizar ou deletar. Pois o objetivo é permitir que o usuario faça apenas o consumo dos valores, e não a alteração. Ou seja as rotas usadas são aquelas geradas pelo metodo `GET` que são:
- GET
    - `/languages`: Retorna todas as decrições de linguagens.
    - `/languages/:id`: Retorna apenas uma decrição da linguagem selecionada pelo `id`. Veja como é o `id` no json acima.

</br>

## Tecnologias, Ferramentas e Metodos

- TypeScript
- Javascript
- Node Js
- Express
- Prisma
- MongoDB
- Sinon
- Mocha
- Chai
- Docker
- BDD
- Clean Architecture

</br>

## Instalação

```bash

# Baixe o repositório e entre
git clone git@github.com:RobertSantos-dev/History-languages.git
cd History-languages/backEnd

# Instale as dependencias do diretório backEnd
npm install

# Renomeie o arquivo .env.example para .env
mv .env.example .env

# Crie o servidor, RODE OS COMANDO UM POR VEZ, a seguir
npm run dev:up
npm run db:init
npm run db:reset

# Rode o servidor
npm run dev

```
