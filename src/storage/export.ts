import Mongoose from 'mongoose';

import { UserModel, IdModel, UserDocument, IdDocument } from './user';

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
        createUserDocument(user).save(),
        createIdDocument(user.id).save()
    ]);
};

export async function getUserById({ sw, tg }: Partial<Id>) {
    if (tg) {
        return UserModel.findById(tg);
    }
    const id = await IdModel.findById(sw);
    return id && UserModel.findById(id.tg);
};

export async function updateUserName(id: number, name: string) {
    const user = await UserModel.findById(id);
    if (user) {
        user.name = name;
        user.save();
    }
}

function createUserDocument(user: User): UserDocument {
    const doc = new UserModel({
        _id: user.id.tg,
        name: user.name,
        swToken: user.token
    });
    doc.isNew = false;
    return doc;
};

function createIdDocument(id: Id): IdDocument {
    const doc = new IdModel({
        _id: id.sw,
        tg: id.tg
    });
    doc.isNew = false;
    return doc;
};
