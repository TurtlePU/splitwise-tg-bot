import TelegramBot from 'node-telegram-bot-api';

import Locale from '@locale';

import { Command } from './command';

const command: Command = {
    regexp: /\/start/,
    callback: (ctx: { bot: TelegramBot, authLink: string }) => (msg: TelegramBot.Message) => {
        if (msg.from) {
            ctx.bot.sendMessage(
                msg.chat.id,
                Locale(msg.from.language_code).start.text(msg.from.first_name, ctx.authLink),
                { parse_mode: 'Markdown' }
            );
        }
    }
};

export default command;
