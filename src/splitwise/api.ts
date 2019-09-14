import { get } from './core';

export type User = {
    id: number;
};

export function friends(token: string) {
    return get('get_friends', token);
}

export async function me(token: string): Promise<User> {
    return (await get('get_current_user', token)).user;
}
