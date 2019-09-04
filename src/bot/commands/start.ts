import TelegramBot from 'node-telegram-bot-api';

import Locale from '@locale';

import { Command } from './command';

const command: Command = {
    regexp: /\/start/,
    callback: ({ bot, authLink }) => (msg: TelegramBot.Message) => {
        if (msg.from) {
            bot.sendMessage(
                msg.chat.id,
                Locale(msg.from.language_code).start.text(msg.from.first_name, authLink),
                { parse_mode: 'Markdown' }
            );
        }
    }
};

export default command;
