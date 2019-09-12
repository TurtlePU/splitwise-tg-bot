import { Command } from './command';

import auth from './auth';
import start from './start';
import help from './help';
import stats from './stats';

const commands: Command[] = [ auth, start, help, stats ];

export default commands;
