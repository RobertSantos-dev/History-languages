import { ILanguages } from "../Interfaces/ILanguages";

export class Languages {
  private id: string | undefined;
  private name: string;
  private description: string;
  private year: number;

  constructor(obj: ILanguages) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.year = obj.year;
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getDescription() {
    return this.description;
  }

  public getYear() {
    return this.year;
  }
}
