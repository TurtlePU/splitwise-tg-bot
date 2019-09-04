import ru from './ru';

const locales: Locale[] = [ ru ];

export default function getLocaledUi(localeCode: string | undefined = ''): Locale {
    let locale = locales.find(({ name }) => localeCode.includes(name));
    if (locale) {
        return locale;
    } else {
        return ru;
    }
}
