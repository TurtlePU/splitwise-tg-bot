import bodyParser from 'body-parser';
import Express from 'express';

// TODO use custom headers to create correct authlink

export function authLink(appUrl: string, id: number) {
    return `https://${appUrl}/clb/${id}`;
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
    app.get(`/clb/:id`, (req, _res) => {
        console.log(req.params['id'], req.body);
    });
    return new Promise(resolve => app.listen(options.port, resolve));
};
