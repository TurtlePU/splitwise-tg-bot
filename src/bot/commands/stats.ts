import { friends } from '@api';
import { getUserById } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /\/stats/,
    callback: bot => async ({ msg, locale }) => {
        let message: string;
        if (msg.from) {
            const user = await getUserById({ tg: msg.from.id });
            if (user) {
                console.log(await friends(user.swToken));
                message = "ok";
            } else {
                message = locale.noAuth();
            }
        } else {
            message = locale.anon;
        }
        bot.sendMessage(msg.chat.id, message);
    }
};

export default command;
