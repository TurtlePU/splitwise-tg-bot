import Express from 'express';
import Bot from 'node-telegram-bot-api';

import commands from '@commands';

export interface StartOptions {
    token: string;
    url: string;
    authLink: string;
};

export default async function start(options: StartOptions) {
    const { token, url } = options;

    const bot = new Bot(token);
    await bot.setWebHook(url);

    commands.forEach(({ regexp, callback }) =>
        bot.onText(regexp, callback({ bot, ...options }))
    );

    return (req: Express.Request, res: Express.Response) => {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    };
};
