/******************** Load Core Modules Here **********************/
/******************** Load NPM Modules Here ***********************/
const yargs = require('yargs'); // npm i yargs@13.2.2 ... @ is for loading most current version
/******************** Load Custom Modules Here ********************/
const words = require('./words'); // this is a local file
/******************** End of Modules ******************************/

// Create viewDef Command
yargs.command({
    command: 'viewDef',
    describe: 'Displays the Definition of a Word',
    builder: {
        word: {
            describe: 'Word in Dictionary',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        words.viewWord(argv.word);
    }
})

// Create listWrds Command
yargs.command({
    command: 'listWrds',
    describe: 'List all the Words in the Dictionary',
    handler () {
        words.listWords();
    }
})

// Create addWrd Command
yargs.command({
    command: 'addWrd',
    describe: 'Add a New Word to Dictionary',
    builder: {
        word: {
            describe: 'Word to be Added',
            demandOption: true,
            type: 'string'
        },
        def: {
            describe: 'Definition of Word Added',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        words.addWord(argv.word, argv.def);
    }
})

// Create addDef Command
yargs.command({
    command: 'addDef',
    describe: 'Add a New Definition to a Word',
    builder: {
        word: {
            describe: 'Word to add Definition to',
            demandOption: true,
            type: 'string'
        },
        def: {
            describe: 'Definition to be Added',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        words.addDef(argv.word, argv.def);
    }
})

// Create chgWrd Command
yargs.command({
    command: 'chgWrd',
    describe: 'Change a Word',
    builder: {
        word: {
            describe: 'Word to be Change',
            demandOption: true,
            type: 'string'
        },
        newWrd: {
            describe: 'Change to be made',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        words.changeWord(argv.word, argv.newWrd);
    }
})

// Create chgDef Command
yargs.command({
    command: 'chgDef',
    describe: 'Change a Definition',
    builder: {
        word: {
            describe: 'Word whose Definition will be Changed',
            demandOption: true,
            type: 'string'
        },
        defNum: {
            describe: 'Which Definition needs to be Changed',
            demandOption: true,
            type: 'number'
        },
        newDef: {
            describe: 'Change to be made',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        words.changeDef(argv.word, argv.defNum, argv.newDef);
    }
})

// Create delWrd Command
yargs.command({
    command: 'delWrd',
    describe: 'Delete a Word from the Dictionary',
    builder: {
        word: {
            describe: 'Word to be Deleted',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        words.deleteWord(argv.word)
    }
})

// Create delDef Command
yargs.command({
    command: 'delDef',
    describe: 'Delete a Definition from a Word',
    builder: {
        word: {
            describe: 'Word whose Definition will be Deleted',
            demandOption: true,
            type: 'string'
        },
        defNum: {
            describe: 'Which Definition needs to be Deleted',
            demandOption: true,
            type: 'number'
        }
    },
    handler (argv) {
        words.deleteDef(argv.word, argv.defNum)
    }
})

yargs.parse();