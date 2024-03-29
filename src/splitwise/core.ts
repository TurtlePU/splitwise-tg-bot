import OAuth from 'oauth';

export type OAuthStartOptions = {
    consumer: {
        key: string;
        secret: string;
    };
    serviceUrls: {
        base: string;
        auth: string;
        token: string;
    };
    callbackUrl: string;
};

var client: OAuth.OAuth2;
var authUrl: string;
var baseUrl: string;
var clbUrl: string;
var version: string = '3.0';

export function authorizeUrl() {
    return authUrl;
};

export function setApiVersion(apiVersion: string) {
    version = apiVersion;
};

export function startOAuth({ consumer, serviceUrls, callbackUrl }: OAuthStartOptions) {
    baseUrl = serviceUrls.base;
    client = new OAuth.OAuth2(
        consumer.key, consumer.secret,
        baseUrl, serviceUrls.auth, serviceUrls.token
    );
    authUrl = client.getAuthorizeUrl({
        redirect_uri: callbackUrl,
        response_type: 'code'
    });
    clbUrl = callbackUrl;
};

const tokens = new Set<string>();

export function retrieveToken(code: string) {
    return new Promise((resolve: (value: string) => void, reject: (reason: any) => void) => {
        client.getOAuthAccessToken(code,
            {
                redirect_uri: clbUrl,
                grant_type: 'authorization_code'
            },
            (err, accessToken, _, result) => {
                if (err || result.error) {
                    reject(err || result.error);
                } else {
                    tokens.add(accessToken);
                    resolve(accessToken);
                }
            }
        );
    });
};

export function redeemToken(token: string) {
    return tokens.delete(token);
};

export function get(request: string, token: string) {
    return new Promise((
            resolve: (result: any) => void,
            reject: (reason: { statusCode: number, data?: any }) => void) => {
        client.get(`${baseUrl}/api/v${version}/${request}`, token, (err, result) => {
            if (err || !result) {
                reject(err || new Error('result is null'));
            } else {
                resolve(JSON.parse(result as string));
            }
        });
    });
};
