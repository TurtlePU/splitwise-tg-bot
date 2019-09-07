import Mongoose from 'mongoose';
import TelegramBot from 'node-telegram-bot-api';

export interface IUser extends Mongoose.Document {
    _id: Number,
    name: String,
    token: String
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
    if (User.exists((doc: IUser) => doc._id == user.id)) {
        return doc.update(doc);
    } else {
        return doc.save();
    }
}
