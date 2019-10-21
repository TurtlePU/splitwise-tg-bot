import Express from 'express';
import Bot from 'node-telegram-bot-api';

import commands from '@commands';
import { getLocaledUi } from '@locale';
import { updateUserName } from '@storage';
import { getName } from '@util/user';
import { Command } from './commands/command';
import TelegramBot from 'node-telegram-bot-api';

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

    commands.forEach(command => {
        if (requiresFrom(command)) {
            bot.onText(command.regexp, async (msg, match) => {
                if (msg.from) {
                    await updateUserName(msg.from.id, getName(msg.from))
                    command.callback(bot)({
                        msg, match, locale: getLocaledUi(msg.from && msg.from.language_code)
                    });
                } else {
                    bot.sendMessage(msg.chat.id, getLocaledUi().anon);
                }
            });
        } else {
            bot.onText(command.regexp, async (msg, match) => {
                if (msg.from) {
                    await updateUserName(msg.from.id, getName(msg.from))
                }
                command.callback(bot)({
                    msg, match, locale: getLocaledUi(msg.from && msg.from.language_code)
                });
            });
        }
    });

    return (req: Express.Request, res: Express.Response) => {
        bot.processUpdate(req.body);
        res.sendStatus(200);
    };
};

function requiresFrom(command: Command<any>): boolean {
    const c = (command as Command<{ from: TelegramBot.User }>);
    return c.requirements && c.requirements.from;
}
