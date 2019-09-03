import 'module-alias/register';

import http from 'http';

import startBot from './bot/main';
import startServer, { botUrl } from './express';

const port = +(process.env.PORT || 8080);
const token = process.env.TG_TOKEN || 'none';
const url = process.env.APP_URL || 'none';

console.log(`
port: ${port}
token: ${token}
url: ${url}
`);

(async function start() {
    const botWebhook = await startBot({
        authLink: 'https://ya.ru',
        token, url: botUrl(url)
    });
    await startServer({ port, botWebhook });
    console.log(`Listening!`);
})();

setInterval(() => http.get(`http://${url}`), 1000 * 60 * 15);
