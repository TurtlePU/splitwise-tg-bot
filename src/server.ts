import 'module-alias/register';

import http from 'http';

import startBot from './bot/main';
import startServer, { authLink, botUrl } from './express';

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
        authLink: id => authLink(url, id),
        token, url: botUrl(url)
    });
    await startServer({ port, botWebhook });
    console.log(`Listening!`);
})();

setInterval(() => http.get(`http://${url}`), 1000 * 60 * 15);
