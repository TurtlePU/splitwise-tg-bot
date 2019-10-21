import { Command } from './command';

const commands: Command<any>[] = [
    require('./auth').default,
    require('./help').default,
    require('./start').default,
    require('./stats').default,
    require('./token').default
];

export default commands;
