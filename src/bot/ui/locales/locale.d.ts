declare interface Locale {
    start: {
        text(name: string, authLink?: string): string;
    };
    help: {
        text(): string;
    };
}
