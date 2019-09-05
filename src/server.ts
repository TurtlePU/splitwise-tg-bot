import 'module-alias/register';

import http from 'http';

import startBot from '@bot';

import { botUrl, callbackUrl, startServer } from './express';
import { authorizeUrl, startOAuth, OAuthStartOptions } from './splitwise/oauth'

const server = Object.freeze({
    port: +(process.env.PORT || 8080),
    url: process.env.APP_URL || 'none'
});

const splitwiseOAuthOptions: OAuthStartOptions = Object.freeze({
    consumer: {
        key: process.env.CONSUMER_KEY || 'none',
        secret: process.env.CONSUMER_SECRET || 'none'
    },
    serviceUrls: {
        base: process.env.SPLITWISE_BASE_URL || 'none',
        auth: process.env.SPLITWISE_AUTH_URL || 'none',
        token: process.env.SPLITWISE_TOKEN_URL || 'none'
    },
    callbackUrl: callbackUrl(server.url)
});

const bot = Object.freeze({
    token: process.env.TG_TOKEN || 'none',
    name: process.env.BOT_NAME || 'none'
});

const mongoUri = process.env.MONGODB_URI || 'none';

console.log('\n= SERVER CONSTANTS =\n', server);
console.log('\n= SPLITWISE CONSTANTS =\n', splitwiseOAuthOptions);
console.log('\n= BOT CONSTANTS =\n', bot);
console.log('\n= MONGO URI =\n', mongoUri);

(async function start() {
    startOAuth(splitwiseOAuthOptions);
    const botWebhook = await startBot({
        authLink: authorizeUrl(),
        token: bot.token, url: botUrl(server.url)
    });
    await startServer({ port: server.port, botName: bot.name, botWebhook });
    console.log(`Listening!`);
})();

setInterval(() => http.get(`http://${server.url}`), 1000 * 60 * 15);
