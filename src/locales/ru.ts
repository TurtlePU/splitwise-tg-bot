let link: string;

const locale: Locale = Object.freeze({
    localeName: 'ru',
    useAuthLink: (authLink) => link = authLink,

    start: (name, authed) => authed
        ?
`Снова привет, ${name}!
Ты уже вошёл в Splitwise. Чтобы узнать, как мной управлять, введи /help.`
        :
`Привет, ${name}!
Прежде чем начать работу, войди в Splitwise [по этой ссылке](${link}).`,

    help:
`Вот список моих команд:

/start — начало работы.
/help — показать это сообщение.
/auth — перезайти в Splitwise.
/stats — показать расходы.`,

    redirect:
`Вернуться к боту`,

    auth: () =>
`Ссылка для входа в Splitwise: [тык](${link}).`,

    noAuth: () =>
`Сначала войди в Splitwise: [тык](${link}).`,

    anon:
`Прости, но я не знаю, кто ты.`,

    onToken:
`Обрабатываем токен...`,

    onTokenSaved:
`Токен сохранён. Список команд доступен через /help.`,

    stats: (friends: Friend[]) => {
        if (friends.length) {
            return friends
                .map(friend => {
                    return friend.balance
                        .map(debt =>
                            `${debt.amount > 0 ? '+' : ''}${debt.amount} ${debt.currency_code}`)
                        .reduce((acc, curr) => `${acc}\n\t${curr}`, `${friend.name}:`)
                })
                .reduce((acc, curr) => `${acc}\n\n${curr}`, `С кем вы связаны:`);
        } else return `Долгов нет.`;
    }
});

export default locale;
