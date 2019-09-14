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
    locales.forEach(locale => locale.useAuthLink(link));
}
