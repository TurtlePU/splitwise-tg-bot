import TelegramBot from 'node-telegram-bot-api';

import UI from '../ui/export';

export default (ctx: { bot: TelegramBot }) =>
    (msg: TelegramBot.Message) => {
        if (msg.from) {
            ctx.bot.sendMessage(
                msg.chat.id,
                UI(msg.from.language_code).help.text()
            );
        }
    };
