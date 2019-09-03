import TelegramBot from 'node-telegram-bot-api';

declare type Context = {
    bot: TelegramBot;
    authLink: string;
};

declare type Command = {
    regexp: RegExp;
    callback: (ctx: Context) => (msg: TelegramBot.Message) => void;
};
