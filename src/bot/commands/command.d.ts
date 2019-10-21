import TelegramBot from 'node-telegram-bot-api';

declare type Message<MType> = {
    msg: TelegramBot.Message & MType,
    match: RegExpExecArray | null,
    locale: Locale
};

declare type Command<MType> = {
    regexp: RegExp;
    callback: (bot: TelegramBot) => (msg: Message<MType>) => void;
} & ({} extends MType ? {} : {
    requirements: { [Key in keyof MType]: true };
});
