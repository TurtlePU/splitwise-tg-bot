import { Command } from './command';

const command: Command = {
    regexp: /\/auth/,
    callback: ({ bot, authLink }) => ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.auth.text(authLink));
    }
};

export default command;
