import LanguagesService from "../../Domain/Services/LanguagesService";
import { IRequest, IResponse } from "../Adapters/IController";

export default class LanguagesController {
  constructor(private service: LanguagesService) {}

  public async getAll(_req: IRequest): Promise<IResponse> {
    const result = await this.service.findAll();
    return {
      status: 200,
      payload: result
    }
  }
}
