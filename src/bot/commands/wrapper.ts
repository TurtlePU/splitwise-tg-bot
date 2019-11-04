import { Command, CommandProto } from "./command";

export function makeSimpleCommand(command: CommandProto<{}>): Command<{}> {
    return makeCommand({}, command);
};

export function makeCommand<T>(requirements: T, command: CommandProto<T>): Command<T> {
    return { ...command, requirements };
};
