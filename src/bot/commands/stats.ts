import TelegramBot from 'node-telegram-bot-api';

import { friends, User } from '@api';
import { getUserById } from '@storage';
import { getName } from '@util/user';

import { makeCommand } from './wrapper';

const command = makeCommand(
{
    from: {} as TelegramBot.User
},
{
    regexp: /^\/stats$/,
    callback: bot => async ({ msg, locale }) => {
        let message: string;
        const user = await getUserById({ tg: msg.from.id });
        if (!user) {
            message = locale.noAuth();
        } else {
            message = locale.stats(await Promise.all(
                (await friends(user.swToken))
                    .filter(friend => friend.balance.length)
                    .map(async friend => ({
                        name: await getNameAsync(friend),
                        balance: friend.balance
                    }))
            ));
        }
        bot.sendMessage(msg.chat.id, message);
    }
});

export default command;

async function getNameAsync(user: User): Promise<string> {
    const savedUser = await getUserById({ sw: user.id });
    if (savedUser) {
        return `tg: ${savedUser.name}`;
    } else {
        return getName(user);
    }
}
