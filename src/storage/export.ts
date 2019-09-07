import Mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';

const User = Mongoose.model('User', new Mongoose.Schema({
    id: Number,
    name: String,
    token: String
}));

function getName(user: TelegramBot.User) {
    return user.username || user.first_name + (' ' + user.last_name || '');
}

export function startStorage(mongoUri: string) {
    return Mongoose.connect(mongoUri);
}

export function saveUser(user: TelegramBot.User, token: string) {
    const userModel = new User({ id: user.id, name: getName(user), token });
    return userModel.save();
}
