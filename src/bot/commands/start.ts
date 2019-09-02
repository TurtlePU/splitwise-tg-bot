import TelegramBot from 'node-telegram-bot-api';

import UI from '@ui';

export default (ctx: { bot: TelegramBot, authLink: string }) => (msg: TelegramBot.Message) => {
    if (msg.from) {
        ctx.bot.sendMessage(
            msg.chat.id,
            UI(msg.from.language_code).start.text(msg.from.first_name, ctx.authLink),
            { parse_mode: 'HTML' }
        );
    }
};
