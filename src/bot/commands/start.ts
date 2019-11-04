import TelegramBot from 'node-telegram-bot-api';

import { getUserById } from '@storage';

import { makeCommand } from './wrapper';

const command = makeCommand(
{
    from: {} as TelegramBot.User
},
{
    regexp: /^\/start$/,
    callback: bot => async ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.start(
            msg.from.first_name,
            !!await getUserById({ tg: msg.from.id })
        ));
    }
});

export default command;
