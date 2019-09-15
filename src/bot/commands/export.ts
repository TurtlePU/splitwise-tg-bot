import { Command } from './command';

const commands: Command[] = [
    require('./auth'),
    require('./help'),
    require('./start'),
    require('./stats'),
    require('./token')
];

export default commands;
