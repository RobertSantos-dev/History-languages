export interface IRequest {
  payload: any,
  params: any,
  query: any
}

export interface IResponse {
  status: number,
  payload: any,
}

export interface IController {
  getAll(req: IRequest): Promise<IResponse>
}
