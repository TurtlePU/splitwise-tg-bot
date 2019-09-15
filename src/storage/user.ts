import Mongoose from 'mongoose';

type Id = {
    _id: number,
    tg: number
};

export type IdDocument = Mongoose.Document & Id;

export const IdModel = Mongoose.model<IdDocument>('ID', new Mongoose.Schema({
    _id: { type: Number, required: true },
    tg: { type: Number, required: true }
}));

export type User = {
    _id: number;
    name: string;
    swToken: string;
};

export type UserDocument = Mongoose.Document & User;

export const UserModel = Mongoose.model<UserDocument>('User', new Mongoose.Schema({
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    swToken: { type: String, required: true }
}));
