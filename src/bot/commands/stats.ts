import { expenses } from '@api';
import { hasUser, getUserById, IUser } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /\/stats/,
    callback: ({ bot }) => async msg => {
        if (msg.from && await hasUser(msg.from.id)) {
            const user = await getUserById(msg.from.id) as IUser;
            console.log(await expenses(user.token));
            bot.sendMessage(msg.chat.id, "ok");
        }
    }
};

export default command;
