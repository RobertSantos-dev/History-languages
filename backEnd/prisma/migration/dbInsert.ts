import conn from "../../src/Infrasctrure/Databases/Connection";

async function dbInsert() {
  await conn.languages.createMany({ data: [
    {
      name: 'JavaScript',
      description: 'Linguagem para WEB, criado por Brendan Eich, a pedido da empresa Netscape',
      year: 1995,
    },
    { 
      name: 'TypeScript',
      description: 'Uma versão de Javascript com tipagens, interfaces e deversos atributos. Criada pela equipe da Microsoft',
      year: 2012,
    },
    {
      name: 'Python',
      description: 'Criado por Guido van Rossum. Uma linguagem de facil entendimento e versatil.',
      year: 1991,
    },
    {
      name: 'Java',
      description: 'A empresa Sun Microsystems, iniciou um projeto que, em alguns anos, gerou uma das maiores linguagens de progração até hoje',
      year: 1991,
    },
    {
      name: 'Kotlin',
      description: 'Criado pela JetBrains. Atualmente a principal para desenvolvimento em Android',
      year: 2011,
    },
    {
      name: 'Swift',
      description: 'Criado pela Apple. Atualmente a principal para desenvolvimento em IOS',
      year: 2014,
    },
  ] })
};

dbInsert();
