import { ILanguages, IRepository } from "../Interfaces/ILanguages";
import { Languages } from "../Entities/Languages";
import LanguagesError from "../Errors/LanguagesError";

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

  public async findId(id: string) {
    const value = await this.repository.findId(id);
    
    if (value) return this.createLanguages(value);
    
    throw new LanguagesError('Id invalid');
  }
}