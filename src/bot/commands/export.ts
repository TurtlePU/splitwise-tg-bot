import start from './start';
import help from './help';

export default [
    { regexp: /\/start/, callback: start },
    { regexp: /\/help/, callback: help }
];
