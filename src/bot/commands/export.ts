import { Command } from './command';

import auth from './auth';
import start from './start';
import help from './help';

const commands: Command[] = [ auth, start, help ];

export default commands;
