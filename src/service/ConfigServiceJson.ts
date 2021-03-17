import { injectable } from "tsyringe";
import { LogLevel } from "../enum/log-level";
import { App } from "../types/app";

@injectable()
export class ConfigServiceJson implements App.Config.Service {
  readonly port: number;
  readonly logLevel: LogLevel;

  constructor() {
    const data = require('../../config/config.json')

    this.port = data.port
    this.logLevel = data.logLevel
  }
}
