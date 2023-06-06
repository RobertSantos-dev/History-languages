import { Request, Response } from "express";
import { IController, IRequest, IResponse } from "../IController";

export default class ExpressRoutes {
  public static adapter(controller: IController) {
    return async (req: Request, res: Response) => {
      const request: IRequest = {
        payload: req.body,
        params: req.params,
        query: req.query,
      }
      const { status, payload }: IResponse = await controller.getAll(request);

      return res.status(status).json(payload);
    }
  }
}
