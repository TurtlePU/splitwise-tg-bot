import { friends } from '@api';
import { getUserById } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /\/stats/,
    callback: ({ bot, authLink }) => async ({ msg, locale }) => {
        let message: string;
        if (msg.from) {
            const user = await getUserById(msg.from.id);
            if (user) {
                console.log(await friends(user.token));
                message = "ok";
            } else {
                message = locale.noauth.text(authLink);
            }
        } else {
            message = locale.anon.text();
        }
        bot.sendMessage(msg.chat.id, message);
    }
};

export default command;
