import ru from './ru';

const locales: Locale[] = [ ru ];

export function getLocaledUi(localeCode = ''): Locale {
    let locale = locales.find(({ localeName }) => localeCode.includes(localeName));
    if (locale) {
        return locale;
    } else {
        return ru;
    }
}

export function useAuthLink(link: string) {
    locales.forEach(locale => {
        locale.useAuthLink(link);

        const oldStart = locale.start.bind(locale);
        locale.start = (name, authed) => oldStart(shield(name), authed);

        const oldStats = locale.stats.bind(locale);
        locale.stats = friends => {
            const newFrends = friends.map(friend => {
                return {
                    ...friend, name: shield(friend.name)
                };
            });
            return oldStats(newFrends);
        };
    });
}

function shield(str: string) {
    return str.replace('_', '\\_');
}
