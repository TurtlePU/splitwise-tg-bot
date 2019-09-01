import Bot from 'node-telegram-bot-api';

import commands from './commands/export';

export interface StartOptions {
    token: string;
    url: string;
    port: number;
    authLink: string;
}

export default function start(options: StartOptions) {
    const { token, port } = options;

    const bot = new Bot(token, { webHook: { port } });

    commands.forEach(({ regexp, callback }) =>
        bot.onText(regexp, callback({ bot, ...options }))
    );

    return bot.setWebHook(`${options.url}/bot${token}`);
}
