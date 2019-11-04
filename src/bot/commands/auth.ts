import { makeSimpleCommand } from './wrapper';

const command = makeSimpleCommand({
    regexp: /^\/auth$/,
    callback: bot => ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.auth());
    }
});

export default command;
