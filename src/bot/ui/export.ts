import ru from './locales/ru';

const locales = [
    { name: 'ru', locale: ru}
];

export default function getLocaledUi(locale: string | undefined = ''): Locale {
    let loc = locales.find(({ name }) => locale.includes(name));
    if (loc) {
        return loc.locale;
    } else {
        return ru;
    }
}
