import conn from "../Databases/Connection";
import { Request, Response } from "express";

export default class LanguagesC {
  public async getAll(_req: Request, res: Response) {
    const result = await conn.languages.findMany({
      select: { name: true, description: true, year: true },
    });

    res.status(200).json(result);
  }
}
