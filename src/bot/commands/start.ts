import Locale from '@locale';

import { Command } from './command';
import { saveUser, hasUser } from '@storage';
import { AssertionError } from 'assert';

const command: Command = {
    regexp: /\/start\b(?: (.*))?/,
    callback: ({ bot, authLink }) => async (msg, match) => {
        if (!match) {
            throw new AssertionError({ message: "Can't parse tokens" });
        }
        if (msg.from) {
            if (match[1]) {
                await saveUser(msg.from, match[1]);
            }
            bot.sendMessage(
                msg.chat.id,
                Locale(msg.from.language_code).start.text(
                    msg.from.first_name,
                    await hasUser(msg.from.id) ? undefined : authLink
                ),
                { parse_mode: 'Markdown' }
            );
        }
    }
};

export default command;
