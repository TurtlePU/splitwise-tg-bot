import { get } from './core';

export type User = {
    id: number;
    first_name: string;
    last_name?: string;
};

export type Friend = User & {
    balance: Debt[];
};

export async function friends(token: string): Promise<Friend[]> {
    return (await get('get_friends', token)).friends;
};

export async function me(token: string): Promise<User> {
    return (await get('get_current_user', token)).user;
};
