export interface ILanguages {
  id?: string,
  name: string,
  description: string,
  year: number,
}

export interface IRepository {
  findAll(): Promise<ILanguages[]>,
  findId(id: string): Promise<ILanguages | null>,
}
