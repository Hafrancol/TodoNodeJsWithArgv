// We use the yargs library to use to read arguments in terminal
export let argv = require('yargs/yargs')(process.argv.slice(2))
    .options({
        'a': {
            alias: 'add',
            demandOption: true,
            default: 'false',
            describe: 'x marks the spot',
            type: 'string'
        },
        't': {
            alias: 'task',
            demandOption: true,
            default: 'empthy',
            describe: 'x marks the spot',
            type: 'string'
        }
    })
    .argv
;

