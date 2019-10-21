import { Command } from './command';

const command: Command<{}> = {
    regexp: /^\/auth$/,
    callback: bot => ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.auth());
    }
};

export default command;
