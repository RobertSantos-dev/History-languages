import conn from "../../src/Infrasctrure/Databases/Connection";

async function dbDelete() {
  await conn.languages.deleteMany();
}

dbDelete();
