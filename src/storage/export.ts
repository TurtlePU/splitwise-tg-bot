import Mongoose from 'mongoose';

export { IUser, Id } from './user';
import { IUser, User, IdModel, Id } from './user';

export function startStorage(mongoUri: string) {
    return Mongoose.connect(mongoUri);
};

export async function saveUser(user: IUser, splitwiseId: number) {
    await Promise.all([
        IdModel.deleteOne({ tg: user._id }),
        IdModel.deleteOne({ sw: splitwiseId })
    ]);
    await Promise.all([
        new User(user).save(),
        new IdModel({ tg: user._id, sw: splitwiseId }).save()
    ]);
};

export async function getUserById(id: Partial<Id>) {
    if (!id.sw && !id.tg) {
        return null;
    }
    if (id.tg) {
        return User.findById(id.tg);
    }
    const doc = await IdModel.findOne(id);
    if (!doc) {
        return null;
    }
    return User.findById(doc.tg);
};
