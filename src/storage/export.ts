import Mongoose from 'mongoose';

import { UserModel, IdModel, IUser, IId } from './user';

export type Id = {
    sw: number,
    tg: number
};

export type User = {
    id: Id,
    name: string,
    token: string
};

export function startStorage(mongoUri: string) {
    return Mongoose.connect(mongoUri);
};

export function saveUser(user: User) {
    return Promise.all([
        new UserModel(makeIUser(user)).save(),
        new IdModel(makeIId(user.id)).save()
    ]);
};

export async function getUserById({ sw, tg }: Partial<Id>) {
    if (tg) {
        return UserModel.findById(tg);
    }
    const id = await IdModel.findById(sw);
    return id && UserModel.findById(id.tg);
};

function makeIUser(user: User): IUser {
    return {
        _id: user.id.tg,
        name: user.name,
        swToken: user.token
    };
};

function makeIId(id: Id): IId {
    return {
        _id: id.sw,
        tg: id.tg
    };
};
