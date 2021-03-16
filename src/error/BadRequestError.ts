import { HttpError } from "./HttpError";

export class BadRequestError extends HttpError {
  constructor() {
    super('Bad request', 400)
  }
}
