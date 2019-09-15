import { User } from 'node-telegram-bot-api';

import { me } from '@api';
import { saveUser, getUserById } from '@storage';
import { redeemToken } from '@token';

import { Command } from './command';

const command: Command = {
    regexp: /^\/start\b(.*)$/,
    callback: bot => async ({ msg, match, locale }) => {
        console.log('kok');
        let message: string;
        if (msg.from) {
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
        } else {
            message = locale.anon;
        }
        bot.sendMessage(msg.chat.id, message);
    }
};

export default command;

function getName({ username, first_name, last_name }: User) {
    return username ? `@${username}` : `${first_name}${last_name ? ` ${last_name}` : ''}`;
}
