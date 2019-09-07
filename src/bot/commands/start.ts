import Locale from '@locale';

import { Command } from './command';
import { saveUser } from '@storage';

const command: Command = {
    regexp: /\/start\b(?: (.*))?/,
    callback: ({ bot, authLink }) => async (msg, match) => {
        if (msg.from) {
            if (match) {
                await saveUser(msg.from, match[1]);
            }
            bot.sendMessage(
                msg.chat.id,
                Locale(msg.from.language_code).start.text(
                    msg.from.first_name,
                    match ? undefined : authLink
                ),
                { parse_mode: 'Markdown' }
            );
        }
    }
};

export default command;
