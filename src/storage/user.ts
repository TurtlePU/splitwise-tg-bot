import Mongoose from 'mongoose';

export type Id = {
    tg: number,
    sw: number
};

export type IdDoc = Mongoose.Document & Id;

export const IdModel = Mongoose.model<IdDoc>('UserMap', new Mongoose.Schema({
    tg: { type: Number, required: true },
    sw: { type: Number, required: true }
}));

export type IUser = {
    _id: number;
    name: string;
    swToken: string;
};

export type UserDoc = Mongoose.Document & IUser;

export const User = Mongoose.model<UserDoc>('User', new Mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    swToken: { type: String, required: true }
}));
