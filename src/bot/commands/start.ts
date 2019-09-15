import { getUserById } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /^\/start$/,
    callback: bot => async ({ msg, locale }) => {
        let message: string;
        if (msg.from) {
            message = locale.start(
                msg.from.first_name,
                !!await getUserById({ tg: msg.from.id })
            );
        } else {
            message = locale.anon;
        }
        bot.sendMessage(msg.chat.id, message);
    }
};

export default command;
