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
    const friends: Friend[] = (await get('get_friends', token)).friends;
    console.log(friends);
    return friends.map(fix_empty_balances);
};

export async function me(token: string): Promise<User> {
    return (await get('get_current_user', token)).user;
};

function fix_empty_balances(friend: Friend): Friend {
    const balance = friend.balance.filter(debt => debt.amount != 0.0);
    return { ...friend, balance };
}
