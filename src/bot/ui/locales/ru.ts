const locale: Locale = {
    start: {
        text: (name: string, authLink: string) =>
            `Привет, ${name}!\n` +
            `Прежде чем начать работу, войди в Splitwise по этой ссылке: ${authLink}`
    },
    help: {
        text: () =>
            `Вот список моих команд:\n\n` +
            `/start — начало работы.\n` +
            `/help — показать это сообщение.`
    }
};

export default locale;
