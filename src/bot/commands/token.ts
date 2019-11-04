import TelegramBot from 'node-telegram-bot-api';

import { me } from '@api';
import { saveUser, getUserById } from '@storage';
import { redeemToken } from '@token';
import { getName } from '@util/user';

import { makeCommand } from './wrapper';

const command = makeCommand(
{
    from: {} as TelegramBot.User
},
{
    regexp: /^\/start (.*)$/,
    callback: bot => async ({ msg, match, locale }) => {
        let message: string;
        const token = (match as RegExpExecArray)[1];
        if (!redeemToken(token)) {
            message = locale.start(
                msg.from.first_name,
                !!await getUserById({ tg: msg.from.id })
            );
        } else {
            await Promise.all([
                bot.sendMessage(msg.chat.id, locale.onToken),
                saveUser({
                    id: { tg: msg.from.id, sw: (await me(token)).id },
                    name: getName(msg.from), token
                })
            ]);
            message = locale.onTokenSaved;
        }
        bot.sendMessage(msg.chat.id, message);
    }
});

export default command;
