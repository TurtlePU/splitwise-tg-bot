import { friends, User } from '@api';
import { getUserById } from '@storage';

import { Command } from './command';

const command: Command = {
    regexp: /^\/stats$/,
    callback: bot => async ({ msg, locale }) => {
        let message: string;
        if (msg.from) {
            const user = await getUserById({ tg: msg.from.id });
            if (user) {
                console.log(await friends(user.swToken));
                message = locale.stats(
                    await Promise.all((await friends(user.swToken)).map(async friend => ({
                        name: await getName(friend),
                        balance: friend.balance
                    })))
                );
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

async function getName(user: User): Promise<string> {
    const savedUser = await getUserById({ sw: user.id });
    if (savedUser) {
        return `tg: ${savedUser.name}`;
    } else {
        return user.first_name + (user.last_name ? ` ${user.last_name}` : '');
    }
}
