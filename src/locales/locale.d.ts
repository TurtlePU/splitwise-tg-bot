declare interface Locale {
    localeName: string;
    useAuthLink(authLink: string): void;
    start(name: string, authed: boolean): string;
    help: string;
    redirect: string;
    auth(): string;
    noAuth(): string;
    anon: string;
    onToken: string;
    onTokenSaved: string;
}
