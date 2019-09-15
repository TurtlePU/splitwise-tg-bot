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

export async function saveUser(user: User) {
    return Promise.all([
        (await createUserDocument(user)).save(),
        (await createIdDocument(user.id)).save()
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

async function createUserDocument(user: User): Promise<UserDocument> {
    const doc = new UserModel({
        _id: user.id.tg,
        name: user.name,
        swToken: user.token
    });
    doc.isNew = !await UserModel.findById(doc.id);
    return doc;
};

async function createIdDocument(id: Id): Promise<IdDocument> {
    const doc = new IdModel({
        _id: id.sw,
        tg: id.tg
    });
    doc.isNew = !await IdModel.findById(doc.id);
    return doc;
};
