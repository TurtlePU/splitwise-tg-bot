import Mongoose from 'mongoose';

export class Id {
    readonly tg: number;
    readonly sw: number;

    constructor(tg: number, sw: number) {
        this.tg = tg;
        this.sw = sw;
    }
};

export type IdDoc = Mongoose.Document & Id;

export const IdModel = Mongoose.model<IdDoc>('UserMap', new Mongoose.Schema({
    tg: { type: Number, required: true },
    sw: { type: Number, required: true }
}));

export type IUser = {
    _id: Id;
    name: string;
    swToken: string;
};

export type UserDoc = Mongoose.Document & IUser;

export const User = Mongoose.model<UserDoc>('User', new Mongoose.Schema({
    _id: { type: Id, required: true },
    name: { type: String, required: true },
    swToken: { type: String, required: true }
}));
