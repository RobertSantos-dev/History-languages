import { Request, Response } from "express";
import { IController, IRequest, IResponse } from "../IController";

export default class ExpressRoutes {
  constructor(private controller: IController) {}

  private request(req: Request) {
    return {
      payload: req.body,
      params: req.params,
      query: req.query,
    }
  }

  public async getAll(req: Request, res: Response) {
    const request: IRequest = this.request(req);
    const result: IResponse = await this.controller.getAll(request);

    return res.status(result.status).json(result.payload);
  }

  public async getId(req: Request, res: Response) {
    const request: IRequest = this.request(req);
    const result: IResponse = await this.controller.getId(request);

    return res.status(result.status).json(result.payload);
  }
}
