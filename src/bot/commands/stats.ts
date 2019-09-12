import { expenses } from '@api';
import { hasUser, getUserById, IUser } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /\/stats/,
    callback: ({ bot }) => async msg => {
        if (msg.from && await hasUser(msg.from.id)) {
            const user = await getUserById(msg.from.id) as IUser;
            bot.sendMessage(msg.chat.id, (await expenses(user.token)).toString());
        }
    }
};

export default command;
