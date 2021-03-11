import { injectable } from "tsyringe";
import { App } from "../types/app";

@injectable()
export class ConfigServiceJson implements App.Config.Service {
  readonly port: number;

  constructor() {
    const data = require('../../config/config.json')

    console.log("Config constructor")

    this.port = 5000
  }
}
