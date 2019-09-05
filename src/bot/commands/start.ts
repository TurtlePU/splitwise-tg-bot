import Locale from '@locale';

import { Command } from './command';

const command: Command = {
    regexp: /\/start\b(?: (.*))?/,
    callback: ({ bot, authLink }) => (msg, match) => {
        console.log('Match: ', match);
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
