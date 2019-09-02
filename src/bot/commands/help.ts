import TelegramBot from 'node-telegram-bot-api';

import Locale from '@locale';

import { Command } from './command';

const command: Command = {
    regexp: /\/help/,
    callback: (ctx: { bot: TelegramBot }) => (msg: TelegramBot.Message) => {
        if (msg.from) {
            ctx.bot.sendMessage(
                msg.chat.id,
                Locale(msg.from.language_code).help.text()
            );
        }
    }
};

export default command;
