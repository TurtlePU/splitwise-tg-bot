import { get } from './core';

export function expenses(token: string) {
    return get('get_expenses', token);
}
