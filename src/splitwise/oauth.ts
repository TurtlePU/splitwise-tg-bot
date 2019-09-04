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

export function authorizeUrl() {
    return authUrl;
}

export function startOAuth({ consumer, serviceUrls, callbackUrl }: OAuthStartOptions) {
    client = new OAuth.OAuth2(
        consumer.key, consumer.secret,
        serviceUrls.base, serviceUrls.auth, serviceUrls.token
    );
    authUrl = client.getAuthorizeUrl({
        redirect_uri: callbackUrl,
        response_type: 'code'
    });
}
