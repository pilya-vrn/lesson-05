import { bookGetAll } from "./controller/BookController";
import { App } from "./types/app";

export const Routes: App.Route[] = [
    {
        method: 'get',
        path: '/books',
        action: bookGetAll
    }
];
