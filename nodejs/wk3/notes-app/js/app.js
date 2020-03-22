/****************************************************** */
// Loading Core Modules
/****************************************************** */
const chalk  = require('chalk'); 
/****************************************************** */
// Loading NPM Modules 
/****************************************************** */
const yargs  = require('yargs'); 
/****************************************************** */
// Loading Custom Modules 
/****************************************************** */
const notes = require('./notes.js'); // this is a local file
 





/***********Create Add Command********************** */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        },
        body : {
            describe : 'Body of the Note',
            demandOption : true, 
            type:'string' 
        }
    },
    handler: (argv) => { 
       notes.addNote(argv.title,argv.body)
    } 
}) 

/***********Create Remove Command********************** */
yargs.command({
    command: 'remove',
    describe: 'remove a note', 
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        } 
    },
    handler: (argv) => { 
       notes.removeNote(argv.title);
    } 
} )

/***********Create List Command********************** */
yargs.command({
    command: 'list',
    describe: 'list the notes', 
    handler() { 
        notes.listNote();
     } 
 })

 /***********Create Read Command********************** */
yargs.command({
    command: 'read',
    describe: 'read the notes', 
    handler() { 
        notes.listNote();
    },
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        } 
    },
    handler: (argv) => { 
       notes.readNote(argv.title);
    } 
 })


/***********Create Change Command********************** */
yargs.command({
    command: 'change',
    describe: 'Change a Note',  
    builder : {
        title :{
            describe:  'Note  Title',
            demandOption : true,
            type:'string' 
        },
        num :{
            describe:  'Change  Title (1) or Body (2)',
            demandOption : true,
            type:'string' 
        }, 
        text:{
            describe:  'Text to change to be made',
            demandOption : true,
            type:'string' 
        }
    },
    handler: (argv) => { 
       notes.changeNote(argv.title,argv.num,argv.text);
    }
})
yargs.parse();



