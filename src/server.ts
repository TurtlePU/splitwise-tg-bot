import startBot from './bot/main';

const token = process.env.TG_TOKEN || 'none';
const port = +(process.env.PORT || 8080);
const authLink = process.env.AUTH_LINK || 'none';

console.log(`
token: ${token},
port: ${port},
authLink: ${authLink}
`);

startBot({ token, port, authLink });
