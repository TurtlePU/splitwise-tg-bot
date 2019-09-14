declare interface Locale {
    name: string;
    start: {
        text(name: string, authLink?: string): string;
    };
    help: {
        text(): string;
    };
    redirect: {
        text(): string;
    };
    auth: {
        text(authLink: string): string;
    };
    noauth: {
        text(authLink: string): string;
    };
    anon: {
        text(): string;
    };
}
