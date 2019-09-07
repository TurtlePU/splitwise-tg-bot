import Mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';

export interface IUser extends Mongoose.Document {
    _id: number,
    name: string,
    token: string
};

const User = Mongoose.model<IUser>('User', new Mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
}));

function getName(user: TelegramBot.User) {
    return '@' + user.username || user.first_name + (' ' + user.last_name || '');
}

export function startStorage(mongoUri: string) {
    return Mongoose.connect(mongoUri);
}

export function saveUser(user: TelegramBot.User, token: string) {
    const doc = new User({ _id: user.id, name: getName(user), token });
    return User.findByIdAndUpdate(doc._id, doc);
}

export function getUserById(id: number) {
    return User.findById(id);
}

export async function hasUser(id: number) {
    return (await User.findById(id)) != null;
}
