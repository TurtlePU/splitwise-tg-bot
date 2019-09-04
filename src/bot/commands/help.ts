import TelegramBot from 'node-telegram-bot-api';

import Locale from '@locale';

import { Command } from './command';

const command: Command = {
    regexp: /\/help/,
    callback: ({ bot }) => (msg: TelegramBot.Message) => {
        if (msg.from) {
            bot.sendMessage(
                msg.chat.id,
                Locale(msg.from.language_code).help.text()
            );
        }
    }
};

export default command;
