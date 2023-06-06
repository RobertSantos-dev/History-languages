import { ILanguages, IRepository } from "../Interfaces/ILanguages";
import { Languages } from "../Entities/Languages";

export default class LanguagesService {
  constructor(private repository: IRepository) {}

  private createLanguages(obj: ILanguages) {
    return new Languages(obj);
  }

  public async findAll() {
    const values = await this.repository.findAll();

    const result = values.map((e) => this.createLanguages(e));
    return result;
  }
}