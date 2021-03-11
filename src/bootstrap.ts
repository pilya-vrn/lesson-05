import { container } from "tsyringe";
import { Service } from "./enum/service";
import { ConfigServiceJson } from "./service/ConfigServiceJson";
import { App } from "./types/app";

container.register<App.Config.Service>(Service.Config, { useClass: ConfigServiceJson })
