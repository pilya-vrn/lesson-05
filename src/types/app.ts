import { NextFunction, Request, Response } from "express";

export declare namespace App {
  namespace Config {

    interface Service {
      readonly port: number;
    }
  }

  type Action = (req: Request, res: Response, next: NextFunction) => Promise<void>

  interface Route {
    method: 'get' | 'post';
    path: string;
    action: Action;
  }
}
