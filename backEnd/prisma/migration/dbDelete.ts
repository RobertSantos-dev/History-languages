import conn from "../../src/Databases/Connection";

async function dbDelete() {
  await conn.languages.deleteMany();
}

dbDelete();
