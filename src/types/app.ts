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

  namespace Error {
    interface HttpError {
      readonly message: string;
      readonly status: number;
      readonly timestamp: Date;
      readonly errors: ReadonlyArray<string>;
    }

    interface Body {
      readonly message: string;
      readonly status: number;
      readonly timestamp: string;
      readonly method: string;
      readonly path: string;
      readonly errors: ReadonlyArray<string>;
    }
  }

  namespace Book {
    namespace Create {
      interface Body {
        title: string;
        year: number;
      }
    }
  }

  type Action = (req: Request, res: Response, next: NextFunction) => Promise<void>

  interface Route {
    method: 'get' | 'post';
    path: string;
    action: Action;
  }
}
