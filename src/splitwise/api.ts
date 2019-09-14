import { get } from './core';

export function friends(token: string) {
    return get('get_friends', token);
}
