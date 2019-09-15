import Mongoose from 'mongoose';

export type IId = {
    _id: number,
    tg: number
};

type IdDoc = Mongoose.Document & IId;

export const IdModel = Mongoose.model<IdDoc>('ID', new Mongoose.Schema({
    _id: { type: Number, required: true },
    tg: { type: Number, required: true }
}));

export type IUser = {
    _id: number;
    name: string;
    swToken: string;
};

type UserDoc = Mongoose.Document & IUser;

export const UserModel = Mongoose.model<UserDoc>('User', new Mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    swToken: { type: String, required: true }
}));
