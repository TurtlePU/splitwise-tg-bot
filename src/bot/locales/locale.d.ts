declare interface Locale {
    name: string;
    start: {
        text(name: string, authLink?: string): string;
    };
    help: {
        text(): string;
    };
}
