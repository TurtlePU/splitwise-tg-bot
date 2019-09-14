import { Command } from './command';

const command: Command = {
    regexp: /\/help/,
    callback: bot => ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.help);
    }
};

export default command;
