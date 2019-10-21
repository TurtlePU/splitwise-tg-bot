import TelegramBot from 'node-telegram-bot-api';

import { getUserById } from '@storage';

import { Command } from './command';

const command: Command<{ from: TelegramBot.User }> = {
    regexp: /^\/start$/,
    requirements: {
        from: true
    },
    callback: bot => async ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.start(
            msg.from.first_name,
            !!await getUserById({ tg: msg.from.id })
        ));
    }
};

export default command;
