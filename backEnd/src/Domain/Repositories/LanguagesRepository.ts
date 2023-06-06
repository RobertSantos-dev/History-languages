import conn from "../../Infrasctrure/Databases/Connection";
import { IRepository } from "../Interfaces/ILanguages";

export default class LanguagesRepository implements IRepository {
  public async findAll() {
    const result = await conn.languages.findMany({
      select: { name: true, description: true, year: true },
    });

    return result;
  }
}
