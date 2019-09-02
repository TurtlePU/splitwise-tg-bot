import TelegramBot from 'node-telegram-bot-api';

declare type Context = {
    bot: TelegramBot;
    authLink: (id: number) => string;
};

declare type Command = {
    regexp: RegExp;
    callback: (ctx: Context) => (msg: TelegramBot.Message) => void;
};
