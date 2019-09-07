import Locale from '@locale';

import { Command } from './command';

const command: Command = {
    regexp: /\/auth/,
    callback: ({ bot, authLink }) => (msg) => {
        const langCode = msg.from ? msg.from.language_code : '';
        bot.sendMessage(msg.chat.id,
            Locale(langCode).auth.text(authLink),
            { parse_mode: 'Markdown' }
        );
    }
};

export default command;
