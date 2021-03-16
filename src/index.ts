import "reflect-metadata";
import './bootstrap'
import { createConnection, FileLogger } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { App } from "./types/app";
import { Service } from "./enum/service";
import { LogLevel } from "./enum/log-level";
import { error } from "./utils";
import { NotFoundError } from "./error/NotFoundError";
import { BadRequestError } from "./error/BadRequestError";

const config = container.resolve<App.Config.Service>(Service.Config)
const logger = container.resolve<App.Logger.Service>(Service.Logger)

createConnection().then(async connection => {
    const { Routes } = require('./routes')

    // create express app
    const app = express();
    app.use(bodyParser.json());

    Routes.forEach(route => {
        app[route.method](route.path, async (req: Request, res: Response, next: express.NextFunction) => {
            try {
                await route.action(req, res, next)
            } catch (err) {
                if (err?.name === 'ValidationError') {
                    error(new BadRequestError(err?.errors ?? []), req, res)
                } else {
                    error(err, req, res)
                }
            }
        })
    })

    app.all('*', (req: Request, res: Response) => {
        error(new NotFoundError(), req, res)
    })

    // start express server
    app.listen(config.port, () => {
        logger.log(LogLevel.Info, `Application running on port: ${config.port}`)
    });

}).catch(error => console.log(error));
