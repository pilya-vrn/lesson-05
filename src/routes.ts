import { bookCreate, bookGetAll, bookGetById } from "./controller/BookController";
import { App } from "./types/app";

export const Routes: App.Route[] = [
    {
        method: 'get',
        path: '/books',
        action: bookGetAll
    },
    {
        method: 'get',
        path: '/books/:id',
        action: bookGetById
    },
    {
        method: 'post',
        path: '/books',
        action: bookCreate
    }
];
