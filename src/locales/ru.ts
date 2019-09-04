const locale: Locale = {
    name: 'ru',
    start: {
        text: (name: string, authLink?: string) => {
            if (authLink) {
                return `Привет, ${name}!\n` +
                    `Прежде чем начать работу, войди в Splitwise [по этой ссылке](${authLink}).`;
            } else {
                return `Снова привет, ${name}!\n` +
                    `Ты уже вошёл в Splitwise. Чтобы узнать, как мной управлять, введи /help.`;
            }
        }
    },
    help: {
        text: () =>
            `Вот список моих команд:\n\n` +
            `/start — начало работы.\n` +
            `/help — показать это сообщение.`
    },
    redirect: {
        text: () => `Вернуться к боту`
    }
};

export default locale;
