import { App } from "../types/app";

export class ConfigServiceCustom implements App.Config.Service {
  readonly port = 7000
}
