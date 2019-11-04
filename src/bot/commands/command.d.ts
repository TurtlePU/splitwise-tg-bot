import TelegramBot from 'node-telegram-bot-api';

declare type Message<MType> = {
    msg: TelegramBot.Message & MType,
    match: RegExpExecArray | null,
    locale: Locale
};

declare type CommandProto<MType> = {
    regexp: RegExp;
    callback: (bot: TelegramBot) => (msg: Message<MType>) => void;
};

declare type Command<MType> = CommandProto<MType> & {
    requirements: MType;
};
