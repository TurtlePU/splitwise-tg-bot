import Mongoose from 'mongoose';

export { IUser, Id } from './user';
import { IUser, User, IdModel, Id } from './user';

export function startStorage(mongoUri: string) {
    return Mongoose.connect(mongoUri);
};

export async function saveUser(user: IUser) {
    await Promise.all([
        IdModel.deleteOne({ tg: user._id.tg }),
        IdModel.deleteOne({ sw: user._id.sw })
    ]);
    await Promise.all([
        User.findByIdAndUpdate(user._id, new User(user), { upsert: true }),
        new IdModel(user._id).save()
    ]);
};

export async function getUserById(id: Partial<Id>) {
    if (!id.sw && !id.tg) {
        return null;
    }
    const doc = await IdModel.findOne(id);
    console.log(doc);
    if (!doc) {
        return null;
    }
    id = { sw: doc.sw, tg: doc.sw };
    return User.findById(id);
};
