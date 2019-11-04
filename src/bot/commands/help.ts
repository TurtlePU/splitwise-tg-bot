import { makeSimpleCommand } from './wrapper';

const command = makeSimpleCommand({
    regexp: /^\/help$/,
    callback: bot => ({ msg, locale }) => {
        bot.sendMessage(msg.chat.id, locale.help);
    }
});

export default command;
