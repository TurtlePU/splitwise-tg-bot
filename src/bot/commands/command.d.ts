import TelegramBot from 'node-telegram-bot-api';

declare type Context = {
    bot: TelegramBot;
    authLink: string;
};

declare type Message = {
    msg: TelegramBot.Message,
    match: RegExpExecArray | null,
    locale: Locale
};

declare type Command = {
    regexp: RegExp;
    callback: (ctx: Context) => (msg: Message) => void;
};
