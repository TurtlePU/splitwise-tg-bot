import { AssertionError } from 'assert';
import TelegramBot from 'node-telegram-bot-api';

import { me } from '@api';
import { saveUser, getUserById, Id } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /\/start\b(?: (.*))?/,
    callback: bot => async ({ msg, match, locale }) => {
        if (!match) {
            throw new AssertionError({ message: "Can't parse tokens" });
        }
        let message: string;
        if (msg.from) {
            if (match[1]) {
                const swToken = match[1];
                await Promise.all([
                    bot.sendMessage(msg.chat.id, locale.onToken),
                    saveUser({
                        _id: { tg: msg.from.id, sw: (await me(swToken)).id },
                        name: getName(msg.from), swToken
                    })
                ]);
                message = locale.onTokenSaved;
            } else {
                message = locale.start(
                    msg.from.first_name,
                    !!await getUserById({ tg: msg.from.id })
                );
            }
        } else {
            message = locale.anon;
        }
        bot.sendMessage(msg.chat.id, message);
    }
};

export default command;

function getName({ username, first_name, last_name }: TelegramBot.User) {
    return username ? `@${username}` : `${first_name}${last_name ? ` ${last_name}` : ''}`;
}
