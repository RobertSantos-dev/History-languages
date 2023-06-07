import LanguagesError from "../../Domain/Errors/LanguagesError";
import LanguagesService from "../../Domain/Services/LanguagesService";
import { IRequest, IResponse } from "../Adapters/IController";

export default class LanguagesController {
  constructor(private service: LanguagesService) {}

  public async getAll(_req: IRequest): Promise<IResponse> {
    const result = await this.service.findAll();

    return { status: 200, payload: result }
  }

  public async getId(req: IRequest): Promise<IResponse> {
    try {
      const { id } = req.params;
      const result = await this.service.findId(id);

      return { status: 200, payload: result };
    } catch (error) {

      if (error instanceof LanguagesError) {
        return { status: 401, payload: { error: error.message } }
      }
      return { status: 500, payload: '' }
    }
  }
}
