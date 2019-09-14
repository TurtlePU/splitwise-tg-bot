import TelegramBot from 'node-telegram-bot-api';

declare type Message = {
    msg: TelegramBot.Message,
    match: RegExpExecArray | null,
    locale: Locale
};

declare type Command = {
    regexp: RegExp;
    callback: (bot: TelegramBot) => (msg: Message) => void;
};
