export type User = { username?: string, first_name: string, last_name?: string };

export function getName({ username, first_name, last_name }: User) {
    return username ? `@${username}` : `${first_name}${last_name ? ` ${last_name}` : ''}`;
};
