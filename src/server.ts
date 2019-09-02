import 'module-alias/register';

import startBot from './bot/main';

const authLink = process.env.AUTH_LINK || 'https://ya.ru';
const port = +(process.env.PORT || 8080);
const token = process.env.TG_TOKEN || 'none';
const url = process.env.APP_URL || 'none';

console.log(`
authLink: ${authLink}
port: ${port}
token: ${token}
url: ${url}
`);

startBot({ authLink, port, token, url });
