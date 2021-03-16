import { App } from "../types/app";

export class HttpError extends Error implements App.Error.HttpError {
  readonly status: number;
  readonly timestamp: Date;

  constructor(message: string, status: number) {
    super(message)

    this.status = status
    this.timestamp = new Date()
  }
}
