import { container, Lifecycle } from "tsyringe";
import { Service } from "./enum/service";
import { ConfigServiceJson } from "./service/ConfigServiceJson";
import { LoggerService } from "./service/LoggerService";
import { App } from "./types/app";

container.register<App.Config.Service>(Service.Config, { useClass: ConfigServiceJson }, { lifecycle: Lifecycle.Singleton })

container.register<App.Logger.Service>(Service.Logger, { useClass: LoggerService }, { lifecycle: Lifecycle.Singleton })
