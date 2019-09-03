import bodyParser from 'body-parser';
import Express from 'express';

export function callbackUrl(appUrl: string) {
    return `https://${appUrl}/clb`;
};

export function botUrl(appUrl: string) {
    return `https://${appUrl}/bot`;
};

export type StartOptions = {
    port: number;
    botWebhook: (req: Express.Request, res: Express.Response) => void;
};

export default function start(options: StartOptions) {
    const app = Express();
    app.use(bodyParser.json());
    app.post(`/bot`, options.botWebhook);
    app.get(`/clb`, (req, res) => {
        res.send(``);
    });
    return new Promise(resolve => app.listen(options.port, resolve));
};
