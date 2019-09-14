import Express from 'express';
import Bot from 'node-telegram-bot-api';

import commands from '@commands';
import { getLocaledUi } from '@locale';

export interface StartOptions {
    token: string;
    url: string;
};

export default async function start({ token, url }: StartOptions) {
    const bot = new Bot(token);
    await bot.setWebHook(url);

    const oldSendMessage = bot.sendMessage.bind(bot);
    bot.sendMessage = (chatId, text, options) => {
        return oldSendMessage(chatId, text, { parse_mode: 'Markdown', ...options });
    };

    commands.forEach(({ regexp, callback }) => {
        bot.onText(regexp, (msg, match) => {
            callback(bot)({
                msg, match, locale: getLocaledUi(msg.from && msg.from.language_code)
            });
        });
    });

    return (req: Express.Request, res: Express.Response) => {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    };
};
