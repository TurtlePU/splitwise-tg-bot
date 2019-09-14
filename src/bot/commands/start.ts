import { AssertionError } from 'assert';

import { saveUser, getUserById } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /\/start\b(?: (.*))?/,
    callback: ({ bot, authLink }) => async ({ msg, match, locale }) => {
        if (!match) {
            throw new AssertionError({ message: "Can't parse tokens" });
        }
        if (msg.from) {
            if (match[1]) {
                await saveUser(msg.from, match[1]);
            }
            bot.sendMessage(msg.chat.id,
                locale.start.text(
                    msg.from.first_name,
                    await getUserById(msg.from.id) ? undefined : authLink
                )
            );
        } else {
            bot.sendMessage(msg.chat.id, locale.anon.text());
        }
    }
};

export default command;
