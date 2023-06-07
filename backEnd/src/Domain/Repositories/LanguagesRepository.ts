import conn from "../../Infrasctrure/Databases/Connection";
import { IRepository } from "../Interfaces/ILanguages";

export default class LanguagesRepository implements IRepository {
  public async findAll() {
    const result = await conn.languages.findMany();

    return result;
  }

  public async findId(id: string) {
    const result = await conn.languages.findUnique({
      where: { id },
    });

    if (result) return result;
    return null;
  }
}
