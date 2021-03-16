import { NextFunction, Request, Response } from "express";
import { LogLevel } from "../enum/log-level";

export declare namespace App {
  namespace Config {

    interface Service {
      readonly port: number;
      readonly logLevel: LogLevel;
    }
  }

  namespace Logger {
    interface Service {
      log(level: LogLevel, message: string): void;
      error(message: string): void
      warn(message: string): void
      info(message: string): void
      http(message: string): void
      verbose(message: string): void
      debug(message: string): void
      silly(message: string): void
    }
  }

  type Action = (req: Request, res: Response, next: NextFunction) => Promise<void>

  interface Route {
    method: 'get' | 'post';
    path: string;
    action: Action;
  }
}
