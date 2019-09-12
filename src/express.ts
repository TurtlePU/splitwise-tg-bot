import bodyParser from 'body-parser';
import Express from 'express';

import Locale from '@locale';

import { getKey } from './splitwise/core';

export type StartOptions = {
    port: number;
    botName: string;
    botWebhook: (req: Express.Request, res: Express.Response) => void;
};

export function callbackUrl(appUrl: string) {
    return `https://${appUrl}/clb/`;
};

export function botUrl(appUrl: string) {
    return `https://${appUrl}/bot/`;
};

export function startServer({ port, botName, botWebhook }: StartOptions) {
    const app = Express();
    app.use(bodyParser.json());
    app.post(`/bot/`, botWebhook);
    app.get(`/clb/`, async (req, res) => {
        let text = Locale(req.headers["accept-language"]).redirect.text();
        console.log(req.query);
        let key = await getKey(req.query.code);
        res.send(`<a href="https://tele.gg/${botName}?start=${key}">${text}</a>`);
    });
    return new Promise(resolve => app.listen(port, resolve));
};
